import { examPQuestions, examFMQuestions, examFAMQuestions } from './questions';
import type { Question } from '../types';

export const actuarialQuestions: Question[] = [
  ...examPQuestions,
  ...examFMQuestions,
  ...examFAMQuestions,
];

export { examPQuestions, examFMQuestions, examFAMQuestions };
