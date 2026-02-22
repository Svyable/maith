import { mbaStrategyQuestions, mbaMarketingQuestions, mbaOperationsQuestions } from './questions';
import type { Question } from '../types';

export const mbaQuestions: Question[] = [
  ...mbaStrategyQuestions,
  ...mbaMarketingQuestions,
  ...mbaOperationsQuestions,
];

export { mbaStrategyQuestions, mbaMarketingQuestions, mbaOperationsQuestions };
