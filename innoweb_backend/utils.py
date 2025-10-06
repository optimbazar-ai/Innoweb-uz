"""
Utility funksiyalar
"""
import re


def generate_slug(title: str) -> str:
    """
    Blog post title'dan SEO-friendly slug yaratadi
    
    Args:
        title: Blog post sarlavhasi
        
    Returns:
        SEO-friendly slug
        
    Example:
        "Prisma ORM - Ma'lumotlar bazasi" → "prisma-orm-malumotlar-bazasi"
    """
    # Kichik harflarga o'tkazish
    slug = title.lower()
    
    # O'zbek harflarini lotinga o'girish
    replacements = {
        'ʻ': '', 'ʼ': '', ''': '', ''': '',
        'o'': 'o', 'g'': 'g',
        'ō': 'o', 'ḡ': 'g',
    }
    for key, value in replacements.items():
        slug = slug.replace(key, value)
    
    # Maxsus belgilarni o'chirish yoki almashtirish
    slug = re.sub(r'[^\w\s-]', '', slug)
    
    # Bo'sh joylarni tire bilan almashtirish
    slug = re.sub(r'[\s_]+', '-', slug)
    
    # Bir nechta tirelarni bittaga qisqartirish
    slug = re.sub(r'-+', '-', slug)
    
    # Boshidagi va oxiridagi tirelarni olib tashlash
    slug = slug.strip('-')
    
    return slug
