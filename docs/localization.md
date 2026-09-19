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

- Core question IDs `1-82`
- Actuarial foundation IDs `82100-82102`

That produces an 85-question shared floor spanning linear algebra, calculus, probability/statistics, optimization, discrete math, and the actuarial foundation.

Every translated question must provide all eight fields:

`question`, `options.0`, `options.1`, `options.2`, `options.3`, `explanation`, `realWorld`, and `hint`.

The validator also rejects translated question IDs that do not exist in canonical source content.

## Coverage baseline

`scripts/localization-baseline.json` is the checked-in regression contract.

It defines:

- the shared foundation range;
- any additional foundation IDs;
- a minimum translated-question count for every supported non-English locale.

The shared foundation prevents common coverage from shrinking. Locale-specific floors separately protect languages that are already ahead of the shared baseline, so German or Spanish cannot silently regress to the common minimum.

Current minimum translated-question counts:

- German: 123
- Spanish: 87
- French: 85
- Hindi: 85
- Italian: 85
- Japanese: 85
- Korean: 85
- Portuguese: 85
- Chinese: 85

When a synchronized expansion lands, update the baseline in the same pull request only after every affected locale passes validation.

## Required checks

Run:

```bash
bun run check:locales
bun run report:locales
bun run validate:all-content
```

`check:locales` is a hard gate. It validates UI key parity and interpolation placeholders, translated-question completeness, canonical source IDs, the shared foundation, baseline configuration, and locale-specific coverage floors.

`report:locales` is diagnostic. It prints translated totals, required floors, deltas from those floors, overall source coverage, and a topic-by-topic matrix so the next batch can target weak areas.

`validate:all-content` remains the strict local/full audit and fails while any hard quality defects remain.

CI uses `validate:ci`, which applies the same locale and content-integrity checks plus a checked-in quality-debt ceiling from `scripts/content-quality-baseline.json`. The current 212 historical hard defects are explicitly budgeted; any increase fails CI. When defects are fixed, the baseline must be lowered so improvements cannot regress.

## Continuous integration

`.github/workflows/content-integrity.yml` runs `bun run validate:ci` on relevant pull requests and pushes to `main`.

The workflow uses the committed Bun lockfile with a frozen install. Localization changes therefore have the same validation gate in GitHub as they do locally.

## Expansion method

Grow coverage in synchronized batches rather than translating isolated questions.

1. Keep the canonical foundation complete in every language.
2. Use `bun run report:locales` to identify the weakest locale/topic cells.
3. Choose the next question band so Easy, Hard, and SOTA coverage grow together where practical.
4. Translate the same selected IDs across every lagging locale before raising the shared foundation.
5. Preserve any higher per-locale floor already recorded in `localization-baseline.json`.
6. Run locale checks and the full content validation suite.
7. Raise the shared foundation and locale floors only after the complete batch passes.

This prevents the language selector from advertising nominal support while large parts of the quiz silently fall back to English.

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

After the core-85 expansion, every non-English locale contains the same 85-question canonical foundation. German and Spanish retain broader translated coverage above that baseline.

Future batches should use `bun run report:locales` as the source of truth for selecting the next synchronized cohort.
