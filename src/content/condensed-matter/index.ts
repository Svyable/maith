import { condensedMatterEasyQuestions, condensedMatterHardQuestions, condensedMatterSotaQuestions } from './questions';
import type { Question } from '../types';

export const condensedMatterQuestions: Question[] = [
  ...condensedMatterEasyQuestions,
  ...condensedMatterHardQuestions,
  ...condensedMatterSotaQuestions,
];
