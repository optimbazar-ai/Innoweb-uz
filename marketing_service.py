# marketing_service.py
"""
Marketing xabarlari shablonlari va boshqaruv funksiyalari
"""

MARKETING_MESSAGES = {
    "services_overview": {
        "photo": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070",
        "text": (
            "🚀 **Innoweb.uz bilan biznesingizni keyingi bosqichga olib chiqing!**\n\n"
            "Biz quyidagi xizmatlarni taklif qilamiz:\n"
            "✅ Veb-saytlar yaratish\n"
            "✅ Telegram botlar va chatbotlar\n"
            "✅ Biznes jarayonlarini avtomatlashtirish\n"
            "✅ AI integratsiyasi va sun'iy intellekt yechimlari\n"
            "✅ Ma'lumotlar bazasi va API yaratish\n\n"
            "💡 Batafsil ma'lumot va buyurtma uchun biz bilan bog'laning!\n"
            "📞 Telegram: @innoweb_uz"
        )
    },
    "free_consultation": {
        "photo": "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070",
        "text": (
            "💡 **Bepul konsultatsiyaga yoziling!**\n\n"
            "Biznesingiz uchun qanday raqamli yechimlar mos kelishini bilmoqchimisiz? "
            "Bugunoq bepul konsultatsiyaga yoziling va mutaxassislarimizdan javob oling!\n\n"
            "🎯 Nima olasiz:\n"
            "• Biznes tahlili\n"
            "• Texnologik yechimlar tavsiyasi\n"
            "• Loyiha narxi hisob-kitobi\n"
            "• Amalga oshirish yo'l xaritasi\n\n"
            "📅 Bugunoq bog'laning: @innoweb_uz"
        )
    },
    "portfolio_showcase": {
        "photo": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
        "text": (
            "🎨 **Bizning ishlarimizni ko'ring!**\n\n"
            "Mijozlarimiz uchun yaratgan loyihalarimizdan namunalar:\n\n"
            "🌐 **E-commerce platformalar**\n"
            "🤖 **Telegram bot yechimlari**\n"
            "📊 **CRM va boshqaruv tizimlari**\n"
            "🔗 **API va integratsiya xizmatlari**\n\n"
            "Sizning loyihangiz ham shu darajada professional bo'lishi mumkin!\n"
            "💬 Batafsil: @innoweb_uz"
        )
    },
    "technology_focus": {
        "photo": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025",
        "text": (
            "⚡ **Zamonaviy texnologiyalar bilan ishlayamiz!**\n\n"
            "🔧 **Texnologiyalarimiz:**\n"
            "• Python & FastAPI\n"
            "• React & Next.js\n"
            "• PostgreSQL & MongoDB\n"
            "• Docker & Cloud deployment\n"
            "• AI & Machine Learning\n\n"
            "🚀 Sizning loyihangiz eng so'nggi texnologiyalar asosida quriladi!\n"
            "📞 Aloqa: @innoweb_uz"
        )
    }
}


def get_marketing_message(key: str):
    """Marketing xabarini kalit so'z orqali qaytaradi"""
    return MARKETING_MESSAGES.get(key)


def get_all_marketing_keys():
    """Barcha mavjud marketing xabarlari kalitlarini qaytaradi"""
    return list(MARKETING_MESSAGES.keys())


def get_marketing_messages_count():
    """Marketing xabarlari sonini qaytaradi"""
    return len(MARKETING_MESSAGES)
