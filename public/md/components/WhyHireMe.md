# WhyHireMe

**File:** `src/components/sections/WhyHireMe.tsx`

## Purpose
Pitch section combining headline stats with a grid of "strengths" cards aimed at recruiters/clients.

## Structure
- **Stats row** (`grid grid-cols-3`): 3.5+ Years Experience, 10+ Enterprise Features Delivered, 35% Development Efficiency Improved — large `.stat-number` figures in `.glass-light` tiles.
- **Strengths grid** (`grid sm:grid-cols-2 lg:grid-cols-4`): 8 cards (Scalable Architecture, Performance-First, Clean Maintainable Code, UI/UX Sensibility, Enterprise Experience, Agile Collaboration, Cross-Browser Mastery, Continuous Improvement), each with an icon, title, and short description.

## Notes
- Each strength entry has a `color` field and a `colorMap`, but all colors currently resolve to the same neutral monochrome style (`neutral` object) to match the site's monochrome theme — the per-strength `color` is effectively unused for visual differentiation today, just kept for future theming flexibility.

## Animation
- Stat tiles scale/fade in staggered by index; strength cards fade/slide up staggered by index, with their icon tile scaling up on hover (`group-hover:scale-110`).

## Responsive Behavior
- Strength grid: 1 column on mobile, 2 columns from `sm:`, 4 columns from `lg:`. Stats stay a fixed 3-column row (`grid-cols-3`) at all sizes — short enough numerals/labels to remain legible on phones.
