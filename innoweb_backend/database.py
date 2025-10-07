"""
Ma'lumotlar bazasi ulanish moduli
Prisma Client'ni ishga tushirish va boshqarish
"""

import os
from pathlib import Path
from prisma import Prisma

# Prisma binary path'ni aniqlash (Render uchun)
cache_binary = Path("/opt/render/.cache/prisma-python/binaries/5.17.0/393aa359c9ad4a4bb28630fb5613f9c281cde053/node_modules/prisma/query-engine-debian-openssl-3.0.x")
if cache_binary.exists() and not os.getenv("PRISMA_QUERY_ENGINE_BINARY"):
    os.environ["PRISMA_QUERY_ENGINE_BINARY"] = str(cache_binary)
    print(f"🔧 Prisma binary path set: {cache_binary}")

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
