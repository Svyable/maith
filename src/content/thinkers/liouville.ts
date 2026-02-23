import type { Question } from '../types';

export const liouvilleQuestions: Question[] = [
  {
    id: 21710,
    topic: 'liouville',
    difficulty: 'sota',
    question: 'Liouville\'s theorem in complex analysis states that every bounded entire function is what?',
    options: [
      'Constant',
      'Polynomial',
      'Periodic',
      'Analytic only on a half-plane'
    ],
    correctIndex: 0,
    explanation: 'If f is holomorphic on all of ℂ and |f(z)| ≤ M for all z, then f is constant. The proof uses Cauchy\'s integral formula: |f\'(z)| ≤ M/R → 0 as R → ∞, so f\' ≡ 0.',
    realWorld: 'This theorem gives a one-line proof of the Fundamental Theorem of Algebra: if p(z) has no root, 1/p(z) is bounded entire, hence constant — contradiction.',
    hint: 'Bounded + entire = very restricted. Think about what Cauchy estimates force.'
  },
  {
    id: 21711,
    topic: 'liouville',
    difficulty: 'sota',
    question: 'Liouville constructed the first proven transcendental numbers. What property defines a Liouville number?',
    options: [
      'It can be approximated by rationals p/q faster than any power |α − p/q| < 1/q^n for all n',
      'It has a non-repeating decimal expansion',
      'It cannot be expressed as a finite continued fraction',
      'Its digits follow a random distribution'
    ],
    correctIndex: 0,
    explanation: 'A Liouville number α satisfies: for every n, there exist integers p, q with q > 1 such that |α − p/q| < 1/q^n. By Liouville\'s approximation theorem, algebraic numbers of degree d cannot be approximated this well (only 1/q^d), so Liouville numbers must be transcendental.',
    realWorld: 'Liouville\'s constant L = Σ10^(−n!) = 0.110001000000000000000001... was the first number explicitly proven transcendental (1851).',
    hint: 'Algebraic numbers resist rational approximation; transcendental numbers don\'t.'
  },
  {
    id: 21712,
    topic: 'liouville',
    difficulty: 'sota',
    question: 'Liouville\'s theorem in Hamiltonian mechanics states that phase space volume is preserved. What mathematical object captures this?',
    options: [
      'The symplectic 2-form ω = Σdpᵢ ∧ dqᵢ is invariant under Hamiltonian flow',
      'The metric tensor gᵢⱼ is constant along trajectories',
      'The Lagrangian L = T − V is time-independent',
      'The total energy H is minimized along trajectories'
    ],
    correctIndex: 0,
    explanation: 'Hamiltonian flow preserves the symplectic form ω, which means phase space volumes are conserved (dω^n/dt = 0). This is Liouville\'s theorem: the density of states ρ satisfies dρ/dt = 0 along trajectories.',
    realWorld: 'Statistical mechanics relies on Liouville\'s theorem: the microcanonical ensemble is uniform on energy surfaces because phase space volume is conserved.',
    hint: 'Phase space has a natural volume form from the symplectic structure.'
  },
];
