import type { Question } from '../types';

// ── Exam P: Probability ──
export const actuarialProbQuestions: Question[] = [
  {
    id: 82100,
    topic: 'actuarial-probability',
    difficulty: 'easy',
    question: 'In actuarial science, the survival function S(x) represents:',
    options: [
      'The probability that a life aged 0 survives to age x',
      'The probability of death before age x',
      'The expected number of claims per year',
      'The premium loading factor',
    ],
    correctIndex: 0,
    explanation: 'S(x) = P(T > x) = 1 - F(x), where T is the future lifetime random variable.',
    realWorld: 'Life insurers use mortality tables (essentially discrete S(x)) to price term life policies.',
    hint: 'It\'s the complement of the CDF for lifetime.',
  },
  {
    id: 82101,
    topic: 'actuarial-probability',
    difficulty: 'hard',
    question: 'The force of mortality μ(x) relates to the survival function by:',
    options: [
      'μ(x) = -S\'(x)/S(x) = -d/dx[ln S(x)]',
      'μ(x) = S(x)²',
      'μ(x) = 1/S(x)',
      'μ(x) = S(x) × f(x)',
    ],
    correctIndex: 0,
    explanation: 'The force of mortality is the instantaneous rate of mortality, analogous to the hazard rate in survival analysis.',
    realWorld: 'Gompertz and Makeham laws model μ(x) parametrically for human populations.',
    hint: 'It\'s the hazard function — the instantaneous failure rate.',
  },
  {
    id: 82102,
    topic: 'actuarial-probability',
    difficulty: 'sota',
    question: 'Lee-Carter mortality forecasting models log death rates as:',
    options: [
      'ln(m(x,t)) = a(x) + b(x)·k(t), with k(t) modeled as a random walk with drift',
      'A constant across all ages and years',
      'A purely deterministic polynomial function',
      'Independent of calendar year t',
    ],
    correctIndex: 0,
    explanation: 'Lee-Carter decomposes mortality into age pattern a(x), sensitivity b(x), and time trend k(t), enabling stochastic forecasting.',
    realWorld: 'Pension funds and Social Security use Lee-Carter variants to project longevity risk decades ahead.',
    hint: 'It\'s a factor model for mortality with age and time components.',
  },
];

// ── Exam FM: Financial Mathematics ──
export const actuarialFinMathQuestions: Question[] = [
  {
    id: 82200,
    topic: 'actuarial-finmath',
    difficulty: 'easy',
    question: 'The present value of an annuity-immediate paying 1 per period for n periods at rate i is:',
    options: [
      'a_n = (1 - (1+i)^(-n)) / i',
      'a_n = (1+i)^n',
      'a_n = n × i',
      'a_n = 1/i only',
    ],
    correctIndex: 0,
    explanation: 'This is the fundamental annuity formula, discounting n equal payments back to time 0.',
    realWorld: 'Mortgage amortization, pension valuations, and bond pricing all use this formula.',
    hint: 'Sum the geometric series of discount factors.',
  },
  {
    id: 82201,
    topic: 'actuarial-finmath',
    difficulty: 'hard',
    question: 'Redington immunization requires matching the first and second derivatives of asset and liability PV with respect to yield, meaning:',
    options: [
      'Duration match AND convexity of assets ≥ convexity of liabilities',
      'Only matching total market values',
      'Investing all assets in cash equivalents',
      'Setting duration to zero',
    ],
    correctIndex: 0,
    explanation: 'Redington immunization: match PV, match duration, and ensure asset convexity exceeds liability convexity for protection against yield shifts.',
    realWorld: 'Insurance company ALM teams apply Redington conditions to protect surplus.',
    hint: 'First derivative match = duration; second derivative = convexity.',
  },
  {
    id: 82202,
    topic: 'actuarial-finmath',
    difficulty: 'sota',
    question: 'Key Rate Duration (KRD) analysis improves on modified duration by:',
    options: [
      'Measuring sensitivity to non-parallel shifts at specific points on the yield curve',
      'Assuming the yield curve always shifts in parallel',
      'Ignoring credit spread changes',
      'Only applying to floating-rate instruments',
    ],
    correctIndex: 0,
    explanation: 'KRDs decompose interest rate risk by maturity bucket, capturing twist and butterfly yield curve movements.',
    realWorld: 'Actuaries use KRDs to stress-test insurance portfolios against realistic non-parallel curve shifts.',
    hint: 'Real yield curves don\'t move in parallel — KRDs capture that.',
  },
];

// ── Loss Models ──
export const actuarialLossQuestions: Question[] = [
  {
    id: 82300,
    topic: 'actuarial-loss',
    difficulty: 'easy',
    question: 'In the collective risk model, aggregate claims S = X₁ + X₂ + ... + X_N where N is:',
    options: [
      'A random variable representing the number of claims (frequency)',
      'Always fixed and known in advance',
      'The policy premium amount',
      'The deductible threshold',
    ],
    correctIndex: 0,
    explanation: 'The collective model separates frequency (N, often Poisson) from severity (Xᵢ), with S being their compound sum.',
    realWorld: 'P&C insurers model aggregate losses to set reserves and determine reinsurance needs.',
    hint: 'Frequency × severity = aggregate loss.',
  },
  {
    id: 82301,
    topic: 'actuarial-loss',
    difficulty: 'hard',
    question: 'The Panjer recursion efficiently computes the aggregate loss distribution when frequency follows:',
    options: [
      'The (a, b, 0) class: Poisson, Negative Binomial, or Binomial',
      'Any continuous distribution',
      'Only the normal distribution',
      'Deterministic sequences only',
    ],
    correctIndex: 0,
    explanation: 'Panjer recursion exploits the recursive property P(n)=(a+b/n)P(n-1) shared by Poisson, NB, and Binomial.',
    realWorld: 'Actuarial software uses Panjer recursion for efficient aggregate loss computation in pricing and reserving.',
    hint: 'The (a,b,0) class has a specific probability recursion property.',
  },
  {
    id: 82302,
    topic: 'actuarial-loss',
    difficulty: 'sota',
    question: 'Extreme Value Theory (EVT) models tail risk using the Generalized Pareto Distribution because:',
    options: [
      'The Pickands-Balkema-de Haan theorem shows exceedances over high thresholds converge to GPD',
      'All loss distributions are exactly GPD',
      'GPD has no parameters to estimate',
      'EVT only applies to normally distributed data',
    ],
    correctIndex: 0,
    explanation: 'EVT provides a theoretical basis for extrapolating beyond observed data: tail exceedances follow GPD regardless of the parent distribution.',
    realWorld: 'Reinsurers and catastrophe modelers use EVT-GPD for pricing extreme events (hurricanes, earthquakes).',
    hint: 'It\'s about what happens in the tail, regardless of the body of the distribution.',
  },
];
