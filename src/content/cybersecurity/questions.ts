import type { Question } from '../types';

export const cybersecurityQuestions: Question[] = [
  {
    id: 40801, topic: 'cybersecurity', difficulty: 'easy',
    question: 'Public-key cryptography (RSA) relies on the computational difficulty of:',
    options: [
      'Factoring the product of two large primes — multiplying is easy, but reversing the multiplication is computationally infeasible for large numbers',
      'Adding two numbers together',
      'Sorting a list of numbers',
      'Finding the square root of a perfect square',
    ],
    correctIndex: 0,
    explanation: 'RSA creates a public key from n = p·q (two large primes). Encrypting with n is easy; decrypting requires knowing p and q. The best classical factoring algorithms are sub-exponential but still infeasible for 2048-bit keys.',
    realWorld: 'RSA secures HTTPS (every website with a padlock), email encryption, digital signatures, and cryptocurrency. Breaking RSA would compromise the entire internet\'s security infrastructure.',
    hint: 'Easy to multiply two big primes. Nearly impossible to figure out which primes were multiplied.',
  },
  {
    id: 40802, topic: 'cybersecurity', difficulty: 'hard',
    question: 'Zero-knowledge proofs allow a prover to:',
    options: [
      'Convince a verifier that a statement is true without revealing ANY information beyond the statement\'s truth — the verifier learns nothing except "yes, it\'s true"',
      'Share their private key securely with the verifier',
      'Encrypt data so only the verifier can read it',
      'Prove they own a password by sending it in plaintext',
    ],
    correctIndex: 0,
    explanation: 'A ZKP has three properties: completeness (honest prover convinces), soundness (dishonest prover fails), and zero-knowledge (verifier learns nothing beyond validity). The classic example: proving you know a graph coloring without revealing any colors.',
    realWorld: 'ZKPs power privacy-preserving blockchains (Zcash, zkSync), anonymous credentials, and verifiable computation. zk-SNARKs enable Ethereum L2 rollups processing 1000+ TPS.',
    hint: 'Prove you know the secret without showing the secret — like proving you can open a locked door without showing the key.',
  },
  {
    id: 40803, topic: 'cybersecurity', difficulty: 'sota',
    question: 'Post-quantum cryptography is urgently needed because:',
    options: [
      'Shor\'s algorithm on a sufficiently large quantum computer can factor RSA keys and break elliptic curve cryptography in polynomial time — "harvest now, decrypt later" attacks are already occurring',
      'Quantum computers have already broken all encryption',
      'Classical computers are getting fast enough to break RSA',
      'Post-quantum cryptography is only theoretical with no practical schemes',
    ],
    correctIndex: 0,
    explanation: 'NIST standardized CRYSTALS-Kyber (key exchange) and CRYSTALS-Dilithium (signatures) in 2024, based on lattice problems believed to resist quantum attacks. The threat: adversaries are storing encrypted data now to decrypt when quantum computers arrive.',
    realWorld: 'Google, Apple, and Signal have already deployed post-quantum key exchange (Kyber/ML-KEM). The US government mandated post-quantum migration by 2035. The transition involves updating billions of devices.',
    hint: 'Quantum computers will break current encryption — we need to switch to quantum-resistant algorithms before that happens.',
  },
];
