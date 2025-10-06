# Innoweb.uz - To'liq O'rnatish Qo'llanmasi

Bu qo'llanma loyihani noldan ishga tushirish uchun barcha kerakli qadamlarni o'z ichiga oladi.

## Tizim talablari

- **Python** 3.9+ (Backend uchun)
- **Node.js** 18+ (Frontend uchun)
- **PostgreSQL** (Neon yoki mahalliy)
- **Git**

---

## 1. Backend O'rnatish (FastAPI)

### 1.1. Papkaga o'tish
```powershell
cd e:\loyihalarim\Innoweb-uz\innoweb_backend
```

### 1.2. Virtual muhitni aktivlashtirish
```powershell
# Agar .venv papkasi mavjud bo'lmasa, yarating:
python -m venv .venv

# Virtual muhitni aktivlashtirish:
.venv\Scripts\Activate.ps1
```

**Muhim:** Agar PowerShell script execution xatosi bo'lsa:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 1.3. Kerakli paketlarni o'rnatish
```powershell
pip install -r requirements.txt
```

### 1.4. .env faylini tekshirish

`.env` fayli allaqachon sozlangan. Quyidagi kalitlar to'ldirilganligini tekshiring:

- ✅ `DATABASE_URL` - Neon PostgreSQL
- ✅ `GEMINI_API_KEY` - Google Gemini AI
- ✅ `UNSPLASH_ACCESS_KEY` - Unsplash rasmlar
- ✅ `API_KEY` - Backend xavfsizlik kaliti
- ✅ `TELEGRAM_BOT_TOKEN` - Telegram bot
- ✅ `TELEGRAM_CHANNEL_ID` - Telegram kanal
- ✅ `CRON_SECRET` - CRON xavfsizlik kaliti
- ✅ `WS_API_KEY` - WebSim API kaliti

### 1.5. Prisma generatsiya va migratsiya
```powershell
# Prisma Client'ni generatsiya qilish
prisma generate

# Ma'lumotlar bazasiga schema'ni push qilish
prisma db push
```

### 1.6. Backend serverni ishga tushirish
```powershell
uvicorn main:app --reload
```

Backend `http://127.0.0.1:8000` manzilida ishga tushadi.

**Test qilish:**
- API dokumentatsiya: http://127.0.0.1:8000/docs
- Asosiy endpoint: http://127.0.0.1:8000/

---

## 2. Frontend O'rnatish (Next.js)

### 2.1. Papkaga o'tish
Yangi terminal oching va:
```powershell
cd e:\loyihalarim\Innoweb-uz\innoweb-frontend
```

### 2.2. Node paketlarini o'rnatish
```powershell
npm install
```

### 2.3. .env.local faylini yaratish

`innoweb-frontend` papkasida `.env.local` fayl yarating va quyidagilarni qo'shing:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
API_KEY=innoweb_secret_key_12345
```

**PowerShell orqali yaratish:**
```powershell
@"
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
API_KEY=innoweb_secret_key_12345
"@ | Out-File -FilePath .env.local -Encoding utf8
```

### 2.4. Frontend serverni ishga tushirish
```powershell
npm run dev
```

Frontend `http://localhost:3000` manzilida ishga tushadi.

---

## 3. Loyihani Test Qilish

### 3.1. Backend test

Yangi PowerShell terminal oching va:

```powershell
# Barcha postlarni olish (API Key shart emas)
curl http://127.0.0.1:8000/posts

# AI yordamida yangi post yaratish (API Key kerak)
$headers = @{
    "X-API-Key" = "innoweb_secret_key_12345"
    "Content-Type" = "application/json"
}

$body = @{
    topic = "Sun'iy intellekt va kelajak"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/generate" -Method POST -Body $body -Headers $headers
```

### 3.2. Frontend test

Brauzerda quyidagi sahifalarni oching:

- **Asosiy sahifa:** http://localhost:3000
- **Blog sahifasi:** http://localhost:3000/blog
- **Admin panel:** http://localhost:3000/admin/posts
- **Yangi post yaratish:** http://localhost:3000/admin/posts/new

---

## 4. Muammolarni Hal Qilish

### Backend xatoliklari

**Xatolik:** `ModuleNotFoundError: No module named 'prisma'`
```powershell
pip install prisma==0.15.0
prisma generate
```

**Xatolik:** `DATABASE_URL not found`
- `.env` faylida `DATABASE_URL` to'ldirilganligini tekshiring

**Xatolik:** `Gemini API error`
- `GEMINI_API_KEY` to'g'ri ekanligini tekshiring
- https://makersuite.google.com/app/apikey da yangi kalit yarating

### Frontend xatoliklari

**Xatolik:** `ECONNREFUSED 127.0.0.1:8000`
- Backend server ishga tushganligini tekshiring
- `http://127.0.0.1:8000` ochiq ekanligini tekshiring

**Xatolik:** `npm install` fails
```powershell
# Node modules tozalash va qayta o'rnatish
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Database xatoliklari

**Xatolik:** Prisma schema synced emas
```powershell
prisma generate
prisma db push --force-reset  # Faqat development uchun!
```

---

## 5. Production Deployment

### 5.1. Backend (Render.com)

1. GitHub'ga push qiling
2. Render.com'da yangi Web Service yarating
3. Repository'ni ulang
4. Environment Variables qo'shing (`.env` dagi barcha kalitlar)
5. Deploy qiling

**Build Command:**
```bash
pip install -r requirements.txt && prisma generate
```

**Start Command:**
```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

### 5.2. Frontend (Vercel)

1. GitHub'ga push qiling
2. Vercel.com'da "Import Project" bosing
3. Repository'ni tanlang
4. Environment Variables qo'shing:
   - `NEXT_PUBLIC_API_URL=https://innoweb-api.onrender.com`
   - `API_KEY=innoweb_secret_key_12345`
5. Deploy qiling

---

## 6. Xususiyatlar

### Backend API

- ✅ **CRUD operatsiyalar** - Post yaratish, o'qish, yangilash, o'chirish
- ✅ **AI Blog Generator** - Gemini AI yordamida avtomatik post yaratish
- ✅ **SEO Optimization** - Avtomatik SEO metadata generatsiya
- ✅ **Unsplash Integration** - Yuqori sifatli rasmlar
- ✅ **Telegram Bot** - Marketing xabarlari yuborish
- ✅ **CRON Jobs** - Avtomatik post yaratish (har 24 soatda)
- ✅ **API Key Security** - Himoyalangan endpoint'lar

### Frontend

- ✅ **Next.js 15** - Server Components va App Router
- ✅ **TailwindCSS** - Modern UI styling
- ✅ **shadcn/ui** - Component library
- ✅ **Admin Panel** - Post yaratish va tahrirlash
- ✅ **Responsive Design** - Mobil va desktop uchun
- ✅ **SEO Optimized** - Meta tags va strukturlangan data

---

## 7. Keyingi Qadamlar

1. **Database Backup** - Muntazam backup strategiyasini sozlang
2. **Monitoring** - Error tracking (Sentry) qo'shing
3. **Analytics** - Google Analytics yoki Plausible qo'shing
4. **CDN** - Static assets uchun CDN sozlang
5. **SSL Certificate** - Production domain uchun HTTPS

---

## Yordam va Qo'llab-quvvatlash

**Dokumentatsiya:**
- Backend: `innoweb_backend/README.md`
- Frontend: `innoweb-frontend/README.md`
- Deployment: `innoweb_backend/DEPLOYMENT.md`

**Foydali Linklar:**
- FastAPI Docs: https://fastapi.tiangolo.com/
- Next.js Docs: https://nextjs.org/docs
- Prisma Docs: https://www.prisma.io/docs
- Gemini AI: https://ai.google.dev/

---

**Innoweb.uz** © 2025 - Barcha huquqlar himoyalangan
