import {
  sieQuestions,
  series7Questions,
  series63Questions,
  series65Questions,
  series66Questions,
  series24Questions,
  series3Questions,
  series52Questions,
} from './questions';
import type { Question } from '../types';

export const allFinraQuestions: Question[] = [
  ...sieQuestions,
  ...series7Questions,
  ...series63Questions,
  ...series65Questions,
  ...series66Questions,
  ...series24Questions,
  ...series3Questions,
  ...series52Questions,
];

export {
  sieQuestions,
  series7Questions,
  series63Questions,
  series65Questions,
  series66Questions,
  series24Questions,
  series3Questions,
  series52Questions,
};
