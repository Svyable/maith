

# Refactor: Remove Dual Local/Server Question Fetching

## Problem
The current quiz startup uses a "local-first" strategy that immediately loads questions from the local bundle, then fires a background request to the `quiz-next` backend function. If the server responds before the user answers, it **swaps the entire question set mid-session**, causing a jarring visual jump and potentially confusing gameplay.

Since all questions already live in the local content bundle (500+ questions across all topics), and answer validation is already fully local, the server fetch adds no value -- only complexity and UX bugs.

## Solution
Simplify to a single, clean local-only question pipeline. Remove the server-fetch code paths from the service layer and the hook.

## Changes

### 1. Simplify `src/domain/quiz/service.ts`
- **Remove** the `fetchQuestionsLocalFirst` function (the dual local+server strategy)
- **Remove** the `fetchQuestions` async function (legacy server-first with local fallback)
- **Rename** `selectQuestionsLocal` to `fetchQuestions` -- this becomes the single canonical way to get questions
- Remove the unused `supabase` import (no more server calls for question fetching)
- Remove unused `getLocale` import
- Keep `checkAnswer`, `submitSession`, thinker helpers, and `localFallbackCheck` unchanged

### 2. Update `src/domain/quiz/index.ts`
- Export the renamed `fetchQuestions` instead of the removed functions
- Remove `fetchQuestionsLocalFirst` from exports

### 3. Simplify `src/hooks/useQuiz.ts`
- Import `fetchQuestions` (the renamed local-only function) instead of `fetchQuestionsLocalFirst`
- Remove the `onServerQuestions` callback and swap logic from `initQuiz`
- The init becomes a clean synchronous call: get questions, set state, done

### 4. Clean up edge functions (optional, no deletion needed)
- The `quiz-next` and `quiz-check` edge functions remain deployed but are no longer called during standard quiz gameplay
- They can still serve future API consumers or be removed in a later cleanup

## Technical Detail

**Before** (useQuiz.ts initQuiz):
```text
setState(buildInitialState())
localQuestions = fetchQuestionsLocalFirst(topics, diffs, pool, cap, (serverQs) => {
  setState(prev => {
    if (prev.totalAnswered > 0) return prev;  // race condition guard
    return { ...prev, currentQuestions: serverQs };
  });
});
setState(prev => ({ ...prev, currentQuestions: localQuestions, loading: false }));
```

**After**:
```text
setState(buildInitialState())
const questions = fetchQuestions(topics, diffs);
setState(prev => ({ ...prev, currentQuestions: questions, loading: false }));
```

No race conditions, no swaps, no background fetches. Single source of truth.

