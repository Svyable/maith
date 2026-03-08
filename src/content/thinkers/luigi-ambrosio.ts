import type { Question } from '../types';

export const luigiAmbrosioQuestions: Question[] = [
  {
    id: 21350,
    topic: 'luigi-ambrosio',
    difficulty: 'sota',
    question: 'Ambrosio, Gigli, and Savaré showed that many PDEs can be interpreted as gradient flows in Wasserstein space. What is the gradient flow of the entropy functional H(ρ) = ∫ρ log ρ in W₂?',
    options: [
      'The heat equation: ∂ₜρ = Δρ',
      'The porous medium equation: ∂ₜρ = Δ(ρᵐ)',
      'The Fokker-Planck equation with linear drift',
      'The Euler equation for incompressible flow'
    ],
    correctIndex: 0,
    explanation: 'The JKO (Jordan-Kinderlehrer-Otto) scheme shows that the heat equation is the Wasserstein gradient flow of the Boltzmann entropy H(ρ) = ∫ρ log ρ dx. Ambrosio-Gigli-Savaré rigorously extended this to metric measure spaces.',
    realWorld: 'This perspective unifies diffusion equations, Fokker-Planck dynamics, and mean-field games under a single geometric framework.',
    hint: 'The most basic diffusion equation arises from entropy minimization in transport geometry.'
  },
  {
    id: 21351,
    topic: 'luigi-ambrosio',
    difficulty: 'sota',
    question: 'What is the JKO scheme (Jordan-Kinderlehrer-Otto) that Ambrosio helped generalize?',
    options: [
      'An implicit Euler discretization in Wasserstein space: ρₖ₊₁ = argmin { W₂²(ρ,ρₖ)/(2τ) + F(ρ) }',
      'An explicit Euler scheme on probability densities',
      'A Runge-Kutta method adapted to measure spaces',
      'A Monte Carlo scheme for sampling from posterior distributions'
    ],
    correctIndex: 0,
    explanation: 'The JKO scheme replaces standard gradient descent with a proximal step in Wasserstein space, producing a sequence of densities that converge to the gradient flow of the energy F as τ → 0.',
    realWorld: 'JKO-inspired algorithms are used in computational optimal transport, particle methods for PDEs, and Wasserstein natural gradient descent in ML.',
    hint: 'It is a proximal point algorithm where distance is measured by W₂.'
  },
  {
    id: 21352,
    topic: 'luigi-ambrosio',
    difficulty: 'hard',
    question: 'Ambrosio\'s theory of BV functions and currents extends the notion of what classical concept to non-smooth settings?',
    options: [
      'Functions of bounded variation and their distributional derivatives (generalized surfaces/boundaries)',
      'Smooth differential forms on manifolds',
      'Holomorphic functions in several complex variables',
      'Sobolev embeddings in critical exponents'
    ],
    correctIndex: 0,
    explanation: 'Ambrosio developed the theory of BV functions, sets of finite perimeter, and currents in metric spaces, providing a rigorous foundation for geometric measure theory beyond smooth settings.',
    realWorld: 'BV theory is fundamental in image processing (total variation denoising), fracture mechanics, and shape optimization.',
    hint: 'This theory handles functions whose derivatives are measures, not functions.'
  },
];
