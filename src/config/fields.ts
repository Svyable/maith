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
    topics: [],
    color: 'primary',
    available: true,
  },
  {
    slug: 'math',
    label: 'Mathematics',
    emoji: '📐',
    description: 'Linear Algebra, Calculus, Probability, Optimization, Discrete Math, Number Theory, Real Analysis, Topology',
    topics: ['linear-algebra', 'calculus', 'probability-stats', 'optimization', 'discrete-math', 'number-theory', 'real-analysis', 'topology', 'differential-equations', 'abstract-algebra', 'combinatorics', 'category-theory', 'ergodic-theory', 'algebraic-geometry', 'measure-theory', 'complex-analysis', 'functional-analysis', 'graph-theory', 'differential-geometry', 'numerical-methods'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'physics',
    label: 'Physics',
    emoji: '⚛️',
    description: 'QM, Classical, E&M, Thermo, Nuclear, Fluids, Optics, Relativity, StatPhys, Plasma, Condensed Matter, Chaos, QFT, Many-Body, Quantum Gravity',
    topics: ['quantum-mechanics', 'classical-mechanics', 'electromagnetism', 'thermodynamics', 'nuclear-physics', 'fluid-dynamics', 'optics', 'relativity', 'statistical-physics', 'plasma-physics', 'condensed-matter', 'nonlinear-dynamics', 'quantum-field-theory', 'many-body-physics', 'quantum-gravity'],
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
    label: 'Biology & Medicine',
    emoji: '🧬',
    description: 'Molecular Biology, Genetics, Ecology, Neuroscience, Pharmacology',
    topics: ['molecular-biology', 'genetics', 'ecology', 'neuroscience', 'pharmacology'],
    color: 'success',
    available: true,
  },
  {
    slug: 'cs',
    label: 'Computer Science',
    emoji: '💻',
    description: 'Algorithms, Machine Learning, Cryptography, AI Models, Quantum Computing, Cybersecurity',
    topics: ['algorithms', 'machine-learning', 'cryptography', 'ai-models', 'quantum-computing', 'cybersecurity', 'distributed-systems', 'operating-systems', 'compiler-theory', 'formal-verification', 'information-theory'],
    color: 'accent',
    available: true,
  },
  {
    slug: 'earth-space',
    label: 'Earth & Space',
    emoji: '🌍',
    description: 'Astronomy, Geology, Climate Science, Meteorology, Oceanography, Environmental Science',
    topics: ['astronomy', 'geology', 'climate-science', 'meteorology', 'oceanography', 'environmental-science', 'astrophysics'],
    color: 'primary',
    available: true,
  },
  {
    slug: 'engineering',
    label: 'Engineering',
    emoji: '⚙️',
    description: 'Electrical, Mechanical, Materials, Robotics, Aerospace, Chemical, Nuclear, Biomedical, Environmental Engineering',
    topics: [
      // Electrical & Electronics
      'circuits-electronics', 'signal-processing', 'control-systems', 'communications-coding',
      'power-systems', 'semiconductor-engineering',
      // Mechanical & Robotics
      'solid-mechanics', 'thermofluids', 'robotics-mechatronics',
      // Chemical & Process
      'reaction-engineering', 'transport-phenomena', 'process-design',
      // Aerospace & Nuclear
      'aerodynamics', 'orbital-mechanics', 'nuclear-engineering',
      // Cross-disciplinary
      'materials-science', 'biomedical-engineering', 'environmental-engineering',
      'structural-engineering', 'audio-engineering',
      // Legacy slugs for backwards compat
      'electrical-engineering', 'mechanical-engineering', 'robotics', 'aerospace', 'control-theory',
    ],
    color: 'accent',
    available: true,
  },
  {
    slug: 'economics',
    label: 'Economics',
    emoji: '📊',
    description: 'Microeconomics, Macroeconomics, Econometrics, Game Theory',
    topics: ['microeconomics', 'macroeconomics', 'econometrics', 'game-theory', 'behavioral-economics', 'development-economics'],
    color: 'primary',
    available: true,
  },
  {
    slug: 'quant',
    label: 'Quant / Finance',
    emoji: '📈',
    description: 'Stochastic Calculus, Derivatives, Risk, Portfolio Theory, Fixed Income, Algo Trading',
    topics: ['stochastic-calculus', 'derivatives-pricing', 'risk-management', 'portfolio-theory', 'fixed-income', 'algo-trading', 'market-microstructure', 'credit-risk', 'prediction-markets'],
    color: 'destructive',
    available: true,
  },
  // ── Bonafides (CFA, CPA, Actuarial, MBA, Law, Medical, Data Science)
  // moved to src/config/bonafides.ts and the /bonafides route.
  {
    slug: 'sota-2024',
    label: '2024 SOTA',
    emoji: '⚡',
    description: 'GPT-4, Llama 2/3, Mixtral, DPO, Constitutional AI, DALL-E 3, Gemini 1.0',
    topics: ['sota-2024'],
    color: 'primary',
    available: true,
  },
  {
    slug: 'sota-2025',
    label: '2025 SOTA',
    emoji: '🧠',
    description: 'Frontier AI papers: CALM, DeepSeek-R1, Speculative Decoding, Data Shapley, SAM 2',
    topics: ['sota-2025'],
    color: 'destructive',
    available: true,
  },
  {
    slug: 'sota-2026',
    label: '2026 SOTA',
    emoji: '🚀',
    description: 'Cutting-edge 2026: AgentSkiller, ALMA, LLaDA2.1, InftyThink+, Block Diffusion',
    topics: ['sota-2026'],
    color: 'accent',
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
