"""
APScheduler yordamida avtomatik vazifalarni rejalashtirgich
Har kuni yangi blog post yaratish
"""

import random
import asyncio
import os
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger
from datetime import datetime

from database import db
from ai_service import generate_blog_post, generate_seo_metadata
from image_service import get_image_by_tags
from marketing_service import MARKETING_MESSAGES, get_marketing_message
from telegram_service import send_post_to_channel, send_marketing_message_to_channel


# Oldindan tayyorlangan mavzular ro'yxati
TOPICS_LIST = [
    "Python'da web dasturlash",
    "FastAPI'da REST API yaratish",
    "Ma'lumotlar bazasi optimizatsiyasi",
    "Sun'iy intellekt va machine learning",
    "Frontend va backend integratsiyasi",
    "Docker va konteynerlashtirish",
    "Mikro-servislar arxitekturasi",
    "API xavfsizligi va autentifikatsiya",
    "Cloud computing va serverless",
    "DevOps va CI/CD",
    "React va modern JavaScript",
    "TypeScript asoslari",
    "Database migration strategiyalari",
    "Monitoring va logging best practices",
    "GraphQL vs REST API",
    "WebSocket va real-time ilovalar",
    "Pytest bilan testing",
    "Git workflow va version control",
    "Agile va Scrum metodologiyalari",
    "Code review best practices"
]


# Scheduler instance
scheduler = AsyncIOScheduler()


async def create_daily_blog_post():
    """
    Har kuni avtomatik ravishda yangi blog post yaratish
    """
    try:
        print("\n" + "="*70)
        print("🤖 AVTOMATIK POST YARATISH BOSHLANDI")
        print(f"⏰ Vaqt: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("="*70)
        
        # 1. Tasodifiy mavzu tanlash
        topic = random.choice(TOPICS_LIST)
        print(f"\n📌 Tanlangan mavzu: {topic}")
        
        # 2. Gemini AI yordamida blog post yaratish
        print(f"📝 Blog post generatsiya qilinmoqda...")
        blog_data = await generate_blog_post(topic)
        print(f"✅ Blog post yaratildi: {blog_data['title']}")
        
        # 3. Teglar asosida Unsplash'dan rasm topish
        print(f"🖼️  Rasm qidirilmoqda: {', '.join(blog_data['tags'][:3])}")
        image_url = get_image_by_tags(blog_data["tags"])
        print(f"✅ Rasm topildi: {image_url[:50]}...")
        
        # 4. SEO metadata yaratish
        print(f"🔍 SEO metadata yaratilmoqda...")
        seo_data = await generate_seo_metadata(blog_data["content"])
        print(f"✅ SEO metadata yaratildi")
        
        # 5. Ma'lumotlar bazasiga saqlash
        print(f"💾 Ma'lumotlar bazasiga saqlanmoqda...")
        
        # Database ulanishini tekshirish
        if not db.is_connected():
            await db.connect()
        
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
        
        print(f"✅ Post ma'lumotlar bazasiga saqlandi!")
        print(f"📊 Post ID: {new_post.id}")
        print(f"📰 Sarlavha: {new_post.title}")
        print(f"🏷️  Teglar: {', '.join(new_post.tags)}")
        print(f"🔗 Rasm URL: {new_post.imageUrl[:50]}...")
        print("\n" + "="*70)
        print("✅ AVTOMATIK POST YARATISH MUVAFFAQIYATLI YAKUNLANDI")
        print("="*70 + "\n")
        
    except Exception as e:
        print(f"\n❌ AVTOMATIK POST YARATISHDA XATOLIK:")
        print(f"   Xatolik: {str(e)}")
        print("="*70 + "\n")


def start_scheduler():
    """
    Scheduler'ni ishga tushirish va vazifalarni rejalashtirgich
    """
    # Har 24 soatda bir marta ishga tushadigan vazifa
    # Test uchun: interval=IntervalTrigger(minutes=1) - har daqiqa
    # Production uchun: interval=IntervalTrigger(hours=24) - har kuni
    
    scheduler.add_job(
        create_daily_blog_post,
        trigger=IntervalTrigger(hours=24),  # Har 24 soatda
        id="daily_blog_post",
        name="Kunlik blog post yaratish",
        replace_existing=True,
        next_run_time=datetime.now()  # Darhol birinchi marta ishga tushirish
    )
    
    scheduler.start()
    print("\n🚀 SCHEDULER ISHGA TUSHDI!")
    print(f"⏰ Keyingi post: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🔄 Interval: Har 24 soatda")
    print(f"📝 Mavzular soni: {len(TOPICS_LIST)}")
    print()


def stop_scheduler():
    """
    Scheduler'ni to'xtatish
    """
    if scheduler.running:
        scheduler.shutdown()
        print("🛑 Scheduler to'xtatildi")


async def create_automated_post():
    """
    Har kuni avtomatik post yoki (haftada bir) marketing xabari yaratadi.
    Dushanba kunlari marketing xabari, boshqa kunlari blog post yaratadi.
    """
    try:
        current_day = datetime.now().weekday()  # 0=Dushanba, 6=Yakshanba
        
        # Dushanba kunlari (weekday == 0) marketing xabari yuboramiz
        if current_day == 0:
            print("💡 Bugun marketing kuni! Xabar yuborilmoqda...")
            
            # Tasodifiy marketing xabarini tanlash
            msg_key = random.choice(list(MARKETING_MESSAGES.keys()))
            msg_data = get_marketing_message(msg_key)
            
            print(f"📢 Tanlangan marketing xabari: {msg_key}")
            
            # Telegram kanalga yuborish
            await send_marketing_message_to_channel(msg_data)
            
            print(f"✅ Marketing xabari '{msg_key}' muvaffaqiyatli yuborildi!")
            
        else:
            print("✍️ Bugun blog post kuni! Yangi post yaratilmoqda...")
            
            # Blog post yaratish (avvalgi logika)
            await create_daily_blog_post_with_telegram()
            
    except Exception as e:
        print(f"❌ Avtomatik vazifada xatolik: {str(e)}")
        raise


async def create_daily_blog_post_with_telegram():
    """
    Har kuni avtomatik ravishda yangi blog post yaratish va Telegram kanalga yuborish
    """
    try:
        print("\n" + "="*70)
        print("🤖 AVTOMATIK POST YARATISH BOSHLANDI")
        print(f"⏰ Vaqt: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("="*70)
        
        # 1. Tasodifiy mavzu tanlash
        topic = random.choice(TOPICS_LIST)
        print(f"\n📌 Tanlangan mavzu: {topic}")
        
        # 2. Gemini AI yordamida blog post yaratish
        print(f"📝 Blog post generatsiya qilinmoqda...")
        blog_data = await generate_blog_post(topic)
        print(f"✅ Blog post yaratildi: {blog_data['title']}")
        
        # 3. Teglar asosida Unsplash'dan rasm topish
        print(f"🖼️  Rasm qidirilmoqda: {', '.join(blog_data['tags'][:3])}")
        image_url = get_image_by_tags(blog_data["tags"])
        print(f"✅ Rasm topildi: {image_url[:50]}...")
        
        # 4. SEO metadata yaratish
        print(f"🔍 SEO metadata yaratilmoqda...")
        seo_data = await generate_seo_metadata(blog_data["content"])
        print(f"✅ SEO metadata yaratildi")
        
        # 5. Ma'lumotlar bazasiga saqlash
        print(f"💾 Ma'lumotlar bazasiga saqlanmoqda...")
        
        # Database ulanishini tekshirish
        if not db.is_connected():
            await db.connect()
        
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
        
        print(f"✅ Post ma'lumotlar bazasiga saqlandi!")
        print(f"📊 Post ID: {new_post.id}")
        print(f"📰 Sarlavha: {new_post.title}")
        print(f"🏷️  Teglar: {', '.join(new_post.tags)}")
        print(f"🔗 Rasm URL: {new_post.imageUrl[:50]}...")
        
        # 6. Telegram kanalga yuborish
        print(f"📱 Telegram kanalga yuborilmoqda...")
        await send_post_to_channel(new_post)
        print(f"✅ Post Telegram kanalga yuborildi!")
        
        print("\n" + "="*70)
        print("✅ AVTOMATIK POST YARATISH VA TELEGRAM YUBORISH YAKUNLANDI")
        print("="*70 + "\n")
        
    except Exception as e:
        print(f"\n❌ AVTOMATIK POST YARATISHDA XATOLIK:")
        print(f"   Xatolik: {str(e)}")
        print("="*70 + "\n")
        raise


def run_job_once():
    """Render CRON job uchun bir martalik vazifani bajaradi."""
    print("🚀 RENDER CRON JOB ISHGA TUSHDI!")
    asyncio.run(create_automated_post())
    print("✅ RENDER CRON JOB YAKUNLANDI!")
