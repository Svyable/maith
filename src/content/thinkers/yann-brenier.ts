import type { Question } from '../types';

export const yannBrenierQuestions: Question[] = [
  {
    id: 21340,
    topic: 'yann-brenier',
    difficulty: 'sota',
    question: 'Brenier\'s theorem (1991) establishes that the optimal transport map for quadratic cost between absolutely continuous measures is the gradient of what?',
    options: [
      'A convex function: T = ∇φ where φ is convex',
      'A harmonic function satisfying Laplace\'s equation',
      'A linear map represented by a positive-definite matrix',
      'An entropy function H(x) = −∫ρ log ρ'
    ],
    correctIndex: 0,
    explanation: 'Brenier proved that for c(x,y)=|x−y|², the unique optimal map T pushing μ to ν is T = ∇φ for a convex function φ. This φ satisfies the Monge-Ampère equation det(D²φ) = ρ₀/ρ₁∘∇φ.',
    realWorld: 'Brenier maps are used in meteorology (semi-geostrophic equations), mesh generation, and normalizing flows in generative AI.',
    hint: 'The map is a gradient, and the potential must be convex.'
  },
  {
    id: 21341,
    topic: 'yann-brenier',
    difficulty: 'sota',
    question: 'The Brenier map T = ∇φ satisfies which PDE linking the source and target densities?',
    options: [
      'The Monge-Ampère equation: det(D²φ(x)) = ρ₀(x) / ρ₁(∇φ(x))',
      'The heat equation: ∂ₜφ = Δφ',
      'The wave equation: ∂ₜₜφ = c²Δφ',
      'Laplace\'s equation: Δφ = 0'
    ],
    correctIndex: 0,
    explanation: 'The change-of-variables formula for T = ∇φ yields det(D²φ) = ρ₀/ρ₁∘∇φ, a fully nonlinear elliptic PDE of Monge-Ampère type. Regularity theory by Caffarelli provides smoothness under convexity conditions.',
    realWorld: 'Solving Monge-Ampère numerically is key to reflector design, optimal mesh adaptation, and computational OT.',
    hint: 'It relates the Jacobian determinant of the map to the density ratio.'
  },
  {
    id: 21342,
    topic: 'yann-brenier',
    difficulty: 'hard',
    question: 'Brenier\'s polar factorization theorem decomposes any vector field into what two components?',
    options: [
      'The gradient of a convex function composed with a measure-preserving map',
      'A curl-free and a divergence-free component (Helmholtz decomposition)',
      'A symmetric and an antisymmetric part',
      'An irrotational and a solenoidal field'
    ],
    correctIndex: 0,
    explanation: 'Any L² map s: Ω → ℝⁿ can be uniquely decomposed as s = ∇φ ∘ σ where φ is convex and σ is measure-preserving. This is the nonlinear analogue of the polar decomposition of matrices.',
    realWorld: 'Polar factorization has applications in fluid mechanics, data registration, and geometric measure theory.',
    hint: 'It is the infinite-dimensional analog of the matrix polar decomposition A = UP.'
  },
];
