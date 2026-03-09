import type { Question } from '../types';

export const laurentLafforgueQuestions: Question[] = [
  {
    id: 31810, topic: 'laurent-lafforgue', difficulty: 'easy',
    question: 'Laurent Lafforgue won the 2002 Fields Medal for proving which case of the Langlands conjectures?',
    options: [
      'The Langlands correspondence for $\\text{GL}_n$ over function fields: for every irreducible $n$-dimensional $\\ell$-adic representation $\\sigma$ of $\\text{Gal}(\\bar{F}/F)$ (where $F$ is a function field over $\\mathbb{F}_q$), there exists an automorphic cuspidal representation $\\pi$ of $\\text{GL}_n(\\mathbb{A}_F)$ with matching $L$-functions: $L(s, \\sigma) = L(s, \\pi)$.',
      'The Langlands correspondence for $\\text{GL}_2$ over $\\mathbb{Q}$ — every elliptic curve over $\\mathbb{Q}$ is modular.',
      'The geometric Langlands conjecture for all reductive groups over $\\mathbb{C}$.',
      'The Artin conjecture — every Artin $L$-function has analytic continuation to the entire complex plane.'
    ],
    correctIndex: 0,
    explanation: 'Lafforgue generalized Drinfeld\'s work (which proved the $n = 2$ case, earning Drinfeld the 1990 Fields Medal) to all $n$. His proof uses the geometry of moduli spaces of "shtukas" — vector bundles with Frobenius structure on algebraic curves — and a difficult inductive argument on the cohomology of these moduli spaces.',
    realWorld: 'The Langlands program is often called the "grand unified theory of mathematics." Lafforgue\'s theorem is one of the most complete confirmations of this vision, connecting number theory, geometry, and representation theory.',
    hint: 'He proved that Galois representations and automorphic forms are two faces of the same coin — for function fields.',
    formulaLinks: ['langlands-program'],
  },
  {
    id: 31811, topic: 'laurent-lafforgue', difficulty: 'hard',
    question: 'Lafforgue\'s proof uses "shtukas," a concept introduced by Drinfeld. What is a shtuka?',
    options: [
      'A shtuka (from German/Russian "Stück" = piece) for $\\text{GL}_n$ over a curve $X/\\mathbb{F}_q$ is a pair of rank-$n$ vector bundles $(\\mathcal{E}, \\mathcal{E}\')$ on $X$ related by modifications at finitely many points: $\\mathcal{E}|_{X \\setminus \\{x_i\\}} \\cong \\mathcal{E}\'|_{X \\setminus \\{x_i\\}}$ with a Frobenius condition $\\text{Fr}^*\\mathcal{E}\' \\cong \\mathcal{E}$. The moduli space of shtukas carries an action of both $\\text{GL}_n(\\mathbb{A}_F)$ and $\\text{Gal}(\\bar{F}/F)$.',
      'A shtuka is a Galois representation $\\rho: \\text{Gal}(\\bar{F}/F) \\to \\text{GL}_n(\\overline{\\mathbb{Q}}_\\ell)$ satisfying a weight purity condition.',
      'A shtuka is an automorphic form on $\\text{GL}_n(\\mathbb{A}_F)$ that transforms by a character under the center.',
      'A shtuka is a pair $(V, \\phi)$ where $V$ is a vector space and $\\phi$ is a $q$-Frobenius semilinear endomorphism, considered up to isogeny.'
    ],
    correctIndex: 0,
    explanation: 'Shtukas are the function-field analog of abelian varieties with extra structure. The key property is that the $\\ell$-adic cohomology of moduli spaces of shtukas simultaneously carries actions of the Galois group and the adelic group — making it the natural space where the Langlands correspondence lives. Lafforgue analyzed the geometry of these moduli spaces using Arthur-Selberg trace formula techniques.',
    realWorld: 'Peter Scholze later adapted the shtuka concept to number fields (via "diamonds" and perfectoid spaces), which is the frontier of current research in the Langlands program.',
    hint: 'Vector bundles on a curve, glued to their Frobenius twist — the key geometric objects where Langlands lives.',
    formulaLinks: ['langlands-program'],
  },
  {
    id: 31812, topic: 'laurent-lafforgue', difficulty: 'sota',
    question: 'The Langlands correspondence established by Lafforgue preserves $L$-functions. What does this mean precisely?',
    options: [
      'For each pair $(\\sigma, \\pi)$ matched by the correspondence, the Godement-Jacquet $L$-function of $\\pi$ equals the Artin $L$-function of $\\sigma$: $$L(s, \\pi) = \\prod_{v \\text{ place}} \\det\\left(I - \\sigma(\\text{Fr}_v) q_v^{-s}\\right)^{-1} = L(s, \\sigma)$$ and similarly for $\\epsilon$-factors and $\\gamma$-factors at every place $v$. The local Langlands correspondence matches Weil-Deligne representations to smooth representations of $\\text{GL}_n(F_v)$.',
      'The $L$-functions satisfy the Riemann Hypothesis: all zeros of $L(s, \\pi)$ lie on $\\text{Re}(s) = 1/2$.',
      'The $L$-functions are equal as formal Dirichlet series but may differ at finitely many Euler factors.',
      'The $L$-functions are related by $L(s, \\pi) = L(1-s, \\sigma)$ — a functional equation exchange.'
    ],
    correctIndex: 0,
    explanation: 'The matching of $L$-functions is the precise sense in which the correspondence is canonical. At each unramified place $v$, the Satake parameters of $\\pi_v$ equal the eigenvalues of $\\sigma(\\text{Fr}_v)$. At ramified places, the matching involves the full local Langlands correspondence (proved by Harris-Taylor and Henniart). Lafforgue\'s global result includes this local matching everywhere.',
    realWorld: 'Matching $L$-functions translates deep arithmetic information (Galois representations) into analytic information (automorphic forms), enabling techniques from one area to solve problems in the other.',
    hint: 'At every prime, the Frobenius eigenvalues of the Galois representation equal the Satake parameters of the automorphic form.',
    formulaLinks: ['langlands-program', 'l-function'],
  },
];
