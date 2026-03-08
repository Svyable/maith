import type { Question } from '../types';

export const evgenyLifshitzQuestions: Question[] = [
  {
    id: 307001,
    topic: 'evgeny-lifshitz',
    difficulty: 'easy',
    question: 'What major area of physics is Evgeny Lifshitz most associated with?',
    options: [
      'Statistical physics and condensed matter theory',
      'Population genetics',
      'Macroeconomics',
      'Classical rhetoric'
    ],
    correctIndex: 0,
    explanation: 'Evgeny Lifshitz is famous for foundational work in statistical physics, condensed matter, electrodynamics of continuous media, and the Landau-Lifshitz course.',
    realWorld: 'His work shapes modern magnetism, superconductivity, phase transitions, and many-body physics.',
    hint: 'Think Landau–Lifshitz volumes and theoretical physics.',
    symbolLinks: { 'M': 'mu', 'H': 'eta', 'γ': 'gamma' },
    formulaLinks: ['landau-lifshitz-equation'],
    glossaryLinks: ['landau-lifshitz-equation', 'magnetization', 'precession'],
  },
  {
    id: 307002,
    topic: 'evgeny-lifshitz',
    difficulty: 'hard',
    question: 'In the Landau-Lifshitz equation, what does the damping term do physically?',
    options: [
      'It drives magnetization toward the effective field direction',
      'It makes the spin length increase without bound',
      'It removes precession entirely',
      'It converts the equation into a diffusion equation'
    ],
    correctIndex: 0,
    explanation: 'The damping term causes the magnetization vector to relax toward energetic equilibrium while still allowing precessional motion.',
    realWorld: 'This governs how magnetic bits settle after switching in storage and spintronic devices.',
    hint: 'Damping means loss of oscillatory energy toward equilibrium.',
    symbolLinks: { 'M': 'mu', 'H': 'eta', 'γ': 'gamma', 'λ': 'lambda' },
    formulaLinks: ['landau-lifshitz-equation', 'landau-lifshitz-gilbert-equation'],
    glossaryLinks: ['landau-lifshitz-equation', 'gilbert-damping', 'magnetization'],
  },
  {
    id: 307003,
    topic: 'evgeny-lifshitz',
    difficulty: 'sota',
    question: 'Why is Lifshitz theory still important in modern condensed matter and spintronics?',
    options: [
      'Because continuum magnetization dynamics remain the backbone of micromagnetic modelling',
      'Because it replaced Maxwell’s equations in all materials',
      'Because it proves quantum gravity is renormalizable',
      'Because it removes the need for numerical simulation'
    ],
    correctIndex: 0,
    explanation: 'Lifshitz-style continuum descriptions remain central in micromagnetics, magnetic switching, skyrmions, and spintronic device design.',
    realWorld: 'From MRAM to magnetic domain-wall logic, Lifshitz-era formalism is still used in simulation codes and theory.',
    hint: 'Think micromagnetics and device-scale magnetic dynamics.',
    symbolLinks: { 'M': 'mu', 'H': 'eta', 'γ': 'gamma', 'α': 'alpha' },
    formulaLinks: ['landau-lifshitz-equation', 'landau-lifshitz-gilbert-equation'],
    glossaryLinks: ['micromagnetics', 'landau-lifshitz-equation', 'magnetization'],
  },
];
