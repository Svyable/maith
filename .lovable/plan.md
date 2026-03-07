

## Plan: Add University Coursework to Bonafides

### Key Issues in the Bash Script

The script has several type mismatches that would break the build:

1. **`difficulty: 'medium'`** — doesn't exist. The type is `'easy' | 'hard' | 'sota'` only.
2. **`symbolLinks: ['∪', '∩']`** — wrong type. It's `Record<string, string>` (e.g. `{ 'π': 'pi', 'λ': 'lambda' }`), not a string array.
3. **`thinkerLinks: ['kolmogorov']`** — this field doesn't exist on `Question`. The type only has `symbolLinks`, `glossaryLinks`, and `formulaLinks`.
4. **`export type Question = typeof ...`** — re-exports a local type that shadows the canonical import. Must not be included.

### What We'll Build

**Two new bonafide course packs** following the exact existing pattern (CFA, FINRA, etc.):

#### 1. Content Files

- `src/content/ucb-eecs126/questions.ts` — 10 questions (easy/hard/sota) covering probability, Markov chains, PageRank, queueing theory. Rich `symbolLinks` (Record format), `glossaryLinks`, `formulaLinks`.
- `src/content/ucb-eecs126/index.ts` — re-export barrel.
- `src/content/cs50/questions.ts` — 10 questions covering C, algorithms, memory, data structures, SQL, Flask. Same cross-link metadata.
- `src/content/cs50/index.ts` — re-export barrel.

#### 2. Registry Update (`src/config/bonafides.ts`)

Add a new `// ═══ UNIVERSITY COURSEWORK ═══` section with entries for `ucb-eecs126` and `cs50`.

#### 3. Aggregator Update (`src/content/bonafides/index.ts`)

Import and spread both new question arrays into `allBonafideQuestions`.

#### 4. Difficulty Mapping

All `'medium'` → `'hard'`, keeping the strict `easy | hard | sota` union.

#### 5. Symbol Links Format

Convert from arrays to proper Records:
```typescript
// ✗ symbolLinks: ['π', 'λ']
// ✓ symbolLinks: { 'π': 'pi', 'λ': 'lambda' }
```

#### 6. Thinker References

Use `glossaryLinks` for thinker cross-refs (e.g. `glossaryLinks: ['markov-chain', 'pagerank']`) since `thinkerLinks` isn't on the Question type. No type changes needed — the existing metadata fields cover all use cases.

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/content/ucb-eecs126/questions.ts` | Create — 10 questions |
| `src/content/ucb-eecs126/index.ts` | Create — barrel export |
| `src/content/cs50/questions.ts` | Create — 10 questions |
| `src/content/cs50/index.ts` | Create — barrel export |
| `src/config/bonafides.ts` | Add 2 entries under new University section |
| `src/content/bonafides/index.ts` | Import + spread both new pools |

Zero type changes. Zero breaking changes. Follows the exact CFA/FINRA pattern.

