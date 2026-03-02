import type { Question } from '../types';

export const cauchyQuestions: Question[] = [
  {
    id: 20301, topic: 'augustin-louis-cauchy', difficulty: 'easy',
    question: 'A Cauchy sequence is one where:',
    options: ['Terms get arbitrarily close to each other: $\\forall \\varepsilon > 0, \\exists N: |a_m - a_n| < \\varepsilon$ for $m,n > N$', 'Each term is less than the next', 'The sequence is bounded above', 'The sequence converges to zero'],
    correctIndex: 0,
    explanation: 'Cauchy sequences capture convergence without knowing the limit. In complete spaces (like ℝ), every Cauchy sequence converges. This is the foundation of real analysis.',
    realWorld: 'Numerical algorithms check Cauchy-like convergence criteria: "stop when successive iterates differ by less than ε" — this IS the Cauchy condition applied to computation.',
    hint: 'The terms bunch together — not necessarily toward zero, but toward each other.',
  },
  {
    id: 20302, topic: 'augustin-louis-cauchy', difficulty: 'hard',
    question: 'Cauchy\'s integral formula states that for an analytic function $f$ inside a contour $C$:',
    options: ['$f(a) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}\\,dz$', '$f(a) = \\oint_C f(z)\\,dz$', '$f\'(a) = \\lim_{h\\to 0} \\frac{f(a+h)-f(a)}{h}$', '$\\oint_C f(z)\\,dz = \\pi i \\cdot \\text{Res}(f,a)$'],
    correctIndex: 0,
    explanation: 'Cauchy\'s integral formula recovers the value of an analytic function at any interior point from its boundary values. It implies analytic functions are infinitely differentiable and determined by boundary data.',
    realWorld: 'Cauchy\'s formula underpins numerical conformal mapping used in aerodynamic design — airfoil shapes are optimized using complex analysis.',
    hint: 'An analytic function\'s value at a point is the "average" of its values on any surrounding contour, weighted by 1/(z-a).',
  },
  {
    id: 20303, topic: 'augustin-louis-cauchy', difficulty: 'sota',
    question: 'The Cauchy-Schwarz inequality $|\\langle u,v \\rangle| \\leq \\|u\\| \\cdot \\|v\\|$ is fundamental because:',
    options: ['It proves the triangle inequality in inner product spaces and underpins all of functional analysis', 'It only applies to finite-dimensional spaces', 'It is a special case of Hölder\'s inequality for p=1', 'It requires the space to be complete'],
    correctIndex: 0,
    explanation: 'Cauchy-Schwarz is the single most important inequality in mathematics. It proves $\\|u+v\\| \\leq \\|u\\| + \\|v\\|$, validates the notion of angle in abstract spaces, and is used in virtually every branch of analysis.',
    realWorld: 'In ML, cosine similarity = ⟨u,v⟩/(‖u‖·‖v‖) ∈ [-1,1] is well-defined precisely because of Cauchy-Schwarz. Every embedding similarity search relies on it.',
    hint: 'The angle between two vectors is well-defined only because the cosine is bounded by 1 — and that IS Cauchy-Schwarz.',
  },
];
