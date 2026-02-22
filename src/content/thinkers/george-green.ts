import type { Question } from '../types';

export const georgeGreenQuestions: Question[] = [
  {
    id: 96201, topic: 'george-green', difficulty: 'easy',
    question: 'George Green\'s most lasting contribution to mathematics and physics is:',
    options: ['Green\'s theorem, relating a line integral around a closed curve to a double integral over the enclosed region', 'The discovery of chlorophyll in plants', 'The first proof that π is irrational', 'The wave equation for sound propagation'],
    correctIndex: 0,
    explanation: 'Green\'s theorem states $\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$, connecting circulation around a boundary to the curl inside. It\'s a special case of Stokes\' theorem.',
    realWorld: 'Green\'s theorem is used daily in physics, engineering, and computer graphics — from computing fluid flow to calculating areas via boundary integrals.',
    hint: 'It connects what happens on the boundary to what happens inside.',
  },
  {
    id: 96202, topic: 'george-green', difficulty: 'hard',
    question: 'Green\'s functions, introduced in Green\'s 1828 essay, are fundamental because they:',
    options: ['Give the response of a linear system to a point source, allowing any solution to be built by superposition', 'Solve nonlinear differential equations exactly', 'Eliminate the need for boundary conditions', 'Only apply to electrostatics problems'],
    correctIndex: 0,
    explanation: 'A Green\'s function G(x, x₀) solves LG = δ(x − x₀) for a linear operator L. The solution to Lu = f is then u(x) = ∫G(x, x₀)f(x₀)dx₀ — superposition of point-source responses. This technique pervades all of mathematical physics.',
    realWorld: 'Green\'s functions are used in quantum field theory (propagators), acoustics, electromagnetics, heat conduction, and signal processing.',
    hint: 'Solve for the response to a single impulse, then add up impulses.',
  },
  {
    id: 96203, topic: 'george-green', difficulty: 'sota',
    question: 'Green\'s 1828 essay introduced the concept of a "potential function" for gravity and electricity. This was revolutionary because:',
    options: ['It reduced vector force field problems to scalar potential problems, enabling systematic solutions via Poisson\'s equation ∇²φ = −ρ/ε₀', 'It proved that gravity and electricity are the same force', 'It showed that potential energy is always conserved in dissipative systems', 'It unified thermodynamics with electromagnetism'],
    correctIndex: 0,
    explanation: 'Green showed that if F = −∇φ, then the entire vector field is determined by a single scalar function φ satisfying ∇²φ = −ρ/ε₀. This converts a 3-component vector problem into a single scalar PDE — an enormous simplification that became the foundation of potential theory.',
    realWorld: 'Every electrostatics or gravitational calculation you\'ve ever seen uses Green\'s potential theory. It\'s the backbone of computational electromagnetics and gravitational modeling.',
    hint: 'Replace a vector field with a single scalar function whose Laplacian gives the source.',
  },
];
