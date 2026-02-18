
# Mobile Experience Enhancement Plan

## Assessment Summary

The app is already mobile-first in structure (max-w-lg, px-4, full-width buttons), but several specific issues degrade the experience on real devices.

### Issues Found

**Critical:**
- Header is critically overcrowded when logged in: logo + text + 🏠 + 🏆 + ☀️ + 👤 = 6 items in ~390px, wrapping is imminent at 320px
- No PWA/mobile meta tags in index.html (no theme-color, apple-mobile-web-app-capable, viewport-fit=cover)
- No safe-area-inset padding for iPhone notch and home bar indicator
- Touch targets: several nav buttons are only 32×32px (w-8 h-8) — 44px is the iOS/Android minimum

**Moderate:**
- `grid-cols-4` on Profile stats — 4 squeezed cards on 320px phones become unreadable (10px text, tiny numbers)
- Keyboard shortcut hint text ("Press 1-4 / A-D...") shown on touch devices where it's irrelevant
- HintPanel's two side-by-side buttons (`flex items-center gap-3`) can crowd or overflow on 320px devices
- QuizScreen question card has `p-6` padding — wastes space on very short phones; content scrolls off screen
- LaTeX-heavy option buttons have no overflow protection — wide equations can cause horizontal scroll
- ExplanationPopup uses `p-5` — tight on small screens when showing hint + realWorld + explanation

**Minor:**
- Auth page has large whitespace above/below the form on short screens due to `justify-center` without max-height awareness  
- No `inputmode="email"` / `inputmode="decimal"` on inputs (prevents wrong keyboard appearing)
- Leaderboard row shows three data points inline — truncates on small screens
- `animate-pulse-glow` on Start Quiz button may lag on low-end Android

---

## Changes by File

### 1. `index.html` — PWA meta tags + safe area
Add theme-color, apple-mobile-web-app meta tags, viewport `viewport-fit=cover`, and the title "Math Mastery".

### 2. `src/index.css` — Safe area insets + touch optimization
Add `padding-bottom: env(safe-area-inset-bottom)` to the app shell. Add `-webkit-tap-highlight-color: transparent` and `touch-action: manipulation` globally to remove the 300ms tap delay and blue flash on iOS.

### 3. `src/components/QuizHeader.tsx` — Compact mobile header
- Increase all nav icon buttons from `w-8 h-8` (32px) to `w-10 h-10` (40px) for better tap targets
- On mobile (below sm), hide the "Math Mastery" text label, show only the brain emoji — saves ~110px
- Group nav icons tighter with `gap-1` instead of `gap-2`

### 4. `src/components/QuizScreen.tsx` — Mobile quiz UX
- Remove the keyboard shortcut hint (`quiz.keys`) on mobile using `hidden sm:block`
- Reduce question card padding from `p-6` to `p-4 sm:p-6` to recover vertical space on short phones
- Add `overflow-x-auto` wrapping to the question and option LaTeX containers

### 5. `src/components/HintPanel.tsx` — Responsive hint buttons
- Change the button row from `flex items-center gap-3` to `grid grid-cols-2 gap-2` so each button takes exactly half width at any screen size
- Ensure button text truncates gracefully rather than overflowing

### 6. `src/components/OptionButton.tsx` — Touch-safe options
- Add `min-h-[52px]` (good tap target height) and `select-none` to prevent accidental text selection on long-press
- Ensure `overflow-hidden` on the option container so wide LaTeX stays contained

### 7. `src/pages/Profile.tsx` — Fix the 4-column stats grid
- Change `grid-cols-4` to `grid-cols-2 sm:grid-cols-4` so the stats show as 2×2 on mobile (larger, readable cards) and 4×1 on tablet+
- Reduce the internal padding slightly for the 2-column layout: `p-3` stays, but ensure emoji+number+label stacks comfortably

### 8. `src/components/ExplanationPopup.tsx` — Tighter mobile padding
- Change `p-5` to `p-4` to reclaim a few pixels on small screens
- Add `max-h-[60vh] overflow-y-auto` so on very short phones the explanation doesn't push the Next button off-screen

### 9. `src/pages/Auth.tsx` — Input keyboard types
- Add `inputMode="email"` to the email field so mobile shows the `@` key on the correct keyboard
- Add `autoCapitalize="none"` and `autoCorrect="off"` to prevent iOS autocorrect on email/password fields
- Change `justify-center` on the wrapper to `justify-start pt-16 sm:justify-center` so the form is in the upper portion of the viewport when the keyboard is open — prevents form from being hidden behind the soft keyboard

### 10. `src/components/HomeScreen.tsx` — Keyboard-aware bottom spacing
- Add `pb-6` safe padding at the bottom since the Start Quiz button is at the bottom of a long scrollable list

---

## Technical Summary

| File | Change Type | Issue Fixed |
|------|------------|-------------|
| index.html | PWA meta + title | No theme-color, missing mobile meta, wrong title |
| src/index.css | Global touch CSS | 300ms tap delay, no safe-area insets, tap highlight |
| QuizHeader.tsx | Responsive label hiding | Header overflow on small phones |
| QuizScreen.tsx | Conditional rendering | Keyboard hint shown on touch, p-6 wastes space |
| HintPanel.tsx | Grid layout | Two buttons overflow at 320px |
| OptionButton.tsx | Touch target + overflow | 32px tap height, LaTeX overflow |
| Profile.tsx | 2-col grid mobile | 4 tiny cards unreadable on small phones |
| ExplanationPopup.tsx | Padding + scroll cap | Content pushes Next button off-screen |
| Auth.tsx | Input attributes | Wrong keyboard, form hidden behind keyboard |
| HomeScreen.tsx | Bottom padding | Start Quiz barely visible on short phones |

No backend changes required. No new dependencies needed. All changes are CSS / Tailwind / React conditional rendering.
