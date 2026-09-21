import type { QuestionDifficulty } from '@/content/types';

export type MasteryStatus =
  | 'unseen'
  | 'learning'
  | 'developing'
  | 'strong'
  | 'mastered';

export interface AnswerAssistance {
  hintUsed?: boolean;
  eliminateUsed?: boolean;
  timedOut?: boolean;
}

export type EvidenceOutcome = 'answered' | 'skipped';

export interface ConceptEvidence {
  conceptId: string;
  questionId: number;
  topic: string;
  difficulty: QuestionDifficulty;
  outcome: EvidenceOutcome;
  correct: boolean;
  hintUsed: boolean;
  eliminateUsed: boolean;
  timedOut: boolean;
  primary: boolean;
}

export interface ConceptMastery {
  conceptId: string;
  label: string;
  status: Exclude<MasteryStatus, 'unseen'>;
  attempts: number;
  correct: number;
  independentCorrect: number;
  assistedCorrect: number;
  hardOrSotaCorrect: number;
  accuracy: number;
  prerequisiteIds: readonly string[];
}
