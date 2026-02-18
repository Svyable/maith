// Canonical question type — used everywhere
export interface Question {
  id: number;
  topic: string;          // slug like 'linear-algebra'
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;       // supports LaTeX ($...$)
  options: string[];
  correctIndex: number;
  explanation: string;
  realWorld: string;
  hint: string;           // contextual clue shown before answering
}
