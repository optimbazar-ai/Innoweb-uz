# 🚀 Innoweb.uz - Production Deployment Guide

**Maqsad**: Loyihani production muhitga deploy qilish va live qilish.

**Pre-requisites**: ✅ `FINAL_LAUNCH_CHECKLIST.md` barcha testlardan o'tgan

---

## 📋 Table of Contents

1. [Frontend Deployment (Vercel)](#1️⃣-frontend-deployment-vercel)
2. [Backend Deployment (Railway)](#2️⃣-backend-deployment-railway)
3. [Database (Neon.tech)](#3️⃣-database-neontechalready-setup)
4. [Domain Setup](#4️⃣-domain-setup)
5. [SSL Certificate](#5️⃣-ssl-certificate)
6. [Environment Variables](#6️⃣-environment-variables-production)
7. [Post-Deployment](#7️⃣-post-deployment)
8. [Monitoring](#8️⃣-monitoring)

---

## 1️⃣ **Frontend Deployment (Vercel)**

### Why Vercel?
- ✅ Next.js'ning official hosting
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ Free SSL
- ✅ Analytics

### Step 1: GitHub'ga Push

```bash
cd e:\loyihalarim\Innoweb-uz\innoweb-frontend

# Git init (agar qilinmagan bo'lsa)
git init
git add .
git commit -m "Ready for production deployment"

# GitHub repo yaratish
# https://github.com/new da yangi repo yarating

# Remote qo'shish
git remote add origin https://github.com/YOUR_USERNAME/innoweb-frontend.git
git branch -M main
git push -u origin main
```

### Step 2: Vercel'ga Import

1. **Vercel'ga kirish**: https://vercel.com
2. **Sign up / Log in** (GitHub account bilan)
3. **"Add New Project"** tugmasini bosing
4. **GitHub'dan import qiling**:
   - Repository: `innoweb-frontend`
   - Framework: `Next.js` (auto-detect)
   - Root Directory: `./`

### Step 3: Environment Variables

Vercel dashboard'da **Settings > Environment Variables** bo'limiga o'ting:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend.railway.app` | Production |

### Step 4: Deploy

**"Deploy"** tugmasini bosing!

**Build vaqti**: 2-3 daqiqa

**URL**: `https://innoweb-uz.vercel.app` (yoki custom domain)

---

## 2️⃣ **Backend Deployment (Railway)**

### Why Railway?
- ✅ Python qo'llab-quvvatlaydi
- ✅ PostgreSQL built-in
- ✅ Free tier mavjud
- ✅ Automatic deployments
- ✅ Environment variables

### Step 1: Railway Account

1. **Railway'ga kirish**: https://railway.app
2. **Sign up** (GitHub account bilan)
3. **"New Project"** tugmasini bosing

### Step 2: Backend Push to GitHub

```bash
cd e:\loyihalarim\Innoweb-uz\innoweb_backend

# Git init
git init
git add .
git commit -m "Backend ready for deployment"

# GitHub'ga push
git remote add origin https://github.com/YOUR_USERNAME/innoweb-backend.git
git branch -M main
git push -u origin main
```

### Step 3: Railway'da Deploy

1. **"Deploy from GitHub repo"** ni tanlang
2. Repository: `innoweb-backend`
3. **Add Service** > **Python**

### Step 4: Environment Variables

Railway dashboard'da **Variables** bo'limiga o'ting:

```env
DATABASE_URL=postgresql://your_neon_url
API_KEY=your_production_api_key_change_this
ADMIN_PASSWORD=your_strong_admin_password
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHANNEL_ID=@your_channel
GEMINI_API_KEY=your_gemini_key
UNSPLASH_ACCESS_KEY=your_unsplash_key
PORT=8000
```

### Step 5: Start Command

Railway settings'da:

**Start Command**:
```bash
prisma generate && uvicorn main:app --host 0.0.0.0 --port $PORT
```

### Step 6: Deploy

**"Deploy"** tugmasini bosing!

**URL**: `https://innoweb-backend.railway.app`

---

## 3️⃣ **Database (Neon.tech - Already Setup)**

✅ Database allaqachon Neon.tech'da

### Production Optimization

1. **Neon dashboard'ga kirish**: https://console.neon.tech
2. **Project settings**:
   - Compute size: Shared (free) yoki Fixed
   - Auto-suspend: 5 minutes
   - Branching: Enable

3. **Connection String**:
   - Copy from Neon dashboard
   - Railway'ga environment variable sifatida qo'shing

---

## 4️⃣ **Domain Setup**

### Option A: Vercel Subdomain (Free)

**Default URL**: `innoweb-uz.vercel.app`

Buni ishlatish mumkin, lekin professional emas.

### Option B: Custom Domain (Tavsiya)

1. **Domen sotib olish**:
   - Namecheap.com
   - GoDaddy.com
   - Cloudflare (arzon)

**Narx**: ~$10/year

2. **Vercel'da domain qo'shish**:
   - Vercel dashboard > Settings > Domains
   - "Add Domain" tugmasini bosing
   - `innoweb.uz` ni kiriting

3. **DNS Settings**:

Domain registrar'da (Namecheap, etc) DNS settings:

```
Type: A
Name: @
Value: 76.76.19.19 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Yoki Nameservers** (Vercel tavsiyasi):

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

4. **Kutish**: 24-48 soat (DNS propagation)

---

## 5️⃣ **SSL Certificate**

### Vercel (Automatic)

✅ **Automatic SSL** - Vercel avtomatik qo'yadi!

Hech narsa qilish kerak emas. Domain qo'shganingizdan keyin:
- Let's Encrypt SSL automatic
- HTTPS enabled
- HTTP → HTTPS redirect

### Railway (Automatic)

✅ **Automatic SSL** - Railway ham avtomatik!

---

## 6️⃣ **Environment Variables (Production)**

### Frontend (.env.production)

```env
NEXT_PUBLIC_API_URL=https://innoweb-backend.railway.app
```

### Backend (.env)

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/db

# Security
API_KEY=change_this_to_strong_random_key_min_32_chars
ADMIN_PASSWORD=your_very_strong_admin_password_123!@#

# Optional Services
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHANNEL_ID=@innoweb_uz
GEMINI_API_KEY=AIzaSy...
UNSPLASH_ACCESS_KEY=your_key

# Server
PORT=8000

# CORS
CORS_ORIGINS=https://innoweb.uz,https://www.innoweb.uz
```

### ⚠️ **IMPORTANT**: Security

1. **API_KEY**: Generate strong random key
   ```bash
   # Python
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

2. **ADMIN_PASSWORD**: Use password manager
   - Minimum 16 characters
   - Mix: letters, numbers, symbols

3. **Never commit** `.env` to GitHub!
   - Already in `.gitignore`

---

## 7️⃣ **Post-Deployment**

### A. Update Frontend API URL

Vercel'da environment variable yangilash:
```
NEXT_PUBLIC_API_URL=https://innoweb-backend.railway.app
```

**Redeploy** qiling (Vercel avtomatik)

### B. Database Migration

Railway terminal'da:

```bash
prisma generate
prisma db push
```

### C. Create Admin User (if needed)

Backend'da admin yaratish:

```python
# Railway terminal yoki local
python
>>> # Admin user creation script
```

### D. Test Production

#### Frontend Test:
- ✅ https://innoweb.uz (yoki vercel URL)
- ✅ Barcha sahifalar ishlaydi
- ✅ Forms ishlaydi
- ✅ Admin panel ishlaydi

#### Backend Test:
- ✅ https://innoweb-backend.railway.app/
- ✅ https://innoweb-backend.railway.app/docs

#### Integration Test:
- ✅ Frontend <-> Backend aloqa
- ✅ Database queries
- ✅ Image loading

---

## 8️⃣ **Monitoring**

### Vercel Analytics

**Setup**:
1. Vercel dashboard > Analytics
2. Enable Analytics
3. View real-time data

**Metrics**:
- Page views
- Unique visitors
- Performance scores
- Web Vitals

### Railway Logs

**View Logs**:
1. Railway dashboard > Deployments
2. Click on latest deployment
3. View logs

**Monitor**:
- Request logs
- Error logs
- Performance

### Error Tracking (Optional)

**Sentry.io** (Tavsiya):

1. **Sign up**: https://sentry.io
2. **Create project**: Next.js + Python
3. **Install**:
   ```bash
   # Frontend
   npm install @sentry/nextjs
   npx @sentry/wizard -i nextjs
   
   # Backend
   pip install sentry-sdk[fastapi]
   ```

4. **Configure**: Follow wizard

---

## 9️⃣ **SEO Post-Launch**

### Google Search Console

1. **Sign up**: https://search.google.com/search-console
2. **Add property**: `https://innoweb.uz`
3. **Verify ownership**: HTML tag method
4. **Submit sitemap**: `https://innoweb.uz/sitemap.xml`

### Google Analytics (Optional)

1. **Sign up**: https://analytics.google.com
2. **Create property**: innoweb.uz
3. **Get Tracking ID**: G-XXXXXXXXXX
4. **Add to Next.js**:

```typescript
// app/layout.tsx
import Script from 'next/script'

// Add in <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Yandex Metrika (Tavsiya - O'zbekiston uchun)

1. **Sign up**: https://metrika.yandex.com
2. **Add site**: innoweb.uz
3. **Get code**: Copy tracking code
4. **Add to Next.js**: Similar to Google Analytics

---

## 🔟 **Backup va Maintenance**

### Database Backup

**Neon.tech**:
- Automatic backups (Point-in-time recovery)
- Manual backup: Neon dashboard > Backups

**Railway**:
```bash
# Export database
pg_dump $DATABASE_URL > backup.sql
```

### Code Backup

✅ **GitHub** - Already backed up!

### Content Backup

**Weekly**:
1. Export all posts (JSON)
2. Export all portfolios (JSON)
3. Save to Google Drive / Dropbox

---

## 📊 **Deployment Checklist**

| # | Vazifa | Status |
|---|--------|--------|
| 1 | GitHub repos created | [ ] |
| 2 | Frontend deployed (Vercel) | [ ] |
| 3 | Backend deployed (Railway) | [ ] |
| 4 | Environment variables set | [ ] |
| 5 | Database connected | [ ] |
| 6 | Domain configured | [ ] |
| 7 | SSL enabled | [ ] |
| 8 | Production tested | [ ] |
| 9 | Google Search Console | [ ] |
| 10 | Analytics setup | [ ] |

---

## 🐛 **Troubleshooting**

### Frontend Errors

**Build Failed**:
```
Error: NEXT_PUBLIC_API_URL not defined
```
**Fix**: Add environment variable in Vercel

**Page Not Found**:
```
404 on dynamic routes
```
**Fix**: Check `next.config.ts` output settings

### Backend Errors

**Module Not Found**:
```
ModuleNotFoundError: No module named 'fastapi'
```
**Fix**: Check `requirements.txt` committed

**Database Connection**:
```
Connection refused
```
**Fix**: Check DATABASE_URL in Railway

### CORS Errors

```
Access-Control-Allow-Origin blocked
```
**Fix**: Update CORS settings in `main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://innoweb.uz"],
    ...
)
```

---

## 📞 **Support**

### Vercel Support
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

### Railway Support
- Docs: https://docs.railway.app
- Discord: https://discord.gg/railway

### Neon Support
- Docs: https://neon.tech/docs
- Discord: https://discord.gg/neon

---

## 🎉 **Congratulations!**

**Loyihangiz LIVE!** 🚀

**URLs**:
- **Frontend**: https://innoweb.uz
- **Backend**: https://innoweb-backend.railway.app
- **Admin**: https://innoweb.uz/admin

**Next Steps**:
1. Marketing qiling
2. Content qo'shing
3. SEO optimize qiling
4. Monitor qiling

---

<div align="center">

**Made with ❤️ by Innoweb.uz Team**

**Launch Date**: [YOUR_DATE]

⭐ **Project Status: LIVE IN PRODUCTION!** ⭐

</div>
