import type { Question } from '../types';

export const andreWeilQuestions: Question[] = [
  {
    id: 31880, topic: 'andre-weil', difficulty: 'easy',
    question: 'André Weil formulated some of the most influential conjectures in 20th-century mathematics. What are the Weil conjectures about?',
    options: [
      'The zeta function of algebraic varieties over finite fields $\\mathbb{F}_q$: $$Z(X, t) = \\exp\\left(\\sum_{k=1}^\\infty \\frac{\\#X(\\mathbb{F}_{q^k})}{k} t^k\\right)$$ Weil conjectured rationality, a functional equation, and that the zeros satisfy a "Riemann Hypothesis" analog with $|\\alpha| = q^{i/2}$.',
      'The distribution of zeros of the Riemann zeta function $\\zeta(s)$ on the critical line.',
      'The number of rational points on elliptic curves over $\\mathbb{Q}$ ordered by height.',
      'The classification of finite simple groups by their order.'
    ],
    correctIndex: 0,
    explanation: 'Weil conjectured (1949): (1) $Z(X,t)$ is a rational function of $t$, (2) it satisfies a functional equation $Z(X, 1/q^n t) = \\pm q^{n\\chi/2} t^\\chi Z(X, t)$, (3) the reciprocal zeros of $P_i(t)$ have absolute value $q^{i/2}$ (Riemann Hypothesis). These were proved by Dwork (rationality), Grothendieck (functional equation via étale cohomology), and Deligne (RH).',
    realWorld: 'The Weil conjectures drove the development of algebraic geometry for 25 years, leading Grothendieck to create schemes, étale cohomology, and much of modern algebraic geometry.',
    hint: 'Counting points on varieties over finite fields follows patterns as beautiful as the Riemann zeta function.',
    formulaLinks: ['riemann-zeta', 'weil-conjectures'],
  },
  {
    id: 31881, topic: 'andre-weil', difficulty: 'hard',
    question: 'Weil proved a foundational result for curves over finite fields. What is the Hasse-Weil bound?',
    options: [
      'For a smooth projective curve $C$ of genus $g$ over $\\mathbb{F}_q$: $$|\\#C(\\mathbb{F}_q) - (q + 1)| \\leq 2g\\sqrt{q}$$ This is the RH for curves: the zeta function $Z(C, t) = P(t)/((1-t)(1-qt))$ where $P(t) = \\prod_{i=1}^{2g}(1 - \\alpha_i t)$ with $|\\alpha_i| = \\sqrt{q}$.',
      'A curve of genus $g$ over $\\mathbb{F}_q$ has at most $q^g + 1$ rational points.',
      'The number of points satisfies $\\#C(\\mathbb{F}_q) = q + 1$ exactly when $g = 0$ (projective line).',
      'For genus $g \\geq 2$, $\\#C(\\mathbb{F}_q) \\leq q - 1$ (fewer points than the affine line).'
    ],
    correctIndex: 0,
    explanation: 'Weil proved this for curves in 1948, establishing the RH in the curve case. The proof uses the theory of correspondences on the Jacobian variety $J(C)$ and the Castelnuovo-Severi inequality. The bound $2g\\sqrt{q}$ is sharp — curves achieving equality (maximal curves) are important in coding theory.',
    realWorld: 'Maximal curves over $\\mathbb{F}_{q^2}$ (achieving the Hasse-Weil bound) are used to construct optimal algebraic-geometric error-correcting codes (Goppa codes) and in cryptographic applications.',
    hint: 'The number of points on a curve deviates from $q+1$ by at most $2g\\sqrt{q}$ — like the Riemann Hypothesis predicts.',
    formulaLinks: ['hasse-weil-bound'],
  },
  {
    id: 31882, topic: 'andre-weil', difficulty: 'sota',
    question: 'Weil introduced adeles and ideles as a unified framework for number theory. What is the adele ring of a number field?',
    options: [
      'For a number field $K$, the adele ring is the restricted product: $$\\mathbb{A}_K = \\prod_{v}^\\prime K_v = \\left\\{(x_v) \\in \\prod_v K_v : x_v \\in \\mathcal{O}_v \\text{ for almost all } v\\right\\}$$ over all places $v$ (archimedean and non-archimedean). The idele group $\\mathbb{A}_K^\\times$ is the unit group. Class field theory says $\\text{Gal}(K^{\\text{ab}}/K) \\cong K^\\times \\backslash \\mathbb{A}_K^\\times / \\overline{(K^\\times)^0}$.',
      'The adele ring is $\\mathbb{A}_K = K \\otimes_{\\mathbb{Z}} \\hat{\\mathbb{Z}}$ — the profinite completion of $K$.',
      'The adele ring is $\\mathbb{A}_K = \\prod_{p \\text{ prime}} \\mathbb{Q}_p$ — a product over all $p$-adic fields.',
      'The adele ring is the ring of all Cauchy sequences in $K$ modulo null sequences.'
    ],
    correctIndex: 0,
    explanation: 'Weil\'s adelic viewpoint unifies all completions of a number field into a single object. The diagonal embedding $K \\hookrightarrow \\mathbb{A}_K$ is discrete and cocompact (Artin product formula). Automorphic forms are functions on $\\text{GL}_n(K) \\backslash \\text{GL}_n(\\mathbb{A}_K)$, making adeles the natural setting for the Langlands program.',
    realWorld: 'The adelic framework is now standard in algebraic number theory and automorphic forms. It provides the cleanest formulation of class field theory, the Langlands program, and Tate\'s thesis (functional equation of $L$-functions).',
    hint: 'Glue together all the $p$-adic worlds and the real world into one ring — that\'s the adeles.',
    formulaLinks: ['adele-ring', 'class-field-theory'],
  },
];
