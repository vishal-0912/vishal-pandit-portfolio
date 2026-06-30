# Projects

**File:** `src/components/sections/Projects.tsx`

## Purpose
Showcases featured work (AWS Services Downtime Monitoring, Business Acquisition Risk Analysis) with a description, feature list, tech stack, and a hand-built "mock browser window" preview of each app's UI.

## Structure
Each project entry (`projects` array) renders as a `.glass-light` card split into a `grid lg:grid-cols-5`:
- **Left (`lg:col-span-3`)**: icon, title, "Enterprise Application" eyebrow, description paragraph, bullet feature list (colored dot + text), and a `.tech-badge` row for the stack used.
- **Right (`lg:col-span-2`)**: a mock browser chrome (traffic-light dots + fake URL bar) wrapping project-specific mock UI — e.g. for the AWS monitor, a status filter row + service list + alert banner; for the risk-analysis tool, animated risk-score progress bars.

## Data
- Per-project `color`/`accent`/`border`/`bg` fields drive icon and accent-gradient theming via `colorClasses` (`src/lib/colorClasses.ts`).
- `mockLines` exists in the type but the rendered mock UI is currently hand-coded per project id rather than driven from `mockLines` directly.

## Animation
- Cards fade/slide up into view, staggered by index.
- Risk-analysis progress bars animate their width in from `0` on scroll-into-view, mirroring the Skills section's bar animation.

## Responsive Behavior
- The 5-column split only applies at `lg:`; below that, content and the mock preview stack vertically (content first, preview second, separated by a top border instead of a left border: `border-t lg:border-t-0 lg:border-l`).
