import type { Question } from '../types';

export const pierreVerhulstQuestions: Question[] = [
  {
    id: 9504,
    topic: 'pierre-verhulst',
    difficulty: 'sota',
    question: 'The logistic equation $\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$ has the exact solution:',
    options: [
      '$N(t) = \\frac{K}{1 + \\left(\\frac{K-N_0}{N_0}\\right)e^{-rt}}$',
      '$N(t) = N_0 e^{rt}$',
      '$N(t) = K(1 - e^{-rt})$',
      '$N(t) = \\frac{K}{1 + e^{rt}}$',
    ],
    correctIndex: 0,
    explanation: 'The logistic equation is separable. Using partial fractions gives the sigmoid solution that starts exponential, inflects at $N = K/2$, and saturates at $K$.',
    realWorld: 'This S-curve appears everywhere: COVID-19 case modeling, market adoption of new technologies, bacterial growth in petri dishes, and social media user growth.',
    hint: 'Separate variables and use partial fraction decomposition on $\\frac{1}{N(K-N)}$.',
  },
  {
    id: 9505,
    topic: 'pierre-verhulst',
    difficulty: 'sota',
    question: 'The discrete logistic map $x_{n+1} = rx_n(1-x_n)$ undergoes its first period-doubling bifurcation at:',
    options: [
      '$r = 3$',
      '$r = 2$',
      '$r = 3.57$',
      '$r = 4$',
    ],
    correctIndex: 0,
    explanation: 'At $r = 3$, the fixed point $x^* = 1 - 1/r$ loses stability (derivative magnitude exceeds 1) and a stable 2-cycle is born via period-doubling bifurcation.',
    realWorld: 'The logistic map\'s bifurcation diagram became an icon of chaos theory, showing how simple deterministic rules produce unpredictable behavior — foundational for understanding turbulence and population crashes.',
    hint: 'Check when the derivative of the map at the fixed point equals $-1$.',
  },
  {
    id: 9506,
    topic: 'pierre-verhulst',
    difficulty: 'sota',
    question: 'Verhulst\'s carrying capacity $K$ in the logistic model represents:',
    options: [
      'The maximum sustainable population given resource constraints',
      'The initial growth rate of the population',
      'The extinction threshold below which populations die',
      'The migration rate between habitat patches',
    ],
    correctIndex: 0,
    explanation: '$K$ is the equilibrium population where birth and death rates balance. As $N \\to K$, the per-capita growth rate $r(1-N/K) \\to 0$, halting net growth.',
    realWorld: 'Fisheries management uses carrying capacity estimates to set sustainable harvest quotas — overfishing beyond $K/2$ collapses the maximum sustainable yield.',
    hint: 'What happens to $dN/dt$ as $N$ approaches this parameter value?',
  },
];
