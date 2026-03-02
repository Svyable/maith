import type { Question } from '../types';

export const carlJacobiQuestions: Question[] = [
  {
    id: 21700,
    topic: 'carl-jacobi',
    difficulty: 'sota',
    question: 'The Jacobi elliptic function sn(u, k) generalizes sin(u). What parameter k controls?',
    options: [
      'The eccentricity (modulus) of the ellipse defining the period lattice',
      'The amplitude of oscillation',
      'The frequency of the periodic motion',
      'The damping ratio of the system'
    ],
    correctIndex: 0,
    explanation: 'The modulus k ∈ [0,1] controls how "elliptic" the function is. When k → 0, sn(u,k) → sin(u) (circular). When k → 1, sn(u,k) → tanh(u) (hyperbolic). The parameter determines the shape of the underlying elliptic curve y² = (1−x²)(1−k²x²).',
    realWorld: 'Jacobi elliptic functions describe the exact motion of a pendulum at any amplitude, not just the small-angle sin approximation.',
    hint: 'At k=0 you get trigonometry; at k=1 you get hyperbolic functions.'
  },
  {
    id: 21701,
    topic: 'carl-jacobi',
    difficulty: 'sota',
    question: 'Jacobi\'s theta function θ₃(z, q) = 1 + 2∑q^(n²)cos(2nz) converges for |q| < 1. What is the key identity connecting theta functions to elliptic functions?',
    options: [
      'sn(u) is a ratio of theta functions: θ₁(v)/θ₄(v) up to constants',
      'θ₃ equals the Riemann zeta function on the critical strip',
      'Theta functions are the Taylor coefficients of sn(u)',
      'θ₃(z, q) = e^(πiz²) for all z'
    ],
    correctIndex: 0,
    explanation: 'Jacobi showed that all elliptic functions (sn, cn, dn) can be expressed as ratios of theta functions. Specifically sn(u) = (θ₃/θ₂)(θ₁(v)/θ₄(v)) where v = u/(πθ₃²). This representation converges exponentially fast.',
    realWorld: 'Theta function representations are used in number theory (counting lattice points), string theory (partition functions), and cryptography (isogeny-based schemes).',
    hint: 'Theta functions are the building blocks; elliptic functions are their ratios.'
  },
  {
    id: 21702,
    topic: 'carl-jacobi',
    difficulty: 'sota',
    question: 'Jacobi\'s transformation formula relates theta functions at nome q to those at q\' where qq\' satisfies what condition?',
    options: [
      'The modular relation: if τ\' = −1/τ then q\' = e^(2πiτ\') (Landen transform)',
      'q + q\' = 1 (complementary moduli)',
      'q · q\' = e^(−π) always',
      'q\' = 1 − q (linear complement)'
    ],
    correctIndex: 0,
    explanation: 'Jacobi\'s imaginary transformation sends τ → −1/τ (equivalently q → q\' where the nomes are related by modular inversion). This SL(2,ℤ) symmetry is the origin of modular forms and connects to the theory of modular curves.',
    realWorld: 'Modular transformations underpin the proof of Fermat\'s Last Theorem (Wiles) and modern elliptic curve cryptography.',
    hint: 'Think modular group action: τ maps to −1/τ.'
  },
];
