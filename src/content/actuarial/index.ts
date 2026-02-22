import { actuarialProbQuestions, actuarialFinMathQuestions, actuarialLossQuestions } from './questions';
import type { Question } from '../types';

export const actuarialQuestions: Question[] = [
  ...actuarialProbQuestions,
  ...actuarialFinMathQuestions,
  ...actuarialLossQuestions,
];

export { actuarialProbQuestions, actuarialFinMathQuestions, actuarialLossQuestions };
