import type { Question } from '../types';

export const leibnizQuestions: Question[] = [
  {
    id: 10101,
    topic: 'gottfried-wilhelm-leibniz',
    difficulty: 'easy',
    question: 'Leibniz\'s notation for derivatives uses:',
    options: [
      '$\\frac{dy}{dx}$ treating derivatives as ratios of infinitesimals',
      '$f\'(x)$ using prime notation',
      '$\\dot{y}$ using dot notation for time derivatives',
      '$D_x[f]$ using operator notation',
    ],
    correctIndex: 0,
    explanation: 'Leibniz introduced the $\\frac{dy}{dx}$ notation and the integral sign $\\int$, which remain the standard in calculus today. His notation makes the chain rule intuitive: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$.',
    realWorld: 'Every calculus textbook worldwide uses Leibniz notation. It makes substitution and chain rule calculations visually intuitive.',
    hint: 'Think of the notation that treats a derivative almost like a fraction.',
  },
  {
    id: 10102,
    topic: 'gottfried-wilhelm-leibniz',
    difficulty: 'hard',
    question: 'The Leibniz rule for differentiating under the integral sign states:',
    options: [
      '$\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(x,t)\\,dt = f(x,b)b\' - f(x,a)a\' + \\int_a^b \\frac{\\partial f}{\\partial x}dt$',
      '$\\frac{d}{dx}\\int_a^b f(t)\\,dt = f(b) - f(a)$',
      '$\\int \\frac{d}{dx}f(x,t)\\,dt = f(x,t) + C$',
      '$\\frac{d}{dx}\\int f\\,dt = \\int f\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'The Leibniz integral rule generalizes the fundamental theorem of calculus to parameter-dependent integrals with variable limits, combining boundary terms and a partial derivative integral.',
    realWorld: 'Feynman famously used this technique to solve integrals that stumped other physicists — he called it "differentiating under the integral sign."',
    hint: 'You need three terms: two boundary contributions and one from differentiating the integrand.',
  },
  {
    id: 10103,
    topic: 'gottfried-wilhelm-leibniz',
    difficulty: 'sota',
    question: 'Leibniz\'s vision of a "calculus ratiocinator" anticipated:',
    options: [
      'Formal logic and mechanical computation — a universal symbolic reasoning system',
      'Differential equations for modeling physical systems',
      'The binary number system used in modern computers',
      'Statistical inference and probability theory',
    ],
    correctIndex: 0,
    explanation: 'Leibniz envisioned a universal formal language (characteristica universalis) and a machine to manipulate it (calculus ratiocinator) — predating formal logic, Turing machines, and automated theorem proving by centuries.',
    realWorld: 'Modern proof assistants like Lean and Coq realize Leibniz\'s dream of mechanical verification of mathematical reasoning.',
    hint: 'He wanted to reduce all reasoning to calculation — "let us calculate!"',
  },
];
