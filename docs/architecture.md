# 🧠 Maith — Architecture & Game Modes Reference

> Living document for scaling the quiz platform across all game types.

---

## 1. Domain Layer (`src/domain/quiz/`)

All quiz logic is framework-agnostic and split into three files:

| File | Responsibility |
|------|---------------|
| `engine.ts` | **Pure functions** — state transitions, shuffle, strip answers. Zero I/O. |
| `service.ts` | **I/O layer** — server calls, local fallback, session submission. Zero React. |
| `types.ts` | **Shared contracts** — `PublicQuestion`, `CheckResult`, `QuizState`, etc. |

### Key Contracts

```
PublicQuestion   → what the UI sees (no correctIndex, no explanation)
CheckResult      → { correct, correctIndex, explanation, realWorld }
QuizState        → full session state (score, streak, breakdowns, missed/skipped)
SessionSubmitParams → payload for DB persistence
```

---

## 2. Game Modes

### 2.1 Standard Quiz (`useQuiz` → `Index.tsx`)

| Aspect | Detail |
|--------|--------|
| **Hook** | `src/hooks/useQuiz.ts` |
| **Page** | `src/pages/Index.tsx` |
| **Question pool** | `allQuestions` from `src/content/index.ts` (~1000+ questions) |
| **Selection** | Filter by topics + difficulties, shuffle, cap to `DEFAULT_QUIZ_CAP` (10) |
| **Loading** | **Local-first**: instant local set → background `quiz-next` edge function swap |
| **Answer check** | **Local only** (`localFallbackCheck`) — 0ms, full pool access |
| **Timer** | 30s universal (`QUESTION_TIME_SECONDS`) |
| **Scoring** | EASY=10, HARD=20, SOTA=35 base × streak multiplier (5% per streak, cap 2×) |
| **Session submit** | Via `submit_quiz_session` RPC on finish (authenticated users only) |
| **Features** | Skip, End Early, auto-answer on timeout, confetti on correct |

**Data flow:**
```
User selects topics/difficulties → startQuiz()
  → fetchQuestionsLocalFirst(topics, diffs, pool, 10, onServerSwap)
    → instantly returns local questions (quiz starts)
    → background: quiz-next edge fn → swap if user hasn't answered yet
  → answer() → localFallbackCheck() → applyAnswer() (pure)
  → advanceQuestion() / skipCurrentQuestion() / endQuiz()
  → useQuizSession submits to DB on finish
```

### 2.2 Thinker Quiz (`useThinkerQuiz` → `Thinkers.tsx`)

| Aspect | Detail |
|--------|--------|
| **Hook** | `src/hooks/useThinkerQuiz.ts` |
| **Page** | `src/pages/Thinkers.tsx` |
| **Question pool** | `allThinkerQuestions` from `src/content/thinkers/` (~250+ thinkers × ~5 Qs each) |
| **Selection** | Filter by thinker slug (`topic === slug`), no count cap (all Qs for that thinker) |
| **Answer check** | `checkThinkerAnswer()` → `localFallbackCheck()` against thinker pool |
| **Isolation** | Thinker questions are **completely separate** from the main pool |

**Key difference:** No `DEFAULT_QUIZ_CAP` — serves ALL questions for the selected thinker. No server fetch (pure local).

**Thinker content structure:**
```
src/content/thinkers/
  ├── euler.ts        # { slug, name, era, field, bio, questions: Question[] }
  ├── gauss.ts
  ├── turing.ts
  ├── ...             # ~250+ thinker files
  └── index.ts        # aggregates allThinkerQuestions
```

### 2.3 Vault (`useVaultProgress` → `Vault.tsx`)

| Aspect | Detail |
|--------|--------|
| **Hook** | `src/hooks/useVaultProgress.ts` |
| **Page** | `src/pages/Vault.tsx` |
| **Config** | `src/config/vault.ts` — 40 `VaultEntry` objects |
| **Question pool** | `vaultQuestions` from `src/content/vault/` |
| **Unlock mechanic** | Sequential level-by-level; each entry has a dedicated quiz question |
| **Persistence** | `localStorage` (`vault_unlocked_ids`) |
| **Content** | Preview always visible (name, codename, summary, impact meters) |
| **Redacted** | Full Story, Key Figures, Legacy are `████` until declassified |

**Vault entry schema:**
```ts
VaultEntry {
  id, rank, name, codename,
  classifiedYear, declassifiedYear,
  agency, field, domain, domainEmoji,
  summary, fullStory, keyFigures[], significance, legacy,
  relatedTopic, secrecyLevel (1-10), impact (1-10)
}
```

### 2.4 Daily Challenge (Edge Function)

| Aspect | Detail |
|--------|--------|
| **Edge function** | Deterministic seed from date → same questions for all users |
| **Scoring** | Same as standard quiz |
| **Leaderboard** | Weekly + all-time views |

### 2.5 Practice Mode

| Aspect | Detail |
|--------|--------|
| **Timer** | Disabled (untimed) |
| **Submission** | No leaderboard submission |
| **Purpose** | Stress-free learning |

---

## 3. Shared Orchestration (`useQuizSession`)

All timed quiz modes share `src/hooks/useQuizSession.ts`:

- **Timer management** — 30s countdown, auto-answer on expiry
- **Session counters** — correct/total per session
- **Confetti** — fires on correct answers
- **DB submission** — single-fire guard via `submittedRef`, calls `submit_quiz_session` RPC
- **Finish detection** — watches `quizState.isFinished`

---

## 4. Difficulty System

| Tier | Tag | Base Points | Description |
|------|-----|-------------|-------------|
| 🌱 EASY | `easy` | 10 | Fundamentals |
| ⚡ HARD | `hard` | 20 | Competitive |
| 🔥 SOTA | `sota` | 35 | Frontier research |

**Streak bonus:** `multiplier = 1 + streak × 0.05`, capped at `2.0×`

Users can select multiple difficulties. Timer is always 30s regardless of difficulty.

---

## 5. Content Architecture

### Question Type (canonical)
```ts
Question {
  id: number
  topic: string          // slug like 'linear-algebra'
  difficulty: 'easy' | 'hard' | 'sota'
  question: string       // supports LaTeX ($...$)
  options: string[]
  correctIndex: number
  explanation: string
  realWorld: string
  hint: string
}
```

### Content Pools (isolated)

| Pool | Source | Used By |
|------|--------|---------|
| `allQuestions` | `src/content/index.ts` | Standard Quiz, Daily Challenge |
| `allThinkerQuestions` | `src/content/thinkers/index.ts` | Thinker Quiz |
| `vaultQuestions` | `src/content/vault/` | Vault |

### Field → Topic Hierarchy

20 fields, 80+ topics. Defined in:
- `src/config/fields.ts` — `FieldMeta[]` with `topics: string[]`
- `src/config/constants.ts` — `TopicMeta[]` with `field: string`

Fields include: Math, Physics, Chemistry, Biology, CS, Earth & Space, Engineering, Economics, Quant/Finance, CFA, CPA, Actuarial, MBA, Law, Medical, Data Science, Human Sciences, SOTA 2024/2025/2026.

---

## 6. Edge Functions

| Function | Purpose | Used By |
|----------|---------|---------|
| `quiz-next` | Fetch shuffled questions (with translation) | Standard Quiz (background fetch) |
| `quiz-check` | ~~Answer validation~~ **Deprecated** — local check used instead | None (kept for backward compat) |

**Why local check wins:** The edge function's `_shared/questions.ts` registry is a subset of the full client-side pool. Local check has 0ms latency and access to all questions.

---

## 7. Database Schema

| Table | Purpose |
|-------|---------|
| `profiles` | User display name, avatar, locale, username |
| `quiz_sessions` | Per-session results (score, streak, topic breakdown) |
| `user_stats` | Aggregated lifetime stats |
| `user_topic_stats` | Per-topic accuracy |
| `user_difficulty_stats` | Per-difficulty accuracy |

**Views:** `leaderboard_all_time`, `leaderboard_weekly`, `leaderboard_by_topic`

**RPC:** `submit_quiz_session` — atomic upsert of session + stats

---

## 8. Scaling Checklist

### Adding a New Game Mode
1. Create content in `src/content/<mode>/` with `Question[]` exports
2. Create hook `src/hooks/use<Mode>Quiz.ts` wrapping domain engine
3. Create page `src/pages/<Mode>.tsx`
4. Reuse `useQuizSession` for timer/submission/confetti
5. Add route in router

### Adding a New Field/Topic
1. Add `TopicMeta` to `TOPICS` in `src/config/constants.ts`
2. Add questions in `src/content/<topic>/`
3. Register in `src/content/index.ts` (`allQuestions`)
4. Add to `FieldMeta.topics[]` in `src/config/fields.ts`
5. Optionally sync to `supabase/functions/_shared/questions.ts` for server-side

### Adding a New Thinker
1. Create `src/content/thinkers/<name>.ts` with thinker metadata + questions
2. Export from `src/content/thinkers/index.ts`
3. No other changes needed — `useThinkerQuiz` auto-discovers via slug

### Adding a Vault Entry
1. Add `VaultEntry` to `VAULT_ENTRIES` in `src/config/vault.ts`
2. Add corresponding question to `src/content/vault/`
3. Entries unlock sequentially (no config needed)

---

## 9. Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Local-first loading | 0ms quiz start; server data swaps in if user hasn't answered |
| Local answer checking | Edge fn had incomplete question registry → 404 errors |
| Isolated question pools | Prevents thinker/vault content from contaminating standard quizzes |
| Pure engine functions | Testable without React; shared across all game modes |
| 10-question default cap | Balances session length with engagement |
| Universal 30s timer | Simplicity; difficulty affects points, not time |
| localStorage for Vault | No auth required for progression; low-stakes feature |
