# Innoweb.uz - Ishga Tushirish Tekshiruv Ro'yxati ✅

Loyihani to'liq ishga tushirish uchun quyidagi qadamlarni bajaring.

---

## 📋 Boshlash Oldidan

### ✅ Texnologiyalar O'rnatilganmi?
- [ ] Python 3.9+ o'rnatilgan
- [ ] Node.js 18+ o'rnatilgan
- [ ] Git o'rnatilgan
- [ ] PostgreSQL (Neon) database sozlangan

---

## 🔧 Backend Tekshiruvi

### 1. Environment Variables (.env)
Quyidagi o'zgaruvchilar `.env` faylida to'ldirilgan:

- [✅] `DATABASE_URL` - PostgreSQL connection string
- [✅] `GEMINI_API_KEY` - Google Gemini AI key
- [✅] `UNSPLASH_ACCESS_KEY` - Unsplash API key
- [✅] `API_KEY` - Backend security key
- [✅] `TELEGRAM_BOT_TOKEN` - Telegram bot token
- [✅] `TELEGRAM_CHANNEL_ID` - Telegram channel ID
- [✅] `CRON_SECRET` - CRON security key
- [✅] `WS_API_KEY` - WebSim API key

### 2. Virtual Environment
```powershell
cd e:\loyihalarim\Innoweb-uz\innoweb_backend
.venv\Scripts\Activate.ps1
```

- [ ] Virtual environment aktivlashtirildi
- [ ] Prompt `(.venv)` ko'rsatilmoqda

### 3. Python Paketlari
```powershell
pip install -r requirements.txt
```

Kerakli paketlar:
- [ ] `fastapi==0.118.0`
- [ ] `uvicorn==0.32.1`
- [ ] `prisma==0.15.0`
- [ ] `python-dotenv==1.1.1`
- [ ] `google-generativeai==0.8.5`
- [ ] `requests==2.32.5`
- [ ] `apscheduler==3.10.4`
- [ ] `python-telegram-bot==21.6`

### 4. Prisma Setup
```powershell
prisma generate
prisma db push
```

- [ ] Prisma Client generatsiya qilindi
- [ ] Database schema pushed

### 5. Backend Server Test
```powershell
uvicorn main:app --reload
```

- [ ] Server ishga tushdi: http://127.0.0.1:8000
- [ ] API docs ochiladi: http://127.0.0.1:8000/docs
- [ ] Database ulanishi ishlayapti

---

## 🎨 Frontend Tekshiruvi

### 1. Environment Variables (.env.local)
Quyidagi o'zgaruvchilar `.env.local` faylida:

- [✅] `NEXT_PUBLIC_API_URL=http://127.0.0.1:8000`
- [✅] `API_KEY=innoweb_secret_key_12345`

### 2. Node Paketlari
```powershell
cd e:\loyihalarim\Innoweb-uz\innoweb-frontend
npm install
```

- [ ] `node_modules` papkasi yaratildi
- [ ] Xatoliksiz o'rnatildi

### 3. Frontend Server Test
```powershell
npm run dev
```

- [ ] Server ishga tushdi: http://localhost:3000
- [ ] Bosh sahifa ochildi
- [ ] Backend API bilan bog'lanish ishlayapti

---

## 🧪 Funksionallik Testi

### Backend API Testlari

**1. Health Check**
```powershell
curl http://127.0.0.1:8000/
```
- [ ] Javob: `{"message": "Innoweb.uz Backend ishga tushdi"}`

**2. Barcha Postlarni Olish**
```powershell
curl http://127.0.0.1:8000/posts
```
- [ ] Postlar ro'yxati qaytarildi (yoki bo'sh `[]`)

**3. AI Post Yaratish**
```powershell
$headers = @{
    "X-API-Key" = "innoweb_secret_key_12345"
    "Content-Type" = "application/json"
}
$body = @{ topic = "Test mavzu" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://127.0.0.1:8000/posts/generate" -Method POST -Body $body -Headers $headers
```
- [ ] Post yaratildi
- [ ] Database'ga saqlandi
- [ ] Gemini AI ishladi
- [ ] Unsplash rasm topildi

### Frontend Testlari

**1. Sahifalar Ochiladi**
- [ ] Bosh sahifa: http://localhost:3000
- [ ] Blog: http://localhost:3000/blog
- [ ] Admin: http://localhost:3000/admin/posts
- [ ] Yangi post: http://localhost:3000/admin/posts/new

**2. Admin Panel**
- [ ] Postlar ro'yxati ko'rinmoqda
- [ ] Yangi post yaratish shakli ishlayapti
- [ ] Post tahrirlash ishlayapti
- [ ] Post o'chirish ishlayapti

---

## 📱 Telegram Integration

### Bot Sozlamalari
```powershell
# Telegram bot tokenini tekshirish
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe
```

- [ ] Bot tokeni to'g'ri
- [ ] Bot faol
- [ ] Kanal ID to'g'ri formatda

### Marketing Xabarlari
```powershell
# Mavjud marketing xabarlar
curl http://127.0.0.1:8000/marketing/messages
```

- [ ] 4 ta marketing xabari mavjud:
  - `services_overview`
  - `free_consultation`
  - `portfolio_showcase`
  - `technology_focus`

---

## 🚀 Avtomatik Vazifalar

### CRON Job (Scheduler)
`scheduler.py` faylida:
- [ ] Har 24 soatda avtomatik post yaratish sozlangan
- [ ] Dushanba kunlari marketing xabari yuborish
- [ ] 20+ ta mavzu ro'yxati tayyor

### Manual Test
```powershell
# CRON job'ni qo'lda ishga tushirish
$headers = @{ "x-cron-secret" = "my_super_secret_cron_key_98765" }
curl -X POST http://127.0.0.1:8000/cron/trigger -H @headers
```

- [ ] Avtomatik post yaratildi
- [ ] Telegram kanalga yuborildi

---

## 🔒 Xavfsizlik

### API Key Himoyasi
- [ ] `X-API-Key` header kerak endpoint'lar ishlayapti
- [ ] Noto'g'ri API key rad etilmoqda
- [ ] `.env` fayli `.gitignore`'da

### Sensitive Data
- [ ] API kalitlari Git'ga yuklanmagan
- [ ] Database credentials xavfsiz
- [ ] Production environment variables alohida

---

## 📊 Production Deployment Tayyorligi

### Backend (Render.com)
- [ ] `render.yaml` fayli mavjud
- [ ] GitHub repository tayyor
- [ ] Environment variables ro'yxati tayyor
- [ ] Build va start commandlar to'g'ri

### Frontend (Vercel)
- [ ] GitHub repository tayyor
- [ ] Environment variables ro'yxati tayyor
- [ ] Build konfiguratsiyasi to'g'ri

---

## 📝 Hujjatlar

- [✅] `README.md` - Loyiha haqida
- [✅] `SETUP_GUIDE.md` - To'liq o'rnatish qo'llanmasi
- [✅] `TEZKOR_ISHGA_TUSHIRISH.md` - Qisqa qo'llanma
- [✅] `CHECKLIST.md` - Tekshiruv ro'yxati (hozirgi fayl)
- [✅] `.env.example` - Environment variables namunasi
- [✅] `DEPLOYMENT.md` - Production deployment qo'llanmasi

---

## ✅ Final Checklist

**Minimum Talablar (Development):**
- [ ] Backend serveri ishga tushadi
- [ ] Frontend serveri ishga tushadi
- [ ] Database ulangan
- [ ] Yangi post yaratish ishlayapti
- [ ] Postlarni ko'rish ishlayapti

**To'liq Funksionallik:**
- [ ] AI blog generation ishlayapti
- [ ] Unsplash rasmlar yuklanmoqda
- [ ] SEO metadata yaratilmoqda
- [ ] Telegram bot xabarlari yubormoqda
- [ ] CRON jobs ishga tushadi
- [ ] Marketing xabarlari yuborilmoqda
- [ ] Admin panel to'liq ishlayapti

**Production Ready:**
- [ ] Barcha testlar o'tdi
- [ ] Xavfsizlik tekshiruvlari bajarildi
- [ ] Performance optimizatsiya qilindi
- [ ] Error handling to'g'ri ishlayapti
- [ ] Logging sozlangan
- [ ] Backup strategiyasi mavjud

---

## 🎯 Keyingi Qadamlar

1. **Development Testing** - Barcha funksiyalarni local'da test qiling
2. **Bug Fixes** - Topilgan muammolarni hal qiling
3. **Documentation** - Qo'shimcha hujjatlar yozing
4. **Performance** - Tezlikni optimizatsiya qiling
5. **Deployment** - Production'ga deploy qiling
6. **Monitoring** - Error tracking va analytics qo'shing

---

**Status:** Loyiha ishga tushirishga tayyor! 🎉
