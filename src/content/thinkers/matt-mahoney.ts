import type { Question } from '../types';

export const mattMahoneyQuestions: Question[] = [
  {
    id: 308016, topic: 'matt-mahoney', difficulty: 'easy',
    question: 'Matt Mahoney is known for creating compression benchmarks and the PAQ family of compressors. PAQ achieves extreme compression by:',
    options: [
      'Using context mixing — combining predictions from many models via a neural network',
      'Simple Huffman coding',
      'Dictionary lookup only',
      'Lossy quantization'
    ],
    correctIndex: 0,
    explanation: 'PAQ/cmix use dozens to hundreds of context models (order-N, match, sparse, etc.) whose predictions are combined by a neural network, then fed to arithmetic coding.',
    realWorld: 'cmix consistently wins compression benchmarks like the Hutter Prize and Large Text Compression Benchmark.',
    hint: 'Many models, one mixer — the ensemble approach to compression.',
    glossaryLinks: ['entropy', 'lossless-compression'],
  },
  {
    id: 308017, topic: 'matt-mahoney', difficulty: 'hard',
    question: 'The Hutter Prize, championed by Mahoney, measures compression of the first 1 GB of Wikipedia because:',
    options: [
      'Compression ratio is a proxy for intelligence — better prediction requires better understanding of language',
      'Wikipedia is the smallest dataset available',
      'It tests only speed, not ratio',
      'It measures lossy image compression'
    ],
    correctIndex: 0,
    explanation: 'Per Hutter\'s thesis, optimal compression equals optimal prediction. Compressing natural language requires modeling syntax, semantics, and world knowledge — essentially AI.',
    realWorld: 'LLMs like GPT are, in information-theoretic terms, text compressors — they assign probabilities to next tokens.',
    hint: 'Better compression = better prediction = more intelligence.',
    glossaryLinks: ['kolmogorov-complexity', 'entropy'],
  },
  {
    id: 308018, topic: 'matt-mahoney', difficulty: 'sota',
    question: 'Context mixing in cmix combines model predictions using:',
    options: [
      'Logistic mixing with online gradient descent — combining log-odds from multiple models adaptively',
      'Simple averaging of probabilities',
      'Voting by majority',
      'A fixed weighting scheme'
    ],
    correctIndex: 0,
    explanation: 'Each model outputs a probability; these are converted to logits (log-odds), linearly combined with learned weights updated via gradient descent, then converted back — a tiny online neural network.',
    realWorld: 'This "prediction by partial matching meets machine learning" approach bridges classical compression and modern deep learning.',
    hint: 'Log-odds space + gradient descent = adaptive neural mixing.',
  },
];
