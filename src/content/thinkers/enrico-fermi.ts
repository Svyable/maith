import type { Question } from '../types';

export const enricoFermiQuestions: Question[] = [
  {
    id: 20701, topic: 'enrico-fermi', difficulty: 'easy',
    question: 'A "Fermi estimation" is a technique for:',
    options: ['Making rough order-of-magnitude calculations with limited information', 'Computing exact solutions to nuclear physics problems', 'Optimizing neural network hyperparameters', 'Measuring radioactive decay rates'],
    correctIndex: 0,
    explanation: 'Fermi was famous for quick estimates: "How many piano tuners are in Chicago?" Break it into factors, estimate each, multiply. Accuracy to within a factor of 10 is usually achievable.',
    realWorld: 'Tech interviews at Google/McKinsey use Fermi questions. In physics, dimensional analysis and order-of-magnitude estimates catch errors before expensive computations.',
    hint: 'Break a hard question into easier sub-questions, estimate each, and multiply — you\'ll be surprisingly close.',
  },
  {
    id: 20702, topic: 'enrico-fermi', difficulty: 'hard',
    question: 'Fermi\'s golden rule gives the transition rate between quantum states as:',
    options: ['$\\Gamma = \\frac{2\\pi}{\\hbar}|\\langle f|V|i\\rangle|^2 \\rho(E_f)$ — proportional to matrix element squared times density of states', 'The ratio of initial to final state energies', 'The square root of the perturbation strength', 'The inverse of the system\'s total energy'],
    correctIndex: 0,
    explanation: 'Fermi\'s golden rule is first-order time-dependent perturbation theory. The transition rate depends on how strongly states couple (matrix element) and how many final states are available (density of states).',
    realWorld: 'LED emission rates, nuclear decay rates, and phonon scattering in semiconductors are all calculated using Fermi\'s golden rule.',
    hint: 'Two ingredients: how strongly do the states interact (coupling), and how many final states are available (density)?',
  },
  {
    id: 20703, topic: 'enrico-fermi', difficulty: 'sota',
    question: 'The Fermi paradox asks: if intelligent life is probable, where is everyone? The most cited resolution is:',
    options: ['The Great Filter hypothesis — some step in the evolution of technological civilizations is extraordinarily unlikely', 'The universe is too young for interstellar travel', 'Radio signals decay too quickly to detect', 'Intelligent species always destroy themselves immediately'],
    correctIndex: 0,
    explanation: 'The Great Filter could be behind us (abiogenesis is rare) or ahead (civilizations self-destruct). The Drake equation factors — star formation, habitable planets, life emergence, intelligence, technology — are all uncertain by orders of magnitude.',
    realWorld: 'SETI research, exoplanet surveys (Kepler/TESS), and astrobiology funding decisions are all shaped by different takes on the Fermi paradox.',
    hint: 'If there are billions of habitable planets and billions of years, why haven\'t we detected anyone? Something must be very improbable.',
  },
];
