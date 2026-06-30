# Navbar

**File:** `src/components/layout/Navbar.tsx`

## Purpose
Fixed top navigation bar with smooth-scroll links to page sections, an active-section indicator, a "Hire Me" CTA, and a mobile hamburger menu.

## Structure
- `motion.nav` — fixed, full-width, `z-50`. Slides/fades in on mount (`y: -80 → 0`, `opacity: 0 → 1`).
  - Inner wrapper `div` (`max-w-6xl mx-auto`) holds the logo, desktop nav links, CTA, and mobile hamburger.
- `navLinks`: About, Skills, Experience, Projects, Contact (`#hash` anchors).
- `sections` (for scroll-spy): about, skills, experience, projects, certifications, contact.
- Mobile menu: `AnimatePresence`-wrapped panel that fades/slides in below the navbar when the hamburger is toggled (`mobileOpen` state).

## Data & Behavior
- `scrolled` state (`window.scrollY > 50`) toggles the navbar between a relaxed and a compact/elevated state.
- `useActiveSection(sections)` (from `src/hooks/useScrollProgress.ts`) uses an `IntersectionObserver` to detect which section is centered in the viewport and highlights the matching nav link.
- `scrollTo(href)` performs `element.scrollIntoView({ behavior: 'smooth' })` and closes the mobile menu.
- Active link background uses a shared Framer Motion `layoutId="nav-active"` so the highlight slides smoothly between links.

## Styling
- Background: `.navbar-solid` (defined in `src/index.css`) — a near-opaque, theme-matching background (`rgba(248,248,248,0.97)` + `backdrop-filter: blur(20px)`) applied **at all times**, not just on scroll, so page content never shows through the bar.
- When `scrolled`, the inner wrapper additionally gets `rounded-2xl`, tighter padding, and a shadow (`shadow-xl`) to read as an "elevated pill"; when not scrolled it keeps a plain bottom border (`border-b border-[var(--border)]`) for separation from content.
- Logo: black rounded square with a `Code2` icon, plus the wordmark `vishalpandit` (the `pandit` part uses `.text-gradient`, an italic styled span).
- Desktop nav hidden below `md:`; hamburger only visible below `md:`.

## Responsive Behavior
- `hidden md:flex` for desktop links and CTA; `md:hidden` hamburger button for mobile/tablet.
- Mobile menu is a `fixed` panel (`top-20 left-4 right-4`) so it works at any viewport width without overflow.
