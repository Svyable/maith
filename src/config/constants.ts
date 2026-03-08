// ============================================================
// Constants & Configuration — single source of truth
// ============================================================

export type Difficulty = 'EASY' | 'HARD' | 'SOTA';
export type QuestionDifficulty = 'easy' | 'hard' | 'sota';
export type TopicSlug = string;

// ── Difficulty ↔ QuestionDifficulty mapping ──────────────────
export function toQuestionDifficulty(d: Difficulty): QuestionDifficulty {
  return d.toLowerCase() as QuestionDifficulty;
}

export function toDifficulty(qd: QuestionDifficulty): Difficulty {
  return qd.toUpperCase() as Difficulty;
}

export function highestDifficulty(ds: Difficulty[]): Difficulty {
  if (ds.includes('SOTA')) return 'SOTA';
  if (ds.includes('HARD')) return 'HARD';
  return 'EASY';
}

// ── Scoring ──────────────────────────────────────────────────
export const BASE_POINTS: Record<Difficulty, number> = {
  EASY: 10,
  HARD: 20,
  SOTA: 35,
};

/** multiplier = 1 + streak * STREAK_STEP, capped at STREAK_CAP */
export const STREAK_STEP = 0.05;
export const STREAK_CAP = 2.0;

// ── Universal timer (seconds per question, regardless of difficulty) ─
export const QUESTION_TIME_SECONDS = 30;

// ── Default quiz question cap ───────────────────────────────
export const DEFAULT_QUIZ_CAP = 10;

// ── Difficulty meta ──────────────────────────────────────────
export interface DifficultyMeta {
  slug: Difficulty;
  label: string;
  tag: string;        // short badge text
  /** i18n key for the translated tag (e.g. "difficulty.easy") */
  tagKey: string;
  /** i18n key for the translated description */
  descKey: string;
  emoji: string;
  description: string;
  pointsPerCorrect: number;
  color: 'success' | 'accent' | 'destructive';
}

export const DIFFICULTIES: DifficultyMeta[] = [
  {
    slug: 'EASY',
    label: 'Easy',
    tag: 'EASY',
    tagKey: 'difficulty.easy',
    descKey: 'difficulty.easyDesc',
    emoji: '🌱',
    description: 'Fundamentals — gentle scoring',
    pointsPerCorrect: 10,
    color: 'success',
  },
  {
    slug: 'HARD',
    label: 'Hard',
    tag: 'HARD',
    tagKey: 'difficulty.hard',
    descKey: 'difficulty.hardDesc',
    emoji: '⚡',
    description: 'Competitive — double points',
    pointsPerCorrect: 20,
    color: 'accent',
  },
  {
    slug: 'SOTA',
    label: 'State of the Art',
    tag: 'SOTA',
    tagKey: 'difficulty.sota',
    descKey: 'difficulty.sotaDesc',
    emoji: '🔥',
    description: 'Frontier — max reward',
    pointsPerCorrect: 35,
    color: 'destructive',
  },
];

export function getDifficultyMeta(d: Difficulty): DifficultyMeta {
  return DIFFICULTIES.find((m) => m.slug === d)!;
}

// ── Topic registry ───────────────────────────────────────────
export interface TopicMeta {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  /** Which field this topic belongs to — matches FieldMeta.slug */
  field: string;
}

export const TOPICS: TopicMeta[] = [
  // ── Mathematics ──────────────────────────────────────────
  { slug: 'linear-algebra',    label: 'Linear Algebra',       emoji: '📐', description: 'Vectors, matrices, eigenvalues, SVD',                field: 'math'    },
  { slug: 'calculus',          label: 'Calculus',             emoji: '∫',  description: 'Derivatives, integrals, gradients, Hessians',        field: 'math'    },
  { slug: 'probability-stats', label: 'Probability & Stats',  emoji: '🎲', description: "Bayes, distributions, hypothesis testing",           field: 'math'    },
  { slug: 'optimization',      label: 'Optimization',         emoji: '⛰️', description: 'Gradient descent, convexity, regularization',        field: 'math'    },
  { slug: 'discrete-math',     label: 'Discrete & Modern',    emoji: '🔗', description: 'Complexity, graphs, tensors, attention',             field: 'math'    },
  { slug: 'number-theory',     label: 'Number Theory',        emoji: '🔢', description: 'Primes, modular arithmetic, Diophantine equations',  field: 'math'    },
  { slug: 'real-analysis',     label: 'Real Analysis',        emoji: '∞',  description: 'Convergence, measure theory, Lebesgue integrals',   field: 'math'    },
  { slug: 'topology',          label: 'Topology',             emoji: '🍩', description: 'Homeomorphisms, Euler characteristic, TDA',          field: 'math'    },
  { slug: 'differential-equations', label: 'Differential Equations', emoji: '📈', description: 'ODEs, PDEs, Laplace transforms, Neural ODEs',       field: 'math'    },
  { slug: 'abstract-algebra',  label: 'Abstract Algebra',     emoji: '💠', description: 'Groups, rings, fields, Galois theory',                field: 'math'    },
  { slug: 'combinatorics',     label: 'Combinatorics',        emoji: '🎯', description: 'Counting, Ramsey, chromatic polynomials, PFR',        field: 'math'    },
  { slug: 'category-theory',   label: 'Category Theory',      emoji: '🔀', description: 'Functors, Yoneda, monads, ∞-categories, HoTT',       field: 'math'    },
  { slug: 'ergodic-theory',    label: 'Ergodic Theory',       emoji: '🌀', description: 'Mixing, Lyapunov, Ratner, NSE turbulence',            field: 'math'    },
  { slug: 'algebraic-geometry', label: 'Algebraic Geometry',  emoji: '🔷', description: 'Schemes, sheaves, MMP, perfectoid spaces',            field: 'math'    },
  { slug: 'measure-theory',   label: 'Measure Theory',        emoji: '📏', description: 'Lebesgue, Radon-Nikodym, optimal transport',          field: 'math'    },
  { slug: 'complex-analysis', label: 'Complex Analysis',      emoji: '🌀', description: 'Holomorphic functions, residues, conformal maps',        field: 'math'    },
  { slug: 'functional-analysis', label: 'Functional Analysis', emoji: '🔲', description: 'Banach & Hilbert spaces, spectral theory, operators',   field: 'math'    },
  { slug: 'graph-theory',     label: 'Graph Theory',          emoji: '🕸️', description: 'Chromatic polynomials, Ramsey, planarity, minors',       field: 'math'    },
  { slug: 'differential-geometry', label: 'Differential Geometry', emoji: '🌐', description: 'Curvature, geodesics, Ricci flow, fiber bundles',  field: 'math'    },
  { slug: 'numerical-methods', label: 'Numerical Methods',    emoji: '🔢', description: 'Newton-Raphson, CG, FMM, PINNs, spectral methods',     field: 'math'    },
  // ── Physics ──────────────────────────────────────────────
  { slug: 'quantum-mechanics',   label: 'Quantum Mechanics',    emoji: '⚛️', description: 'Wave functions, operators, Schrödinger, uncertainty', field: 'physics' },
  { slug: 'classical-mechanics', label: 'Classical Mechanics',  emoji: '🍎', description: 'Newtonian dynamics, Lagrangians, Hamiltonians',      field: 'physics' },
  { slug: 'electromagnetism',    label: 'Electromagnetism',     emoji: '⚡', description: 'Maxwell, Faraday, electromagnetic waves',            field: 'physics' },
  { slug: 'thermodynamics',      label: 'Thermodynamics',       emoji: '🌡️', description: 'Entropy, statistical mechanics, heat engines',       field: 'physics' },
  { slug: 'nuclear-physics',     label: 'Nuclear Physics',      emoji: '☢️', description: 'Fission, fusion, E=mc², radioactive decay',         field: 'physics' },
  { slug: 'fluid-dynamics',     label: 'Fluid Dynamics',       emoji: '🌊', description: 'Navier-Stokes, turbulence, Reynolds number, CFD',    field: 'physics' },
  { slug: 'optics',             label: 'Optics',               emoji: '🔦', description: 'Snell\'s law, diffraction, metamaterials, adaptive optics', field: 'physics' },
  { slug: 'relativity',         label: 'Relativity',           emoji: '🕐', description: 'Special & general relativity, spacetime, black holes',  field: 'physics' },
  { slug: 'statistical-physics', label: 'Statistical Physics', emoji: '📊', description: 'Ensembles, partition functions, phase transitions, RG',   field: 'physics' },
  { slug: 'plasma-physics',     label: 'Plasma Physics',       emoji: '🌐', description: 'MHD, fusion, Alfvén waves, Debye shielding',            field: 'physics' },
  { slug: 'condensed-matter',   label: 'Condensed Matter',     emoji: '🔷', description: 'Band theory, superconductivity, topological phases',     field: 'physics' },
  { slug: 'nonlinear-dynamics', label: 'Nonlinear Dynamics',   emoji: '🦋', description: 'Chaos, bifurcations, strange attractors, fractals',      field: 'physics' },
  { slug: 'quantum-field-theory', label: 'Quantum Field Theory', emoji: '🌀', description: 'QED, QCD, Higgs mechanism, renormalization',          field: 'physics' },
  { slug: 'many-body-physics',  label: 'Many-Body Physics',    emoji: '🔮', description: 'DFT, tensor networks, Hubbard model, quasiparticles',   field: 'physics' },
  { slug: 'quantum-gravity',    label: 'Quantum Gravity',      emoji: '🕳️', description: 'Planck scale, AdS/CFT, holography, black hole info',    field: 'physics' },
  // ── Chemistry ──────────────────────────────────────────────
  { slug: 'physical-chemistry',  label: 'Physical Chemistry',   emoji: '⚗️', description: 'Thermodynamics, kinetics, quantum chemistry',       field: 'chemistry' },
  { slug: 'organic-chemistry',   label: 'Organic Chemistry',    emoji: '🧪', description: 'Reactions, stereochemistry, synthesis',              field: 'chemistry' },
  { slug: 'inorganic-chemistry', label: 'Inorganic Chemistry',  emoji: '💎', description: 'Coordination, crystal field theory, organometallics', field: 'chemistry' },
  // ── Biology & Medicine ──────────────────────────────────────
  { slug: 'molecular-biology',   label: 'Molecular Biology',    emoji: '🧬', description: 'DNA, RNA, protein synthesis, CRISPR',               field: 'biology' },
  { slug: 'genetics',            label: 'Genetics',             emoji: '🧫', description: 'Mendel, GWAS, epigenetics, heredity',               field: 'biology' },
  { slug: 'ecology',             label: 'Ecology',              emoji: '🌿', description: 'Ecosystems, food webs, biodiversity',               field: 'biology' },
  { slug: 'neuroscience',        label: 'Neuroscience',         emoji: '🧠', description: 'Neurons, synapses, connectomics, Hebbian learning', field: 'biology' },
  { slug: 'pharmacology',        label: 'Pharmacology',         emoji: '💊', description: 'Drug-receptor binding, ADME, AI drug discovery',    field: 'biology' },
  // ── Computer Science ──────────────────────────────────────
  { slug: 'algorithms',          label: 'Algorithms',           emoji: '🔍', description: 'Sorting, searching, complexity, divide & conquer',  field: 'cs' },
  { slug: 'machine-learning',    label: 'Machine Learning',     emoji: '🤖', description: 'Supervised, unsupervised, transformers, bias-variance', field: 'cs' },
  { slug: 'cryptography',        label: 'Cryptography',         emoji: '🔐', description: 'RSA, zero-knowledge proofs, post-quantum',          field: 'cs' },
  { slug: 'ai-models',           label: 'AI Models',            emoji: '🏗️', description: 'AlexNet, GPT, AlphaGo, DeepSeek, CALM, Diffusion',  field: 'cs' },
  { slug: 'quantum-computing',   label: 'Quantum Computing',    emoji: '💠', description: 'Qubits, entanglement, error correction, Shor',      field: 'cs' },
  { slug: 'cybersecurity',       label: 'Cybersecurity',        emoji: '🛡️', description: 'ZK proofs, post-quantum crypto, attack vectors',    field: 'cs' },
  { slug: 'distributed-systems', label: 'Distributed Systems',  emoji: '🌐', description: 'CAP theorem, consensus, CRDTs, Raft, Spanner',        field: 'cs' },
  { slug: 'operating-systems',   label: 'Operating Systems',    emoji: '🖥️', description: 'Scheduling, virtual memory, eBPF, io_uring',          field: 'cs' },
  { slug: 'compiler-theory',    label: 'Compiler Theory',      emoji: '⚙️', description: 'Parsing, SSA, LLVM, MLIR, tensor compilers',           field: 'cs' },
  { slug: 'formal-verification', label: 'Formal Verification', emoji: '✅', description: 'Lean 4, Coq, model checking, SMT solvers',             field: 'cs' },
  { slug: 'information-theory', label: 'Information Theory',   emoji: '📊', description: 'Shannon entropy, KL divergence, channel capacity',      field: 'cs' },
  // ── Earth & Space ──────────────────────────────────────────
  { slug: 'astronomy',           label: 'Astronomy',            emoji: '🔭', description: 'Stars, galaxies, cosmology, CMB',                   field: 'earth-space' },
  { slug: 'geology',             label: 'Geology',              emoji: '🪨', description: 'Rocks, tectonics, geochronology',                   field: 'earth-space' },
  { slug: 'climate-science',     label: 'Climate Science',      emoji: '🌡️', description: 'Greenhouse effect, AMOC, climate models',           field: 'earth-space' },
  { slug: 'meteorology',         label: 'Meteorology',          emoji: '🌦️', description: 'Weather prediction, Coriolis, AI forecasting',      field: 'earth-space' },
  { slug: 'oceanography',        label: 'Oceanography',         emoji: '🌊', description: 'Thermohaline circulation, acidification, AUVs',     field: 'earth-space' },
  { slug: 'environmental-science', label: 'Environmental Science', emoji: '♻️', description: 'Greenhouse effect, feedbacks, AI climate models', field: 'earth-space' },
  { slug: 'astrophysics',          label: 'Astrophysics',          emoji: '🌟', description: 'Stellar evolution, neutron stars, black holes, JWST',  field: 'earth-space' },
  // ── Engineering ──────────────────────────────────────────
  // Legacy slugs (backwards compat)
  { slug: 'electrical-engineering',  label: 'Electrical Engineering',  emoji: '🔌', description: 'Circuits, signals, control theory',           field: 'engineering' },
  { slug: 'mechanical-engineering',  label: 'Mechanical Engineering',  emoji: '⚙️', description: 'Stress, thermodynamics, FEA',                 field: 'engineering' },
  { slug: 'robotics',               label: 'Robotics',                emoji: '🤖', description: 'PID control, SLAM, foundation models',        field: 'engineering' },
  { slug: 'aerospace',              label: 'Aerospace',               emoji: '🚀', description: 'Rocket equation, orbital mechanics, reusability', field: 'engineering' },
  { slug: 'control-theory',        label: 'Control Theory',          emoji: '🎛️', description: 'PID, LQR, MPC, H∞, Nyquist stability',       field: 'engineering' },
  // New granular engineering sub-domains
  { slug: 'circuits-electronics',    label: 'Circuits & Electronics',  emoji: '🔌', description: 'KVL/KCL, op-amps, transistors, analog/digital design', field: 'engineering' },
  { slug: 'signal-processing',      label: 'Signal Processing',       emoji: '📡', description: 'FFT, wavelets, compressed sensing, Kalman',    field: 'engineering' },
  { slug: 'control-systems',        label: 'Control Systems',         emoji: '🎛️', description: 'PID, LQR, MPC, H∞, Nyquist stability',       field: 'engineering' },
  { slug: 'communications-coding',  label: 'Communications & Coding', emoji: '📶', description: 'Shannon capacity, LDPC, turbo codes, OFDM',   field: 'engineering' },
  { slug: 'power-systems',          label: 'Power Systems',           emoji: '⚡', description: 'Load flow, stability, HVDC, smart grids',      field: 'engineering' },
  { slug: 'semiconductor-engineering', label: 'Semiconductor Engineering', emoji: '💾', description: 'MOSFET, FinFET, GAA, lithography, DTCO', field: 'engineering' },
  { slug: 'solid-mechanics',        label: 'Solid Mechanics',         emoji: '🏗️', description: 'Stress tensors, FEA, fatigue, fracture mechanics', field: 'engineering' },
  { slug: 'thermofluids',           label: 'Thermofluids',            emoji: '🌡️', description: 'Heat transfer, Navier-Stokes, Rankine cycles', field: 'engineering' },
  { slug: 'robotics-mechatronics',  label: 'Robotics & Mechatronics', emoji: '🦾', description: 'DH parameters, SLAM, impedance control',      field: 'engineering' },
  { slug: 'reaction-engineering',   label: 'Reaction Engineering',    emoji: '⚗️', description: 'CSTR, PFR, Thiele modulus, Arrhenius kinetics', field: 'engineering' },
  { slug: 'transport-phenomena',    label: 'Transport Phenomena',     emoji: '🌊', description: 'Mass/heat/momentum transfer, Fick, Fourier',   field: 'engineering' },
  { slug: 'process-design',         label: 'Process Design',          emoji: '🏭', description: 'Pinch analysis, PFD/P&ID, Aspen Plus, safety', field: 'engineering' },
  { slug: 'aerodynamics',           label: 'Aerodynamics',            emoji: '✈️', description: 'Lift/drag, Prandtl, CFD, supersonic flow',      field: 'engineering' },
  { slug: 'orbital-mechanics',      label: 'Orbital Mechanics',       emoji: '🛰️', description: 'Hohmann, Lambert, restricted 3-body, TLE',    field: 'engineering' },
  { slug: 'nuclear-engineering',    label: 'Nuclear Engineering',     emoji: '☢️', description: 'Neutron transport, criticality, Lawson criterion', field: 'engineering' },
  { slug: 'materials-science',      label: 'Materials Science',       emoji: '🔩', description: 'Crystallography, dislocations, alloys, nanomaterials', field: 'engineering' },
  { slug: 'biomedical-engineering',  label: 'Biomedical Engineering', emoji: '🫀', description: 'Biomechanics, imaging, tissue engineering, prosthetics', field: 'engineering' },
  { slug: 'environmental-engineering', label: 'Environmental Engineering', emoji: '♻️', description: 'Wastewater, air quality, lifecycle assessment', field: 'engineering' },
  { slug: 'structural-engineering', label: 'Structural Engineering',  emoji: '🏛️', description: 'Beam theory, buckling, seismic design, FEA',  field: 'engineering' },
  { slug: 'audio-engineering',      label: 'Audio Engineering',       emoji: '🎧', description: 'Nyquist, FFT, neural codecs, DSP',            field: 'engineering' },
  // ── Finance (Economics + Quant merged) ─────────────────────
  { slug: 'microeconomics',      label: 'Microeconomics',       emoji: '📉', description: 'Supply & demand, game theory, welfare',             field: 'finance' },
  { slug: 'macroeconomics',      label: 'Macroeconomics',       emoji: '🏦', description: 'GDP, monetary policy, Phillips curve',              field: 'finance' },
  { slug: 'econometrics',        label: 'Econometrics',         emoji: '📊', description: 'OLS, IV, difference-in-differences',                field: 'finance' },
  { slug: 'game-theory',         label: 'Game Theory',          emoji: '♟️', description: 'Nash equilibrium, minimax, mechanism design',       field: 'finance' },
  { slug: 'behavioral-economics', label: 'Behavioral Economics', emoji: '🧠', description: 'Prospect theory, nudges, loss aversion, biases',    field: 'finance' },
  { slug: 'development-economics', label: 'Development Economics', emoji: '🌍', description: 'RCTs, institutions, poverty traps, HDI',           field: 'finance' },
  { slug: 'stochastic-calculus',  label: 'Stochastic Calculus',   emoji: '📊', description: "Itô's lemma, Brownian motion, SDEs",            field: 'finance' },
  { slug: 'derivatives-pricing',  label: 'Derivatives Pricing',   emoji: '💹', description: 'Black-Scholes, Greeks, risk-neutral pricing',    field: 'finance' },
  { slug: 'risk-management',      label: 'Risk Management',       emoji: '🛡️', description: 'VaR, Expected Shortfall, FRTB',                 field: 'finance' },
  { slug: 'portfolio-theory',     label: 'Portfolio Theory',       emoji: '📈', description: 'Markowitz, CAPM, Black-Litterman',              field: 'finance' },
  { slug: 'fixed-income',         label: 'Fixed Income',           emoji: '🏦', description: 'Duration, convexity, yield curves, HJM',        field: 'finance' },
  { slug: 'algo-trading',         label: 'Algorithmic Trading',    emoji: '⚡', description: 'VWAP, Almgren-Chriss, RL execution',            field: 'finance' },
  { slug: 'market-microstructure', label: 'Market Microstructure',  emoji: '🔬', description: 'Kyle\'s lambda, order books, Hawkes processes',   field: 'finance' },
  { slug: 'prediction-markets',   label: 'Prediction Markets',     emoji: '🎯', description: 'Kalshi, LMSR, binary contracts, A-S for event markets', field: 'finance' },
  { slug: 'credit-risk',          label: 'Credit Risk',            emoji: '💳', description: 'Merton, CDS, CVA, IFRS 9, XGBoost scoring',      field: 'finance' },
  // ── CFA Program ──────────────────────────────────────
  { slug: 'cfa-ethics',           label: 'CFA Ethics & Standards', emoji: '📜', description: 'Code of Ethics, GIPS, fiduciary duty',          field: 'cfa'     },
  { slug: 'cfa-equity',           label: 'CFA Equity Valuation',   emoji: '📊', description: 'DDM, residual income, H-model',                field: 'cfa'     },
  { slug: 'cfa-portfolio',        label: 'CFA Portfolio Mgmt',     emoji: '💼', description: 'IPS, core-satellite, LDI',                     field: 'cfa'     },
  // ── CPA Exam ──────────────────────────────────────
  { slug: 'cpa-auditing',         label: 'Auditing (AUD)',         emoji: '🔍', description: 'Audit opinions, ISA 240, continuous auditing',  field: 'cpa'     },
  { slug: 'cpa-accounting',       label: 'Financial Accounting',   emoji: '📒', description: 'ASC 606, deferred tax, lease accounting',       field: 'cpa'     },
  { slug: 'cpa-tax',              label: 'Regulation & Tax',       emoji: '🏛️', description: 'NOLs, 1031 exchanges, global minimum tax',     field: 'cpa'     },
  // ── Actuarial Exams ──────────────────────────────────────
  { slug: 'actuarial-probability', label: 'Actuarial Probability', emoji: '📐', description: 'Survival functions, force of mortality, Lee-Carter', field: 'actuarial' },
  { slug: 'actuarial-finmath',    label: 'Financial Mathematics',  emoji: '💰', description: 'Annuities, immunization, key rate duration',    field: 'actuarial' },
  { slug: 'actuarial-loss',       label: 'Loss Models',            emoji: '📉', description: 'Collective risk, Panjer, EVT-GPD',              field: 'actuarial' },
  // ── MBA Core ──────────────────────────────────────
  { slug: 'mba-strategy',         label: 'Corporate Strategy',     emoji: '♟️', description: 'Porter, Blue Ocean, platform business models',  field: 'mba'     },
  { slug: 'mba-marketing',        label: 'Marketing Analytics',    emoji: '📣', description: 'CLV, attribution, marketing mix modeling',      field: 'mba'     },
  { slug: 'mba-operations',       label: 'Operations Management',  emoji: '🏭', description: "Bullwhip effect, Little's Law, digital twins", field: 'mba'     },
  // ── Law & Ethics ──────────────────────────────────────
  { slug: 'contract-law',         label: 'Contract Law',           emoji: '📝', description: 'Offer, acceptance, promissory estoppel',        field: 'law'     },
  { slug: 'ip-law',               label: 'Intellectual Property',  emoji: '©️', description: 'Patents, copyright, fair use, AI authorship',   field: 'law'     },
  { slug: 'regulatory-compliance', label: 'Regulatory Compliance', emoji: '⚖️', description: 'GDPR, Basel III, EU AI Act',                   field: 'law'     },
  // ── Medical Sciences ──────────────────────────────────────
  { slug: 'anatomy-physiology',   label: 'Anatomy & Physiology',   emoji: '🫀', description: 'SA node, Frank-Starling, organ-on-chip',       field: 'medical' },
  { slug: 'pathology',            label: 'Pathology',              emoji: '🔬', description: 'Inflammation, Warburg effect, liquid biopsy',   field: 'medical' },
  { slug: 'biostatistics',        label: 'Biostatistics',          emoji: '📊', description: 'P-values, ITT analysis, adaptive trials',       field: 'medical' },
  // ── Data Science ──────────────────────────────────────
  { slug: 'data-wrangling',       label: 'Data Wrangling',         emoji: '🧹', description: 'Encoding, target leakage, feature stores',      field: 'data-science' },
  { slug: 'mlops',                label: 'MLOps',                  emoji: '🔄', description: 'Model versioning, data drift, LLMOps',          field: 'data-science' },
  { slug: 'data-visualization',   label: 'Data Visualization',     emoji: '📊', description: 'Tufte, pre-attentive attributes, Grammar of Graphics', field: 'data-science' },
  // ── Human Sciences ──────────────────────────────────────
  { slug: 'psychology',           label: 'Psychology',            emoji: '🧠', description: 'Kahneman, cognitive biases, replication crisis',  field: 'human-sciences' },
  { slug: 'linguistics',          label: 'Linguistics',           emoji: '🗣️', description: 'Chomsky, distributional semantics, LLMs',        field: 'human-sciences' },
  { slug: 'philosophy-of-science', label: 'Philosophy of Science', emoji: '🤔', description: 'Popper, Kuhn, Chinese Room, falsifiability',    field: 'human-sciences' },
  // ── 2024 SOTA ──────────────────────────────────────────────
  { slug: 'sota-2024',            label: '2024 SOTA',              emoji: '⚡', description: 'GPT-4, Llama 2/3, Mixtral, DPO, DALL-E 3, Gemini 1.0',          field: 'sota-2024' },
  // ── 2025 SOTA ──────────────────────────────────────────────
  { slug: 'sota-2025',            label: '2025 SOTA',              emoji: '🧠', description: 'CALM, DeepSeek-R1, Speculative Decoding, Data Shapley, SAM 2',  field: 'sota-2025' },
  // ── 2026 SOTA ──────────────────────────────────────────────
  { slug: 'sota-2026',            label: '2026 SOTA',              emoji: '🚀', description: 'AgentSkiller, ALMA, LLaDA2.1, InftyThink+, Block Diffusion',    field: 'sota-2026' },
];

export const TOPIC_MAP: Record<string, TopicMeta> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t])
);

// ── Quiz defaults ────────────────────────────────────────────
export const DEFAULT_DIFFICULTIES: Difficulty[] = ['EASY', 'HARD', 'SOTA'];
export const CONTENT_VERSION = '2.0.0';
