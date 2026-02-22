import { anatomyQuestions, pathologyQuestions, biostatisticsQuestions } from './questions';
import type { Question } from '../types';

export const medicalQuestions: Question[] = [
  ...anatomyQuestions,
  ...pathologyQuestions,
  ...biostatisticsQuestions,
];

export { anatomyQuestions, pathologyQuestions, biostatisticsQuestions };
