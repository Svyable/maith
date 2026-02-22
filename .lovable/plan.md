## Auth Page Fix + Global Animated Background

### What's Changing

**1. Extract a reusable `FloatingBackground` component**

- Create `src/components/FloatingBackground.tsx` — a shared animated background with floating math symbols AND floating equations (replacing the ticker tape)
- The component will render both symbols (`∑`, `∫`, `π`, etc.) and famous equations (`E = mc²`, `e^{iπ} + 1 = 0`, `∇ × B = μ₀J`, etc.) as floating, drifting elements at varying sizes, speeds, and opacities
- Uses `framer-motion` for smooth, organic animations (float, drift, subtle rotation)
- Fully `pointer-events-none` and `aria-hidden` so it never interferes with interaction

**2. Fix the Auth page composition**

- Remove the ticker tape / scrolling formula strip entirely from Auth
- Remove the left-panel brand hero (the big brain + tagline + ticker + field badges) — it's redundant with the floating background
- Simplify to a single centered auth card with the `FloatingBackground` behind it
- Keep: mode tabs, form inputs, OAuth buttons, "play without account" link, footer copyright
- Add the `Footer` component to the auth page for brand consistency

**3. Apply `FloatingBackground` globally**

- Add it to `Index.tsx` (behind home, quiz, and results screens)
- Add it to `Thinkers.tsx` (behind gallery and quiz)
- Add it to `Glossary.tsx`
- Add it to `Leaderboard.tsx`
- Each page wraps content in `relative z-10` so it layers above the background

**4. Additional enhancements and creature comforts**

- Add `Footer` to Thinkers, Glossary, and Leaderboard pages (currently only on Index home screen)
- Widen Leaderboard to use the same responsive max-widths as other pages (`max-w-lg md:max-w-3xl lg:max-w-5xl`)

---

### Technical Details

**New file: `src/components/FloatingBackground.tsx**`

- Props: none (pure decoration)
- Renders ~14 math symbols + ~8 equations as absolutely positioned `motion.span` elements
- Each element gets randomized position via golden-ratio distribution, variable font sizes, and staggered animation delays
- Symbols: gentle float up/down + subtle rotation, opacity pulse between 0.03-0.12
- Equations: slower drift, slightly larger, even more transparent (0.02-0.08)
- All wrapped in `<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">`

**Auth page restructure (`src/pages/Auth.tsx`):**

- Remove `FORMULAS` array and ticker tape JSX
- Remove left-panel brand hero section
- Remove inline floating symbols (replaced by shared component)
- Import and render `<FloatingBackground />`
- Center the auth form card vertically with a clean `flex items-center justify-center` layout
- Import and add `<Footer />` at the bottom

**Pages updated to add background:**

- `src/pages/Index.tsx` — add `<FloatingBackground />` inside root div
- `src/pages/Thinkers.tsx` — add `<FloatingBackground />`
- `src/pages/Glossary.tsx` — add `<FloatingBackground />`
- `src/pages/Leaderboard.tsx` — add `<FloatingBackground />`, widen container, add `<Footer />`

**Files created:** 1 (`FloatingBackground.tsx`)
**Files modified:** 5 (`Auth.tsx`, `Index.tsx`, `Thinkers.tsx`, `Glossary.tsx`, `Leaderboard.tsx`)  
  
And add some new thinkers we dont have yet that are obvious like hubble or einstein or green or maxwell and tesla etc

&nbsp;