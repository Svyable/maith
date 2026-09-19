# Content standards

These standards govern authored quiz content. They are deliberately stricter than the runtime type so legacy material can be reviewed incrementally without forcing fake cleanup.

## Question shape

A publishable question should have:

- one stable numeric `id`;
- one canonical topic slug;
- exactly one difficulty: `easy`, `hard`, or `sota`;
- four plausible answer options by default;
- exactly one correct option;
- a useful hint that guides without stating the answer;
- an explanation that teaches why the answer is correct;
- a real-world note that is accurate and relevant rather than decorative.

Two-option and three-option questions are permitted only when the format genuinely requires them. Fewer than two options is invalid.

## Difficulty

### EASY

Tests recognition, definitions, direct computation, or one-step conceptual understanding. A prepared high-school or early undergraduate learner should be able to solve it without specialist literature.

### HARD

Requires multi-step reasoning, synthesis, nontrivial calculation, or solid undergraduate/graduate subject knowledge. Distractors should encode realistic misconceptions rather than wordplay.

### SOTA

Tests active research, recent technical methods, unresolved frontiers, or expert-level material. SOTA is not a synonym for obscure trivia. Claims that can change over time should carry provenance and a factual-as-of date.

## Hints

Hints should narrow the reasoning path without naming the correct option verbatim. A hint that contains the full correct answer is a quality defect even if the question remains technically answerable.

## Explanations

Explanations should normally:

1. state the governing idea;
2. show the reasoning or calculation;
3. explain why the result follows;
4. distinguish the strongest plausible distractor when useful.

A one-line restatement of the answer is not enough.

## Provenance

Use `paper` for a specific research paper. Use `sources` for broader factual, historical, standards, institutional, or time-sensitive claims.

Prefer primary and authoritative sources:

- peer-reviewed papers and preprints from the original authors;
- standards bodies and official specifications;
- government archives for declassified material;
- universities and professional bodies;
- authoritative textbooks or reference works.

Do not invent citations. A missing citation is better than a fabricated one.

For claims likely to change, set `factualAsOf`. When a question receives substantive editorial or factual review, set `reviewedAt`.

## Contested and anomalous claims

Distinguish:

- established or directly documented fact;
- credible testimony or reporting;
- disputed interpretation;
- allegation;
- speculation.

Do not turn a disputed claim into an unqualified correct answer merely because it appears in a source. Vault material should be especially explicit about evidentiary status.

## Cross-links

- `glossaryLinks` use glossary term IDs.
- `formulaLinks` use the equation name or recognized equation slug.
- `symbolLinks` target GeekToMe letter slugs.

Broken links should be fixed when a question is reviewed.

## Coverage

For a visible standard topic:

- **minimum viable:** at least 9 questions total where the subject supports all three tiers, usually 3 EASY / 3 HARD / 3 SOTA;
- **healthy:** 15+ questions with multiple independent concepts and no heavy repetition;
- **deep:** enough coverage that a 10-question quiz can vary meaningfully between sessions.

Do not manufacture SOTA questions for topics where “state of the art” is not a useful category. In those cases, document the intentional imbalance rather than padding the topic.

Hidden compatibility topics are exempt from coverage targets.

## Expansion order

When augmenting the library:

1. fix hard defects first;
2. resolve duplicate/near-duplicate material in the target topic;
3. expand the thinnest visible topics;
4. improve field balance;
5. add real provenance while touching the material;
6. regenerate inventories and run both content validators.

Run:

```bash
bun run validate:content
bun run audit:quality
bun run check:locales
bun test
```
