# Experience

**File:** `src/components/sections/Experience.tsx`

## Purpose
Career timeline listing roles held at Accenture, each with responsibilities and tech used.

## Structure
- `roles` array (most recent first): title, company, location, period, summary description, a `responsibilities` bullet list, and a `tech` tag list.
- A vertical gradient timeline rail runs down the left edge of the role list, with a colored dot per role (color cycles through a 5-color palette by index) and a `.glass-light` card to the right of each dot containing the role details.
- A second, decorative center-line (`hidden lg:block`) runs down the middle of the whole section as a background accent on large screens only.

## Animation
- Each role card slides in from the left on scroll (`initial={{ opacity: 0, x: -30 }}`), staggered by index.
- Each responsibility bullet fades/slides in individually with a small per-item delay, and the chevron icon nudges right on hover (`group-hover:translate-x-1`).

## Responsive Behavior
- Timeline rail position and card left-padding step across three breakpoints so the rail never crowds the card content on small phones: rail at `left-3` (mobile) → `sm:left-6` → `lg:left-8`; dot at `left-1` (mobile) → `sm:left-4` → `lg:left-6`; card padding `pl-10` (mobile) → `sm:pl-20` → `lg:pl-24`.
- Role card header (title/company vs. date) stacks vertically on mobile and goes side-by-side from `sm:` up (`flex-col sm:flex-row`).
