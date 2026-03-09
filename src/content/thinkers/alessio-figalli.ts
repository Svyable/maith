import type { Question } from '../types';

export const alessioFigalliQuestions: Question[] = [
  {
    id: 31650, topic: 'alessio-figalli', difficulty: 'easy',
    question: 'Alessio Figalli won the 2018 Fields Medal for his work in which area of analysis?',
    options: [
      'Optimal transport and regularity theory — proving that the Monge-Ampère equation $\\det(D^2 u) = f$ has smooth solutions under natural conditions, and establishing regularity of optimal transport maps $T = \\nabla u$ between probability measures.',
      'Harmonic analysis — proving the restriction conjecture for the Fourier transform on curved surfaces in $\\mathbb{R}^n$.',
      'Geometric measure theory — proving the Plateau problem for area-minimizing currents in all codimensions.',
      'Spectral theory — establishing Weyl\'s law for eigenvalue asymptotics on fractal domains.'
    ],
    correctIndex: 0,
    explanation: 'Figalli\'s work centers on the Monge problem: given probability measures $\\mu$ and $\\nu$, find a map $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ pushing $\\mu$ to $\\nu$ that minimizes the total cost $\\int c(x, T(x))\\,d\\mu(x)$. For quadratic cost $c = |x-y|^2$, the optimal map is $T = \\nabla u$ where $u$ is convex and solves the Monge-Ampère equation.',
    realWorld: 'Optimal transport has applications in machine learning (Wasserstein GANs), economics (matching markets), meteorology (semi-geostrophic equations), and image processing.',
    hint: 'What\'s the cheapest way to move one pile of sand into another shape? He proved the solution is smooth.',
    formulaLinks: ['monge-ampere', 'optimal-transport'],
  },
  {
    id: 31651, topic: 'alessio-figalli', difficulty: 'hard',
    question: 'Figalli (with De Philippis) proved a fundamental regularity result for the Monge-Ampère equation. What is the key theorem?',
    options: [
      'If $u$ is a convex Alexandrov solution of $\\det(D^2 u) = f$ with $0 < \\lambda \\leq f \\leq \\Lambda$, then the second derivatives $D^2 u$ are Sobolev regular: $D^2 u \\in W^{2,1+\\epsilon}_{\\text{loc}}$ for some $\\epsilon > 0$ depending only on $n$, $\\lambda$, $\\Lambda$. This implies the optimal transport map $T = \\nabla u$ has $BV$ regularity.',
      'The solution $u$ is real-analytic whenever $f$ is continuous and bounded away from zero.',
      'The singular set $\\{x : D^2 u \\text{ does not exist}\\}$ has Hausdorff dimension $\\leq n - 2$ for all convex solutions.',
      'The Monge-Ampère equation admits a unique viscosity solution $u \\in C^{1,1}$ whenever $f \\in L^\\infty$.'
    ],
    correctIndex: 0,
    explanation: 'The classical Caffarelli theory gives $C^{1,\\alpha}$ regularity for Alexandrov solutions when $f$ is bounded between positive constants. Figalli-De Philippis improved this to $W^{2,1+\\epsilon}$ — controlling the integrability of second derivatives. This is sharp: without strict positivity of $f$, solutions can develop singularities.',
    realWorld: 'This regularity result ensures that optimal transport maps are "almost everywhere differentiable" in a strong sense, validating the use of OT in numerical algorithms and PDE theory.',
    hint: 'Second derivatives exist in a Sobolev sense — not pointwise everywhere, but with controlled integrability.',
    formulaLinks: ['monge-ampere', 'sobolev-spaces'],
  },
  {
    id: 31652, topic: 'alessio-figalli', difficulty: 'sota',
    question: 'Figalli proved quantitative stability results for classical geometric inequalities. What is the quantitative isoperimetric inequality?',
    options: [
      'For any set $E \\subset \\mathbb{R}^n$ with $|E| = |B_1|$, the isoperimetric deficit controls the Fraenkel asymmetry: $$\\delta(E) := \\frac{P(E) - P(B_1)}{P(B_1)} \\geq C_n \\, \\alpha(E)^2$$ where $\\alpha(E) = \\min_x \\frac{|E \\Delta (x + B_1)|}{|B_1|}$ measures how far $E$ is from a ball. The exponent 2 is sharp.',
      'The isoperimetric ratio $P(E)^n / |E|^{n-1}$ is minimized uniquely by balls, with second variation $\\delta^2 \\geq \\lambda_2(S^{n-1})$.',
      'Any convex body $K$ with $P(K) = P(B_1)$ satisfies $|K| \\leq |B_1|(1 - c \\cdot d_H(K, B_1)^4)$.',
      'The deficit $\\delta(E)$ satisfies a log-Sobolev inequality: $\\delta(E) \\geq \\int_E |\\nabla \\log \\rho| \\, dx$ where $\\rho$ is the density.'
    ],
    correctIndex: 0,
    explanation: 'Figalli (with Maggi and Pratelli) proved the sharp quantitative isoperimetric inequality with exponent 2. The proof combines the Brenier optimal transport map $T = \\nabla u$ with a careful analysis of the deficit: $\\delta(E) = \\int |\\nabla u - \\text{Id}|^2$, and then showing this controls the asymmetry $\\alpha(E)$ via a trace inequality on the transport map.',
    realWorld: 'Quantitative stability results are crucial in physics (crystal shapes, bubble dynamics) and PDE theory (understanding near-minimizers of variational problems).',
    hint: 'If your shape is almost as efficient as a sphere, it must be almost spherical — and he proved exactly how close.',
    formulaLinks: ['isoperimetric-inequality', 'optimal-transport'],
  },
];
