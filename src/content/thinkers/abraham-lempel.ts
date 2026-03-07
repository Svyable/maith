import type { Question } from '../types';

export const abrahamLempelQuestions: Question[] = [
  {
    id: 308004, topic: 'abraham-lempel', difficulty: 'easy',
    question: 'Abraham Lempel co-invented two foundational compression algorithms. LZ78 differs from LZ77 by:',
    options: [
      'Building an explicit dictionary of phrases rather than using a sliding window',
      'Using lossy compression',
      'Requiring the alphabet size to be known',
      'Only working on images'
    ],
    correctIndex: 0,
    explanation: 'LZ78 builds a growing dictionary: each new phrase extends an existing entry by one symbol. This avoids the fixed-window limitation of LZ77.',
    realWorld: 'LZW (used in GIF and early UNIX compress) is a practical variant of LZ78.',
    hint: 'Dictionary vs. window — two different ways to remember what you\'ve seen.',
    glossaryLinks: ['lossless-compression'],
  },
  {
    id: 308005, topic: 'abraham-lempel', difficulty: 'hard',
    question: 'In the LZ78 parsing of a binary string, the dictionary grows by:',
    options: [
      'Adding the longest matching prefix concatenated with the next symbol as a new entry',
      'Doubling in size at each step',
      'Only storing single characters',
      'Removing old entries when full'
    ],
    correctIndex: 0,
    explanation: 'Each parse step finds the longest dictionary match, outputs its index + the next symbol, and adds the extended string as a new dictionary entry.',
    realWorld: 'This greedy parsing is what makes LZ78 both simple and provably optimal.',
    hint: 'Match, extend by one symbol, add to dictionary.',
  },
  {
    id: 308006, topic: 'abraham-lempel', difficulty: 'sota',
    question: 'The LZW variant (Welch, 1984) of Lempel-Ziv differs from pure LZ78 by:',
    options: [
      'Pre-initializing the dictionary with all single-symbol entries and outputting only dictionary indices',
      'Using arithmetic coding internally',
      'Requiring two-pass encoding',
      'Being lossy for floating-point data'
    ],
    correctIndex: 0,
    explanation: 'LZW starts with a full single-symbol dictionary, so every input character has a code. This eliminates the need to transmit literal symbols — only indices are output.',
    realWorld: 'LZW powered GIF images and TIFF compression. Its patent history (Unisys) drove the creation of PNG as a patent-free alternative.',
    hint: 'The dictionary starts non-empty — every byte already has a code.',
  },
];
