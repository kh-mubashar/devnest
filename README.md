# Public Notice Portal (React / Next.js)

Stay informed about planning applications, road closures, goods‑vehicle licensing, probate announcements, and other statutory notices in your local UK area. This project is an **open‑source, community‑driven rebuild of [publicnoticeportal.uk](https://publicnoticeportal.uk)** using the modern Next.js framework.

> **Disclaimer ⚠️**   This repository is *not* affiliated with the News Media Association or the official Public Notice Portal. It is a learning and demonstration project that consumes publicly available data.

---

## ✨ Features

| Category                        | What you can do                                                                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Full‑text & postcode search** | Quickly find notices by postcode, keyword, or category                                                                                        |
| **Interactive Map**             | Visualise notices on a Leaflet / Mapbox map with distance radius filters                                                                      |
| **Rich Filters**                | Filter by notice type (Planning, Traffic & Roads, Goods Vehicle, Alcohol & Licensing, Probate & Trustee, Contract & Tender, Statutory, Other) |
| **Save & Share**                | Bookmark notices to your account and share direct links                                                                                       |
| **Email Alerts**                | Opt‑in email alerts when new notices appear in your chosen area                                                                               |
| **Mobile‑first UI**             | Tailwind CSS & shadcn/ui components for a responsive, accessible experience                                                                   |
| **Offline‑first PWA**           | Service‑worker caching for fast repeat visits                                                                                                 |
| **CI + CD**                     | Automated lint, test, build & deploy to Vercel on every PR                                                                                    |

---

## 🖥️ Tech Stack

* **Next.js 14** (App Router, Server Actions)
* **React 18** & **TypeScript 5**
* **Tailwind CSS** + **shadcn/ui** component library
* **Zustand** for lightweight global state
* **React Query** for remote‑data caching (or **SWR** – pick one)
* **Leaflet** or **Mapbox GL JS** for geospatial visualisations
* **ESLint + Prettier** for code quality & formatting
* **Jest** / **React Testing Library** for unit & integration tests
* **GitHub Actions** for CI; **Vercel** for hosting & preview deployments

---

## 📁 Project Structure

```text
public-notice-portal/
├─ .github/workflows/      # CI/CD pipelines
├─ src/
│  ├─ app/                # Next.js route handlers (App Router)
│  ├─ components/         # Reusable UI components
│  ├─ features/           # Feature‑based modules (search, map, alerts…)
│  ├─ lib/                # Helpers (API, geocoding, utils…)
│  └─ styles/             # Tailwind & global CSS
├─ tests/                 # Unit & integration tests
├─ .env.example           # Environment‑variable template
└─ README.md
```

---
## 🌐 Live Demo

[Live](https://devnest-three.vercel.app/)

## 🚀 Getting Started

### Prerequisites

* **Node.js ≥ 18**
* **pnpm / npm / Yarn**

```bash
# 1. Clone the repo
$ git clone https://github.com/your‑org/public‑notice‑portal.git
$ cd public-notice-portal

# 2. Install dependencies
$ npm ci            # or pnpm install

# 3. Configure environment variables
$ cp .env.example .env.local
# → add keys like NEXT_PUBLIC_MAPBOX_TOKEN, PN_API_BASE_URL, etc.

# 4. Run in development
$ npm run dev

# 5. Open http://localhost:3000
```

### Useful Scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start Next.js in development mode    |
| `npm run lint`  | ESLint & Prettier checks             |
| `npm run test`  | Run unit & integration tests         |
| `npm run build` | Create an optimized production build |
| `npm start`     | Run the compiled production build    |

---

## ⚙️ CI / CD Pipeline

This repository ships with a **single GitHub Actions workflow** (`.github/workflows/vercel-ci.yml`) that runs on every push and pull request:

1. **Install deps → Lint → Test → Build** (job `ci`)
2. **Deploy to Vercel** (job `deploy`) – only on pushes to `main` or `dev`

Branch protection rules mark the **CI job** as a required status check, so PRs cannot be merged unless lint, tests, and build all succeed.

---

## 🤝 Contributing

1. Fork the repo & create a feature branch: `feat/your‑feature`
2. Follow the commit convention: `type(scope): subject` (e.g., `feat(search): add postcode autocomplete`)
3. Ensure `npm run lint && npm test` pass locally
4. Open a Pull Request → fill in the template → wait for CI to pass & review

> **Tip:** Run `npm run lint:fix` to auto‑format before committing.

---

## 🛣️ Roadmap

* [ ] Implement user authentication (NextAuth.js)
* [ ] Add Map markers with clustering
* [ ] Progressive Web App (PWA) offline support
* [ ] Accessibility (WCAG 2.2 AA audit)
* [ ] Dark mode toggle

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

* Official [Public Notice Portal](https://publicnoticeportal.uk) by the **News Media Association** for the original concept.
* [News Media Association](https://newsmediauk.org) for aggregated public notice data.
* [Next.js](https://nextjs.org), [Vercel](https://vercel.com), and the OSS community.
