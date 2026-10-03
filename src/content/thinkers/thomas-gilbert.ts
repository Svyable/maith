import type { Question } from '../types';

export const thomasGilbertQuestions: Question[] = [
  {
    id: 307004,
    topic: 'thomas-gilbert',
    difficulty: 'easy',
    question: 'What is Thomas Gilbert best known for in physics?',
    options: [
      'The Gilbert damping term in magnetization dynamics',
      'The Schrödinger equation for quantum wavefunctions',
      'The experimental discovery of the neutron',
      'The probabilistic form of Bayes’ theorem'
    ],
    correctIndex: 0,
    explanation: 'Thomas Gilbert is known for the Gilbert damping formulation that appears in the Landau-Lifshitz-Gilbert equation.',
    realWorld: 'Gilbert damping is essential for understanding how fast magnetic devices can switch and relax.',
    hint: 'His name appears after Landau and Lifshitz in LLG.',
    symbolLinks: { 'α': 'alpha', 'M': 'mu', 'H': 'eta' },
    formulaLinks: ['landau-lifshitz-gilbert-equation'],
  },
  {
    id: 307005,
    topic: 'thomas-gilbert',
    difficulty: 'hard',
    question: 'In the LLG equation, what parameter usually measures Gilbert damping?',
    options: [
      'α',
      'π',
      'β',
      'Ω'
    ],
    correctIndex: 0,
    explanation: 'The dimensionless parameter α is the standard Gilbert damping constant in micromagnetics.',
    realWorld: 'Materials with different α values are chosen for fast switching, low loss, or stable magnetic memory.',
    hint: 'It is the most common Greek letter for damping in spin dynamics.',
    symbolLinks: { 'α': 'alpha', 'M': 'mu' },
    formulaLinks: ['landau-lifshitz-gilbert-equation'],
  },
  {
    id: 307006,
    topic: 'thomas-gilbert',
    difficulty: 'sota',
    question: 'Why is Gilbert damping a central quantity in spintronics?',
    options: [
      'It sets dissipation and switching dynamics in magnetic nanodevices',
      'It determines the speed of light in magnetic media',
      'It replaces the need for exchange interactions',
      'It forces all ferromagnets to become superconductors'
    ],
    correctIndex: 0,
    explanation: 'Gilbert damping controls magnetic relaxation times, energy loss, and device response in nanomagnetic systems.',
    realWorld: 'STT-MRAM, spin-wave devices, and skyrmion systems all depend on accurate damping models.',
    hint: 'Think relaxation, energy loss, and switching speed.',
    symbolLinks: { 'α': 'alpha', 'M': 'mu', 'H': 'eta' },
    formulaLinks: ['landau-lifshitz-gilbert-equation'],
    sources: [
      {
        title: 'A phenomenological theory of damping in ferromagnetic materials',
        url: 'https://doi.org/10.1109/TMAG.2004.836740',
        publisher: 'IEEE Transactions on Magnetics',
        year: 2004,
      },
      {
        title: 'The fascinating world of the Landau-Lifshitz-Gilbert equation: an overview',
        url: 'https://doi.org/10.1098/rsta.2010.0319',
        publisher: 'Philosophical Transactions of the Royal Society A',
        year: 2011,
      },
    ],
    reviewedAt: '2026-10-02',
  },
];
