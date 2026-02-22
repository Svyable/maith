import { cpaAuditQuestions, cpaAccountingQuestions, cpaTaxQuestions } from './questions';
import type { Question } from '../types';

export const cpaQuestions: Question[] = [
  ...cpaAuditQuestions,
  ...cpaAccountingQuestions,
  ...cpaTaxQuestions,
];

export { cpaAuditQuestions, cpaAccountingQuestions, cpaTaxQuestions };
