// ── Quiz Domain Types ─────────────────────────────────────────────────
// Stable contracts shared by useQuiz, useThinkerQuiz, and all quiz modes.

export interface PublicQuestion {
  id: number;
  topic: string;
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;
  options: string[];
  hint: string;
  /** Maps shuffled index → original index so answer checks work correctly */
  originalIndices: number[];
  /** Source paper metadata (SOTA questions) */
  paper?: { title: string; url: string; venue?: string; year?: number };
  /** Glossary term IDs for cross-linking */
  glossaryLinks?: string[];
  /** Formula names for cross-linking */
  formulaLinks?: string[];
}

export interface CheckResult {
  correct: boolean;
  correctIndex: number;
  explanation: string;
  realWorld: string;
  /** Maps symbol key → geektome letter slug for linking */
  symbolLinks?: Record<string, string>;
  /** Glossary term IDs for cross-linking */
  glossaryLinks?: string[];
  /** Formula names for cross-linking */
  formulaLinks?: string[];
}

export interface MissedQuestion {
  question: PublicQuestion;
  /** Visible option index from the shuffled UI; -1 for a timeout. */
  selectedIndex: number;
  checkResult: CheckResult;
}

export interface SkippedQuestion {
  question: PublicQuestion;
}

export interface QuizState {
  currentIndex: number;
  score: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  correctAnswered: number;
  answeredIds: number[];
  topicBreakdown: Record<string, { correct: number; total: number }>;
  difficultyBreakdown: Record<string, { correct: number; total: number }>;
  isFinished: boolean;
  currentQuestions: PublicQuestion[];
  loading: boolean;
  loadingProgress: { loaded: number; total: number } | null;
  loadError: boolean;
  lastCheckResult: CheckResult | null;
  missedQuestions: MissedQuestion[];
  skippedQuestions: SkippedQuestion[];
}

export interface QuizConfig {
  topics: string[];
  difficulties: import('@/config/constants').Difficulty[];
  count: number;
  locale: string;
}

export interface SessionSubmitParams {
  topics: string[];
  difficulty: import('@/config/constants').Difficulty;
  score: number;
  totalAnswered: number;
  correctAnswered: number;
  bestStreak: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  contentVersion: string;
}
