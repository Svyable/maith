import type { Question } from '../types';

export const eisensteinQuestions: Question[] = [
  {
    id: 21730,
    topic: 'gotthold-eisenstein',
    difficulty: 'sota',
    question: 'Eisenstein\'s criterion states a polynomial f(x) = aₙxⁿ + ... + a₀ is irreducible over ℚ if a prime p satisfies what conditions?',
    options: [
      'p | aᵢ for i < n, p ∤ aₙ, and p² ∤ a₀',
      'p | aₙ and p | a₀',
      'p divides all coefficients including aₙ',
      'p² divides every coefficient'
    ],
    correctIndex: 0,
    explanation: 'Eisenstein\'s irreducibility criterion: if p | a₀, a₁, ..., aₙ₋₁ but p ∤ aₙ and p² ∤ a₀, then f is irreducible over ℚ. This follows from considering f mod p in ℤ/pℤ[x] and using unique factorization.',
    realWorld: 'Eisenstein\'s criterion proves the cyclotomic polynomial Φₚ(x) = xᵖ⁻¹ + xᵖ⁻² + ... + 1 is irreducible, fundamental to algebraic number theory.',
    hint: 'The prime p must divide all coefficients except the leading one, and not divide a₀ too much.'
  },
  {
    id: 21731,
    topic: 'gotthold-eisenstein',
    difficulty: 'sota',
    question: 'Quadratic reciprocity relates the Legendre symbols (p/q) and (q/p) for odd primes p, q. What is the law?',
    options: [
      '(p/q)(q/p) = (−1)^((p−1)/2 · (q−1)/2)',
      '(p/q) + (q/p) = 1 always',
      '(p/q) = (q/p) for all odd primes',
      '(p/q)(q/p) = 1 if and only if p ≡ q mod 4'
    ],
    correctIndex: 0,
    explanation: 'Quadratic reciprocity: (p/q)(q/p) = (−1)^((p−1)(q−1)/4). So (p/q) = (q/p) unless both p, q ≡ 3 mod 4, in which case (p/q) = −(q/p). Eisenstein gave an elegant proof using the Eisenstein integers ℤ[ω].',
    realWorld: 'Quadratic reciprocity is the foundation of modern algebraic number theory and appears in cryptographic algorithms based on quadratic residues.',
    hint: 'The sign flip happens only when both primes are ≡ 3 mod 4.'
  },
  {
    id: 21732,
    topic: 'gotthold-eisenstein',
    difficulty: 'sota',
    question: 'Eisenstein integers ℤ[ω] where ω = e^(2πi/3) form a ring. What is the norm of a + bω?',
    options: [
      'N(a + bω) = a² − ab + b²',
      'N(a + bω) = a² + b²',
      'N(a + bω) = |a| + |b|',
      'N(a + bω) = a² + ab + b²'
    ],
    correctIndex: 0,
    explanation: 'The norm in ℤ[ω] is N(a + bω) = (a + bω)(a + bω̄) = a² − ab + b² since ω̄ = ω² = −1 − ω. This norm is multiplicative and ℤ[ω] is a Euclidean domain under this norm, hence a UFD.',
    realWorld: 'Eisenstein integers provide the cleanest proof of cubic reciprocity and are used in certain lattice-based cryptographic schemes.',
    hint: 'Multiply by the conjugate: ω̄ = ω² and 1 + ω + ω² = 0.'
  },
];
