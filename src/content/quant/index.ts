import { quantEasyQuestions, quantHardQuestions, quantSotaQuestions } from './questions';
import { portfolioTheoryQuestions } from './portfolio-theory';
import { fixedIncomeQuestions } from './fixed-income';
import { algoTradingQuestions } from './algo-trading';
import type { Question } from '../types';

export const quantQuestions: Question[] = [
  ...quantEasyQuestions,
  ...quantHardQuestions,
  ...quantSotaQuestions,
  ...portfolioTheoryQuestions,
  ...fixedIncomeQuestions,
  ...algoTradingQuestions,
];
