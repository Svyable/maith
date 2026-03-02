import type { Question } from '../types';

export const alfredLotkaQuestions: Question[] = [
  {
    id: 9501,
    topic: 'alfred-lotka',
    difficulty: 'sota',
    question: 'In the Lotka-Volterra predator-prey model $\\frac{dx}{dt} = \\alpha x - \\beta xy$, $\\frac{dy}{dt} = \\delta xy - \\gamma y$, what is the conserved quantity (first integral)?',
    options: [
      '$\\delta x - \\gamma \\ln x + \\beta y - \\alpha \\ln y = C$',
      '$x + y = C$',
      '$xy = C$',
      '$\\alpha x + \\gamma y = C$',
    ],
    correctIndex: 0,
    explanation: 'The Lotka-Volterra system has a conserved quantity $V(x,y) = \\delta x - \\gamma \\ln x + \\beta y - \\alpha \\ln y$, making orbits closed curves in phase space — the populations oscillate perpetually.',
    realWorld: 'This explains the classic lynx-hare boom-bust cycles observed in Canadian fur trapper data from Hudson\'s Bay Company records spanning over a century.',
    hint: 'Think about what function remains constant along solution trajectories — it involves both linear and logarithmic terms.',
  },
  {
    id: 9502,
    topic: 'alfred-lotka',
    difficulty: 'sota',
    question: 'The Lotka-Volterra equilibrium $(x^*, y^*) = (\\gamma/\\delta, \\alpha/\\beta)$ is classified as what type of fixed point?',
    options: [
      'A center (neutrally stable)',
      'A stable spiral',
      'An unstable node',
      'A saddle point',
    ],
    correctIndex: 0,
    explanation: 'The linearization at the coexistence equilibrium yields purely imaginary eigenvalues $\\pm i\\sqrt{\\alpha\\gamma}$, making it a center. Orbits are closed curves, not spiraling inward or outward.',
    realWorld: 'This neutral stability means populations oscillate indefinitely without damping — any perturbation shifts the system to a different periodic orbit rather than returning to equilibrium.',
    hint: 'Compute the Jacobian eigenvalues at the interior fixed point — what does a zero real part imply?',
  },
  {
    id: 9503,
    topic: 'alfred-lotka',
    difficulty: 'sota',
    question: 'Lotka\'s principle of maximum energy flux states that in autocatalytic chemical reactions, the system evolves to:',
    options: [
      'Maximize the rate of energy throughput',
      'Minimize total entropy production',
      'Reach thermodynamic equilibrium fastest',
      'Conserve total chemical potential',
    ],
    correctIndex: 0,
    explanation: 'Lotka proposed that natural selection favors organisms and ecosystems that maximize the total energy flux through the system, a precursor to modern non-equilibrium thermodynamics.',
    realWorld: 'This principle influences modern ecosystem ecology, explaining why mature forests process more energy than grasslands and why biodiversity often correlates with energy availability.',
    hint: 'Lotka viewed evolution through the lens of physical chemistry and energy flow, not just fitness.',
  },
];
