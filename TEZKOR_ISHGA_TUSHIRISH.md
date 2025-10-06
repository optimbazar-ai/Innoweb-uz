# Innoweb.uz - Tezkor Ishga Tushirish 🚀

Loyihani 5 daqiqada ishga tushirish uchun qisqacha qo'llanma.

---

## ✅ 1. Backend Tayyorlash

### Terminal 1 - Backend Server

```powershell
# 1. Backend papkasiga o'tish
cd e:\loyihalarim\Innoweb-uz\innoweb_backend

# 2. Virtual muhitni aktivlashtirish
.venv\Scripts\Activate.ps1

# 3. Prisma generatsiya (faqat bir marta)
prisma generate

# 4. Database migratsiya (faqat bir marta)
prisma db push

# 5. Server ishga tushirish
uvicorn main:app --reload
```

**Backend manzil:** http://127.0.0.1:8000  
**API Docs:** http://127.0.0.1:8000/docs

---

## ✅ 2. Frontend Tayyorlash

### Terminal 2 - Frontend Server

```powershell
# 1. Frontend papkasiga o'tish  
cd e:\loyihalarim\Innoweb-uz\innoweb-frontend

# 2. .env.local faylini yaratish (faqat bir marta, allaqachon yaratilgan)
# Fayl tayyor: NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

# 3. Node paketlarini o'rnatish (agar kerak bo'lsa)
npm install

# 4. Development server ishga tushirish
npm run dev
```

**Frontend manzil:** http://localhost:3000

---

## 🧪 3. Test Qilish

### Backend API Test (PowerShell)

```powershell
# Barcha postlarni olish
curl http://127.0.0.1:8000/posts

# AI yordamida yangi post yaratish
$headers = @{
    "X-API-Key" = "innoweb_secret_key_12345"
    "Content-Type" = "application/json"
}
$body = @{ topic = "Dasturlashda kelajak" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/generate" -Method POST -Body $body -Headers $headers
```

### Frontend Test

Brauzerda ochish:
- **Bosh sahifa:** http://localhost:3000
- **Blog:** http://localhost:3000/blog
- **Admin:** http://localhost:3000/admin/posts

---

## ⚙️ Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://..."         ✅ Tayyor
GEMINI_API_KEY="..."                   ✅ Tayyor
UNSPLASH_ACCESS_KEY="..."              ✅ Tayyor
API_KEY="innoweb_secret_key_12345"     ✅ Tayyor
TELEGRAM_BOT_TOKEN="..."               ✅ Tayyor
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000  ✅ Yaratildi
API_KEY=innoweb_secret_key_12345           ✅ Yaratildi
```

---

## 🔧 Muammolarni Hal Qilish

### Backend ishga tushmasa:

```powershell
# 1. Virtual muhitni qayta aktivlashtirish
.venv\Scripts\Activate.ps1

# 2. Kerakli paketlarni o'rnatish
pip install -r requirements.txt

# 3. Prisma qayta generatsiya
prisma generate
```

### Frontend ishga tushmasa:

```powershell
# 1. Node modules qayta o'rnatish
npm install

# 2. Cache tozalash
npm run build
```

### Database xatoligi:

```powershell
# Prisma schema'ni database'ga push qilish
cd e:\loyihalarim\Innoweb-uz\innoweb_backend
prisma db push
```

---

## 📝 API Endpoints

| Method | Endpoint | Tavsif | Auth |
|--------|----------|--------|------|
| GET | `/posts` | Barcha postlar | ❌ |
| GET | `/posts/{id}` | Bitta post | ❌ |
| POST | `/posts` | Post yaratish | ✅ |
| PUT | `/posts/{id}` | Post yangilash | ✅ |
| DELETE | `/posts/{id}` | Post o'chirish | ✅ |
| POST | `/posts/generate` | AI bilan yaratish | ✅ |
| POST | `/marketing/send` | Telegram xabar | ✅ |

**Auth:** `X-API-Key: innoweb_secret_key_12345`

---

## 📚 Qo'shimcha Ma'lumot

To'liq qo'llanma: `SETUP_GUIDE.md`  
Backend README: `innoweb_backend/README.md`  
Deployment: `innoweb_backend/DEPLOYMENT.md`

---

**Tayyor!** Endi loyiha ishlaydi 🎉
