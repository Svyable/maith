// ── Quiz Domain — public API ──────────────────────────────────────────
export type { PublicQuestion, CheckResult, QuizState, QuizConfig, SessionSubmitParams, MissedQuestion } from './types';
export { fisherYatesShuffle, stripAnswers, buildInitialState, applyAnswer, advanceQuestion } from './engine';
export {
  fetchQuestions,
  checkAnswer,
  submitSession,
  selectQuestionsLocal,
  localFallbackCheck,
  fetchThinkerQuestions,
  checkThinkerAnswer,
} from './service';
