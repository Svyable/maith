import type { Question } from '../types';

export const jarekDudaQuestions: Question[] = [
  {
    id: 308025, topic: 'jarek-duda', difficulty: 'easy',
    question: 'Jarek Duda invented Asymmetric Numeral Systems (ANS, 2014), which provides:',
    options: [
      'Near-optimal entropy coding with the speed of Huffman and the compression of arithmetic coding',
      'A new encryption algorithm',
      'A lossless image format',
      'A sorting algorithm'
    ],
    correctIndex: 0,
    explanation: 'ANS encodes symbols by mapping them to natural numbers in a way that achieves compression within ~0.01 bits of entropy — like arithmetic coding — but using simple table lookups instead of divisions.',
    realWorld: 'ANS powers the entropy stage of Zstandard, LZFSE (Apple), JPEG XL, and many modern codecs.',
    hint: 'Arithmetic coding\'s compression + Huffman\'s speed = ANS.',
    glossaryLinks: ['entropy', 'lossless-compression'],
  },
  {
    id: 308026, topic: 'jarek-duda', difficulty: 'hard',
    question: 'The key insight of ANS is encoding information into a single natural number by:',
    options: [
      'Distributing the number line among symbols proportionally to their probabilities, so encoding is a table lookup',
      'Using prime factorization',
      'Binary arithmetic on fractions',
      'Sorting symbols alphabetically'
    ],
    correctIndex: 0,
    explanation: 'In tANS (tabled ANS), the number line is partitioned into slots proportional to symbol probabilities. Encoding a symbol advances the state to the next slot for that symbol — just a table lookup, no division needed.',
    realWorld: 'This table-based approach enables SIMD parallelism — modern CPUs can encode/decode multiple streams simultaneously.',
    hint: 'Divide the integers among symbols by probability → encoding = looking up the next state.',
  },
  {
    id: 308027, topic: 'jarek-duda', difficulty: 'sota',
    question: 'ANS differs fundamentally from arithmetic coding because:',
    options: [
      'It encodes into a single integer (stack/LIFO) rather than an interval, making it naturally parallelizable and patent-free',
      'It only works for binary alphabets',
      'It requires floating-point arithmetic',
      'It produces larger output than Huffman'
    ],
    correctIndex: 0,
    explanation: 'Arithmetic coding maintains an interval [low, high) requiring careful multi-precision arithmetic. ANS maintains a single state integer, with encoding being LIFO (last-in-first-out). This simplicity enables GPU/SIMD implementations.',
    realWorld: 'ANS being patent-free (unlike arithmetic coding variants) enabled its adoption in open standards like JPEG XL and AV1.',
    hint: 'One integer, no intervals, no patents — the trifecta that killed arithmetic coding in practice.',
    glossaryLinks: ['entropy'],
  },
];
