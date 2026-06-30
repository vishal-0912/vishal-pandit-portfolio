# Hero

**File:** `src/components/sections/Hero.tsx`

## Purpose
The landing/above-the-fold section: name, title, tagline, primary CTAs, a decorative "floating" tech-badge cloud, an animated code-snippet card, and social links.

## Structure
- `#hero` section, `min-h-screen`, centered content, `overflow-hidden`.
- **Ambient glow blobs** — two large blurred gradient circles (`bg-[image:var(--gradient-spectrum)]`) positioned absolutely behind the content for atmosphere. Sized responsively (`w-48 → sm:w-72 → md:w-96`) and blurred more on larger screens so they stay subtle on small viewports.
- **Floating tech badges** (`floatingBadges` array: React.js, TypeScript, Tailwind, Next.js, Vite) — absolutely positioned pills, visible only at `lg:` and up (`hidden lg:flex`), each staggered in on a delay then floating continuously (see Animation below).
- **Main content column**: status badge ("Available for new opportunities"), name heading, role line, tagline paragraph, CTA buttons (View Projects / Download Resume / Contact Me), an animated `developer.ts` code snippet card, and social icon row (GitHub, LinkedIn, Email).
- **Scroll indicator** at the bottom (bouncing arrow + "Scroll" label).

## Animation
- Entrance animations are staggered Framer Motion `initial`/`animate` transitions on each block (badge → heading → subtitle → tagline → CTAs → code card → socials), each with an increasing `delay`.
- **Floating badges**: each badge's outer `motion.div` carries both the one-shot Framer Motion entrance (`opacity`/`scale`) **and** the continuous CSS class `.float-anim` (defined in `index.css`, a 6s `translateY` keyframe loop) on the *same* element, so the entire pill — background **and** text — moves together. (Previously the float animation lived on an inner wrapper with no background, which made the text drift visually outside the static pill; this was fixed by collapsing both behaviors onto the outer container.)
- The **code snippet card** uses the same single-element pattern: `.float-anim` applied directly to the `motion.div` that also has the entrance transition, so the whole card floats as one unit.
- Code lines inside the snippet card type in sequentially via per-line `initial`/`animate` with incrementing delays, and the last line has a blinking cursor (`.cursor-blink`).

## Responsive Behavior
- Floating badges only render at `lg:` and above (decorative, avoids clutter on small screens).
- Heading scales `text-5xl → sm:text-6xl → md:text-7xl → lg:text-8xl`.
- Ambient blobs scale down on mobile and use a smaller blur radius to stay lightweight; the second blob is hidden below `md:`.
- Content container uses `px-4 sm:px-6` so phones get slightly tighter side padding.
