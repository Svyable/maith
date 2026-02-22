// ── Field Registry — single source of truth for Fields ───────────────
//
// HOW TO ADD A NEW FIELD:
// 1. Add a FieldMeta entry to FIELDS below with available: false initially
// 2. Create topic packs in src/content/<field-slug>/
// 3. Register topics in TOPICS (constants.ts) with field: '<field-slug>'
// 4. Add content to src/content/index.ts allQuestions
// 5. Flip available: true when content is ready

export interface FieldMeta {
  /** Unique slug, matches the `field` property on TopicMeta */
  slug: string;
  label: string;
  emoji: string;
  description: string;
  /** Topic slugs that belong to this field */
  topics: string[];
  /** Tailwind color token used for accents */
  color: string;
  /** false = "Coming Soon" — non-interactive */
  available: boolean;
}

export const FIELDS: FieldMeta[] = [
  {
    slug: 'all',
    label: 'All Fields',
    emoji: '🌐',
    description: 'Every available topic across all fields',
    topics: [],  // empty = all topics
    color: 'primary',
    available: true,
  },
  {
    slug: 'math',
    label: 'Mathematics',
    emoji: '📐',
    description: 'Linear Algebra, Calculus, Probability, Optimization, Discrete Math, Number Theory, Real Analysis',
    topics: ['linear-algebra', 'calculus', 'probability-stats', 'optimization', 'discrete-math', 'number-theory', 'real-analysis'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'physics',
    label: 'Physics',
    emoji: '⚛️',
    description: 'Quantum Mechanics, Classical Mechanics, Electromagnetism, Thermodynamics',
    topics: ['quantum-mechanics', 'classical-mechanics', 'electromagnetism', 'thermodynamics'],
    color: 'success',
    available: true,
  },
  {
    slug: 'chemistry',
    label: 'Chemistry',
    emoji: '🧪',
    description: 'Physical, Organic, and Inorganic Chemistry',
    topics: ['physical-chemistry', 'organic-chemistry', 'inorganic-chemistry'],
    color: 'destructive',
    available: true,
  },
  {
    slug: 'biology',
    label: 'Biology',
    emoji: '🧬',
    description: 'Molecular Biology, Genetics, Ecology',
    topics: ['molecular-biology', 'genetics', 'ecology'],
    color: 'success',
    available: true,
  },
  {
    slug: 'cs',
    label: 'Computer Science',
    emoji: '💻',
    description: 'Algorithms, Machine Learning, Cryptography',
    topics: ['algorithms', 'machine-learning', 'cryptography', 'ai-models'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'earth-space',
    label: 'Earth & Space',
    emoji: '🌍',
    description: 'Astronomy, Geology, Climate Science',
    topics: ['astronomy', 'geology', 'climate-science'],
    color: 'primary',
    available: true,
  },
  {
    slug: 'engineering',
    label: 'Engineering',
    emoji: '⚙️',
    description: 'Electrical, Mechanical Engineering, Materials Science',
    topics: ['electrical-engineering', 'mechanical-engineering', 'materials-science'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'economics',
    label: 'Economics',
    emoji: '📊',
    description: 'Microeconomics, Macroeconomics, Econometrics',
    topics: ['microeconomics', 'macroeconomics', 'econometrics'],
    color: 'primary',
    available: true,
  },
  {
    slug: 'quant',
    label: 'Quant / Finance',
    emoji: '📈',
    description: 'Stochastic Calculus, Derivatives Pricing, Risk Management',
    topics: ['stochastic-calculus', 'derivatives-pricing', 'risk-management'],
    color: 'destructive',
    available: true,
  },
];

export const FIELD_MAP: Record<string, FieldMeta> = Object.fromEntries(
  FIELDS.map((f) => [f.slug, f])
);

export function getField(slug: string): FieldMeta | undefined {
  return FIELD_MAP[slug];
}

/** Return the field that owns a topic slug */
export function getFieldForTopic(topicSlug: string): FieldMeta | undefined {
  return FIELDS.find((f) => f.topics.includes(topicSlug));
}
