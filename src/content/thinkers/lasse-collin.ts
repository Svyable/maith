import type { Question } from '../types';

export const lasseCollinQuestions: Question[] = [
  {
    id: 308010, topic: 'lasse-collin', difficulty: 'easy',
    question: 'Lasse Collin created XZ Utils, which wraps LZMA2 in the .xz container format. The key advantage of .xz over .gz is:',
    options: [
      'Significantly better compression ratios with integrity checking (CRC-64/SHA-256)',
      'Faster decompression only',
      'Smaller file headers',
      'Support for lossy audio compression'
    ],
    correctIndex: 0,
    explanation: 'XZ Utils leverages LZMA2 for ~30% better compression than gzip while adding robust integrity verification and streamable block-based format.',
    realWorld: '.xz became the default compression for Linux kernel tarballs and many package managers (dpkg, RPM).',
    hint: 'Better ratio + data integrity = the upgrade from gzip.',
  },
  {
    id: 308011, topic: 'lasse-collin', difficulty: 'hard',
    question: 'LZMA2, used in XZ Utils, improves upon LZMA1 primarily by:',
    options: [
      'Supporting multi-threaded compression and resetting the encoder state for incompressible data',
      'Using a completely different algorithm',
      'Removing dictionary-based matching',
      'Switching to lossy compression for large files'
    ],
    correctIndex: 0,
    explanation: 'LZMA2 wraps LZMA1 with a chunked format: it can reset state between blocks (enabling parallelism) and store incompressible chunks uncompressed to avoid expansion.',
    realWorld: 'This is why `xz -T0` can use all CPU cores — each block compresses independently.',
    hint: 'Blocks + reset = parallelism; passthrough = no expansion on random data.',
  },
  {
    id: 308012, topic: 'lasse-collin', difficulty: 'sota',
    question: 'The XZ Utils supply-chain attack (CVE-2024-3094) exploited:',
    options: [
      'Malicious code injected into the build system that backdoored sshd via a modified liblzma',
      'A buffer overflow in the LZMA decoder',
      'Weak cryptographic hashing in .xz files',
      'A flaw in the CRC-64 algorithm'
    ],
    correctIndex: 0,
    explanation: 'A sophisticated supply-chain attack inserted obfuscated code into the XZ Utils build scripts that modified liblzma to intercept SSH authentication — discovered by Andres Freund through anomalous CPU usage.',
    realWorld: 'This incident highlighted the fragility of critical open-source infrastructure maintained by very few individuals.',
    hint: 'The attack targeted the build process, not the compression algorithm itself.',
  },
];
