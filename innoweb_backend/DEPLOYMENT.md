# 🚀 Render.com ga Deployment Qo'llanmasi

Bu qo'llanma Innoweb.uz Backend API'ni Render.com platformasiga joylashtirish uchun mo'ljallangan.

## 📋 Tayyorgarlik

### 1. Loyihani GitHub'ga yuklash

```bash
# Git repository yaratish
git init
git add .
git commit -m "Initial commit: Innoweb.uz Backend API"

# GitHub'dagi remote repository'ga ulash
git remote add origin https://github.com/username/innoweb-backend.git
git branch -M main
git push -u origin main
```

### 2. Kerakli fayllar tekshiruvi

Quyidagi fayllar mavjudligini tekshiring:
- ✅ `render.yaml` - Render konfiguratsiya fayli
- ✅ `requirements.txt` - Python dependencies
- ✅ `.gitignore` - Git ignore fayli
- ✅ `main.py` - FastAPI application
- ✅ `scheduler.py` - CRON job funksiyalari

## 🌐 Render.com'da Deployment

### 1. Render.com'da ro'yxatdan o'tish

1. [Render.com](https://render.com) saytiga o'ting
2. "Get Started for Free" tugmasini bosing
3. GitHub akkauntingiz bilan ro'yxatdan o'ting

### 2. Blueprint yaratish

1. Render dashboard'da "New" tugmasini bosing
2. "Blueprint" ni tanlang
3. GitHub repository'ni ulang:
   - Repository: `innoweb-backend`
   - Branch: `main`
4. "Connect" tugmasini bosing

### 3. Environment Variables sozlash

Render avtomatik ravishda `render.yaml` faylini o'qiydi. Environment variables bo'limida quyidagi qiymatlarni kiriting:

```env
GEMINI_API_KEY=AIzaSyDHwMRWmn4wRfrBkHVM8qGLx3kzO__JXqQ
UNSPLASH_ACCESS_KEY=your-unsplash-access-key-here
API_KEY=innoweb_secret_key_12345
```

**Muhim:** Haqiqiy deployment uchun yangi API key'lar yarating!

### 4. Deployment boshlash

1. "Apply" yoki "Create New Blueprint" tugmasini bosing
2. Render quyidagi xizmatlarni yaratadi:
   - **innoweb-api** (Web Service) - Asosiy API server
   - **innoweb-cron** (Cron Job) - Kunlik post yaratish
   - **innoweb-db** (PostgreSQL Database) - Ma'lumotlar bazasi

### 5. Deployment jarayonini kuzatish

1. "Events" tab'ida deployment loglarini kuzating
2. Build jarayoni 5-10 daqiqa davom etishi mumkin
3. Muvaffaqiyatli deployment'dan keyin URL olinadi

## 🔗 Deployment URL'lari

### Web Service
```
https://innoweb-api.onrender.com
```

### API Endpoints
- **Swagger UI**: `https://innoweb-api.onrender.com/docs`
- **Barcha postlar**: `https://innoweb-api.onrender.com/posts`
- **Bitta post**: `https://innoweb-api.onrender.com/posts/{id}`

## ⏰ CRON Job Sozlamalari

### Joriy sozlama
- **Vaqt**: Har kuni soat 10:00 (UTC)
- **Funksiya**: `run_job_once()` - bir martalik post yaratish
- **Mavzular**: 20+ ta oldindan tayyorlangan mavzu

### CRON schedule o'zgartirish

`render.yaml` faylida:

```yaml
# Har kuni soat 10:00 UTC
schedule: "0 10 * * *"

# Har 6 soatda
schedule: "0 */6 * * *"

# Haftada bir marta (dushanba)
schedule: "0 10 * * 1"
```

## 🧪 Test qilish

### 1. API ishlashini tekshirish

```bash
# Asosiy endpoint
curl https://innoweb-api.onrender.com/

# Barcha postlar
curl https://innoweb-api.onrender.com/posts

# Swagger UI
# Brauzerda: https://innoweb-api.onrender.com/docs
```

### 2. API Key bilan test

```bash
# PowerShell
$headers = @{
    "X-API-Key" = "innoweb_secret_key_12345"
    "Content-Type" = "application/json"
}

$body = @{
    topic = "FastAPI deployment on Render"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://innoweb-api.onrender.com/posts/generate" -Method POST -Body $body -Headers $headers
```

## 📊 Monitoring va Logs

### 1. Render Dashboard

- **Metrics**: CPU, Memory, Request count
- **Logs**: Real-time application logs
- **Events**: Deployment history

### 2. Log kategoriyalari

- **Build Logs**: Dependency installation
- **Deploy Logs**: Application startup
- **Runtime Logs**: API requests va CRON jobs

## 🔧 Troubleshooting

### Umumiy muammolar

1. **Build Failed**
   - `requirements.txt` faylini tekshiring
   - Python versiyasini tekshiring

2. **Database Connection Error**
   - Environment variables to'g'ri kiritilganini tekshiring
   - Database service ishlab turganini tekshiring

3. **CRON Job ishlamayapti**
   - `scheduler.py` da `run_job_once()` funksiyasi mavjudligini tekshiring
   - CRON logs'ni tekshiring

### Foydali buyruqlar

```bash
# Local test
uvicorn main:app --reload

# CRON job test
python -c "from scheduler import run_job_once; run_job_once()"
```

## 🎯 Production Checklist

- [ ] Yangi API key'lar yaratildi
- [ ] Environment variables xavfsiz saqlandi
- [ ] Database backup strategiyasi belgilandi
- [ ] Monitoring sozlandi
- [ ] Error handling tekshirildi
- [ ] CRON job test qilindi
- [ ] API documentation yangilandi

## 🌟 Deployment Muvaffaqiyatli!

Sizning API'ngiz endi jonli va butun dunyodan foydalanish mumkin:

**🔗 API URL**: `https://innoweb-api.onrender.com`
**📚 Documentation**: `https://innoweb-api.onrender.com/docs`
**⏰ CRON**: Har kuni soat 10:00 UTC da yangi post yaratiladi

---

**Innoweb.uz** © 2025 - Render.com'da hosting qilingan
