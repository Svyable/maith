import type { Question } from '../types';

export const maximKontsevichQuestions: Question[] = [
  {
    id: 31630, topic: 'maxim-kontsevich', difficulty: 'easy',
    question: 'Maxim Kontsevich won the 1998 Fields Medal for contributions spanning multiple areas. Which result involves counting curves on algebraic varieties?',
    options: [
      'Mirror symmetry and Gromov-Witten invariants — he gave a rigorous mathematical framework for counting holomorphic curves in a symplectic manifold $X$, producing generating functions: $$F_g(t) = \\sum_{\\beta \\in H_2(X)} N_{g,\\beta} \\, q^\\beta$$ where $N_{g,\\beta}$ counts genus-$g$ curves in class $\\beta$.',
      'The classification of all smooth projective surfaces over $\\mathbb{C}$ up to birational equivalence.',
      'A proof that every compact Kähler manifold admits a Ricci-flat metric (the Calabi conjecture).',
      'The enumeration of lattice points in polytopes using Ehrhart polynomials $L_P(n) = \\text{vol}(P) \\cdot n^d + \\cdots$.'
    ],
    correctIndex: 0,
    explanation: 'Kontsevich constructed the moduli space $\\overline{\\mathcal{M}}_{g,n}(X, \\beta)$ of stable maps from genus-$g$ curves to $X$. The virtual fundamental class $[\\overline{\\mathcal{M}}]^{\\text{vir}}$ gives well-defined curve counts (Gromov-Witten invariants) even when the moduli space has wrong dimension.',
    realWorld: 'These invariants are central to string theory (they compute string scattering amplitudes) and have led to remarkable enumerative results like the number of rational curves on a quintic threefold.',
    hint: 'He built a mathematical machine for counting curves — even when there are infinitely many.',
    formulaLinks: ['gromov-witten'],
  },
  {
    id: 31631, topic: 'maxim-kontsevich', difficulty: 'hard',
    question: 'Kontsevich\'s formality theorem revolutionized deformation quantization. What does it state?',
    options: [
      'The differential graded Lie algebra of polyvector fields on a smooth manifold $M$ is $L_\\infty$-quasi-isomorphic to the differential graded Lie algebra of polydifferential operators. This implies every Poisson structure $\\pi$ on $M$ admits a star product: $$f \\star g = fg + \\sum_{n=1}^\\infty \\hbar^n B_n(f,g)$$ where each $B_n$ is a bidifferential operator determined by $\\pi$.',
      'Every formal power series $\\sum a_n z^n$ with $|a_n| \\leq C^n$ converges in the unit disk and defines a holomorphic function.',
      'The cohomology ring $H^*(M; \\mathbb{R})$ is formal (quasi-isomorphic to its cohomology as a DGA) for all compact Kähler manifolds.',
      'Every finite-dimensional Lie algebra over $\\mathbb{C}$ is isomorphic to a matrix Lie algebra $\\mathfrak{gl}_n(\\mathbb{C})$.'
    ],
    correctIndex: 0,
    explanation: 'The formality theorem says that the Hochschild cochain complex $C^*(A, A)$ (controlling deformations of the algebra $A = C^\\infty(M)$) is formal as an $L_\\infty$-algebra. Kontsevich gave an explicit formula for the $L_\\infty$-morphism using Feynman diagrams — integrals over configuration spaces of points in the upper half-plane.',
    realWorld: 'This settled the deformation quantization problem: every classical mechanical system (Poisson manifold) can be quantized. The star product formula connects to Feynman path integrals in physics.',
    hint: 'Classical mechanics can always be "deformed" into quantum mechanics — he proved the algebraic version.',
    formulaLinks: ['poisson-bracket', 'star-product'],
  },
  {
    id: 31632, topic: 'maxim-kontsevich', difficulty: 'sota',
    question: 'Kontsevich proved Witten\'s conjecture relating intersection theory on moduli spaces to integrable hierarchies. What is the precise statement?',
    options: [
      'The generating function $F = \\sum_{g \\geq 0} \\hbar^{2g-2} F_g$ where $F_g = \\sum_n \\frac{1}{n!} \\sum_{d_1,\\ldots,d_n} \\langle \\tau_{d_1} \\cdots \\tau_{d_n} \\rangle_g \\prod t_{d_i}$ and $\\langle \\tau_{d_1} \\cdots \\tau_{d_n} \\rangle_g = \\int_{\\overline{\\mathcal{M}}_{g,n}} \\psi_1^{d_1} \\cdots \\psi_n^{d_n}$, satisfies the KdV hierarchy: $\\exp(F)$ is a tau-function of the KdV equation.',
      'The partition function of 2D quantum gravity equals the determinant of the Laplacian on a random surface: $Z = \\det(\\Delta_g)^{-1/2}$.',
      'The Euler characteristic of $\\mathcal{M}_{g,n}$ equals $(-1)^n \\frac{(2g-2+n)!}{(2g-2)!} \\cdot \\zeta(1-2g)$ for all $g \\geq 2$.',
      'The Weil-Petersson volume of $\\mathcal{M}_{g,n}$ is a polynomial in $\\pi^2$ of degree $3g - 3 + n$.'
    ],
    correctIndex: 0,
    explanation: 'The $\\psi$-classes $\\psi_i = c_1(\\mathcal{L}_i)$ are tautological classes on $\\overline{\\mathcal{M}}_{g,n}$. Witten conjectured that their intersection numbers satisfy the same recursion as the KdV integrable hierarchy from fluid dynamics. Kontsevich proved this using a cell decomposition of $\\mathcal{M}_{g,n}$ via ribbon graphs and matrix model techniques.',
    realWorld: 'This established a deep bridge between algebraic geometry (moduli spaces), mathematical physics (2D gravity), and integrable systems (KdV equation). It spawned an entire field connecting these areas.',
    hint: 'Intersection numbers on moduli spaces of curves satisfy the same equations as the KdV hierarchy from wave theory.',
    formulaLinks: ['kdv-equation'],
  },
];
