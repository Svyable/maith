import type { Question } from '../types';

export const shingTungYauQuestions: Question[] = [
  {
    id: 31610, topic: 'shing-tung-yau', difficulty: 'easy',
    question: 'Shing-Tung Yau won the 1982 Fields Medal for his work on differential geometry. What was his most famous theorem?',
    options: [
      'The proof of the Calabi Conjecture — showing that Kähler manifolds with vanishing first Chern class admit Ricci-flat metrics (now called Calabi-Yau manifolds). These became the compactification spaces of string theory.',
      'The proof of the Geometrization Conjecture — showing every 3-manifold decomposes into pieces with standard geometries.',
      'The proof of the Positive Mass Conjecture — showing that isolated gravitational systems in General Relativity always have non-negative total mass-energy.',
      'The proof of Fermat\'s Last Theorem — using modular forms and elliptic curves to show $x^n + y^n = z^n$ has no integer solutions for $n > 2$.'
    ],
    correctIndex: 0,
    explanation: 'Calabi conjectured (1954) that Kähler manifolds with $c_1 = 0$ admit a unique Ricci-flat Kähler metric. Yau proved this in 1978 by solving a complex Monge-Ampère equation — one of the hardest PDE existence results ever. The resulting "Calabi-Yau manifolds" became central to string theory as the hidden dimensions of spacetime.',
    realWorld: 'String theory requires 6 extra spatial dimensions compactified on a Calabi-Yau manifold. The topology of the chosen Calabi-Yau determines the physics we observe — including particle masses and coupling constants.',
    hint: 'He proved a conjecture about special curved spaces that became the hidden dimensions of string theory.',
  },
  {
    id: 31611, topic: 'shing-tung-yau', difficulty: 'hard',
    question: 'Yau (with Schoen) proved the Positive Mass Theorem in General Relativity. What does this theorem state?',
    options: [
      'For any asymptotically flat initial data set $(M, g, k)$ satisfying the dominant energy condition, the ADM mass $m_{\\text{ADM}} = \\lim_{r \\to \\infty} \\frac{1}{16\\pi} \\oint_{S_r} (\\partial_j g_{ij} - \\partial_i g_{jj}) dS^i \\geq 0$, with equality only for flat Minkowski space.',
      'The total mass inside a black hole\'s event horizon equals $M = \\sqrt{J^2/c^2 + Q^2 G/c^4 + (Ac^4/16\\pi G)^2}$, always positive by construction.',
      'The gravitational binding energy of any star satisfies $E_{\\text{bind}} > 0$, proving that gravitational collapse always releases energy.',
      'The mass of a Kerr black hole satisfies $M \\geq |J|/c$, the cosmic censorship bound ensuring no naked singularities form.'
    ],
    correctIndex: 0,
    explanation: 'Schoen and Yau proved (1979) that the total mass-energy of an isolated gravitational system is always non-negative if matter satisfies the dominant energy condition ($T_{\\mu\\nu} V^\\mu V^\\nu \\geq 0$ for timelike $V$). This prevents "negative mass" configurations and ensures gravitational stability. The proof used minimal surface techniques — a tour de force of geometric analysis.',
    realWorld: 'The Positive Mass Theorem is essential for the physical consistency of General Relativity. Witten later gave an alternative proof using spinors, connecting it to supergravity.',
    hint: 'Total gravitational mass-energy is never negative — you can\'t create an anti-gravity device from normal matter.',
  },
  {
    id: 31612, topic: 'shing-tung-yau', difficulty: 'sota',
    question: 'The Calabi-Yau condition requires solving the complex Monge-Ampère equation. What is this PDE?',
    options: [
      '$(\\omega + i\\partial\\bar{\\partial}\\varphi)^n = e^f \\omega^n$ on a compact Kähler manifold $(M, \\omega)$ — find a smooth function $\\varphi$ such that the modified Kähler form has prescribed volume form. Yau proved existence and uniqueness using continuity method and a priori $C^0$, $C^2$, $C^3$ estimates.',
      '$\\det(\\nabla^2 u) = f(x)$ on a bounded domain in $\\mathbb{R}^n$ — the real Monge-Ampère equation for convex functions.',
      '$\\Delta \\varphi + e^{2\\varphi} = K$ on a Riemann surface — the Liouville equation for prescribed Gaussian curvature.',
      '$R_{ij} - \\frac{1}{2}Rg_{ij} = 8\\pi G T_{ij}$ — Einstein\'s field equations in the vacuum case $T_{ij} = 0$.'
    ],
    correctIndex: 0,
    explanation: 'Yau solved the complex Monge-Ampère equation on compact Kähler manifolds — a fully nonlinear elliptic PDE. The key difficulty is establishing a priori estimates: Yau\'s $C^0$ estimate used Moser iteration, the $C^2$ estimate used Chern-Lu\'s inequality and the maximum principle, and the $C^3$ estimate used Calabi\'s third-order computation. This remains one of the most technically demanding PDE proofs in mathematics.',
    realWorld: 'The complex Monge-Ampère equation appears in optimal transport (Brenier\'s theorem), pluripotential theory, and mirror symmetry. Yau\'s techniques spawned the field of complex geometric analysis.',
    hint: 'A determinant equation for a Kähler potential — fully nonlinear, requiring heroic a priori estimates to prove solvability.',
  },
];
