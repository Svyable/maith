import type { Question } from '../types';

export const julianSewardQuestions: Question[] = [
  {
    id: 308013, topic: 'julian-seward', difficulty: 'easy',
    question: 'Julian Seward created bzip2 (1996), which achieves high compression using:',
    options: [
      'The Burrows-Wheeler Transform (BWT) followed by Move-to-Front encoding and Huffman coding',
      'LZ77 sliding window matching',
      'Arithmetic coding only',
      'Neural network prediction'
    ],
    correctIndex: 0,
    explanation: 'bzip2\'s pipeline: BWT rearranges data to cluster similar bytes → MTF converts clusters to small integers → Huffman compresses the result. Each stage amplifies compressibility.',
    realWorld: 'bzip2 was the standard high-ratio compressor on Unix before xz, and remains widely used in bioinformatics.',
    hint: 'Three transforms in sequence, each making the data more compressible.',
    glossaryLinks: ['lossless-compression'],
  },
  {
    id: 308014, topic: 'julian-seward', difficulty: 'hard',
    question: 'The Burrows-Wheeler Transform (BWT) used in bzip2 works by:',
    options: [
      'Sorting all rotations of the input and taking the last column, which clusters similar contexts together',
      'Replacing characters with their frequencies',
      'Splitting the input into fixed-size blocks and XORing them',
      'Building a Huffman tree from digram statistics'
    ],
    correctIndex: 0,
    explanation: 'BWT forms all cyclic rotations of the input, sorts them lexicographically, and outputs the last column. Characters preceded by similar contexts cluster together — ideal for entropy coding.',
    realWorld: 'BWT is also foundational in bioinformatics: the FM-index (used in BWA for genome alignment) is built on the BWT.',
    hint: 'Sort all rotations → last column groups characters by their preceding context.',
  },
  {
    id: 308015, topic: 'julian-seward', difficulty: 'sota',
    question: 'Julian Seward also created Valgrind, which detects memory errors by:',
    options: [
      'Dynamic binary instrumentation — translating and instrumenting every instruction at runtime',
      'Static analysis of source code only',
      'Requiring special compiler flags',
      'Using hardware memory protection units'
    ],
    correctIndex: 0,
    explanation: 'Valgrind\'s Memcheck tool runs programs on a synthetic CPU, tracking every bit of memory as "defined" or "undefined" — catching use-after-free, leaks, and uninitialized reads with no recompilation.',
    realWorld: 'Valgrind has found thousands of bugs in Firefox, OpenSSL, the Linux kernel, and virtually every major C/C++ project.',
    hint: 'It instruments the binary itself — no source code changes needed.',
  },
];
