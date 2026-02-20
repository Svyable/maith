import { quantEasyQuestions, quantHardQuestions, quantSotaQuestions } from './questions';
import type { Question } from '../types';

export const quantQuestions: Question[] = [
  ...quantEasyQuestions,
  ...quantHardQuestions,
  ...quantSotaQuestions,
];
