import type { Question } from '../types';

export const mendelQuestions: Question[] = [
  {
    id: 20770,
    topic: 'mendel',
    difficulty: 'hard',
    question: 'Mendel\'s Law of Segregation states that for a heterozygous organism (Aa), gametes carry allele A or a with equal probability. The expected phenotypic ratio in the F2 generation of a monohybrid cross is:',
    options: ['3:1 (dominant:recessive)', '1:1', '1:2:1', '9:3:3:1'],
    correctIndex: 0,
    explanation: 'Aa × Aa yields AA:Aa:aa = 1:2:1 genotypically, but since A is dominant, the phenotypic ratio is 3 dominant : 1 recessive.',
    realWorld: 'This ratio is the foundation of genetic counseling — predicting the probability of inheriting genetic diseases.',
    hint: 'With complete dominance, both AA and Aa look the same.',
  },
  {
    id: 20771,
    topic: 'mendel',
    difficulty: 'sota',
    question: 'Modern statistical analysis suggests Mendel\'s data fits expected ratios "too well" — a chi-squared test shows $p$-values that are suspiciously high. This controversy is known as:',
    options: ['The Mendel-Fisher controversy (possible confirmation bias or data selection)', 'The Hardy-Weinberg paradox', 'The Lysenko affair', 'The neutral theory debate'],
    correctIndex: 0,
    explanation: 'R.A. Fisher noted in 1936 that Mendel\'s results were statistically too close to the expected 3:1 ratio across all experiments, suggesting possible unconscious bias.',
    realWorld: 'This remains a fascinating case study in the philosophy and ethics of science — did Mendel cherry-pick data, or was Fisher wrong?',
    hint: 'A famous statistician analyzed Mendel\'s data decades later and found it suspiciously perfect.',
  },
  {
    id: 20772,
    topic: 'mendel',
    difficulty: 'easy',
    question: 'Mendel conducted his groundbreaking genetics experiments using which organism?',
    options: ['Pea plants (Pisum sativum)', 'Fruit flies', 'Mice', 'Bacteria'],
    correctIndex: 0,
    explanation: 'He bred over 10,000 pea plants over 8 years in the monastery garden, tracking 7 traits including seed color, shape, and plant height.',
    realWorld: 'Pea plants were ideal: short generation time, easy to cross-pollinate, and clear dominant/recessive traits.',
    hint: 'A common garden vegetable grown in a monastery.',
  },
];
