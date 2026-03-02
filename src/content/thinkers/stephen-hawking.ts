import type { Question } from '../types';

export const hawkingQuestions: Question[] = [
  {
    id: 10181,
    topic: 'stephen-hawking',
    difficulty: 'easy',
    question: 'Hawking radiation predicts that black holes:',
    options: [
      'Emit thermal radiation and slowly evaporate due to quantum effects near the event horizon',
      'Absorb all radiation including light without any emission',
      'Produce X-rays from accretion disk friction alone',
      'Emit gravitational waves continuously',
    ],
    correctIndex: 0,
    explanation: 'Hawking showed in 1974 that quantum vacuum fluctuations near a black hole\'s event horizon cause particle-antiparticle pairs to split, with one escaping as radiation. Over immense timescales, the black hole loses mass and evaporates.',
    realWorld: 'Hawking radiation connects quantum mechanics, thermodynamics, and general relativity — it\'s central to the black hole information paradox.',
    hint: 'Quantum effects at the boundary let particles escape from something classically inescapable.',
  },
  {
    id: 10182,
    topic: 'stephen-hawking',
    difficulty: 'hard',
    question: 'The Bekenstein-Hawking entropy of a black hole is proportional to:',
    options: [
      'The area of the event horizon: $S = \\frac{k_B c^3 A}{4 G \\hbar}$',
      'The volume enclosed by the event horizon',
      'The mass of the black hole squared',
      'The temperature of the Hawking radiation',
    ],
    correctIndex: 0,
    explanation: 'Remarkably, black hole entropy scales with surface area, not volume — suggesting that all information about the interior is encoded on the boundary. This inspired the holographic principle.',
    realWorld: 'The holographic principle, born from black hole thermodynamics, led to the AdS/CFT correspondence — one of the deepest results in theoretical physics.',
    hint: 'Information is stored on the surface, not in the bulk — a deeply counterintuitive result.',
  },
  {
    id: 10183,
    topic: 'stephen-hawking',
    difficulty: 'sota',
    question: 'The black hole information paradox arises because:',
    options: [
      'Hawking radiation appears thermal (information-free), suggesting information is destroyed — violating quantum unitarity',
      'Black holes have infinite entropy, making information retrieval impossible',
      'General relativity predicts singularities where physics breaks down',
      'The event horizon prevents any observation of the interior',
    ],
    correctIndex: 0,
    explanation: 'If Hawking radiation is purely thermal, the quantum state of infalling matter is irreversibly lost, violating unitarity. This paradox has driven decades of research including complementarity, firewalls, and the Page curve.',
    realWorld: 'Recent breakthroughs using quantum extremal surfaces and replica wormholes suggest information is preserved, resolving the paradox in favor of unitarity.',
    hint: 'Quantum mechanics says information is never destroyed, but Hawking radiation seems to destroy it.',
  },
];
