import type { Question } from '../types';

export const maryCartwrightQuestions: Question[] = [
  {
    id: 20127, topic: 'mary-cartwright', difficulty: 'easy',
    question: 'Mary Cartwright was a pioneer in what area of mathematics, decades before it was formally named?',
    options: ['Chaos theory', 'Category theory', 'Game theory', 'Graph theory'],
    correctIndex: 0,
    explanation: 'Cartwright and Littlewood discovered chaotic behavior in the van der Pol oscillator in the 1940s, anticipating chaos theory by decades.',
    realWorld: 'Chaos theory now underpins weather forecasting, population dynamics, and cryptographic random number generators.',
    hint: 'This field studies systems where small changes in initial conditions lead to wildly different outcomes.',
  },
  {
    id: 20128, topic: 'mary-cartwright', difficulty: 'hard',
    question: 'The Cartwright-Littlewood theorem concerns solutions to which type of equation?',
    options: ['Forced nonlinear oscillators (van der Pol)', 'Linear wave equations', 'Stochastic differential equations', 'Partial differential equations'],
    correctIndex: 0,
    explanation: 'They studied the van der Pol equation with forcing, proving the existence of uncountably many unstable periodic solutions — a hallmark of chaos.',
    realWorld: 'The van der Pol oscillator models heartbeat rhythms, electronic circuits, and neural firing patterns.',
    hint: 'This self-oscillating circuit equation was originally developed to model vacuum tube circuits.',
  },
  {
    id: 20129, topic: 'mary-cartwright', difficulty: 'sota',
    question: 'Cartwright\'s work on the van der Pol oscillator was motivated by problems in which wartime technology?',
    options: ['Radar signal amplification', 'Cryptography', 'Sonar detection', 'Ballistic computation'],
    correctIndex: 0,
    explanation: 'The British military asked Cartwright and Littlewood to study erratic behavior in radar receiver circuits — their analysis revealed the first known large-scale chaotic dynamics.',
    realWorld: 'Military-funded mathematics research continues to yield fundamental discoveries — chaos, the internet, and GPS all have defense origins.',
    hint: 'This detection technology used radio waves and exhibited puzzling signal irregularities during WWII.',
  },
];
