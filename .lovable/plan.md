

# Glossary Enhancement: Global Language Flags + Fix Card Rendering

## Problems Identified

1. **Language flags missing from Glossary (and all other pages)**: The `LanguageFlags` component is only imported in `GlossaryScreen` but appears not to be rendering visibly. It also needs to be available globally.
2. **LaTeX formulas not appearing on cards**: The earth-space terms DO have `formula`, `latex`, and `code` fields in the data files, but the cards appear bare (just title + "TAP TO REVEAL"). The root cause is that `GlossaryScreen` uses `useMemo` with empty dependency arrays, so when locale changes the term list never refreshes -- and on initial load, the memoized results may not pick up localized terms correctly.
3. **No locale reactivity**: The `useMemo` calls in `GlossaryScreen` have no dependency on the current locale, so switching languages has no visible effect on glossary content.

## Plan

### 1. Add LanguageFlags to QuizHeader (global visibility)
Move the language switcher into the `QuizHeader` component so it appears on every page (Home, Glossary, Profile, Vault, etc.). Remove it from `GlossaryScreen` to avoid duplication. Place it as a compact row of flag buttons next to the theme toggle.

**File**: `src/components/QuizHeader.tsx`
- Import `LanguageFlags`
- Add it in the header bar near the theme toggle button

**File**: `src/components/glossary/GlossaryScreen.tsx`
- Remove the `<LanguageFlags />` from the header section (it will now be global)

### 2. Make GlossaryScreen locale-reactive
Use the `useLocale` hook (which already exists) to get the current locale as a reactive value, then pass it as a dependency to all `useMemo` calls so the term list, field chips, and counts refresh when the user switches language.

**File**: `src/components/glossary/GlossaryScreen.tsx`
- Import `useLocale` from `@/hooks/useLocale`
- Destructure `{ locale }` from the hook
- Add `locale` as a dependency to the `useMemo` calls for `allTerms`, `availableFields`, `fieldChips`, and `terms`

### 3. Verify FlashCard formula rendering
The `FlashCard` component code already handles `frontMath` (line 42) and tabs. The likely reason formulas aren't showing is that the memoized term data doesn't include the enriched earth-space terms (with `formula`/`latex`/`code` fields). Once the locale reactivity fix in step 2 is applied, the localized terms from `earth-space/en.ts` (which have all the formula data) will load correctly.

No changes needed to `FlashCard.tsx` itself -- it already renders:
- Formula hero on front face
- Definition/LaTeX/Code tabs on back face
- Close button to flip back

### 4. Ensure LanguageFlags triggers re-render
The current `LanguageFlags` uses a polling interval to detect locale changes. The `useLocale` hook in `GlossaryScreen` will provide proper reactivity. When the user clicks a flag, `setLocale()` fires, the hook updates its state, and `GlossaryScreen` re-renders with fresh `useMemo` results.

**File**: `src/components/LanguageFlags.tsx`
- Refactor to use `useLocale` hook instead of raw polling, making it cleaner and reactive

## Technical Summary

| File | Change |
|------|--------|
| `src/components/QuizHeader.tsx` | Add `LanguageFlags` import + render in header |
| `src/components/glossary/GlossaryScreen.tsx` | Remove `LanguageFlags`, add `useLocale` for reactive memos |
| `src/components/LanguageFlags.tsx` | Refactor to use `useLocale` hook (DRY, no polling) |

This is a focused 3-file refactor that makes language switching globally available and fixes the glossary's locale reactivity so formulas and translations render correctly.

