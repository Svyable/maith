// ── Bonafides Registry — Math & Finance Certification Hub ─────────────

export interface BonafideMeta {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  topics: string[];
  color: string;
  sections?: string[];
  available: boolean;
}

export const BONAFIDES: BonafideMeta[] = [
  // ═══ CFA PROGRAM ═══
  { slug: 'cfa-level-1', label: 'CFA Level I', emoji: '🏛️', description: 'Ethics, Quantitative Methods, Economics, Financial Reporting — the foundation', topics: ['cfa-level-1'], color: 'primary', sections: ['Ethics & Standards', 'Quantitative Methods', 'Economics', 'FRA'], available: true },
  { slug: 'cfa-level-2', label: 'CFA Level II', emoji: '🏛️', description: 'Equity Valuation, Fixed Income, Derivatives, Financial Reporting Analysis', topics: ['cfa-level-2'], color: 'primary', sections: ['Equity Valuation', 'Fixed Income', 'Derivatives', 'Alt Investments'], available: true },
  { slug: 'cfa-level-3', label: 'CFA Level III', emoji: '🏛️', description: 'Portfolio Management, Wealth Planning, Asset Allocation, Risk Management', topics: ['cfa-level-3'], color: 'primary', sections: ['Portfolio Construction', 'Wealth Planning', 'Risk Mgmt', 'Trading'], available: true },

  // ═══ SOA ACTUARIAL EXAMS ═══
  { slug: 'actuarial-exam-p', label: 'Exam P — Probability', emoji: '📐', description: 'SOA/CAS Exam 1: Probability distributions, survival models, multivariate probability', topics: ['actuarial-exam-p'], color: 'accent', available: true },
  { slug: 'actuarial-exam-fm', label: 'Exam FM — Financial Math', emoji: '📐', description: 'SOA/CAS Exam 2: Interest theory, annuities, bonds, immunization, derivatives intro', topics: ['actuarial-exam-fm'], color: 'accent', available: true },
  { slug: 'actuarial-exam-fam', label: 'Exam FAM — Fundamentals', emoji: '📐', description: 'SOA Exam FAM: Life contingencies, loss models, credibility, aggregate losses', topics: ['actuarial-exam-fam'], color: 'accent', available: true },
  { slug: 'actuarial-exam-srm', label: 'Exam SRM — Statistics', emoji: '📐', description: 'SOA Exam SRM: Linear models, GLMs, time series, decision trees, cluster analysis', topics: ['actuarial-exam-srm'], color: 'accent', sections: ['Regression', 'GLMs', 'Time Series', 'Machine Learning'], available: true },
  { slug: 'actuarial-exam-altam', label: 'Exam ALTAM — Advanced Long-Term', emoji: '📐', description: 'SOA Exam ALTAM: Multi-state models, pension math, advanced reserving', topics: ['actuarial-exam-altam'], color: 'accent', available: true },
  { slug: 'actuarial-exam-astam', label: 'Exam ASTAM — Advanced Short-Term', emoji: '📐', description: 'SOA Exam ASTAM: Ratemaking, credibility, reinsurance, ruin theory', topics: ['actuarial-exam-astam'], color: 'accent', available: true },
  { slug: 'actuarial-exam-pa', label: 'Exam PA — Predictive Analytics', emoji: '📐', description: 'SOA Exam PA: R programming, predictive modeling, business problem framing', topics: ['actuarial-exam-pa'], color: 'accent', available: true },

  // ═══ CAS ACTUARIAL EXAMS ═══
  { slug: 'actuarial-mas-i', label: 'CAS MAS-I — Modern Stats I', emoji: '📐', description: 'CAS MAS-I: Probability models, regression, time series for P&C actuaries', topics: ['actuarial-mas-i'], color: 'success', available: true },
  { slug: 'actuarial-mas-ii', label: 'CAS MAS-II — Modern Stats II', emoji: '📐', description: 'CAS MAS-II: Credibility, GLMs, Bayesian estimation, advanced loss modeling', topics: ['actuarial-mas-ii'], color: 'success', available: true },

  // ═══ QUANT FINANCE ═══
  { slug: 'frm', label: 'FRM — Financial Risk Manager', emoji: '⚡', description: 'GARP FRM: Market risk, credit risk, operational risk, Basel frameworks', topics: ['frm'], color: 'destructive', sections: ['Part I: Tools', 'Part II: Practice'], available: true },
  { slug: 'cqf', label: 'CQF — Certificate in Quant Finance', emoji: '🧮', description: 'Wilmott CQF: Stochastic calculus, derivatives pricing, numerical methods, ML in finance', topics: ['cqf'], color: 'accent', sections: ['Core Modules', 'Advanced Electives'], available: true },
  { slug: 'caia', label: 'CAIA — Alt Investments', emoji: '💎', description: 'CAIA Charter: Hedge funds, PE, real assets, structured products, risk management', topics: ['caia'], color: 'primary', sections: ['Level I: Fundamentals', 'Level II: Advanced'], available: true },

  // ═══ FINRA / SECURITIES ═══
  { slug: 'sie', label: 'SIE Exam', emoji: '🏦', description: 'Securities Industry Essentials — market structure, products, regulations', topics: ['sie'], color: 'primary', sections: ['Market Structure', 'Products & Risks', 'Regulatory Framework'], available: true },
  { slug: 'series-7', label: 'Series 7', emoji: '📊', description: 'FINRA General Securities Representative — equities, debt, options, packaged securities', topics: ['series-7'], color: 'accent', sections: ['Equities', 'Debt Securities', 'Options', 'Packaged Securities'], available: true },
  { slug: 'series-63', label: 'Series 63', emoji: '🏛️', description: 'NASAA Uniform Securities Agent — state securities law & regulation', topics: ['series-63'], color: 'primary', available: true },
  { slug: 'series-65', label: 'Series 65', emoji: '💼', description: 'NASAA Uniform Investment Adviser — advisory law, economics, analysis', topics: ['series-65'], color: 'success', available: true },
  { slug: 'series-66', label: 'Series 66', emoji: '📑', description: 'NASAA Combined State Law — merges Series 63 + 65 content', topics: ['series-66'], color: 'destructive', available: true },
  { slug: 'series-24', label: 'Series 24', emoji: '🏢', description: 'FINRA General Securities Principal — supervision, compliance, net capital', topics: ['series-24'], color: 'accent', available: true },
  { slug: 'series-3', label: 'Series 3', emoji: '📈', description: 'NFA National Commodities Futures — futures, options on futures, regulations', topics: ['series-3'], color: 'primary', available: true },
  { slug: 'series-52', label: 'Series 52', emoji: '🏗️', description: 'MSRB Municipal Securities Representative — municipal bonds, underwriting, trading', topics: ['series-52'], color: 'success', available: true },

  // ═══ UNIVERSITY COURSEWORK ═══
  { slug: 'ucb-eecs126', label: 'UCB EECS 126', emoji: '📐', description: 'Probability & Random Processes — Markov chains, PageRank, queueing theory (Berkeley)', topics: ['ucb-eecs126'], color: 'accent', sections: ['Basic Probability', 'Markov Chains', 'PageRank', 'Queueing Theory', 'Continuous Probability'], available: true },
  { slug: 'cs50', label: 'Harvard CS50x', emoji: '💻', description: 'Introduction to Computer Science — C, algorithms, memory, data structures, SQL, web (Harvard)', topics: ['cs50'], color: 'success', sections: ['C Basics', 'Algorithms', 'Memory', 'Data Structures', 'SQL', 'Web'], available: true },
];

export const BONAFIDE_MAP: Record<string, BonafideMeta> = Object.fromEntries(
  BONAFIDES.map((b) => [b.slug, b]),
);

export function getBonafide(slug: string): BonafideMeta | undefined {
  return BONAFIDE_MAP[slug];
}
