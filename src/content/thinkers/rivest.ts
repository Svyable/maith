import type { Question } from '../types';

export const rivestQuestions: Question[] = [
  {
    id: 14701,
    topic: 'rivest',
    difficulty: 'easy',
    question: 'Ron Rivest co-invented RSA and also created the widely used MD5 and RC4. The RSA algorithm\'s security relies on:',
    options: [
      'The computational difficulty of factoring the product of two large prime numbers',
      'The discrete logarithm problem over elliptic curves',
      'The shortest vector problem in lattices',
      'The difficulty of computing square roots modulo a prime',
    ],
    correctIndex: 0,
    explanation: 'RSA chooses two large primes $p, q$, computes $n = pq$, and publishes $n$. Encryption uses $c = m^e \\bmod n$; decryption uses $m = c^d \\bmod n$ where $d$ is the private key derived from $\\phi(n) = (p-1)(q-1)$. Without knowing $p, q$, computing $d$ is believed intractable.',
    realWorld: 'RSA secured the early internet (SSL/TLS) and is still used in digital signatures, secure email (PGP), and code signing. Typical key sizes are now 2048-4096 bits.',
    hint: 'Multiplying two 1000-digit primes takes milliseconds. Factoring their 2000-digit product would take longer than the age of the universe.',
  },
  {
    id: 14702,
    topic: 'rivest',
    difficulty: 'hard',
    question: 'Rivest designed the RC4 stream cipher, which was widely used in WEP and early TLS. It was eventually deprecated because:',
    options: [
      'Statistical biases in the keystream output enabled practical plaintext recovery attacks',
      'It was too slow for modern processors',
      'The key size was limited to 40 bits',
      'It required more memory than AES',
    ],
    correctIndex: 0,
    explanation: 'RC4\'s initial keystream bytes have measurable biases (e.g., $P(Z_2 = 0) \\approx 1/128$ instead of $1/256$). Attacks like NOMORE and Bar-Mitzvah exploit these biases to recover plaintext from TLS/WEP traffic with sufficient ciphertexts.',
    realWorld: 'RC4 was banned in TLS 1.3 (RFC 7465). WEP\'s use of RC4 with poor IV management was catastrophically broken, leading to WPA/WPA2 using AES-CCMP instead.',
    hint: 'The first few bytes of RC4 output are subtly non-random — and "subtly" is enough for cryptanalysis.',
  },
  {
    id: 14703,
    topic: 'rivest',
    difficulty: 'sota',
    question: 'Rivest proposed the concept of "time-lock puzzles" (1996), which are cryptographic puzzles that:',
    options: [
      'Require a predetermined amount of sequential computation to solve, resistant to parallelization',
      'Can only be decrypted after a specific calendar date using NTP',
      'Self-destruct after a timeout period',
      'Use blockchain timestamps for time verification',
    ],
    correctIndex: 0,
    explanation: 'Time-lock puzzles use iterated squaring: compute $a^{2^t} \\bmod n$ where $t$ is large. This requires $t$ sequential modular squarings — parallelism doesn\'t help. The puzzle creator knows the factorization of $n$ and can compute the solution efficiently using $\\phi(n)$.',
    realWorld: 'Time-lock puzzles enable sealed-bid auctions, delayed cryptocurrency transactions, and digital time capsules. Ethereum\'s Verifiable Delay Functions (VDFs) extend this concept for blockchain randomness.',
    hint: 'The key insight: some computations are inherently sequential — you can\'t speed them up with more CPUs.',
  },
];
