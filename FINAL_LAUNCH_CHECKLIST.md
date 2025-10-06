# 🚀 Innoweb.uz: Yakuniy Launch Checklist

**Maqsad**: Loyihani to'liq test qilish va deployment uchun tayyor qilish.

**Status**: [ ] **1-Bosqich** | [ ] **2-Bosqich** | [ ] **3-Bosqich**

---

## 📋 **1-BOSQICH: Demo Kontent Yaratish**

### Tayyorgarlik

**Serverlar ishlab turishi kerak:**

```powershell
# Terminal 1 - Backend
cd e:\loyihalarim\Innoweb-uz\innoweb_backend
python -m uvicorn main:app --reload

# Terminal 2 - Frontend  
cd e:\loyihalarim\Innoweb-uz\innoweb-frontend
npm run dev
```

**URLs:**
- Frontend: http://localhost:3000
- Admin: http://localhost:3000/admin/login
- Backend: http://127.0.0.1:8000

---

### ✍️ **Vazifa 1: 5 ta Blog Post Yaratish**

**Yo'riqnoma:**
1. http://localhost:3000/admin/login ga kiring
2. Parol: `innoweb_admin_123`
3. "Yangi post" tugmasini bosing
4. Har bir post uchun quyidagi ma'lumotlarni kiriting

---

#### **Post #1: Biznes uchun Veb-sayt**

| Maydon | Qiymat |
|--------|--------|
| **Sarlavha** | Biznesingiz uchun veb-saytning 5 ta asosiy foydasi |
| **URL Slug** | biznes-uchun-veb-sayt-foydasi |
| **Mazmun** | `<h2>Veb-sayt nima uchun kerak?</h2><p>Zamonaviy dunyoda har bir biznesning o'z veb-sayti bo'lishi shart. Bu mijozlar bilan aloqa o'rnatish, mahsulot va xizmatlarni ko'rsatish uchun eng yaxshi vosita.</p><h3>5 ta asosiy foyda:</h3><ul><li><strong>Onlayn Mavjudlik:</strong> 24/7 mijozlar sizni topishi mumkin</li><li><strong>Ishonch:</strong> Professional veb-sayt kompaniyangizga ishonchni oshiradi</li><li><strong>Marketing:</strong> SEO orqali yangi mijozlarni jalb qilish</li><li><strong>Sotuvlar:</strong> Onlayn savdo imkoniyati</li><li><strong>Raqobat:</strong> Raqiblardan oldinda turish</li></ul><p>Bizning jamoamiz sizga zamonaviy va samarali veb-sayt yaratishda yordam beradi. Bepul konsultatsiya uchun biz bilan bog'laning!</p>` |
| **Rasm URL** | https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800 |
| **Teglar** | biznes, veb-sayt, marketing |
| **SEO Sarlavha** | Biznes uchun Veb-sayt - 5 ta Foyda \| Innoweb.uz |
| **SEO Tavsif** | Veb-sayt biznesingizni onlayn olamga olib chiqadi. 5 ta asosiy foyda va professional yechimlar haqida. |

**Status**: [ ] Yaratildi

---

#### **Post #2: Telegram Bot**

| Maydon | Qiymat |
|--------|--------|
| **Sarlavha** | Telegram botlar orqali sotuvlarni qanday oshirish mumkin? |
| **URL Slug** | telegram-bot-sotuvlar |
| **Mazmun** | `<h2>Telegram Bot - Biznesingiz uchun Virtual Yordamchi</h2><p>Telegram botlar - bu mijozlar bilan aloqani avtomatlashtirish va sotuvlarni oshirishning eng yaxshi usuli. Kun bo'yi xabar javob berishingiz shart emas!</p><h3>Bot qanday yordam beradi?</h3><ul><li><strong>Avtomatik Javoblar:</strong> FAQ savollariga darhol javob beradi</li><li><strong>Buyurtma Qabul:</strong> Mijozlar to'g'ridan-to'g'ri bot orqali buyurtma berishlari mumkin</li><li><strong>Xabarnomalar:</strong> Yangiliklar va aksiyalarni avtomatik yuborish</li><li><strong>To'lov:</strong> Bot orqali to'lov qabul qilish</li><li><strong>Statistika:</strong> Mijozlar harakati haqida ma'lumot</li></ul><p>Biz sizga biznesingiz uchun maxsus Telegram bot yaratamiz. Narx 300$ dan boshlanadi.</p>` |
| **Rasm URL** | https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800 |
| **Teglar** | telegram, bot, sotuvlar, avtomatlashtirish |
| **SEO Sarlavha** | Telegram Bot bilan Sotuvlarni Oshirish - Innoweb.uz |
| **SEO Tavsif** | Telegram bot biznesingizni avtomatlashtirib, sotuvlarni oshiradi. Professional bot yaratish xizmatlari. |

**Status**: [ ] Yaratildi

---

#### **Post #3: Sun'iy Intellekt**

| Maydon | Qiymat |
|--------|--------|
| **Sarlavha** | Sun'iy intellekt kichik biznesga qanday yordam bera oladi? |
| **URL Slug** | ai-kichik-biznes |
| **Mazmun** | `<h2>AI - Faqat Katta Kompaniyalar uchunmi?</h2><p>Ko'pchilik o'ylaydi AI faqat katta korporatsiyalar uchun. Lekin bu noto'g'ri! Kichik biznes ham sun'iy intellektdan foyda olishi mumkin.</p><h3>AI qanday yordam beradi?</h3><ul><li><strong>Chatbot:</strong> Mijozlar savolariga avtomatik javob</li><li><strong>Tahlil:</strong> Sotuvlar va mijozlar xatti-harakatini tahlil qilish</li><li><strong>Marketing:</strong> Maqsadli reklama kampaniyalari</li><li><strong>Email:</strong> Avtomatik email xabarlar yaratish</li><li><strong>Prognoz:</strong> Sotuvlar va talabni bashorat qilish</li></ul><h3>Narx:</h3><p>AI yechimlar endi arzon va qulay. Oddiy chatbot 200$ dan boshlanadi. Murakkab tizimlar uchun bepul konsultatsiya oling!</p>` |
| **Rasm URL** | https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800 |
| **Teglar** | AI, avtomatlashtirish, biznes, chatbot |
| **SEO Sarlavha** | Sun'iy Intellekt Kichik Biznes uchun - Innoweb.uz |
| **SEO Tavsif** | AI yechimlar kichik biznes uchun ham mavjud. Chatbot, tahlil, marketing va boshqa imkoniyatlar. |

**Status**: [ ] Yaratildi

---

#### **Post #4: CRM Tizimi**

| Maydon | Qiymat |
|--------|--------|
| **Sarlavha** | CRM tizimi nima va u nima uchun kerak? |
| **URL Slug** | crm-tizimi-nima |
| **Mazmun** | `<h2>CRM - Customer Relationship Management</h2><p>CRM tizimi - bu mijozlar bilan munosabatlarni boshqarish uchun dasturiy ta'minot. U barcha mijozlar ma'lumotlarini bir joyda saqlaydi va jamoangiz ishini osonlashtiradi.</p><h3>CRM nima uchun kerak?</h3><ul><li><strong>Tartib:</strong> Barcha mijozlar ma'lumotlari bir joyda</li><li><strong>Tezlik:</strong> Mijoz tarixini darhol ko'rish</li><li><strong>Samaradorlik:</strong> Follow-up va eslatmalar</li><li><strong>Tahlil:</strong> Qaysi mijozlar ko'proq sotib oladi?</li><li><strong>Jamoaviy Ish:</strong> Hamma bir tizimda ishlaydi</li></ul><h3>Bizning CRM Yechimlarimiz:</h3><p>Biz mavjud CRM'larni integratsiya qilishimiz yoki sizga maxsus CRM yaratishimiz mumkin. Narx 1000$ dan boshlanadi.</p>` |
| **Rasm URL** | https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800 |
| **Teglar** | CRM, tizim, menejment, biznes |
| **SEO Sarlavha** | CRM Tizimi nima? - To'liq Qo'llanma \| Innoweb.uz |
| **SEO Tavsif** | CRM tizimi mijozlar bilan munosabatni boshqaradi. Afzalliklari, narxi va bizning yechimlarimiz. |

**Status**: [ ] Yaratildi

---

#### **Post #5: Next.js va TailwindCSS**

| Maydon | Qiymat |
|--------|--------|
| **Sarlavha** | Next.js va TailwindCSS: Zamonaviy frontend'ning afzalliklari |
| **URL Slug** | nextjs-tailwindcss-afzalliklari |
| **Mazmun** | `<h2>Next.js + TailwindCSS = Mukammal Kombinatsiya</h2><p>Zamonaviy veb-saytlar uchun eng yaxshi texnologiyalar to'plami. Next.js va TailwindCSS - bu tezlik, SEO va chiroyli dizaynning kombinatsiyasi.</p><h3>Next.js Afzalliklari:</h3><ul><li><strong>SEO Friendly:</strong> Server-side rendering</li><li><strong>Tez:</strong> Automatic code splitting</li><li><strong>Image Optimization:</strong> Rasmlar avtomatik optimizatsiya</li><li><strong>API Routes:</strong> Backend ham Next.js'da</li></ul><h3>TailwindCSS Afzalliklari:</h3><ul><li><strong>Tezkorlik:</strong> Utility-first approach</li><li><strong>Customization:</strong> To'liq moslashtirish imkoniyati</li><li><strong>Responsive:</strong> Mobile-first design</li><li><strong>Kichik Size:</strong> Faqat ishlatiladigan CSS</li></ul><p>Bizning barcha loyihalarimiz Next.js va TailwindCSS'da ishlab chiqiladi!</p>` |
| **Rasm URL** | https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800 |
| **Teglar** | Next.js, TailwindCSS, dasturlash, frontend |
| **SEO Sarlavha** | Next.js va TailwindCSS - Zamonaviy Frontend \| Innoweb.uz |
| **SEO Tavsif** | Next.js va TailwindCSS kombinatsiyasining afzalliklari. Tezlik, SEO va chiroyli dizayn. |

**Status**: [ ] Yaratildi

---

### 💼 **Vazifa 2: 3 ta Portfolio Loyihasi Yaratish**

**Yo'riqnoma:**
1. Admin panelda "Portfolio" bo'limiga o'ting
2. "Yangi portfolio" tugmasini bosing
3. Har bir loyiha uchun quyidagi ma'lumotlarni kiriting

---

#### **Portfolio #1: E-Shop Online Do'kon**

| Maydon | Qiymat |
|--------|--------|
| **Loyiha Nomi** | Online Do'kon - "E-Shop" |
| **URL Slug** | eshop-online-dokon |
| **Tavsif** | Kiyim-kechak sotadigan zamonaviy onlayn do'kon. To'liq funksional e-commerce platforma: mahsulotlar katalogi, savat tizimi, to'lov integratsiyasi va buyurtmalarni boshqarish admin paneli bilan. Mijozlar ro'yxatdan o'tishlari, sevimlilariga qo'shishlari va buyurtma tarixini ko'rishlari mumkin. |
| **Rasm URL** | https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800 |
| **Texnologiyalar** | Next.js, PostgreSQL, TailwindCSS, Stripe, NextAuth |
| **Live URL** | https://eshop-demo.vercel.app |
| **GitHub URL** | https://github.com/innoweb/eshop |
| **Kategoriya** | web |
| **Featured** | ✅ Ha |

**Status**: [ ] Yaratildi

---

#### **Portfolio #2: Telegram Bot - Customer Support**

| Maydon | Qiymat |
|--------|--------|
| **Loyiha Nomi** | Mijozlarga Xizmat Ko'rsatuvchi Telegram Bot |
| **URL Slug** | telegram-support-bot |
| **Tavsif** | Kompaniyaning FAQ savollariga avtomatik javob beradigan va murojaatlarni qabul qiladigan aqlli bot. AI integratsiyasi bilan jihozlangan, mijozlar savollariga mos javoblarni topadi. Admin panelida barcha murojaatlar va statistika ko'rinadi. 24/7 ishlaydi va mijozlar qoniqishini oshiradi. |
| **Rasm URL** | https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800 |
| **Texnologiyalar** | Python, FastAPI, AI, Telegram API, PostgreSQL |
| **Live URL** | https://t.me/innoweb_support_bot |
| **GitHub URL** | https://github.com/innoweb/support-bot |
| **Kategoriya** | bot |
| **Featured** | ✅ Ha |

**Status**: [ ] Yaratildi

---

#### **Portfolio #3: Korporativ Veb-sayt - BuildCo**

| Maydon | Qiymat |
|--------|--------|
| **Loyiha Nomi** | Korporativ Veb-sayt - "BuildCo" |
| **URL Slug** | buildco-korporativ-sayt |
| **Tavsif** | Qurilish kompaniyasi uchun o'zining xizmatlari va loyihalarini namoyish etuvchi professional veb-sayt. Portfolio galereyasi, xizmatlar bo'limi, jamoa haqida ma'lumot va kontakt formasi bilan. CMS integratsiyasi orqali mijoz o'zi kontent qo'shishi mumkin. To'liq SEO optimizatsiya qilingan. |
| **Rasm URL** | https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800 |
| **Texnologiyalar** | React, Contentful CMS, SEO, Google Analytics |
| **Live URL** | https://buildco-demo.com |
| **GitHub URL** | https://github.com/innoweb/buildco |
| **Kategoriya** | web |
| **Featured** | ✅ Ha |

**Status**: [ ] Yaratildi

---

## ✅ **2-BOSQICH: To'liq Saytni Test Qilish**

### Test Muhiti

**Tayyorgarlik:**
1. Backend va Frontend serverlar ishlab turishi kerak
2. Barcha kontent yaratilgan bo'lishi kerak (5 post + 3 portfolio)
3. Brauzerda http://localhost:3000 ochilgan

---

### 📝 **Test Checklist**

#### **A. Umumiy Sahifalar** 

| # | Sahifa | Vazifa | Kutilgan Natija | Status |
|---|--------|--------|-----------------|--------|
| 1 | Homepage `/` | Sahifani ochish | Hero, Services, Portfolio preview, Testimonials ko'rinadi | [ ] |
| 2 | About `/about` | Sahifani ochish | Team, Stats, Values, Mission ko'rinadi | [ ] |
| 3 | Services `/services` | Sahifani ochish | 4 ta xizmat kartochkalari ko'rinadi | [ ] |
| 4 | FAQ `/faq` | Sahifani ochish | 10 ta savol, accordion ishlaydi | [ ] |
| 5 | Contact `/contact` | Sahifani ochish | Form va contact info ko'rinadi | [ ] |

---

#### **B. Blog Funksiyalari**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Blog list | `/blog` ga kirish | 5 ta post kartochka ko'rinadi | [ ] |
| 2 | Blog detail | Biror post ustiga bosish | Post to'liq ochiladi, rasm + matn + teglar | [ ] |
| 3 | Back button | Post ichida "Barcha maqolalar" ni bosish | Blog listga qaytadi | [ ] |
| 4 | Search | Qidiruv maydoniga "bot" yozish | Faqat "bot" so'zi bor postlar qoladi | [ ] |
| 5 | Clear search | Search'dagi X ni bosish | Barcha postlar qaytib keladi | [ ] |
| 6 | Tag filter | "biznes" tegi tugmasini bosish | Faqat "biznes" tegi bor postlar qoladi | [ ] |
| 7 | All filter | "Hammasi" tugmasini bosish | Barcha postlar ko'rinadi | [ ] |
| 8 | No results | Qidiruvga "zzzz" yozish | "Hech narsa topilmadi" xabari | [ ] |
| 9 | Social share | Post ichida "Telegram" tugmasini bosish | Telegram share oynasi ochiladi | [ ] |

---

#### **C. Portfolio Funksiyalari**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Portfolio list | `/portfolio` ga kirish | 3 ta portfolio kartochka | [ ] |
| 2 | Portfolio detail | Biror loyiha ustiga bosish | Loyiha batafsil ochiladi | [ ] |
| 3 | Back button | "Barcha loyihalar" ni bosish | Portfolio listga qaytadi | [ ] |
| 4 | Featured badge | Kartochkada "⭐ Featured" ko'rinadi | Ha, 3 tasida ham | [ ] |
| 5 | Technologies | Texnologiyalar badges ko'rinadi | Ha, ranglik badges | [ ] |
| 6 | Links | "Live Demo" tugmasini bosish | Yangi tab ochiladi | [ ] |

---

#### **D. Forms va Interaction**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Contact form | Formani to'ldirib "Yuborish" bosish | "✅ Xabar yuborildi" xabari | [ ] |
| 2 | Form validation | Bo'sh formani yuborish | "To'ldirish majburiy" xabari | [ ] |
| 3 | Backend log | Backend terminaliga qarash | Form ma'lumotlari console'da | [ ] |

---

#### **E. Admin Panel**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Login | `/admin/login` ga kirish | Login form ochiladi | [ ] |
| 2 | Dashboard | Login qilish | Posts va Portfolio ro'yxati | [ ] |
| 3 | Edit post | Post'ni tahrirlash tugmasi | Edit form ochiladi | [ ] |
| 4 | Update post | Sarlavhani o'zgartirish | Saytda yangilangan ko'rinadi | [ ] |
| 5 | Delete post | O'chirish tugmasi | Confirm dialog, keyin o'chiriladi | [ ] |
| 6 | Create post | "Yangi post" tugmasi | Form ochiladi | [ ] |
| 7 | Slug auto | Sarlavha yozganda slug avtomatik | Ha, tire bilan | [ ] |
| 8 | Portfolio CRUD | Portfolio add/edit/delete | Hammasi ishlaydi | [ ] |
| 9 | Logout | "Chiqish" tugmasi | Login sahifaga qaytadi | [ ] |

---

#### **F. Mobile Responsive**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Header menu | F12 > Mobile view, hamburger icon | Menu ochiladi/yopiladi | [ ] |
| 2 | Homepage | Mobile'da scroll qilish | Barcha section to'g'ri | [ ] |
| 3 | Blog cards | Mobile'da blog sahifasi | 1 column, chiroyli | [ ] |
| 4 | Forms | Mobile'da contact form | Qulay to'ldirish | [ ] |
| 5 | Images | Barcha rasmlar | Responsive, buzilmagan | [ ] |
| 6 | Buttons | Touch-friendly | 44x44px minimum | [ ] |
| 7 | Horizontal scroll | Hamma sahifalar | Horizontal scroll YO'Q | [ ] |

---

#### **G. Performance va Xatoliklar**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | 404 page | `/random-page` ga kirish | Custom 404 page | [ ] |
| 2 | Loading states | Portfolio sahifasini ochish (internet sekin) | Skeleton animation | [ ] |
| 3 | Error handling | Backend'ni o'chirib sahifa ochish | Error page yoki xabar | [ ] |
| 4 | Image loading | Sahifalarni ochish | Rasmlar optimized yuklanadi | [ ] |
| 5 | Console errors | F12 > Console | Xatoliklar bo'lmasligi kerak | [ ] |

---

#### **H. SEO va Metadata**

| # | Vazifa | Qanday Test Qilish | Kutilgan Natija | Status |
|---|--------|-------------------|-----------------|--------|
| 1 | Page titles | Har bir sahifani ochib tab title | Unique titles | [ ] |
| 2 | Meta description | View Page Source | description tag bor | [ ] |
| 3 | Sitemap | `/sitemap.xml` ochish | XML sitemap | [ ] |
| 4 | Robots | `/robots.txt` ochish | Robots rules | [ ] |
| 5 | Open Graph | Blog postni social mediada share | OG image + title + description | [ ] |

---

## 🎯 **3-BOSQICH: Production Deployment Tayyorligi**

### Pre-Deployment Checklist

| # | Vazifa | Status |
|---|--------|--------|
| 1 | Barcha testlar o'tdi | [ ] |
| 2 | Demo content yaratildi | [ ] |
| 3 | Real content bor (minimum) | [ ] |
| 4 | Environment variables to'g'ri | [ ] |
| 5 | Database backup olindi | [ ] |
| 6 | .gitignore to'g'ri | [ ] |
| 7 | README.md yangilandi | [ ] |
| 8 | API keys xavfsiz | [ ] |

---

## 📊 **Yakuniy Natija**

### Test Statistikasi

- **Umumiy Testlar**: ___/50
- **O'tgan**: ___
- **O'tmagan**: ___
- **To'liq Tayyor**: [ ] Ha / [ ] Yo'q

### Keyingi Qadam

**Agar barcha testlar o'tgan bo'lsa:**
✅ **Deployment uchun tayyor!**

**Agar muammolar bo'lsa:**
❌ Bug'larni tuzating va qayta test qiling

---

## 🚀 **Deployment**

Deployment qo'llanmasi: `DEPLOYMENT_GUIDE.md` (keyingi qadam)

---

<div align="center">

**Test qilish muvaffaqiyatli bo'lsin!** 🎉

**Innoweb.uz Team**

</div>
