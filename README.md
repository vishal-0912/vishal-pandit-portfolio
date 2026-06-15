# Vishal Pandit — Portfolio Website

A modern, premium frontend developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

## Features

- Dark-themed glassmorphism design
- Smooth scroll-triggered animations via Framer Motion
- Scroll progress indicator
- Cursor glow effect (desktop)
- Active navigation tracking
- Responsive across all devices
- SEO-optimized HTML with Open Graph + Twitter Card meta tags
- Lazy-loaded sections for performance
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
│   └── ui/           # ScrollProgress, CursorGlow
├── hooks/            # useScrollProgress, useActiveSection
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

- Update personal info in each section component
- Swap colors in `tailwind.config.js` and `index.css` CSS variables
- Add/remove sections in `App.tsx`

## License

MIT — free to use and adapt.
