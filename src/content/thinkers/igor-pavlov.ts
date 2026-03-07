import type { Question } from '../types';

export const igorPavlovQuestions: Question[] = [
  {
    id: 308007, topic: 'igor-pavlov', difficulty: 'easy',
    question: 'Igor Pavlov created the 7-Zip archiver, which uses what compression algorithm by default?',
    options: [
      'LZMA (Lempel-Ziv-Markov chain Algorithm)',
      'Huffman coding only',
      'Run-length encoding',
      'JPEG compression'
    ],
    correctIndex: 0,
    explanation: 'LZMA combines an improved LZ77 with range coding and sophisticated context modeling, achieving some of the highest compression ratios among general-purpose algorithms.',
    realWorld: '7z and .xz formats are standard for software distribution (Linux packages, game assets, firmware updates).',
    hint: 'The algorithm name contains both "LZ" and "Markov."',
    glossaryLinks: ['lossless-compression'],
  },
  {
    id: 308008, topic: 'igor-pavlov', difficulty: 'hard',
    question: 'LZMA achieves superior compression over deflate primarily because:',
    options: [
      'It uses much larger dictionary sizes (up to 4 GB) and range coding instead of Huffman coding',
      'It uses lossy techniques',
      'It compresses each byte independently',
      'It requires more RAM for decompression than encoding'
    ],
    correctIndex: 0,
    explanation: 'LZMA\'s large dictionaries find matches across much wider windows, and range coding is more efficient than Huffman for non-power-of-two symbol probabilities.',
    realWorld: 'LZMA2 (used in .xz) adds multi-threading support while maintaining LZMA\'s ratio advantage.',
    hint: 'Bigger memory = finding longer-range repetitions; range coding ≈ arithmetic coding.',
  },
  {
    id: 308009, topic: 'igor-pavlov', difficulty: 'sota',
    question: 'The LZMA match finder uses a combination of hash chains and binary trees because:',
    options: [
      'Hash chains give O(1) lookup for short matches while binary trees find optimal long matches efficiently',
      'Binary trees are required by the LZ77 standard',
      'Hash chains provide encryption',
      'It reduces the dictionary size'
    ],
    correctIndex: 0,
    explanation: 'Short matches (2-4 bytes) dominate and need fast lookup via hashing. Longer matches benefit from sorted binary trees that can find the best match in O(log n) without exhaustive search.',
    realWorld: 'This hybrid approach is why LZMA compression is slower but significantly better than deflate — it spends compute finding optimal matches.',
    hint: 'Different data structures for different match lengths — optimize the common case.',
  },
];
