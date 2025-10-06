"""
Ma'lumotlar bazasi ulanish moduli
Prisma Client'ni ishga tushirish va boshqarish
"""

from prisma import Prisma

# Prisma Client instance
db = Prisma()


async def connect_db():
    """Ma'lumotlar bazasiga ulanish"""
    if not db.is_connected():
        await db.connect()
        print("✅ Ma'lumotlar bazasiga muvaffaqiyatli ulandi")


async def disconnect_db():
    """Ma'lumotlar bazasidan uzilish"""
    if db.is_connected():
        await db.disconnect()
        print("❌ Ma'lumotlar bazasidan uzildi")
