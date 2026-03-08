import type { Question } from '../types';

export const thomasGilbertQuestions: Question[] = [
  {
    id: 307004,
    topic: 'thomas-gilbert',
    difficulty: 'easy',
    question: 'What is Thomas Gilbert best known for in physics?',
    options: [
      'The damping term in the Landau-Lifshitz-Gilbert equation',
      'Inventing the Schrödinger equation',
      'Discovering the neutron',
      'Formulating Bayes’ theorem'
    ],
    correctIndex: 0,
    explanation: 'Thomas Gilbert is known for the Gilbert damping formulation that appears in the Landau-Lifshitz-Gilbert equation.',
    realWorld: 'Gilbert damping is essential for understanding how fast magnetic devices can switch and relax.',
    hint: 'His name appears after Landau and Lifshitz in LLG.',
    symbolLinks: { 'α': 'alpha', 'M': 'mu', 'H': 'eta' },
    formulaLinks: ['gilbert-damping-term', 'landau-lifshitz-gilbert-equation'],
    glossaryLinks: ['gilbert-damping', 'landau-lifshitz-gilbert-equation', 'magnetization'],
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
    formulaLinks: ['gilbert-damping-term', 'landau-lifshitz-gilbert-equation'],
    glossaryLinks: ['gilbert-damping', 'micromagnetics', 'magnetization'],
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
    formulaLinks: ['gilbert-damping-term', 'landau-lifshitz-gilbert-equation'],
    glossaryLinks: ['gilbert-damping', 'spintronics', 'landau-lifshitz-gilbert-equation'],
  },
];
