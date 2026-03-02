// ── Bonafides Registry — Math & Finance Certification Hub ─────────────
//
// HOW TO ADD A NEW CREDENTIAL:
// 1. Add a BonafideMeta entry below
// 2. Create src/content/<slug>/questions.ts + index.ts
// 3. Import & spread in src/content/bonafides/index.ts
// 4. Set available: true when content is ready

export interface BonafideMeta {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  /** Topic slugs that belong to this credential */
  topics: string[];
  /** Tailwind color token */
  color: string;
  /** Sub-sections for organization */
  sections?: string[];
  /** false = "Coming Soon" — non-interactive */
  available: boolean;
}

export const BONAFIDES: BonafideMeta[] = [
  // ═══════════════════════════════════════════════════════════════
  // CFA PROGRAM — split by exam level
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'cfa-level-1',
    label: 'CFA Level I',
    emoji: '🏛️',
    description: 'Ethics, Quantitative Methods, Economics, Financial Reporting — the foundation',
    topics: ['cfa-level-1'],
    color: 'primary',
    sections: ['Ethics & Standards', 'Quantitative Methods', 'Economics', 'FRA'],
    available: true,
  },
  {
    slug: 'cfa-level-2',
    label: 'CFA Level II',
    emoji: '🏛️',
    description: 'Equity Valuation, Fixed Income, Derivatives, Financial Reporting Analysis',
    topics: ['cfa-level-2'],
    color: 'primary',
    sections: ['Equity Valuation', 'Fixed Income', 'Derivatives', 'Alt Investments'],
    available: true,
  },
  {
    slug: 'cfa-level-3',
    label: 'CFA Level III',
    emoji: '🏛️',
    description: 'Portfolio Management, Wealth Planning, Asset Allocation, Risk Management',
    topics: ['cfa-level-3'],
    color: 'primary',
    sections: ['Portfolio Construction', 'Wealth Planning', 'Risk Mgmt', 'Trading'],
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // ACTUARIAL — SOA Exams (split by individual exam)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'actuarial-exam-p',
    label: 'Exam P — Probability',
    emoji: '📐',
    description: 'SOA/CAS Exam 1: Probability distributions, survival models, multivariate probability',
    topics: ['actuarial-exam-p'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'actuarial-exam-fm',
    label: 'Exam FM — Financial Math',
    emoji: '📐',
    description: 'SOA/CAS Exam 2: Interest theory, annuities, bonds, immunization, derivatives intro',
    topics: ['actuarial-exam-fm'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'actuarial-exam-fam',
    label: 'Exam FAM — Fundamentals',
    emoji: '📐',
    description: 'SOA Exam FAM: Life contingencies, loss models, credibility, aggregate losses',
    topics: ['actuarial-exam-fam'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'actuarial-exam-srm',
    label: 'Exam SRM — Statistics',
    emoji: '📐',
    description: 'SOA Exam SRM: Linear models, GLMs, time series, decision trees, cluster analysis',
    topics: ['actuarial-exam-srm'],
    color: 'accent',
    sections: ['Regression', 'GLMs', 'Time Series', 'Machine Learning'],
    available: false,
  },
  {
    slug: 'actuarial-exam-altam',
    label: 'Exam ALTAM — Advanced Long-Term',
    emoji: '📐',
    description: 'SOA Exam ALTAM: Multi-state models, pension math, advanced reserving',
    topics: ['actuarial-exam-altam'],
    color: 'accent',
    available: false,
  },
  {
    slug: 'actuarial-exam-astam',
    label: 'Exam ASTAM — Advanced Short-Term',
    emoji: '📐',
    description: 'SOA Exam ASTAM: Ratemaking, credibility, reinsurance, ruin theory',
    topics: ['actuarial-exam-astam'],
    color: 'accent',
    available: false,
  },
  {
    slug: 'actuarial-exam-pa',
    label: 'Exam PA — Predictive Analytics',
    emoji: '📐',
    description: 'SOA Exam PA: R programming, predictive modeling, business problem framing',
    topics: ['actuarial-exam-pa'],
    color: 'accent',
    available: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // ACTUARIAL — CAS Exams
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'actuarial-mas-i',
    label: 'CAS MAS-I — Modern Stats I',
    emoji: '📐',
    description: 'CAS MAS-I: Probability models, regression, time series for P&C actuaries',
    topics: ['actuarial-mas-i'],
    color: 'success',
    available: false,
  },
  {
    slug: 'actuarial-mas-ii',
    label: 'CAS MAS-II — Modern Stats II',
    emoji: '📐',
    description: 'CAS MAS-II: Credibility, GLMs, Bayesian estimation, advanced loss modeling',
    topics: ['actuarial-mas-ii'],
    color: 'success',
    available: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // QUANT FINANCE CERTIFICATIONS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'frm',
    label: 'FRM — Financial Risk Manager',
    emoji: '⚡',
    description: 'GARP FRM: Market risk, credit risk, operational risk, Basel frameworks',
    topics: ['frm-part-1', 'frm-part-2'],
    color: 'destructive',
    sections: ['Part I: Tools', 'Part II: Practice'],
    available: false,
  },
  {
    slug: 'cqf',
    label: 'CQF — Certificate in Quant Finance',
    emoji: '🧮',
    description: 'Wilmott CQF: Stochastic calculus, derivatives pricing, numerical methods, ML in finance',
    topics: ['cqf-core', 'cqf-advanced'],
    color: 'accent',
    sections: ['Core Modules', 'Advanced Electives'],
    available: false,
  },
  {
    slug: 'caia',
    label: 'CAIA — Alt Investments',
    emoji: '💎',
    description: 'CAIA Charter: Hedge funds, PE, real assets, structured products, risk management',
    topics: ['caia-level-1', 'caia-level-2'],
    color: 'primary',
    sections: ['Level I: Fundamentals', 'Level II: Advanced'],
    available: false,
  },

  // ═══════════════════════════════════════════════════════════════
  // FINRA / SECURITIES
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'sie',
    label: 'SIE Exam',
    emoji: '🏦',
    description: 'Securities Industry Essentials — market structure, products, regulations',
    topics: ['sie-market-structure', 'sie-products', 'sie-regulations'],
    color: 'primary',
    sections: ['Market Structure', 'Products & Risks', 'Regulatory Framework'],
    available: false,
  },
  {
    slug: 'series-7',
    label: 'Series 7',
    emoji: '📊',
    description: 'FINRA General Securities Representative — equities, debt, options, packaged securities',
    topics: ['s7-equities', 's7-debt', 's7-options', 's7-packaged'],
    color: 'accent',
    sections: ['Equities', 'Debt Securities', 'Options', 'Packaged Securities'],
    available: false,
  },
  {
    slug: 'series-63',
    label: 'Series 63',
    emoji: '🏛️',
    description: 'NASAA Uniform Securities Agent — state securities law & regulation',
    topics: ['s63-state-law', 's63-registration', 's63-remedies'],
    color: 'primary',
    available: false,
  },
  {
    slug: 'series-65',
    label: 'Series 65',
    emoji: '💼',
    description: 'NASAA Uniform Investment Adviser — advisory law, economics, analysis',
    topics: ['s65-advisory-law', 's65-economics', 's65-analysis'],
    color: 'success',
    available: false,
  },
  {
    slug: 'series-66',
    label: 'Series 66',
    emoji: '📑',
    description: 'NASAA Combined State Law — merges Series 63 + 65 content',
    topics: ['s66-combined-law', 's66-advisory', 's66-state-regs'],
    color: 'destructive',
    available: false,
  },
  {
    slug: 'series-24',
    label: 'Series 24',
    emoji: '🏢',
    description: 'FINRA General Securities Principal — supervision, compliance, net capital',
    topics: ['s24-supervision', 's24-compliance', 's24-capital'],
    color: 'accent',
    available: false,
  },
  {
    slug: 'series-3',
    label: 'Series 3',
    emoji: '📈',
    description: 'NFA National Commodities Futures — futures, options on futures, regulations',
    topics: ['s3-futures', 's3-options-futures', 's3-nfa-regs'],
    color: 'primary',
    available: false,
  },
  {
    slug: 'series-52',
    label: 'Series 52',
    emoji: '🏗️',
    description: 'MSRB Municipal Securities Representative — municipal bonds, underwriting, trading',
    topics: ['s52-muni-bonds', 's52-underwriting', 's52-trading'],
    color: 'success',
    available: false,
  },
];

export const BONAFIDE_MAP: Record<string, BonafideMeta> = Object.fromEntries(
  BONAFIDES.map((b) => [b.slug, b]),
);

export function getBonafide(slug: string): BonafideMeta | undefined {
  return BONAFIDE_MAP[slug];
}
