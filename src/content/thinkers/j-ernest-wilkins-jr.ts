import type { Question } from '../types';

export const jErnestWilkinsJrQuestions: Question[] = [
  {
    id: 9263022,
    topic: 'j-ernest-wilkins-jr',
    difficulty: 'easy',
    question: 'How old was J. Ernest Wilkins Jr. when he earned his PhD in mathematics?',
    options: ['17', '21', '19', '25'],
    correctIndex: 2,
    explanation: 'Wilkins earned his doctorate from the University of Chicago in 1942 only days after his nineteenth birthday.',
    realWorld: 'His unusually early academic career led into decades of work spanning pure mathematics, nuclear engineering, optics, and education.',
    hint: 'He was still a teenager.',
  },
  {
    id: 9263023,
    topic: 'j-ernest-wilkins-jr',
    difficulty: 'hard',
    question: 'Which applied problem became an important part of Wilkins’s nuclear-engineering work?',
    options: [
      'Calculating gamma-ray penetration and shielding',
      'Predicting ocean tides from lunar tables',
      'Designing aerodynamic wing profiles',
      'Optimizing telephone switching networks',
    ],
    correctIndex: 0,
    explanation: 'Wilkins developed mathematical models for gamma-radiation penetration and absorption that were used in reactor and radiation-shield design.',
    realWorld: 'Radiation transport calculations are essential for reactor safety, medical physics, detector design, and shielding around high-energy sources.',
    hint: 'The problem asks how energetic photons are reduced by matter.',
  },
  {
    id: 9263024,
    topic: 'j-ernest-wilkins-jr',
    difficulty: 'sota',
    question: 'In a simple attenuation model I = I₀e^(−μx), what does μ represent?',
    options: [
      'Initial radiation intensity',
      'Attenuation coefficient of the material',
      'Total thickness of the shield',
      'Energy generated inside the shield',
    ],
    correctIndex: 1,
    explanation: 'The coefficient μ measures how strongly a material attenuates radiation per unit path length in the simple exponential model.',
    realWorld: 'Material-specific attenuation coefficients help engineers estimate shielding thicknesses and radiation exposure levels.',
    hint: 'It is the material property multiplying path length in the exponent.',
    sources: [{ title: 'J Ernest Wilkins', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Wilkins_Ernest/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
