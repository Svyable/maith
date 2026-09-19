# Content architecture

## Source of truth

`src/config/content-registry.ts` is the lightweight canonical registry for quiz topics and content collections. It records each topic slug, presentation metadata, owning field, content kind, availability, loader group, and supported legacy alias. Full questions remain in `src/content/**`; the registry never duplicates question text.

`src/config/fields.ts` owns field presentation and ordering. Its topic arrays are derived from the canonical registry. `src/config/bonafides.ts` owns credential presentation; its topic records are incorporated into the canonical registry. MasterMinds, Vault entries, glossary terms, formulas, and editorial quotes remain isolated in their existing feature registries and are declared as separate collection kinds.

## Content kinds and boundaries

- `standard-quiz`: the normal quiz pool and topic selectors.
- `bonafide`: professional and course collections served only by `/bonafides`.
- `thinker`: MasterMinds questions served only by `/thinkers`.
- `vault`: Vault entries and questions served by `/vault`.
- `glossary`, `formula`, `editorial`: reference or editorial collections, never quiz packs.
- `special`: compatibility content that remains in the historical standard pool but is not shown as a selectable topic.

Vault questions are the sole compatibility exception: they historically contribute to the standard pool and its counts. The registry marks the Vault pack explicitly so this mixing is auditable and no new special collection can enter unnoticed.

## Adding a standard topic

1. Add or extend a question module under `src/content/`; preserve globally unique IDs within the standard pool.
2. Add its lightweight topic metadata and question-pack export to `src/config/content-registry.ts`.
3. If it introduces a field, add the field presentation entry to `src/config/fields.ts`. Do not hand-maintain its topic list.
4. Run `bun run generate:question-loaders` and `bun run generate:content-stats`.
5. Run `bun run validate:content` and the full test suite.

A pack may own several related topics. `QUESTION_PACKS` makes that ownership explicit while the generated loader retains one dynamic import per pack.

## Adding a special collection

Keep its full data, aggregation, service, and route outside `src/content/index.ts`. Add collection-level metadata to `CONTENT_COLLECTIONS`, and register its topic metadata where applicable. Do not set `includeInStandardQuiz` for special packs. Bonafides and MasterMinds are examples of isolated question pools.

## Slugs, IDs, and compatibility

Slugs are stable public identifiers used by filters, links, saved state, and counts. Never rename one silently. Add an entry to `LEGACY_TOPIC_ALIASES` with an existing canonical target when compatibility is required. IDs must remain stable and unique within the standard pool; special collections are isolated and may currently reuse numeric ranges.

Unavailable legacy or planned topics remain represented in the registry but are excluded from standard selectors. `engineering` and `string-theory` are compatibility topics originating in the historical Vault mix and remain hidden.

## Generated data and validation

- `bun run generate:question-loaders` builds the topic-to-pack dynamic loader from `QUESTION_PACKS`.
- `bun run generate:content-stats` builds `src/config/content-stats.ts` and `docs/content-inventory.json` from source questions.
- `bun run validate:content` checks IDs, topic registration, field/loader alignment, empty packs, aliases, special-pool boundaries, generated count drift, and inventory drift. Single-difficulty coverage is reported as a warning.
- `bun run check:locales` validates locale keys and interpolation placeholders.

`docs/content-inventory.json` is the machine-readable inventory. Every topic record includes its field, content kind, availability, loader group, and easy/hard/SOTA/total counts.