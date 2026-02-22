import { cfaEthicsQuestions, cfaEquityQuestions, cfaPortfolioQuestions } from './questions';
import type { Question } from '../types';

export const cfaQuestions: Question[] = [
  ...cfaEthicsQuestions,
  ...cfaEquityQuestions,
  ...cfaPortfolioQuestions,
];

export { cfaEthicsQuestions, cfaEquityQuestions, cfaPortfolioQuestions };
