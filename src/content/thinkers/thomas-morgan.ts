// huntmorgan.ts
import type { Question } from '../types';

export const thomasMorganQuestions: Question[] = [
  {
    id: 50080,
    topic: 'thomas-morgan',
    difficulty: 'easy',
    question: 'Morgan discovered?',
    options: [
      'Sex-linked inheritance in Drosophila (white eyes on X chromosome)',
      'Mendelian dominance ratios',
      'Cytoplasmic inheritance',
      'Epigenetic modifications'
    ],
    correctIndex: 0,
    explanation: 'White-eyed male fly → all daughters carrier → 50% sons white-eyed. X-linked recessive.',
    realWorld: 'Established chromosome theory of inheritance.',
    hint: 'White eyes only in males → sex chromosome pattern.'
  },
  {
    id: 50081,
    topic: 'thomas-morgan',
    difficulty: 'hard',
    question: 'Morgan\'s crossing over produces?',
    options: [
      'Genetic recombination: parental d = (1-r) + r/2 recombinant gametes',
      'Independent assortment (9:3:3:1)',
      'Linkage groups on chromosomes',
      'Pleiotropy (one gene → multiple traits)'
    ],
    correctIndex: 0,
    explanation: 'Yellow body × white eyes: 37% recombinants → map distance = 37 cM between genes.',
    realWorld: 'Genetic mapping foundation.',
    hint: 'New trait combinations from linked genes.'
  },
  {
    id: 50082,
    topic: 'thomas-morgan',
    difficulty: 'sota',
    question: 'Morgan\'s recombination frequency measures?',
    options: [
      'Map distance: 1% RF = 1 cM = 1 Mb Drosophila DNA',
      'Mutation rate (10^-6 per locus)',
      'Gene conversion frequency',
      'Nondisjunction rate (0.1%)'
    ],
    correctIndex: 0,
    explanation: 'RF = (recombinants/total)×100. Max 50% (independent). Linear maps from multi-point crosses.',
    realWorld: 'Human genetic maps → disease gene hunting.',
    hint: 'Percentage new combinations = distance between genes.'
  }
];
