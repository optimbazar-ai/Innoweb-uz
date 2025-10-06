"""
Unsplash API bilan ishlash uchun servis moduli
Blog postlari uchun mos rasmlarni topish
"""

import os
import requests
from dotenv import load_dotenv

# .env faylidan o'zgaruvchilarni yuklash
load_dotenv()

# Unsplash API konfiguratsiyasi
UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY")
UNSPLASH_API_URL = "https://api.unsplash.com/search/photos"

# Standart rasm (agar Unsplash'dan rasm topilmasa)
DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop"


def get_image_for_post(query: str) -> str:
    """
    Berilgan so'rov bo'yicha Unsplash'dan eng mos rasmni topish
    
    Args:
        query (str): Qidiruv so'rovi (masalan, post teglari)
        
    Returns:
        str: Rasm URL manzili
    """
    # Agar API key bo'lmasa, standart rasmni qaytarish
    if not UNSPLASH_ACCESS_KEY or UNSPLASH_ACCESS_KEY == "your-unsplash-access-key-here":
        print("⚠️ Unsplash API key topilmadi. Standart rasm ishlatiladi.")
        return DEFAULT_IMAGE_URL
    
    try:
        # Unsplash API'ga so'rov yuborish
        headers = {
            "Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"
        }
        
        params = {
            "query": query,
            "per_page": 1,
            "orientation": "landscape",
            "content_filter": "high"
        }
        
        response = requests.get(
            UNSPLASH_API_URL,
            headers=headers,
            params=params,
            timeout=10
        )
        
        # Javobni tekshirish
        if response.status_code == 200:
            data = response.json()
            
            if data.get("results") and len(data["results"]) > 0:
                # Birinchi rasmning regular URL'ini olish
                image_url = data["results"][0]["urls"]["regular"]
                print(f"✅ Unsplash'dan rasm topildi: {query}")
                return image_url
            else:
                print(f"⚠️ '{query}' bo'yicha rasm topilmadi. Standart rasm ishlatiladi.")
                return DEFAULT_IMAGE_URL
        
        elif response.status_code == 401:
            print("❌ Unsplash API key noto'g'ri. Standart rasm ishlatiladi.")
            return DEFAULT_IMAGE_URL
        
        elif response.status_code == 403:
            print("❌ Unsplash API limitga yetdi. Standart rasm ishlatiladi.")
            return DEFAULT_IMAGE_URL
        
        else:
            print(f"❌ Unsplash API xatosi: {response.status_code}. Standart rasm ishlatiladi.")
            return DEFAULT_IMAGE_URL
    
    except requests.exceptions.Timeout:
        print("⚠️ Unsplash API timeout. Standart rasm ishlatiladi.")
        return DEFAULT_IMAGE_URL
    
    except requests.exceptions.RequestException as e:
        print(f"❌ Unsplash API bilan bog'lanishda xatolik: {str(e)}")
        return DEFAULT_IMAGE_URL
    
    except Exception as e:
        print(f"❌ Kutilmagan xatolik: {str(e)}")
        return DEFAULT_IMAGE_URL


def get_image_by_tags(tags: list[str]) -> str:
    """
    Teglar ro'yxatidan foydalanib rasm topish
    
    Args:
        tags (list[str]): Teglar ro'yxati
        
    Returns:
        str: Rasm URL manzili
    """
    # Teglarni birlashtirib qidiruv so'rovi yaratish
    if not tags or len(tags) == 0:
        query = "technology programming"
    else:
        # Birinchi 3 ta tegni olish (yaxshiroq natija uchun)
        query = " ".join(tags[:3])
    
    return get_image_for_post(query)
