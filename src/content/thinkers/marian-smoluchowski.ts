import type { Question } from '../types';

export const marianSmoluchowskiQuestions: Question[] = [
  {
    id: 307007,
    topic: 'marian-smoluchowski',
    difficulty: 'easy',
    question: 'Marian Smoluchowski is most famous for helping explain which phenomenon?',
    options: [
      'Brownian motion',
      'Nuclear fission',
      'Superconductivity',
      'Plate tectonics'
    ],
    correctIndex: 0,
    explanation: 'Smoluchowski independently developed a foundational theoretical account of Brownian motion, helping show how random molecular impacts produce visible jittery motion.',
    realWorld: 'His work helped connect observable particle motion to the atomic theory of matter.',
    hint: 'Think random microscopic collisions.',
    symbolLinks: {},
    formulaLinks: ['smoluchowski-diffusion-equation'],
    glossaryLinks: ['brownian-motion', 'diffusion', 'stochastic-process'],
  },
  {
    id: 307008,
    topic: 'marian-smoluchowski',
    difficulty: 'hard',
    question: 'Why was Smoluchowski’s Brownian-motion work scientifically important?',
    options: [
      'It gave strong theoretical support for the molecular nature of matter',
      'It proved gravity is quantized',
      'It replaced thermodynamics with mechanics',
      'It disproved kinetic theory'
    ],
    correctIndex: 0,
    explanation: 'By explaining irregular suspended-particle motion through molecular collisions, Smoluchowski strengthened the case for atoms and kinetic theory.',
    realWorld: 'This mattered historically in settling debates about whether atoms were physically real.',
    hint: 'It supported atomism.',
    symbolLinks: {},
    formulaLinks: ['smoluchowski-diffusion-equation'],
    glossaryLinks: ['brownian-motion', 'kinetic-theory', 'diffusion'],
  },
  {
    id: 307009,
    topic: 'marian-smoluchowski',
    difficulty: 'sota',
    question: 'Why is Smoluchowski still relevant in modern soft matter and statistical physics?',
    options: [
      'His ideas underpin diffusion, colloids, fluctuation-driven motion, and stochastic modeling',
      'He proved all fluids are ideal',
      'He eliminated uncertainty from thermal systems',
      'He showed entropy always decreases locally'
    ],
    correctIndex: 0,
    explanation: 'Modern colloid science, stochastic transport, and soft-matter theory still rely on the kind of fluctuation-based reasoning Smoluchowski developed.',
    realWorld: 'His work matters in nanoparticle motion, biophysics, and diffusion-limited processes.',
    hint: 'Think fluctuations and transport.',
    symbolLinks: {},
    formulaLinks: ['smoluchowski-diffusion-equation', 'einstein-smoluchowski-relation'],
    glossaryLinks: ['stochastic-process', 'diffusion', 'brownian-motion'],
  },
];
