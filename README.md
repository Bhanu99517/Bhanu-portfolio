# 🌐 Bhanu Portfolio — v2

> A modern, responsive personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Supabase — deployed on Vercel.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://bhanutechlab.vercel.app)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Bhanu99517/Bhanu-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-96%25-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🌐 Live Demo

👉 [bhanutechlab.vercel.app](https://bhanutechlab.vercel.app)

---

## ✨ Features

- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Light / Dark Mode** — Theme toggle built in
- **Supabase Backend** — Dynamic data storage for contact form or project data
- **Smooth Animations** — Polished transitions and micro-interactions throughout
- **PWA Ready** — Installable as a Progressive Web App
- **shadcn/ui Components** — Accessible, customizable UI component library
- **SEO-Friendly** — Clean HTML structure and semantic markup
- **MIT Licensed** — Free to fork and use as your own portfolio template

---

## 🏗️ Portfolio Sections

- **Hero** — Introduction and call-to-action
- **About Me** — Background, bio, and interests
- **Skills & Tech Stack** — Visual overview of technologies
- **Projects** — Cards with live demo and GitHub links
- **Contact** — Contact form powered by Supabase
- **Footer** — Social and GitHub links

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | UI framework & type safety |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Accessible UI components |
| Supabase | Backend — contact form / dynamic data |
| PostCSS | CSS processing |
| ESLint | Code linting |
| Vercel | Hosting & deployment |

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Supabase](https://supabase.com/) project (for backend features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhanu99517/Bhanu-portfolio.git
   cd Bhanu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   > ⚠️ Never commit your Supabase keys to version control. `.env.local` is already listed in `.gitignore`.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

---

## 🏗️ Project Structure

```
Bhanu-portfolio/
├── .github/             # GitHub Actions workflows & issue templates
├── public/              # Static assets (icons, images, favicon)
├── src/
│   ├── assets/          # Images and SVGs
│   ├── components/      # Reusable UI components (Header, Footer, Cards, etc.)
│   ├── pages/           # Page-level components (Home, About, Projects, Contact)
│   ├── constants.ts     # Navigation links & static data
│   ├── types.ts         # TypeScript interfaces & types
│   ├── App.tsx          # Root component & routing
│   └── main.tsx         # App entry point
├── supabase/            # Supabase config & migration files
├── components.json      # shadcn/ui component config
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite build configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint rules
└── index.html           # HTML entry point
```

---

## ☁️ Deploying to Vercel

1. Push your fork to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Add the following environment variables in Vercel's project settings:
   - `VITE_SUPABASE_URL` — your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key
4. Click **Deploy**

> ⚠️ Supabase environment variables **must** be added to Vercel's dashboard for backend features to work in production — not just in `.env.local`.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_SUPABASE_URL` | ✅ Yes | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | ✅ Yes | Your Supabase public anon key |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Customizing the Portfolio

To make it your own:

1. Update your name, bio, and links inside `src/constants.ts` and page components
2. Replace project entries with your own work and descriptions
3. Swap icons and images in the `public/` and `src/assets/` folders
4. Adjust theme colors in `tailwind.config.ts`
5. Configure your Supabase table schema in the `supabase/` folder

---

## ☕ Support

If you find this project helpful, consider supporting:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/bhanu99517)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/bhanu99517)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please review [SECURITY.md](./SECURITY.md) before reporting any vulnerabilities.

---

## 🔄 Portfolio Versions

| Repo | Version | Live URL |
|---|---|---|
| [portfolio](https://github.com/Bhanu99517/portfolio) | v1 | [bhanutechlab1.vercel.app](https://bhanutechlab1.vercel.app) |
| [Bhanu-portfolio](https://github.com/Bhanu99517/Bhanu-portfolio) | v2 *(this repo)* | [bhanutechlab.vercel.app](https://bhanutechlab.vercel.app) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Bhanu** — [@Bhanu99517](https://github.com/Bhanu99517)

---

*Built with ❤️ using React, TypeScript, Vite, Tailwind CSS, and Supabase*

---

### ⚡ Performance
Built with Vite for fast builds
Optimized assets and clean code
SEO-friendly structure 

---

### 🧰 Tech Stack
React
TypeScript
Vite
Tailwind CSS
HTML5 & CSS3
Vercel (Deployment)

---

### 🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm or yarn
