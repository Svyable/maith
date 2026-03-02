import type { Question } from '../types';

export const johannesKeplerQuestions: Question[] = [
  {
    id: 20730,
    topic: 'johannes-kepler',
    difficulty: 'hard',
    question: 'Kepler\'s Third Law states that the square of the orbital period $T$ is proportional to the cube of the semi-major axis $a$: $T^2 \\propto a^3$. What provides the proportionality constant?',
    options: ['The mass of the central body ($T^2 = \\frac{4\\pi^2}{GM}a^3$)', 'The orbital eccentricity', 'The planet\'s mass', 'The speed of light'],
    correctIndex: 0,
    explanation: 'Newton later showed the constant involves $G$ and the central mass $M$. This allows us to "weigh" stars and galaxies by measuring orbital periods.',
    realWorld: 'Exoplanet hunters use Kepler\'s Third Law to determine planetary orbital radii from transit timing data.',
    hint: 'Newton derived this from his law of gravitation — the constant depends on the star\'s mass.',
  },
  {
    id: 20731,
    topic: 'johannes-kepler',
    difficulty: 'sota',
    question: 'Kepler\'s conjecture (1611) about the densest possible sphere packing was finally proven in which year?',
    options: ['2017 (Hales\' formal proof verified by computer)', '1900', '1961', '2005'],
    correctIndex: 0,
    explanation: 'Thomas Hales proved Kepler\'s conjecture in 1998 via exhaustive computer calculation; the formal verification (Flyspeck project) was completed in 2017.',
    realWorld: 'Sphere packing theory is fundamental to error-correcting codes, cellular network coverage optimization, and materials science.',
    hint: 'The computer-assisted proof was controversial; it took a formal verification project to confirm it.',
  },
  {
    id: 20732,
    topic: 'johannes-kepler',
    difficulty: 'easy',
    question: 'Kepler discovered that planetary orbits are not circles but:',
    options: ['Ellipses with the Sun at one focus', 'Parabolas', 'Perfect circles', 'Spirals'],
    correctIndex: 0,
    explanation: 'Kepler\'s First Law shattered 2,000 years of belief in circular orbits — using Tycho Brahe\'s precise Mars data to prove orbits are elliptical.',
    realWorld: 'Every satellite launch and interplanetary mission uses Keplerian orbital mechanics for trajectory planning.',
    hint: 'He broke with the ancient Greek ideal of perfect circular motion.',
  },
];
