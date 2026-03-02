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
];
