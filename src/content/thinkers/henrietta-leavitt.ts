import type { Question } from '../types';

export const henriettaLeavittQuestions: Question[] = [
  {
    id: 20224, topic: 'henrietta-leavitt', difficulty: 'easy',
    question: 'Henrietta Leavitt discovered a relationship between the period and luminosity of which type of variable star?',
    options: ['Cepheid variables', 'Red giants', 'White dwarfs', 'Pulsars'],
    correctIndex: 0,
    explanation: 'Leavitt\'s period-luminosity relation for Cepheid variables showed that brighter Cepheids pulsate more slowly — creating a "standard candle" for measuring cosmic distances.',
    realWorld: 'Hubble used Leavitt\'s Cepheid relation to prove galaxies exist beyond the Milky Way and that the universe is expanding.',
    hint: 'These stars pulsate regularly, changing brightness over days to months.',
  },
  {
    id: 20225, topic: 'henrietta-leavitt', difficulty: 'hard',
    question: 'Leavitt discovered the period-luminosity relation by studying Cepheids in which galaxy?',
    options: ['Small Magellanic Cloud', 'Andromeda (M31)', 'Large Magellanic Cloud', 'Milky Way'],
    correctIndex: 0,
    explanation: 'By studying 1,777 variable stars in the Small Magellanic Cloud (all at roughly the same distance), Leavitt could isolate the relationship between period and intrinsic brightness.',
    realWorld: 'This technique of studying objects at a known common distance to calibrate brightness remains fundamental to the cosmic distance ladder.',
    hint: 'All stars in this satellite galaxy are at approximately the same distance from Earth.',
  },
  {
    id: 20226, topic: 'henrietta-leavitt', difficulty: 'sota',
    question: 'Leavitt\'s period-luminosity relation forms the first rung of the cosmic distance ladder. What is the approximate form of the relation?',
    options: ['$M = a \\log P + b$ (linear in log period)', '$M = a P^2$ (quadratic in period)', '$M = a / P$ (inverse period)', '$M = a e^P$ (exponential)'],
    correctIndex: 0,
    explanation: 'The absolute magnitude $M$ scales linearly with the logarithm of the pulsation period $P$, typically $M \\approx -2.76 \\log P - 1.4$ for classical Cepheids.',
    realWorld: 'The Hubble Space Telescope\'s key project refined this relation to measure $H_0$ to 10% accuracy; JWST is pushing to 1%.',
    hint: 'The relation is linear when you plot magnitude against the log of the period.',
  },
];
