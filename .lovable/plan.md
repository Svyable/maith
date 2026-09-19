# Focused mAIth product-quality pass

## Approach
- Preserve the existing content, routes, authentication, scoring, and quiz behavior while refining the current visual system.
- Treat English as the canonical locale schema, then equalize all nine translated locale files and validate every interpolation placeholder.
- Rework the existing header into a compact desktop navigation and accessible mobile menu, keeping account-aware actions intact.
- Reorder and simplify the home experience around selecting difficulty and Domains, showing a clear selection summary, then starting the quiz. Keep discovery destinations visible but secondary.
- Polish leaderboard tabs, rankings, XP/accuracy presentation, empty/loading states, and profile progression without changing calculations.
- Apply consistent card geometry, spacing, focus rings, touch targets, and dark-mode contrast across the edited screens.

## Technical details
- Add a locale-integrity test/script that compares key sets and placeholder sets against English to prevent regressions.
- Use existing semantic color tokens, current typography, shadcn/Radix primitives where available, and current route/auth hooks.
- Keep heavy routes lazy-loaded as they already are; avoid architecture or database changes.
- Validate with targeted tests, the production build, and desktop/mobile browser checks.

## Scope boundaries
- No content-library removals, database migrations, scoring changes, route changes, or new product areas.
- Existing brand personality, animations, and discovery features remain, with reduced visual competition around quiz setup.
