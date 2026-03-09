import type { Question } from '../types';

export const vaughanJonesQuestions: Question[] = [
  {
    id: 31760, topic: 'vaughan-jones', difficulty: 'easy',
    question: 'Vaughan Jones won the 1990 Fields Medal for discovering a new polynomial invariant of knots. What is the Jones polynomial?',
    options: [
      'An invariant $V_K(t) \\in \\mathbb{Z}[t^{\\pm 1/2}]$ assigned to each oriented knot $K$, defined via the Kauffman bracket $\\langle K \\rangle$ or the skein relation: $$t^{-1} V_{L_+} - t \\, V_{L_-} = (t^{1/2} - t^{-1/2}) V_{L_0}$$ where $L_+, L_-, L_0$ are links differing at a single crossing.',
      'A polynomial $V_K(x) = \\det(xI - A_K)$ where $A_K$ is the adjacency matrix of the knot diagram.',
      'A Laurent polynomial counting the number of Seifert surfaces bounded by the knot.',
      'The characteristic polynomial of the knot group $\\pi_1(S^3 \\setminus K)$ acting on its abelianization.'
    ],
    correctIndex: 0,
    explanation: 'Jones discovered his polynomial through an unexpected connection to operator algebras (subfactors of von Neumann algebras). The skein relation allows recursive computation: at each crossing, the polynomial satisfies a linear relation involving the three resolutions $L_+, L_-, L_0$. For the unknot, $V = 1$. For the trefoil, $V = -t^{-4} + t^{-3} + t^{-1}$.',
    realWorld: 'The Jones polynomial distinguishes knots that the classical Alexander polynomial cannot (like the trefoil from its mirror image). It has applications in DNA topology (detecting knotted DNA) and quantum computing.',
    hint: 'A polynomial computed from crossing information — using a three-term relation at each crossing.',
    formulaLinks: ['jones-polynomial'],
  },
  {
    id: 31761, topic: 'vaughan-jones', difficulty: 'hard',
    question: 'Jones discovered his polynomial through operator algebras. What is the "Jones index" for subfactors?',
    options: [
      'For a subfactor $N \\subset M$ of type II$_1$ von Neumann factors, the Jones index $[M:N]$ measures the "relative size." Jones proved that the possible values are: $$[M:N] \\in \\{4\\cos^2(\\pi/n) : n \\geq 3\\} \\cup [4, \\infty)$$ The discrete values below 4 are: $1, 2, \\frac{3+\\sqrt{5}}{2} \\approx 2.618, 3, \\ldots$',
      'The Jones index is the ratio of dimensions $[M:N] = \\dim M / \\dim N$ for finite-dimensional algebras.',
      'The Jones index equals the Murray-von Neumann coupling constant $\\dim_N L^2(M)$, always an integer.',
      'The Jones index is the number of intermediate subfactors $N \\subset P \\subset M$, always finite.'
    ],
    correctIndex: 0,
    explanation: 'Jones\'s remarkable restriction theorem shows the index cannot take values in $(0, 1) \\cup (1, 2) \\cup (2, 3) \\cup \\cdots$ — there are "forbidden" intervals. The discrete values $4\\cos^2(\\pi/n)$ arise from the Temperley-Lieb algebras and are related to representations of quantum groups at roots of unity. Jones used the "basic construction" tower $N \\subset M \\subset M_1 \\subset M_2 \\subset \\cdots$ to prove this.',
    realWorld: 'The Jones index appears in conformal field theory (central charges of WZW models), statistical mechanics (Potts model critical points), and quantum information theory (topological quantum computation).',
    hint: 'The "size ratio" of one algebra inside another can\'t be just anything — there are forbidden values below 4.',
    formulaLinks: ['von-neumann-algebra'],
  },
  {
    id: 31762, topic: 'vaughan-jones', difficulty: 'sota',
    question: 'The Jones polynomial connects to quantum field theory through the Witten-Reshetikhin-Turaev invariant. How?',
    options: [
      'Witten showed that the Jones polynomial arises as the expectation value of a Wilson loop in Chern-Simons gauge theory: $$V_K(t) = \\langle W_R(K) \\rangle_{CS} = \\int \\mathcal{D}A \\, \\text{tr}_R\\left(\\mathcal{P} e^{i\\oint_K A}\\right) e^{\\frac{ik}{4\\pi} \\int_M \\text{tr}(A \\wedge dA + \\frac{2}{3} A \\wedge A \\wedge A)}$$ with $t = e^{2\\pi i/(k+2)}$ for $\\text{SU}(2)$ at level $k$.',
      'The Jones polynomial equals the partition function of the Ising model on the knot complement lattice.',
      'The Jones polynomial is the trace of the monodromy of the KZ connection on conformal blocks.',
      'The Jones polynomial counts the number of flat $\\text{SU}(2)$ connections on the knot complement, weighted by Reidemeister torsion.'
    ],
    correctIndex: 0,
    explanation: 'Witten\'s 1989 insight was that Chern-Simons theory — a 3D topological quantum field theory — produces the Jones polynomial as a natural observable. The Wilson loop $W_R(K)$ is the holonomy of the gauge connection around the knot $K$ in representation $R$. This gave the first physical interpretation of the Jones polynomial and led to the entire field of topological quantum field theory (TQFT).',
    realWorld: 'This connection inspired topological quantum computation (Freedman, Kitaev): quantum computers based on anyons compute Jones polynomial values, which is known to be #P-hard classically.',
    hint: 'The Jones polynomial IS a quantum field theory observable — the expectation of a Wilson loop in Chern-Simons theory.',
    formulaLinks: ['chern-simons', 'jones-polynomial'],
  },
];
