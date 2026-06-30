# Certifications

**File:** `src/components/sections/Certifications.tsx`

## Purpose
Grid of earned certifications/credentials, each with issuer, year, description, and topic tags.

## Structure
- `certifications` array (Azure AI Fundamentals, plus two House Of Edtech AI program phases) rendered as `.glass-light` cards in a `grid md:grid-cols-2 lg:grid-cols-3` layout.
- Each card: a `Shield` icon tile, title + year, issuer line, description paragraph, a wrapped row of `.tech-badge` topic tags, and a small "Verified" badge (`Award` icon) pinned to the top-right corner.

## Animation
- Cards scale/fade in on scroll (`initial={{ opacity: 0, scale: 0.95 }}`), staggered by index.
- The icon tile scales up slightly on card hover (`group-hover:scale-105`).

## Responsive Behavior
- Single column on mobile, two columns from `md:`, three columns from `lg:`.
