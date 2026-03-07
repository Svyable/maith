import { manyBodyEasyQuestions, manyBodyHardQuestions, manyBodySotaQuestions } from './questions';
import type { Question } from '../types';

export const manyBodyPhysicsQuestions: Question[] = [
  ...manyBodyEasyQuestions,
  ...manyBodyHardQuestions,
  ...manyBodySotaQuestions,
];
