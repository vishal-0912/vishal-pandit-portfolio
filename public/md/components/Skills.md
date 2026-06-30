# Skills

**File:** `src/components/sections/Skills.tsx`

## Purpose
Displays skill categories with proficiency bars, plus a free-floating "tech badge cloud" of additional tools/technologies.

## Structure
- `skillCategories`: Frontend, Styling, State Management, Tools & Ecosystem, Cloud & AI — each with a `title`, an `AccentColor` (see `src/lib/colorClasses.ts`), and a list of `{ name, level }` skills.
- Rendered as `.glass-light` cards in a `grid md:grid-cols-2` layout; each card has a colored `.section-tag` header and a stack of skill rows (label + percentage + animated progress bar).
- Below the grid, a flat-wrapped row of plain `.tech-badge` pills lists additional technologies (React, Next.js, TypeScript, Tailwind, Redux, Zustand, Vite, ESLint, Prettier, Git, REST API, Figma, Agile, Azure AI).

## Data & Color System
- `colorClasses` (`src/lib/colorClasses.ts`) maps an `AccentColor` (`blue | cyan | violet | emerald | orange`) to a consistent `{ text, gradient, border, bg }` Tailwind class set, used here for each category's tag and its skills' progress-bar gradient. The same map is reused by `Projects.tsx`.

## Animation
- Category cards fade/slide in staggered by index.
- Each progress bar animates its `width` from `0` to `{level}%` on scroll-into-view, with a combined category+skill index delay for a cascading fill effect.
- Tech badges scale up slightly on hover (`whileHover={{ scale: 1.05, y: -2 }}`).

## Responsive Behavior
- Category grid is single-column on mobile, two columns from `md:` up.
