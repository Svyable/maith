// ── Bonafides Registry — Professional Certification Hub ───────────────
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
  /** Sub-sections for organization (e.g., ['Prelim', 'Advanced']) */
  sections?: string[];
  /** false = "Coming Soon" — non-interactive */
  available: boolean;
}

export const BONAFIDES: BonafideMeta[] = [
  // ── Finance & Accounting ────────────────────────────────
  {
    slug: 'cfa',
    label: 'CFA Program',
    emoji: '🏛️',
    description: 'Chartered Financial Analyst — Ethics, Equity Valuation, Portfolio Management (Levels I–III)',
    topics: ['cfa-ethics', 'cfa-equity', 'cfa-portfolio'],
    color: 'primary',
    sections: ['Level I', 'Level II', 'Level III'],
    available: true,
  },
  {
    slug: 'cpa',
    label: 'CPA Exam',
    emoji: '📋',
    description: 'Certified Public Accountant — Auditing, Financial Accounting, Regulation & Tax',
    topics: ['cpa-auditing', 'cpa-accounting', 'cpa-tax'],
    color: 'accent',
    sections: ['AUD', 'FAR', 'REG'],
    available: true,
  },
  // ── Actuarial ───────────────────────────────────────────
  {
    slug: 'actuarial',
    label: 'Actuarial Exams',
    emoji: '📐',
    description: 'SOA/CAS prelims to fellowship — Probability, Financial Mathematics, Loss Models',
    topics: ['actuarial-probability', 'actuarial-finmath', 'actuarial-loss'],
    color: 'success',
    sections: ['Prelim (P, FM)', 'Advanced (FAM, SRM, ALTAM, ASTAM, PA)', 'CAS (MAS-I, MAS-II)'],
    available: true,
  },
  // ── Business ────────────────────────────────────────────
  {
    slug: 'mba',
    label: 'MBA Core',
    emoji: '🎓',
    description: 'Strategy, Marketing Analytics, Operations Management',
    topics: ['mba-strategy', 'mba-marketing', 'mba-operations'],
    color: 'destructive',
    available: true,
  },
  // ── Law ─────────────────────────────────────────────────
  {
    slug: 'law',
    label: 'Law & Ethics',
    emoji: '⚖️',
    description: 'Contract Law, Intellectual Property, Regulatory Compliance',
    topics: ['contract-law', 'ip-law', 'regulatory-compliance'],
    color: 'primary',
    available: true,
  },
  // ── Medical ─────────────────────────────────────────────
  {
    slug: 'medical',
    label: 'Medical Sciences',
    emoji: '🏥',
    description: 'Anatomy & Physiology, Pathology, Biostatistics',
    topics: ['anatomy-physiology', 'pathology', 'biostatistics'],
    color: 'success',
    available: true,
  },
  // ── Data Science ────────────────────────────────────────
  {
    slug: 'data-science',
    label: 'Data Science',
    emoji: '📡',
    description: 'Data Wrangling, MLOps, Visualization',
    topics: ['data-wrangling', 'mlops', 'data-visualization'],
    color: 'accent',
    available: true,
  },
  // ── FINRA / Securities (Coming Soon) ────────────────────
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
    sections: ['Supervision', 'Compliance', 'Net Capital'],
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
