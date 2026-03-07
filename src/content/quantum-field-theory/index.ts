import { qftEasyQuestions, qftHardQuestions, qftSotaQuestions } from './questions';
import type { Question } from '../types';

export const quantumFieldTheoryQuestions: Question[] = [
  ...qftEasyQuestions,
  ...qftHardQuestions,
  ...qftSotaQuestions,
];
