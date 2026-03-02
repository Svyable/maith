// hotelling.ts
import type { Question } from '../types';

export const hotellingQuestions: Question[] = [
  {
    id: 69550,
    topic: 'harold-hotelling',
    difficulty: 'easy',
    question: 'Hotelling T² tests?',
    options: [
      'Multivariate mean vector equality: T² = n (x̄₁ - x̄₂)ᵀ S⁻¹ (x̄₁ - x̄₂)',
      'MANOVA between-subjects',
      'Principal components analysis',
      'Canonical correlation'
    ],
    correctIndex: 0,
    explanation: 'Generalizes t-test to p-dimensional vectors; F-distributed.',
    realWorld: 'Quality control, portfolio mean testing.',
    hint: 'Multivariate two-sample t-test.'
  },
  {
    id: 69551,
    topic: 'harold-hotelling',
    difficulty: 'hard',
    question: 'Hotelling T² distribution?',
    options: [
      'T² ~ (n₁n₂/(n₁+n₂))(p/n₁+n₂-p) F_{p,n₁+n₂-p}',
      'χ²_p exact',
      'Normal multivariate',
      'Wishart matrix'
    ],
    correctIndex: 0,
    explanation: 'Pooled covariance S; small sample correction.',
    realWorld: 'Multivariate control charts.',
    hint: 'F-statistic after degrees of freedom adjustment.'
  },
  {
    id: 69552,
    topic: 'harold-hotelling',
    difficulty: 'sota',
    question: 'Hotelling law of spatial competition?',
    options: [
      'Two firms locate at center of [0,1] interval (minimum differentiation)',
      'Firms at ends maximizing differentiation',
      'Uniform spatial distribution',
      'Median voter theorem'
    ],
    correctIndex: 0,
    explanation: 'Nash equilibrium: both at market center.',
    realWorld: 'Political parties, retail location.',
    hint: 'Firms crowd toward center.'
  },
  {
    id: 69553,
    topic: 'harold-hotelling',
    difficulty: 'hard',
    question: 'Hotelling lemma (economics)?',
    options: [
      '∂V(p,w)/∂p_i = -x_i(p,w) (indirect utility derivative)',
      'Shephard lemma: ∂C/∂p = input demand',
      'Roy identity',
      'Slutsky equation'
    ],
    correctIndex: 0,
    explanation: 'Marshallian demand from indirect utility gradient.',
    realWorld: 'Consumer theory duality.',
    hint: 'Negative price derivative gives demand.'
  },
  {
    id: 69554,
    topic: 'harold-hotelling',
    difficulty: 'sota',
    question: 'Hotelling resource depletion?',
    options: [
      'Optimal extraction: p(t) = c + δ ∫ p(s)e^{-δs} ds (Hotelling rule)',
      'Constant extraction rate',
      'Linear depletion',
      'Zero extraction at T'
    ],
    correctIndex: 0,
    explanation: 'Rent grows at interest rate r.',
    realWorld: 'Oil/gas reserve valuation.',
    hint: 'Scarcity rent rises with discount rate.'
  },
  {
    id: 69555,
    topic: 'harold-hotelling',
    difficulty: 'easy',
    question:
      'Hotelling’s $T^2$ statistic is the multivariate analogue of the two-sample $t$-test. For comparing mean vectors $\\mu_1,\\mu_2\\in\\mathbb{R}^p$ with pooled covariance $S_p$, which expression matches the (equal-covariance) two-sample $T^2$?',
    options: [
      '$\\displaystyle T^2=\\frac{n_1 n_2}{n_1+n_2}\\,(\\bar x_1-\\bar x_2)^\\top S_p^{-1}(\\bar x_1-\\bar x_2)$',
      '$\\displaystyle T^2=(\\bar x_1-\\bar x_2)^\\top(\\bar x_1-\\bar x_2)$ (no covariance scaling)',
      '$\\displaystyle T^2=\\sum_{j=1}^p \\frac{(\\bar x_{1j}-\\bar x_{2j})}{s_j}$ (componentwise only)',
      '$\\displaystyle T^2=\\mathrm{tr}(S_p)$ (depends only on covariance)'
    ],
    correctIndex: 0,
    explanation:
      'The key is Mahalanobis distance between sample means, scaled by $\\frac{n_1 n_2}{n_1+n_2}$ and using the pooled covariance $S_p$.',
    realWorld:
      'Used in multivariate quality control, portfolio mean comparison, and A/B testing with multiple correlated metrics.',
    hint:
      'It’s “Mahalanobis distance between means.”'
  },
  {
    id: 69556,
    topic: 'harold-hotelling',
    difficulty: 'hard',
    question:
      'Under multivariate normality and equal covariance, the two-sample Hotelling statistic converts to an $F$ distribution. Which conversion is correct for $p$ dimensions and total sample size $n=n_1+n_2$?',
    options: [
      '$\\displaystyle \\frac{n-p-1}{p(n-2)}\\,T^2 \\sim F_{p,\\,n-p-1}$',
      '$\\displaystyle T^2\\sim \\chi^2_p$ exactly for all $n$',
      '$\\displaystyle \\frac{p}{n}T^2\\sim F_{n,\\,p}$',
      '$\\displaystyle T^2\\sim \\mathcal{N}(0,1)$ after centering'
    ],
    correctIndex: 0,
    explanation:
      'For the equal-covariance two-sample test, $T^2$ is proportional to an $F$ statistic with $p$ and $n-p-1$ degrees of freedom (small-sample correction).',
    realWorld:
      'This is the basis of multivariate control charts: compare a computed $T^2$ to an $F$ threshold.',
    hint:
      'There’s a factor $\\frac{n-p-1}{p(n-2)}$ in front of $T^2$.'
  },
  {
    id: 69557,
    topic: 'harold-hotelling',
    difficulty: 'sota',
    question:
      'Hotelling’s (1929) spatial competition model places two firms on a line segment $[0,1]$ with consumers uniformly distributed and buying from the nearest firm (classic “linear city”). In the basic version, what location outcome is emphasized?',
    options: [
      'Both firms move toward the center (minimum differentiation), often converging to the median location',
      'Firms locate at opposite ends (maximum differentiation) in Nash equilibrium',
      'Firms randomize locations uniformly each day',
      'Locations are irrelevant because prices fully determine demand'
    ],
    correctIndex: 0,
    explanation:
      'With nearest-firm choice and symmetric players, each firm has an incentive to move toward the median to capture more consumers—leading to “principle of minimum differentiation” in the canonical telling.',
    realWorld:
      'Used to explain clustering of retailers and convergence of political platforms toward the center in simple models.',
    hint:
      'Think “everyone crowds the middle.”'
  },
  {
    id: 69558,
    topic: 'harold-hotelling',
    difficulty: 'hard',
    question:
      'In microeconomics, **Hotelling’s lemma** links the profit function to supply. If $\\pi(p)=\\max_{y\\in Y} p\\cdot y$ is the profit function (price-taking firm), what does the derivative give (when differentiable)?',
    options: [
      '$\\displaystyle \\frac{\\partial \\pi(p)}{\\partial p_i}=y_i(p)$ (net supply of good $i$)',
      '$\\displaystyle \\frac{\\partial \\pi(p)}{\\partial p_i}=-x_i(p)$ (Marshallian demand)',
      '$\\displaystyle \\frac{\\partial \\pi(p)}{\\partial p_i}=\\lambda_i$ (Lagrange multiplier only)',
      '$\\displaystyle \\frac\\partial{\\partial p_i}\\pi(p)=0$ always (profits don’t change with prices)'
    ],
    correctIndex: 0,
    explanation:
      'For firms, the gradient of the profit function w.r.t. prices gives the optimal supply vector (envelope theorem). The “minus demand” version is for indirect utility (Roy’s identity), not Hotelling’s lemma.',
    realWorld:
      'A core duality tool in producer theory and general equilibrium: supply responses can be derived from the profit function without re-solving the primal.',
    hint:
      'Producer side: derivative of profit = supply.'
  },
  {
    id: 69559,
    topic: 'harold-hotelling',
    difficulty: 'sota',
    question:
      'In resource economics, the **Hotelling rule** describes optimal extraction of a nonrenewable resource. In a competitive setting with marginal extraction cost $c$ and interest rate $r$, what is the classic implication for the scarcity rent $\\lambda(t)=p(t)-c$?',
    options: [
      '$\\displaystyle \\frac{d\\lambda(t)}{dt}=r\\,\\lambda(t)$ so $\\lambda(t)=\\lambda(0)e^{rt}$',
      '$\\displaystyle \\frac{d\\lambda(t)}{dt}=0$ so price stays flat over time',
      '$\\displaystyle \\lambda(t)$ must decrease at rate $r$ to encourage extraction',
      '$\\displaystyle p(t)=c$ always because competition removes all rents'
    ],
    correctIndex: 0,
    explanation:
      'The opportunity cost of extracting now vs later implies the net price (scarcity rent) should grow at the interest rate: holding the resource in the ground is like earning interest.',
    realWorld:
      'Used as a baseline for oil/gas reserve valuation and for thinking about how scarcity and discounting shape optimal depletion paths.',
    hint:
      'Rent rises like money in the bank: $\\dot\\lambda = r\\lambda$.'
  }
];
