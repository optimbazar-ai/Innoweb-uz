"""
Gemini AI bilan ishlash uchun servis moduli
Blog postlari va SEO ma'lumotlarini avtomatik generatsiya qilish
"""

import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

# .env faylidan o'zgaruvchilarni yuklash
load_dotenv()

# Gemini API'ni sozlash
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

# Model tanlash
model = genai.GenerativeModel('gemini-pro')


async def generate_blog_post(topic: str) -> dict:
    """
    Berilgan mavzu bo'yicha blog post yaratish
    
    Args:
        topic (str): Blog post mavzusi
        
    Returns:
        dict: {
            "title": str,
            "content": str,
            "tags": list[str],
            "imageUrl": str
        }
    """
    prompt = f"""
    Siz professional blog yozuvchisisiz. Quyidagi mavzu bo'yicha to'liq va qiziqarli blog post yarating.
    
    Mavzu: {topic}
    
    Javobni qat'iy quyidagi JSON formatida bering (boshqa hech narsa qo'shmang):
    {{
        "title": "Blog post sarlavhasi (qisqa va jozibali)",
        "content": "To'liq blog post matni (kamida 500 so'z, markdown formatida, sarlavhalar, ro'yxatlar va kod bloklari bilan)",
        "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
        "imageUrl": "https://picsum.photos/1200/630"
    }}
    
    MUHIM: 
    - Content o'zbek tilida, to'liq va professional bo'lishi kerak
    - Tags mavzuga mos va foydali bo'lishi kerak
    - Faqat JSON formatida javob bering
    """
    
    try:
        response = model.generate_content(prompt)
        result_text = response.text.strip()
        
        # Markdown code block'larni olib tashlash
        if result_text.startswith("```json"):
            result_text = result_text[7:]
        if result_text.startswith("```"):
            result_text = result_text[3:]
        if result_text.endswith("```"):
            result_text = result_text[:-3]
        
        result_text = result_text.strip()
        
        # JSON'ga o'zgartirish
        blog_data = json.loads(result_text)
        
        return blog_data
    
    except json.JSONDecodeError as e:
        print(f"JSON parse xatosi: {e}")
        print(f"Javob: {result_text}")
        raise Exception(f"Gemini'dan noto'g'ri format keldi: {str(e)}")
    
    except Exception as e:
        print(f"Gemini xatosi: {e}")
        raise Exception(f"Blog post yaratishda xatolik: {str(e)}")


async def generate_seo_metadata(content: str) -> dict:
    """
    Blog post mazmunidan SEO metadata yaratish
    
    Args:
        content (str): Blog post mazmuni
        
    Returns:
        dict: {
            "seoTitle": str,
            "seoDescription": str
        }
    """
    # Content juda uzun bo'lsa, qisqartirish (Gemini uchun)
    content_preview = content[:2000] if len(content) > 2000 else content
    
    prompt = f"""
    Quyidagi blog post matni uchun SEO optimallashtirilgan metadata yarating.
    
    Blog post matni:
    {content_preview}
    
    Javobni qat'iy quyidagi JSON formatida bering (boshqa hech narsa qo'shmang):
    {{
        "seoTitle": "SEO uchun optimallashtirilgan sarlavha (60 belgigacha)",
        "seoDescription": "SEO uchun optimallashtirilgan tavsif (150-160 belgi)"
    }}
    
    MUHIM:
    - seoTitle qisqa, aniq va kalit so'zlarni o'z ichiga olsin
    - seoDescription o'quvchini jalb qiluvchi va informativ bo'lsin
    - Faqat JSON formatida javob bering
    """
    
    try:
        response = model.generate_content(prompt)
        result_text = response.text.strip()
        
        # Markdown code block'larni olib tashlash
        if result_text.startswith("```json"):
            result_text = result_text[7:]
        if result_text.startswith("```"):
            result_text = result_text[3:]
        if result_text.endswith("```"):
            result_text = result_text[:-3]
        
        result_text = result_text.strip()
        
        # JSON'ga o'zgartirish
        seo_data = json.loads(result_text)
        
        return seo_data
    
    except json.JSONDecodeError as e:
        print(f"JSON parse xatosi: {e}")
        print(f"Javob: {result_text}")
        raise Exception(f"Gemini'dan noto'g'ri format keldi: {str(e)}")
    
    except Exception as e:
        print(f"Gemini xatosi: {e}")
        raise Exception(f"SEO metadata yaratishda xatolik: {str(e)}")
