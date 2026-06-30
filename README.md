# Vishal Pandit — Portfolio Website

A modern, premium frontend developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Light theme with a monochrome palette (black/graphite/slate) accented by a multi-color spectrum gradient used sparingly for emphasis (headings, dividers, badges).

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3 + CSS custom properties (`src/index.css`)
- **Animations:** Framer Motion
- **Icons:** Lucide React, with hand-authored GitHub/LinkedIn SVGs (`src/components/ui/BrandIcons.tsx`)
- **Forms:** Formspree (contact form submission, no backend)

## Features

- Light, monochrome design with a spectrum-gradient accent system
- Fully responsive layout — tuned across phone (~360px), tablet (768px), laptop (1024px), and desktop (1440px+) breakpoints
- Solid, theme-colored navbar background at all scroll positions (no transparency/ghosting while scrolling)
- Smooth scroll-triggered animations via Framer Motion, including a synchronized floating tech-badge cloud in the hero section
- Scroll progress indicator
- Cursor glow effect (desktop only)
- Active navigation tracking via `IntersectionObserver`
- SEO-optimized HTML with Open Graph + Twitter Card meta tags
- Lazy-loaded sections (`React.lazy` + `Suspense`) for faster initial paint
- Code-split bundle with Vite

## Getting Started

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

## Deploy to Vercel

1. Push to GitHub
2. Import project at vercel.com/new
3. Vercel auto-detects Vite — click **Deploy**

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

## Deploy to Netlify

1. Run `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

Or via CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Certifications, WhyHireMe, Contact
│   └── ui/           # ScrollProgress, CursorGlow, BrandIcons
├── hooks/            # useScrollProgress, useActiveSection
├── lib/              # colorClasses (shared accent-color utility map)
├── App.tsx
├── main.tsx
└── index.css         # CSS variables, theme tokens, and custom utility classes (.glass, .tech-badge, etc.)

public/
├── favicon.svg        # Gradient "V" mark
├── resume.pdf
├── robots.txt / sitemap.xml
└── md/
    ├── DESIGN.md           # General design-system reference
    └── components/         # Per-component documentation (one file per component/group)
```

## Component Documentation

Every component has a dedicated doc under [`public/md/components/`](public/md/components/) covering its purpose, structure, animation behavior, and responsive behavior — e.g. `Hero.md`, `Navbar.md`, `Skills.md`, `Projects.md`, `Experience.md`, `Certifications.md`, `WhyHireMe.md`, `Contact.md`, `Footer.md`, and `UI.md` (shared UI pieces and hooks).

## Customization

- Update personal info directly in each section component under `src/components/sections/`
- Swap theme colors in `tailwind.config.js` (`theme.extend.colors`) and the CSS variables at the top of `src/index.css` (`--bg`, `--text-primary`, `--gradient-spectrum`, etc.)
- Add/remove sections by editing the lazy imports and `<Suspense>` block in `src/App.tsx`
- Contact form submissions go through Formspree — update the `FORMSPREE_ENDPOINT` constant in `src/components/sections/Contact.tsx` to point at your own form

## License

MIT — free to use and adapt.
