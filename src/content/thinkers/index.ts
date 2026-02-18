import { hintonQuestions } from './hinton';
import { turingQuestions } from './turing';
import { shannonQuestions } from './shannon';
import { poincareQuestions } from './poincare';
import { riemannQuestions } from './riemann';
import { feynmanQuestions } from './feynman';
import { vonNeumannQuestions } from './vonneumann';
import { pearlQuestions } from './pearl';
import { simonsQuestions, ramanujanQuestions } from './simons-ramanujan';
// Ancient thinkers
import { euclidQuestions } from './euclid';
import { archimedесQuestions } from './archimedes';
import { newtonQuestions } from './newton';
import { eulerQuestions } from './euler';
import { pythagorasQuestions } from './pythagoras';
import { gaussQuestions } from './gauss';
// Modern thinkers
import { bengioQuestions } from './bengio';
import { lecunQuestions } from './lecun';
import { suttonQuestions } from './sutton';
import { goodfellowQuestions } from './goodfellow';
import { vapnikQuestions } from './vapnik';
import type { Question } from '../types';

export const allThinkerQuestions: Question[] = [
  // Original 10
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
  // Ancient thinkers
  ...euclidQuestions,
  ...archimedесQuestions,
  ...newtonQuestions,
  ...eulerQuestions,
  ...pythagorasQuestions,
  ...gaussQuestions,
  // Modern thinkers
  ...bengioQuestions,
  ...lecunQuestions,
  ...suttonQuestions,
  ...goodfellowQuestions,
  ...vapnikQuestions,
];

export function getThinkerQuestions(slug: string): Question[] {
  return allThinkerQuestions.filter((q) => q.topic === slug);
}
