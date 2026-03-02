import type { Question } from '../types';

export const satoshiQuestions: Question[] = [
  {
    id: 14201,
    topic: 'satoshi-nakamoto',
    difficulty: 'easy',
    question: 'Satoshi Nakamoto\'s Bitcoin whitepaper (2008) proposed solving the double-spending problem without a trusted third party using:',
    options: [
      'A peer-to-peer network with proof-of-work consensus',
      'A centralized database managed by banks',
      'Public key encryption alone',
      'A government-regulated digital ledger',
    ],
    correctIndex: 0,
    explanation: 'Bitcoin uses a decentralized network where miners compete to solve proof-of-work puzzles, creating a tamper-resistant chain of transaction blocks. No single authority controls the ledger.',
    realWorld: 'Bitcoin\'s blockchain spawned an entire industry: DeFi, NFTs, stablecoins, and central bank digital currencies (CBDCs) all trace back to the 2008 whitepaper.',
    hint: 'The key innovation was replacing trust in institutions with trust in mathematics and computation.',
  },
  {
    id: 14202,
    topic: 'satoshi-nakamoto',
    difficulty: 'hard',
    question: 'Bitcoin\'s proof-of-work requires miners to find a nonce such that the SHA-256 hash of the block header satisfies:',
    options: [
      'The hash is less than a target value (has a certain number of leading zeros)',
      'The hash equals a predetermined constant',
      'The hash is a perfect square modulo a large prime',
      'The hash matches the previous block\'s hash exactly',
    ],
    correctIndex: 0,
    explanation: 'Miners repeatedly hash the block header with different nonces until $H(\\text{header} \\| \\text{nonce}) < \\text{target}$. The difficulty adjusts every 2016 blocks to maintain ~10 minute block times.',
    realWorld: 'Bitcoin mining consumes ~150 TWh/year globally — comparable to a medium-sized country — driving the shift toward proof-of-stake in networks like Ethereum.',
    hint: 'The "difficulty" is encoded as a threshold — the lower the target, the harder it is to find a valid hash.',
  },
  {
    id: 14203,
    topic: 'satoshi-nakamoto',
    difficulty: 'sota',
    question: 'The Bitcoin script system is intentionally NOT Turing-complete. The primary security reason is:',
    options: [
      'Preventing infinite loops and denial-of-service attacks on the network',
      'Making it impossible to create smart contracts',
      'Reducing the size of the blockchain',
      'Ensuring backward compatibility with older nodes',
    ],
    correctIndex: 0,
    explanation: 'By excluding loops and recursion, Bitcoin Script guarantees that every script terminates in bounded time. This prevents attackers from deploying scripts that would hang validating nodes, a critical safety property for a decentralized consensus system.',
    realWorld: 'Ethereum chose Turing-completeness and solved the halting problem economically via "gas" fees. Bitcoin\'s conservative choice led to Layer-2 solutions like Lightning Network for complex logic.',
    hint: 'The halting problem tells us we cannot determine whether an arbitrary program will finish — Satoshi designed around this.',
  },
];
