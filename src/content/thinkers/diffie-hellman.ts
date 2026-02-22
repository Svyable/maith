import type { Question } from '../types';

export const diffieQuestions: Question[] = [
  {
    id: 14301,
    topic: 'diffie-hellman',
    difficulty: 'easy',
    question: 'The Diffie-Hellman key exchange (1976) was revolutionary because it allowed two parties to:',
    options: [
      'Agree on a shared secret key over an insecure channel without prior contact',
      'Encrypt messages using a pre-shared password',
      'Sign documents digitally for the first time',
      'Send messages that self-destruct after reading',
    ],
    correctIndex: 0,
    explanation: 'Diffie-Hellman lets Alice and Bob each pick secret exponents $a, b$, exchange $g^a \\bmod p$ and $g^b \\bmod p$, then independently compute the shared secret $g^{ab} \\bmod p$ — without ever transmitting it.',
    realWorld: 'Every HTTPS connection you make likely uses Elliptic Curve Diffie-Hellman (ECDH) to establish session keys. It\'s the foundation of modern internet security.',
    hint: 'The security relies on the discrete logarithm problem: given $g^a \\bmod p$, finding $a$ is computationally hard.',
  },
  {
    id: 14302,
    topic: 'diffie-hellman',
    difficulty: 'hard',
    question: 'Diffie and Hellman\'s 1976 paper "New Directions in Cryptography" introduced the concept of:',
    options: [
      'Public-key (asymmetric) cryptography — separating encryption and decryption keys',
      'Symmetric block ciphers like AES',
      'One-time pads with perfect secrecy',
      'Steganographic hiding of messages in images',
    ],
    correctIndex: 0,
    explanation: 'Before 1976, all cryptography required both parties to share a secret key. Diffie and Hellman proposed the radical idea that encryption and decryption could use different keys — one public, one private — enabling secure communication without prior key exchange.',
    realWorld: 'This paper launched modern cryptography: RSA, elliptic curves, digital signatures, SSL/TLS, and blockchain all descend from this paradigm shift.',
    hint: 'The breakthrough was separating "locking" from "unlocking" — anyone can lock, only the key holder can unlock.',
  },
  {
    id: 14303,
    topic: 'diffie-hellman',
    difficulty: 'sota',
    question: 'The Logjam attack (2015) showed that many TLS implementations using Diffie-Hellman were vulnerable because:',
    options: [
      'Servers reused the same 512-bit or 1024-bit prime groups, enabling precomputation of discrete logs',
      'The random number generators were backdoored by the NSA',
      'Quantum computers could factor the primes in real time',
      'The protocol lacked proper authentication of key exchange messages',
    ],
    correctIndex: 0,
    explanation: 'Logjam showed that discrete log precomputation for a single 512-bit prime could break ~8% of HTTPS servers. For 1024-bit primes, a nation-state with sufficient resources could plausibly do the same — explaining leaked NSA capabilities.',
    realWorld: 'Logjam forced browsers to reject DH groups below 1024 bits and accelerated the migration to Elliptic Curve DH (ECDH) with 256-bit keys offering equivalent security to 3072-bit DH.',
    hint: 'If everyone uses the same prime, an adversary only needs to do the expensive precomputation once.',
  },
];
