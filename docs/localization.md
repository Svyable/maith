# Localization Coverage

mAIth treats English as the canonical source text and supports nine translated locales:

- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Italian (`it`)
- Chinese (`zh`)
- Japanese (`ja`)
- Korean (`ko`)
- Hindi (`hi`)
- Portuguese (`pt`)

## Localization layers

Localized content is intentionally separated by content type:

- Core UI: `src/i18n/locales/<locale>.json`
- Topics: `src/i18n/locales/topics/<locale>.json`
- Questions: `src/i18n/locales/questions/<locale>.json`
- Glossary: `src/i18n/locales/glossary/<locale>.json`
- Thinkers: `src/i18n/locales/thinkers/<locale>.json`
- Formulas: `src/i18n/locales/formulas/<locale>.json`
- Vault: `src/i18n/locales/vault/<locale>.json`
- Bonafides: `src/i18n/locales/bonafides/<locale>.json`

English question text remains in the canonical question packs and translated question files only provide overrides.

## Canonical question foundation

Every translated locale must fully cover the shared foundation:

- Question IDs `1-22`
- Actuarial foundation IDs `82100-82102`

Every translated question must provide all eight fields:

`question`, `options.0`, `options.1`, `options.2`, `options.3`, `explanation`, `realWorld`, and `hint`.

The validator also rejects translated question IDs that do not exist in canonical source content.

## Required checks

Run:

```bash
bun run check:locales
bun run report:locales
bun run validate:all-content
```

`check:locales` is a hard gate. It validates UI key parity and interpolation placeholders, checks translated question completeness, checks source IDs, and enforces the canonical foundation.

`report:locales` is diagnostic. It prints total translated-question coverage for every locale plus a topic-by-topic matrix so the next translation batch can target the weakest areas.

`validate:all-content` includes localization validation before the general content-integrity and editorial-quality audits.

## Expansion method

Grow coverage in synchronized batches rather than translating isolated questions.

1. Keep the canonical foundation complete in every language.
2. Choose the next question band by topic and difficulty so Easy, Hard, and SOTA coverage grow together.
3. Translate the same selected IDs across every lagging locale before raising the validation floor.
4. Add missing coverage to higher-count locales when needed to preserve the common foundation.
5. Run the coverage report and use its locale/topic matrix to select the next batch.
6. Raise hard validation requirements only after all supported locales meet them.

This prevents a language selector from advertising nominal support while large parts of the quiz silently fall back to English.

## Translation invariants

- Preserve LaTeX commands, delimiters, variable names, formulas, and mathematical equivalence.
- Preserve answer ordering. `correctIndex` lives in canonical content and must not change during translation.
- Preserve interpolation placeholders such as `{{count}}`, `{{name}}`, and `{{year}}` exactly.
- Translate explanatory prose naturally rather than word-for-word when literal phrasing harms clarity.
- Keep established technical terms recognizable in languages where English terminology is standard.
- Do not translate product names, library names, or proper nouns unless the locale has a conventional form.
- Keep hints useful without revealing more information than the English source.
- Do not change question difficulty, topic assignment, scoring, or gameplay behavior in localization-only work.

## Current baseline

After the core-25 expansion, every non-English locale contains the same 25-question canonical foundation. German and Spanish additionally contain broader translated coverage beyond that baseline.

Future batches should use `bun run report:locales` as the source of truth for deciding what to translate next.
