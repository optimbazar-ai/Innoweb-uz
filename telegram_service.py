# telegram_service.py
"""
Telegram bot integratsiyasi va xabar yuborish xizmatlari
"""

import os
import asyncio
import logging
from telegram import Bot
from telegram.error import TelegramError

# Logger sozlash
logger = logging.getLogger(__name__)


async def send_generic_message(bot, channel_id, message, photo_url=None):
    """
    Umumiy formatdagi xabar va rasmni kanalga yuboradi.
    
    Args:
        bot: Telegram Bot instance
        channel_id: Telegram kanal ID
        message: Yuborilayotgan xabar matni
        photo_url: Rasm URL (ixtiyoriy)
    """
    try:
        if photo_url:
            await bot.send_photo(
                chat_id=channel_id, 
                photo=photo_url, 
                caption=message, 
                parse_mode='Markdown'
            )
            logger.info("✅ Rasm bilan xabar Telegram kanalga yuborildi")
        else:
            await bot.send_message(
                chat_id=channel_id, 
                text=message, 
                parse_mode='Markdown'
            )
            logger.info("✅ Matnli xabar Telegram kanalga yuborildi")
            
    except TelegramError as e:
        logger.error(f"❌ Telegram API xatoligi: {e}")
        raise
    except Exception as e:
        logger.error(f"❌ Telegramga xabar yuborishda xatolik: {e}")
        raise


async def send_post_to_channel(post):
    """
    Yangi blog postni formatlab, Telegram kanalga yuboradi.
    
    Args:
        post: Blog post obyekti (Prisma model)
    """
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    channel_id = os.getenv("TELEGRAM_CHANNEL_ID")
    site_url = os.getenv("SITE_BASE_URL", "http://localhost:8000")
    
    if not bot_token or not channel_id:
        logger.warning("Telegram bot token yoki kanal ID topilmadi")
        return
    
    try:
        bot = Bot(token=bot_token)
        
        # Teglarni hashtag formatiga o'tkazish
        tags_line = " ".join([f"#{tag.strip().replace(' ', '_')}" for tag in post.tags])
        
        # Post linkini yaratish
        post_link = f"{site_url}/posts/{post.id}"
        
        # Xabar formatini yaratish
        content_preview = post.content[:250] + "..." if len(post.content) > 250 else post.content
        
        message = (
            f"🔥 **{post.title}**\n\n"
            f"{content_preview}\n\n"
            f"👉 [**Batafsil o'qish**]({post_link})\n\n"
            f"{tags_line}\n\n"
            f"📝 *Innoweb.uz Blog*"
        )
        
        await send_generic_message(bot, channel_id, message, photo_url=post.imageUrl)
        logger.info(f"Blog post '{post.title}' Telegram kanalga yuborildi")
        
    except Exception as e:
        logger.error(f"Blog postni Telegram kanalga yuborishda xatolik: {e}")
        raise


async def send_marketing_message_to_channel(message_data):
    """
    Marketing xabarini Telegram kanalga yuboradi.
    
    Args:
        message_data: Marketing xabar ma'lumotlari (text va photo)
    """
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    channel_id = os.getenv("TELEGRAM_CHANNEL_ID")
    
    if not bot_token or not channel_id:
        logger.warning("Telegram bot token yoki kanal ID topilmadi")
        return
    
    try:
        bot = Bot(token=bot_token)
        await send_generic_message(
            bot, 
            channel_id, 
            message_data["text"], 
            photo_url=message_data.get("photo")
        )
        logger.info("Marketing xabari Telegram kanalga yuborildi")
        
    except Exception as e:
        logger.error(f"Marketing xabarini yuborishda xatolik: {e}")
        raise


def validate_telegram_config():
    """
    Telegram konfiguratsiyasini tekshiradi.
    
    Returns:
        bool: Konfiguratsiya to'g'ri bo'lsa True
    """
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    channel_id = os.getenv("TELEGRAM_CHANNEL_ID")
    
    if not bot_token:
        logger.error("TELEGRAM_BOT_TOKEN environment variable topilmadi")
        return False
        
    if not channel_id:
        logger.error("TELEGRAM_CHANNEL_ID environment variable topilmadi")
        return False
        
    return True
