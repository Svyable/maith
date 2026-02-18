import { hintonQuestions } from './hinton';
import { turingQuestions } from './turing';
import { shannonQuestions } from './shannon';
import { poincareQuestions } from './poincare';
import { riemannQuestions } from './riemann';
import { feynmanQuestions } from './feynman';
import { vonNeumannQuestions } from './vonneumann';
import { pearlQuestions } from './pearl';
import { simonsQuestions, ramanujanQuestions } from './simons-ramanujan';
import type { Question } from '../types';

export const allThinkerQuestions: Question[] = [
  ...hintonQuestions,
  ...turingQuestions,
  ...shannonQuestions,
  ...poincareQuestions,
  ...riemannQuestions,
  ...feynmanQuestions,
  ...vonNeumannQuestions,
  ...pearlQuestions,
  ...simonsQuestions,
  ...ramanujanQuestions,
];

export function getThinkerQuestions(slug: string): Question[] {
  return allThinkerQuestions.filter((q) => q.topic === slug);
}
