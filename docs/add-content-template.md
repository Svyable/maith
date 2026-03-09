# ═══════════════════════════════════════════════════════════════════════════
# CANONICAL: Adding Content to Maith — Complete Integration Guide
# ═══════════════════════════════════════════════════════════════════════════
#
# This document covers EVERY content type in Maith and how to add it correctly.
# Each section is self-contained. Use the table of contents to jump to what
# you need, or follow the full pipeline when adding a thinker + glossary +
# equations together.
#
# ═══════════════════════════════════════════════════════════════════════════

## Table of Contents

1. [Adding a Thinker (MasterMinds)](#1-adding-a-thinker-masterminds)
2. [Adding Quiz Questions](#2-adding-quiz-questions)
3. [Adding Glossary Terms](#3-adding-glossary-terms)
4. [Adding Equations (Formulas)](#4-adding-equations-formulas)
5. [Adding a Field](#5-adding-a-field)
6. [Adding i18n Translations](#6-adding-i18n-translations)
7. [Cross-Linking System](#7-cross-linking-system)
8. [Valid Type References](#8-valid-type-references)
9. [Common Mistakes & Gotchas](#9-common-mistakes--gotchas)
10. [Full Pipeline Example](#10-full-pipeline-example)
11. [Pre-Merge Checklist](#11-pre-merge-checklist)

---

## 1. Adding a Thinker (MasterMinds)

A "thinker" appears on the `/masterminds` gallery. Adding one requires **3 files touched**:

### 1a. Create the question file

**File**: `src/content/thinkers/<slug>.ts`

```typescript
import type { Question } from '../types';

export const <camelCaseName>Questions: Question[] = [
  {
    id: <uniqueId>,                    // See § ID Ranges below
    topic: '<slug>',                   // MUST match filename exactly
    difficulty: 'easy',                // 'easy' | 'hard' | 'sota' — NEVER 'medium'
    question: 'What is ...?',
    options: [
      'Correct answer',                // 4 options always
      'Distractor A',
      'Distractor B',
      'Distractor C',
    ],
    correctIndex: 0,                   // 0-based index into options[]
    explanation: 'Why the answer is correct. Use $LaTeX$ for formulas.',
    realWorld: 'Where/how this matters in practice.',
    hint: 'A helpful nudge without giving it away.',

    // ── Cross-links (all optional) ──────────────────────────

    symbolLinks: { 'λ': 'lambda' },    // Record<string, string> — NOT an array
    formulaLinks: ['lasso-l1-regularisation'],  // slug from equations.ts name
    glossaryLinks: ['lasso', 'regularization'], // glossary term IDs
  },
  // MINIMUM: 1 easy + 1 hard + 1 sota = 3 questions
  // RECOMMENDED: 2–3 per difficulty = 6–9 questions
];
```

**ID Ranges** (to avoid collisions):
- Main quiz topics: `1–20000`
- Thinkers: `20000–99999` (allocate ~100 per thinker)
- Bonafides: `100000+`
- Check existing IDs: `grep -r '\"id\":' src/content/thinkers/ | sort -t: -k3 -n`

### 1b. Register in the thinker config

**File**: `src/config/thinkers.ts` — add to the `THINKERS` array:

```typescript
{
  slug: "robert-tibshirani",           // kebab-case, matches filename
  name: "Robert Tibshirani",
  archetype: "The Sparsity Surgeon",   // Short poetic title
  emoji: "✂️",                         // Single emoji
  era: "1956–present",                 // "YYYY–YYYY" or "YYYY–present"
  domain: "Statistics & ML",           // Free-text display label
  fields: ['math', 'cs'],             // ⚠️ MUST be valid field slugs (see §8)
  description: "LASSO, elastic net, significance analysis of microarrays",
  color: "accent",                     // Tailwind color token
  tagline: "He taught regression to throw away what it doesn't need.",
  era_group: "contemporary",           // 'ancient' | 'modern' | 'contemporary' | 'prodigy'
  funFact: "The LASSO paper has over 50,000 citations.",  // Optional
},
```

**Valid `era_group` values:**
| Value          | Rough guideline               |
|----------------|-------------------------------|
| `ancient`      | Born before ~1800             |
| `modern`       | Born ~1800–1950               |
| `contemporary` | Born after ~1950              |
| `prodigy`      | Any era, notable for youth    |

**Valid `fields` slugs:**
`math`, `physics`, `chemistry`, `biology`, `cs`, `earth-space`, `engineering`, `economics`, `quant`

**Valid `color` tokens:**
`primary`, `secondary`, `accent`, `destructive`, `success`, `info`, `warning`

### 1c. Register in the thinker index

**File**: `src/content/thinkers/index.ts`

Two changes:

```typescript
// 1. Add import (near related thinkers)
import { robertTibshiraniQuestions } from "./robert-tibshirani";

// 2. Spread into allThinkerQuestions array
export const allThinkerQuestions: Question[] = [
  ...robertTibshiraniQuestions,  // ← ADD THIS
  // ... existing entries
];
```

> ⚠️ **CRITICAL**: If you add the import but forget the spread, the thinker appears
> in the gallery but has zero questions — the quiz will be empty!

---

## 2. Adding Quiz Questions

Quiz questions follow the `Question` interface defined in `src/content/types.ts`.

### Full interface

```typescript
interface Question {
  id: number;                          // Globally unique
  topic: string;                       // Slug matching the content module
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;                    // Supports $LaTeX$
  options: string[];                   // Exactly 4 strings
  correctIndex: number;                // 0 | 1 | 2 | 3
  explanation: string;                 // Supports $LaTeX$
  realWorld: string;
  hint: string;

  // Optional cross-links
  symbolLinks?: Record<string, string>;   // { 'λ': 'lambda' }
  formulaLinks?: string[];                // ['euler-identity']
  glossaryLinks?: string[];               // ['fourier-transform']

  // SOTA questions can cite papers
  paper?: {
    title: string;
    url: string;
    venue?: string;    // e.g. 'NeurIPS 2024'
    year?: number;
  };
}
```

### Quality standards

- **Easy**: Foundational — "What is X?" or "Who invented Y?"
- **Hard**: Requires understanding — "Why does X work?" or "What property does Y exploit?"
- **SOTA**: Research-level — "How does X improve on Y in the 2024 paper?"
- All options should be plausible (no joke answers)
- Explanation should teach, not just confirm
- `realWorld` should ground the concept in practice
- Wrap all math in `$...$` (inline) or `$$...$$` (block)

---

## 3. Adding Glossary Terms

Glossary terms are displayed as flashcards on `/glossary`.

### Full interface

```typescript
interface GlossaryTerm {
  id: string;                          // Unique slug: 'big-o', 'fourier-transform'
  field: string;                       // Field slug: 'math', 'physics', 'cs', etc.
  topic?: string;                      // Finer grouping: 'quantum-mechanics'
  term: string;                        // Display name
  definition: string;                  // Supports $LaTeX$
  example?: string;                    // One-liner real-world usage

  // Visual / technical tabs
  formula?: string;                    // Hero formula: '$E = mc^2$'
  latex?: string;                      // Raw LaTeX source
  code?: string;                       // Lean 4 / pseudocode

  // Cross-links
  related?: string[];                  // Other glossary term IDs
  symbolLinks?: Record<string, string>; // { 'Σ': 'sigma' }
  formulaLinks?: string[];             // Links to Formulas page
  thinkerLinks?: string[];             // Links to MasterMinds
  questionIds?: string[];              // Quiz question IDs

  difficulty?: 'intro' | 'intermediate' | 'advanced';
}
```

> ⚠️ Glossary difficulty uses `'intro' | 'intermediate' | 'advanced'` — NOT `'easy' | 'hard' | 'sota'`

### Where to put terms

| Approach | When to use |
|----------|-------------|
| Add to existing file (e.g. `src/content/glossary/math.ts`) | Term fits an existing field file |
| Create new topic file (e.g. `src/content/glossary/statistical-learning.ts`) | New subfield with 3+ terms |
| Create localized folder (e.g. `src/content/glossary/earth-space/en.ts`) | Need multi-language support |

### If creating a NEW glossary file

**Step 1**: Create the file:

```typescript
// src/content/glossary/my-topic.ts
import type { GlossaryTerm } from './types';

export const myTopicTerms: GlossaryTerm[] = [
  {
    id: 'my-term',
    field: 'math',           // Must be a valid field slug
    term: 'My Term',
    definition: 'What it means. Use $x^2$ for math.',
    example: 'Used in machine learning for ...',
    formula: '$f(x) = x^2$',
    symbolLinks: { 'x': 'chi' },
    thinkerLinks: ['euler'],
    difficulty: 'intro',
  },
];
```

**Step 2**: Register in `src/content/glossary/index.ts`:

```typescript
// Add import
import { myTopicTerms } from './my-topic';

// Add to STATIC_TERMS array
const STATIC_TERMS: GlossaryTerm[] = [
  // ... existing
  ...myTopicTerms,
];
```

### If creating a LOCALIZED glossary folder

```
src/content/glossary/earth-space/
  en.ts   ← English terms
  es.ts   ← Spanish terms
```

Register in `index.ts`:
```typescript
import { earthSpaceTerms_en } from './earth-space/en';
import { earthSpaceTerms_es } from './earth-space/es';

const LOCALIZED_FIELDS: Record<string, Record<string, GlossaryTerm[]>> = {
  'earth-space': {
    en: earthSpaceTerms_en,
    es: earthSpaceTerms_es,
  },
};
```

---

## 4. Adding Equations (Formulas)

Equations appear on `/formulas`. Each entry in the `EQUATIONS` array in `src/config/equations.ts`.

### Full interface

```typescript
interface Equation {
  rank: number;                        // Sequential — use next available
  name: string;                        // Display name
  equation: string;                    // LaTeX string
  discoverer: string;
  year: string;                        // "1905" or "c. 300 BCE"
  field: string;                       // Free-text display label
  domain: Domain;                      // ⚠️ MUST be a valid Domain (see §8)
  subDomain: SubDomain;               // ⚠️ MUST be a valid SubDomain (see §8)
  domainEmoji: string;
  significance: string;
  constants: string;                   // Describe each variable
  applications: string;
  beauty: number;                      // 1–10 subjective elegance score
  difficulty: 'easy' | 'hard' | 'sota';
  tags: string[];                      // Lowercase, for search/filtering

  // Optional flags
  millenniumProblem?: boolean;
  nobelPrize?: boolean;
  unsolved?: boolean;
}
```

### Adding a new equation

```typescript
// In src/config/equations.ts, add to the EQUATIONS array:
{
  rank: 319,                           // Check last rank: grep 'rank:' src/config/equations.ts | tail -5
  name: "Elastic Net",
  equation: "\\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda_1\\|\\beta\\|_1 + \\lambda_2\\|\\beta\\|_2^2",
  discoverer: "Zou & Hastie",
  year: "2005",
  field: "High-Dimensional Statistics",
  domain: "Data Science",             // ← Must be exact Domain type
  subDomain: "Statistical Methods",   // ← Must be exact SubDomain type
  domainEmoji: "📡",
  significance: "Combines L1 and L2 penalties for grouped variable selection.",
  constants: "λ₁ = L1 weight, λ₂ = L2 weight, β = coefficients, X = design matrix",
  applications: "Genomics, NLP feature selection, financial modeling",
  beauty: 7,
  difficulty: "hard",
  tags: ["elastic net", "regularization", "statistics", "sparsity"],
},
```

### Adding a new SubDomain

If your equation needs a SubDomain that doesn't exist yet, add it to the `SubDomain` type:

```typescript
// At the top of src/config/equations.ts
export type SubDomain =
  // ... existing entries
  | "Your New SubDomain";   // ← Add here under the correct domain comment
```

> ⚠️ **CRITICAL**: Using a `domain` or `subDomain` value that isn't in the type
> will cause `TypeError: Cannot read properties of undefined (reading 'domain')`
> at runtime. The TypeScript compiler may not catch this if the field is typed as `string`.

---

## 5. Adding a Field

Fields are the top-level categories (Math, Physics, CS, etc.) used across quiz, glossary, and thinker filtering.

**File**: `src/config/fields.ts`

```typescript
{
  slug: 'neuroscience',               // kebab-case, used everywhere as reference
  label: 'Neuroscience',              // Display name
  emoji: '🧠',
  description: 'Computational neuroscience, neural coding, brain-computer interfaces',
  topics: ['neural-coding', 'brain-imaging', 'synaptic-plasticity'],
  color: 'success',                    // Tailwind color token
  available: true,                     // false = "Coming Soon" in UI
},
```

After adding a field:
- Create topic content files in `src/content/<field-slug>/`
- Add glossary terms with `field: '<field-slug>'`
- Reference it in thinker `fields: [...]` arrays

---

## 6. Adding i18n Translations

### Thinker translations

**File**: `src/i18n/locales/thinkers/<lang>.json`

```json
{
  "thinker.robert-tibshirani.name": "Robert Tibshirani",
  "thinker.robert-tibshirani.archetype": "El Cirujano de la Esparsidad",
  "thinker.robert-tibshirani.tagline": "Enseñó a la regresión a desechar lo que no necesita.",
  "thinker.robert-tibshirani.description": "LASSO, red elástica, análisis de significancia de microarrays"
}
```

**Supported locales**: `es`, `fr`, `de`, `it`, `zh`, `ja`, `ko`, `hi`, `pt`

### Question translations

**File**: `src/i18n/locales/questions/<lang>.json`

```json
{
  "q.21300.question": "¿Qué significa LASSO?",
  "q.21300.hint": "El nombre describe la regresión con penalización L1.",
  "q.21300.options.0": "Least Absolute Shrinkage and Selection Operator",
  "q.21300.options.1": "Linear Algebraic Sparse Signal Optimizer"
}
```

### Glossary translations

Use the localized folder pattern (see §3).

---

## 7. Cross-Linking System

Maith's power comes from cross-references between content types. Here's how they connect:

```
┌─────────────┐   symbolLinks    ┌──────────────┐
│  Questions   │────────────────→│  GeekToMe   │
│  (quiz)      │   formulaLinks  │  (external)  │
│              │────────────────→│              │
│              │   glossaryLinks ┌──────────────┐
│              │────────────────→│  Glossary    │
└─────────────┘                  │  (flashcards)│
                                 │              │
┌─────────────┐   thinkerLinks   │              │
│  Glossary   │────────────────→│  Thinkers    │
│  Terms      │   formulaLinks  │  (gallery)   │
│              │────────────────→│              │
│              │   symbolLinks   ┌──────────────┐
│              │────────────────→│  Formulas    │
└─────────────┘                  │  (equations) │
                                 └──────────────┘
```

### Link field reference

| Field | Type | Source → Target | Example |
|-------|------|-----------------|---------|
| `symbolLinks` | `Record<string, string>` | Any → GeekToMe | `{ 'λ': 'lambda' }` |
| `formulaLinks` | `string[]` | Any → Formulas page | `['euler-identity']` |
| `glossaryLinks` | `string[]` | Questions → Glossary | `['fourier-transform']` |
| `thinkerLinks` | `string[]` | Glossary → MasterMinds | `['euler', 'gauss']` |
| `related` | `string[]` | Glossary → Glossary | `['big-o', 'time-complexity']` |

### How slugs resolve

- **`symbolLinks`**: Value is a GeekToMe letter slug → links to `https://geektome.lovable.app/letter/<slug>`
- **`formulaLinks`**: Slug is URL-encoded and sent as `?q=` param → `/formulas?q=<slug>`
- **`glossaryLinks`**: Slug is sent as `?term=` param → `/glossary?term=<slug>`
- **`thinkerLinks`**: Slug is sent as `?q=` param → `/masterminds?q=<slug>`

### UI rendering

Cross-links are rendered by `CrossLinkPills` component (`src/components/glossary/CrossLinkPills.tsx`):
- 🔤 = Symbol link (external, opens in new tab)
- 📐 = Formula link (internal navigation)
- 🧠 = Thinker link (internal navigation)
- 📖 = Glossary link (internal navigation)

---

## 8. Valid Type References

### Question difficulty
```typescript
type QuestionDifficulty = 'easy' | 'hard' | 'sota';
// NEVER use 'medium', 'intermediate', 'beginner', etc.
```

### Glossary difficulty
```typescript
type GlossaryDifficulty = 'intro' | 'intermediate' | 'advanced';
// Different from question difficulty!
```

### Equation Domain (EXACT strings required)
```typescript
type Domain =
  | "Mathematics"
  | "Physics"
  | "Chemistry"
  | "Biology & Medicine"
  | "Computer Science"
  | "Finance & Quant"
  | "Economics"
  | "Engineering"
  | "Data Science"
  | "Earth & Space"
  | "Philosophy & Foundations";
```

### Equation SubDomain (EXACT strings required)
```typescript
type SubDomain =
  // Mathematics
  | "Core Foundations" | "Calculus & Analysis" | "Linear Algebra & Systems"
  | "Probability & Statistics" | "Discrete Mathematics" | "Differential Equations"
  | "Optimization" | "Pure Mathematics" | "Applied Mathematics"
  // Physics
  | "Classical Mechanics" | "Electromagnetism" | "Quantum Mechanics"
  | "Thermodynamics & Stat Mech" | "Relativity & Gravity" | "Condensed Matter & Applied"
  | "Ergodic Theory" | "Hamiltonian Dynamics" | "Brownian Motion" | "Transport Theory"
  // Chemistry
  | "Physical Chemistry" | "Organic Chemistry" | "Materials Science"
  | "Systems Chemistry" | "Origin of Life" | "Replicating Systems"
  // Biology & Medicine
  | "Molecular Biology" | "Genetics & Evolution" | "Ecology & Systems Bio"
  | "Neuroscience" | "Medical Sciences"
  // CS
  | "Theory of Computation" | "AI & Machine Learning" | "Systems" | "Quantum Computing"
  // Finance
  | "Derivatives Pricing" | "Portfolio Theory" | "Risk Management"
  | "Stochastic Calculus" | "Market Microstructure" | "Prediction Markets"
  // Economics
  | "Microeconomics" | "Macroeconomics" | "Econometrics"
  // Engineering
  | "Electrical Engineering" | "Mechanical Engineering"
  | "Aerospace Engineering" | "Chemical Engineering"
  // Data Science
  | "Statistical Methods" | "Information Theory"
  // Earth & Space
  | "Astronomy & Astrophysics" | "Geosciences" | "Geomorphology"
  | "Sediment Transport" | "Landscape Dynamics"
  // Philosophy
  | "Philosophy of Mathematics" | "Mathematical Logic";
```

### Thinker era_group
```typescript
type EraGroup = 'ancient' | 'modern' | 'contemporary' | 'prodigy';
```

### Valid field slugs (for thinker `fields[]` and glossary `field`)
```
math, physics, chemistry, biology, cs, earth-space,
engineering, economics, quant, sota-2024, sota-2025, sota-2026
```

### Thinker color tokens
```
primary, secondary, accent, destructive, success, info, warning
```

---

## 9. Common Mistakes & Gotchas

### ❌ Build-breaking mistakes

| Mistake | Error you'll see | Fix |
|---------|-----------------|-----|
| Invalid `domain` in equation | `TypeError: Cannot read properties of undefined (reading 'domain')` | Use exact `Domain` type string |
| Invalid `subDomain` | Same as above | Use exact `SubDomain` type string |
| Invalid `fields` slug in thinker | Thinker won't appear under field filter | Use valid field slugs from `fields.ts` |
| `difficulty: 'medium'` | TypeScript error | Only `'easy' \| 'hard' \| 'sota'` |
| `symbolLinks: ['lambda']` | TypeScript error | Must be `Record<string, string>`: `{ 'λ': 'lambda' }` |
| Trailing comma after last array item (in some contexts) | Parse error | Remove trailing comma or ensure valid JSON |

### ❌ Silent failures (no error, but broken)

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Import without spread in `allThinkerQuestions` | Thinker shows in gallery but quiz has 0 questions | Add `...myQuestions,` to the array |
| Glossary file not registered in `index.ts` | Terms don't appear in glossary | Import and spread in `STATIC_TERMS` |
| `topic` doesn't match filename | Questions won't load for that thinker | `foo-bar.ts` → `topic: 'foo-bar'` |
| Duplicate question IDs | Only one question survives | Ensure globally unique IDs |
| Duplicate glossary term IDs | Only one term survives | Ensure globally unique IDs |
| Duplicate equation ranks | Display/sort issues | Use next available rank |

### ❌ LaTeX mistakes

| Mistake | Fix |
|---------|-----|
| `\partial` (single backslash in TS) | `\\partial` (escaped) |
| `\frac{a}{b}` | `\\frac{a}{b}` |
| Missing `$...$` delimiters | Wrap inline math in `$...$` |
| Using `\(` instead of `$` | KaTeX uses `$` delimiters |

---

## 10. Full Pipeline Example

**Goal**: Add Ada Lovelace with glossary terms and equations.

### Step 1: Questions
Create `src/content/thinkers/ada-lovelace.ts` with 6 questions (2 easy, 2 hard, 2 sota).

### Step 2: Thinker config
Add to `THINKERS` in `src/config/thinkers.ts`:
```typescript
{
  slug: "ada-lovelace",
  name: "Ada Lovelace",
  archetype: "The First Programmer",
  emoji: "💻",
  era: "1815–1852",
  domain: "Computing & Mathematics",
  fields: ['cs', 'math'],
  description: "First algorithm, Analytical Engine notes, computational thinking",
  color: "accent",
  tagline: "She saw the machine could do more than calculate.",
  era_group: "ancient",
  funFact: "Her notes on Babbage's Analytical Engine are considered the first computer program.",
},
```

### Step 3: Thinker index
In `src/content/thinkers/index.ts`:
```typescript
import { adaLovelaceQuestions } from "./ada-lovelace";
// In allThinkerQuestions:
...adaLovelaceQuestions,
```

### Step 4: Glossary
Add terms to `src/content/glossary/cs.ts` (or new file):
```typescript
{
  id: 'algorithm',
  field: 'cs',
  term: 'Algorithm',
  definition: 'A finite sequence of well-defined instructions...',
  thinkerLinks: ['ada-lovelace', 'alan-turing'],
  difficulty: 'intro',
},
```

### Step 5: Equations
Add to `src/config/equations.ts`:
```typescript
{
  rank: 320,
  name: "Bernoulli Numbers (Lovelace Algorithm)",
  equation: "B_n = -\\sum_{k=0}^{n-1} \\binom{n}{k} \\frac{B_k}{n-k+1}",
  discoverer: "Ada Lovelace",
  year: "1843",
  field: "Number Theory / Computing",
  domain: "Mathematics",
  subDomain: "Pure Mathematics",
  domainEmoji: "🔢",
  significance: "First published algorithm intended for machine execution.",
  constants: "B_n = nth Bernoulli number",
  applications: "Number theory, asymptotic analysis, computing history",
  beauty: 8,
  difficulty: "hard",
  tags: ["bernoulli", "algorithm", "lovelace", "computation"],
},
```

### Step 6: Verify
```bash
npm run build          # Catches type errors
# Then in browser:
# /masterminds → search "Lovelace" → start quiz → verify questions load
# /glossary → search "algorithm" → verify cross-link pills
# /formulas → search "Bernoulli" → verify equation renders
```

---

## 11. Pre-Merge Checklist

### Questions
- [ ] File created at `src/content/thinkers/<slug>.ts`
- [ ] Minimum 3 questions: 1 easy, 1 hard, 1 sota
- [ ] All IDs are globally unique (not used by any other file)
- [ ] `topic` field matches the filename slug exactly
- [ ] `difficulty` is strictly `'easy' | 'hard' | 'sota'`
- [ ] `symbolLinks` is `Record<string, string>` (not array)
- [ ] `correctIndex` is valid (0–3)
- [ ] Exactly 4 options per question
- [ ] LaTeX is properly escaped (`\\frac`, `\\partial`, etc.)
- [ ] Import added to `src/content/thinkers/index.ts`
- [ ] **Spread added to `allThinkerQuestions` array** ← most common miss

### Thinker config
- [ ] Entry added to `THINKERS` in `src/config/thinkers.ts`
- [ ] `slug` matches question file name and `topic` field
- [ ] `fields` uses only valid field slugs from `src/config/fields.ts`
- [ ] `era_group` is `'ancient' | 'modern' | 'contemporary' | 'prodigy'`
- [ ] No trailing syntax errors (commas, brackets)

### Glossary
- [ ] Terms have unique `id` values
- [ ] `field` uses valid field slug
- [ ] `difficulty` uses `'intro' | 'intermediate' | 'advanced'` (NOT question difficulty)
- [ ] New files registered in `src/content/glossary/index.ts` (import + spread)
- [ ] Cross-links (`thinkerLinks`, `formulaLinks`, `symbolLinks`) use correct slugs

### Equations
- [ ] `rank` is next available (no duplicates)
- [ ] `domain` is an exact match from the `Domain` type
- [ ] `subDomain` is an exact match from the `SubDomain` type
- [ ] If new SubDomain needed, added to the `SubDomain` type definition
- [ ] LaTeX properly escaped with double backslashes
- [ ] `difficulty` is `'easy' | 'hard' | 'sota'`

### Build
- [ ] `npm run build` passes
- [ ] No runtime errors in browser console
- [ ] Thinker appears in gallery and quiz loads with questions
- [ ] Glossary terms appear and cross-link pills work
- [ ] Equations render correctly on Formulas page
