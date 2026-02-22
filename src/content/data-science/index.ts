import { dataWranglingQuestions, mlopsQuestions, dataVizQuestions } from './questions';
import type { Question } from '../types';

export const dataScienceQuestions: Question[] = [
  ...dataWranglingQuestions,
  ...mlopsQuestions,
  ...dataVizQuestions,
];

export { dataWranglingQuestions, mlopsQuestions, dataVizQuestions };
