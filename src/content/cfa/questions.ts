import type { Question } from '../types';

// ── CFA Level 1: Ethics & Quantitative Methods ──
export const cfaEthicsQuestions: Question[] = [
  {
    id: 80100,
    topic: 'cfa-ethics',
    difficulty: 'easy',
    question: 'Under the CFA Institute Code of Ethics, members must place the interests of:',
    options: [
      'Clients above their own personal interests',
      'Their employer above all other parties',
      'Regulatory bodies above clients',
      'Shareholders above bondholders always',
    ],
    correctIndex: 0,
    explanation: 'The Code requires members to place client interests first, acting with loyalty, prudence, and care.',
    realWorld: 'CFA charterholders sign an annual attestation to uphold these ethical standards.',
    hint: 'Client duty is paramount in fiduciary relationships.',
  },
  {
    id: 80101,
    topic: 'cfa-ethics',
    difficulty: 'hard',
    question: 'Under Standard III(B) Fair Dealing, a portfolio manager who receives material nonpublic information should:',
    options: [
      'Not trade until the information becomes public',
      'Share with select institutional clients only',
      'Trade immediately to benefit clients',
      'Report to the SEC but continue trading',
    ],
    correctIndex: 0,
    explanation: 'Standard III(B) combined with insider trading laws prohibits acting on material nonpublic information until it is publicly disseminated.',
    realWorld: 'Mosaic theory allows combining non-material info, but material MNPI triggers a trading ban.',
    hint: 'Think about insider trading regulations.',
  },
  {
    id: 80102,
    topic: 'cfa-ethics',
    difficulty: 'sota',
    question: 'The CFA Institute\'s Global Investment Performance Standards (GIPS) require composite construction based on:',
    options: [
      'Similar investment mandate, objective, or strategy',
      'Alphabetical client name ordering',
      'Portfolio size from largest to smallest',
      'Random sampling of 10% of accounts',
    ],
    correctIndex: 0,
    explanation: 'GIPS composites must group portfolios with similar strategies to prevent cherry-picking of high-performing accounts.',
    realWorld: 'GIPS compliance is a global standard for asset managers claiming performance track records.',
    hint: 'Composites prevent selection bias in performance reporting.',
  },
];

// ── CFA Level 2: Equity Valuation ──
export const cfaEquityQuestions: Question[] = [
  {
    id: 80200,
    topic: 'cfa-equity',
    difficulty: 'easy',
    question: 'The Gordon Growth Model values a stock as D₁/(r - g), where g represents:',
    options: [
      'The constant dividend growth rate',
      'The risk-free rate',
      'The stock\'s beta',
      'The earnings yield',
    ],
    correctIndex: 0,
    explanation: 'The Gordon Growth Model assumes dividends grow at a constant rate g forever, giving P₀ = D₁/(r-g).',
    realWorld: 'Utilities and mature companies with stable dividends are commonly valued with this model.',
    hint: 'It\'s the perpetual growth rate of dividends.',
  },
  {
    id: 80201,
    topic: 'cfa-equity',
    difficulty: 'hard',
    question: 'Residual Income (RI) valuation differs from DDM because RI:',
    options: [
      'Values the excess return above the cost of equity applied to book value',
      'Ignores the cost of capital entirely',
      'Only works for non-dividend-paying stocks',
      'Uses free cash flow instead of earnings',
    ],
    correctIndex: 0,
    explanation: 'RI = NI - (r_e × BV), capturing economic profit. Stock value = BV₀ + PV(future RIs).',
    realWorld: 'RI models are preferred for valuing financial institutions where FCF is hard to define.',
    hint: 'It\'s about earning more than your cost of equity capital.',
  },
  {
    id: 80202,
    topic: 'cfa-equity',
    difficulty: 'sota',
    question: 'In a multi-stage DDM with an H-model, the "H" factor represents:',
    options: [
      'The half-life of the transition from high growth to stable growth',
      'The Herfindahl index of market concentration',
      'The hedge ratio for the portfolio',
      'The historical average dividend yield',
    ],
    correctIndex: 0,
    explanation: 'The H-model assumes linear decline in growth rate over 2H years: V₀ = D₀(1+g_L)/(r-g_L) + D₀·H·(g_S-g_L)/(r-g_L).',
    realWorld: 'Analysts use the H-model for tech companies expected to see growth decelerate gradually.',
    hint: 'H is the half-life of the growth transition period.',
  },
];

// ── CFA Level 3: Portfolio Management ──
export const cfaPortfolioQuestions: Question[] = [
  {
    id: 80300,
    topic: 'cfa-portfolio',
    difficulty: 'easy',
    question: 'An Investment Policy Statement (IPS) should specify all of the following EXCEPT:',
    options: [
      'Specific stock ticker symbols to buy',
      'Return objectives',
      'Risk tolerance',
      'Time horizon and liquidity needs',
    ],
    correctIndex: 0,
    explanation: 'An IPS sets broad guidelines (objectives, constraints) but does not prescribe specific securities.',
    realWorld: 'Wealth managers draft IPS documents before constructing any portfolio.',
    hint: 'The IPS is about policy, not individual security selection.',
  },
  {
    id: 80301,
    topic: 'cfa-portfolio',
    difficulty: 'hard',
    question: 'In a core-satellite portfolio strategy, the "core" typically consists of:',
    options: [
      'Low-cost passive index funds capturing broad market beta',
      'High-frequency trading algorithms',
      'Concentrated positions in 3-5 stocks',
      'Leveraged derivatives only',
    ],
    correctIndex: 0,
    explanation: 'Core-satellite uses passive core for market exposure and active satellites seeking alpha, optimizing cost and tracking error.',
    realWorld: 'Many endowments and sovereign wealth funds employ core-satellite allocation.',
    hint: 'The core provides beta cheaply; satellites hunt for alpha.',
  },
  {
    id: 80302,
    topic: 'cfa-portfolio',
    difficulty: 'sota',
    question: 'Liability-Driven Investing (LDI) for pension funds primarily uses:',
    options: [
      'Duration-matched fixed income to hedge present value of liabilities',
      'Maximum equity allocation to outgrow liabilities',
      'Short-selling stocks to reduce risk',
      'Cash-only holdings for liquidity',
    ],
    correctIndex: 0,
    explanation: 'LDI matches asset duration/convexity to liability duration, immunizing funded status against interest rate changes.',
    realWorld: 'UK and Dutch pension funds widely adopted LDI; the 2022 UK gilt crisis exposed leverage risks in LDI structures.',
    hint: 'The goal is hedging liability interest rate sensitivity, not maximizing returns.',
  },
];
