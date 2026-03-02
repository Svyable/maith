import type { Question } from '../types';

export const pierreSimonLaplaceQuestions: Question[] = [
  {
    id: 20001, topic: 'pierre-simon-laplace', difficulty: 'easy',
    question: 'The Laplace transform $\\mathcal{L}\\{f(t)\\} = F(s)$ converts a function of time into a function of:',
    options: ['Complex frequency $s = \\sigma + j\\omega$', 'Spatial frequency $k$', 'Angular momentum $L$', 'Temperature $T$'],
    correctIndex: 0,
    explanation: 'The Laplace transform $F(s) = \\int_0^\\infty f(t)e^{-st}dt$ maps time-domain signals to the complex frequency domain, enabling algebraic solution of differential equations.',
    realWorld: 'Control engineers use Laplace transforms to analyze stability of feedback systems — transfer functions H(s) encode entire system dynamics as rational polynomials.',
    hint: 'It generalizes the Fourier transform by allowing complex exponents instead of purely imaginary ones.',
  },
  {
    id: 20002, topic: 'pierre-simon-laplace', difficulty: 'hard',
    question: 'Laplace\'s equation $\\nabla^2 \\phi = 0$ describes:',
    options: ['Steady-state potential fields with no sources (harmonic functions)', 'Wave propagation in elastic media', 'Heat flow with time-dependent sources', 'Quantum tunneling through barriers'],
    correctIndex: 0,
    explanation: 'Solutions to Laplace\'s equation are harmonic functions — they satisfy the mean value property and have no local maxima or minima in the interior. This is the basis of potential theory.',
    realWorld: 'Electrostatic field simulations, gravitational potential calculations, and steady-state heat conduction all solve Laplace\'s equation via finite element methods.',
    hint: 'No sources, no sinks, no time dependence — the potential is determined entirely by boundary conditions.',
  },
  {
    id: 20003, topic: 'pierre-simon-laplace', difficulty: 'sota',
    question: 'Laplace\'s demon — "an intellect that knew all forces and positions" — is fundamentally refuted by:',
    options: ['Quantum indeterminacy (Heisenberg) and chaos theory (sensitive dependence on initial conditions)', 'Gödel\'s incompleteness theorem alone', 'The halting problem in computation', 'Conservation of energy constraints'],
    correctIndex: 0,
    explanation: 'Quantum mechanics introduces irreducible randomness (Born rule), while classical chaos means exponential divergence of nearby trajectories makes long-term prediction impossible even with perfect equations. Together they demolish Laplacian determinism.',
    realWorld: 'Weather prediction is fundamentally limited to ~10 days (Lorenz) despite supercomputers, and quantum random number generators power modern cryptography precisely because outcomes are unpredictable.',
    hint: 'Two separate barriers: one from quantum measurement, one from nonlinear dynamics.',
  },
];
