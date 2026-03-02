import type { Question } from '../types';

export const kardarQuestions: Question[] = [
  {
    id: 9522,
    topic: 'mehran-kardar',
    difficulty: 'sota',
    question: 'The KPZ equation $\\frac{\\partial h}{\\partial t} = \\nu\\nabla^2 h + \\frac{\\lambda}{2}(\\nabla h)^2 + \\eta$ describes interface growth. The nonlinear term $(\\nabla h)^2$ arises from:',
    options: [
      'Growth occurring normal to the local surface, not vertically',
      'Surface tension effects',
      'External driving force',
      'Thermal equilibrium fluctuations',
    ],
    correctIndex: 0,
    explanation: 'When material deposits perpendicular to the local surface (not vertically), the height change has a geometric factor $\\sqrt{1 + (\\nabla h)^2} \\approx 1 + (\\nabla h)^2/2$, giving the $\\lambda$ term.',
    realWorld: 'KPZ universality appears in crystal growth, bacterial colony expansion, coffee ring formation, paper wetting, and even traffic flow models.',
    hint: 'Consider the geometric difference between depositing material vertically vs. perpendicular to a tilted surface.',
  },
  {
    id: 9523,
    topic: 'mehran-kardar',
    difficulty: 'sota',
    question: 'The KPZ universality class in 1+1 dimensions predicts the roughness exponent $\\alpha$ and growth exponent $\\beta$ to be:',
    options: [
      '$\\alpha = 1/2$, $\\beta = 1/3$',
      '$\\alpha = 1$, $\\beta = 1/2$',
      '$\\alpha = 2/3$, $\\beta = 1/3$',
      '$\\alpha = 1/3$, $\\beta = 1/4$',
    ],
    correctIndex: 0,
    explanation: 'In 1+1 dimensions, exact results (via the Cole-Hopf transformation and replica method) give $\\alpha = 1/2$, $\\beta = 1/3$, and dynamic exponent $z = \\alpha/\\beta = 3/2$.',
    realWorld: 'These exponents have been verified in liquid crystal turbulence experiments and slow combustion of paper, confirming KPZ universality is a real physical phenomenon, not just mathematics.',
    hint: 'The dynamic exponent $z = 3/2$ in 1+1D is one of the most celebrated exact results in non-equilibrium statistical physics.',
  },
  {
    id: 9524,
    topic: 'mehran-kardar',
    difficulty: 'sota',
    question: 'The Cole-Hopf transformation $h = \\frac{2\\nu}{\\lambda}\\ln Z$ maps the KPZ equation to:',
    options: [
      'A linear diffusion equation with multiplicative noise',
      'The Burgers equation without noise',
      'The Schrödinger equation',
      'The wave equation with damping',
    ],
    correctIndex: 0,
    explanation: 'Setting $Z = e^{\\lambda h/2\\nu}$ transforms KPZ into $\\partial_t Z = \\nu\\nabla^2 Z + \\eta Z$, a linear stochastic heat equation with multiplicative noise — technically tractable via Feynman-Kac.',
    realWorld: 'This transformation connects interface growth to directed polymers in random media and to the Tracy-Widom distribution from random matrix theory — a stunning cross-disciplinary link.',
    hint: 'An exponential substitution can linearize the nonlinear PDE — what equation does $Z = e^{\\lambda h/2\\nu}$ satisfy?',
  },
];
