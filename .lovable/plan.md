

## Plan: Cross-link Quiz Questions to Glossary and Formulas

### Concept

Add optional metadata to each question that references related glossary terms and formulas. Render these as clickable pills in the explanation popup, linking users directly to the relevant Glossary card or Formula entry.

### Data Model Changes

**`src/content/types.ts`** — add two optional fields to `Question`:

```typescript
/** Glossary term IDs relevant to this question (e.g. ['big-o', 'np-hard']) */
glossaryLinks?: string[];
/** Equation names/ranks to link to on the Formulas page */
formulaLinks?: string[];
```

**`src/domain/quiz/types.ts`** — mirror both fields on `PublicQuestion` and `CheckResult` so they flow through the engine to the UI.

**`src/domain/quiz/engine.ts`** — pass `glossaryLinks` and `formulaLinks` through in `stripAnswers`.

**`src/domain/quiz/service.ts`** — include both fields in the `CheckResult` returned by `localFallbackCheck`.

### UI Changes

**`src/components/ExplanationPopup.tsx`** — add a "Learn more" section after the real-world pill with two rows of link pills:

- Glossary pills: link to `/glossary?term={id}` (or anchor scroll). Show term name looked up from the glossary registry.
- Formula pills: link to `/formulas?q={name}` (or anchor). Show equation name.

Each pill styled similarly to `PaperPill` but with distinct icons (📖 for glossary, ƒ for formulas).

### Content Updates

**`src/content/computer-science/questions.ts`** — annotate existing questions with relevant links:

- Q60001 (binary search): `glossaryLinks: ['big-o']`
- Q60002 (Master Theorem): `glossaryLinks: ['big-o']`
- Q60004 (supervised learning): `glossaryLinks: ['overfitting', 'gradient-descent']`
- Q60005 (bias-variance): `glossaryLinks: ['overfitting']`
- Q60006 (transformer attention): `glossaryLinks: ['transformer', 'backpropagation']`
- Q60009 (post-quantum): `glossaryLinks: ['hash-function']`

And formula links where an equation exists (e.g. Shannon entropy, gradient descent formulas).

### Implementation Order

1. Update type definitions (`types.ts`, `quiz/types.ts`)
2. Thread through engine and service
3. Build link pill components in `ExplanationPopup`
4. Annotate CS questions with glossary/formula IDs
5. Test end-to-end

