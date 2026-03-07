import type { Question } from '../types';

export const yannColletQuestions: Question[] = [
  {
    id: 308022, topic: 'yann-collet', difficulty: 'easy',
    question: 'Yann Collet created Zstandard (zstd, 2016), which is designed to:',
    options: [
      'Match or exceed gzip compression ratios at much faster speeds using FSE entropy coding',
      'Replace JPEG for image compression',
      'Only work on text data',
      'Provide encryption alongside compression'
    ],
    correctIndex: 0,
    explanation: 'Zstd uses LZ77-style matching with Finite State Entropy (FSE, based on ANS) instead of Huffman, achieving gzip-like ratios at 3-5× the speed, or much better ratios at similar speed.',
    realWorld: 'Zstd is used by Facebook, Linux kernel (btrfs, squashfs), and replaces gzip in many server workloads.',
    hint: 'Fast like LZ4, compresses like gzip — the best of both worlds.',
    glossaryLinks: ['lossless-compression', 'entropy'],
  },
  {
    id: 308023, topic: 'yann-collet', difficulty: 'hard',
    question: 'Yann Collet also created LZ4, the fastest general-purpose compressor, which achieves speed by:',
    options: [
      'Using a simplified LZ77 with fixed-size hash table, no entropy coding, and byte-aligned output',
      'Using GPU acceleration',
      'Compressing only every other byte',
      'Using LZMA with reduced dictionary'
    ],
    correctIndex: 0,
    explanation: 'LZ4 sacrifices compression ratio for extreme speed: simple hash-based match finding, no entropy coder (raw tokens), and byte-aligned format enabling branchless decoding at >4 GB/s.',
    realWorld: 'LZ4 is the default compression in Linux kernel memory (zram), Apple APFS, and real-time databases.',
    hint: 'No Huffman, no arithmetic — just raw LZ tokens optimized for CPU cache.',
  },
  {
    id: 308024, topic: 'yann-collet', difficulty: 'sota',
    question: 'Zstd\'s dictionary compression mode is particularly effective because:',
    options: [
      'It trains a dictionary on sample data, enabling high compression of small payloads that share structure',
      'It uses a universal dictionary built into the algorithm',
      'It requires no training data',
      'It only works for JSON'
    ],
    correctIndex: 0,
    explanation: 'For small data (API responses, log lines), normal LZ compressors can\'t build enough context. Zstd trains a dictionary from representative samples, providing a shared "memory" for both compressor and decompressor.',
    realWorld: 'Facebook uses dictionary mode to compress billions of small JSON objects, achieving 2-5× better ratios than standard zstd.',
    hint: 'Pre-learned patterns shared between encoder and decoder — especially powerful for small, similar payloads.',
  },
];
