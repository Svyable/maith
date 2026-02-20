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
    description: 'Linear Algebra, Calculus, Probability, Optimization, Discrete Math',
    topics: ['linear-algebra', 'calculus', 'probability-stats', 'optimization', 'discrete-math'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'physics',
    label: 'Physics',
    emoji: '⚛️',
    description: 'Quantum Mechanics, Classical Mechanics, and more',
    topics: ['quantum-mechanics', 'classical-mechanics'],
    color: 'success',
    available: true,
  },
  {
    slug: 'quant',
    label: 'Quant / Finance',
    emoji: '📈',
    description: 'Stochastic Calculus, Derivatives Pricing, and more',
    topics: ['stochastic-calculus', 'derivatives-pricing'],
    color: 'destructive',
    available: true,
  },
  {
    slug: 'chemistry',
    label: 'Chemistry',
    emoji: '🧪',
    description: 'Physical Chemistry, Quantum Chemistry — coming soon',
    topics: ['physical-chemistry', 'quantum-chemistry'],
    color: 'primary',
    available: false,
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
