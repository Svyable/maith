// ramsey.ts
import type { Question } from '../types';

export const ramseyQuestions: Question[] = [
  {
    id: 67000,
    topic: 'frank-ramsey',
    difficulty: 'easy',
    question:
      'In the Ramsey (1928) optimal growth model, a social planner chooses consumption $c(t)$ to maximize discounted utility\n$$\\max \\int_0^{\\infty} e^{-\\rho t} u(c(t)) dt$$\nsubject to capital accumulation. What is the canonical capital law of motion?',
    options: [
      '$\\dot k(t) = f(k(t)) - c(t) - \\delta k(t)$',
      '$\\dot k(t) = c(t) - f(k(t))$',
      '$\\dot k(t) = \\rho k(t)$',
      '$\\dot k(t) = 0$ always in steady state'
    ],
    correctIndex: 0,
    explanation:
      'Output $f(k)$ is split between consumption and investment; capital depreciates at rate $\\delta$.',
    realWorld:
      'Foundation of modern macro growth theory and DSGE models.',
    hint:
      'Investment = output − consumption − depreciation.'
  },
  {
    id: 67001,
    topic: 'frank-ramsey',
    difficulty: 'hard',
    question:
      'The Ramsey Euler equation (CRRA utility $u(c)=\\frac{c^{1-\\theta}-1}{1-\\theta}$) implies:',
    options: [
      '$\\frac{\\dot c}{c} = \\frac{1}{\\theta}(r - \\rho)$',
      '$\\frac{\\dot c}{c} = r + \\rho$',
      '$\\dot c = f\'(k)$',
      '$c = f(k)$'
    ],
    correctIndex: 0,
    explanation:
      'Consumption growth depends on the interest rate $r=f\'(k)-\\delta$ relative to time preference $\\rho$.',
    realWorld:
      'Explains why higher returns induce faster consumption growth.',
    hint:
      'Growth proportional to $r-\\rho$.'
  },
  {
    id: 67002,
    topic: 'frank-ramsey',
    difficulty: 'sota',
    question:
      'Ramsey taxation minimizes excess burden by choosing taxes $\\tau$ to minimize:',
    options: [
      'Deadweight loss subject to revenue constraint',
      'Inflation only',
      'Public spending',
      'Balanced trade'
    ],
    correctIndex: 0,
    explanation:
      'Ramsey rule: tax inelastic goods more heavily to minimize distortions.',
    realWorld:
      'Optimal commodity taxation theory.',
    hint:
      'Inverse elasticity rule.'
  },
  {
    id: 67003,
    topic: 'frank-ramsey',
    difficulty: 'hard',
    question:
      'The transversality condition in the Ramsey model requires:',
    options: [
      '$\\lim_{t\\to\\infty} e^{-\\rho t} \\lambda(t) k(t) = 0$',
      '$k(t) \\to \\infty$',
      '$c(t)=0$ eventually',
      '$\\rho=0$'
    ],
    correctIndex: 0,
    explanation:
      'Prevents explosive capital accumulation inconsistent with optimality.',
    realWorld:
      'Ensures no Ponzi schemes in macro models.',
    hint:
      'Discounted shadow value times capital vanishes.'
  },
  {
    id: 67004,
    topic: 'frank-ramsey',
    difficulty: 'sota',
    question:
      'Ramsey–Cass–Koopmans steady state condition implies:',
    options: [
      '$f\'(k^*) = \\rho + \\delta$',
      '$c^* = 0$',
      '$k^*=0$',
      '$\\rho=0$'
    ],
    correctIndex: 0,
    explanation:
      'At steady state, $\\dot c=0$, so $r=\\rho$.',
    realWorld:
      'Determines long-run capital intensity.',
    hint:
      'Marginal product equals time preference + depreciation.'
  }
];