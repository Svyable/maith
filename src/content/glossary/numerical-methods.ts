import type { GlossaryTerm } from '../types';

export const numericalMethodsTerms: GlossaryTerm[] = [
  {
    id: 'newton-raphson-gloss', field: 'math', topic: 'numerical-methods',
    term: 'Newton–Raphson Method',
    definition: 'An iterative root-finding algorithm: $x_{n+1} = x_n - f(x_n)/f\'(x_n)$. Converges quadratically near simple roots.',
    formula: '$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$',
    latex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}',
    thinkerLinks: ['newton'],
    formulaLinks: ['newton-raphson'],
    related: ['condition-number'],
    difficulty: 'intro',
  },
  {
    id: 'condition-number', field: 'math', topic: 'numerical-methods',
    term: 'Condition Number',
    definition: 'Measures how sensitive a problem is to perturbations in input: $\\kappa(A) = \\|A\\|\\|A^{-1}\\|$. Large $\\kappa$ means the problem is ill-conditioned.',
    formula: '$\\kappa(A) = \\|A\\|\\cdot\\|A^{-1}\\|$',
    latex: '\\kappa(A) = \\|A\\|\\cdot\\|A^{-1}\\|',
    symbolLinks: { 'κ': 'kappa' },
    related: ['newton-raphson-gloss'],
    difficulty: 'intermediate',
  },
  {
    id: 'finite-element', field: 'math', topic: 'numerical-methods',
    term: 'Finite Element Method',
    definition: 'Solves PDEs by discretizing the domain into elements and approximating the solution as a linear combination of basis functions on each element.',
    example: 'Used to simulate stress in bridges, heat transfer, and electromagnetic fields.',
    related: ['condition-number'],
    difficulty: 'intermediate',
  },
];
