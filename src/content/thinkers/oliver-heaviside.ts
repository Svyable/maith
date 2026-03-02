// heaviside.ts
import type { Question } from '../types';

export const heavisideQuestions: Question[] = [
  {
    id: 50090,
    topic: 'oliver-heaviside',
    difficulty: 'easy',
    question: 'Heaviside step function H(t) defined?',
    options: [
      'H(t) = 0 for t<0, 1 for t≥0 (unit step)',
      'Dirac δ(t) impulse',
      'Ramp function tH(t)',
      'Sign function sgn(t)'
    ],
    correctIndex: 0,
    explanation: 'Idealized switch; Fourier/Laplace transform basis.',
    realWorld: 'Circuit switching, PDE boundary conditions.',
    hint: 'Jumps from 0 to 1 at t=0.'
  },
  {
    id: 50091,
    topic: 'oliver-heaviside',
    difficulty: 'hard',
    question: 'Heaviside operational calculus solves?',
    options: [
      'p operator: p = d/dt, pⁿ f = f^(n) (differential equations symbolically)',
      'Complex contour integration',
      'Fourier series expansion',
      'Green functions'
    ],
    correctIndex: 0,
    explanation: 'p(fg) = fp(g) + f(p+1)g; pre-Laplace table method.',
    realWorld: 'Electrical engineering circuit analysis.',
    hint: 'Treats differentiation as algebraic p.'
  },
  {
    id: 50092,
    topic: 'oliver-heaviside',
    difficulty: 'sota',
    question: 'Heaviside layer jumping?',
    options: [
      'Electromagnetic refraction at plasma boundary (radio blackout)',
      'Snell\'s law optics',
      'Total internal reflection',
      'Brewster angle'
    ],
    correctIndex: 0,
    explanation: 'n=0 plasma → total reflection; reentry communications.',
    realWorld: 'Rocket reentry blackouts.',
    hint: 'Plasma sheath blocks radio waves.'
  },
  {
    id: 50093,
    topic: 'oliver-heaviside',
    difficulty: 'hard',
    question: 'Heaviside expansion theorem?',
    options: [
      'Inverse Laplace: F(s) → ∑ A_k e^{p_k t} (partial fractions)',
      'Residue theorem',
      'Bromwich contour',
      'Post-Widder approximation'
    ],
    correctIndex: 0,
    explanation: 'Poles give exponential terms.',
    realWorld: 'Control systems transient response.',
    hint: 'Partial fractions → sum exponentials.'
  },
  {
    id: 50094,
    topic: 'oliver-heaviside',
    difficulty: 'sota',
    question: 'Heaviside Gibbs phenomenon?',
    options: [
      'Square wave Fourier overshoot ∼9% at discontinuities',
      'Aliasing Nyquist violation',
      'Gibbs ringing decay',
      'Spectral leakage'
    ],
    correctIndex: 0,
    explanation: 'Partial sum overshoots by (∫₀^π sin x/x dx)/π ≈ 0.09.',
    realWorld: 'Signal processing Gibbs wiggles.',
    hint: 'Fourier series overshoot at jumps.'
  }
];
