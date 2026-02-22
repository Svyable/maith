// ── Quiz Domain Types ─────────────────────────────────────────────────
// Stable contracts shared by useQuiz, useThinkerQuiz, and all quiz modes.

export interface PublicQuestion {
  id: number;
  topic: string;
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;
  options: string[];
  hint: string;
}

export interface CheckResult {
  correct: boolean;
  correctIndex: number;
  explanation: string;
  realWorld: string;
}

export interface MissedQuestion {
  question: PublicQuestion;
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
