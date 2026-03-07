import { quantumGravityEasyQuestions, quantumGravityHardQuestions, quantumGravitySotaQuestions } from './questions';
import type { Question } from '../types';

export const quantumGravityQuestions: Question[] = [
  ...quantumGravityEasyQuestions,
  ...quantumGravityHardQuestions,
  ...quantumGravitySotaQuestions,
];
