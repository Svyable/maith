import type { Question } from '../types';

export const shamirQuestions: Question[] = [
  {
    id: 14401,
    topic: 'adi-shamir',
    difficulty: 'easy',
    question: 'Adi Shamir is the "S" in RSA. Shamir\'s Secret Sharing scheme splits a secret into $n$ shares such that:',
    options: [
      'Any $k$ shares can reconstruct the secret, but $k-1$ shares reveal nothing',
      'All $n$ shares are needed to reconstruct the secret',
      'The secret can be recovered from any single share',
      'Shares must be combined in a specific order',
    ],
    correctIndex: 0,
    explanation: 'Shamir\'s $(k,n)$ threshold scheme uses polynomial interpolation: the secret is the constant term of a degree-$(k-1)$ polynomial. Any $k$ points determine the polynomial uniquely; fewer than $k$ points leave the secret information-theoretically secure.',
    realWorld: 'Used for cryptocurrency wallet backup (splitting seed phrases), corporate key management, and nuclear launch codes — any system where no single person should hold the full secret.',
    hint: 'A line is determined by 2 points, a parabola by 3 — Shamir generalized this to arbitrary thresholds.',
  },
  {
    id: 14402,
    topic: 'adi-shamir',
    difficulty: 'hard',
    question: 'Shamir co-invented differential cryptanalysis (1990), which attacks block ciphers by:',
    options: [
      'Analyzing how differences in plaintext pairs propagate through the cipher to produce predictable output differences',
      'Brute-forcing all possible keys in parallel',
      'Exploiting timing side-channels in hardware implementations',
      'Factoring the cipher\'s internal modulus',
    ],
    correctIndex: 0,
    explanation: 'Differential cryptanalysis traces how input XOR differences $\\Delta x$ propagate to output differences $\\Delta y$ through nonlinear S-boxes. Statistical biases in these differentials reveal key bits. It was the first general attack on DES-like ciphers.',
    realWorld: 'DES was secretly designed by IBM/NSA to resist differential cryptanalysis — the NSA knew about it 15 years before Shamir published it. AES was explicitly designed to resist both differential and linear cryptanalysis.',
    hint: 'Feed the cipher two inputs that differ in a known way, then observe how the output difference depends on the key.',
  },
  {
    id: 14403,
    topic: 'adi-shamir',
    difficulty: 'sota',
    question: 'Shamir\'s visual cryptography scheme encodes an image into $n$ transparencies such that:',
    options: [
      'Stacking any $k$ transparencies reveals the image optically — no computation needed',
      'Each transparency contains a faint copy of the image',
      'The image can only be reconstructed digitally using RSA decryption',
      'Stacking all transparencies produces a blank white sheet',
    ],
    correctIndex: 0,
    explanation: 'Visual cryptography (Naor & Shamir, 1994) splits each pixel into subpixels. Individual shares look like random noise. When $k$ shares are physically overlaid, the subpixels align to reveal the original image — achieving secret sharing with zero computation.',
    realWorld: 'Used for secure ballot verification, anti-counterfeiting watermarks, and low-tech authentication in environments without computers.',
    hint: 'It\'s secret sharing you can do with printed transparencies and your eyes — no computer required.',
  },
];
