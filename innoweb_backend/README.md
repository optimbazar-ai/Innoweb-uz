# Innoweb.uz Backend

FastAPI va Gemini AI asosidagi blog platformasi backend servisi.

## Xususiyatlar

✅ FastAPI framework  
✅ Neon PostgreSQL database (Prisma ORM)  
✅ Gemini AI integratsiyasi  
✅ Blog postlari CRUD operatsiyalari  
✅ AI-powered blog post generatsiyasi  
✅ Avtomatik SEO metadata yaratish  
✅ Unsplash API integratsiyasi (rasmlar)  
✅ APScheduler bilan avtomatik CRON jobs  
✅ Har 24 soatda avtomatik yangi post yaratish  
✅ API Key bilan xavfsizlik himoyasi  
✅ To'liq CRUD operatsiyalari (Create, Read, Update, Delete)  
✅ Logging va error handling  

## O'rnatish

### 1. Virtual muhitni yaratish va aktivlashtirish

```powershell
# Papkaga kirish
cd e:\loyihalarim\Innoweb-uz\innoweb_backend

# Virtual muhitni aktivlashtirish
.venv\Scripts\Activate.ps1
```

### 2. Kerakli paketlarni o'rnatish

```powershell
uv pip install -r requirements.txt
```

### 3. .env faylini sozlash

`.env` faylida quyidagi o'zgaruvchilarni to'ldiring:

```env
DATABASE_URL="postgresql://user:password@host/database"
GEMINI_API_KEY="your-gemini-api-key"
UNSPLASH_ACCESS_KEY="your-unsplash-access-key"
API_KEY="innoweb_secret_key_12345"
```

**API Keys:**
- **Gemini API**: https://makersuite.google.com/app/apikey
- **Unsplash API**: https://unsplash.com/oauth/applications

### 4. Prisma migratsiyasi

```powershell
prisma generate
prisma db push
```

## Serverni ishga tushirish

```powershell
uvicorn main:app --reload
```

Server `http://127.0.0.1:8000` manzilida ishga tushadi.

## API Endpointlari

### 1. Asosiy endpoint
```http
GET http://127.0.0.1:8000/
```

### 2. Barcha postlarni olish
```http
GET http://127.0.0.1:8000/posts
```

### 3. Qo'lda post yaratish (API Key kerak)
```http
POST http://127.0.0.1:8000/posts
Content-Type: application/json
X-API-Key: innoweb_secret_key_12345

{
  "title": "Blog sarlavhasi",
  "content": "Blog mazmuni",
  "imageUrl": "https://example.com/image.jpg",
  "tags": ["tag1", "tag2"],
  "seoTitle": "SEO sarlavha",
  "seoDescription": "SEO tavsif"
}
```

### 4. Bitta postni olish
```http
GET http://127.0.0.1:8000/posts/{post_id}
```

### 5. Postni yangilash (API Key kerak)
```http
PUT http://127.0.0.1:8000/posts/{post_id}
Content-Type: application/json
X-API-Key: innoweb_secret_key_12345

{
  "title": "Yangilangan sarlavha",
  "content": "Yangilangan mazmun"
}
```

### 6. Postni o'chirish (API Key kerak)
```http
DELETE http://127.0.0.1:8000/posts/{post_id}
X-API-Key: innoweb_secret_key_12345
```

### 7. AI yordamida post yaratish (API Key kerak)
```http
POST http://127.0.0.1:8000/posts/generate
Content-Type: application/json
X-API-Key: innoweb_secret_key_12345

{
  "topic": "Python'da web-sayt yaratish"
}
```

## API Xavfsizligi

### Himoyalangan Endpoint'lar

Quyidagi endpoint'lar API Key talab qiladi:
- `POST /posts` - Yangi post yaratish
- `POST /posts/generate` - AI yordamida post yaratish
- `PUT /posts/{post_id}` - Postni yangilash
- `DELETE /posts/{post_id}` - Postni o'chirish

### API Key ishlatish

Har bir himoyalangan so'rovda `X-API-Key` sarlavhasini qo'shing:

```http
X-API-Key: innoweb_secret_key_12345
```

## Test qilish

### PowerShell orqali test

```powershell
# Barcha postlarni ko'rish (API Key kerak emas)
curl http://127.0.0.1:8000/posts

# AI yordamida post yaratish (API Key kerak)
$headers = @{
    "X-API-Key" = "innoweb_secret_key_12345"
    "Content-Type" = "application/json"
}

$body = @{
    topic = "FastAPI va Gemini AI bilan blog platformasi"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/generate" -Method POST -Body $body -Headers $headers

# Postni yangilash
$updateBody = @{
    title = "Yangilangan sarlavha"
    content = "Yangilangan mazmun"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/1" -Method PUT -Body $updateBody -Headers $headers

# Postni o'chirish
Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/1" -Method DELETE -Headers $headers
```

### Swagger UI orqali test

Brauzerda quyidagi manzilni oching:
```
http://127.0.0.1:8000/docs
```

## Loyiha strukturasi

```
innoweb_backend/
├── main.py              # FastAPI application va routes
├── database.py          # Prisma database connection
├── ai_service.py        # Gemini AI integration
├── image_service.py     # Unsplash API integration
├── scheduler.py         # APScheduler CRON jobs
├── security.py          # API Key validation
├── schema.prisma        # Database schema
├── render.yaml          # Render.com deployment config
├── .env                 # Environment variables (local)
├── .gitignore          # Git ignore fayli
├── requirements.txt     # Python dependencies
├── app.log             # Application logs
├── DEPLOYMENT.md       # Deployment qo'llanmasi
└── README.md           # Documentation
```

## 🚀 Production Deployment

### Render.com'da Deployment

Loyiha Render.com platformasida deployment uchun tayyor:

1. **GitHub'ga yuklash**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Render.com'da Blueprint yaratish**:
   - [Render.com](https://render.com) da "New Blueprint" yarating
   - GitHub repository'ni ulang
   - `render.yaml` avtomatik o'qiladi

3. **Environment Variables**:
   ```env
   GEMINI_API_KEY=your-key
   UNSPLASH_ACCESS_KEY=your-key  
   API_KEY=innoweb_secret_key_12345
   ```

4. **Deployment URL**: `https://innoweb-api.onrender.com`

**To'liq deployment qo'llanmasi**: `DEPLOYMENT.md` faylini o'qing.

## Avtomatik Post Yaratish

Scheduler har 24 soatda avtomatik ravishda yangi blog post yaratadi:

1. **20+ ta mavzu** ro'yxatidan tasodifiy birini tanlaydi
2. **Gemini AI** yordamida to'liq blog post generatsiya qiladi
3. **Unsplash** dan mavzuga mos rasm topadi
4. **SEO metadata** avtomatik yaratadi
5. **Ma'lumotlar bazasiga** saqlaydi

### Test uchun scheduler intervalini o'zgartirish

`scheduler.py` faylida:

```python
# Test uchun har daqiqa (debug)
trigger=IntervalTrigger(minutes=1)

# Yoki har 1 soatda
trigger=IntervalTrigger(hours=1)

# Production uchun har 24 soatda
trigger=IntervalTrigger(hours=24)
```

## Texnologiyalar

- **FastAPI** - Web framework
- **Prisma** - ORM (Object-Relational Mapping)
- **Neon** - PostgreSQL database
- **Gemini AI** - Google'ning generative AI modeli
- **Unsplash API** - Yuqori sifatli bepul rasmlar
- **APScheduler** - CRON jobs va vazifalarni rejalashtirgich
- **Uvicorn** - ASGI server

## Muammolarni hal qilish

### Server ishga tushmasa:

1. Virtual muhit aktivlanganligini tekshiring
2. Barcha paketlar o'rnatilganligini tekshiring
3. `.env` fayli to'g'ri to'ldirilganligini tekshiring

### Database xatoligi bo'lsa:

```powershell
prisma generate
prisma db push
```

### Gemini API xatoligi bo'lsa:

1. `GEMINI_API_KEY` to'g'ri kiritilganligini tekshiring
2. API key aktiv ekanligini tekshiring: https://makersuite.google.com/app/apikey

---

**Innoweb.uz** © 2025
