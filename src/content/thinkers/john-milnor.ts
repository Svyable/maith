import type { Question } from '../types';

export const johnMilnorQuestions: Question[] = [
  {
    id: 31710, topic: 'john-milnor', difficulty: 'easy',
    question: 'John Milnor won the 1962 Fields Medal for discovering exotic spheres. What is an exotic sphere?',
    options: [
      'A smooth manifold that is homeomorphic (topologically identical) to the standard sphere $S^n$ but not diffeomorphic (not smoothly identical). Milnor showed there are exactly 28 exotic smooth structures on $S^7$.',
      'A sphere embedded in $\\mathbb{R}^n$ with a fractal surface of non-integer Hausdorff dimension.',
      'A Riemannian sphere with curvature that varies wildly between positive and negative values.',
      'A topological sphere that cannot be triangulated into simplices.'
    ],
    correctIndex: 0,
    explanation: 'Milnor constructed explicit examples of 7-manifolds that are topologically $S^7$ but cannot be smoothly deformed to the standard sphere. He used Morse theory and a characteristic class obstruction ($\\lambda = p_1^2 - 4p_2$) to detect the difference. The group of exotic spheres $\\Theta_n$ forms a finite abelian group under connected sum.',
    realWorld: 'Exotic spheres revealed that topology and differential geometry can diverge dramatically in high dimensions. This influenced string theory (where the smoothness of compactification manifolds matters physically) and gauge theory.',
    hint: 'Same shape, different smoothness — like two globes that look identical but can\'t be stretched to match smoothly.',
    formulaLinks: ['exotic-sphere'],
  },
  {
    id: 31711, topic: 'john-milnor', difficulty: 'hard',
    question: 'Milnor\'s construction of exotic 7-spheres uses fiber bundles. How does the construction work?',
    options: [
      'He constructed $S^3$-bundles over $S^4$ classified by $\\pi_3(\\text{SO}(4)) \\cong \\mathbb{Z} \\oplus \\mathbb{Z}$. For each pair $(h, l)$ with $h + l = 1$, the total space $M_{h,l}$ is homeomorphic to $S^7$. The Pontryagin class $p_1 = 2(h - l)$ distinguishes smooth structures: $$\\lambda(M) = \\frac{p_1^2 - 4 \\cdot 7 \\cdot \\text{sig}}{2^2 \\cdot 7} \\pmod{7}$$ When $\\lambda \\neq 0 \\pmod{7}$, the manifold is exotic.',
      'He glued two copies of $D^4 \\times S^3$ along their boundary $S^3 \\times S^3$ using a non-standard diffeomorphism from $\\pi_3(\\text{Diff}(S^3))$.',
      'He took the unit sphere in the quaternionic Hopf bundle $S^3 \\hookrightarrow S^7 \\to S^4$ and modified the metric using Berger spheres.',
      'He constructed a Brieskorn variety $\\{z_0^2 + z_1^2 + z_2^2 + z_3^3 + z_4^{6k-1} = 0\\} \\cap S^9$ for specific values of $k$.'
    ],
    correctIndex: 0,
    explanation: 'The key insight is that $\\text{SO}(4) \\cong (S^3 \\times S^3)/\\mathbb{Z}_2$, so $S^3$-bundles over $S^4$ are classified by pairs of integers. Milnor showed these total spaces are all homeomorphic to $S^7$ (by Morse theory), but the Hirzebruch signature theorem detects when they\'re not diffeomorphic via the $\\lambda$-invariant.',
    realWorld: 'Milnor\'s exotic spheres launched the field of surgery theory and differential topology. Brieskorn later gave simpler constructions using singularity theory.',
    hint: 'Build a sphere bundle over a sphere — the twist in the bundle creates exotic smoothness.',
    formulaLinks: ['pontryagin-class'],
  },
  {
    id: 31712, topic: 'john-milnor', difficulty: 'sota',
    question: 'Kervaire and Milnor computed the group of exotic spheres $\\Theta_n$ in terms of homotopy groups of spheres. What is their classification?',
    options: [
      'The group $\\Theta_n$ fits in an exact sequence: $$0 \\to bP_{n+1} \\to \\Theta_n \\to \\text{coker}(J_n)$$ where $bP_{n+1}$ is the subgroup bounding parallelizable manifolds (computed via Bernoulli numbers: $|bP_{4k}| = a_k \\cdot 2^{2k-2}(2^{2k-1}-1) \\cdot \\text{num}(B_{2k}/4k)$) and $J_n: \\pi_n(\\text{SO}) \\to \\pi_n^s$ is the J-homomorphism.',
      'The group $\\Theta_n$ is always cyclic of order $2^{n-1} - 1$ for $n$ odd.',
      'The group $\\Theta_n$ is trivial for all $n \\leq 6$ and isomorphic to $\\mathbb{Z}/28$ for all $n \\geq 7$.',
      'The group $\\Theta_n$ is the kernel of the Adams e-invariant $e: \\pi_n^s \\to \\mathbb{Q}/\\mathbb{Z}$.'
    ],
    correctIndex: 0,
    explanation: 'Kervaire-Milnor\'s 1963 paper is one of the greatest in differential topology. The computable part $bP_{n+1}$ involves Bernoulli numbers and gives, e.g., $|bP_8| = 28$ (the 28 exotic 7-spheres). The "cokernel of J" part connects to stable homotopy theory and remains difficult to compute for general $n$. The sequence shows that exotic spheres are controlled by both algebraic topology (homotopy) and number theory (Bernoulli numbers).',
    realWorld: 'This classification connects differential topology to number theory in a deep and unexpected way. The appearance of Bernoulli numbers links exotic spheres to values of the Riemann zeta function at negative integers.',
    hint: 'The number of exotic spheres involves Bernoulli numbers — connecting topology to number theory.',
    formulaLinks: ['bernoulli-numbers', 'j-homomorphism'],
  },
];
