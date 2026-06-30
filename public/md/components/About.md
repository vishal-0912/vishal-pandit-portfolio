# About

**File:** `src/components/sections/About.tsx`

## Purpose
Bio section pairing a written narrative with a quick-glance highlights list and stat tiles.

## Structure
Two-column grid (`grid lg:grid-cols-2`):
- **Left**: section tag, heading ("Engineering interfaces that feel effortless"), and three bio paragraphs.
- **Right**: a `highlights` list (role, location, years of experience, specialization — each with a lucide icon) rendered as `.glass-light` rows, followed by a 2×2 stat grid (Years Experience, Projects Shipped, Technologies, Efficiency Gain).

## Styling
- `.glass-light` + `.gradient-border` + `.card-hover` on highlight rows and stat tiles for the frosted-card look with a lift-on-hover effect.
- Stat values use large `text-3xl font-light` numerals; labels use `text-[var(--text-muted)]`.

## Animation
- Each block fades/slides in on scroll via `whileInView` (`viewport={{ once: true }}`), staggered by index for the highlight list and stats.

## Responsive Behavior
- Collapses to a single column below `lg:`. The stat grid stays 2-column (`grid-cols-2`) at all sizes since it reads fine even on narrow phones.
