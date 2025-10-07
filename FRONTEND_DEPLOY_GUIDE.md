# Frontend Deploy Guide (Vercel)

## Quick Deploy via Vercel Dashboard

1. **Login**: https://vercel.com
2. **Import Project**: Select `optimbazar-ai/Innoweb-uz` from GitHub
3. **Configure**:
   - Framework: Next.js (auto-detected)
   - Root Directory: `innoweb-frontend`
   - Build Command: `npm run build`
   - Install Command: `npm install`

4. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```

5. Click **Deploy** button

---

## CLI Deploy (Alternative)

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login to Vercel

```bash
vercel login
```

### Deploy from Frontend Directory

```bash
cd innoweb-frontend
vercel
```

Follow the prompts:
- Setup and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time) or **Y** (subsequent)
- Project name: `innoweb-frontend`
- Directory: `./`
- Override settings? **N**

### Set Environment Variables

```bash
vercel env add NEXT_PUBLIC_API_URL
```

Enter your backend URL when prompted.

### Deploy to Production

```bash
vercel --prod
```

---

## Automatic Deployments

After initial setup, Vercel automatically deploys:

- **Main branch** → Production: `https://innoweb-uz.vercel.app`
- **Other branches** → Preview: `https://innoweb-uz-git-[branch].vercel.app`
- **Pull Requests** → Preview URLs

---

## Local Development

Create `.env.local` file in `innoweb-frontend/`:

```bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Run dev server:

```bash
npm run dev
```

Access: http://localhost:3000

---

## Production Checklist

- [ ] Backend deployed and accessible
- [ ] `NEXT_PUBLIC_API_URL` set correctly in Vercel
- [ ] CORS configured in backend for frontend domain
- [ ] Custom domain configured (optional)
- [ ] SSL/HTTPS enabled (automatic on Vercel)

---

## Troubleshooting

### API Connection Issues

1. Check Vercel logs: Dashboard → Deployments → Select deployment → Function logs
2. Verify `NEXT_PUBLIC_API_URL` is set correctly
3. Check CORS settings in backend

### Build Failures

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Environment Variables Not Working

- Must start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing variables
- Variables are set at build time

---

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain: `innoweb.uz`
3. Configure DNS records as shown
4. Vercel automatically provisions SSL certificate

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
