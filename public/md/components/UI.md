# Shared UI Components

Small, reusable pieces used across the layout/sections, plus the data hooks they depend on.

## ScrollProgress
**File:** `src/components/ui/ScrollProgress.tsx`
A thin fixed bar (`.scroll-progress` in `index.css`, gradient-filled, `z-9999`) whose `width` tracks reading progress down the page. Reads its value from `useScrollProgress()`.

## CursorGlow
**File:** `src/components/ui/CursorGlow.tsx`
A large (500×500px) soft radial-gradient blob that follows the mouse cursor for ambient depth on desktop. Implemented with a raw `mousemove` listener writing directly to `style.left`/`style.top` on a ref (avoids React re-renders per mouse move). Hidden below `lg:` (`hidden lg:block`) since it's a desktop-only flourish and there's no cursor on touch devices.

## BrandIcons
**File:** `src/components/ui/BrandIcons.tsx`
Hand-authored inline SVG icons for `GithubIcon` and `LinkedinIcon` (lucide-react doesn't ship brand logos). Both accept `size` and `className` props and use `fill="currentColor"` so they inherit text color from their parent for easy theming.

## Hooks: useScrollProgress / useActiveSection
**File:** `src/hooks/useScrollProgress.ts`
- `useScrollProgress()` — returns a 0–100 number representing vertical scroll position as a percentage of total scrollable height; recalculated on every `scroll` event.
- `useActiveSection(sections: string[])` — uses an `IntersectionObserver` with a `-40% 0px -40% 0px` root margin (effectively watching a thin horizontal band near the viewport's vertical center) to report which section id is currently "active," used by `Navbar.tsx` to highlight the corresponding nav link.

## lib/colorClasses
**File:** `src/lib/colorClasses.ts`
Shared `AccentColor` type (`blue | cyan | violet | emerald | orange`) and a `colorClasses` map of `{ text, gradient, border, bg }` Tailwind class strings per color, reused by `Skills.tsx` and `Projects.tsx` so category/project theming stays consistent without repeating raw hex/utility classes in each component.
