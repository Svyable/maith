import type { Question } from '../types';

export const mikhailGromovQuestions: Question[] = [
  {
    id: 31670, topic: 'mikhail-gromov', difficulty: 'easy',
    question: 'Mikhail Gromov won the 2009 Abel Prize for revolutionary contributions to geometry. What is his most famous compactness theorem?',
    options: [
      'Gromov\'s compactness theorem: any sequence of Riemannian manifolds $(M_i, g_i)$ with uniformly bounded Ricci curvature $|\\text{Ric}| \\leq K$ and a lower bound on volume has a subsequence converging in the Gromov-Hausdorff sense to a metric space.',
      'Every compact Riemannian manifold with positive curvature is diffeomorphic to a sphere.',
      'The space of all closed geodesics on a compact manifold is itself compact in the $C^0$ topology.',
      'Every sequence of minimal surfaces in $\\mathbb{R}^3$ with bounded area has a convergent subsequence.'
    ],
    correctIndex: 0,
    explanation: 'Gromov introduced the Gromov-Hausdorff distance $d_{GH}(X, Y) = \\inf \\{ d_H^Z(f(X), g(Y)) \\}$ between compact metric spaces, where the infimum is over all isometric embeddings into a common space $Z$. His compactness theorem provides a framework for studying limits of Riemannian manifolds — even when the limit is no longer smooth.',
    realWorld: 'This framework is essential in Perelman\'s proof of the Poincaré conjecture (Ricci flow with surgery produces sequences of manifolds that converge in the Gromov-Hausdorff sense) and in the study of Einstein manifolds.',
    hint: 'He invented a way to measure "distance between shapes" and showed that bounded-curvature shapes can\'t escape to infinity.',
    formulaLinks: ['gromov-hausdorff'],
  },
  {
    id: 31671, topic: 'mikhail-gromov', difficulty: 'hard',
    question: 'Gromov\'s h-principle is a powerful technique in differential topology. What does it assert?',
    options: [
      'For many geometric PDEs and differential relations $\\mathcal{R} \\subset J^r(M, N)$, every formal solution (a section of $\\mathcal{R}$ satisfying only the algebraic constraints) can be deformed to a genuine solution. Formally: the inclusion $\\text{Sol}(\\mathcal{R}) \\hookrightarrow \\text{FormalSol}(\\mathcal{R})$ is a weak homotopy equivalence.',
      'Every smooth manifold of dimension $\\geq 5$ admits a metric of constant negative curvature.',
      'Any two homotopic immersions $f, g: M \\looparrowright N$ with $\\dim N \\geq 2 \\dim M + 1$ are regularly homotopic.',
      'The space of symplectic structures on $\\mathbb{R}^{2n}$ is contractible for all $n \\geq 1$.'
    ],
    correctIndex: 0,
    explanation: 'The h-principle says that "soft" geometric problems (where the constraints are "open" in a jet space sense) can be solved by purely topological/homotopical methods. Gromov\'s convex integration technique — systematically "wrinkling" maps at small scales — provides the constructive mechanism. This explains why, for instance, you can turn a sphere inside out smoothly (Smale\'s eversion).',
    realWorld: 'The h-principle is used in symplectic/contact topology (existence of contact structures on odd-dimensional manifolds), fluid dynamics (constructing wild solutions of Euler equations), and the Nash-Kuiper embedding theorem.',
    hint: 'If you can solve the algebra, you can solve the geometry — by cleverly "wrinkling" your solution.',
    formulaLinks: ['h-principle'],
  },
  {
    id: 31672, topic: 'mikhail-gromov', difficulty: 'sota',
    question: 'Gromov introduced the concept of "hyperbolic groups" in geometric group theory. What is the defining property, and what are its consequences?',
    options: [
      'A finitely generated group $G$ is $\\delta$-hyperbolic if its Cayley graph satisfies the thin triangles condition: for any geodesic triangle, each side is contained in the $\\delta$-neighborhood of the other two sides. Equivalently, $(x|y)_w \\geq \\min((x|z)_w, (z|y)_w) - \\delta$ for the Gromov product. Consequences: solvable word problem, finite asymptotic dimension, and a well-defined boundary at infinity $\\partial G$.',
      'A group is hyperbolic if it acts properly discontinuously on hyperbolic space $\\mathbb{H}^n$ for some $n$.',
      'A group is hyperbolic if its growth function $\\beta(n) = |B(e, n)|$ is bounded by $e^{cn}$ for some $c < \\log(2n-1)$.',
      'A group is hyperbolic if every finitely generated subgroup is either finite or has finite index.'
    ],
    correctIndex: 0,
    explanation: 'Gromov\'s insight was that negative curvature in Riemannian geometry has a purely metric/combinatorial analog. The thin triangles condition captures "negative curvature" for discrete groups. His 1987 essay introduced a vast theory: hyperbolic groups have exponential growth, satisfy the Novikov conjecture, and their boundary $\\partial G$ carries a rich dynamical structure.',
    realWorld: 'Hyperbolic groups appear in 3-manifold topology (fundamental groups of hyperbolic manifolds), cryptography (proposed hard problems on hyperbolic groups), and theoretical computer science (automatic groups with efficient word problem algorithms).',
    hint: 'Triangles in these groups are "thin" — like in hyperbolic space, but defined purely combinatorially.',
    formulaLinks: ['gromov-hyperbolicity'],
  },
];
