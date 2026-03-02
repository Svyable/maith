// carr.ts
import type { Question } from '../types';

export const carrQuestions: Question[] = [
  {
    id: 69280,
    topic: 'carr',
    difficulty: 'easy',
    question: 'Carr-Madan formula prices?',
    options: [
      'FFT fast European option pricing via characteristic function',
      'Static replication portfolio',
      'Variance swap replication',
      'Local vol calibration'
    ],
    correctIndex: 0,
    explanation: 'φ(u) → O(k) via Fourier transform; O(N log N) pricing.',
    realWorld: 'Industry standard for Lévy/Heston pricing.',
    hint: 'Frequency domain option pricing.'
  },
  {
    id: 69281,
    topic: 'carr',
    difficulty: 'hard',
    question: 'Carr-Madan characteristic integrand?',
    options: [
      'ψ(k,u) = e^{ik(log K)} φ(u-(α+1)i) / [α²+α-u²+iu(2α+1)]',
      'Direct Black-Scholes φ',
      'Heston Fourier cosine',
      'Real FFT only'
    ],
    correctIndex: 0,
    explanation: 'Damped call price → Fourier pair with log-strike.',
    realWorld: 'Handles skew/jumps in seconds.',
    hint: 'Complex characteristic function transform.'
  },
  {
    id: 69282,
    topic: 'carr',
    difficulty: 'sota',
    question: 'Carr static replication of?',
    options: [
      'Power options: butterfly spread → payoff ∫|K-X|^n dK',
      'Variance swaps (log contract)',
      'Correlation swaps',
      'Dispersion trading'
    ],
    correctIndex: 0,
    explanation: 'O(1/n!) moments from vanilla portfolio.',
    realWorld: 'Risk-neutral density extraction.',
    hint: 'Butterflies span power payoffs.'
  },
  {
    id: 69283,
    topic: 'carr',
    difficulty: 'hard',
    question: 'Recovery theorem assumes?',
    options: [
      'Risk-neutral density = physical density × risk-neutral CDF',
      'Complete markets',
      'Representative agent',
      'i.i.d. returns'
    ],
    correctIndex: 0,
    explanation: 'q_phys(K) = q_rn(K) × Q_rn(K); extracts preferences.',
    realWorld: 'Implied risk aversion from option prices.',
    hint: 'RN measure reveals physical via pricing kernel.'
  },
  {
    id: 69284,
    topic: 'carr',
    difficulty: 'sota',
    question: 'Carr-Madan grid spacing Δk?',
    options: [
      'Δk ≈ 0.25 / √T for numerical stability',
      'Δk = log(1.1)',
      'Adaptive grid',
      'Δk = 0.01 fixed'
    ],
    correctIndex: 0,
    explanation: 'Controls oscillation/aliasing in inverse FFT.',
    realWorld: 'Production FFT calibration.',
    hint: 'Log-strike spacing tied to maturity.'
  }
];
