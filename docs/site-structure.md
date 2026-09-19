# Site structure

mAIth keeps route paths, primary navigation, footer navigation, and home discovery destinations in one lightweight registry: `src/config/site-navigation.ts`.

## Canonical navigation

`APP_PATHS` owns internal application paths. Components should import those paths instead of repeating string literals.

`SITE_DESTINATIONS` owns the metadata shared by visible destinations: path, emoji, translation keys, and discovery labels. The header, footer, and home discovery grid consume derived arrays from this registry, preserving their intentional ordering while sharing canonical destination metadata.

External products remain explicit in `EXTERNAL_LINKS`; they are never treated as application routes.

## Routing

`src/App.tsx` binds page components to `APP_PATHS`. The router still owns component loading and guards; the navigation registry owns information architecture metadata. This separation avoids importing React page modules into configuration code.

Authentication and onboarding routes are registered in `APP_PATHS` even though they are not part of primary navigation. Page-to-page redirects and controls must use these canonical paths rather than repeating route literals.

## Shared page shell

`src/components/layout/SiteShell.tsx` owns the global page chrome: floating background, primary header, and optional footer. Top-level pages keep ownership of their own `<main>` sizing, content, overlays, and state.

Standard top-level surfaces use `SiteShell`. Onboarding and NotFound intentionally remain outside it because they have specialized boundary behavior.

The quiz, MasterMinds, and Bonafides flows pass their active streak/header state into the shell and can suppress the footer while a session is active. This keeps gameplay behavior local while removing duplicated chrome composition.

## Field hierarchy

`src/config/content-registry.ts` owns topic-to-field membership.

`src/config/fields.ts` owns field presentation only: label, emoji, description, color, availability, and ordering. Its `topics` arrays are derived from `STANDARD_TOPICS`; no hand-maintained topic membership belongs in the field file.

This means adding or moving a topic requires changing its canonical topic metadata once, rather than synchronizing a second list.

## Integrity guard

`src/test/site-structure.test.ts` verifies that:

- visible navigation items point to registered application paths;
- canonical destination paths are unique;
- top-level pages do not hard-code internal navigation paths;
- standard page chrome stays behind the shared `SiteShell` boundary;
- field slugs are unique;
- every standard topic resolves into exactly one declared field.

`.github/workflows/site-integrity.yml` runs the structural test and a production build whenever pages, shared chrome, routing, navigation, or field structure change.

## Adding a destination

1. Add the route path to `APP_PATHS`.
2. Add shared presentation metadata to `SITE_DESTINATIONS` when the destination is user-visible.
3. Add it to the appropriate derived navigation arrays.
4. Bind the page component to the path in `src/App.tsx`.
5. Run `bun test src/test/site-structure.test.ts` and `bun run build`.

## Adding or moving a field topic

1. Update the topic's `field` in `src/config/content-registry.ts`.
2. Add field presentation metadata to `src/config/fields.ts` only if the field itself is new.
3. Run the content validation suite and the site-structure test.
