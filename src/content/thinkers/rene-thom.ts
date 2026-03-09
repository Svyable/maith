import type { Question } from '../types';

export const reneThomQuestions: Question[] = [
  {
    id: 31770, topic: 'rene-thom', difficulty: 'easy',
    question: 'René Thom won the 1958 Fields Medal for his work in topology. He later became famous for founding which mathematical theory of sudden changes?',
    options: [
      'Catastrophe theory — classifying the ways smooth systems can undergo sudden qualitative changes. He proved that generically, there are exactly 7 elementary catastrophes in $\\leq 4$ control parameters, including the fold ($x^3$), cusp ($x^4$), and swallowtail ($x^5$).',
      'Chaos theory — proving that deterministic systems can exhibit unpredictable behavior.',
      'Singularity theory — classifying all possible singularities of algebraic curves in the plane.',
      'Bifurcation theory — proving that all dynamical systems undergo period-doubling cascades.'
    ],
    correctIndex: 0,
    explanation: 'Thom classified the generic singularities of gradient dynamical systems $\\dot{x} = -\\nabla V(x; c)$ as control parameters $c$ vary. The 7 elementary catastrophes (fold, cusp, swallowtail, butterfly, hyperbolic umbilic, elliptic umbilic, parabolic umbilic) are the only structurally stable singularity types for $\\leq 4$ control parameters and $\\leq 2$ state variables.',
    realWorld: 'Catastrophe theory models ship capsizing (cusp catastrophe), optical caustics (swallowtail), phase transitions in materials, and sudden collapses in structural engineering.',
    hint: 'He classified exactly 7 ways that smooth systems can suddenly "jump" — each with a specific geometric shape.',
    formulaLinks: ['catastrophe-theory'],
  },
  {
    id: 31771, topic: 'rene-thom', difficulty: 'hard',
    question: 'Thom\'s Fields Medal work established cobordism theory. What is the Thom isomorphism and what does cobordism classify?',
    options: [
      'Two closed $n$-manifolds $M, N$ are cobordant if there exists an $(n+1)$-manifold $W$ with $\\partial W = M \\sqcup N$. The cobordism ring $\\Omega_*^O$ is a graded ring under disjoint union and Cartesian product. Thom proved: $$\\Omega_n^O \\cong \\pi_{n+k}(\\text{Th}(\\gamma_k)) \\quad \\text{for } k \\gg n$$ reducing cobordism to homotopy theory via the Thom space $\\text{Th}(\\gamma_k)$ of the universal bundle.',
      'Two manifolds are cobordant if they have the same Euler characteristic, and $\\Omega_n^O \\cong \\mathbb{Z}$ for all $n$.',
      'Cobordism classifies manifolds up to homeomorphism, and $\\Omega_n^O$ is always a finite group.',
      'The Thom isomorphism states $H^*(E, E_0) \\cong H^{*-n}(B)$ for any orientable $n$-plane bundle $E \\to B$.'
    ],
    correctIndex: 0,
    explanation: 'Thom\'s genius was translating the geometric problem of cobordism into homotopy theory. The Thom space construction $\\text{Th}(\\gamma_k) = D(\\gamma_k)/S(\\gamma_k)$ "collapses" the sphere bundle of the universal bundle to a point. The Pontryagin-Thom construction then gives a bijection between cobordism classes and stable homotopy groups of Thom spaces. Thom computed $\\Omega_*^O \\otimes \\mathbb{Q}$ using characteristic classes.',
    realWorld: 'Cobordism theory is foundational in modern topology. It underlies the Atiyah-Singer index theorem, string theory (cobordism hypothesis in TQFT), and the classification of manifolds.',
    hint: 'He turned "which manifolds bound something?" into a homotopy theory question — using a clever space construction.',
    formulaLinks: ['cobordism'],
  },
  {
    id: 31772, topic: 'rene-thom', difficulty: 'sota',
    question: 'The cusp catastrophe is the simplest catastrophe exhibiting hysteresis. What is its normal form and what behavior does it model?',
    options: [
      'The potential $V(x; a, b) = x^4 + ax^2 + bx$ has critical points satisfying $4x^3 + 2ax + b = 0$. The bifurcation set in $(a, b)$-space is a cusp curve: $$8a^3 + 27b^2 = 0$$ Inside this cusp, the system has two stable equilibria and one unstable; crossing the cusp boundary causes a discontinuous jump (hysteresis) between equilibria.',
      'The potential $V = x^3 + ax$ with bifurcation at $a = 0$ — the fold catastrophe.',
      'The potential $V = x^5 + ax^3 + bx^2 + cx$ with a swallowtail bifurcation set.',
      'The potential $V = x^2 y + y^3 + ax + by$ with an elliptic umbilic singularity.'
    ],
    correctIndex: 0,
    explanation: 'The cusp catastrophe with 2 control parameters $(a, b)$ and 1 state variable $x$ is the prototypical model of bistability and hysteresis. As $b$ varies while $a < 0$, the system jumps between two branches of minima at the fold lines $8a^3 + 27b^2 = 0$, following different paths depending on direction — this is hysteresis.',
    realWorld: 'The cusp models Zeeman\'s catastrophe machine (a mechanical device), opinion formation (sudden shifts in public consensus), stock market crashes, and the buckling of elastic beams under load.',
    hint: 'A quartic potential with two control knobs — inside the cusp region, the system has two competing stable states.',
    formulaLinks: ['catastrophe-theory'],
  },
];
