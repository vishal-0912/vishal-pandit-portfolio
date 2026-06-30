# Footer

**File:** `src/components/layout/Footer.tsx`

## Purpose
Site footer with brand recap, secondary navigation, social links, and a copyright/credits bar.

## Structure
Three-column grid (`grid sm:grid-cols-3`):
1. **Brand** — logo mark + one-line positioning statement.
2. **Navigation** — duplicate of the navbar's section links, each calling the same `scrollIntoView({ behavior: 'smooth' })` pattern as the navbar.
3. **Connect** — GitHub, LinkedIn, and Email icon buttons (`GithubIcon`/`LinkedinIcon` from `ui/BrandIcons.tsx`, `Mail` from lucide-react). The email link intercepts the click to force `window.location.href` for reliable `mailto:` handling.

Below the grid, a bottom bar shows `© {year} Vishal Pandit. All rights reserved.` and a "Built with ♥ using React + TypeScript + Tailwind" line.

## Styling
- `.glass` pill buttons for social icons (same class the navbar's social icons use), `animated-underline` for text links' hover state.
- `border-t border-[var(--border)]` separates the footer (and again separates the bottom bar from the column grid).

## Responsive Behavior
- Columns stack to one per row below `sm:`; the bottom bar stacks vertically below `sm:` (`flex-col sm:flex-row`).
