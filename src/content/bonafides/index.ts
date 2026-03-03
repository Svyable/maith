import type { Question } from '../types';
import { cfaQuestions } from '../cfa';
import { actuarialQuestions } from '../actuarial';
import { frmQuestions } from '../frm';
import { cqfQuestions } from '../cqf';
import { caiaQuestions } from '../caia';
import { allFinraQuestions } from '../finra';

export const allBonafideQuestions: Question[] = [
  ...cfaQuestions,
  ...actuarialQuestions,
  ...frmQuestions,
  ...cqfQuestions,
  ...caiaQuestions,
  ...allFinraQuestions,
];

/** Get bonafide questions filtered by topic slugs */
export function getBonafideQuestions(topics: string[]): Question[] {
  if (topics.length === 0) return allBonafideQuestions;
  return allBonafideQuestions.filter((q) => topics.includes(q.topic));
}
