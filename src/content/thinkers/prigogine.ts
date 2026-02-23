import type { Question } from '../types';

export const prigogineQuestions: Question[] = [
  {
    id: 9525,
    topic: 'prigogine',
    difficulty: 'sota',
    question: 'Prigogine\'s dissipative structures arise in systems that are:',
    options: [
      'Far from thermodynamic equilibrium with energy/matter flow',
      'At thermodynamic equilibrium',
      'Isolated from their environment',
      'In a state of maximum entropy',
    ],
    correctIndex: 0,
    explanation: 'Dissipative structures require continuous energy flow through an open system far from equilibrium. Order emerges spontaneously through self-organization, maintained by dissipating energy — the opposite of equilibrium thermodynamics.',
    realWorld: 'Bénard convection cells, the Belousov-Zhabotinsky reaction, hurricanes, and even cities are all dissipative structures — order maintained by energy throughput.',
    hint: 'These structures are "dissipative" because they require continuous energy input to maintain their organization.',
  },
  {
    id: 9526,
    topic: 'prigogine',
    difficulty: 'sota',
    question: 'The Brusselator model $\\frac{dx}{dt} = A + x^2y - Bx - x$ undergoes a Hopf bifurcation (sustained oscillations) when:',
    options: [
      '$B > 1 + A^2$',
      '$B < A$',
      '$A > B^2$',
      '$A + B > 1$',
    ],
    correctIndex: 0,
    explanation: 'The steady state $(x^*, y^*) = (A, B/A)$ becomes unstable via Hopf bifurcation when $B > 1 + A^2$. Beyond this threshold, a stable limit cycle (chemical oscillation) appears.',
    realWorld: 'The Brusselator explains chemical clocks like the Belousov-Zhabotinsky reaction and Turing patterns in animal coat markings (spots and stripes).',
    hint: 'Linearize around the fixed point and find when eigenvalues cross the imaginary axis.',
  },
  {
    id: 9527,
    topic: 'prigogine',
    difficulty: 'sota',
    question: 'Prigogine\'s minimum entropy production theorem applies to systems:',
    options: [
      'Near (but not at) thermodynamic equilibrium in the linear regime',
      'Arbitrarily far from equilibrium',
      'Only at absolute zero temperature',
      'Only in isolated systems',
    ],
    correctIndex: 0,
    explanation: 'In the linear non-equilibrium regime (where fluxes are proportional to forces), steady states minimize entropy production. This does NOT apply far from equilibrium, where Prigogine showed new structures can emerge.',
    realWorld: 'This theorem explains why heat conduction reaches a steady linear temperature profile and why near-equilibrium systems are predictable, while far-from-equilibrium systems can surprise us with spontaneous order.',
    hint: 'This theorem is specifically limited to the linear response regime — Onsager\'s domain.',
  },
];
