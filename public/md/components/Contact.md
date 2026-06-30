# Contact

**File:** `src/components/sections/Contact.tsx`

## Purpose
Contact section with a static info card (email, LinkedIn, location, availability note) and a working contact form.

## Structure
Two-column grid (`grid lg:grid-cols-2`):
- **Left**: a "Get in touch" info card (Email / LinkedIn / Location rows, each with an icon) and an availability card ("Available for opportunities" pulse badge + response-time note).
- **Right**: a form (`name`, `email`, `message`) submitted via `fetch` to a Formspree endpoint (`FORMSPREE_ENDPOINT`, currently `https://formspree.io/f/xvznlzjb`).

## Behavior
- Local `form` state holds the three field values; `status` state (`idle | sending | sent | error`) drives the submit button's label/icon and disables it while sending.
- On success the form resets and shows "Message Sent!" for 4 seconds before reverting to idle; on failure it shows an error state for 4 seconds via the same pattern.
- Inputs use the shared `.input-field` class (consistent border/background/focus-ring styling across the app).

## Responsive Behavior
- Info card and form stack vertically below `lg:` (info first, form second).
- The name/email field pair inside the form is `grid sm:grid-cols-2` — stacked on phones, side-by-side from `sm:` up.

## External Dependency
- Submissions rely on the Formspree endpoint above being valid/active — if it changes, update `FORMSPREE_ENDPOINT` in this file.
