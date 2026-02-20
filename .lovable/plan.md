
# Comprehensive Architecture Plan: Field-Scoped Platform + Quiz Domain Service

## What We're Building

The app currently works as a flat Math quiz with a Who's Who thinker mode bolted on. This plan introduces:

1. A **Field Registry** — a first-class concept that groups topics into Fields (Math, Physics, Finance/Quant, Chemistry, etc.)
2. A **Quiz Domain Service** — a formal `src/domain/quiz/` module that owns all quiz logic, types, and state transitions, extracted from `useQuiz.ts` and `Thinkers.tsx`
3. A **ThinkerMap design document** codified as a runtime registry pattern for extensibility
4. **New content packs**: Physics, Quant/Finance, and Chemistry — each properly scoped
5. A **Field Hub** home screen layer that lets users navigate by Field first, then Topic

---

## Current Architecture Gaps (Audit Findings)

```text
CURRENT                             PROBLEM
─────────────────────────────────── ─────────────────────────────────────
useQuiz.ts                          Business logic + state + server calls
                                    all in one hook — violates SRP
Thinkers.tsx                        Duplicates 80% of useQuiz logic
                                    (applyAnswer, state shape, shuffle)
content/index.ts                    Flat list — no Field concept.
                                    "What field is calculus in?" unknown
HomeScreen.tsx                      Hardcoded "20 legendary thinkers" text
                                    Knows about thinker count (wrong layer)
config/constants.ts                 TOPICS array has no field grouping
                                    — adding Quant topics has no home
Thinkers.tsx                        DIFFICULTY hardcoded as const 'ADVN'
                                    — players can't choose difficulty
```

---

## Step-by-Step Implementation Plan

### Step 1 — Introduce the Field Registry (Config Layer)

Create `src/config/fields.ts` — single source of truth for Fields.

```text
FieldMeta {
  slug: string           // 'math' | 'physics' | 'quant' | 'chemistry'
  label: string          // 'Mathematics'
  emoji: string          // '📐'
  description: string
  topics: string[]       // topic slugs that belong to this field
  color: string
  available: boolean     // false = "Coming Soon" state
}
```

Initial Fields:
- **Mathematics** — `linear-algebra`, `calculus`, `probability-stats`, `optimization`, `discrete-math`
- **Physics** — `classical-mechanics`, `quantum-mechanics`, `thermodynamics` (new, Coming Soon for non-initial)
- **Quant / Finance** — `stochastic-calculus`, `time-series`, `portfolio-theory`, `derivatives-pricing` (new, Coming Soon)
- **Chemistry** — `physical-chemistry`, `quantum-chemistry` (Coming Soon)

Update `src/config/constants.ts` — add `field` property to `TopicMeta`. The TOPICS array retains every existing slug unchanged.

---

### Step 2 — Quiz Domain Service (`src/domain/quiz/`)

Extract all quiz logic into a proper domain module:

```text
src/domain/
  scoring.ts              (existing — already clean)
  quiz/
    types.ts              PublicQuestion, CheckResult, QuizState, QuizConfig
    engine.ts             Pure functions: shuffle(), stripAnswers(),
                          applyAnswer(), buildInitialState()
    service.ts            QuizService class — fetch, check, session submit
    index.ts              re-exports
```

**`engine.ts`** (pure, testable, zero React):
- `fisherYatesShuffle<T>(arr: T[]): T[]`
- `stripAnswers(q: Question): PublicQuestion`
- `applyAnswer(state, result, q, difficulty): QuizState`
- `buildInitialState(): QuizState`

**`service.ts`** (I/O, zero React):
- `fetchQuestions(topics, count, locale): Promise<PublicQuestion[]>`
- `checkAnswer(questionId, selectedIndex, locale): Promise<CheckResult | null>`
- `localFallbackCheck(questionId, selectedIndex, questionPool): CheckResult | null`
- `submitSession(userId, params): void`

**`useQuiz.ts`** becomes a thin React wrapper: it holds state and calls `service.ts` + `engine.ts`. No more business logic in the hook itself.

**`Thinkers.tsx`** deletes its duplicated answer/shuffle logic entirely and calls the same service layer. A new `useThinkerQuiz` hook in `src/hooks/` wraps the domain service for the thinker context.

---

### Step 3 — ThinkerMap Design Doc (Runtime Registry Pattern)

`src/config/thinkers.ts` gains a formal `THINKER_REGISTRY` comment block documenting:

- How to add a new thinker pack: add entry to `THINKERS` array + create `src/content/thinkers/<slug>.ts` + export from `src/content/thinkers/index.ts`
- `era_group` values: `'ancient' | 'modern' | 'contemporary'` (add `contemporary` for living figures)
- Exportable `THINKER_REGISTRY` typed map replaces ad-hoc `THINKER_MAP` naming

---

### Step 4 — New Content Packs

**Physics Pack** (`src/content/physics/`):
- Topics: `quantum-mechanics` (10 easy, 10 hard, 5 sota) and `classical-mechanics` (10 easy, 10 hard, 5 sota)
- Registered in `TOPICS` under field `'physics'`
- Questions use LaTeX: Schrödinger, Hamiltonians, F=ma, Lagrangians, path integrals

**Quant / Finance Pack** (`src/content/quant/`):
- Topics: `stochastic-calculus` (Itô's lemma, Brownian motion, SDEs), `derivatives-pricing` (Black-Scholes, Greeks, risk-neutral)
- 10 easy + 10 hard + 5 sota per topic
- Registered under field `'quant'`

Both packs follow the exact same file format as existing content (id, topic, difficulty, question, options, correctIndex, explanation, realWorld, hint).

ID ranges to avoid collisions:
- Physics: 20001–20999
- Quant: 30001–30999

---

### Step 5 — Field Hub UI (Home Screen Evolution)

**`HomeScreen.tsx`** gains a Field Selector layer above the Topic Selector:

```text
┌──────────────────────────────────────┐
│  🧠  Math Mastery                    │
│  "Quote of the day"                  │
├──────────────────────────────────────┤
│  FIELD                               │
│  [📐 Math] [⚛ Physics] [📈 Quant]  │
│            [🧪 Chem]                 │
├──────────────────────────────────────┤
│  TOPICS IN SELECTED FIELD            │
│  (filtered TopicSelector)            │
├──────────────────────────────────────┤
│  DIFFICULTY                          │
│  [EASY] [ADVN] [SOTA]               │
├──────────────────────────────────────┤
│  [▶ START QUIZ]                      │
│  [🎓 Who's Who →]                   │
└──────────────────────────────────────┘
```

- Fields with `available: false` show a "Coming Soon" badge and are not clickable
- Selecting a field filters the topic list to only that field's topics
- "All Fields" option shows all available topics (current behavior preserved)
- New `FieldSelector` component: `src/components/FieldSelector.tsx`

---

### Step 6 — Thinker Difficulty Unlock

`Thinkers.tsx` currently hardcodes `DIFFICULTY = 'ADVN'`. Fix:

- Gallery screen gets a compact difficulty picker (same `DifficultyPicker` component reused)
- Difficulty state stored in thinker page state
- `useThinkerQuiz` receives difficulty and passes correct `questionsPerQuiz` count from `getDifficultyMeta`
- Scoring reflects chosen difficulty (already works via `calculatePoints`)

---

### Step 7 — Routing Extension

`App.tsx` additions:
```text
/fields              → FieldHub page (optional future deep-link)
/thinkers            → Thinkers (existing, unchanged path)
/leaderboard         → Leaderboard (unchanged)
/profile             → Profile (unchanged)
```

No breaking route changes. `HomeScreen` navigates to `/thinkers` as before. Physics/Quant topics appear in the main quiz flow automatically through the field filter.

---

## File Map: What Changes vs What's New

```text
NEW FILES
─────────────────────────────────────
src/config/fields.ts                  Field registry
src/domain/quiz/types.ts              Shared types (moved from useQuiz.ts)
src/domain/quiz/engine.ts             Pure quiz functions
src/domain/quiz/service.ts            I/O layer (server + local fallback)
src/domain/quiz/index.ts              Re-exports
src/components/FieldSelector.tsx      Field pill picker UI
src/hooks/useThinkerQuiz.ts           Thin hook wrapping quiz domain service
src/content/physics/easy.ts           ~25 questions
src/content/physics/hard.ts           ~25 questions
src/content/physics/sota.ts           ~10 questions
src/content/physics/index.ts
src/content/quant/easy.ts             ~25 questions
src/content/quant/hard.ts             ~25 questions
src/content/quant/sota.ts             ~10 questions
src/content/quant/index.ts

MODIFIED FILES
─────────────────────────────────────
src/config/constants.ts               Add field: string to TopicMeta,
                                      add physics + quant topics
src/config/thinkers.ts                Add 'contemporary' era_group,
                                      formalize THINKER_REGISTRY
src/hooks/useQuiz.ts                  Thin wrapper — delegates to domain/quiz
src/pages/Thinkers.tsx                Remove duplicated logic, use useThinkerQuiz
                                      + add difficulty picker
src/components/HomeScreen.tsx         Add FieldSelector above TopicSelector
src/content/index.ts                  Add physics + quant to allQuestions
```

---

## SOLID Principles Applied

| Principle | Application |
|---|---|
| Single Responsibility | `engine.ts` = pure logic only; `service.ts` = I/O only; hook = React state only |
| Open/Closed | Adding new fields/topics requires only new files + one config entry — zero existing file changes |
| Liskov Substitution | `PublicQuestion` and `CheckResult` types are stable contracts both quiz modes share |
| Interface Segregation | `QuizConfig` separates field/topic/difficulty from session submission params |
| Dependency Inversion | `useQuiz` depends on `QuizService` interface, not the Supabase client directly |

---

## DRY Improvements

- Fisher-Yates shuffle: currently in both `useQuiz.ts` and `Thinkers.tsx` → moves to `engine.ts` once
- `applyAnswer` logic: currently duplicated in `useQuiz.ts` and `Thinkers.tsx` → `engine.ts` once
- Session submission RPC: currently duplicated in `Index.tsx` and `Thinkers.tsx` → `service.submitSession()` once
- `buildInitialState()`: duplicated across both pages → `engine.ts` once

---

## Content Volume After This Plan

```text
Field           Topics                    Questions (approx)
──────────────  ────────────────────────  ───────────
Mathematics     5 existing topics         120+
Physics         quantum + classical       60 new
Quant/Finance   stochastic + derivatives  60 new
Who's Who       21 thinkers               210+
──────────────  ────────────────────────  ───────────
TOTAL                                     ~450+ questions
```
