# ═══ CANONICAL: Add a New Thinker to Maith ═══
#
# This template shows how to add a thinker across ALL systems in one shot.
# Clone this file, find-replace the thinker details, and run the pipeline.
#
# Systems touched:
#   1. Thinker Questions   → src/content/thinkers/<slug>.ts
#   2. Thinker Registry    → src/config/thinkers.ts
#   3. Thinker Index       → src/content/thinkers/index.ts
#   4. Glossary Terms      → src/content/glossary/<topic>.ts + index.ts
#   5. Equations           → src/config/equations.ts
#   6. (Optional) i18n     → src/i18n/locales/thinkers/<lang>.json
#
# ═══════════════════════════════════════════════════════════════════════════

## Example: Robert Tibshirani

### Step 1 — Thinker Questions (`src/content/thinkers/robert-tibshirani.ts`)

```typescript
import type { Question } from '../types';

export const robertTibshiraniQuestions: Question[] = [
  {
    id: 21300,                              // Unique ID range — avoid collisions
    topic: 'robert-tibshirani',             // Must match slug exactly
    difficulty: 'easy',                     // 'easy' | 'hard' | 'sota' ONLY (no 'medium')
    question: 'What does LASSO stand for?',
    options: [
      'Least Absolute Shrinkage and Selection Operator',
      'Linear Algebraic Sparse Signal Optimizer',
      'Lagrangian Adjusted Sum of Squared Observations',
      'Least Additive Sequential Subset Operator'
    ],
    correctIndex: 0,
    explanation: 'LASSO = Least Absolute Shrinkage and Selection Operator...',
    realWorld: 'Used in genomics to identify disease-associated genes...',
    hint: 'The name describes L1 penalized regression.',

    // ═══ CROSS-LINK METADATA (the maith magic) ═══
    // symbolLinks: Record<string, string> → maps LaTeX symbol → GreekToMe slug
    symbolLinks: { 'λ': 'lambda', 'β': 'beta' },
    // formulaLinks: string[] → slugs matching equation names in equations.ts
    formulaLinks: ['lasso-l1-regularisation'],
    // glossaryLinks: string[] → glossary term IDs from glossary files
    glossaryLinks: ['lasso', 'regularization'],
  },
  // ... more questions (3 minimum: 1 easy, 1 hard, 1 sota)
];
```

### Step 2 — Thinker Registry (`src/config/thinkers.ts`)

Add to the `THINKERS` array:

```typescript
{
  slug: "robert-tibshirani",
  name: "Robert Tibshirani",
  archetype: "The Sparsity Surgeon",
  emoji: "✂️",
  era: "1956–present",
  domain: "Statistics & Machine Learning",
  fields: ['math', 'computer-science', 'biology'],
  description: "LASSO, elastic net, significance analysis of microarrays, and modern statistical learning",
  color: "accent",
  tagline: "He taught regression to throw away what it doesn't need.",
  era_group: "contemporary",
  funFact: "The LASSO paper (1996) has over 50,000 citations.",
},
```

### Step 3 — Thinker Index (`src/content/thinkers/index.ts`)

Add the import + spread:

```typescript
// Near other statistics/ML thinkers
import { robertTibshiraniQuestions } from "./robert-tibshirani";

// In the allThinkerQuestions array
...robertTibshiraniQuestions,
```

### Step 4 — Glossary Terms (`src/content/glossary/<field>.ts`)

Add to existing field file or create a new one:

```typescript
// In src/content/glossary/cs.ts or a new src/content/glossary/statistical-learning.ts
{
  id: 'lasso',
  field: 'math',
  topic: 'statistics',
  term: 'LASSO',
  definition: 'Least Absolute Shrinkage and Selection Operator: $\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda\\|\\beta\\|_1$. Induces sparsity via L1 penalty.',
  example: 'Selecting 20 disease genes from 20,000 candidates in a genome-wide association study.',
  formula: '$\\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda\\|\\beta\\|_1$',
  latex: '\\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda\\|\\beta\\|_1',
  symbolLinks: { 'λ': 'lambda', 'β': 'beta' },
  formulaLinks: ['lasso-l1-regularisation'],
  thinkerLinks: ['robert-tibshirani'],
  difficulty: 'intermediate',
}
```

If creating a NEW glossary file, also update `src/content/glossary/index.ts`:

```typescript
import { newTopicTerms } from './new-topic';
// Add to STATIC_TERMS array:
...newTopicTerms,
```

### Step 5 — Equations (`src/config/equations.ts`)

Add new equations to the `EQUATIONS` array (use next available rank):

```typescript
{
  rank: 307,  // Next available rank
  name: "Elastic Net",
  equation: "\\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda_1\\|\\beta\\|_1 + \\lambda_2\\|\\beta\\|_2^2",
  discoverer: "Zou & Hastie (with Tibshirani)",
  year: "2005",
  field: "High-Dimensional Statistics",
  domain: "Data Science",
  subDomain: "Statistical Methods",
  domainEmoji: "📡",
  significance: "Combines L1 and L2 penalties...",
  constants: "λ₁ = L1 weight, λ₂ = L2 weight, β = coefficients",
  applications: "Genomics, finance, NLP feature selection",
  beauty: 7,
  difficulty: "hard",
  tags: ["elastic net", "regularisation", "statistics", "sparsity"],
},
```

### Step 6 — (Optional) i18n Translations

Add entries to `src/i18n/locales/thinkers/<lang>.json`:

```json
{
  "thinker.robert-tibshirani.name": "Robert Tibshirani",
  "thinker.robert-tibshirani.archetype": "El Cirujano de la Esparsidad",
  "thinker.robert-tibshirani.tagline": "Enseñó a la regresión a desechar lo que no necesita."
}
```

---

## Checklist

- [ ] Questions file created with 3+ questions (easy/hard/sota)
- [ ] `symbolLinks` uses `Record<string, string>` format (NOT arrays)
- [ ] `difficulty` is strictly `'easy' | 'hard' | 'sota'` (no `'medium'`)
- [ ] Thinker added to `THINKERS` array in `src/config/thinkers.ts`
- [ ] Import + spread added to `src/content/thinkers/index.ts`
- [ ] Glossary terms added with cross-links (`thinkerLinks`, `formulaLinks`, `symbolLinks`)
- [ ] New equations added to `src/config/equations.ts` with next available rank
- [ ] No duplicate IDs (question IDs, glossary term IDs, equation ranks)
- [ ] Topic slug matches filename: `robert-tibshirani.ts` → `topic: 'robert-tibshirani'`
- [ ] Build passes: `npm run build && tsc --noEmit`

## Type Reference

```typescript
// Question.symbolLinks: Record<string, string>
//   Key = LaTeX symbol, Value = GreekToMe letter slug
//   e.g. { 'λ': 'lambda', 'β': 'beta', 'Σ': 'sigma' }

// Question.formulaLinks: string[]
//   Slugs that match equation names on the Formulas page
//   e.g. ['lasso-l1-regularisation', 'elastic-net']

// Question.glossaryLinks: string[]
//   Glossary term IDs (the `id` field in GlossaryTerm)
//   e.g. ['lasso', 'regularization', 'cross-validation']

// GlossaryTerm.thinkerLinks: string[]
//   Thinker slugs for cross-linking to MasterMinds gallery
//   e.g. ['robert-tibshirani', 'trevor-hastie']

// Difficulty: 'easy' | 'hard' | 'sota'  (NEVER 'medium')
// GlossaryTerm.difficulty: 'intro' | 'intermediate' | 'advanced'
```
