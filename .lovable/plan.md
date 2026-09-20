# Focused first-load performance pass

## Scope
- Preserve the completed UI, all visible content, routes, scoring, authentication, database behavior, and offline support.
- Optimize only proven first-load costs; avoid architectural rewrites and cosmetic chunk shuffling.

## Implementation
1. Record the current production entry size, total JavaScript, and PWA precache size.
2. Replace landing-page reads of full question, thinker, equation, vault, and glossary datasets with one generated lightweight count map, including per-domain/per-difficulty counts.
3. Load the full standard quiz question pool only when a quiz starts, with a stable existing loading state and cached in-session data for answer checks/restarts.
4. Remove root-route imports of thinker/bonafide datasets through shared barrels, and defer quiz/result UI that is not needed on the home screen where safe.
5. Confirm Thinkers, Formulas, Vault, Glossary, Leaderboard, Profile, and Bonafides remain route-lazy and that the service worker still precaches the complete production output.

## Validation
- Verify generated counts against source datasets.
- Run all locale checks, tests, TypeScript checks, and a production build.
- Compare entry chunk, total JavaScript, and PWA precache measurements before and after; revert changes that do not produce a clear first-load win.
