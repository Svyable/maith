// ── Quiz Domain — public API ──────────────────────────────────────────
export type { PublicQuestion, CheckResult, QuizState, QuizConfig, SessionSubmitParams, MissedQuestion, SkippedQuestion } from './types';
export { fisherYatesShuffle, stripAnswers, buildInitialState, applyAnswer, advanceQuestion, skipCurrentQuestion, endQuiz } from './engine';
export {
  fetchQuestions,
  checkAnswer,
  submitSession,
  selectQuestionsLocal,
  localFallbackCheck,
  fetchThinkerQuestions,
  checkThinkerAnswer,
} from './service';
