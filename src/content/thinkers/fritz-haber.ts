import type { Question } from '../types';

export const fritzHaberQuestions: Question[] = [
  {
    id: 50007,
    topic: 'fritz-haber',
    difficulty: 'easy',
    question: 'Fritz Haber developed the process for synthesizing ammonia from its elements. What is the balanced equation for the Haber-Bosch process?',
    options: [
      '$N_2 + 3H_2 \\rightleftharpoons 2NH_3$, performed at high pressure and temperature with an iron catalyst',
      '$2N_2 + H_2 \\to N_2H_4$, producing hydrazine',
      '$N_2 + O_2 \\to 2NO$, producing nitric oxide',
      '$NH_3 \\to N_2 + 3H_2$, spontaneous decomposition of ammonia'
    ],
    correctIndex: 0,
    explanation: 'The Haber-Bosch process converts atmospheric nitrogen and hydrogen into ammonia at $400$–$500°C$ and $150$–$300$ atm over an iron catalyst. Le Chatelier\'s principle explains why high pressure favors products (fewer moles of gas).',
    realWorld: 'This single reaction feeds roughly half the world\'s population. About 80% of ammonia produced goes into fertilizers. It consumes ~1-2% of global energy.',
    hint: 'Nitrogen gas plus hydrogen gas, high temperature, high pressure, iron catalyst.'
  },
  {
    id: 50008,
    topic: 'fritz-haber',
    difficulty: 'hard',
    question: 'The equilibrium constant expression for the Haber process can be written in terms of partial pressures. What is the correct $K_p$ expression?',
    options: [
      '$K_p = \\dfrac{(P_{NH_3})^2}{(P_{N_2})(P_{H_2})^3}$',
      '$K_p = \\dfrac{(P_{N_2})(P_{H_2})^3}{(P_{NH_3})^2}$',
      '$K_p = \\dfrac{P_{NH_3}}{P_{N_2} + P_{H_2}}$',
      '$K_p = (P_{N_2})(P_{H_2})^3(P_{NH_3})^2$'
    ],
    correctIndex: 0,
    explanation: 'For $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, the equilibrium constant in terms of partial pressures is:\n$$K_p = \\frac{(P_{NH_3})^2}{(P_{N_2})(P_{H_2})^3}.$$\nSince $\\Delta n = 2 - 4 = -2$, increasing total pressure shifts equilibrium toward products.',
    realWorld: 'Chemical engineers optimize reactor conditions (T, P, catalyst, recycle ratio) using this expression to maximize ammonia yield while balancing energy costs.',
    hint: 'Products over reactants, each raised to their stoichiometric coefficient.'
  },
  {
    id: 50009,
    topic: 'fritz-haber',
    difficulty: 'sota',
    question: 'Haber also contributed to electrochemistry. The Haber cycle (Born-Haber cycle) is used to calculate:',
    options: [
      'Lattice energy of ionic compounds indirectly, using Hess\'s law with ionization energies, electron affinities, and enthalpies of formation',
      'The rate of ammonia synthesis as a function of catalyst surface area',
      'The boiling point of molecular compounds from van der Waals forces',
      'The pH of buffer solutions from $pK_a$ values'
    ],
    correctIndex: 0,
    explanation: 'The Born-Haber cycle applies Hess\'s law to compute the lattice energy $U$ of an ionic crystal, which cannot be measured directly. The cycle links:\n$$\\Delta H_f = \\Delta H_{sub} + \\Delta H_{IE} + \\Delta H_{D} + \\Delta H_{EA} + U,$$\nwhere each term represents sublimation, ionization, dissociation, electron affinity, and lattice energy respectively.',
    realWorld: 'Lattice energies predict solubility, melting points, and hardness of ionic solids — critical for ceramic design, salt crystallization, and solid-state battery electrolytes.',
    hint: 'An energy cycle that lets you calculate a quantity you cannot directly measure for ionic crystals.'
  }
];
