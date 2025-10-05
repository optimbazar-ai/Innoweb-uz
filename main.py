from fastapi import FastAPI, HTTPException, Depends, Request, Header
from fastapi.responses import JSONResponse
import os
from pydantic import BaseModel
from typing import List, Optional
from database import db, connect_db, disconnect_db
from ai_service import generate_blog_post, generate_seo_metadata
from image_service import get_image_by_tags
import logging
from scheduler import run_job_once
from security import get_api_key

app = FastAPI(
    title="Innoweb.uz Backend",
    description="Innoweb.uz uchun backend API",
    version="1.0.0"
)

# Logging sozlamalari
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


# Custom Exception Handlers
@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    """HTTP xatoliklari uchun JSON javob qaytarish"""
    logger.warning(f"HTTP Exception: {exc.status_code} - {exc.detail} - URL: {request.url}")
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "error": {
                "code": exc.status_code,
                "message": exc.detail,
                "type": "HTTP_ERROR"
            }
        }
    )


@app.exception_handler(500)
async def internal_server_error_handler(request: Request, exc):
    """500 xatoliklari uchun JSON javob qaytarish"""
    logger.error(f"Internal Server Error: {exc} - URL: {request.url}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "error": {
                "code": 500,
                "message": "Serverda ichki xatolik yuz berdi",
                "type": "INTERNAL_SERVER_ERROR"
            }
        }
    )


# Pydantic Models
class PostCreate(BaseModel):
    title: str
    content: str
    imageUrl: str
    tags: List[str]
    seoTitle: str
    seoDescription: str


class PostResponse(BaseModel):
    id: int
    title: str
    content: str
    imageUrl: str
    tags: List[str]
    seoTitle: str
    seoDescription: str
    createdAt: str
    updatedAt: str


class TopicRequest(BaseModel):
    topic: str

class PostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    imageUrl: Optional[str] = None
    tags: Optional[List[str]] = None
    seoTitle: Optional[str] = None
    seoDescription: Optional[str] = None


# Lifecycle Events
@app.on_event("startup")
async def startup():
    """Server ishga tushganda ma'lumotlar bazasiga ulanish"""
    logger.info("Server ishga tushmoqda...")
    await connect_db()
    logger.info("Server muvaffaqiyatli ishga tushdi.")


@app.on_event("shutdown")
async def shutdown():
    """Server o'chirilganda ma'lumotlar bazasidan uzilish"""
    logger.info("Server o'chirilmoqda...")
    await disconnect_db()
    logger.info("Server muvaffaqiyatli o'chirildi.")


# Routes
@app.get("/")
async def root():
    return {"message": "Innoweb.uz Backend ishga tushdi"}


@app.post("/cron/trigger", tags=["Cron"])
async def trigger_cron_job(x_cron_secret: str = Header(...)):
    """
    Tashqi CRON servisi uchun maxfiy endpoint.
    Faqat to'g'ri maxfiy kalit bilan ishlaydi.
    """
    cron_secret = os.getenv("CRON_SECRET")
    if not cron_secret or x_cron_secret != cron_secret:
        logger.warning(f"CRON endpoint'ga ruxsatsiz kirish urinishi")
        raise HTTPException(status_code=403, detail="Ruxsat yo'q!")

    try:
        logger.info("Tashqi CRON servisi orqali post yaratish boshlandi")
        # scheduler.py dagi bir martalik post yaratish funksiyasini chaqiramiz
        run_job_once()
        logger.info("CRON job muvaffaqiyatli yakunlandi")
        return {"status": "success", "message": "Avtomatik post yaratish vazifasi ishga tushirildi."}
    except Exception as e:
        logger.error(f"CRON job ishga tushirishda xatolik: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Vazifani bajarishda xatolik yuz berdi: {str(e)}")


@app.post("/posts", response_model=dict)
async def create_post(post: PostCreate, api_key: str = Depends(get_api_key)):
    """Yangi blog post yaratish"""
    try:
        logger.info(f"Yangi post yaratish so'rovi: {post.title}")
        new_post = await db.post.create(
            data={
                "title": post.title,
                "content": post.content,
                "imageUrl": post.imageUrl,
                "tags": post.tags,
                "seoTitle": post.seoTitle,
                "seoDescription": post.seoDescription,
            }
        )
        return {
            "success": True,
            "message": "Post muvaffaqiyatli yaratildi",
            "data": {
                "id": new_post.id,
                "title": new_post.title,
                "content": new_post.content,
                "imageUrl": new_post.imageUrl,
                "tags": new_post.tags,
                "seoTitle": new_post.seoTitle,
                "seoDescription": new_post.seoDescription,
                "createdAt": str(new_post.createdAt),
                "updatedAt": str(new_post.updatedAt),
            }
        }
    except Exception as e:
        logger.error(f"Post yaratishda xatolik: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Xatolik: {str(e)}")


@app.get("/posts", response_model=dict)
async def get_all_posts():
    """Barcha blog postlarini olish"""
    try:
        logger.info("Barcha postlarni olish so'rovi")
        posts = await db.post.find_many(
            order={"createdAt": "desc"}
        )
        return {
            "success": True,
            "count": len(posts),
            "data": [
                {
                    "id": post.id,
                    "title": post.title,
                    "content": post.content,
                    "imageUrl": post.imageUrl,
                    "tags": post.tags,
                    "seoTitle": post.seoTitle,
                    "seoDescription": post.seoDescription,
                    "createdAt": str(post.createdAt),
                    "updatedAt": str(post.updatedAt),
                }
                for post in posts
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Xatolik: {str(e)}")


@app.get("/posts/{post_id}", response_model=dict)
async def get_post_by_id(post_id: int):
    """Bitta postni ID orqali olish"""
    try:
        logger.info(f"{post_id} ID'li postni olish so'rovi")
        post = await db.post.find_unique(where={"id": post_id})
        if not post:
            logger.warning(f"{post_id} ID'li post topilmadi")
            raise HTTPException(status_code=404, detail="Post topilmadi")
        return {
            "success": True,
            "data": {
                "id": post.id,
                "title": post.title,
                "content": post.content,
                "imageUrl": post.imageUrl,
                "tags": post.tags,
                "seoTitle": post.seoTitle,
                "seoDescription": post.seoDescription,
                "createdAt": str(post.createdAt),
                "updatedAt": str(post.updatedAt),
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Xatolik: {str(e)}")


@app.put("/posts/{post_id}", response_model=dict)
async def update_post(post_id: int, post_update: PostUpdate, api_key: str = Depends(get_api_key)):
    """Mavjud postni tahrirlash"""
    try:
        logger.info(f"{post_id} ID'li postni yangilash so'rovi")
        existing_post = await db.post.find_unique(where={"id": post_id})
        if not existing_post:
            raise HTTPException(status_code=404, detail="Post topilmadi")

        update_data = post_update.dict(exclude_unset=True)
        
        if not update_data:
            raise HTTPException(status_code=400, detail="Tahrirlash uchun ma'lumot yuborilmadi")

        updated_post = await db.post.update(
            where={"id": post_id},
            data=update_data
        )

        return {
            "success": True,
            "message": "Post muvaffaqiyatli yangilandi",
            "data": {
                "id": updated_post.id,
                "title": updated_post.title,
                "content": updated_post.content,
                "imageUrl": updated_post.imageUrl,
                "tags": updated_post.tags,
                "seoTitle": updated_post.seoTitle,
                "seoDescription": updated_post.seoDescription,
                "createdAt": str(updated_post.createdAt),
                "updatedAt": str(updated_post.updatedAt),
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Xatolik: {str(e)}")


@app.delete("/posts/{post_id}", response_model=dict)
async def delete_post(post_id: int, api_key: str = Depends(get_api_key)):
    """Postni ID orqali o'chirish"""
    try:
        logger.info(f"{post_id} ID'li postni o'chirish so'rovi")
        existing_post = await db.post.find_unique(where={"id": post_id})
        if not existing_post:
            raise HTTPException(status_code=404, detail="Post topilmadi")

        await db.post.delete(where={"id": post_id})

        return {"success": True, "message": "Post muvaffaqiyatli o'chirildi"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Xatolik: {str(e)}")


@app.post("/posts/generate", response_model=dict)
async def generate_post(request: TopicRequest, api_key: str = Depends(get_api_key)):
    logger.info(f"AI yordamida post generatsiya qilish so'rovi: {request.topic}")
    """
    Gemini AI yordamida mavzu bo'yicha blog post yaratish
    
    Args:
        request: {"topic": "mavzu nomi"}
        
    Returns:
        Yaratilgan va ma'lumotlar bazasiga saqlangan post
    """
    try:
        # 1. Gemini yordamida blog post yaratish
        print(f"📝 Blog post generatsiya qilinmoqda: {request.topic}")
        blog_data = await generate_blog_post(request.topic)
        
        # 2. Unsplash'dan rasm topish
        print(f"🖼️  Rasm qidirilmoqda: {', '.join(blog_data['tags'][:3])}")
        image_url = get_image_by_tags(blog_data["tags"])
        
        # 3. SEO metadata yaratish
        print(f"🔍 SEO metadata yaratilmoqda...")
        seo_data = await generate_seo_metadata(blog_data["content"])
        
        # 4. Ma'lumotlar bazasiga saqlash
        print(f"💾 Ma'lumotlar bazasiga saqlanmoqda...")
        new_post = await db.post.create(
            data={
                "title": blog_data["title"],
                "content": blog_data["content"],
                "imageUrl": image_url,
                "tags": blog_data["tags"],
                "seoTitle": seo_data["seoTitle"],
                "seoDescription": seo_data["seoDescription"],
            }
        )
        
        print(f"✅ Post muvaffaqiyatli yaratildi! ID: {new_post.id}")
        
        return {
            "success": True,
            "message": f"'{request.topic}' mavzusida blog post Gemini AI tomonidan yaratildi",
            "data": {
                "id": new_post.id,
                "title": new_post.title,
                "content": new_post.content,
                "imageUrl": new_post.imageUrl,
                "tags": new_post.tags,
                "seoTitle": new_post.seoTitle,
                "seoDescription": new_post.seoDescription,
                "createdAt": str(new_post.createdAt),
                "updatedAt": str(new_post.updatedAt),
            }
        }
        
    except Exception as e:
        logger.error(f"AI post generatsiyasida xatolik: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Blog post yaratishda xatolik: {str(e)}")
