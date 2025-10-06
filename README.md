# 🚀 Innoweb.uz - Professional Web Development Agency Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)

**Modern web development agency website built with Next.js 15, FastAPI, and PostgreSQL**

[Demo](#) · [Docs](SETUP_GUIDE.md) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Public Features
- 🏠 **Homepage** - Hero section, services preview, featured portfolios
- 📝 **Blog** - SEO-optimized blog with slug-based URLs
- 💼 **Portfolio** - Project showcase with category filters
- 🛠️ **Services** - Service offerings display
- 📧 **Contact Form** - Integrated contact form with backend
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### Admin Features
- 🔐 **Authentication** - Secure admin login
- ✍️ **Blog Management** - Create, edit, delete blog posts
- 🖼️ **Portfolio Management** - Manage portfolio projects
- 🤖 **AI Content Generation** - Generate blog posts with Gemini AI
- 📊 **Dashboard** - Overview of all content

### Backend Features
- 🚀 **REST API** - FastAPI backend
- 🗄️ **Database** - PostgreSQL with Prisma ORM
- 🖼️ **Image Service** - Unsplash integration
- 🤖 **Telegram Bot** - Notifications and marketing
- ⏰ **CRON Jobs** - Scheduled tasks
- 🔒 **API Security** - API key authentication
- 📡 **CORS** - Configured cross-origin requests

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (React 19)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/)
- **Language**: Python 3.10
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (Neon.tech)
- **Validation**: Pydantic
- **AI**: Google Gemini AI
- **Image Service**: Unsplash API
- **Bot**: python-telegram-bot

### DevOps & Tools
- **Package Manager**: npm (frontend), pip (backend)
- **Environment**: dotenv
- **Version Control**: Git
- **Database Hosting**: Neon.tech
- **API Testing**: Swagger UI (auto-generated)

---

## 📁 Project Structure

```
innoweb-uz/
├── innoweb-frontend/          # Next.js Frontend
│   ├── app/                   # App Router
│   │   ├── (routes)/         # Public routes
│   │   ├── admin/            # Admin panel
│   │   ├── api/              # API routes
│   │   ├── layout.tsx        # Root layout
│   │   ├── loading.tsx       # Global loading
│   │   ├── error.tsx         # Error boundary
│   │   └── not-found.tsx     # 404 page
│   ├── components/           # Reusable components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── src/
│   │   └── app/
│   │       ├── blog/        # Blog pages
│   │       ├── portfolio/   # Portfolio pages
│   │       ├── contact/
│   │       ├── services/
│   │       └── lib/         # API functions
│   ├── types.ts             # TypeScript types
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── innoweb_backend/          # FastAPI Backend
│   ├── main.py              # Main application
│   ├── schema.prisma        # Database schema
│   ├── utils.py             # Utility functions
│   ├── telegram_bot.py      # Telegram bot
│   ├── marketing.json       # Marketing messages
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment variables
│
└── Documentation/
    ├── README.md                    # This file
    ├── SETUP_GUIDE.md              # Detailed setup guide
    ├── TEZKOR_ISHGA_TUSHIRISH.md  # Quick start (Uzbek)
    ├── AUDIT_REPORT.md             # Full audit report
    ├── SEO_URL_UPDATE.md           # Slug migration guide
    └── CHECKLIST.md                # Testing checklist
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.10+
- PostgreSQL database (Neon.tech recommended)
- Git

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/innoweb-uz.git
cd innoweb-uz
```

#### 2. Frontend Setup

```bash
cd innoweb-frontend
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

#### 3. Backend Setup

```bash
cd ../innoweb_backend

# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\Scripts\Activate.ps1

# Activate (Linux/Mac)
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Create `.env`:

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
API_KEY="your_secret_api_key"
ADMIN_PASSWORD="your_admin_password"
TELEGRAM_BOT_TOKEN="your_telegram_bot_token"
TELEGRAM_CHANNEL_ID="@your_channel"
GEMINI_API_KEY="your_gemini_api_key"
UNSPLASH_ACCESS_KEY="your_unsplash_key"
```

#### 4. Database Setup

```bash
# Generate Prisma Client
prisma generate

# Push schema to database
prisma db push
```

#### 5. Run Development Servers

**Terminal 1 - Backend:**
```bash
cd innoweb_backend
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd innoweb-frontend
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- Backend API: http://127.0.0.1:8000
- API Docs: http://127.0.0.1:8000/docs

---

## 🔐 Environment Variables

### Frontend (.env.local)

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | ✅ |

### Backend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `API_KEY` | Backend API authentication key | ✅ |
| `ADMIN_PASSWORD` | Admin panel password | ✅ |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token from @BotFather | ❌ |
| `TELEGRAM_CHANNEL_ID` | Telegram channel/group ID | ❌ |
| `GEMINI_API_KEY` | Google Gemini AI API key | ❌ |
| `UNSPLASH_ACCESS_KEY` | Unsplash API key for images | ❌ |

---

## 🗄️ Database Setup

### Using Neon.tech (Recommended)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy connection string
4. Add to `.env` as `DATABASE_URL`

### Local PostgreSQL

```bash
# Install PostgreSQL
# Create database
createdb innoweb_db

# Add to .env
DATABASE_URL="postgresql://localhost:5432/innoweb_db"
```

### Migration

```bash
cd innoweb_backend

# Generate Prisma Client
prisma generate

# Push schema (for development)
prisma db push

# Or create migration (for production)
prisma migrate dev --name init
```

---

## 📜 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend

```bash
uvicorn main:app --reload  # Start development server
prisma generate            # Generate Prisma Client
prisma db push            # Push schema to database
prisma studio             # Open Prisma Studio (GUI)
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Backend (Railway/Render)

1. Create account on [Railway](https://railway.app) or [Render](https://render.com)
2. Create new project from GitHub
3. Add environment variables
4. Deploy

### Database (Neon.tech)

Already deployed! Just use the connection string.

---

## 📚 Documentation

- **[Setup Guide](SETUP_GUIDE.md)** - Detailed installation instructions
- **[Quick Start](TEZKOR_ISHGA_TUSHIRISH.md)** - Quick start guide (Uzbek)
- **[Audit Report](AUDIT_REPORT.md)** - Full project audit
- **[Testing Checklist](CHECKLIST.md)** - Quality assurance checklist
- **[API Documentation](http://127.0.0.1:8000/docs)** - Interactive API docs

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Innoweb.uz Team**

- Website: [innoweb.uz](https://innoweb.uz)
- Email: info@innoweb.uz
- Telegram: [@innoweb_uz](https://t.me/innoweb_uz)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Neon.tech](https://neon.tech)

---

<div align="center">

**Made with ❤️ by Innoweb.uz**

⭐ Star us on GitHub — it motivates us a lot!

</div>
