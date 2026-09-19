// Canonical lightweight content registry. Full content stays in source packs.
import { BONAFIDES } from './bonafides';

export type ContentKind = 'standard-quiz' | 'bonafide' | 'thinker' | 'vault' | 'glossary' | 'formula' | 'editorial' | 'special';

export interface TopicMeta {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  field: string;
}

export interface ContentTopicMeta extends TopicMeta {
  kind: ContentKind;
  available: boolean;
  loaderGroups: readonly string[];
  canonicalSlug?: string;
}

export interface QuestionPackMeta {
  group: string;
  module: string;
  exports: readonly string[];
  kind: 'standard-quiz' | 'vault';
  includeInStandardQuiz: boolean;
}

const LEGACY_TOPIC_DEFINITIONS: TopicMeta[] = [
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
  { slug: 'ai-substrates',      label: 'AI Math Substrates',   emoji: '🧮', description: 'Rate-distortion KV cache, maximal coupling, curvature-aware quantization', field: 'cs' },
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



const TOPIC_LOADER_GROUPS: Record<string, readonly string[]> = {
  "linear-algebra": [
    "linear-algebra"
  ],
  "calculus": [
    "calculus"
  ],
  "probability-stats": [
    "probability-stats"
  ],
  "optimization": [
    "optimization"
  ],
  "discrete-math": [
    "discrete-math"
  ],
  "classical-mechanics": [
    "physics"
  ],
  "quantum-mechanics": [
    "physics",
    "vault"
  ],
  "algo-trading": [
    "quant"
  ],
  "derivatives-pricing": [
    "quant"
  ],
  "fixed-income": [
    "quant"
  ],
  "portfolio-theory": [
    "quant"
  ],
  "stochastic-calculus": [
    "quant"
  ],
  "inorganic-chemistry": [
    "chemistry"
  ],
  "organic-chemistry": [
    "chemistry"
  ],
  "physical-chemistry": [
    "chemistry"
  ],
  "ecology": [
    "biology"
  ],
  "genetics": [
    "biology"
  ],
  "molecular-biology": [
    "biology"
  ],
  "ai-models": [
    "computer-science"
  ],
  "algorithms": [
    "computer-science"
  ],
  "cryptography": [
    "computer-science",
    "vault"
  ],
  "machine-learning": [
    "computer-science"
  ],
  "astronomy": [
    "earth-space"
  ],
  "climate-science": [
    "earth-space"
  ],
  "geology": [
    "earth-space"
  ],
  "astrophysics": [
    "astrophysics"
  ],
  "aerodynamics": [
    "engineering"
  ],
  "audio-engineering": [
    "engineering",
    "audio-engineering"
  ],
  "biomedical-engineering": [
    "engineering"
  ],
  "circuits-electronics": [
    "engineering"
  ],
  "communications-coding": [
    "engineering"
  ],
  "control-systems": [
    "engineering"
  ],
  "environmental-engineering": [
    "engineering"
  ],
  "materials-science": [
    "engineering"
  ],
  "nuclear-engineering": [
    "engineering"
  ],
  "orbital-mechanics": [
    "engineering"
  ],
  "power-systems": [
    "engineering"
  ],
  "process-design": [
    "engineering"
  ],
  "reaction-engineering": [
    "engineering"
  ],
  "robotics-mechatronics": [
    "engineering"
  ],
  "semiconductor-engineering": [
    "engineering"
  ],
  "signal-processing": [
    "engineering",
    "signal-processing"
  ],
  "solid-mechanics": [
    "engineering"
  ],
  "structural-engineering": [
    "engineering"
  ],
  "thermofluids": [
    "engineering"
  ],
  "transport-phenomena": [
    "engineering"
  ],
  "econometrics": [
    "economics"
  ],
  "macroeconomics": [
    "economics"
  ],
  "microeconomics": [
    "economics"
  ],
  "electromagnetism": [
    "new-topics"
  ],
  "number-theory": [
    "new-topics",
    "vault"
  ],
  "real-analysis": [
    "new-topics"
  ],
  "risk-management": [
    "new-topics"
  ],
  "thermodynamics": [
    "thermodynamics"
  ],
  "quantum-computing": [
    "quantum-computing",
    "vault"
  ],
  "game-theory": [
    "game-theory"
  ],
  "robotics": [
    "robotics"
  ],
  "meteorology": [
    "meteorology"
  ],
  "neuroscience": [
    "neuroscience",
    "vault"
  ],
  "linguistics": [
    "linguistics"
  ],
  "oceanography": [
    "oceanography"
  ],
  "cybersecurity": [
    "cybersecurity",
    "vault"
  ],
  "aerospace": [
    "aerospace"
  ],
  "nuclear-physics": [
    "nuclear-physics",
    "vault"
  ],
  "fluid-dynamics": [
    "fluid-dynamics",
    "vault"
  ],
  "philosophy-of-science": [
    "philosophy-of-science"
  ],
  "topology": [
    "topology"
  ],
  "psychology": [
    "psychology"
  ],
  "environmental-science": [
    "environmental-science"
  ],
  "pharmacology": [
    "pharmacology"
  ],
  "differential-equations": [
    "differential-equations",
    "vault"
  ],
  "abstract-algebra": [
    "abstract-algebra"
  ],
  "optics": [
    "optics"
  ],
  "relativity": [
    "relativity",
    "vault"
  ],
  "statistical-physics": [
    "statistical-physics"
  ],
  "plasma-physics": [
    "plasma-physics"
  ],
  "condensed-matter": [
    "condensed-matter"
  ],
  "nonlinear-dynamics": [
    "nonlinear-dynamics"
  ],
  "quantum-field-theory": [
    "quantum-field-theory"
  ],
  "many-body-physics": [
    "many-body-physics"
  ],
  "quantum-gravity": [
    "quantum-gravity",
    "vault"
  ],
  "distributed-systems": [
    "distributed-systems"
  ],
  "operating-systems": [
    "operating-systems"
  ],
  "sota-2024": [
    "sota-2024"
  ],
  "sota-2025": [
    "sota-2025"
  ],
  "sota-2026": [
    "sota-2026"
  ],
  "combinatorics": [
    "combinatorics"
  ],
  "category-theory": [
    "category-theory"
  ],
  "ergodic-theory": [
    "ergodic-theory"
  ],
  "algebraic-geometry": [
    "algebraic-geometry"
  ],
  "measure-theory": [
    "measure-theory"
  ],
  "compiler-theory": [
    "compiler-theory"
  ],
  "control-theory": [
    "control-theory"
  ],
  "behavioral-economics": [
    "behavioral-economics"
  ],
  "development-economics": [
    "development-economics"
  ],
  "market-microstructure": [
    "market-microstructure"
  ],
  "credit-risk": [
    "credit-risk"
  ],
  "prediction-markets": [
    "prediction-markets"
  ],
  "formal-verification": [
    "formal-verification"
  ],
  "ai-substrates": [
    "ai-substrates"
  ],
  "information-theory": [
    "information-theory",
    "vault"
  ],
  "complex-analysis": [
    "complex-analysis"
  ],
  "functional-analysis": [
    "functional-analysis"
  ],
  "graph-theory": [
    "graph-theory"
  ],
  "differential-geometry": [
    "differential-geometry"
  ],
  "numerical-methods": [
    "numerical-methods"
  ],
  "engineering": [
    "vault"
  ],
  "string-theory": [
    "vault"
  ]
};

const LEGACY_ALIAS_TARGETS: Record<string, string> = {
  'electrical-engineering': 'circuits-electronics',
  'mechanical-engineering': 'solid-mechanics',
};

const LEGACY_PROFESSIONAL_FIELDS = new Set(["actuarial", "cfa", "cpa", "data-science", "law", "mba", "medical"]);

export const STANDARD_TOPICS: ContentTopicMeta[] = LEGACY_TOPIC_DEFINITIONS.map((topic) => ({
  ...topic,
  kind: LEGACY_PROFESSIONAL_FIELDS.has(topic.field) ? 'bonafide' : 'standard-quiz',
  available: Boolean(TOPIC_LOADER_GROUPS[topic.slug]),
  loaderGroups: TOPIC_LOADER_GROUPS[topic.slug] ?? [],
  ...(LEGACY_ALIAS_TARGETS[topic.slug] ? { canonicalSlug: LEGACY_ALIAS_TARGETS[topic.slug] } : {}),
}));

// Question-bearing slugs retained in the standard pool but intentionally hidden from selectors.
export const HIDDEN_STANDARD_TOPICS: ContentTopicMeta[] = [
  { slug: 'engineering', label: 'Engineering', emoji: '⚙️', description: 'Cross-disciplinary engineering questions', field: 'engineering', kind: 'special', available: false, loaderGroups: TOPIC_LOADER_GROUPS.engineering ?? [] },
  { slug: 'string-theory', label: 'String Theory', emoji: '🧵', description: 'String theory and holographic physics', field: 'physics', kind: 'special', available: false, loaderGroups: TOPIC_LOADER_GROUPS['string-theory'] ?? [] },
];

export const BONAFIDE_TOPICS: ContentTopicMeta[] = BONAFIDES.flatMap((credential) =>
  credential.topics.map((slug) => ({
    slug,
    label: credential.label,
    emoji: credential.emoji,
    description: credential.description,
    field: 'bonafide',
    kind: 'bonafide' as const,
    available: credential.available,
    loaderGroups: ['bonafides'],
  })),
);

export const CONTENT_TOPICS: ContentTopicMeta[] = [...STANDARD_TOPICS, ...HIDDEN_STANDARD_TOPICS, ...BONAFIDE_TOPICS];
export const CONTENT_TOPIC_MAP: Record<string, ContentTopicMeta> = Object.fromEntries(CONTENT_TOPICS.map((topic) => [topic.slug, topic]));

/** Selector-compatible topics. Unavailable legacy/special entries remain addressable through CONTENT_TOPIC_MAP. */
export const TOPICS: TopicMeta[] = STANDARD_TOPICS.filter((topic) => topic.available && topic.kind === 'standard-quiz');
export const TOPIC_MAP: Record<string, TopicMeta> = Object.fromEntries(TOPICS.map((topic) => [topic.slug, topic]));

export const LEGACY_TOPIC_ALIASES = LEGACY_ALIAS_TARGETS;

export const QUESTION_PACKS: readonly QuestionPackMeta[] = [
  {
    "group": "linear-algebra",
    "module": "./linear-algebra",
    "exports": [
      "linearAlgebraQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "calculus",
    "module": "./calculus",
    "exports": [
      "calculusQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "probability-stats",
    "module": "./probability-stats",
    "exports": [
      "probabilityStatsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "optimization",
    "module": "./optimization",
    "exports": [
      "optimizationQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "discrete-math",
    "module": "./discrete-math",
    "exports": [
      "discreteMathQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "physics",
    "module": "./physics",
    "exports": [
      "physicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quant",
    "module": "./quant",
    "exports": [
      "quantQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "chemistry",
    "module": "./chemistry",
    "exports": [
      "chemistryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "biology",
    "module": "./biology",
    "exports": [
      "biologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "computer-science",
    "module": "./computer-science",
    "exports": [
      "computerScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "earth-space",
    "module": "./earth-space",
    "exports": [
      "earthSpaceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "astrophysics",
    "module": "./astrophysics",
    "exports": [
      "astrophysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "engineering",
    "module": "./engineering",
    "exports": [
      "engineeringQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "economics",
    "module": "./economics",
    "exports": [
      "economicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "new-topics",
    "module": "./new-topics",
    "exports": [
      "electromagnetismQuestions",
      "numberTheoryQuestions",
      "realAnalysisQuestions",
      "riskManagementQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "thermodynamics",
    "module": "./thermodynamics",
    "exports": [
      "thermodynamicsTopicQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-computing",
    "module": "./quantum-computing",
    "exports": [
      "quantumComputingQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "game-theory",
    "module": "./game-theory",
    "exports": [
      "gameTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "robotics",
    "module": "./robotics",
    "exports": [
      "roboticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "meteorology",
    "module": "./meteorology",
    "exports": [
      "meteorologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "audio-engineering",
    "module": "./audio-engineering",
    "exports": [
      "audioEngineeringQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "neuroscience",
    "module": "./neuroscience",
    "exports": [
      "neuroscienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "linguistics",
    "module": "./linguistics",
    "exports": [
      "linguisticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "oceanography",
    "module": "./oceanography",
    "exports": [
      "oceanographyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "cybersecurity",
    "module": "./cybersecurity",
    "exports": [
      "cybersecurityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "aerospace",
    "module": "./aerospace",
    "exports": [
      "aerospaceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "nuclear-physics",
    "module": "./nuclear-physics",
    "exports": [
      "nuclearPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "fluid-dynamics",
    "module": "./fluid-dynamics",
    "exports": [
      "fluidDynamicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "philosophy-of-science",
    "module": "./philosophy-of-science",
    "exports": [
      "philosophyScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "topology",
    "module": "./topology",
    "exports": [
      "topologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "psychology",
    "module": "./psychology",
    "exports": [
      "psychologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "environmental-science",
    "module": "./environmental-science",
    "exports": [
      "environmentalScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "pharmacology",
    "module": "./pharmacology",
    "exports": [
      "pharmacologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "differential-equations",
    "module": "./differential-equations",
    "exports": [
      "differentialEquationsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "abstract-algebra",
    "module": "./abstract-algebra",
    "exports": [
      "abstractAlgebraQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "optics",
    "module": "./optics",
    "exports": [
      "opticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "relativity",
    "module": "./relativity",
    "exports": [
      "relativityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "statistical-physics",
    "module": "./statistical-physics",
    "exports": [
      "statisticalPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "plasma-physics",
    "module": "./plasma-physics",
    "exports": [
      "plasmaPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "condensed-matter",
    "module": "./condensed-matter",
    "exports": [
      "condensedMatterQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "nonlinear-dynamics",
    "module": "./nonlinear-dynamics",
    "exports": [
      "nonlinearDynamicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-field-theory",
    "module": "./quantum-field-theory",
    "exports": [
      "quantumFieldTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "many-body-physics",
    "module": "./many-body-physics",
    "exports": [
      "manyBodyPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-gravity",
    "module": "./quantum-gravity",
    "exports": [
      "quantumGravityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "distributed-systems",
    "module": "./distributed-systems",
    "exports": [
      "distributedSystemsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "operating-systems",
    "module": "./operating-systems",
    "exports": [
      "operatingSystemsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2024",
    "module": "./sota-2024",
    "exports": [
      "sota2024Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2025",
    "module": "./sota-2025",
    "exports": [
      "sota2025Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2026",
    "module": "./sota-2026",
    "exports": [
      "sota2026Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "combinatorics",
    "module": "./combinatorics",
    "exports": [
      "combinatoricsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "category-theory",
    "module": "./category-theory",
    "exports": [
      "categoryTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "ergodic-theory",
    "module": "./ergodic-theory",
    "exports": [
      "ergodicTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "algebraic-geometry",
    "module": "./algebraic-geometry",
    "exports": [
      "algebraicGeometryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "measure-theory",
    "module": "./measure-theory",
    "exports": [
      "measureTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "compiler-theory",
    "module": "./compiler-theory",
    "exports": [
      "compilerTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "control-theory",
    "module": "./control-theory",
    "exports": [
      "controlTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "signal-processing",
    "module": "./signal-processing",
    "exports": [
      "signalProcessingQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "behavioral-economics",
    "module": "./behavioral-economics",
    "exports": [
      "behavioralEconomicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "development-economics",
    "module": "./development-economics",
    "exports": [
      "developmentEconomicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "market-microstructure",
    "module": "./market-microstructure",
    "exports": [
      "marketMicrostructureQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "credit-risk",
    "module": "./credit-risk",
    "exports": [
      "creditRiskQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "prediction-markets",
    "module": "./prediction-markets",
    "exports": [
      "predictionMarketsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "formal-verification",
    "module": "./formal-verification",
    "exports": [
      "formalVerificationQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "ai-substrates",
    "module": "./ai-substrates",
    "exports": [
      "aiSubstratesQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "information-theory",
    "module": "./information-theory",
    "exports": [
      "informationTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "complex-analysis",
    "module": "./complex-analysis",
    "exports": [
      "complexAnalysisQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "functional-analysis",
    "module": "./functional-analysis",
    "exports": [
      "functionalAnalysisQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "graph-theory",
    "module": "./graph-theory",
    "exports": [
      "graphTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "differential-geometry",
    "module": "./differential-geometry",
    "exports": [
      "differentialGeometryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "numerical-methods",
    "module": "./numerical-methods",
    "exports": [
      "numericalMethodsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "vault",
    "module": "./vault",
    "exports": [
      "vaultQuestions"
    ],
    "kind": "vault",
    "includeInStandardQuiz": true
  }
] as const;

export const CONTENT_COLLECTIONS = [
  { kind: 'standard-quiz', route: '/', isolated: false },
  { kind: 'bonafide', route: '/bonafides', isolated: true },
  { kind: 'thinker', route: '/thinkers', isolated: true },
  { kind: 'vault', route: '/vault', isolated: true },
  { kind: 'glossary', route: '/glossary', isolated: true },
  { kind: 'formula', route: '/formulas', isolated: true },
  { kind: 'editorial', route: null, isolated: true },
] as const;

export function resolveTopicSlug(slug: string): string {
  return LEGACY_TOPIC_ALIASES[slug] ?? slug;
}
