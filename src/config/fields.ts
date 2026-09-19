import { STANDARD_TOPICS } from './content-registry';

// ── Field Registry — single source of truth for field presentation ────
//
// Field topic membership is derived exclusively from the canonical topic
// registry. Never hand-maintain topic arrays here.

export interface FieldMeta {
  /** Unique slug, matches the `field` property on TopicMeta */
  slug: string;
  label: string;
  emoji: string;
  description: string;
  /** Topic slugs derived from STANDARD_TOPICS */
  topics: string[];
  /** Tailwind color token used for accents */
  color: string;
  /** false = "Coming Soon" — non-interactive */
  available: boolean;
}

type FieldDefinition = Omit<FieldMeta, 'topics'>;

const FIELD_DEFINITIONS: FieldDefinition[] = [
  {
    slug: 'all',
    label: 'All Fields',
    emoji: '🌐',
    description: 'Every available topic across all fields',
    color: 'primary',
    available: true,
  },
  {
    slug: 'sota-2024',
    label: '2024 SOTA',
    emoji: '⚡',
    description: 'GPT-4, Llama 2/3, Mixtral, DPO, Constitutional AI, DALL-E 3, Gemini 1.0',
    color: 'primary',
    available: true,
  },
  {
    slug: 'sota-2025',
    label: '2025 SOTA',
    emoji: '🧠',
    description: 'Frontier AI papers: CALM, DeepSeek-R1, Speculative Decoding, Data Shapley, SAM 2',
    color: 'destructive',
    available: true,
  },
  {
    slug: 'sota-2026',
    label: '2026 SOTA',
    emoji: '🚀',
    description: 'Cutting-edge 2026: AgentSkiller, ALMA, LLaDA2.1, InftyThink+, Block Diffusion',
    color: 'accent',
    available: true,
  },
  {
    slug: 'math',
    label: 'Mathematics',
    emoji: '📐',
    description: 'Linear Algebra, Calculus, Probability, Optimization, Discrete Math, Number Theory, Real Analysis, Topology',
    color: 'accent',
    available: true,
  },
  {
    slug: 'physics',
    label: 'Physics',
    emoji: '⚛️',
    description: 'QM, Classical, E&M, Thermo, Nuclear, Fluids, Optics, Relativity, StatPhys, Plasma, Condensed Matter, Chaos, QFT, Many-Body, Quantum Gravity',
    color: 'success',
    available: true,
  },
  {
    slug: 'chemistry',
    label: 'Chemistry',
    emoji: '🧪',
    description: 'Physical, Organic, and Inorganic Chemistry',
    color: 'destructive',
    available: true,
  },
  {
    slug: 'biology',
    label: 'Biology & Medicine',
    emoji: '🧬',
    description: 'Molecular Biology, Genetics, Ecology, Neuroscience, Pharmacology',
    color: 'success',
    available: true,
  },
  {
    slug: 'cs',
    label: 'Computer Science',
    emoji: '💻',
    description: 'Algorithms, Machine Learning, Cryptography, AI Models, Quantum Computing, Cybersecurity',
    color: 'accent',
    available: true,
  },
  {
    slug: 'earth-space',
    label: 'Earth & Space',
    emoji: '🌍',
    description: 'Astronomy, Geology, Climate Science, Meteorology, Oceanography, Environmental Science',
    color: 'primary',
    available: true,
  },
  {
    slug: 'engineering',
    label: 'Engineering',
    emoji: '⚙️',
    description: 'Electrical, Mechanical, Materials, Robotics, Aerospace, Chemical, Nuclear, Biomedical, Environmental Engineering',
    color: 'accent',
    available: true,
  },
  {
    slug: 'human-sciences',
    label: 'Human Sciences',
    emoji: '🧠',
    description: 'Psychology, linguistics, and philosophy of science',
    color: 'primary',
    available: true,
  },
  {
    slug: 'finance',
    label: 'Finance',
    emoji: '📈',
    description: 'Micro/Macroeconomics, Econometrics, Game Theory, Stochastic Calculus, Derivatives, Risk, Portfolio Theory, Algo Trading',
    color: 'destructive',
    available: true,
  },
];

export const FIELDS: FieldMeta[] = FIELD_DEFINITIONS.map((field) => ({
  ...field,
  topics: field.slug === 'all'
    ? []
    : STANDARD_TOPICS.filter((topic) => topic.field === field.slug).map((topic) => topic.slug),
}));

export const FIELD_MAP: Record<string, FieldMeta> = Object.fromEntries(
  FIELDS.map((field) => [field.slug, field]),
);

export function getField(slug: string): FieldMeta | undefined {
  return FIELD_MAP[slug];
}

/** Return the field that owns a topic slug */
export function getFieldForTopic(topicSlug: string): FieldMeta | undefined {
  return FIELDS.find((field) => field.topics.includes(topicSlug));
}
