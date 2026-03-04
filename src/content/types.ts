// Canonical question type — used everywhere
export interface Question {
  id: number;
  topic: string;
  difficulty: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  realWorld: string;
  hint: string;
  symbolLinks?: Record<
    string,
    {
      latex: string;
      greektome: string;
      description: string;
    }
  >;
}
