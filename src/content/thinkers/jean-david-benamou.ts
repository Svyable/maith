import type { Question } from '../types';

export const jeanDavidBenamouQuestions: Question[] = [
  {
    id: 21330,
    topic: 'jean-david-benamou',
    difficulty: 'sota',
    question: 'The Benamou-Brenier formulation recasts the W₂ distance as a minimization over what quantities?',
    options: [
      'A density field ρ(t,x) and velocity field v(t,x) satisfying the continuity equation, minimizing ∫∫ρ|v|² dx dt',
      'A coupling γ(x,y) minimizing ∫|x−y|² dγ',
      'A convex potential φ satisfying ∇φ#μ = ν',
      'A Markov kernel K(x,dy) minimizing the expected transport cost'
    ],
    correctIndex: 0,
    explanation: 'Benamou and Brenier (2000) showed W₂²(μ,ν) = inf ∫₀¹∫ ρ(t,x)|v(t,x)|² dx dt subject to ∂ₜρ + ∇·(ρv) = 0 with ρ(0)=μ, ρ(1)=ν. This is a fluid-mechanics formulation of optimal transport.',
    realWorld: 'This dynamic formulation enables interpolation between distributions (displacement interpolation) used in image morphing and generative models.',
    hint: 'Think of the cheapest way to move a fluid from one density to another.'
  },
  {
    id: 21331,
    topic: 'jean-david-benamou',
    difficulty: 'sota',
    question: 'In the Benamou-Brenier formulation, the constraint ∂ₜρ + ∇·(ρv) = 0 is called what?',
    options: [
      'The continuity equation (conservation of mass)',
      'The Navier-Stokes equation',
      'The Hamilton-Jacobi equation',
      'The Fokker-Planck equation'
    ],
    correctIndex: 0,
    explanation: 'The continuity equation expresses mass conservation: the rate of change of density equals the negative divergence of the momentum field ρv. No mass is created or destroyed during transport.',
    realWorld: 'The same equation appears in fluid dynamics, electrodynamics (charge conservation), and population dynamics.',
    hint: 'It says mass is neither created nor destroyed during the flow.'
  },
  {
    id: 21332,
    topic: 'jean-david-benamou',
    difficulty: 'hard',
    question: 'Benamou-Brenier\'s dynamic formulation can be solved numerically by reformulating it as what type of optimization problem?',
    options: [
      'A convex optimization problem via the change of variables (ρ, m=ρv), solvable by augmented Lagrangian methods',
      'A non-convex problem requiring simulated annealing',
      'A linear program in the space of couplings',
      'A semidefinite program over positive matrices'
    ],
    correctIndex: 0,
    explanation: 'By introducing the momentum m = ρv, the objective ∫ρ|v|² = ∫|m|²/ρ becomes jointly convex in (ρ,m), enabling efficient proximal splitting or ADMM algorithms.',
    realWorld: 'This convexification made the dynamic formulation computationally practical for image processing and scientific computing.',
    hint: 'A clever substitution makes the non-convex kinetic energy into a convex functional.'
  },
];
