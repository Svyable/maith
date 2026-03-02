import type { Question } from '../types';

export const lorenzQuestions: Question[] = [
  {
    id: 20420,
    topic: 'edward-lorenz',
    difficulty: 'hard',
    question: 'The Lorenz system $\\dot{x}=\\sigma(y-x),\\; \\dot{y}=x(\\rho-z)-y,\\; \\dot{z}=xy-\\beta z$ exhibits chaos for $\\sigma=10, \\beta=8/3, \\rho=28$. What geometric object does the trajectory trace?',
    options: ['A strange attractor', 'A limit cycle', 'A fixed point', 'A torus'],
    correctIndex: 0,
    explanation: 'The Lorenz attractor is a fractal, non-repeating trajectory in 3D — the archetype of "strange attractors" in chaotic systems.',
    realWorld: 'Weather prediction models must account for Lorenz-like sensitivity; this is why forecasts beyond ~10 days are fundamentally unreliable.',
    hint: 'The trajectory never repeats and has fractal dimension ≈ 2.06.',
  },
  {
    id: 20421,
    topic: 'edward-lorenz',
    difficulty: 'hard',
    question: 'Lorenz discovered chaos by accident when he rounded a number from 0.506127 to 0.506. This illustrates which property of chaotic systems?',
    options: ['Sensitive dependence on initial conditions', 'Periodicity', 'Linearity', 'Conservation of energy'],
    correctIndex: 0,
    explanation: 'Tiny perturbations in initial conditions lead to exponentially diverging trajectories — the hallmark of deterministic chaos.',
    realWorld: 'This is why ensemble forecasting (running many slightly perturbed simulations) is used in modern weather prediction.',
    hint: 'A butterfly flapping its wings...',
  },
  {
    id: 20422,
    topic: 'edward-lorenz',
    difficulty: 'sota',
    question: 'The largest Lyapunov exponent $\\lambda_1$ of the Lorenz system at standard parameters is approximately:',
    options: ['$\\approx 0.9$', '$\\approx 0$', '$\\approx -2.7$', '$\\approx 28$'],
    correctIndex: 0,
    explanation: 'The positive Lyapunov exponent $\\lambda_1 \\approx 0.9$ quantifies the exponential rate of divergence of nearby trajectories.',
    realWorld: 'Positive Lyapunov exponents are used in finance to detect chaotic regimes in asset price dynamics for risk management.',
    hint: 'A positive value indicates chaos; the magnitude tells you how fast trajectories diverge.',
  },
  {
    id: 20423,
    topic: 'edward-lorenz',
    difficulty: 'sota',
    question: 'Tucker (2002) provided a computer-assisted proof that the Lorenz attractor exists as a robust strange attractor. What mathematical technique was central to his proof?',
    options: ['Rigorous interval arithmetic with validated numerics', 'Symbolic dynamics only', 'Perturbation theory', 'Monte Carlo simulation'],
    correctIndex: 0,
    explanation: 'Tucker used interval arithmetic to rigorously bound all numerical errors, proving the attractor exists — resolving Smale\'s 14th problem.',
    realWorld: 'Computer-assisted proofs are now used in materials science, fluid dynamics, and verifying safety-critical aerospace software.',
    hint: 'The proof needed to account for floating-point errors rigorously.',
  },
  {
    id: 20424,
    topic: 'edward-lorenz',
    difficulty: 'easy',
    question: 'Edward Lorenz was primarily a researcher in which field when he discovered chaos?',
    options: ['Meteorology', 'Pure mathematics', 'Quantum physics', 'Economics'],
    correctIndex: 0,
    explanation: 'Lorenz was a meteorologist running simplified weather models on an early computer when he stumbled upon chaotic behavior.',
    realWorld: 'His discovery fundamentally changed how we understand the limits of weather prediction.',
    hint: 'He was trying to predict the weather.',
  },
  {
    id: 67055,
    topic: 'edward-lorenz',
    difficulty: 'easy',
    question:
      'Edward Lorenz is a founder of chaos theory in weather modeling. What does “sensitive dependence on initial conditions” mean?',
    options: [
      'Tiny differences in starting values can grow exponentially, making long-term prediction difficult even for deterministic systems',
      'Random noise is the only source of unpredictability',
      'Deterministic systems always converge to fixed points',
      'If a system is nonlinear, it must be periodic'
    ],
    correctIndex: 0,
    explanation:
      'Chaos can arise in deterministic dynamics when nearby trajectories diverge rapidly.',
    realWorld:
      'Limits long-range weather forecasting and motivates ensemble prediction.',
    hint: 'Small causes → big effects over time.'
  },
  {
    id: 67056,
    topic: 'edward-lorenz',
    difficulty: 'hard',
    question:
      'The Lorenz system is a 3D nonlinear ODE model:\n$$\\dot x=\\sigma(y-x),\\quad \\dot y=x(\\rho-z)-y,\\quad \\dot z=xy-\\beta z.$$\nWhich parameter is traditionally interpreted as the “Rayleigh number” control ($\\rho$) driving convection strength?',
    options: [
      '$\\rho$',
      '$\\sigma$',
      '$\\beta$',
      '$c$ (the speed of light)'
    ],
    correctIndex: 0,
    explanation:
      'In Lorenz’s derivation from convection equations, $\\rho$ acts as the key forcing/control parameter.',
    realWorld:
      'Changing $\\rho$ moves the system from stable fixed points to chaotic attractors.',
    hint: 'It’s the one multiplying $(\\rho-z)$.'
  },
  {
    id: 67057,
    topic: 'edward-lorenz',
    difficulty: 'hard',
    question:
      'For the Lorenz system, the divergence of the vector field is constant:\n$$\\nabla\\cdot f = \\frac{\\partial \\dot x}{\\partial x}+\\frac{\\partial \\dot y}{\\partial y}+\\frac{\\partial \\dot z}{\\partial z}.$$\nWhat does its sign imply?',
    options: [
      'It is negative ($-(\\sigma+1+\\beta)$), implying phase-space volume contracts (dissipative dynamics → attractor)',
      'It is positive, implying solutions expand without bound',
      'It is zero, implying Hamiltonian (volume-preserving) flow',
      'It changes sign randomly over time'
    ],
    correctIndex: 0,
    explanation:
      'Compute: $\\partial\\dot x/\\partial x=-\\sigma$, $\\partial\\dot y/\\partial y=-1$, $\\partial\\dot z/\\partial z=-\\beta$, so divergence $=-(\\sigma+1+\\beta)<0$.',
    realWorld:
      'Explains why trajectories collapse onto a low-dimensional strange attractor rather than filling space.',
    hint: 'Sum the diagonal Jacobian terms.'
  },
  {
    id: 67058,
    topic: 'edward-lorenz',
    difficulty: 'sota',
    question:
      'A common quantitative measure of chaos is a positive largest Lyapunov exponent $\\lambda_1>0$. What does $\\lambda_1>0$ mean for two nearby trajectories separated by $\\delta_0$?',
    options: [
      '$\\|\\delta(t)\\|\\approx \\|\\delta_0\\|e^{\\lambda_1 t}$ for small $\\delta_0$, so separation grows exponentially on average',
      '$\\|\\delta(t)\\|\\approx \\|\\delta_0\\|/t$ so separation shrinks',
      '$\\|\\delta(t)\\|$ stays exactly constant for all $t$',
      '$\\|\\delta(t)\\|$ grows linearly with slope $\\lambda_1$'
    ],
    correctIndex: 0,
    explanation:
      'A positive Lyapunov exponent is the mathematical signature of sensitive dependence.',
    realWorld:
      'Used to estimate predictability horizons in weather/climate models and nonlinear systems.',
    hint: 'Positive exponent → exponential divergence.'
  },
  {
    id: 67059,
    topic: 'edward-lorenz',
    difficulty: 'sota',
    question:
      'The “butterfly effect” popularizes Lorenz’s insight. Which statement is the most accurate scientific interpretation?',
    options: [
      'Deterministic nonlinear systems can be practically unpredictable because measurement/rounding error grows rapidly, even without any random forcing',
      'Chaos means events have no causes',
      'Any small event will always cause a specific large event',
      'Weather is unpredictable only because computers are slow'
    ],
    correctIndex: 0,
    explanation:
      'Chaos is about amplification of uncertainty, not mystical causation. Deterministic equations can still defeat long-range prediction.',
    realWorld:
      'Motivates ensemble forecasts, data assimilation, and probabilistic prediction in meteorology.',
    hint: 'Deterministic, but unpredictability comes from error growth.'
  }
];
