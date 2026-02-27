

# Fix Header, Language Switcher, Locale Reactivity & Mobile Spacing

## Issues to Fix

1. **Language flags too crowded in header** -- 10 flag buttons overflow on mobile
2. **Locale switch doesn't update glossary in real-time** -- each `useLocale()` call creates independent state; no cross-component sync
3. **Mobile spacing broken on glossary page** -- layout/padding issues
4. **Header not properly fixed** -- content scrolls on top of the header instead of behind it (z-index issue)

---

## Plan

### 1. Language Switcher: Dropdown on Mobile, Inline on Desktop

Refactor `LanguageFlags` to show:
- **Desktop**: All 10 flags inline (current behavior, works fine on wide screens)
- **Mobile**: A single button showing the active flag; clicking it opens a dropdown/popover with all flag choices

Use `useIsMobile` hook and a simple `useState` toggle for the dropdown. No new dependencies needed -- just a positioned `div` with the flag grid.

**File**: `src/components/LanguageFlags.tsx`

### 2. Fix Cross-Component Locale Reactivity with React Context

The root cause: `useLocale()` creates independent `useState` per component. When `LanguageFlags` calls `changeLocale`, only its own state updates. `GlossaryScreen`'s separate `useLocale()` instance never gets notified.

**Solution**: Create a `LocaleProvider` context that wraps the app. All consumers share the same reactive state.

- Create `src/contexts/LocaleContext.tsx` -- a React context provider that holds the locale state and `changeLocale` function. All components that need locale reactivity will consume this context instead of independent hooks.
- Update `src/hooks/useLocale.ts` -- rewrite to simply consume the context (keeps the same API surface so no other files break)
- Wrap the app with `<LocaleProvider>` in `src/App.tsx` (or the root layout)

This ensures that when a flag is clicked in the header, every component consuming locale (GlossaryScreen, FlashCard, etc.) immediately re-renders with the new locale.

### 3. Fix Header Stacking (z-index)

The header has `sticky top-0 z-10` but page content also uses `relative z-10`, causing content to render on top of the header.

**Fix**:
- Bump the header to `z-50` so it always sits above content
- Ensure page content stays at `z-10` or lower

**File**: `src/components/QuizHeader.tsx` -- change `z-10` to `z-50`

### 4. Fix Glossary Mobile Spacing

The Glossary page wrapper has `max-w-lg` on mobile which, combined with GlossaryScreen's own `max-w-6xl px-4`, creates double-constraint issues and awkward spacing.

**Fix**:
- In `src/pages/Glossary.tsx`, simplify the `<main>` container to use consistent responsive widths that don't conflict with GlossaryScreen's own max-width
- Ensure proper padding for mobile (the `px-4` on both the page and the screen component creates double padding)

**File**: `src/pages/Glossary.tsx`

---

## Technical Summary

| File | Change |
|------|--------|
| `src/contexts/LocaleContext.tsx` | **New** -- shared locale React context + provider |
| `src/hooks/useLocale.ts` | Rewrite to consume context (same API) |
| `src/App.tsx` | Wrap app with `LocaleProvider` |
| `src/components/LanguageFlags.tsx` | Dropdown on mobile, inline on desktop |
| `src/components/QuizHeader.tsx` | `z-10` to `z-50` |
| `src/pages/Glossary.tsx` | Fix `<main>` responsive widths / padding |

