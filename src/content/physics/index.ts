import { physicsEasyQuestions, physicsHardQuestions, physicsSotaQuestions } from './questions';
import type { Question } from '../types';

export const physicsQuestions: Question[] = [
  ...physicsEasyQuestions,
  ...physicsHardQuestions,
  ...physicsSotaQuestions,
];
