// Canonical question type — used everywhere
export type QuestionDifficulty = 'easy' | 'hard' | 'sota';

export interface QuestionPaper {
  title: string;
  url: string;
  venue?: string;
  year?: number;
}

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
  /** Maps a symbol key (e.g. "n") to its geektome letter slug (e.g. "nu") */
  symbolLinks?: Record<string, string>;
  /** Source paper metadata for SOTA questions */
  paper?: QuestionPaper;
  /** Glossary term IDs for cross-linking (e.g. ['big-o', 'transformer']) */
  glossaryLinks?: string[];
  /** Formula names for cross-linking to the Formulas page */
  formulaLinks?: string[];
}
