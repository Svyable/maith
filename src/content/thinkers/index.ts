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
// New ancient thinkers
import { leibnizQuestions } from './leibniz';
import { fermatQuestions } from './fermat';
import { alkhwarizmiQuestions } from './alkhwarizmi';
import { lovelaceQuestions } from './lovelace';
import { noetherQuestions } from './noether';
import { curieQuestions } from './curie';
// Modern thinkers
import { bengioQuestions } from './bengio';
import { lecunQuestions } from './lecun';
import { suttonQuestions } from './sutton';
import { goodfellowQuestions } from './goodfellow';
import { vapnikQuestions } from './vapnik';
import { einsteinQuestions } from './einstein';
import { godelQuestions } from './godel';
import { diracQuestions } from './dirac';
import { kolmogorovQuestions } from './kolmogorov';
import { hawkingQuestions } from './hawking';
// Contemporary thinkers
import { hassabisQuestions } from './hassabis';
import { vaswaniQuestions } from './vaswani';
import { karpathyQuestions } from './karpathy';
import { altmanQuestions } from './altman';
import { amodeiQuestions } from './amodei';
import { ngQuestions } from './ng';
import { lifeiQuestions } from './lifeifei';
import { ilyaQuestions } from './ilya';
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
  // New ancient
  ...leibnizQuestions,
  ...fermatQuestions,
  ...alkhwarizmiQuestions,
  ...lovelaceQuestions,
  ...noetherQuestions,
  ...curieQuestions,
  // Modern
  ...bengioQuestions,
  ...lecunQuestions,
  ...suttonQuestions,
  ...goodfellowQuestions,
  ...vapnikQuestions,
  ...einsteinQuestions,
  ...godelQuestions,
  ...diracQuestions,
  ...kolmogorovQuestions,
  ...hawkingQuestions,
  // Contemporary
  ...hassabisQuestions,
  ...vaswaniQuestions,
  ...karpathyQuestions,
  ...altmanQuestions,
  ...amodeiQuestions,
  ...ngQuestions,
  ...lifeiQuestions,
  ...ilyaQuestions,
];

export function getThinkerQuestions(slug: string): Question[] {
  return allThinkerQuestions.filter((q) => q.topic === slug);
}
