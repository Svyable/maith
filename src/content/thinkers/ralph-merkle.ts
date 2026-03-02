import type { Question } from '../types';

export const ralphMerkleQuestions: Question[] = [
  {
    id: 14601,
    topic: 'ralph-merkle',
    difficulty: 'easy',
    question: 'Ralph Merkle independently invented public-key cryptography and is best known for the Merkle tree, which:',
    options: [
      'Organizes data hashes in a binary tree so any leaf can be verified with $O(\\log n)$ hashes',
      'Stores encryption keys in a balanced BST for fast lookup',
      'Compresses files using tree-structured Huffman codes',
      'Distributes secret shares across a network of nodes',
    ],
    correctIndex: 0,
    explanation: 'A Merkle tree hashes pairs of data blocks recursively up to a single root hash. To prove a leaf belongs, you only need $\\log_2 n$ sibling hashes — the "Merkle proof." Any tampering changes the root.',
    realWorld: 'Every Bitcoin block uses a Merkle tree of transactions. Git uses Merkle-like structures for integrity. IPFS, Certificate Transparency, and ZK-rollups all rely on Merkle trees.',
    hint: 'The root hash acts as a fingerprint for the entire dataset — change one bit and the root changes.',
  },
  {
    id: 14602,
    topic: 'ralph-merkle',
    difficulty: 'hard',
    question: 'Merkle\'s Puzzles (1974) was the first public-key key exchange proposal. It works by:',
    options: [
      'Having one party create $n$ puzzles each solvable in $O(n)$ time, while an eavesdropper faces $O(n^2)$ work',
      'Factoring large prime numbers to derive shared keys',
      'Using quantum entanglement to distribute encryption keys',
      'Exchanging one-time pads through a series of encrypted channels',
    ],
    correctIndex: 0,
    explanation: 'Alice creates $n$ puzzles, each containing a key and ID. Bob solves one in $O(n)$ work and tells Alice which ID he found. Eve must try all $n$ puzzles and on average solve $n/2$ to find the right one — a quadratic gap.',
    realWorld: 'While impractical compared to Diffie-Hellman, Merkle\'s Puzzles proved that public-key cryptography was possible from symmetric primitives alone — a foundational theoretical insight.',
    hint: 'The security gap is only quadratic ($n$ vs $n^2$) — much weaker than the exponential gap in modern systems.',
  },
  {
    id: 14603,
    topic: 'ralph-merkle',
    difficulty: 'sota',
    question: 'Merkle trees are the foundation of blockchain "light clients" because:',
    options: [
      'A client can verify any transaction\'s inclusion using only the block header and $O(\\log n)$ hashes, without downloading the full block',
      'They compress the entire blockchain into a single hash for mobile storage',
      'They allow transactions to be reversed by modifying leaf nodes',
      'They encrypt transaction data to protect user privacy',
    ],
    correctIndex: 0,
    explanation: 'SPV (Simplified Payment Verification) clients store only block headers (~80 bytes each). To verify a transaction, they request a Merkle proof: the $\\log_2 n$ sibling hashes from leaf to root. This enables trustless verification on resource-constrained devices.',
    realWorld: 'Ethereum\'s Merkle-Patricia tries extend this to verify account state, storage, and receipts. Light clients enable crypto wallets on phones without downloading hundreds of gigabytes of blockchain data.',
    hint: 'Satoshi described SPV in the original Bitcoin whitepaper — it\'s the reason your phone can verify transactions.',
  },
];
