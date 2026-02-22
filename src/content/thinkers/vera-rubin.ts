import type { Question } from '../types';

export const veraRubinQuestions: Question[] = [
  {
    id: 96007, topic: 'vera-rubin', difficulty: 'easy',
    question: 'Vera Rubin discovered that stars at the edges of galaxies orbit at unexpectedly:',
    options: ['High speeds, implying invisible mass (dark matter)', 'Low speeds, confirming Newtonian gravity', 'Variable speeds, proving chaotic orbits', 'Zero speed, showing galaxies don\'t rotate'],
    correctIndex: 0,
    explanation: 'Rubin\'s galaxy rotation curves showed that outer stars orbit just as fast as inner ones — impossible unless galaxies contain vast amounts of unseen "dark matter."',
    realWorld: 'Dark matter is now estimated to make up ~27% of the universe. Rubin\'s observations are the strongest direct evidence for its existence.',
    hint: 'The outer stars should be slower if only visible matter existed.',
  },
  {
    id: 96008, topic: 'vera-rubin', difficulty: 'hard',
    question: 'A flat galaxy rotation curve (v ≈ constant at large r) implies the mass enclosed grows proportionally to:',
    options: ['r (radius), meaning a dark matter halo extends far beyond visible stars', 'r² (area of the disk)', 'r³ (volume, like uniform density)', '1/r (inverse, like point mass)'],
    correctIndex: 0,
    explanation: 'From v²=GM(r)/r with v constant, M(r)∝r. This linear mass growth requires a dark matter halo extending well beyond the luminous disk, with density ρ∝1/r².',
    realWorld: 'This observation drove the development of the NFW dark matter halo profile and Lambda-CDM cosmology.',
    hint: 'Set v²/r = GM/r² and solve for M(r).',
  },
  {
    id: 96009, topic: 'vera-rubin', difficulty: 'sota',
    question: 'Modified Newtonian Dynamics (MOND), proposed as an alternative to dark matter, modifies gravity below a critical acceleration of approximately:',
    options: ['a₀ ≈ 1.2 × 10⁻¹⁰ m/s², matching galaxy rotation data', 'a₀ ≈ 9.8 m/s², Earth\'s surface gravity', 'a₀ ≈ 1 m/s², the Planck acceleration', 'a₀ ≈ 10⁻³⁰ m/s², the cosmological constant scale'],
    correctIndex: 0,
    explanation: 'MOND postulates that below a₀ ≈ 1.2×10⁻¹⁰ m/s², gravitational acceleration transitions from Newtonian (a=GM/r²) to √(GMa₀)/r, naturally producing flat rotation curves.',
    realWorld: 'MOND successfully predicts individual galaxy rotation curves but struggles with galaxy cluster dynamics and the CMB — dark matter remains the mainstream explanation.',
    hint: 'This acceleration is far below anything we experience on Earth.',
  },
];
