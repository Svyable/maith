import { contractLawQuestions, ipLawQuestions, regulatoryQuestions } from './questions';
import type { Question } from '../types';

export const lawQuestions: Question[] = [
  ...contractLawQuestions,
  ...ipLawQuestions,
  ...regulatoryQuestions,
];

export { contractLawQuestions, ipLawQuestions, regulatoryQuestions };
