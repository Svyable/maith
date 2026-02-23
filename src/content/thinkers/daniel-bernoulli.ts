import type { Question } from '../types';

export const danielBernoulliQuestions: Question[] = [
  {
    id: 97101, topic: 'daniel-bernoulli', difficulty: 'easy',
    question: 'Bernoulli\'s equation $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$ along a streamline expresses:',
    options: ['Conservation of energy for an ideal fluid — pressure, kinetic, and potential energy trade off', 'Conservation of mass only', 'Newton\'s second law for fluids', 'The viscosity of the fluid'],
    correctIndex: 0,
    explanation: 'Bernoulli\'s equation is energy conservation per unit volume along a streamline. As fluid speed increases, pressure decreases (and vice versa). It assumes incompressible, inviscid, steady flow.',
    realWorld: 'Bernoulli\'s principle explains airplane lift, Venturi flow meters, carburetors, and why shower curtains blow inward.',
    hint: 'Faster flow = lower pressure. Think of squeezing a garden hose — the water speeds up and pressure drops.',
  },
  {
    id: 97102, topic: 'daniel-bernoulli', difficulty: 'hard',
    question: 'Daniel Bernoulli\'s "Hydrodynamica" (1738) introduced the concept of:',
    options: ['Kinetic theory of gases — pressure results from molecular bombardment of container walls', 'Electromagnetic waves in fluids', 'Quantum fluid dynamics', 'Turbulent boundary layers'],
    correctIndex: 0,
    explanation: 'Bernoulli proposed that gas pressure arises from countless molecular impacts on surfaces — the first kinetic theory of gases, over a century before Maxwell and Boltzmann formalized it.',
    realWorld: 'This insight eventually led to statistical mechanics, the ideal gas law derivation from first principles, and our molecular understanding of temperature.',
    hint: 'He imagined gas as tiny particles bouncing off walls — revolutionary for the 1730s.',
  },
  {
    id: 97103, topic: 'daniel-bernoulli', difficulty: 'sota',
    question: 'The Bernoulli equation breaks down for real flows due to viscosity. The correction leads to the Navier-Stokes equations, which add:',
    options: ['Viscous stress terms $\\mu \\nabla^2 \\mathbf{v}$ to account for internal friction between fluid layers', 'Magnetic field coupling', 'Quantum pressure terms', 'Gravitational wave effects'],
    correctIndex: 0,
    explanation: 'Bernoulli assumes inviscid flow. Real fluids have viscosity, requiring the Navier-Stokes momentum equation: $\\rho(\\partial_t \\mathbf{v} + \\mathbf{v} \\cdot \\nabla \\mathbf{v}) = -\\nabla P + \\mu \\nabla^2 \\mathbf{v} + \\rho \\mathbf{g}$. The viscous term $\\mu \\nabla^2 \\mathbf{v}$ is what makes these equations so hard to solve.',
    realWorld: 'Proving existence and smoothness of 3D Navier-Stokes solutions is a $1M Millennium Prize Problem. Yet CFD solves them numerically every day for aircraft, weather, and blood flow.',
    hint: 'Bernoulli = ideal. Navier-Stokes = real. The difference is friction between fluid layers.',
  },
];
