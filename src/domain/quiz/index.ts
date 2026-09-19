// ── Quiz Domain — public API ──────────────────────────────────────────
export type { PublicQuestion, CheckResult, QuizState, QuizConfig, SessionSubmitParams, MissedQuestion, SkippedQuestion } from './types';
export {
  fisherYatesShuffle,
  getSafeEliminationIndices,
  getVisibleOptionIndex,
  reshufflePublicQuestion,
  stripAnswers,
  buildInitialState,
  buildRemediationState,
  applyAnswer,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz,
} from './engine';
