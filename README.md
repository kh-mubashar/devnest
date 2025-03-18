# 🚀 DevNest

A full-stack developer-centric SaaS platform for collecting feedback, generating AI-driven product insights, and managing content — all powered by Next.js 14, App Router, AI, and headless CMS.

## 🧠 Features

- 📝 **AI-Powered Feedback Summaries** (OpenAI / Replicate)
- ⚙️ **Developer Insights Dashboard** (DevOps & performance-focused)
- 🧾 **CMS-Powered Content System** (Contentful/Sanity)
- 💳 **Stripe Integration** for Paid Tiers
- 🔐 **Auth** with NextAuth.js
- 📈 **Performance Analytics & Error Logging**
- 🧪 **Full Testing Suite** (Jest, Cypress, Playwright)

---

## 🧰 Tech Stack

| Area | Tech |
|------|------|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS + shadcn/ui |
| State Management | React Query + Zustand |
| Auth | NextAuth.js (GitHub/Email providers) |
| Database | PostgreSQL via Neon / PlanetScale |
| ORM | Prisma |
| CMS | Contentful / Strapi / Sanity |
| AI | OpenAI / Replicate API |
| CI/CD | GitHub Actions |
| Deployment | Vercel |
| Payments | Stripe |
| Testing | Jest, React Testing Library, Cypress |

---

## 🗂️ Project Structure

/app /dashboard /feedback /auth /cms /api /prisma /components /lib /utils

---

## 🧪 Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/kh-mubashar/devnest.git && cd devnest

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in values: database, OpenAI keys, Contentful, etc.

# 4. Setup the DB
npx prisma generate
npx prisma migrate dev --name init

# 5. Run the dev server
npm run dev

---
##  🌐 Live Demo
Coming soon: devnest.vercel.app

