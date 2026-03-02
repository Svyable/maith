// feller.ts
import type { Question } from '../types';

export const williamFellerQuestions: Question[] = [
  {
    id: 69450,
    topic: 'william-feller',
    difficulty: 'easy',
    question:
      'A (Feller) Markov semigroup $(P_t)_{t\\ge 0}$ is a family of operators acting on functions $f$ via\n$$P_t f(x)=\\mathbb{E}_x[f(X_t)].$$\nWhat is the **semigroup (Chapman–Kolmogorov) property** in both operator form and kernel form?',
    options: [
      'Operator: $P_{t+s}=P_t\\circ P_s$ and kernel: $p_{t+s}(x,y)=\\int p_t(x,z)p_s(z,y)\\,dz$ (or sum over $z$ in discrete state space)',
      'Only: $p_{t+s}(x,y)=p_t(x,y)+p_s(x,y)$ (additivity in time)',
      'Only: $P_t=P_s$ for all $t,s$ (stationarity of the semigroup)',
      'Only: $P_{t+s}=P_t+P_s$ as linear operators'
    ],
    correctIndex: 0,
    explanation:
      'The defining semigroup law is **composition in time**:\n$$P_{t+s}f(x)=P_t(P_s f)(x).$$\nIf $P_t$ has transition kernel $p_t(x,dy)$, then\n$$p_{t+s}(x,dy)=\\int p_t(x,dz)\\,p_s(z,dy).$$\nThis encodes the Markov property: the future depends on the past only through the present state.',
    realWorld:
      'This is the backbone of diffusion theory, Markov chains, and Monte Carlo: multi-step transition probabilities are computed by composing one-step kernels/operators.',
    hint:
      '“Evolve for $s$, then evolve for $t$” equals “evolve for $t+s$.”'
  },
  {
    id: 69451,
    topic: 'william-feller',
    difficulty: 'hard',
    question:
      'Let $C_0(E)$ be the space of continuous functions on a locally compact Hausdorff space $E$ that **vanish at infinity**. What does it mean for a Markov semigroup $(P_t)$ to be a **Feller semigroup**?',
    options: [
      'For each $t\\ge 0$, $P_t: C_0(E)\\to C_0(E)$ and $\\|P_t f\\|_\\infty\\le \\|f\\|_\\infty$, with strong continuity: $\\lim_{t\\downarrow 0}\\|P_t f-f\\|_\\infty=0$ for all $f\\in C_0(E)$',
      'For each $t\\ge 0$, $P_t$ is compact on $L^2(E)$ and self-adjoint',
      'For each $t\\ge 0$, $P_t$ maps bounded measurable functions $\\mathcal{B}_b(E)$ into itself, with no continuity requirement',
      'For each $t\\ge 0$, $P_t$ is Hilbert–Schmidt and trace-class'
    ],
    correctIndex: 0,
    explanation:
      'A **Feller semigroup** is a strongly continuous contraction semigroup on $C_0(E)$ that preserves positivity and the constant function (Markov property). The key “Feller” part is:\n- **Regularity:** $P_t$ sends continuous functions vanishing at infinity to the same class.\n- **Strong continuity at $0$:** $P_t\\to I$ in sup norm as $t\\downarrow 0$.\nThese conditions link analytic semigroup theory to càdlàg/continuous-path Markov processes.',
    realWorld:
      'Feller semigroups are used to prove existence/uniqueness for Markov processes tied to PDEs (e.g., heat equation, Kolmogorov backward equation) and to justify boundary conditions.',
    hint:
      'Feller = “nice function space” ($C_0$) + “returns to identity” as $t\\to 0$.'
  },
  {
    id: 69452,
    topic: 'william-feller',
    difficulty: 'sota',
    question:
      'A 1D diffusion $X_t$ solving the Itô SDE\n$$dX_t=\\mu(X_t)\\,dt+\\sigma(X_t)\\,dW_t$$\nhas a Feller transition semigroup. What is the **infinitesimal generator** $\\mathcal{L}$ acting on smooth test functions $f$ (e.g., $f\\in C_c^2$), and how is it related to the semigroup?',
    options: [
      '$\\displaystyle (\\mathcal{L}f)(x)=\\mu(x)f\'(x)+\\tfrac12\\sigma^2(x)f\'\'(x)$ and $\\mathcal{L}f=\\lim_{t\\downarrow 0}\\frac{P_t f-f}{t}$ (on the domain of $\\mathcal{L}$)',
      '$\\displaystyle (\\mathcal{L}f)(x)=\\sigma(x)f\'(x)$ and $P_t=e^{t\\sigma}$',
      '$\\displaystyle (\\mathcal{L}f)(x)=f(x)^2$ and $\\mathcal{L}$ is unrelated to $P_t$',
      '$\\displaystyle (\\mathcal{L}f)(x)=\\Delta f(x)$ always, regardless of $\\mu,\\sigma$'
    ],
    correctIndex: 0,
    explanation:
      'For Itô diffusions, the generator is the second-order differential operator\n$$\\mathcal{L}=\\mu(x)\\frac{d}{dx}+\\frac12\\sigma^2(x)\\frac{d^2}{dx^2}.$$\nIt is the derivative of the semigroup at $t=0$:\n$$\\mathcal{L}f=\\lim_{t\\downarrow 0}\\frac{P_t f-f}{t},$$\nfor $f$ in the generator’s domain. Analytically, $(P_t)$ often solves the backward Kolmogorov PDE\n$$\\partial_t u=\\mathcal{L}u,\\quad u(0,x)=f(x),\\quad u(t,x)=P_t f(x).$$',
    realWorld:
      'This is the bridge between SDEs and PDEs: option pricing (Black–Scholes), population models (Feller/branching diffusions), and Fokker–Planck/continuity equations.',
    hint:
      'Generator = “drift × first derivative + diffusion × second derivative.”'
  },
  {
    id: 69453,
    topic: 'william-feller',
    difficulty: 'hard',
    question:
      'A key analytic condition for a Feller semigroup is **strong continuity at $t=0$** on $C_0(E)$. Which statement correctly expresses this property, and what is its intuitive meaning?',
    options: [
      '$\\forall f\\in C_0(E):\\ \\lim_{t\\downarrow 0}\\|P_t f-f\\|_\\infty=0$, meaning the process has “no jump in time” at $t=0$ when tested against continuous observables',
      '$\\forall f\\in C_0(E):\\ \\lim_{t\\to\\infty}\\|P_t f-f\\|_\\infty=0$, meaning the process becomes deterministic',
      '$\\forall f\\in C_0(E):\\ \\|P_t f\\|_\\infty=\\|f\\|_\\infty$ for all $t$, meaning $P_t$ is an isometry',
      '$\\forall f\\in L^1(E):\\ \\lim_{t\\downarrow 0}\\|P_t f-f\\|_1=0$, which is sufficient by itself for the Feller property'
    ],
    correctIndex: 0,
    explanation:
      'Strong continuity at $0$ is the semigroup-theoretic version of “$X_t\\to X_0$ as $t\\downarrow 0$ in distribution, uniformly under continuous test functions.” It ensures the generator is well-defined and that $(P_t)$ is a $C_0$-semigroup on $C_0(E)$.',
    realWorld:
      'Without strong continuity, many PDE/SDE correspondences break: you can’t cleanly define $\\mathcal{L}$ as the time derivative of $P_t$ at $0$, and boundary behaviors become ill-posed.',
    hint:
      'As $t\\to 0$, $P_t$ should behave like the identity operator.'
  },
  {
    id: 69454,
    topic: 'william-feller',
    difficulty: 'sota',
    question:
      'The **Feller boundary classification** (often developed via scale function $s$ and speed measure $m$) determines whether a boundary point is regular/exit/entrance/natural for a 1D diffusion. In the classical setup with\n$$\\mathcal{L}f=a(x)f\'\'(x)+b(x)f\'(x),\\quad a(x)>0,$$\nwhich objects are used to perform the classification, and what is the classification deciding?',
    options: [
      'Use the scale function $s$ and speed measure $m$ (or speed density). They decide whether the diffusion can reach the boundary, and if reached, whether it can be left/re-entered (regular/exit/entrance/natural).',
      'Use only the stationary distribution $\\pi$ to decide whether the boundary is reflecting or absorbing.',
      'Use Fourier transforms of $a,b$ to decide whether the boundary is periodic.',
      'Use only the Chapman–Kolmogorov equation to decide whether the boundary exists.'
    ],
    correctIndex: 0,
    explanation:
      'For 1D diffusions, one defines (up to affine transforms) a **scale function**\n$$s\'(x)=\\exp\\left(-\\int^x \\frac{b(u)}{a(u)}\\,du\\right),$$\nand a **speed density/measure** roughly of the form\n$$m(x)=\\frac{1}{a(x)s\'(x)}\\ \\ (\\text{up to constants}),$$\nthen evaluates integrability criteria near the boundary. These tests determine: (i) can $X_t$ hit the boundary in finite time, and (ii) what behavior is allowed there (absorbing/reflecting/entrance-only/etc.), yielding the regular/exit/entrance/natural classes.',
    realWorld:
      'This tells you whether an SDE model “explodes,” whether $0$ is absorbing in population models, and which boundary conditions are correct for the associated PDE.',
    hint:
      'Scale + speed tell you how the diffusion drifts and “spends time” near regions—especially near boundaries.'
  }
];