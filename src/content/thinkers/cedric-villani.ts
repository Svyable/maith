import type { Question } from '../types';

export const cedricVillaniQuestions: Question[] = [
  {
    id: 21230,
    topic: 'cedric-villani',
    difficulty: 'sota',
    question: 'The 2-Wasserstein distance W₂(μ,ν) is defined as the infimum over what quantity?',
    options: [
      'inf { (∫∥x−y∥² dγ(x,y))^{1/2} } over all couplings γ with marginals μ and ν',
      'sup { ∫f d(μ−ν) } over all 1-Lipschitz functions f',
      'The total variation distance ∥μ−ν∥_TV',
      'KL(μ ∥ ν) + KL(ν ∥ μ)'
    ],
    correctIndex: 0,
    explanation: 'The 2-Wasserstein distance minimizes the expected squared transport cost over all joint distributions (couplings) whose marginals are μ and ν. This is the "Earth Mover\'s Distance" generalized to L² cost.',
    realWorld: 'Wasserstein distances power Wasserstein GANs (WGANs), providing stable training gradients that transformed generative AI.',
    hint: 'Think of the cheapest way to transport one pile of dirt into another shape.'
  },
  {
    id: 21231,
    topic: 'cedric-villani',
    difficulty: 'sota',
    question: 'Villani\'s work on optimal transport connects to which fundamental inequality relating entropy and transport?',
    options: [
      'The Talagrand inequality: W₂²(μ, ν) ≤ C · H(μ|ν)',
      'The Cauchy-Schwarz inequality applied to densities',
      'Jensen\'s inequality for convex transport costs',
      'The isoperimetric inequality for Wasserstein balls'
    ],
    correctIndex: 0,
    explanation: 'The Talagrand (or T₂) inequality bounds the Wasserstein distance by the relative entropy, creating a powerful bridge between information theory and optimal transport that Villani extensively developed.',
    realWorld: 'This inequality provides concentration-of-measure results used in high-dimensional statistics and machine learning generalization bounds.',
    hint: 'It connects an information-theoretic quantity (entropy) to a geometric one (transport distance).'
  },
  {
    id: 21232,
    topic: 'cedric-villani',
    difficulty: 'sota',
    question: 'Villani won the Fields Medal partly for his work on convergence to equilibrium in kinetic theory. Which equation was central?',
    options: [
      'The Boltzmann equation with entropy production bounds',
      'The Navier-Stokes equations in 3D',
      'The Schrödinger equation for many-body systems',
      'The heat equation on Riemannian manifolds'
    ],
    correctIndex: 0,
    explanation: 'Villani (with Desvillettes) proved quantitative rates of convergence to equilibrium for the Boltzmann equation using entropy production estimates, settling longstanding questions in mathematical physics.',
    realWorld: 'Understanding gas relaxation to equilibrium has applications in aerospace engineering, plasma physics, and semiconductor modeling.',
    hint: 'This equation describes how gases relax to the Maxwell-Boltzmann distribution.'
  },
  {
    id: 21233,
    topic: 'cedric-villani',
    difficulty: 'sota',
    question: 'Villani\'s "Optimal Transport: Old and New" synthesizes OT with Riemannian geometry. What is the Otto calculus?',
    options: [
      'A formal Riemannian structure on the space of probability measures where the metric tensor is W₂',
      'A symbolic calculus for computing Wasserstein distances analytically',
      'A numerical method for solving the Monge-Ampère equation',
      'A variational calculus for entropy-regularized transport plans'
    ],
    correctIndex: 0,
    explanation: 'Otto (2001) introduced a formal infinite-dimensional Riemannian structure on P₂(ℝⁿ) where the tangent space at ρ consists of velocity fields and the inner product yields W₂ as the geodesic distance. Villani rigorously developed and popularized this framework.',
    realWorld: 'Otto calculus inspired Wasserstein natural gradient descent methods in machine learning and information geometry.',
    hint: 'It treats probability space as a curved manifold with a specific Riemannian metric.'
  },
  {
    id: 21234,
    topic: 'cedric-villani',
    difficulty: 'hard',
    question: 'In Villani\'s framework, what is the Monge problem versus the Kantorovich relaxation?',
    options: [
      'Monge seeks a deterministic map T; Kantorovich allows probabilistic couplings (transport plans)',
      'Monge is continuous; Kantorovich is discrete',
      'Monge is for L¹ cost; Kantorovich is for L² cost',
      'Monge works on manifolds; Kantorovich works on Euclidean spaces only'
    ],
    correctIndex: 0,
    explanation: 'Monge (1781) required a map T:X→Y with T#μ=ν; Kantorovich (1942) relaxed this to joint measures γ∈Π(μ,ν). The Kantorovich formulation is a linear program that always has a solution, while Monge\'s may not.',
    realWorld: 'Kantorovich\'s relaxation made OT computationally tractable and earned him the 1975 Nobel Prize in Economics.',
    hint: 'One requires each grain of sand to go to exactly one destination; the other allows splitting.'
  },
];
