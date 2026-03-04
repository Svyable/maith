// Canonical question type — used everywhere
export type QuestionDifficulty = 'easy' | 'hard' | 'sota';

export interface Question {
  id: number;
  topic: string;
  difficulty: QuestionDifficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  realWorld: string;
  hint: string;
  /** Maps a symbol key (e.g. "n") to its greektome letter slug (e.g. "nu") */
  symbolLinks?: Record<string, string>;
}
