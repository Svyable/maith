# Content architecture

## Source of truth

`src/config/content-registry.ts` and its tooling-only companion `content-registry-tooling.ts` form the lightweight canonical registry layer for quiz topics and content collections. It records each topic slug, presentation metadata, owning field, content kind, availability, loader group, and supported legacy alias. Full questions remain in `src/content/**`; the registry never duplicates question text.

`src/config/fields.ts` owns standard-quiz field presentation and ordering. Its topic arrays are derived only from selectable canonical standard topics. `src/config/bonafides.ts` owns credential/course presentation; its canonical topic records are incorporated by the tooling registry and never appear in the standard field selector. Historical CFA/CPA/actuarial/MBA/law/medical/data-science topic records remain unavailable compatibility metadata only. MasterMinds, Vault entries, glossary terms, formulas, and editorial quotes remain isolated in their existing feature registries and are declared as separate collection kinds.

## Content kinds and boundaries

- `standard-quiz`: the normal quiz pool and topic selectors.
- `bonafide`: professional and course collections served only by `/bonafides`; legacy professional slugs may remain addressable as unavailable compatibility metadata but are never standard topics.
- `thinker`: MasterMinds questions served only by `/thinkers`.
- `vault`: Vault entries and questions served by `/vault`.
- `glossary`, `formula`, `editorial`: reference or editorial collections, never quiz packs.
- `special`: compatibility content that remains in the historical standard pool but is not shown as a selectable topic.

Vault questions are the sole compatibility exception: they historically contribute to the standard pool and its counts. The registry marks the Vault pack explicitly so this mixing is auditable and no new special collection can enter unnoticed.

## Adding a standard topic

1. Add or extend a question module under `src/content/`; preserve globally unique IDs within the standard pool.
2. Add its lightweight topic metadata to `src/config/content-registry.ts` and its question-pack export to the tooling companion.
3. If it introduces a field, add the field presentation entry to `src/config/fields.ts`. Do not hand-maintain its topic list.
4. Run `bun run generate:question-loaders` and `bun run generate:content-stats`.
5. Run `bun run validate:content` and the full test suite.

A pack may own several related topics. `QUESTION_PACKS` makes that ownership explicit while the generated loader retains one dynamic import per pack.

## Adding a special collection

Keep its full data, aggregation, service, and route outside `src/content/index.ts`. Add collection-level metadata to `CONTENT_COLLECTIONS`, and register its topic metadata where applicable. Do not set `includeInStandardQuiz` for special packs. Bonafides and MasterMinds are examples of isolated question pools.

## Slugs, IDs, and compatibility

Slugs are stable public identifiers used by filters, links, saved state, and counts. Never rename one silently. Add an entry to `LEGACY_TOPIC_ALIASES` with an existing canonical target when compatibility is required. IDs must remain stable and unique within the standard pool; special collections are isolated and may currently reuse numeric ranges.

An alias is a compatibility pointer, not a second content owner. Before aliasing an old slug, migrate every question to the canonical topic slug and regenerate loaders/counts. The alias source must be unavailable and questionless, while the target must be an available standard topic. Quiz deep links resolve aliases and learning-page aliases redirect to the canonical route. Pack/directory names may remain historical when changing them would add churn; topic ownership is determined by the question metadata and generated loader map.

Unavailable legacy or planned topics remain represented in the registry but are excluded from standard selectors. `electrical-engineering`, `mechanical-engineering`, `control-theory`, and `robotics` are legacy aliases for granular Engineering topics. `engineering` and `string-theory` are compatibility topics originating in the historical Vault mix and remain hidden. Broad topics such as `aerospace` must not be aliased to a narrower topic unless all of their questions actually fit that target.

## Generated data and validation

- `bun run generate:question-loaders` builds the topic-to-pack dynamic loader from `QUESTION_PACKS`.
- `bun run generate:content-stats` builds `src/config/content-stats.ts` and `docs/content-inventory.json` from source questions.
- `bun run validate:content` checks IDs, topic registration, field/loader alignment, empty packs, aliases, special-pool boundaries, generated count drift, and inventory drift. Single-difficulty coverage is reported as a warning.
- `bun run check:locales` validates locale keys and interpolation placeholders.

`docs/content-inventory.json` is the machine-readable inventory. Every question-bearing topic record includes its field, content kind, availability, loader group, and easy/hard/SOTA/total counts. Validation also fails if an available standard field is empty, an available Bonafide topic has no questions, a professional compatibility field leaks into the standard selector, pack module metadata drifts, or the generated topic-to-loader mapping no longer matches source packs.

## Editorial quality

Structural integrity and editorial quality are separate gates.

- `docs/content-standards.md` defines difficulty, explanation, hint, provenance, and coverage expectations.
- `bun run audit:quality` performs question-level QA and writes `docs/content-quality.json` plus a refreshed `docs/content-enhancement-report.md`.
- Run the structural validator before the quality audit. A clean registry does not guarantee good questions, and good questions do not excuse broken ownership or loaders.

Recommended release gate for content changes:

```bash
bun run validate:all-content
bun run check:locales
bun test
bun run build
```
