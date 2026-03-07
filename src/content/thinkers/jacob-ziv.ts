import type { Question } from '../types';

export const jacobZivQuestions: Question[] = [
  {
    id: 308001, topic: 'jacob-ziv', difficulty: 'easy',
    question: 'Jacob Ziv (with Abraham Lempel) invented the LZ77 algorithm, which compresses data by:',
    options: [
      'Replacing repeated sequences with references to earlier occurrences in a sliding window',
      'Sorting characters by frequency',
      'Using neural networks to predict bytes',
      'Converting text to prime numbers'
    ],
    correctIndex: 0,
    explanation: 'LZ77 uses a sliding window to find repeated substrings, replacing them with (distance, length) pairs — the foundation of most modern lossless compressors.',
    realWorld: 'ZIP, gzip, PNG, and HTTP compression all descend from LZ77.',
    hint: 'Think "I\'ve seen this before" — point back to the earlier copy.',
    glossaryLinks: ['lossless-compression', 'entropy'],
  },
  {
    id: 308002, topic: 'jacob-ziv', difficulty: 'hard',
    question: 'The Lempel-Ziv complexity of a sequence measures:',
    options: [
      'The minimum number of distinct patterns needed to reconstruct the sequence',
      'The number of unique characters',
      'The Shannon entropy of the source',
      'The Kolmogorov complexity exactly'
    ],
    correctIndex: 0,
    explanation: 'LZ complexity counts the number of new phrases when parsing left-to-right — a computable proxy for Kolmogorov complexity that converges to the entropy rate for ergodic sources.',
    realWorld: 'LZ complexity is used in neuroscience to measure consciousness levels (Perturbational Complexity Index).',
    hint: 'Parse the string greedily; count how many new phrases you create.',
    glossaryLinks: ['kolmogorov-complexity', 'entropy'],
  },
  {
    id: 308003, topic: 'jacob-ziv', difficulty: 'sota',
    question: 'Ziv and Lempel\'s 1978 theorem proves that their dictionary-based algorithm:',
    options: [
      'Achieves the entropy rate of any stationary ergodic source asymptotically',
      'Is always faster than arithmetic coding',
      'Cannot compress beyond 50%',
      'Only works for Markov sources'
    ],
    correctIndex: 0,
    explanation: 'The LZ78 universality theorem shows the compression ratio converges to the entropy rate $h$ for any stationary ergodic source — without needing to know the source statistics a priori.',
    realWorld: 'This universality property is why LZ-family algorithms dominate practical compression despite being "model-free."',
    hint: 'Universal = works optimally for any source, not just known distributions.',
    glossaryLinks: ['entropy', 'lossless-compression'],
  },
];
