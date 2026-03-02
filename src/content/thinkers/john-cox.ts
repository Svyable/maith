// cox.ts
import type { Question } from '../types';

export const johnCoxQuestions: Question[] = [
  {
    id: 69500,
    topic: 'john-cox',
    difficulty: 'easy',
    question:
      'In the Cox–Ross–Rubinstein (CRR) binomial model with time step $\\Delta t$ and volatility $\\sigma$, what are the standard “up” and “down” multipliers $(u,d)$ that yield a recombining tree converging to a lognormal diffusion?',
    options: [
      '$u=e^{\\sigma\\sqrt{\\Delta t}},\\quad d=e^{-\\sigma\\sqrt{\\Delta t}}$',
      'Jarrow–Rudd: $u=1+\\sigma\\sqrt{\\Delta t},\\ d=1-\\sigma\\sqrt{\\Delta t}$ with $p=1/2$',
      '$u=d=e^{\\sigma\\Delta t}$ (no recombination needed)',
      '$u=1+\\sigma\\Delta t,\\ d=1-\\sigma\\Delta t$'
    ],
    correctIndex: 0,
    explanation:
      'CRR uses multiplicative symmetric moves $\\pm\\sigma\\sqrt{\\Delta t}$ in log-space, so the tree recombines and converges to geometric Brownian motion.',
    realWorld:
      'CRR is widely used for American/Bermudan options where early exercise makes closed forms harder than Black–Scholes.',
    hint: 'Geometric steps with $\\pm\\sigma\\sqrt{\\Delta t}$ in the exponent.'
  },
  {
    id: 69501,
    topic: 'john-cox',
    difficulty: 'hard',
    question:
      'The Cox–Ingersoll–Ross (CIR) short-rate model is a mean-reverting **square-root diffusion**. Which SDE is the CIR model, and what condition helps keep rates nonnegative?',
    options: [
      '$dr_t=\\kappa(\\theta-r_t)dt+\\sigma\\sqrt{r_t}\\,dW_t$, with Feller condition $2\\kappa\\theta\\ge\\sigma^2$',
      '$dr_t=\\kappa(\\theta-r_t)dt+\\sigma\\,dW_t$ (Vasicek), positivity always guaranteed',
      '$dr_t=\\theta(t)dt+\\sigma(t)\\,dW_t$ (Ho–Lee), positivity always guaranteed',
      '$dr_t=\\kappa(\\theta-r_t)dt+\\sigma r_t\\,dW_t$ (lognormal), Feller condition $2\\kappa\\theta\\le\\sigma^2$'
    ],
    correctIndex: 0,
    explanation:
      'CIR uses diffusion term $\\sigma\\sqrt{r_t}$, which vanishes at $r=0$. The Feller condition $2\\kappa\\theta\\ge\\sigma^2$ prevents hitting zero (in the strict sense) and supports nonnegativity.',
    realWorld:
      'CIR is a workhorse for interest-rate and credit-intensity modeling because it is analytically tractable and tends to stay positive.',
    hint: 'Look for the $\\sqrt{r_t}$ term.'
  },
  {
    id: 69502,
    topic: 'john-cox',
    difficulty: 'sota',
    question:
      'A Cox process (a doubly stochastic Poisson process) randomizes the intensity. Which statement is correct?',
    options: [
      'Conditional on intensity path $(\\lambda_s)$, $N_t\\mid\\lambda\\sim\\text{Poisson}\\!\\left(\\int_0^t\\lambda_s\\,ds\\right)$, with $\\lambda_t$ itself stochastic',
      '$N_t$ is a homogeneous Poisson process with constant rate $\\lambda$',
      '$N_t$ is Hawkes: $\\lambda_t$ increases deterministically after each jump',
      '$N_t$ is mixed Poisson only, meaning $\\lambda$ is a single random constant not a process'
    ],
    correctIndex: 0,
    explanation:
      'A Cox process is “Poisson given the intensity,” where the intensity is random (often a diffusion or a piecewise-constant latent process).',
    realWorld:
      'Used for credit defaults, insurance claims, and event modeling where “activity level” varies randomly over time.',
    hint: 'Poisson conditional on a *random* intensity path.'
  },
  {
    id: 69503,
    topic: 'john-cox',
    difficulty: 'hard',
    question:
      'In the CRR tree with continuous dividend yield $\\delta$ and risk-free rate $r$, what is the risk-neutral probability $p^*$ (so the discounted stock is a martingale)?',
    options: [
      '$p^*=\\dfrac{e^{(r-\\delta)\\Delta t}-d}{u-d}$',
      '$p^*=\\dfrac{u-e^{(r-\\delta)\\Delta t}}{u-d}$',
      '$p^*=\\tfrac12$ always in CRR',
      '$p^*=\\dfrac{e^{r\\Delta t}}{u+d}$'
    ],
    correctIndex: 0,
    explanation:
      'Risk-neutral pricing enforces $\\mathbb{E}^*[S_{t+\\Delta t}\\mid S_t]=S_t e^{(r-\\delta)\\Delta t}$, giving $p^*=(e^{(r-\\delta)\\Delta t}-d)/(u-d)$.',
    realWorld:
      'This is the plug-in step for pricing by backward induction on a binomial tree.',
    hint: 'Match the expected growth to $e^{(r-\\delta)\\Delta t}$.'
  },
  {
    id: 69504,
    topic: 'john-cox',
    difficulty: 'sota',
    question:
      'CIR is an **affine term-structure model**. What is the standard exponential-affine form of the CIR zero-coupon bond price $P(0,T)$ in terms of current short rate $r_0$?',
    options: [
      '$P(0,T)=A(T)\\,e^{-B(T)r_0}$ for deterministic functions $A(T),B(T)$',
      '$P(0,T)=\\Phi(d_1)-K\\Phi(d_2)$ (Black formula)',
      '$P(0,T)=e^{-\\int_0^T r_s\\,ds}$ (pathwise identity as a closed form)',
      '$P(0,T)=e^{-\\frac12\\sigma^2T^2}e^{-Tr_0}$ (always Gaussian)'
    ],
    correctIndex: 0,
    explanation:
      'In affine models, bond prices take $P(t,T)=A(t,T)e^{-B(t,T)r_t}$ where $A,B$ come from Riccati ODEs. CIR yields closed-form $A,B$.',
    realWorld:
      'This structure makes calibration and curve construction efficient, and supports semi-closed pricing for many rate derivatives.',
    hint: '“Affine” almost always means $\\exp(\\alpha+\\beta r)$.'
  }
];