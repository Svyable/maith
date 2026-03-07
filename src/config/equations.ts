// =============================================================================
// TOP 150 MOST IMPORTANT, INFLUENTIAL & BEAUTIFUL EQUATIONS OF ALL TIME
// =============================================================================
// Covers: Pure Mathematics · Applied Mathematics · Physics · Chemistry ·
//         Biology & Medicine · Computer Science · Quantitative Finance ·
//         Economics · Engineering · Data Science · Earth & Space Sciences ·
//         Philosophy & Foundations
// =============================================================================

export type Difficulty = "easy" | "hard" | "sota";

export type Domain =
  | "Mathematics"
  | "Physics"
  | "Chemistry"
  | "Biology & Medicine"
  | "Computer Science"
  | "Finance & Quant"
  | "Economics"
  | "Engineering"
  | "Data Science"
  | "Earth & Space"
  | "Philosophy & Foundations";

export type SubDomain =
  // Mathematics
  | "Core Foundations"
  | "Calculus & Analysis"
  | "Linear Algebra & Systems"
  | "Probability & Statistics"
  | "Discrete Mathematics"
  | "Differential Equations"
  | "Optimization"
  | "Pure Mathematics"
  | "Applied Mathematics"
  // Physics
  | "Classical Mechanics"
  | "Electromagnetism"
  | "Quantum Mechanics"
  | "Thermodynamics & Stat Mech"
  | "Relativity & Gravity"
  | "Condensed Matter & Applied"
  | "Ergodic Theory"
  | "Hamiltonian Dynamics"
  | "Brownian Motion"
  | "Transport Theory"
  // Chemistry
  | "Physical Chemistry"
  | "Organic Chemistry"
  | "Materials Science"
  | "Systems Chemistry"
  | "Origin of Life"
  | "Replicating Systems"
  // Biology & Medicine
  | "Molecular Biology"
  | "Genetics & Evolution"
  | "Ecology & Systems Bio"
  | "Neuroscience"
  | "Medical Sciences"
  // CS
  | "Theory of Computation"
  | "AI & Machine Learning"
  | "Systems"
  | "Quantum Computing"
  // Finance
  | "Derivatives Pricing"
  | "Portfolio Theory"
  | "Risk Management"
  | "Stochastic Calculus"
  | "Market Microstructure"
  | "Prediction Markets"
  // Economics
  | "Microeconomics"
  | "Macroeconomics"
  | "Econometrics"
  // Engineering
  | "Electrical Engineering"
  | "Mechanical Engineering"
  | "Aerospace Engineering"
  | "Chemical Engineering"
  // Data Science
  | "Statistical Methods"
  | "Information Theory"
  // Earth & Space
  | "Astronomy & Astrophysics"
  | "Geosciences"
  | "Geomorphology"
  | "Sediment Transport"
  | "Landscape Dynamics"
  // Philosophy
  | "Philosophy of Mathematics"
  | "Mathematical Logic";

export interface Equation {
  rank: number;
  name: string;
  /** LaTeX string — render with KaTeX or MathJax */
  equation: string;
  discoverer: string;
  year: string;
  field: string;
  domain: Domain;
  subDomain: SubDomain;
  domainEmoji: string;
  significance: string;
  constants: string;
  applications: string;
  /** Subjective beauty / elegance score 1–10 */
  beauty: number;
  /**
   * easy  = foundational / high-school level
   * hard  = undergraduate / graduate level
   * sota  = research frontier / expert level
   */
  difficulty: Difficulty;
  /** Clay Millennium Prize Problem */
  millenniumProblem?: boolean;
  /** Nobel Prize connection */
  nobelPrize?: boolean;
  /** Equation is an open/unsolved problem */
  unsolved?: boolean;
  tags: string[];
}

export const EQUATIONS: Equation[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // MATHEMATICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 1,
    name: "Euler's Identity",
    equation: "e^{i\\pi} + 1 = 0",
    discoverer: "Leonhard Euler",
    year: "1748",
    field: "Complex Analysis / Pure Mathematics",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Connects the five most fundamental constants — 0, 1, π, e, and i — in one perfectly balanced equation. Feynman called it 'our jewel' and 'the most remarkable formula in mathematics.' Voted most beautiful equation in mathematical history by physicists and mathematicians alike.",
    constants:
      "e ≈ 2.71828 (Euler's number), i = √−1 (imaginary unit), π ≈ 3.14159 (pi), 0 (additive identity), 1 (multiplicative identity)",
    applications: "Signal processing, quantum mechanics, electrical engineering, Fourier analysis, control theory",
    beauty: 10,
    difficulty: "hard",
    tags: ["complex analysis", "transcendental numbers", "fundamental constants", "pure math"],
  },
  {
    rank: 2,
    name: "Pythagorean Theorem",
    equation: "a^2 + b^2 = c^2",
    discoverer: "Pythagoras (attributed)",
    year: "~570 BC",
    field: "Euclidean Geometry",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Defines the fundamental relationship between the sides of a right triangle. One of the oldest proven theorems in mathematics with over 370 distinct proofs. The geometric and algebraic backbone of distance measurement in every dimension.",
    constants: "a, b = legs of right triangle; c = hypotenuse",
    applications:
      "Architecture, navigation, GPS triangulation, computer graphics, physics, machine learning (Euclidean distance)",
    beauty: 9,
    difficulty: "easy",
    tags: ["geometry", "distance", "trigonometry", "foundations"],
  },
  {
    rank: 3,
    name: "Fundamental Theorem of Calculus",
    equation: "\\int_a^b f(x)\\,dx = F(b) - F(a)",
    discoverer: "Newton & Leibniz",
    year: "1668–1686",
    field: "Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Links differentiation and integration as inverse operations — one of the most profound connections in all of mathematics. Forms the backbone of calculus and makes it computable. Without it, physics and engineering as we know them would be impossible.",
    constants: "f(x) = integrand, F(x) = antiderivative, a, b = integration limits",
    applications: "Physics, engineering, economics, probability, statistics, machine learning (backpropagation)",
    beauty: 9,
    difficulty: "hard",
    tags: ["calculus", "integration", "differentiation", "analysis"],
  },
  {
    rank: 4,
    name: "Euler's Formula",
    equation: "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
    discoverer: "Leonhard Euler",
    year: "1748",
    field: "Complex Analysis",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Reveals the profound connection between exponential functions and trigonometry through complex numbers. The parent formula of Euler's Identity. Allows rotation in the complex plane and is the foundational tool of Fourier analysis.",
    constants: "e ≈ 2.718 (Euler's number), i = √−1 (imaginary unit), θ = angle in radians",
    applications: "Signal processing, AC circuits, Fourier analysis, quantum mechanics, control theory",
    beauty: 10,
    difficulty: "hard",
    tags: ["complex analysis", "exponential", "trigonometry", "rotation"],
  },
  {
    rank: 5,
    name: "Quadratic Formula",
    equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    discoverer: "Babylonians / al-Khwarizmi",
    year: "~2000 BC / 820 AD",
    field: "Classical Algebra",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Solves any quadratic equation exactly. One of the oldest and most universally known mathematical formulas, tracing from ancient Babylon through Islamic algebra to every high school in the world. The discriminant b²−4ac encodes the nature of solutions.",
    constants: "a, b, c = polynomial coefficients; Δ = b²−4ac (discriminant)",
    applications: "Physics (kinematics), engineering, computer graphics, optimization, finance (break-even analysis)",
    beauty: 7,
    difficulty: "easy",
    tags: ["algebra", "polynomial", "roots", "foundations"],
  },
  {
    rank: 6,
    name: "Bayes' Theorem",
    equation: "P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}",
    discoverer: "Thomas Bayes",
    year: "1763",
    field: "Probability & Statistics",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Provides the mathematical framework for updating beliefs given new evidence. The engine of probabilistic reasoning, machine learning, and rational inference. Arguably the single most important formula for thinking under uncertainty.",
    constants: "P(A|B) = posterior, P(B|A) = likelihood, P(A) = prior, P(B) = marginal evidence",
    applications: "Machine learning, Bayesian statistics, medical diagnosis, spam filtering, AI, scientific inference",
    beauty: 9,
    difficulty: "hard",
    tags: ["probability", "Bayesian", "inference", "statistics", "machine learning"],
  },
  {
    rank: 7,
    name: "Normal Distribution (PDF)",
    equation: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
    discoverer: "Carl Friedrich Gauss",
    year: "1809",
    field: "Probability & Statistics",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "The bell curve that appears everywhere in nature, guaranteed by the Central Limit Theorem. Foundation of classical statistics, quality control, and scientific measurement. More than any other distribution, it characterizes natural variation.",
    constants: "μ = mean, σ = standard deviation, e ≈ 2.718, π ≈ 3.14159",
    applications: "Statistics, quality control, finance, natural sciences, social sciences, measurement theory",
    beauty: 8,
    difficulty: "hard",
    tags: ["statistics", "probability", "distribution", "Gaussian", "bell curve"],
  },
  {
    rank: 8,
    name: "Stokes' Theorem (General Form)",
    equation: "\\oint_{\\partial \\Omega} \\omega = \\int_{\\Omega} d\\omega",
    discoverer: "Élie Cartan / George Stokes",
    year: "1854 / 1945",
    field: "Differential Geometry / Vector Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "The ultimate generalization of the Fundamental Theorem of Calculus to differential forms on manifolds. Unifies Green's theorem, the divergence theorem, and classical Stokes' theorem into one transcendent statement.",
    constants: "ω = differential form, Ω = oriented manifold, ∂Ω = boundary",
    applications: "Electromagnetism, fluid dynamics, topology, gauge field theory, general relativity",
    beauty: 9,
    difficulty: "hard",
    tags: ["differential geometry", "manifolds", "integration", "topology"],
  },
  {
    rank: 9,
    name: "Fourier Transform",
    equation: "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i x \\xi}\\,dx",
    discoverer: "Joseph Fourier",
    year: "1822",
    field: "Harmonic Analysis / Signal Processing",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "Decomposes any signal into its constituent frequencies. Arguably the most useful single mathematical tool in science and engineering, enabling analysis in frequency space. The FFT algorithm is one of the 20th century's most important computational discoveries.",
    constants: "ξ = frequency variable, i = √−1, f(x) = time-domain function",
    applications: "MP3/JPEG compression, MRI imaging, spectroscopy, radio/WiFi, radar, machine learning",
    beauty: 9,
    difficulty: "hard",
    tags: ["signal processing", "harmonic analysis", "frequency", "FFT", "transforms"],
  },
  {
    rank: 10,
    name: "Taylor Series",
    equation: "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n",
    discoverer: "Brook Taylor",
    year: "1715",
    field: "Real Analysis / Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Represents any smooth function as an infinite polynomial series around a point. The foundation of all numerical approximation, physics linearization, and computer function evaluation. Nearly every computable function you use daily relies on a Taylor expansion.",
    constants: "f⁽ⁿ⁾(a) = nth derivative at a, n! = factorial",
    applications: "Numerical computation, physics approximation, engineering, deep learning activation functions",
    beauty: 8,
    difficulty: "hard",
    tags: ["calculus", "series", "approximation", "analysis"],
  },
  {
    rank: 11,
    name: "Cauchy's Integral Formula",
    equation: "f(a) = \\frac{1}{2\\pi i}\\oint_\\gamma \\frac{f(z)}{z-a}\\,dz",
    discoverer: "Augustin-Louis Cauchy",
    year: "1814",
    field: "Complex Analysis",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Shows that the value of an analytic function anywhere inside a contour is completely determined by its values on the contour. One of the most powerful and surprising theorems in mathematics — rigidity of complex functions has no real-analysis analog.",
    constants: "f(z) = analytic function, γ = closed contour, i = √−1, a = interior point",
    applications:
      "Signal processing, control theory, quantum mechanics, residue integration, inverse Laplace transforms",
    beauty: 9,
    difficulty: "hard",
    tags: ["complex analysis", "contour integration", "analytic functions"],
  },
  {
    rank: 12,
    name: "Riemann Zeta Function",
    equation: "\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p\\,\\text{prime}} \\frac{1}{1-p^{-s}}",
    discoverer: "Leonhard Euler / Bernhard Riemann",
    year: "1737 / 1859",
    field: "Analytic Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Encodes the distribution of prime numbers and connects analysis to number theory via the Euler product. The Riemann Hypothesis — that all non-trivial zeros lie on Re(s) = 1/2 — is the greatest unsolved problem in mathematics and a Clay Millennium Prize Problem.",
    constants: "s = complex variable, p = prime numbers, n = natural numbers",
    applications: "Prime number distribution, cryptography, quantum chaos, random matrix theory",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    unsolved: true,
    tags: ["number theory", "primes", "Riemann hypothesis", "complex analysis"],
  },
  {
    rank: 13,
    name: "Cauchy-Schwarz Inequality",
    equation: "|\\langle u, v \\rangle|^2 \\leq \\langle u, u \\rangle \\cdot \\langle v, v \\rangle",
    discoverer: "Cauchy / Schwarz / Bunyakovsky",
    year: "1821–1888",
    field: "Linear Algebra / Functional Analysis",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "One of the most ubiquitous and elegant inequalities in all of mathematics. Appears in geometry (angle between vectors), probability (correlation bounds), quantum mechanics, and the convergence of algorithms. Everything involving 'projection' uses this.",
    constants: "u, v = vectors in inner product space, ⟨·,·⟩ = inner product",
    applications: "Statistics (correlation), quantum mechanics, signal processing, optimization, machine learning",
    beauty: 8,
    difficulty: "hard",
    tags: ["linear algebra", "inequalities", "inner product", "functional analysis"],
  },
  {
    rank: 14,
    name: "Eigenvalue Equation",
    equation: "A\\mathbf{v} = \\lambda\\mathbf{v}",
    discoverer: "Cauchy / Hilbert / various",
    year: "1840–1904",
    field: "Linear Algebra",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "Defines the natural modes of a linear transformation — directions that only get scaled, not rotated. Perhaps the most important concept in all of applied mathematics. Underlies quantum states, principal component analysis, Google PageRank, and vibrational modes.",
    constants: "A = square matrix, v = eigenvector (non-zero), λ = eigenvalue (scalar)",
    applications: "Quantum mechanics, PCA, Google PageRank, structural engineering, neural networks, control theory",
    beauty: 9,
    difficulty: "hard",
    tags: ["linear algebra", "eigenvectors", "eigenvalues", "decomposition"],
  },
  {
    rank: 15,
    name: "Singular Value Decomposition",
    equation: "A = U\\Sigma V^\\top",
    discoverer: "Beltrami / Jordan / Golub-Reinsch",
    year: "1873 / 1965",
    field: "Numerical Linear Algebra",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "Decomposes any matrix into rotation-scale-rotation components. The most powerful and versatile matrix factorization in computational science. Enables low-rank approximation, dimensionality reduction, noise removal, and pseudoinverse computation.",
    constants: "U, V = orthogonal matrices, Σ = diagonal matrix of singular values",
    applications: "PCA, recommender systems (Netflix), image compression, NLP (LSA), pseudoinverse, deep learning",
    beauty: 9,
    difficulty: "hard",
    tags: ["linear algebra", "matrix factorization", "PCA", "decomposition"],
  },
  {
    rank: 16,
    name: "Lagrange Multipliers",
    equation: "\\nabla f = \\lambda\\,\\nabla g",
    discoverer: "Joseph-Louis Lagrange",
    year: "1788",
    field: "Calculus / Constrained Optimization",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "The standard method for finding extrema of functions subject to constraints. Connects geometry (gradient alignment) to optimization. Foundation of all constrained optimization in economics, engineering, and machine learning.",
    constants: "f = objective function, g = constraint function, λ = multiplier scalar, ∇ = gradient operator",
    applications:
      "Economics (utility maximization), engineering design, machine learning (SVM), physics (variational principles)",
    beauty: 8,
    difficulty: "hard",
    tags: ["optimization", "constrained optimization", "calculus of variations"],
  },
  {
    rank: 17,
    name: "Gradient Descent Update Rule",
    equation: "\\theta \\leftarrow \\theta - \\eta\\,\\nabla_\\theta \\mathcal{L}(\\theta)",
    discoverer: "Cauchy (steepest descent) / ML community",
    year: "1847 / 1960s",
    field: "Optimization / Machine Learning",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "The engine behind training virtually every modern machine learning model. Iteratively moves parameters in the direction of steepest descent of the loss. Its stochastic variant (SGD) scaled deep learning to hundreds of billions of parameters.",
    constants: "θ = model parameters, η = learning rate, ∇_θ𝓛 = gradient of loss",
    applications: "Deep learning, neural networks, LLMs (GPT, Claude), computer vision, recommendation systems",
    beauty: 8,
    difficulty: "hard",
    tags: ["optimization", "machine learning", "deep learning", "gradient"],
  },
  {
    rank: 18,
    name: "Central Limit Theorem",
    equation:
      "\\bar{X}_n \\xrightarrow{d} \\mathcal{N}\\!\\left(\\mu,\\,\\frac{\\sigma^2}{n}\\right) \\text{ as } n \\to \\infty",
    discoverer: "Laplace / Lyapunov",
    year: "1812–1901",
    field: "Probability Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "States that the mean of many independent random variables converges to a normal distribution regardless of their original distribution. Explains why the bell curve appears so universally in nature. The mathematical foundation of all statistical inference.",
    constants: "X̄_n = sample mean, μ = true mean, σ² = variance, n = sample size",
    applications: "Statistical inference, A/B testing, quality control, polling, epidemiology, financial risk",
    beauty: 9,
    difficulty: "hard",
    tags: ["probability", "statistics", "convergence", "normal distribution"],
  },
  {
    rank: 19,
    name: "Fermat's Last Theorem",
    equation: "a^n + b^n = c^n \\text{ has no integer solutions for } n > 2",
    discoverer: "Fermat (conjectured) / Andrew Wiles (proved)",
    year: "1637 / 1995",
    field: "Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Conjectured in 1637 and unproven for 358 years. Wiles' proof used modular forms and elliptic curves — tools Fermat could never have imagined. The proof itself opened new chapters of algebraic geometry and created entirely new mathematical frameworks.",
    constants: "a, b, c = positive integers, n = integer > 2",
    applications:
      "Motivated development of algebraic geometry, modular forms, Galois representations, and elliptic curve cryptography",
    beauty: 10,
    difficulty: "sota",
    tags: ["number theory", "algebraic geometry", "modular forms", "Diophantine equations"],
  },
  {
    rank: 20,
    name: "Euler's Polyhedral Formula",
    equation: "V - E + F = 2",
    discoverer: "Leonhard Euler",
    year: "1752",
    field: "Topology / Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Relates vertices, edges, and faces of any convex polyhedron. Founded the field of topology by identifying a shape invariant (Euler characteristic). The starting point of algebraic topology and the concept of topological invariants.",
    constants: "V = vertices, E = edges, F = faces, χ = Euler characteristic = 2 for sphere",
    applications: "Computer graphics, network topology, materials science, map coloring, protein structure",
    beauty: 9,
    difficulty: "easy",
    tags: ["topology", "geometry", "combinatorics", "invariants"],
  },
  {
    rank: 21,
    name: "Gauss-Bonnet Theorem",
    equation: "\\iint_M K\\,dA + \\oint_{\\partial M} \\kappa_g\\,ds = 2\\pi\\chi(M)",
    discoverer: "Gauss / Bonnet",
    year: "1827–1848",
    field: "Differential Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Connects the local geometry (curvature) of a surface to its global topology (Euler characteristic). One of the most profound theorems in geometry — it says topology constrains how a surface can curve. A landmark in the unification of geometry and topology.",
    constants: "K = Gaussian curvature, κ_g = geodesic curvature, χ(M) = Euler characteristic",
    applications: "General relativity, differential geometry, computer graphics, topology, shape analysis",
    beauty: 9,
    difficulty: "sota",
    tags: ["differential geometry", "topology", "curvature", "Euler characteristic"],
  },
  {
    rank: 22,
    name: "Cantor's Diagonal Argument",
    equation: "|\\mathbb{R}| > |\\mathbb{N}|",
    discoverer: "Georg Cantor",
    year: "1891",
    field: "Set Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves that the real numbers cannot be put in one-to-one correspondence with the natural numbers — there are infinitely many sizes of infinity. One of the most elegant and surprising proofs in mathematics, accessible yet philosophically earth-shattering.",
    constants: "ℝ = real numbers (uncountable), ℕ = natural numbers (countable), |·| = cardinality",
    applications: "Foundations of mathematics, computability theory, formal language theory, philosophy of mathematics",
    beauty: 10,
    difficulty: "hard",
    tags: ["set theory", "infinity", "cardinality", "foundations"],
  },
  {
    rank: 23,
    name: "Gödel's Incompleteness Theorem",
    equation: "\\exists \\phi: \\phi \\text{ is true but unprovable in } \\mathcal{S}",
    discoverer: "Kurt Gödel",
    year: "1931",
    field: "Mathematical Logic",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves that any sufficiently powerful consistent formal system contains true statements it cannot prove. Shattered Hilbert's programme of complete axiomatisation of mathematics. One of the most consequential theorems of the 20th century.",
    constants: "φ = statement, 𝒮 = formal axiomatic system, consistency, provability predicate",
    applications: "Foundations of mathematics, computability limits, philosophy, AI (limits of formal reasoning)",
    beauty: 10,
    difficulty: "sota",
    tags: ["logic", "foundations", "incompleteness", "formal systems"],
  },
  {
    rank: 24,
    name: "Law of Large Numbers",
    equation: "P\\!\\left(\\left|\\bar{X}_n - \\mu\\right| > \\varepsilon\\right) \\to 0 \\text{ as } n \\to \\infty",
    discoverer: "Jacob Bernoulli / Andrei Kolmogorov",
    year: "1713 / 1933",
    field: "Probability Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Guarantees that sample averages converge to the true population mean as sample size grows. The mathematical foundation of statistics, experimental science, insurance, and the casino business.",
    constants: "X̄_n = sample mean, μ = true mean, ε = arbitrary tolerance > 0, n = sample size",
    applications: "Statistics, insurance, gambling (house edge), quality control, scientific measurement",
    beauty: 8,
    difficulty: "hard",
    tags: ["probability", "convergence", "statistics", "foundations"],
  },
  {
    rank: 25,
    name: "Poincaré Conjecture (Perelman's Theorem)",
    equation: "\\pi_1(M^3) = 0 \\Rightarrow M^3 \\cong S^3",
    discoverer: "Poincaré (conj.) / Grigori Perelman (proof)",
    year: "1904 / 2003",
    field: "Geometric Topology",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Every simply connected closed 3-manifold is homeomorphic to the 3-sphere. The only solved Clay Millennium Prize Problem. Perelman used Ricci flow with surgery — and famously declined the $1M prize.",
    constants: "π₁ = fundamental group, M³ = closed 3-manifold, S³ = 3-sphere",
    applications: "Topology, cosmology (shape of the universe), medical imaging, shape analysis",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    tags: ["topology", "3-manifolds", "Ricci flow", "Millennium Prize"],
  },
  {
    rank: 26,
    name: "Binomial Theorem",
    equation: "(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k y^{n-k}",
    discoverer: "Newton (general form)",
    year: "1665",
    field: "Algebra / Combinatorics",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Provides a formula for expanding powers of binomials and connects algebra to combinatorics through Pascal's triangle. Foundational to probability, generating functions, and numerical approximation.",
    constants: "n = exponent, k = summation index, C(n,k) = binomial coefficient ('n choose k')",
    applications: "Probability, statistics, polynomial arithmetic, numerical methods, combinatorics",
    beauty: 7,
    difficulty: "easy",
    tags: ["algebra", "combinatorics", "probability", "polynomials"],
  },
  {
    rank: 27,
    name: "Stirling's Approximation",
    equation: "n! \\approx \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n",
    discoverer: "James Stirling",
    year: "1730",
    field: "Analysis / Combinatorics",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Provides an excellent approximation for large factorials, combining π and e in a striking formula. Essential in statistical mechanics, combinatorics, information theory, and wherever large factorials appear.",
    constants: "n = integer, π ≈ 3.14159, e ≈ 2.718",
    applications: "Statistical mechanics, information theory, combinatorics, probability, algorithm analysis",
    beauty: 8,
    difficulty: "hard",
    tags: ["analysis", "combinatorics", "approximation", "asymptotics"],
  },
  {
    rank: 28,
    name: "Euler-Mascheroni Constant",
    equation: "\\gamma = \\lim_{n\\to\\infty}\\left(\\sum_{k=1}^n \\frac{1}{k} - \\ln n\\right) \\approx 0.5772\\ldots",
    discoverer: "Euler / Mascheroni",
    year: "1735",
    field: "Analysis / Number Theory",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "A mysterious constant connecting the harmonic series to the natural logarithm. Appears ubiquitously in number theory, analysis, and physics. Whether it is rational or irrational remains unknown — an open problem over 280 years old.",
    constants: "γ ≈ 0.57721566…, harmonic series, ln = natural logarithm",
    applications: "Number theory, special functions (Gamma function), probability, random matrix theory",
    beauty: 8,
    difficulty: "hard",
    unsolved: true,
    tags: ["number theory", "analysis", "constants", "harmonic series"],
  },
  {
    rank: 29,
    name: "Radon-Nikodym Theorem",
    equation: "\\mu(A) = \\int_A f\\,d\\nu \\quad \\forall\\,A \\in \\mathcal{F}",
    discoverer: "Johann Radon / Otton Nikodym",
    year: "1913–1930",
    field: "Measure Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Guarantees the existence of a density function f = dμ/dν whenever one measure is absolutely continuous with respect to another. The theoretical bedrock of probability theory, Bayesian statistics, and stochastic calculus (Girsanov).",
    constants: "μ, ν = measures, f = Radon-Nikodym derivative (density function), ℱ = sigma-algebra",
    applications:
      "Probability theory, Bayesian statistics, stochastic processes, financial mathematics, ergodic theory",
    beauty: 8,
    difficulty: "sota",
    tags: ["measure theory", "probability", "Bayesian statistics", "density"],
  },
  {
    rank: 30,
    name: "Yoneda Lemma",
    equation: "\\mathrm{Nat}(\\mathrm{Hom}(A,-),\\,F) \\cong F(A)",
    discoverer: "Nobuo Yoneda",
    year: "1954",
    field: "Category Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "States that a mathematical object is completely determined by its relationships to all other objects. Called 'the most important theorem you've never heard of.' The foundation of categorical thinking and homotopy type theory.",
    constants: "Hom(A,−) = representable functor, F = arbitrary functor, Nat = natural transformations",
    applications: "Abstract algebra, type theory, functional programming (monads), algebraic topology, HoTT",
    beauty: 9,
    difficulty: "sota",
    tags: ["category theory", "functors", "type theory", "abstract algebra"],
  },
  {
    rank: 31,
    name: "Birkhoff's Ergodic Theorem",
    equation: "\\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{k=0}^{n-1}f(T^k x) = \\int f\\,d\\mu",
    discoverer: "George David Birkhoff",
    year: "1931",
    field: "Ergodic Theory / Dynamical Systems",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves that time averages equal space averages for ergodic measure-preserving systems. The mathematical foundation of statistical mechanics and a cornerstone of modern dynamical systems theory.",
    constants: "T = measure-preserving transformation, f = observable function, μ = invariant measure",
    applications: "Statistical mechanics, number theory (uniform distribution), dynamical systems, chaos theory",
    beauty: 8,
    difficulty: "sota",
    tags: ["ergodic theory", "dynamical systems", "statistical mechanics", "measure theory"],
  },
  {
    rank: 32,
    name: "KL Divergence",
    equation: "D_{\\mathrm{KL}}(P \\| Q) = \\sum_x P(x)\\ln\\frac{P(x)}{Q(x)}",
    discoverer: "Kullback & Leibler",
    year: "1951",
    field: "Information Theory / Statistics",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "Measures how much one probability distribution differs from a reference distribution. Not a symmetric distance but the fundamental tool for comparing distributions. The loss function of variational inference, VAEs, RLHF, and LLM training.",
    constants: "P = target distribution, Q = reference distribution, ln = natural logarithm",
    applications: "Variational autoencoders, RLHF (LLM alignment), Bayesian inference, information theory, NLP",
    beauty: 8,
    difficulty: "hard",
    tags: ["information theory", "statistics", "machine learning", "distributions"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 33,
    name: "Newton's Law of Universal Gravitation",
    equation: "F = G\\frac{m_1 m_2}{r^2}",
    discoverer: "Isaac Newton",
    year: "1687",
    field: "Classical Mechanics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Unified celestial and terrestrial mechanics by showing the same force governs falling apples and orbiting planets. The first universal law of nature — equally valid for a stone and a star. Enabled precise prediction of planetary orbits for centuries.",
    constants: "G = 6.674×10⁻¹¹ N·m²/kg², m₁, m₂ = masses, r = separation distance",
    applications:
      "Orbital mechanics, satellite navigation, space mission planning, tidal forces, gravitational lensing",
    beauty: 9,
    difficulty: "hard",
    tags: ["gravity", "classical mechanics", "inverse square law", "Newton"],
  },
  {
    rank: 34,
    name: "Mass-Energy Equivalence",
    equation: "E = mc^2",
    discoverer: "Albert Einstein",
    year: "1905",
    field: "Special Relativity",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "The most famous equation in science. Shows that mass and energy are different manifestations of the same thing, related by the speed of light squared. Underpins nuclear physics, particle physics, and our entire understanding of cosmic energy.",
    constants: "E = energy (joules), m = rest mass (kg), c = 2.998×10⁸ m/s",
    applications: "Nuclear power, nuclear weapons, PET scanning, particle accelerators, astrophysics",
    beauty: 10,
    difficulty: "hard",
    tags: ["special relativity", "energy", "mass", "Einstein", "nuclear physics"],
  },
  {
    rank: 35,
    name: "Maxwell's Equations (Set)",
    equation:
      "\\nabla\\cdot\\mathbf{E}=\\frac{\\rho}{\\varepsilon_0},\\;\\nabla\\times\\mathbf{B}=\\mu_0\\mathbf{J}+\\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}",
    discoverer: "James Clerk Maxwell",
    year: "1865",
    field: "Electromagnetism",
    domain: "Physics",
    subDomain: "Electromagnetism",
    domainEmoji: "⚛️",
    significance:
      "Four equations that unify electricity, magnetism, and light. Predicted electromagnetic waves before they were discovered. Hertz called it 'Maxwell's theory' to acknowledge it was a gift of one man's genius. The foundation of all electromagnetic technology.",
    constants:
      "E = electric field, B = magnetic field, ρ = charge density, J = current density, ε₀, μ₀ = permittivity & permeability of free space",
    applications: "Radio, WiFi, MRI, fiber optics, electrical engineering, antenna design, photonics",
    beauty: 9,
    difficulty: "hard",
    tags: ["electromagnetism", "Maxwell", "waves", "light", "field equations"],
  },
  {
    rank: 36,
    name: "Schrödinger Equation",
    equation: "i\\hbar\\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r},t) = \\hat{H}\\,\\Psi(\\mathbf{r},t)",
    discoverer: "Erwin Schrödinger",
    year: "1926",
    field: "Quantum Mechanics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The fundamental equation governing all non-relativistic quantum systems. Describes how the quantum state evolves in time. Replaced classical mechanics at the atomic scale and enabled the entire modern technology of semiconductors, lasers, and quantum computing.",
    constants: "ℏ = h/2π ≈ 1.055×10⁻³⁴ J·s, Ψ = wavefunction, Ĥ = Hamiltonian operator",
    applications: "Semiconductors, transistors, lasers, MRI, quantum computing, atomic/molecular physics",
    beauty: 9,
    difficulty: "sota",
    tags: ["quantum mechanics", "wavefunction", "Schrödinger", "Hamiltonian"],
  },
  {
    rank: 37,
    name: "Heisenberg Uncertainty Principle",
    equation: "\\Delta x\\,\\Delta p \\geq \\frac{\\hbar}{2}",
    discoverer: "Werner Heisenberg",
    year: "1927",
    field: "Quantum Mechanics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Sets a fundamental lower bound on the product of position and momentum uncertainties. This is not a limitation of measurement technology but an intrinsic feature of reality. Revealed that the quantum world is irreducibly probabilistic.",
    constants: "Δx = position uncertainty, Δp = momentum uncertainty, ℏ ≈ 1.055×10⁻³⁴ J·s",
    applications: "Quantum computing, electron microscopy resolution limits, nuclear physics, quantum cryptography",
    beauty: 10,
    difficulty: "hard",
    tags: ["quantum mechanics", "uncertainty", "Heisenberg", "fundamental limits"],
  },
  {
    rank: 38,
    name: "Dirac Equation",
    equation: "(i\\gamma^\\mu\\partial_\\mu - m)\\psi = 0",
    discoverer: "Paul Dirac",
    year: "1928",
    field: "Relativistic Quantum Mechanics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The first equation combining quantum mechanics with special relativity. Predicted the existence of antimatter (positron) before it was discovered. Spin emerges naturally — without being postulated. The prototype for all quantum field theories.",
    constants: "γᵘ = 4×4 Dirac gamma matrices, m = particle mass, ψ = Dirac spinor",
    applications: "Particle physics, quantum field theory, positron emission tomography (PET), antimatter research",
    beauty: 9,
    difficulty: "sota",
    tags: ["quantum field theory", "Dirac", "antimatter", "relativistic QM"],
  },
  {
    rank: 39,
    name: "Einstein Field Equations",
    equation: "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}",
    discoverer: "Albert Einstein",
    year: "1915",
    field: "General Relativity",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "Describes gravity as curvature of spacetime caused by mass-energy. Predicted black holes, gravitational waves, and the expanding universe — all confirmed experimentally. The most sophisticated physical theory ever created by one person.",
    constants: "G_μν = Einstein tensor, Λ = cosmological constant, g_μν = metric tensor, T_μν = stress-energy tensor",
    applications: "GPS (relativistic corrections), gravitational wave detectors (LIGO), black hole imaging, cosmology",
    beauty: 10,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["general relativity", "Einstein", "gravity", "spacetime", "black holes"],
  },
  {
    rank: 40,
    name: "Noether's Theorem",
    equation: "\\text{Continuous symmetry} \\Leftrightarrow \\text{conserved current } j^\\mu",
    discoverer: "Emmy Noether",
    year: "1915",
    field: "Theoretical Physics / Abstract Algebra",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Every continuous symmetry of a physical action corresponds to a conserved quantity. Time symmetry → energy conservation. Space symmetry → momentum conservation. Called 'the most important theorem in physics' — it is the reason conservation laws exist at all.",
    constants: "Action S, Lagrangian L, symmetry group, Noether current j^μ, conserved charge Q",
    applications: "All of theoretical physics: particle physics, GR, quantum field theory, condensed matter",
    beauty: 10,
    difficulty: "sota",
    tags: ["symmetry", "conservation laws", "Noether", "theoretical physics"],
  },
  {
    rank: 41,
    name: "Boltzmann Entropy Formula",
    equation: "S = k_{\\mathrm{B}}\\ln\\Omega",
    discoverer: "Ludwig Boltzmann",
    year: "1877",
    field: "Statistical Mechanics",
    domain: "Physics",
    subDomain: "Brownian Motion",
    domainEmoji: "⚛️",
    significance:
      "Bridges the microscopic world of atoms to macroscopic thermodynamics. Defines entropy as the log of the number of microscopic states. Engraved on Boltzmann's tombstone. Connected thermodynamics to probability and information.",
    constants: "k_B = 1.380×10⁻²³ J/K (Boltzmann constant), Ω = number of microstates",
    applications:
      "Statistical mechanics, black hole physics (Bekenstein-Hawking), information theory, computational complexity",
    beauty: 9,
    difficulty: "hard",
    tags: ["statistical mechanics", "entropy", "thermodynamics", "Boltzmann"],
  },
  {
    rank: 42,
    name: "Second Law of Thermodynamics",
    equation: "\\Delta S_{\\text{universe}} \\geq 0",
    discoverer: "Rudolf Clausius",
    year: "1850",
    field: "Thermodynamics",
    domain: "Physics",
    subDomain: "Transport Theory",
    domainEmoji: "⚛️",
    significance:
      "Entropy of an isolated system never decreases. Defines the arrow of time — the only fundamental physical law that distinguishes past from future. Imposes fundamental limits on engines, computation (Landauer), and the ultimate fate of the universe.",
    constants: "S = entropy, Q = heat transferred, T = absolute temperature",
    applications: "Heat engines, refrigeration cycles, information theory, Maxwell's demon, cosmology",
    beauty: 9,
    difficulty: "hard",
    tags: ["thermodynamics", "entropy", "arrow of time", "Clausius"],
  },
  {
    rank: 43,
    name: "Planck's Law",
    equation: "B_\\nu(T) = \\frac{2h\\nu^3}{c^2}\\cdot\\frac{1}{e^{h\\nu/k_BT}-1}",
    discoverer: "Max Planck",
    year: "1900",
    field: "Quantum Physics",
    domain: "Physics",
    subDomain: "Thermodynamics & Stat Mech",
    domainEmoji: "⚛️",
    significance:
      "Describes the spectral distribution of blackbody radiation. The first quantum equation — Planck was forced to quantize energy to avoid the ultraviolet catastrophe. Launched the quantum revolution and earned Planck the 1918 Nobel Prize.",
    constants:
      "h = 6.626×10⁻³⁴ J·s (Planck constant), ν = frequency, c = speed of light, k_B = Boltzmann constant, T = temperature",
    applications: "Astrophysics (stellar classification), LED design, thermal imaging, climate science, CMB cosmology",
    beauty: 9,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["quantum mechanics", "blackbody radiation", "Planck", "thermal physics"],
  },
  {
    rank: 44,
    name: "Navier-Stokes Equations",
    equation:
      "\\rho\\!\\left(\\partial_t\\mathbf{v}+(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}\\right) = -\\nabla p + \\mu\\nabla^2\\mathbf{v} + \\mathbf{f}",
    discoverer: "Navier & Stokes",
    year: "1822–1845",
    field: "Fluid Dynamics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Govern the motion of all viscous fluids from blood to ocean currents to atmospheric flow. One of the Clay Millennium Prize Problems ($1M): proving whether smooth global solutions always exist remains unsolved and is one of the hardest problems in mathematics.",
    constants: "ρ = fluid density, μ = dynamic viscosity, p = pressure, v = velocity field, f = body forces",
    applications: "Aerodynamics, weather forecasting, CFD, cardiovascular modeling, ocean circulation",
    beauty: 8,
    difficulty: "sota",
    millenniumProblem: true,
    unsolved: true,
    tags: ["fluid dynamics", "PDEs", "turbulence", "Millennium Prize"],
  },
  {
    rank: 45,
    name: "Wave Equation",
    equation: "\\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u",
    discoverer: "Jean le Rond d'Alembert",
    year: "1747",
    field: "Mathematical Physics / PDEs",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Describes the propagation of all wave phenomena — sound, light, seismic waves, water waves. One of the most important PDEs in physics, connecting local curvature in space to acceleration in time.",
    constants: "u = wave displacement, c = wave propagation speed, ∇² = Laplacian",
    applications: "Acoustics, optics, seismology, electromagnetic waves, musical instruments, ultrasound",
    beauty: 8,
    difficulty: "hard",
    tags: ["PDEs", "waves", "acoustics", "electromagnetism"],
  },
  {
    rank: 46,
    name: "Euler-Lagrange Equation",
    equation:
      "\\frac{\\partial \\mathcal{L}}{\\partial q} - \\frac{d}{dt}\\frac{\\partial \\mathcal{L}}{\\partial \\dot{q}} = 0",
    discoverer: "Euler & Lagrange",
    year: "1755–1788",
    field: "Analytical Mechanics / Calculus of Variations",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The central equation of Lagrangian mechanics. Equivalent to Newton's laws but expressed via energy rather than force. Generalises to any coordinate system, enabling treatment of constraints elegantly. The basis of all modern theoretical physics.",
    constants: "ℒ = Lagrangian (T−V), q = generalised coordinate, q̇ = generalised velocity",
    applications: "Classical mechanics, optics, general relativity, quantum field theory, control theory, robotics",
    beauty: 9,
    difficulty: "hard",
    tags: ["classical mechanics", "Lagrangian", "variational principles", "analytical mechanics"],
  },
  {
    rank: 47,
    name: "Principle of Least Action",
    equation: "\\delta S = \\delta\\int_{t_1}^{t_2}\\mathcal{L}\\,dt = 0",
    discoverer: "Maupertuis / Euler / Lagrange / Hamilton",
    year: "1744–1835",
    field: "Theoretical Physics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Nature follows the path for which the action integral is stationary. More profound than Newton's laws — it governs classical mechanics, optics, electromagnetism, GR, and quantum mechanics alike. Feynman's path integral extends it to quantum theory.",
    constants: "S = action functional, ℒ = Lagrangian, t₁,t₂ = time endpoints, δ = variation operator",
    applications: "All of physics: optics (Fermat), mechanics, field theory, Feynman path integrals, robotics",
    beauty: 10,
    difficulty: "sota",
    tags: ["variational principles", "action", "Lagrangian", "theoretical physics"],
  },
  {
    rank: 48,
    name: "Born Rule",
    equation: "P(\\mathbf{r}) = |\\Psi(\\mathbf{r})|^2",
    discoverer: "Max Born",
    year: "1926",
    field: "Quantum Mechanics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Connects the quantum wavefunction to experimental measurement probabilities. The bridge between the abstract mathematical formalism of quantum mechanics and the physical world we observe. Born received the 1954 Nobel Prize for this interpretation.",
    constants: "P(r) = probability density, Ψ(r) = wavefunction, |·|² = modulus squared",
    applications: "Quantum chemistry, atomic physics, quantum computing, materials science",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["quantum mechanics", "probability", "Born rule", "wavefunction interpretation"],
  },
  {
    rank: 49,
    name: "Ideal Gas Law",
    equation: "PV = nRT",
    discoverer: "Boyle / Charles / Gay-Lussac / Avogadro",
    year: "1600-1800s AD",
    field: "Thermodynamics",
    domain: "Physics",
    subDomain: "Thermodynamics & Stat Mech",
    domainEmoji: "⚛️",
    significance:
      "Combines three experimental gas laws into one elegant equation. The prototype for all equations of state and the starting point for statistical mechanics. Surprisingly accurate for real gases under ordinary conditions.",
    constants: "P = pressure (Pa), V = volume (m³), n = moles, R = 8.314 J/(mol·K), T = temperature (K)",
    applications: "Chemistry, chemical engineering, atmospheric science, refrigeration, internal combustion engines",
    beauty: 7,
    difficulty: "easy",
    tags: ["thermodynamics", "gases", "equation of state", "chemistry"],
  },
  {
    rank: 50,
    name: "Bell's Inequality",
    equation: "|\\langle AB\\rangle + \\langle AB'\\rangle + \\langle A'B\\rangle - \\langle A'B'\\rangle| \\leq 2",
    discoverer: "John S. Bell",
    year: "1964",
    field: "Quantum Foundations / Quantum Information",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Provides a testable inequality that any local hidden-variable theory must satisfy. Quantum mechanics predicts violations up to 2√2 (Tsirelson bound). Experimental violations proved quantum entanglement is a real, non-classical phenomenon. 2022 Nobel Prize.",
    constants: "A, A' = Alice's measurement settings, B, B' = Bob's measurement settings, ⟨AB⟩ = correlation",
    applications:
      "Quantum cryptography, quantum key distribution (QKD), tests of quantum foundations, quantum computing",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["quantum information", "entanglement", "Bell inequality", "quantum foundations"],
  },
  {
    rank: 51,
    name: "Bernoulli's Equation",
    equation: "p + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{const}",
    discoverer: "Daniel Bernoulli",
    year: "1738",
    field: "Fluid Dynamics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Expresses conservation of energy in fluid flow — as speed increases, pressure decreases. Explains lift in aeronautics, the Venturi effect, and carburetors. One of the most practically important equations in engineering.",
    constants: "p = static pressure, ρ = fluid density, v = flow velocity, g = gravitational acceleration, h = height",
    applications: "Aeronautics (lift), hydraulics, carburetors, Venturi meters, cardiovascular fluid mechanics",
    beauty: 8,
    difficulty: "hard",
    tags: ["fluid dynamics", "aerodynamics", "Bernoulli", "energy conservation"],
  },
  {
    rank: 52,
    name: "Minkowski Metric",
    equation: "ds^2 = -c^2\\,dt^2 + dx^2 + dy^2 + dz^2",
    discoverer: "Hermann Minkowski",
    year: "1908",
    field: "Special Relativity",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "Defines the geometry of flat spacetime in special relativity, unifying space and time with a characteristic minus sign. The invariant ds² is the same for all inertial observers. Provided the geometric foundation that Einstein extended to curved spacetime in GR.",
    constants: "ds = spacetime interval, c = speed of light, dt = time, dx,dy,dz = spatial displacements",
    applications:
      "Special relativity, GPS (relativistic corrections), particle physics kinematics, gravity wave detection",
    beauty: 8,
    difficulty: "hard",
    tags: ["special relativity", "spacetime", "Minkowski", "metric"],
  },
  {
    rank: 53,
    name: "Ricci Flow",
    equation: "\\frac{\\partial g_{ij}}{\\partial t} = -2 R_{ij}",
    discoverer: "Richard Hamilton / Grigori Perelman",
    year: "1982 / 2003",
    field: "Differential Geometry",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "Describes the evolution of a Riemannian metric toward one of more uniform curvature, acting like heat diffusion for geometry. Perelman used Ricci flow with surgery to prove the Poincaré Conjecture — the only solved Millennium Prize Problem.",
    constants: "g_ij = Riemannian metric tensor, R_ij = Ricci curvature tensor, t = flow time parameter",
    applications:
      "Topology (Poincaré conjecture), geometric analysis, 3-manifold classification, possible quantum gravity",
    beauty: 9,
    difficulty: "sota",
    tags: ["differential geometry", "Ricci flow", "topology", "Millennium Prize"],
  },
  {
    rank: 54,
    name: "De Broglie Wavelength",
    equation: "\\lambda = \\frac{h}{p}",
    discoverer: "Louis de Broglie",
    year: "1924",
    field: "Quantum Mechanics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Proposed that matter, like light, has wave properties with wavelength inversely proportional to momentum. The key insight that led Schrödinger to develop his equation. Confirmed by electron diffraction and foundational to all of quantum mechanics.",
    constants: "λ = de Broglie wavelength, h = 6.626×10⁻³⁴ J·s (Planck constant), p = momentum",
    applications:
      "Electron microscopy, quantum computing, neutron scattering, materials characterization, particle physics",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["quantum mechanics", "wave-particle duality", "de Broglie", "matter waves"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CHEMISTRY & MATERIALS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 55,
    name: "Gibbs Free Energy",
    equation: "\\Delta G = \\Delta H - T\\Delta S",
    discoverer: "Josiah Willard Gibbs",
    year: "1873",
    field: "Chemical Thermodynamics",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Predicts whether a chemical reaction proceeds spontaneously at constant temperature and pressure (ΔG < 0). The cornerstone of chemical thermodynamics and biochemistry. Gibbs is considered the greatest American scientist of the 19th century.",
    constants: "ΔG = Gibbs free energy change, ΔH = enthalpy change, T = temperature (K), ΔS = entropy change",
    applications:
      "Chemical reactions, biochemistry, pharmaceutical design, materials synthesis, electrochemistry (batteries)",
    beauty: 8,
    difficulty: "hard",
    tags: ["thermodynamics", "chemistry", "spontaneity", "Gibbs"],
  },
  {
    rank: 56,
    name: "Arrhenius Equation",
    equation: "k = A\\,e^{-E_a/RT}",
    discoverer: "Svante Arrhenius",
    year: "1889",
    field: "Chemical Kinetics",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Describes how reaction rates depend exponentially on temperature. Explains why reactions go faster when heated and underpins the design of industrial chemical processes, drug stability testing, and food preservation.",
    constants:
      "k = rate constant, A = pre-exponential factor, E_a = activation energy, R = 8.314 J/(mol·K), T = temperature",
    applications: "Chemical engineering, drug stability, food science, catalysis design, materials degradation",
    beauty: 7,
    difficulty: "hard",
    tags: ["chemical kinetics", "reaction rates", "Arrhenius", "activation energy"],
  },
  {
    rank: 57,
    name: "Henderson-Hasselbalch Equation",
    equation: "\\mathrm{pH} = \\mathrm{p}K_a + \\log\\!\\frac{[\\mathrm{A}^-]}{[\\mathrm{HA}]}",
    discoverer: "Henderson & Hasselbalch",
    year: "1908–1916",
    field: "Biochemistry",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Relates the pH of a buffer solution to the pKa and concentration ratio of a weak acid and its conjugate base. Essential for understanding blood pH regulation, designing pharmaceutical formulations, and biochemical buffer preparation.",
    constants: "pH = −log[H⁺], pK_a = −log(K_a), [A⁻] = conjugate base concentration, [HA] = acid concentration",
    applications: "Biochemistry, blood pH regulation, pharmaceutical formulation, titration curves, cell biology",
    beauty: 7,
    difficulty: "easy",
    tags: ["biochemistry", "acid-base chemistry", "buffers", "pH"],
  },
  {
    rank: 58,
    name: "Nernst Equation",
    equation: "E = E^\\circ - \\frac{RT}{nF}\\ln Q",
    discoverer: "Walther Nernst",
    year: "1889",
    field: "Electrochemistry / Biophysics",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Relates electrochemical cell potential to the concentrations of reactants. Used in neuroscience to compute membrane resting potentials and in engineering to design batteries and sensors. Nernst received the 1920 Nobel Prize for this and related work.",
    constants:
      "E = cell potential, E° = standard potential, R = gas constant, T = temperature, n = electrons transferred, F = 96485 C/mol (Faraday constant), Q = reaction quotient",
    applications: "Neuroscience (action potentials), batteries, fuel cells, electroplating, pH meters, biosensors",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["electrochemistry", "biophysics", "Nernst", "membrane potential"],
  },
  {
    rank: 59,
    name: "Michaelis-Menten Kinetics",
    equation: "v = \\frac{V_{\\max}[S]}{K_m + [S]}",
    discoverer: "Michaelis & Menten",
    year: "1913",
    field: "Enzymology / Pharmacology",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Describes the rate of enzyme-catalyzed reactions as a function of substrate concentration. The foundation of enzymology and pharmacokinetics. Km (the Michaelis constant) characterises enzyme-substrate affinity and guides drug design.",
    constants:
      "v = reaction velocity, V_max = maximum velocity, [S] = substrate concentration, K_m = Michaelis constant",
    applications: "Drug design, pharmacokinetics, metabolic modelling, bioreactor design, clinical pharmacology",
    beauty: 7,
    difficulty: "hard",
    tags: ["enzymology", "pharmacology", "biochemistry", "kinetics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // BIOLOGY & MEDICINE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 60,
    name: "Hardy-Weinberg Equilibrium",
    equation: "p^2 + 2pq + q^2 = 1",
    discoverer: "Hardy & Weinberg",
    year: "1908",
    field: "Population Genetics",
    domain: "Biology & Medicine",
    subDomain: "Genetics & Evolution",
    domainEmoji: "🧬",
    significance:
      "Describes the expected allele and genotype frequencies in a non-evolving population. The null model of population genetics — deviations from Hardy-Weinberg indicate selection, mutation, drift, or migration. Foundation of GWAS and forensic DNA.",
    constants: "p, q = allele frequencies (p + q = 1), p², 2pq, q² = genotype frequencies",
    applications: "Population genetics, GWAS (genome-wide association studies), forensic DNA, conservation biology",
    beauty: 7,
    difficulty: "easy",
    tags: ["population genetics", "allele frequency", "evolution", "Hardy-Weinberg"],
  },
  {
    rank: 61,
    name: "SIR Epidemic Model",
    equation: "\\frac{dI}{dt} = \\beta SI - \\gamma I",
    discoverer: "Kermack & McKendrick",
    year: "1927",
    field: "Mathematical Epidemiology",
    domain: "Biology & Medicine",
    subDomain: "Medical Sciences",
    domainEmoji: "🧬",
    significance:
      "Models infectious disease spread through Susceptible, Infected, and Recovered compartments. The foundation of modern epidemiological modelling. The basic reproduction number R₀ = β/γ became the most quoted statistic during COVID-19.",
    constants: "S = susceptible, I = infected, R = recovered, β = transmission rate, γ = recovery rate, R₀ = β/γ",
    applications:
      "COVID-19 modelling, vaccine strategy, herd immunity calculation, public health policy, bioterrorism response",
    beauty: 8,
    difficulty: "hard",
    tags: ["epidemiology", "infectious disease", "SIR model", "COVID-19"],
  },
  {
    rank: 62,
    name: "Hodgkin-Huxley Model",
    equation:
      "C_m\\frac{dV}{dt} = I_{\\text{ext}} - g_{\\text{Na}}m^3h(V-E_{\\text{Na}}) - g_K n^4(V-E_K) - g_L(V-E_L)",
    discoverer: "Hodgkin & Huxley",
    year: "1952",
    field: "Computational Neuroscience",
    domain: "Biology & Medicine",
    subDomain: "Neuroscience",
    domainEmoji: "🧬",
    significance:
      "Describes how action potentials are initiated and propagated in neurons using voltage-gated ion channel conductances. Won the 1963 Nobel Prize. The first mechanistic model of a biological computation — the prototype for all computational neuroscience.",
    constants:
      "C_m = membrane capacitance, V = membrane potential, g = conductances, E = reversal potentials, m,h,n = gating variables",
    applications:
      "Computational neuroscience, brain-computer interfaces, neural prosthetics, drug target identification",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["neuroscience", "action potential", "Hodgkin-Huxley", "ion channels"],
  },
  {
    rank: 63,
    name: "Lotka-Volterra Equations",
    equation: "\\frac{dx}{dt} = \\alpha x - \\beta xy, \\quad \\frac{dy}{dt} = \\delta xy - \\gamma y",
    discoverer: "Alfred Lotka & Vito Volterra",
    year: "1920–1926",
    field: "Mathematical Ecology",
    domain: "Biology & Medicine",
    subDomain: "Ecology & Systems Bio",
    domainEmoji: "🧬",
    significance:
      "Describes oscillating predator-prey population dynamics. The simplest model of ecological interaction — produces cyclic behaviour from purely deterministic equations. Foundation of mathematical ecology and applied to arms races, competing firms, and viral spread.",
    constants:
      "x = prey population, y = predator population, α = prey birth rate, β = predation rate, γ = predator death rate, δ = predator growth per prey",
    applications: "Ecology, fisheries management, epidemiology, economic competition modelling, arms race theory",
    beauty: 8,
    difficulty: "hard",
    tags: ["ecology", "predator-prey", "population dynamics", "Lotka-Volterra"],
  },
  {
    rank: 64,
    name: "Logistic Growth Equation",
    equation: "\\frac{dP}{dt} = rP\\!\\left(1 - \\frac{P}{K}\\right)",
    discoverer: "Pierre Verhulst",
    year: "1838",
    field: "Mathematical Biology / Chaos Theory",
    domain: "Biology & Medicine",
    subDomain: "Ecology & Systems Bio",
    domainEmoji: "🧬",
    significance:
      "Models population growth limited by carrying capacity. The discrete version (xₙ₊₁ = rxₙ(1−xₙ)) was the equation that introduced chaos to the public. Robert May showed that a simple biological model could produce deterministic chaos.",
    constants: "P = population, r = intrinsic growth rate, K = carrying capacity, t = time",
    applications: "Population biology, epidemiology, resource management, technology adoption curves, chaos theory",
    beauty: 8,
    difficulty: "hard",
    tags: ["population biology", "chaos theory", "carrying capacity", "logistic"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // COMPUTER SCIENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 65,
    name: "Shannon Entropy",
    equation: "H(X) = -\\sum_{i} p_i \\log_2 p_i",
    discoverer: "Claude Shannon",
    year: "1948",
    field: "Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Quantifies information content — the average surprise in a probability distribution. Founded the entire field of information theory. Shannon proved that data compression cannot go below H bits/symbol and that reliable communication requires channel capacity > H.",
    constants: "H = entropy (bits), p_i = probability of symbol i, log₂ for bits",
    applications:
      "Data compression (Huffman, Lempel-Ziv), cryptography, machine learning (cross-entropy loss), telecommunications",
    beauty: 9,
    difficulty: "hard",
    tags: ["information theory", "Shannon", "entropy", "compression", "cryptography"],
  },
  {
    rank: 66,
    name: "Halting Problem (Undecidability)",
    equation: "\\nexists \\text{ algorithm } H: H(P,x) \\text{ decides whether } P(x) \\text{ halts}",
    discoverer: "Alan Turing",
    year: "1936",
    field: "Computability Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Proves no general algorithm can determine whether an arbitrary program halts on a given input. Established the fundamental limits of computation — some problems are undecidable by any algorithm. The foundation of theoretical computer science.",
    constants: "P = program, x = input, H = hypothetical halting decider, Turing machine model",
    applications: "Compiler design, formal verification, program analysis, Rice's theorem, software testing theory",
    beauty: 10,
    difficulty: "hard",
    tags: ["computability", "Turing", "undecidability", "theoretical CS"],
  },
  {
    rank: 67,
    name: "P vs NP",
    equation: "\\mathsf{P} \\overset{?}{=} \\mathsf{NP}",
    discoverer: "Stephen Cook / Leonid Levin",
    year: "1971",
    field: "Computational Complexity",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Asks whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time. The most important open problem in computer science. A proof that P ≠ NP would have profound consequences for cryptography, AI, and optimization.",
    constants: "P = polynomial-time solvable, NP = nondeterministic polynomial-time verifiable, NP-complete",
    applications: "Cryptography (security depends on P≠NP), AI, scheduling, logistics, protein folding",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    unsolved: true,
    tags: ["complexity theory", "NP-complete", "Millennium Prize", "cryptography"],
  },
  {
    rank: 68,
    name: "RSA Encryption",
    equation: "c \\equiv m^e \\pmod{n}, \\quad m \\equiv c^d \\pmod{n}",
    discoverer: "Rivest, Shamir & Adleman",
    year: "1977",
    field: "Cryptography / Number Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "The first practical public-key cryptosystem, based on the presumed difficulty of factoring large integers. Secures the majority of internet communications today. The practical link between number theory and the digital security of civilisation.",
    constants:
      "m = plaintext, c = ciphertext, e = public exponent, d = private exponent, n = pq (product of two large primes)",
    applications: "HTTPS/TLS, digital signatures, certificate authorities, secure email, online banking",
    beauty: 8,
    difficulty: "hard",
    tags: ["cryptography", "public-key", "RSA", "number theory"],
  },
  {
    rank: 69,
    name: "PageRank Algorithm",
    equation: "PR(u) = \\frac{1-d}{N} + d\\sum_{v\\to u}\\frac{PR(v)}{\\deg(v)}",
    discoverer: "Larry Page & Sergey Brin",
    year: "1998",
    field: "Graph Theory / Linear Algebra",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Models web-page importance as the stationary distribution of a random surfer's walk over the hyperlink graph. Powered Google's original search engine and transformed information retrieval. Conceptually equivalent to the principal eigenvector of the web matrix.",
    constants: "PR = PageRank score, d = damping factor (≈0.85), N = total pages, deg(v) = out-degree",
    applications: "Web search, citation analysis, recommendation systems, network centrality, social network analysis",
    beauty: 8,
    difficulty: "hard",
    tags: ["graph theory", "linear algebra", "search engines", "network analysis"],
  },
  {
    rank: 70,
    name: "Attention Mechanism (Transformer)",
    equation: "\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\!\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V",
    discoverer: "Vaswani et al. (Google Brain)",
    year: "2017",
    field: "Deep Learning / NLP",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Scaled dot-product attention, the core operation in every transformer model. Enabled parallelizable sequence modelling, replacing RNNs. The equation behind GPT, Claude, Gemini, LLaMA, DALL-E, AlphaFold — arguably the most impactful ML equation of the 21st century.",
    constants: "Q = query matrix, K = key matrix, V = value matrix, d_k = key dimension (scaling factor)",
    applications:
      "Large language models (GPT, Claude, Gemini), machine translation, image generation, AlphaFold, code generation",
    beauty: 9,
    difficulty: "hard",
    tags: ["deep learning", "transformers", "LLM", "attention", "NLP"],
  },
  {
    rank: 71,
    name: "Backpropagation (Chain Rule)",
    equation:
      "\\frac{\\partial \\mathcal{L}}{\\partial w_{ij}} = \\frac{\\partial \\mathcal{L}}{\\partial a_j}\\cdot\\frac{\\partial a_j}{\\partial w_{ij}}",
    discoverer: "Rumelhart, Hinton & Williams",
    year: "1986",
    field: "Machine Learning",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Efficiently computes gradients of the loss w.r.t. all network weights by recursive application of the chain rule. Makes training deep neural networks tractable. The algorithm that enabled the deep learning revolution and all modern AI.",
    constants: "ℒ = loss function, w_ij = weights, a_j = activations, ∂ = partial derivative",
    applications: "All deep learning: image recognition, NLP, speech, generative AI, reinforcement learning",
    beauty: 8,
    difficulty: "hard",
    tags: ["neural networks", "backpropagation", "deep learning", "gradient"],
  },
  {
    rank: 72,
    name: "Softmax Function",
    equation: "\\sigma(\\mathbf{z})_i = \\frac{e^{z_i}}{\\sum_j e^{z_j}}",
    discoverer: "Bridle (named) / various",
    year: "1990",
    field: "Machine Learning",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Converts a vector of raw scores (logits) into a probability distribution over classes. The standard output layer for multiclass classification and the normalisation step in attention mechanisms. Present in virtually every modern neural network.",
    constants: "z = input logit vector, e = Euler's number, σ(z)_i = probability of class i",
    applications:
      "Neural network classifiers, transformer attention, language model token prediction, RL policy networks",
    beauty: 7,
    difficulty: "hard",
    tags: ["machine learning", "neural networks", "softmax", "classification"],
  },
  {
    rank: 73,
    name: "Master Theorem",
    equation: "T(n) = aT(n/b) + f(n) \\;\\Rightarrow\\; T(n) = \\Theta(n^{\\log_b a}) \\text{ (case 1)}",
    discoverer: "Bentley, Haken & Saxe",
    year: "1980",
    field: "Algorithms & Complexity",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Provides a closed-form solution for divide-and-conquer recurrences. The universal tool for algorithm analysis — every CS student's most-used theorem for proving time complexity of recursive algorithms.",
    constants: "T(n) = time complexity, a = number of subproblems, b = size reduction factor, f(n) = combining cost",
    applications:
      "Algorithm analysis (mergesort O(n log n), FFT O(n log n), binary search O(log n)), CS courses worldwide",
    beauty: 7,
    difficulty: "hard",
    tags: ["algorithms", "complexity", "recurrences", "divide and conquer"],
  },
  {
    rank: 74,
    name: "VC Dimension / PAC Learning Bound",
    equation: "m \\geq \\frac{1}{\\varepsilon}\\!\\left(\\ln|\\mathcal{H}| + \\ln\\frac{1}{\\delta}\\right)",
    discoverer: "Vapnik & Chervonenkis",
    year: "1971",
    field: "Statistical Learning Theory",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Establishes how many training examples are needed to learn with probabilistic guarantees. The theoretical foundation of machine learning — defines when a model will generalise. VC dimension measures the capacity of a hypothesis class.",
    constants: "m = sample size, ε = error bound, δ = failure probability, |ℋ| = hypothesis class size",
    applications: "Generalisation bounds, model selection, SVM theory, neural network theory, learning guarantees",
    beauty: 8,
    difficulty: "sota",
    tags: ["learning theory", "VC dimension", "PAC learning", "generalisation"],
  },
  {
    rank: 75,
    name: "Qubit Superposition",
    equation: "|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle, \\quad |\\alpha|^2 + |\\beta|^2 = 1",
    discoverer: "Feynman / Deutsch / Benioff",
    year: "1982",
    field: "Quantum Computing",
    domain: "Computer Science",
    subDomain: "Quantum Computing",
    domainEmoji: "💻",
    significance:
      "The fundamental unit of quantum information — a qubit can exist in a superposition of |0⟩ and |1⟩ simultaneously. Enables quantum parallelism and exponential state spaces. The starting point of all quantum algorithms and quantum information theory.",
    constants:
      "α, β = complex probability amplitudes, |0⟩, |1⟩ = computational basis states, Bloch sphere representation",
    applications:
      "Quantum algorithms (Shor, Grover), quantum error correction, quantum key distribution (QKD), quantum simulation",
    beauty: 9,
    difficulty: "hard",
    tags: ["quantum computing", "qubits", "superposition", "quantum information"],
  },
  {
    rank: 76,
    name: "Shor's Factoring Algorithm",
    equation: "\\text{Period-finding via QFT} \\Rightarrow \\text{factoring in } O((\\log N)^3)",
    discoverer: "Peter Shor",
    year: "1994",
    field: "Quantum Computing / Number Theory",
    domain: "Computer Science",
    subDomain: "Quantum Computing",
    domainEmoji: "💻",
    significance:
      "Factors large integers exponentially faster than any known classical algorithm using quantum Fourier transform. Would break RSA encryption. The most important quantum algorithm — it is the primary driver of the post-quantum cryptography standardisation effort.",
    constants: "N = integer to factor, QFT = quantum Fourier transform, complexity O((log N)³)",
    applications:
      "Post-quantum cryptography, quantum supremacy demonstrations, public-key security, quantum hardware benchmarks",
    beauty: 10,
    difficulty: "sota",
    tags: ["quantum computing", "Shor", "factoring", "post-quantum cryptography"],
  },
  {
    rank: 77,
    name: "De Morgan's Laws",
    equation: "\\lnot(A \\land B) = \\lnot A \\lor \\lnot B",
    discoverer: "Augustus De Morgan",
    year: "1847",
    field: "Boolean Algebra / Logic",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Fundamental laws of Boolean algebra showing how AND and OR relate under negation. The building blocks of digital logic simplification, compiler optimisation, and database query rewriting.",
    constants: "A, B = logical propositions, ¬ = NOT, ∧ = AND, ∨ = OR",
    applications: "Digital circuits, CPU design, compiler optimisation, database query processing, formal verification",
    beauty: 7,
    difficulty: "easy",
    tags: ["logic", "Boolean algebra", "digital circuits", "compiler"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // FINANCE & QUANTITATIVE FINANCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 78,
    name: "Itô's Lemma",
    equation:
      "df = \\left(\\frac{\\partial f}{\\partial t} + \\mu\\frac{\\partial f}{\\partial x} + \\frac{\\sigma^2}{2}\\frac{\\partial^2 f}{\\partial x^2}\\right)dt + \\sigma\\frac{\\partial f}{\\partial x}\\,dW_t",
    discoverer: "Kiyosi Itô",
    year: "1944–1951",
    field: "Stochastic Calculus",
    domain: "Finance & Quant",
    subDomain: "Stochastic Calculus",
    domainEmoji: "💹",
    significance:
      "The stochastic chain rule — the foundation of all continuous-time finance. The correction term σ²/2 · ∂²f/∂x² arises because Brownian motion has non-zero quadratic variation. Without Itô's lemma, Black-Scholes and all modern derivatives pricing would be impossible.",
    constants: "f = smooth function, μ = drift, σ = volatility, W_t = Wiener process (Brownian motion)",
    applications:
      "Derivatives pricing, stochastic control, financial risk models, hedge fund strategies, quantitative trading",
    beauty: 10,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["stochastic calculus", "Itô", "Brownian motion", "derivatives"],
  },
  {
    rank: 79,
    name: "Black-Scholes-Merton Equation",
    equation:
      "\\frac{\\partial V}{\\partial t} + \\frac{\\sigma^2 S^2}{2}\\frac{\\partial^2 V}{\\partial S^2} + rS\\frac{\\partial V}{\\partial S} - rV = 0",
    discoverer: "Black, Scholes & Merton",
    year: "1973",
    field: "Mathematical Finance",
    domain: "Finance & Quant",
    subDomain: "Derivatives Pricing",
    domainEmoji: "💹",
    significance:
      "Provides the first arbitrage-free model for pricing options. Transformed financial markets — creating the modern derivatives industry. Won Scholes and Merton the 1997 Nobel Prize in Economics. Derived from Itô's lemma and the no-arbitrage principle.",
    constants: "V = option value, S = underlying price, σ = volatility, r = risk-free rate, t = time to expiry",
    applications: "Options markets, structured products, risk management, hedging, volatility surfaces",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["financial mathematics", "options", "Black-Scholes", "derivatives", "Nobel Prize"],
  },
  {
    rank: 80,
    name: "Risk-Neutral Pricing",
    equation: "V_0 = e^{-rT}\\,\\mathbb{E}^\\mathbb{Q}[V_T]",
    discoverer: "Harrison & Kreps / Harrison & Pliska",
    year: "1979–1981",
    field: "Mathematical Finance",
    domain: "Finance & Quant",
    subDomain: "Derivatives Pricing",
    domainEmoji: "💹",
    significance:
      "States that the fair price of any derivative equals its expected payoff under the risk-neutral measure, discounted at the risk-free rate. The theoretical bedrock of all modern derivatives pricing — more general than Black-Scholes and valid in any complete market.",
    constants:
      "V₀ = present fair value, r = risk-free rate, T = maturity, 𝔼^ℚ = expectation under risk-neutral (martingale) measure",
    applications:
      "All derivatives pricing, structured products, interest rate models (HJM, LMM), CVA/XVA, exotic options",
    beauty: 9,
    difficulty: "sota",
    tags: ["mathematical finance", "risk-neutral", "martingale", "derivatives"],
  },
  {
    rank: 81,
    name: "CAPM",
    equation: "\\mathbb{E}[R_i] = R_f + \\beta_i\\,(\\mathbb{E}[R_m] - R_f)",
    discoverer: "Sharpe / Lintner / Mossin",
    year: "1964–1966",
    field: "Asset Pricing",
    domain: "Finance & Quant",
    subDomain: "Portfolio Theory",
    domainEmoji: "💹",
    significance:
      "The Capital Asset Pricing Model relates expected return to systematic risk (beta). The first and most-taught asset pricing model, earning Sharpe the 1990 Nobel Prize. Despite empirical challenges, remains the standard tool for cost of equity estimation.",
    constants:
      "𝔼[Rᵢ] = expected return, R_f = risk-free rate, β_i = systematic risk coefficient, 𝔼[R_m] = market return",
    applications:
      "Equity valuation, cost of capital (WACC), portfolio construction, performance attribution, ESG factor analysis",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["asset pricing", "CAPM", "portfolio theory", "beta", "finance"],
  },
  {
    rank: 82,
    name: "Markowitz Mean-Variance Optimisation",
    equation:
      "\\min_{\\mathbf{w}}\\;\\mathbf{w}^\\top\\Sigma\\mathbf{w} \\quad \\text{s.t.}\\quad \\mathbf{w}^\\top\\boldsymbol{\\mu}=\\mu_p,\\;\\mathbf{w}^\\top\\mathbf{1}=1",
    discoverer: "Harry Markowitz",
    year: "1952",
    field: "Portfolio Theory",
    domain: "Finance & Quant",
    subDomain: "Portfolio Theory",
    domainEmoji: "💹",
    significance:
      "Formalised the risk-return trade-off for portfolios and defined the efficient frontier. Founded modern portfolio theory, earning Markowitz the 1990 Nobel Prize. Showed mathematically that diversification reduces risk without sacrificing return.",
    constants: "w = portfolio weights vector, Σ = covariance matrix, μ = expected returns vector, μ_p = target return",
    applications:
      "Institutional asset allocation, robo-advisors, risk-parity strategies, factor investing, liability-driven investing",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["portfolio theory", "Markowitz", "efficient frontier", "diversification"],
  },
  {
    rank: 83,
    name: "Girsanov's Theorem",
    equation:
      "\\frac{d\\mathbb{Q}}{d\\mathbb{P}} = \\exp\\!\\left(-\\int_0^T\\theta_t\\,dW_t - \\frac{1}{2}\\int_0^T\\theta_t^2\\,dt\\right)",
    discoverer: "Igor Girsanov",
    year: "1960",
    field: "Stochastic Calculus",
    domain: "Finance & Quant",
    subDomain: "Stochastic Calculus",
    domainEmoji: "💹",
    significance:
      "Shows how changing probability measure transforms a drifting Brownian motion into a standard Brownian motion. The theoretical machinery behind the risk-neutral measure change used in all derivatives pricing. Connects the real world ℙ to the pricing world ℚ.",
    constants: "ℚ/ℙ = risk-neutral/real-world measures, θ_t = market price of risk, W_t = Brownian motion",
    applications: "Derivatives pricing (change of measure), interest rate modelling, exotic option valuation, XVA",
    beauty: 8,
    difficulty: "sota",
    tags: ["stochastic calculus", "Girsanov", "measure change", "risk-neutral"],
  },
  {
    rank: 84,
    name: "Value at Risk",
    equation: "\\mathrm{VaR}_\\alpha = -\\inf\\{x : P(L > x) \\leq 1 - \\alpha\\}",
    discoverer: "JP Morgan RiskMetrics",
    year: "1994",
    field: "Risk Management",
    domain: "Finance & Quant",
    subDomain: "Risk Management",
    domainEmoji: "💹",
    significance:
      "Defines the maximum loss at a given confidence level over a specified horizon. The standard industry risk metric mandated by Basel II/III banking regulations. Criticised for failing to capture tail risk, which led to Expected Shortfall (CVaR) as a superior complement.",
    constants: "L = loss distribution, α = confidence level (95% or 99%), VaR = quantile of loss distribution",
    applications: "Banking regulatory capital (Basel III), trading book risk, portfolio stress testing, risk reporting",
    beauty: 6,
    difficulty: "hard",
    tags: ["risk management", "VaR", "Basel", "quantile", "financial regulation"],
  },
  {
    rank: 85,
    name: "Put-Call Parity",
    equation: "C - P = S - K e^{-rT}",
    discoverer: "Stoll / Black-Scholes era",
    year: "1969",
    field: "Derivatives Pricing",
    domain: "Finance & Quant",
    subDomain: "Derivatives Pricing",
    domainEmoji: "💹",
    significance:
      "An arbitrage-free relationship between European call and put prices. The simplest no-arbitrage constraint in options markets. Allows derivation of put prices from calls, detection of mispricings, and construction of synthetic positions.",
    constants:
      "C = call price, P = put price, S = spot price, K = strike price, r = risk-free rate, T = time to maturity",
    applications:
      "Options arbitrage, synthetic position construction, implied volatility surfaces, option market making",
    beauty: 7,
    difficulty: "hard",
    tags: ["options", "arbitrage", "put-call parity", "derivatives"],
  },
  {
    rank: 86,
    name: "Fundamental Theorem of Asset Pricing",
    equation: "\\text{No arbitrage} \\Leftrightarrow \\exists\\,\\text{equivalent martingale measure }\\mathbb{Q}",
    discoverer: "Harrison & Pliska",
    year: "1981",
    field: "Mathematical Finance",
    domain: "Finance & Quant",
    subDomain: "Derivatives Pricing",
    domainEmoji: "💹",
    significance:
      "Characterises arbitrage-free markets via the existence of a risk-neutral probability measure. The theoretical bedrock connecting no-arbitrage to martingale pricing. Complete markets additionally require a unique such measure (second fundamental theorem).",
    constants: "ℚ = risk-neutral (equivalent martingale) measure, ℙ = real-world probability measure",
    applications: "All derivatives pricing theory, model validation, regulatory capital models, structured products",
    beauty: 9,
    difficulty: "sota",
    tags: ["mathematical finance", "arbitrage", "martingale", "risk-neutral pricing"],
  },
  {
    rank: 87,
    name: "Black-Litterman Model",
    equation:
      "\\boldsymbol{\\mu}_{BL} = \\left[(\\tau\\Sigma)^{-1} + P^\\top\\Omega^{-1}P\\right]^{-1}\\!\\left[(\\tau\\Sigma)^{-1}\\Pi + P^\\top\\Omega^{-1}Q\\right]",
    discoverer: "Fischer Black & Robert Litterman",
    year: "1990",
    field: "Portfolio Management",
    domain: "Finance & Quant",
    subDomain: "Portfolio Theory",
    domainEmoji: "💹",
    significance:
      "Combines equilibrium market returns with subjective investor views in a Bayesian framework. Solves the problem of extreme, unstable Markowitz weights by anchoring to CAPM equilibrium. Widely used at Goldman Sachs and institutional asset managers globally.",
    constants:
      "Π = equilibrium returns, P = views matrix, Q = views vector, Ω = view uncertainty matrix, τ = scaling constant",
    applications:
      "Institutional portfolio management, tactical asset allocation, hedge fund systematic strategies, factor investing",
    beauty: 7,
    difficulty: "sota",
    tags: ["portfolio theory", "Black-Litterman", "Bayesian", "asset allocation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ECONOMICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 88,
    name: "Nash Equilibrium",
    equation: "u_i(\\sigma_i^*,\\sigma_{-i}^*) \\geq u_i(\\sigma_i,\\sigma_{-i}^*) \\quad \\forall i, \\sigma_i",
    discoverer: "John Nash",
    year: "1950",
    field: "Game Theory",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "A strategy profile where no player can improve their payoff by unilaterally changing strategy. Earned Nash the 1994 Nobel Prize. The central solution concept of non-cooperative game theory, applied from auctions to evolutionary biology to AI multi-agent systems.",
    constants: "u_i = player i's utility, σ_i = player i's strategy, σ_{-i} = other players' strategies",
    applications:
      "Economics, mechanism design, auctions, evolutionary biology, AI multi-agent systems, political science",
    beauty: 9,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["game theory", "Nash equilibrium", "economics", "strategy"],
  },
  {
    rank: 89,
    name: "Ordinary Least Squares",
    equation: "\\hat{\\boldsymbol{\\beta}} = (X^\\top X)^{-1}X^\\top \\mathbf{y}",
    discoverer: "Gauss / Legendre",
    year: "1794–1805",
    field: "Econometrics / Statistics",
    domain: "Economics",
    subDomain: "Econometrics",
    domainEmoji: "📊",
    significance:
      "The closed-form solution minimising the sum of squared residuals. The foundation of statistical regression and econometrics. By the Gauss-Markov theorem, OLS is the Best Linear Unbiased Estimator (BLUE) under homoscedastic errors.",
    constants: "β̂ = estimated coefficients, X = design matrix, y = response vector, X^⊤ = transpose",
    applications:
      "Econometrics, social science research, machine learning (linear regression), causal inference, forecasting",
    beauty: 7,
    difficulty: "hard",
    tags: ["econometrics", "regression", "OLS", "statistics", "Gauss-Markov"],
  },
  {
    rank: 90,
    name: "Prospect Theory Value Function",
    equation: "v(x) = \\begin{cases}x^\\alpha & x \\geq 0 \\\\ -\\lambda(-x)^\\beta & x < 0\\end{cases}",
    discoverer: "Daniel Kahneman & Amos Tversky",
    year: "1979",
    field: "Behavioural Economics",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "Models how people evaluate gains and losses asymmetrically relative to a reference point. Loss aversion (λ > 1) and diminishing sensitivity explain systematic departures from expected utility theory. Kahneman won the 2002 Nobel Prize. The most influential model in behavioural economics.",
    constants:
      "x = outcome relative to reference point, α, β ≈ 0.88 = diminishing sensitivity, λ ≈ 2.25 = loss aversion coefficient",
    applications: "Behavioural finance, policy nudges, insurance pricing, UX design, marketing, welfare economics",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["behavioural economics", "prospect theory", "loss aversion", "Kahneman"],
  },
  {
    rank: 91,
    name: "Solow Growth Model",
    equation: "\\dot{k} = s\\,f(k) - (n + g + \\delta)\\,k",
    discoverer: "Robert Solow",
    year: "1956",
    field: "Macroeconomics / Growth Theory",
    domain: "Economics",
    subDomain: "Macroeconomics",
    domainEmoji: "📊",
    significance:
      "Explains long-run economic growth through capital accumulation, labour force growth, and technological progress. Showed that savings rate affects levels but not long-run growth rates. Earned Solow the 1987 Nobel Prize and remains the baseline growth model.",
    constants:
      "k = capital per effective worker, s = savings rate, f(k) = production function, n = population growth, g = technology growth, δ = depreciation",
    applications: "Development economics, growth accounting, policy analysis, cross-country income comparisons",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["macroeconomics", "growth theory", "Solow", "capital accumulation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ENGINEERING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 92,
    name: "PID Controller",
    equation: "u(t) = K_p e(t) + K_i\\int_0^t e(\\tau)\\,d\\tau + K_d\\frac{de}{dt}",
    discoverer: "Minorsky / Ziegler & Nichols",
    year: "1922 / 1942",
    field: "Control Theory",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "The most widely deployed feedback control algorithm in industry, estimated to run in over 90% of industrial control loops. Proportional-Integral-Derivative action provides intuitive and robust feedback control for virtually any process.",
    constants:
      "u = control output, e = error (setpoint − measurement), K_p = proportional gain, K_i = integral gain, K_d = derivative gain",
    applications: "Industrial automation, robotics (joint control), HVAC, aviation autopilots, motor drives, drones",
    beauty: 7,
    difficulty: "hard",
    tags: ["control theory", "PID", "feedback", "automation", "robotics"],
  },
  {
    rank: 93,
    name: "Tsiolkovsky Rocket Equation",
    equation: "\\Delta v = v_e \\ln\\!\\frac{m_0}{m_f}",
    discoverer: "Konstantin Tsiolkovsky",
    year: "1903",
    field: "Aerospace Engineering",
    domain: "Engineering",
    subDomain: "Aerospace Engineering",
    domainEmoji: "⚙️",
    significance:
      "Relates a rocket's velocity change to its exhaust velocity and the ratio of initial to final mass. The fundamental equation governing all rocket propulsion. Derived in 1903 — before powered flight — and still the governing equation for SpaceX and NASA missions.",
    constants:
      "Δv = velocity change (budget), v_e = effective exhaust velocity (Isp × g₀), m₀ = initial (wet) mass, m_f = final (dry) mass",
    applications:
      "Rocket design, orbital mechanics, mission planning, stage separation optimisation, reusable launch vehicle design",
    beauty: 9,
    difficulty: "hard",
    tags: ["aerospace", "rockets", "orbital mechanics", "propulsion"],
  },
  {
    rank: 94,
    name: "Euler-Bernoulli Beam Equation",
    equation: "EI\\frac{d^4 w}{dx^4} = q(x)",
    discoverer: "Euler & Bernoulli",
    year: "1750",
    field: "Structural Engineering",
    domain: "Engineering",
    subDomain: "Mechanical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Describes the deflection of slender beams under distributed loading. Foundation of structural engineering — used in the design of virtually every building, bridge, aircraft wing, and MEMS device. One of the most practically impactful PDEs in engineering.",
    constants:
      "E = Young's modulus (stiffness), I = second moment of area (cross-section), w(x) = deflection, q(x) = distributed load",
    applications: "Structural engineering, civil engineering, MEMS devices, aerospace structures, mechanical design",
    beauty: 7,
    difficulty: "hard",
    tags: ["structural engineering", "beam theory", "PDEs", "mechanics"],
  },
  {
    rank: 95,
    name: "Fourier's Law of Heat Conduction",
    equation: "\\mathbf{q} = -k\\,\\nabla T",
    discoverer: "Joseph Fourier",
    year: "1822",
    field: "Heat Transfer",
    domain: "Engineering",
    subDomain: "Mechanical Engineering",
    domainEmoji: "⚙️",
    significance:
      "States that heat flows from high to low temperature, proportional to the temperature gradient. One of the first field equations and the foundation of all heat transfer engineering. Also led Fourier to develop his famous series and transform.",
    constants: "q = heat flux vector (W/m²), k = thermal conductivity (W/m·K), ∇T = temperature gradient",
    applications: "Electronics cooling, building insulation, HVAC design, nuclear reactor design, climate modelling",
    beauty: 7,
    difficulty: "easy",
    tags: ["heat transfer", "thermodynamics", "Fourier", "conduction"],
  },
  {
    rank: 96,
    name: "Kepler's Third Law",
    equation: "\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM}",
    discoverer: "Johannes Kepler",
    year: "1619",
    field: "Orbital Mechanics / Astronomy",
    domain: "Engineering",
    subDomain: "Aerospace Engineering",
    domainEmoji: "⚙️",
    significance:
      "Relates the orbital period to the semi-major axis for any body orbiting a central mass. Allowed Newton to derive the inverse-square gravity law and underpins all satellite orbit design, GPS constellation management, and exoplanet detection.",
    constants: "T = orbital period, a = semi-major axis, G = gravitational constant, M = central body mass, 4π²",
    applications:
      "Satellite design, GPS, space mission planning, exoplanet detection (transit and radial velocity), tidal locking",
    beauty: 8,
    difficulty: "hard",
    tags: ["orbital mechanics", "astronomy", "Kepler", "gravitation"],
  },
  {
    rank: 97,
    name: "Laplace Transform",
    equation: "\\mathcal{L}\\{f(t)\\}(s) = \\int_0^\\infty f(t)\\,e^{-st}\\,dt",
    discoverer: "Pierre-Simon Laplace",
    year: "1782",
    field: "Applied Mathematics / Control Theory",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Converts differential equations in the time domain to algebraic equations in the complex frequency domain. Indispensable in electrical engineering and control theory. The inverse Laplace transform and transfer functions define modern control systems design.",
    constants: "f(t) = time-domain function, s = complex frequency (σ + iω), F(s) = Laplace transform",
    applications: "Control systems, electrical circuits, signal processing, mechanical vibrations, quantum mechanics",
    beauty: 8,
    difficulty: "hard",
    tags: ["control theory", "transforms", "differential equations", "engineering"],
  },
  {
    rank: 98,
    name: "Poisson's Equation",
    equation: "\\nabla^2 \\varphi = -\\frac{\\rho}{\\varepsilon_0}",
    discoverer: "Siméon Denis Poisson",
    year: "1813",
    field: "Mathematical Physics / Electrostatics",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Describes how a source distribution (charge, mass, heat) generates a potential field. The fundamental equation of electrostatics, Newtonian gravity, steady-state heat conduction, and fluid potential flow. The inhomogeneous version of Laplace's equation.",
    constants:
      "∇² = Laplacian operator, φ = scalar potential, ρ = source density, ε₀ = electric permittivity of vacuum",
    applications:
      "Electrostatics, gravity, heat conduction, image processing (inpainting), fluid mechanics, computer graphics",
    beauty: 8,
    difficulty: "hard",
    tags: ["electrostatics", "PDEs", "potential theory", "Poisson"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // DATA SCIENCE & STATISTICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 99,
    name: "Kolmogorov-Smirnov Test Statistic",
    equation: "D_n = \\sup_x |F_n(x) - F(x)|",
    discoverer: "Kolmogorov & Smirnov",
    year: "1933–1948",
    field: "Nonparametric Statistics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "A non-parametric test of whether a sample comes from a specified distribution. Widely used in data science for distribution validation, model backtesting, and detecting data drift in ML systems — all without assuming a parametric form.",
    constants: "D_n = test statistic, F_n = empirical CDF, F = theoretical CDF, sup = supremum",
    applications: "Data validation, model backtesting (finance), distribution testing, data drift detection, genomics",
    beauty: 7,
    difficulty: "hard",
    tags: ["statistics", "nonparametric", "distribution testing", "data science"],
  },
  {
    rank: 100,
    name: "Survival Function (Force of Mortality)",
    equation: "S(t) = \\exp\\!\\left(-\\int_0^t \\mu(s)\\,ds\\right)",
    discoverer: "Gompertz / actuarial tradition",
    year: "1825",
    field: "Survival Analysis / Actuarial Science",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Gives the probability of surviving beyond time t as the exponential of the integrated hazard rate. The foundational function of survival analysis, life insurance pricing, and reliability engineering. μ(t) generalises to any hazard — from human mortality to machine failure.",
    constants: "S(t) = survival probability at time t, μ(s) = force of mortality / hazard rate at time s",
    applications:
      "Life insurance pricing, pension valuation, clinical trials (survival endpoints), reliability engineering, churn modelling",
    beauty: 7,
    difficulty: "hard",
    tags: ["survival analysis", "actuarial science", "hazard rate", "reliability"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // EARTH & SPACE SCIENCES
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 101,
    name: "Stefan-Boltzmann Law",
    equation: "j^* = \\sigma T^4",
    discoverer: "Stefan & Boltzmann",
    year: "1879–1884",
    field: "Astrophysics / Thermodynamics",
    domain: "Earth & Space",
    subDomain: "Astronomy & Astrophysics",
    domainEmoji: "🌍",
    significance:
      "Describes the total power radiated per unit area of a blackbody as proportional to the fourth power of temperature. Used to calculate stellar luminosity, effective temperatures of planets, climate energy balance, and the design of thermal radiators.",
    constants:
      "j* = power radiated per unit area, σ = 5.67×10⁻⁸ W/(m²·K⁴) (Stefan-Boltzmann constant), T = absolute temperature",
    applications:
      "Stellar classification, planet surface temperatures, climate science (energy balance), infrared sensors, thermal design",
    beauty: 7,
    difficulty: "hard",
    tags: ["astrophysics", "blackbody radiation", "climate", "Stefan-Boltzmann"],
  },
  {
    rank: 102,
    name: "Friedmann Equations",
    equation:
      "H^2 = \\left(\\frac{\\dot{a}}{a}\\right)^2 = \\frac{8\\pi G}{3}\\rho - \\frac{kc^2}{a^2} + \\frac{\\Lambda c^2}{3}",
    discoverer: "Alexander Friedmann",
    year: "1922",
    field: "Cosmology",
    domain: "Earth & Space",
    subDomain: "Astronomy & Astrophysics",
    domainEmoji: "🌍",
    significance:
      "Govern the expansion of the universe from Einstein's field equations. Predicted the Big Bang and cosmic expansion before Hubble's observations. The Λ term (cosmological constant / dark energy) now dominates the universe's energy budget.",
    constants:
      "H = Hubble parameter, a = scale factor, ρ = energy density, k = curvature parameter, Λ = cosmological constant",
    applications: "Cosmology, dark energy models, Big Bang nucleosynthesis, CMB analysis, structure formation",
    beauty: 9,
    difficulty: "sota",
    tags: ["cosmology", "Big Bang", "dark energy", "general relativity"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ADDITIONAL SIGNIFICANT EQUATIONS (completing to 150)
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 103,
    name: "Poisson Distribution",
    equation: "P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
    discoverer: "Siméon Poisson",
    year: "1837",
    field: "Probability Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Models the probability of a given number of events occurring in a fixed interval of time or space when events occur independently at a constant average rate. One of the most important discrete distributions, arising wherever rare events are counted.",
    constants: "λ = average event rate, k = number of events, e ≈ 2.718, k! = factorial",
    applications:
      "Telecommunications (call arrivals), epidemiology, insurance (claims), astronomy, queueing theory, ML (count models)",
    beauty: 7,
    difficulty: "hard",
    tags: ["probability", "distribution", "Poisson", "counting"],
  },
  {
    rank: 104,
    name: "Laplace Transform (Bilateral)",
    equation: "\\mathcal{L}\\{f\\}(s) = F(s),\\quad \\mathcal{L}^{-1}\\{F\\}(t) = f(t)",
    discoverer: "Pierre-Simon Laplace",
    year: "1782",
    field: "Applied Mathematics",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "The transform pair that converts between time domain and complex frequency domain. The language of control engineers and electrical engineers worldwide. Makes ODE solving algebraic and enables the transfer function framework of systems analysis.",
    constants: "f(t) = time domain, F(s) = s-domain, s = complex frequency = σ + iω",
    applications:
      "Control systems, electrical circuits, signal processing, system identification, differential equations",
    beauty: 8,
    difficulty: "hard",
    tags: ["transforms", "control theory", "differential equations", "signal processing"],
  },
  {
    rank: 105,
    name: "Parseval's Theorem",
    equation: "\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = \\int_{-\\infty}^\\infty |\\hat{f}(\\xi)|^2\\,d\\xi",
    discoverer: "Marc-Antoine Parseval",
    year: "1799",
    field: "Harmonic Analysis",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "States that the total energy of a signal is preserved under Fourier transformation. Links time-domain energy to frequency-domain energy. The continuous version of Plancherel's theorem and fundamental to signal processing theory.",
    constants: "f(t) = time-domain signal, f̂(ξ) = Fourier transform, energy = L² norm squared",
    applications: "Signal processing, acoustics, power spectral density, communications, audio engineering",
    beauty: 7,
    difficulty: "hard",
    tags: ["Fourier analysis", "signal processing", "energy", "Parseval"],
  },
  {
    rank: 106,
    name: "Divergence Theorem (Gauss's Theorem)",
    equation: "\\oiint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iiint_V (\\nabla\\cdot\\mathbf{F})\\,dV",
    discoverer: "Gauss / Ostrogradsky",
    year: "1813–1826",
    field: "Vector Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Relates the outward flux of a vector field through a closed surface to the divergence throughout the enclosed volume. One of the great unification theorems, relating surface to volume integrals. Central to electromagnetism (Gauss's law) and fluid dynamics.",
    constants: "F = vector field, S = closed surface, V = enclosed volume, ∇· = divergence operator",
    applications: "Electromagnetism (Gauss's law), fluid dynamics (conservation), heat transfer, computational physics",
    beauty: 8,
    difficulty: "hard",
    tags: ["vector calculus", "divergence theorem", "electromagnetism", "Gauss"],
  },
  {
    rank: 107,
    name: "Hamilton's Quaternions",
    equation: "\\mathbf{i}^2 = \\mathbf{j}^2 = \\mathbf{k}^2 = \\mathbf{i}\\mathbf{j}\\mathbf{k} = -1",
    discoverer: "William Rowan Hamilton",
    year: "1843",
    field: "Abstract Algebra",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Extended complex numbers to four dimensions, sacrificing commutativity. Hamilton carved this equation on Brougham Bridge in a moment of inspiration. Quaternions are the most efficient representation of 3D rotations, avoiding gimbal lock.",
    constants: "i, j, k = quaternion imaginary units, non-commutative multiplication",
    applications:
      "3D computer graphics, spacecraft attitude control (no gimbal lock), robotics, game engines, IMU sensor fusion",
    beauty: 8,
    difficulty: "hard",
    tags: ["abstract algebra", "quaternions", "3D rotation", "Hamilton"],
  },
  {
    rank: 108,
    name: "Euler-Bernoulli Plate Equation",
    equation: "D\\nabla^4 w = q",
    discoverer: "Kirchhoff / various",
    year: "1850",
    field: "Structural Mechanics",
    domain: "Engineering",
    subDomain: "Mechanical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Extends beam bending theory to 2D thin plates. Governs deflection of floors, aircraft skins, and MEMS membranes. The biharmonic operator ∇⁴ captures bending in both directions simultaneously.",
    constants: "D = plate flexural rigidity = Eh³/12(1−ν²), w = transverse deflection, q = load, ∇⁴ = biharmonic",
    applications: "Structural engineering, aerospace panels, microelectronics (MEMS), acoustic panels, FEA modelling",
    beauty: 6,
    difficulty: "hard",
    tags: ["structural mechanics", "plate theory", "PDEs", "engineering"],
  },
  {
    rank: 109,
    name: "Diffusion Equation (Heat Equation)",
    equation: "\\frac{\\partial u}{\\partial t} = \\alpha\\,\\nabla^2 u",
    discoverer: "Fourier",
    year: "1822",
    field: "Mathematical Physics / PDEs",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes how heat (or any diffusing quantity) spreads over time. The prototypical parabolic PDE. Motivated Fourier's entire series and transform theory. Appears in finance (Black-Scholes is a diffusion equation), biology, and materials science.",
    constants: "u = temperature / concentration, α = diffusivity, ∇² = Laplacian, t = time",
    applications:
      "Heat transfer, Brownian motion, options pricing (Black-Scholes reduces to this), diffusion MRI, materials science",
    beauty: 8,
    difficulty: "hard",
    tags: ["PDEs", "heat equation", "diffusion", "Fourier"],
  },
  {
    rank: 110,
    name: "Doppler Effect",
    equation: "f' = f\\frac{v \\pm v_o}{v \\mp v_s}",
    discoverer: "Christian Doppler",
    year: "1842",
    field: "Wave Physics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Describes the shift in observed frequency due to relative motion between source and observer. From police radar to measuring galactic recession velocities and diagnosing heart disease — the Doppler effect is one of physics' most practically useful phenomena.",
    constants:
      "f = emitted frequency, f' = observed frequency, v = wave speed, v_o = observer speed, v_s = source speed",
    applications:
      "Radar speed guns, medical ultrasound (Doppler echocardiography), astronomical redshift, weather radar, sonar",
    beauty: 7,
    difficulty: "easy",
    tags: ["waves", "Doppler", "acoustics", "astrophysics", "medical imaging"],
  },
  {
    rank: 111,
    name: "Bragg's Law",
    equation: "n\\lambda = 2d\\sin\\theta",
    discoverer: "William Henry & William Lawrence Bragg",
    year: "1913",
    field: "X-ray Crystallography",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes constructive interference of X-rays diffracted by crystal planes. Won the 1915 Nobel Prize. Led directly to determination of crystal structures and ultimately to Watson & Crick's elucidation of the DNA double helix structure.",
    constants: "n = diffraction order, λ = X-ray wavelength, d = interplanar spacing, θ = glancing angle",
    applications:
      "X-ray crystallography, materials characterisation, DNA structure determination, drug discovery, semiconductor analysis",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["crystallography", "X-ray diffraction", "Bragg", "materials science"],
  },
  {
    rank: 112,
    name: "Kolmogorov Complexity",
    equation: "K(x) = \\min_{p:\\,U(p)=x} |p|",
    discoverer: "Kolmogorov / Solomonoff / Chaitin",
    year: "1963",
    field: "Algorithmic Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Defines the intrinsic complexity of a string as the length of its shortest description on a universal Turing machine. Provides the mathematical definition of randomness and incompressibility. The deepest formulation of simplicity and information in science.",
    constants: "K(x) = Kolmogorov complexity, p = program, U = universal Turing machine, |p| = program length",
    applications:
      "Data compression, AI theory, algorithmic randomness, MDL principle, computational biology, philosophy of science",
    beauty: 9,
    difficulty: "sota",
    tags: ["algorithmic information theory", "Kolmogorov complexity", "randomness", "Turing"],
  },
  {
    rank: 113,
    name: "Zipf's Law",
    equation: "f(r) \\propto \\frac{1}{r^s}, \\quad s \\approx 1",
    discoverer: "George Zipf",
    year: "1935",
    field: "Linguistics / Statistical Physics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "The frequency of any word is approximately inversely proportional to its rank in the frequency table. Appears in city sizes, income distributions, internet traffic, and biological systems — a power law emerging from complex systems. Critical for LLM tokenisation and vocabulary design.",
    constants: "f = frequency, r = rank, s = exponent (≈1 for natural language)",
    applications:
      "Computational linguistics, LLM vocabulary design, city size modelling, network science, economics, ecology",
    beauty: 8,
    difficulty: "hard",
    tags: ["linguistics", "power laws", "statistics", "complex systems"],
  },
  {
    rank: 114,
    name: "Weber-Fechner Law",
    equation: "S = k\\ln\\frac{I}{I_0}",
    discoverer: "Ernst Weber / Gustav Fechner",
    year: "1834–1860",
    field: "Psychophysics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "States that human perception of stimulus intensity is logarithmic — we perceive equal ratios, not equal differences. Explains the decibel scale for sound, f-stops in photography, the Richter scale for earthquakes, and price sensitivity in marketing.",
    constants:
      "S = perceived sensation magnitude, k = empirical constant, I = stimulus intensity, I₀ = threshold intensity",
    applications:
      "Psychoacoustics (dB scale), visual perception, UX design, pain assessment, marketing (pricing), Richter scale",
    beauty: 7,
    difficulty: "easy",
    tags: ["psychophysics", "perception", "logarithm", "Weber-Fechner"],
  },
  {
    rank: 115,
    name: "Chebyshev's Inequality",
    equation: "P\\left(|X - \\mu| \\geq k\\sigma\\right) \\leq \\frac{1}{k^2}",
    discoverer: "Pafnuty Chebyshev",
    year: "1867",
    field: "Probability Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Provides a distribution-free upper bound on the probability of a random variable deviating more than k standard deviations from its mean. The most universal concentration inequality — works for any distribution with finite variance.",
    constants: "X = random variable, μ = mean, σ = standard deviation, k = number of standard deviations (k > 1)",
    applications:
      "Statistics, machine learning (PAC bounds), quality control, finance (risk bounds), robust estimation",
    beauty: 7,
    difficulty: "hard",
    tags: ["probability", "inequalities", "Chebyshev", "concentration bounds"],
  },
  {
    rank: 116,
    name: "Expectation-Maximisation Algorithm",
    equation: "Q(\\theta, \\theta^{(t)}) = \\mathbb{E}_{Z|X,\\theta^{(t)}}[\\log P(X,Z|\\theta)]",
    discoverer: "Dempster, Laird & Rubin",
    year: "1977",
    field: "Statistics / Machine Learning",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "An iterative algorithm for maximum likelihood estimation with latent (hidden) variables, alternating E-step (expectation) and M-step (maximisation). Powers Gaussian mixture models, HMMs (speech recognition), and is the basis of many unsupervised learning algorithms.",
    constants:
      "θ = model parameters, Z = latent variables, X = observed data, Q = expected complete-data log-likelihood",
    applications:
      "Gaussian mixture models, HMMs (speech recognition), bioinformatics, topic models (LDA), image segmentation",
    beauty: 7,
    difficulty: "hard",
    tags: ["machine learning", "EM algorithm", "latent variables", "statistics"],
  },
  {
    rank: 117,
    name: "Cauchy's Residue Theorem",
    equation: "\\oint_\\gamma f(z)\\,dz = 2\\pi i\\sum_k \\mathrm{Res}(f, a_k)",
    discoverer: "Augustin-Louis Cauchy",
    year: "1825",
    field: "Complex Analysis",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Evaluates complex contour integrals by summing residues at enclosed poles. One of the most powerful computational theorems in mathematics — solves real definite integrals that are intractable by elementary means using complex pole structure.",
    constants: "f(z) = meromorphic function, γ = closed contour, Res(f, a_k) = residue at pole a_k, i = √−1",
    applications: "Signal processing (inverse Laplace/Z-transforms), control theory, quantum mechanics, combinatorics",
    beauty: 9,
    difficulty: "hard",
    tags: ["complex analysis", "residues", "contour integration", "Cauchy"],
  },
  {
    rank: 118,
    name: "Dirichlet Boundary Conditions / Laplace's Equation",
    equation: "\\nabla^2 \\varphi = 0",
    discoverer: "Pierre-Simon Laplace",
    year: "1784",
    field: "Mathematical Physics",
    domain: "Physics",
    subDomain: "Electromagnetism",
    domainEmoji: "⚛️",
    significance:
      "Describes potential fields in source-free regions — electrostatic potential between conductors, gravitational potential in empty space, steady-state temperature distributions. Solutions are harmonic functions, some of the most beautiful objects in mathematics.",
    constants: "∇² = Laplacian, φ = scalar potential (electrostatic, gravitational, or temperature)",
    applications:
      "Electrostatics, hydrodynamics (potential flow), computer graphics (mesh smoothing), medical imaging, finance",
    beauty: 8,
    difficulty: "hard",
    tags: ["PDEs", "Laplace equation", "electrostatics", "harmonic functions"],
  },
  {
    rank: 119,
    name: "Euler's Product Formula for Sine",
    equation: "\\sin(\\pi x) = \\pi x\\prod_{n=1}^\\infty\\!\\left(1 - \\frac{x^2}{n^2}\\right)",
    discoverer: "Leonhard Euler",
    year: "1748",
    field: "Analysis / Number Theory",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Expresses sine as an infinite product over its zeros. Euler used this to evaluate ζ(2) = π²/6 (the Basel problem), one of the most celebrated derivations in mathematics. Connects function theory to prime numbers through the Riemann zeta function.",
    constants: "x = complex variable, n = positive integers, π ≈ 3.14159",
    applications: "Number theory (Basel problem), complex analysis, special functions, Gamma function identities",
    beauty: 9,
    difficulty: "hard",
    tags: ["analysis", "number theory", "Euler", "sine product", "zeta function"],
  },
  {
    rank: 120,
    name: "Kolmogorov Axioms of Probability",
    equation: "P(\\Omega)=1,\\;P(A)\\geq 0,\\;P\\!\\left(\\bigsqcup_i A_i\\right)=\\sum_i P(A_i)",
    discoverer: "Andrei Kolmogorov",
    year: "1933",
    field: "Probability Theory / Measure Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The three axioms that place probability theory on a rigorous mathematical foundation. Before Kolmogorov, probability was informal. His measure-theoretic framework resolved foundational paradoxes and enabled modern stochastic processes and statistics.",
    constants: "Ω = sample space, A = event, P = probability measure satisfying σ-additivity",
    applications: "All of probability and statistics, stochastic processes, Bayesian inference, financial modelling",
    beauty: 8,
    difficulty: "hard",
    tags: ["probability axioms", "measure theory", "Kolmogorov", "foundations"],
  },
  {
    rank: 121,
    name: "Green's Theorem",
    equation:
      "\\oint_C (L\\,dx + M\\,dy) = \\iint_D\\!\\left(\\frac{\\partial M}{\\partial x} - \\frac{\\partial L}{\\partial y}\\right)dA",
    discoverer: "George Green",
    year: "1828",
    field: "Vector Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Relates a line integral around a closed curve to a double integral over the enclosed region. The 2D special case of Stokes' theorem and the bridge between line integrals and area integrals. Enables planimeters to measure areas mechanically.",
    constants: "L, M = scalar functions, C = positively oriented closed curve, D = enclosed region",
    applications: "Complex analysis, fluid dynamics, planimeters, electrostatics (2D), computer graphics",
    beauty: 7,
    difficulty: "hard",
    tags: ["vector calculus", "Green's theorem", "integration", "2D Stokes"],
  },
  {
    rank: 122,
    name: "Rank-Nullity Theorem",
    equation: "\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n",
    discoverer: "Various (formalized 20th c.)",
    year: "1900s",
    field: "Linear Algebra",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "Relates the dimension of the image (rank) to the dimension of the kernel (nullity) of a linear map. Fundamental structural theorem of linear algebra — governs when systems of equations have solutions and how many degrees of freedom exist.",
    constants:
      "A = m×n matrix, rank = dimension of column space, nullity = dimension of null space, n = number of columns",
    applications: "Systems of equations, machine learning (redundant features), data analysis, signal subspace methods",
    beauty: 7,
    difficulty: "hard",
    tags: ["linear algebra", "rank", "null space", "linear maps"],
  },
  {
    rank: 123,
    name: "De Moivre's Theorem",
    equation: "(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)",
    discoverer: "Abraham de Moivre",
    year: "1722",
    field: "Complex Analysis / Trigonometry",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Connects complex number powers to multiple-angle trigonometric formulas. Enables derivation of cos(nθ) and sin(nθ) identities and extraction of nth roots of complex numbers. A beautiful bridge between algebra and trigonometry.",
    constants: "θ = angle, n = integer, i = √−1, cos + i sin = complex exponential on unit circle",
    applications: "Trigonometric identities, signal processing, polynomial roots, electrical engineering (AC phasors)",
    beauty: 7,
    difficulty: "hard",
    tags: ["complex numbers", "trigonometry", "De Moivre", "polynomials"],
  },
  {
    rank: 124,
    name: "Binet's Formula (Fibonacci)",
    equation: "F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}",
    discoverer: "Binet (rediscovered)",
    year: "1843",
    field: "Number Theory / Combinatorics",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "A closed-form expression for the nth Fibonacci number in terms of the golden ratio. Remarkable that an irrational-number formula always produces integers. Connects combinatorics to the golden ratio and continued fractions.",
    constants: "φ = (1+√5)/2 ≈ 1.618 (golden ratio), ψ = (1−√5)/2 ≈ −0.618, √5",
    applications:
      "Algorithm analysis, financial technical analysis, natural growth patterns, computer science, cryptography",
    beauty: 8,
    difficulty: "hard",
    tags: ["Fibonacci", "golden ratio", "number theory", "combinatorics"],
  },
  {
    rank: 125,
    name: "Wallis Product",
    equation:
      "\\frac{\\pi}{2} = \\prod_{n=1}^\\infty \\frac{4n^2}{4n^2 - 1} = \\frac{2}{1}\\cdot\\frac{2}{3}\\cdot\\frac{4}{3}\\cdot\\frac{4}{5}\\cdots",
    discoverer: "John Wallis",
    year: "1655",
    field: "Analysis",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "One of the earliest infinite product representations of π, using only integers. A stunning and unexpected formula — a purely algebraic sequence of ratios converging to a transcendental constant. Historically important as a precursor to calculus.",
    constants: "π ≈ 3.14159, n = positive integers, product of rational terms",
    applications:
      "Mathematical analysis, π approximation, quantum mechanics (Wallis-type integrals), probability (Stirling)",
    beauty: 9,
    difficulty: "hard",
    tags: ["analysis", "pi", "infinite product", "Wallis"],
  },
  {
    rank: 126,
    name: "Leibniz Formula for π",
    equation:
      "\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1}",
    discoverer: "Leibniz / Madhava of Sangamagrama",
    year: "1400 (India) / 1676 (Leibniz)",
    field: "Analysis / Number Theory",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "The simplest infinite series for π, discovered first in Kerala, India, by Madhava around 1400 — 275 years before Leibniz. Too slow for computation but extraordinarily beautiful. Illustrates that even the most transcendental constants have elegant rational series.",
    constants: "π ≈ 3.14159, alternating odd denominators 1, 3, 5, 7, ...",
    applications:
      "Mathematical education, theoretical interest, historical significance, series convergence illustration",
    beauty: 9,
    difficulty: "easy",
    tags: ["pi", "infinite series", "number theory", "Madhava-Leibniz"],
  },
  {
    rank: 127,
    name: "Mandelbrot Set Definition",
    equation: "z_{n+1} = z_n^2 + c, \\quad |z_n| \\leq 2",
    discoverer: "Benoit Mandelbrot",
    year: "1980",
    field: "Complex Dynamics / Chaos Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The simplest definition of the most famous fractal in mathematics. Reveals that elementary iteration rules produce infinite complexity. The Mandelbrot set demonstrated that computers could be instruments of mathematical discovery and popularised chaos theory.",
    constants: "z, c = complex numbers, n = iteration count, boundary |z| = 2 as escape radius",
    applications: "Computer graphics, fractal compression, chaos theory, complex dynamics, mathematical art",
    beauty: 9,
    difficulty: "hard",
    tags: ["fractals", "chaos theory", "complex dynamics", "Mandelbrot"],
  },
  {
    rank: 128,
    name: "Newton's Second Law",
    equation: "\\mathbf{F} = m\\mathbf{a} = \\frac{d\\mathbf{p}}{dt}",
    discoverer: "Isaac Newton",
    year: "1687",
    field: "Classical Mechanics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The most fundamental equation of classical mechanics. Defines force as the rate of change of momentum. In its modern form F = dp/dt, it remains valid relativistically. The starting point for all of Newtonian dynamics and engineering mechanics.",
    constants: "F = force (N), m = mass (kg), a = acceleration (m/s²), p = momentum, t = time",
    applications: "All of classical mechanics, engineering dynamics, aerospace, automotive design, biomechanics",
    beauty: 8,
    difficulty: "easy",
    tags: ["classical mechanics", "Newton", "force", "momentum"],
  },
  {
    rank: 129,
    name: "Snell's Law of Refraction",
    equation: "n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
    discoverer: "Ibn Sahl / Snellius / Descartes",
    year: "984 AD / 1621",
    field: "Optics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Describes how light bends when passing between media of different refractive indices. The law governing all optics from eyeglasses to telescopes to optical fibres. Derivable from Fermat's principle of least time — a beautiful connection to variational principles.",
    constants: "n₁, n₂ = refractive indices, θ₁ = angle of incidence, θ₂ = angle of refraction",
    applications: "Lenses, eyeglasses, telescopes, microscopes, fibre optics, camera design, mirage explanation",
    beauty: 7,
    difficulty: "easy",
    tags: ["optics", "refraction", "Snell's law", "light"],
  },
  {
    rank: 130,
    name: "Heron's Formula",
    equation: "A = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s = \\frac{a+b+c}{2}",
    discoverer: "Heron of Alexandria",
    year: "~60 AD",
    field: "Geometry",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Calculates the area of any triangle from its three side lengths alone, without needing the height. A beautiful closed-form formula connecting side lengths to area. Demonstrates the power of algebraic geometry to compute geometric quantities.",
    constants: "A = area, s = semi-perimeter, a, b, c = side lengths",
    applications:
      "Surveying, computational geometry, geographic information systems, architecture, physics simulations",
    beauty: 7,
    difficulty: "easy",
    tags: ["geometry", "area", "triangle", "Heron"],
  },
  {
    rank: 131,
    name: "Haversine Formula",
    equation:
      "d = 2r\\arcsin\\!\\sqrt{\\sin^2\\frac{\\Delta\\phi}{2}+\\cos\\phi_1\\cos\\phi_2\\sin^2\\frac{\\Delta\\lambda}{2}}",
    discoverer: "Various navigators",
    year: "~1801",
    field: "Spherical Geometry / Navigation",
    domain: "Engineering",
    subDomain: "Aerospace Engineering",
    domainEmoji: "⚙️",
    significance:
      "Calculates great-circle distances between two points on a sphere from their latitudes and longitudes. The fundamental formula of spherical trigonometry for navigation. Used in GPS, aviation, and every mapping application that computes distances on Earth.",
    constants: "d = great-circle distance, r = Earth radius, φ = latitude, λ = longitude, Δ = difference",
    applications:
      "GPS distance calculation, aviation routing, maritime navigation, geographic information systems, mapping apps",
    beauty: 6,
    difficulty: "hard",
    tags: ["navigation", "spherical geometry", "GPS", "great circle"],
  },
  {
    rank: 132,
    name: "Logistic Function (Sigmoid)",
    equation: "\\sigma(x) = \\frac{1}{1 + e^{-x}}",
    discoverer: "Verhulst / machine learning community",
    year: "1838 / 1950s",
    field: "Statistics / Machine Learning",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Maps any real number to (0,1), making it interpretable as a probability. The canonical activation function of logistic regression and binary classification. Also the derivative of softplus and the CDF of the logistic distribution.",
    constants: "σ(x) = output probability, x = input, e = Euler's number",
    applications:
      "Logistic regression, binary classification, neural network activation, Bayesian updating, epidemiology",
    beauty: 7,
    difficulty: "easy",
    tags: ["machine learning", "logistic regression", "sigmoid", "classification"],
  },
  {
    rank: 133,
    name: "Euler's Totient Function Identity",
    equation: "\\sum_{d \\mid n} \\varphi(d) = n",
    discoverer: "Leonhard Euler",
    year: "1763",
    field: "Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "A beautiful multiplicative identity: summing Euler's totient function over all divisors of n gives n. Fundamental to modular arithmetic and directly underlies the RSA cryptosystem's correctness through Euler's theorem a^φ(n) ≡ 1 (mod n).",
    constants: "φ(d) = Euler's totient function (count of integers ≤ d coprime to d), d = divisors of n",
    applications: "RSA cryptography, public-key encryption, modular arithmetic, number theory",
    beauty: 7,
    difficulty: "hard",
    tags: ["number theory", "Euler totient", "RSA", "modular arithmetic"],
  },
  {
    rank: 134,
    name: "Gram-Schmidt Process",
    equation: "\\mathbf{e}_k = \\mathbf{v}_k - \\sum_{j<k}\\langle\\mathbf{v}_k,\\mathbf{e}_j\\rangle\\,\\mathbf{e}_j",
    discoverer: "Gram & Schmidt",
    year: "1883–1907",
    field: "Linear Algebra",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "Converts any linearly independent set of vectors into an orthonormal basis through successive projections and subtractions. The foundation of QR decomposition and numerical linear algebra. Used in every numerical eigensolver and least-squares solver.",
    constants: "v_k = original vectors, e_k = orthonormal basis vectors, ⟨·,·⟩ = inner product",
    applications:
      "Numerical linear algebra, QR decomposition, least squares solvers, machine learning, signal subspace analysis",
    beauty: 6,
    difficulty: "hard",
    tags: ["linear algebra", "Gram-Schmidt", "QR decomposition", "orthogonality"],
  },
  {
    rank: 135,
    name: "Cayley-Hamilton Theorem",
    equation: "p_A(A) = \\mathbf{0}",
    discoverer: "Cayley & Hamilton",
    year: "1858",
    field: "Linear Algebra / Abstract Algebra",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "Every square matrix satisfies its own characteristic polynomial. Enables matrix inverses, matrix functions, and efficient computation of matrix powers. A profound theorem bridging algebraic structure (minimal polynomial) to matrix arithmetic.",
    constants: "A = n×n square matrix, p_A = characteristic polynomial of A, 0 = n×n zero matrix",
    applications:
      "Control systems (minimal realisation), quantum mechanics, computer graphics, matrix function computation",
    beauty: 7,
    difficulty: "hard",
    tags: ["linear algebra", "Cayley-Hamilton", "characteristic polynomial", "matrices"],
  },
  {
    rank: 136,
    name: "Fokker-Planck Equation",
    equation:
      "\\frac{\\partial p}{\\partial t} = -\\frac{\\partial}{\\partial x}[\\mu\\, p] + \\frac{\\partial^2}{\\partial x^2}\\!\\left[\\frac{\\sigma^2}{2}p\\right]",
    discoverer: "Fokker & Planck",
    year: "1914–1917",
    field: "Stochastic Processes / Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes the evolution of the probability density of a stochastic process driven by drift and diffusion. The PDE dual to the Itô SDE. Central to statistical mechanics, Brownian motion, and the theory of stochastic differential equations in finance.",
    constants: "p(x,t) = probability density, μ = drift, σ² = diffusion coefficient",
    applications:
      "Statistical physics, finance (risk-neutral density), neuroscience, Brownian motion, stochastic control",
    beauty: 7,
    difficulty: "sota",
    tags: ["stochastic processes", "Fokker-Planck", "diffusion", "probability density"],
  },
  {
    rank: 137,
    name: "Itô's Isometry",
    equation:
      "\\mathbb{E}\\!\\left[\\left(\\int_0^T X_t\\,dW_t\\right)^2\\right] = \\mathbb{E}\\!\\left[\\int_0^T X_t^2\\,dt\\right]",
    discoverer: "Kiyosi Itô",
    year: "1944",
    field: "Stochastic Calculus",
    domain: "Finance & Quant",
    subDomain: "Stochastic Calculus",
    domainEmoji: "💹",
    significance:
      "The fundamental isometry for stochastic integrals: the L²-norm of a stochastic integral equals the L²-norm of its integrand in the time domain. Essential for computing variances and moments of stochastic processes in finance and physics.",
    constants: "X_t = adapted process, W_t = Brownian motion, E = expectation, T = time horizon",
    applications: "Derivatives pricing (variance computation), actuarial science, stochastic control, financial risk",
    beauty: 7,
    difficulty: "sota",
    tags: ["stochastic calculus", "Itô isometry", "Brownian motion", "L2 norm"],
  },
  {
    rank: 138,
    name: "Efficient Market Hypothesis",
    equation: "P_t = \\mathbb{E}[P_{t+1} \\mid \\mathcal{F}_t]",
    discoverer: "Eugene Fama",
    year: "1970",
    field: "Financial Economics",
    domain: "Economics",
    subDomain: "Macroeconomics",
    domainEmoji: "📊",
    significance:
      "States that asset prices at time t are the best forecast of future prices given current information — prices are martingales under the real-world measure. The most debated idea in finance, foundational to passive investing and challenged by behavioural finance.",
    constants: "P_t = asset price, E = expectation, ℱ_t = information set (filtration) at time t",
    applications: "Active vs passive investing, market regulation, algorithmic trading, behavioural finance research",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["financial economics", "EMH", "martingale", "Fama"],
  },
  {
    rank: 139,
    name: "Law of Sines",
    equation: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
    discoverer: "Nasīr al-Dīn al-Tūsī / various",
    year: "~1250 AD",
    field: "Trigonometry",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Relates side lengths of a triangle to the sines of opposite angles and the circumscribed circle radius. Essential for solving oblique triangles. Used in surveying, navigation, astronomy, and computer graphics for millennia.",
    constants: "a, b, c = side lengths, A, B, C = opposite angles, R = circumradius",
    applications: "Surveying, navigation, astronomy, architecture, computer graphics, GPS triangulation",
    beauty: 6,
    difficulty: "easy",
    tags: ["trigonometry", "sine rule", "triangle", "navigation"],
  },
  {
    rank: 140,
    name: "Leibniz Rule for Differentiation Under the Integral Sign",
    equation:
      "\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(x,t)\\,dt = f(x,b)b' - f(x,a)a' + \\int_{a(x)}^{b(x)}\\frac{\\partial f}{\\partial x}\\,dt",
    discoverer: "Gottfried Wilhelm Leibniz",
    year: "1697",
    field: "Calculus",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Allows differentiation of an integral whose limits and integrand both depend on the differentiation variable. Richard Feynman's favourite trick for evaluating difficult integrals — he used it throughout his career to solve problems others found impossible.",
    constants: "f(x,t) = integrand, a(x), b(x) = variable limits, ∂f/∂x = partial derivative",
    applications: "Bayesian statistics, physics, engineering, options pricing (Greeks derivation), Feynman diagrams",
    beauty: 7,
    difficulty: "hard",
    tags: ["calculus", "Leibniz rule", "differentiation", "Feynman technique"],
  },
  {
    rank: 141,
    name: "Modus Ponens",
    equation: "P \\to Q,\\; P \\;\\vdash\\; Q",
    discoverer: "Aristotle (formalised: Frege/Russell)",
    year: "ancient / 1879",
    field: "Formal Logic",
    domain: "Philosophy & Foundations",
    subDomain: "Philosophy of Mathematics",
    domainEmoji: "⚖️",
    significance:
      "The most fundamental rule of logical deduction. If a conditional is true and its antecedent holds, the consequent must follow. The primitive inference rule of all formal systems, programming languages, and automated theorem provers.",
    constants: "P, Q = propositions, → = material implication, ⊢ = proves/derives",
    applications:
      "Mathematical proof, programming (if-then logic), AI reasoning, legal argument, automated theorem proving",
    beauty: 7,
    difficulty: "easy",
    tags: ["logic", "deduction", "formal systems", "inference"],
  },
  {
    rank: 142,
    name: "Bernoulli Numbers Identity",
    equation: "\\sum_{k=1}^n k^m = \\frac{1}{m+1}\\sum_{j=0}^m \\binom{m+1}{j}B_j\\, n^{m+1-j}",
    discoverer: "Jacob Bernoulli",
    year: "1713",
    field: "Number Theory / Analysis",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Gives a closed-form for sums of integer powers in terms of Bernoulli numbers. The Bernoulli numbers appear in the Taylor series of tan(x) and sec(x), the Euler-Maclaurin formula, and throughout algebraic K-theory.",
    constants: "B_j = Bernoulli numbers, C(m+1,j) = binomial coefficient, m = power, n = upper summation limit",
    applications: "Analytic number theory, Bernoulli polynomials, Euler-Maclaurin summation, algebraic K-theory",
    beauty: 7,
    difficulty: "hard",
    tags: ["number theory", "Bernoulli numbers", "power sums", "analysis"],
  },
  {
    rank: 143,
    name: "Sobolev Norm",
    equation: "\\|u\\|_{W^{k,p}} = \\left(\\sum_{|\\alpha|\\leq k}\\int_\\Omega |D^\\alpha u|^p\\,dx\\right)^{1/p}",
    discoverer: "Sergei Sobolev",
    year: "1938",
    field: "Functional Analysis / PDEs",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Defines Sobolev spaces — function spaces measuring both function values and derivative values. The natural setting for weak solutions of PDEs. Essential for modern PDE theory, numerical analysis (FEM), and machine learning (RKHS, kernel methods).",
    constants:
      "u = function, k = differentiability order, p = integrability exponent, D^α = weak derivative, Ω = domain",
    applications: "PDE theory, finite element methods, function approximation, RKHS in ML, image processing",
    beauty: 6,
    difficulty: "sota",
    tags: ["functional analysis", "PDEs", "Sobolev spaces", "FEM"],
  },
  {
    rank: 144,
    name: "Hahn-Banach Theorem",
    equation:
      "\\forall\\, f\\!:\\!Y\\to\\mathbb{R},\\;|f|\\leq p \\Rightarrow \\exists\\,F\\!:\\!X\\to\\mathbb{R},\\;F|_Y = f,\\;|F|\\leq p",
    discoverer: "Hahn & Banach",
    year: "1927–1929",
    field: "Functional Analysis",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Guarantees that bounded linear functionals on a subspace can be extended to the whole space without increasing their norm. One of the foundational theorems of functional analysis — with implications for duality, separation of convex sets, and optimality conditions.",
    constants: "Y ⊂ X = Banach spaces, f, F = linear functionals, p = sublinear function (norm)",
    applications: "Functional analysis, optimisation duality, Riesz representation, PDEs, economic utility theory",
    beauty: 7,
    difficulty: "sota",
    tags: ["functional analysis", "Hahn-Banach", "duality", "extension theorem"],
  },
  {
    rank: 145,
    name: "Stirling Numbers of the Second Kind",
    equation: "S(n,k) = \\frac{1}{k!}\\sum_{j=0}^k (-1)^{k-j}\\binom{k}{j}j^n",
    discoverer: "James Stirling",
    year: "1730",
    field: "Combinatorics",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Counts the number of ways to partition n objects into k non-empty subsets. Appear throughout combinatorics, formal power series, and the analysis of algorithms (particularly hash tables and data structures).",
    constants: "S(n,k) = Stirling number, n = objects, k = subsets, C(k,j) = binomial coefficient",
    applications: "Combinatorics, formal power series, algorithm analysis, computer science, probability (moments)",
    beauty: 6,
    difficulty: "hard",
    tags: ["combinatorics", "Stirling numbers", "partitions", "discrete math"],
  },
  {
    rank: 146,
    name: "Hamiltonian Mechanics",
    equation:
      "\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}",
    discoverer: "William Rowan Hamilton",
    year: "1833",
    field: "Classical Mechanics",
    domain: "Physics",
    subDomain: "Classical Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Hamilton's canonical equations reformulate classical mechanics in terms of phase space coordinates (q,p). More symmetric and general than Lagrangian mechanics. The natural framework for statistical mechanics, quantum mechanics (commutators), and Liouville's theorem.",
    constants: "H = Hamiltonian (total energy), q = generalised positions, p = generalised momenta, phase space",
    applications:
      "Statistical mechanics, quantum mechanics (canonical quantisation), chaos theory, molecular dynamics, control theory",
    beauty: 9,
    difficulty: "hard",
    tags: ["Hamiltonian mechanics", "phase space", "classical mechanics", "symplectic geometry"],
  },
  {
    rank: 147,
    name: "Liouville's Theorem (Mechanics)",
    equation: "\\frac{d\\rho}{dt} = \\frac{\\partial\\rho}{\\partial t} + \\{\\rho, H\\} = 0",
    discoverer: "Joseph Liouville",
    year: "1838",
    field: "Classical Mechanics / Statistical Mechanics",
    domain: "Physics",
    subDomain: "Thermodynamics & Stat Mech",
    domainEmoji: "⚛️",
    significance:
      "Shows that phase-space volume is conserved under Hamiltonian evolution — phase-space density flows like an incompressible fluid. Foundation of statistical mechanics and the justification for microcanonical ensembles.",
    constants: "ρ = phase-space density, H = Hamiltonian, {·,·} = Poisson bracket",
    applications:
      "Statistical mechanics, plasma physics, chaos theory (measure-preserving dynamics), quantum mechanics",
    beauty: 8,
    difficulty: "sota",
    tags: ["statistical mechanics", "Liouville", "phase space", "Hamiltonian flow"],
  },
  {
    rank: 148,
    name: "Wilson's Theorem",
    equation: "(p-1)! \\equiv -1 \\pmod{p} \\iff p \\text{ is prime}",
    discoverer: "Leibniz / Wilson (named for)",
    year: "1770",
    field: "Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Provides a necessary and sufficient condition for primality in terms of factorials. Elegant but computationally impractical for large n. A beautiful theorem connecting modular arithmetic to the fundamental concept of primality.",
    constants: "p = prime, (p−1)! = factorial, ≡ (mod p) = modular congruence",
    applications: "Number theory, primality theory, modular arithmetic, cryptography (theoretical interest)",
    beauty: 8,
    difficulty: "hard",
    tags: ["number theory", "primality", "Wilson's theorem", "modular arithmetic"],
  },
  {
    rank: 149,
    name: "Nernst-Planck Equation",
    equation: "\\mathbf{J} = -D\\left(\\nabla c + \\frac{zF}{RT}c\\,\\nabla\\phi\\right)",
    discoverer: "Nernst & Planck",
    year: "1890",
    field: "Electrochemistry / Biophysics",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "Describes the flux of charged species driven by both concentration gradients (Fick's law) and electric field gradients. Essential for modelling ion transport in biological membranes, fuel cells, batteries, and electrochemical sensors.",
    constants:
      "J = flux, D = diffusion coefficient, c = concentration, z = charge number, F = Faraday constant, R = gas constant, T = temperature, φ = electric potential",
    applications:
      "Neuroscience (ion channels), fuel cells, batteries, desalination membranes, biosensors, drug delivery",
    beauty: 6,
    difficulty: "hard",
    tags: ["electrochemistry", "biophysics", "ion transport", "Nernst-Planck"],
  },
  {
    rank: 150,
    name: "Navier-Stokes Existence (Open Millennium Problem)",
    equation:
      "\\exists ?\\; v \\in C^\\infty(\\mathbb{R}^3 \\times [0,\\infty))\\text{ solving NS with } v_0 \\in C^\\infty",
    discoverer: "Clay Mathematics Institute (open problem)",
    year: "2000",
    field: "Partial Differential Equations / Analysis",
    domain: "Mathematics",
    subDomain: "Differential Equations",
    domainEmoji: "📐",
    significance:
      "One of the seven Clay Millennium Prize Problems ($1M unsolved). Asks whether smooth, globally-defined solutions always exist for the 3D Navier-Stokes equations with smooth initial data — or whether singularities (turbulence blow-up) can form in finite time. One of the hardest open problems in mathematics.",
    constants: "v = velocity field, ℝ³ = 3D space, C∞ = infinitely differentiable (smooth), initial data v₀",
    applications: "Turbulence theory, aerodynamics, climate modelling, fundamental physics of fluids",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    unsolved: true,
    tags: ["Millennium Prize", "PDEs", "turbulence", "existence theory", "open problem"],
  },
  {
    rank: 151,
    name: "Atiyah-Singer Index Theorem",
    equation: "\\mathrm{ind}(D) = \\int_M \\hat{A}(M)\\,\\mathrm{ch}(E)",
    discoverer: "Michael Atiyah & Isadore Singer",
    year: "1963",
    field: "Differential Geometry / Algebraic Topology",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "One of the deepest theorems of the 20th century, unifying topology, geometry, and analysis. Connects the analytical index of an elliptic differential operator to topological invariants of the underlying manifold. Generalises the Gauss-Bonnet theorem, Riemann-Roch, and Hirzebruch signature theorems as special cases. Earned Atiyah the Fields Medal and Abel Prize.",
    constants:
      "ind(D) = analytical index, Â(M) = Â-genus (Todd class), ch(E) = Chern character, D = elliptic differential operator, M = compact manifold",
    applications:
      "Theoretical physics (anomaly cancellation in QFT), string theory, condensed matter (topological phases), K-theory",
    beauty: 10,
    difficulty: "sota",
    tags: ["algebraic topology", "differential geometry", "index theory", "Atiyah-Singer"],
  },
  {
    rank: 152,
    name: "Riemann-Roch Theorem",
    equation: "\\ell(D) - \\ell(K - D) = \\deg(D) - g + 1",
    discoverer: "Riemann / Roch",
    year: "1857–1865",
    field: "Algebraic Geometry / Complex Analysis",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Relates the dimension of the space of meromorphic functions with prescribed poles to the degree of the divisor and the genus of the curve. The foundational theorem of algebraic geometry and the prototype for the Atiyah-Singer index theorem. Its higher-dimensional generalisation (Grothendieck-Riemann-Roch) is a cornerstone of modern algebraic geometry.",
    constants: "ℓ(D) = dimension of space of functions, D = divisor, K = canonical divisor, g = genus of curve",
    applications:
      "Algebraic geometry, coding theory (Goppa codes, error correction), cryptography (elliptic curves), string theory (worldsheet theory)",
    beauty: 9,
    difficulty: "sota",
    tags: ["algebraic geometry", "Riemann-Roch", "divisors", "genus"],
  },
  {
    rank: 153,
    name: "Weil Conjectures (Deligne's Theorem)",
    equation: "Z(X/\\mathbb{F}_q, T) = \\frac{P_1(T)\\cdots P_{2n-1}(T)}{P_0(T)\\cdots P_{2n}(T)}",
    discoverer: "André Weil (conjectured) / Pierre Deligne (proved)",
    year: "1949 / 1974",
    field: "Algebraic Geometry / Number Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Weil conjectured that the zeta function of a variety over a finite field satisfies a Riemann hypothesis analogue and factors via cohomological data. Deligne's proof required inventing étale cohomology and earned him the Fields Medal and Abel Prize. Opened modern arithmetic geometry.",
    constants:
      "Z(X,T) = Weil zeta function, P_i = characteristic polynomials of Frobenius on ℓ-adic cohomology, q = field size",
    applications:
      "Arithmetic geometry, coding theory, cryptography (elliptic curves over finite fields), motivic cohomology",
    beauty: 10,
    difficulty: "sota",
    tags: ["algebraic geometry", "Weil conjectures", "number theory", "Deligne"],
  },
  {
    rank: 154,
    name: "Grothendieck-Riemann-Roch Theorem",
    equation:
      "\\mathrm{ch}(f_!(\\mathcal{F}))\\cdot\\mathrm{td}(Y) = f_*(\\mathrm{ch}(\\mathcal{F})\\cdot\\mathrm{td}(X))",
    discoverer: "Alexander Grothendieck",
    year: "1957",
    field: "Algebraic Geometry / K-Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Generalises the classical Riemann-Roch theorem to morphisms between schemes. Grothendieck introduced K-theory and sheaf-theoretic methods to prove it. Considered a paradigm shift in how mathematics is done — functorial, categorical, and maximally general.",
    constants:
      "ch = Chern character, td = Todd class, f! = derived pushforward, f* = pushforward on K-theory, ℱ = coherent sheaf",
    applications: "Algebraic geometry, motivic cohomology, string theory (D-branes), intersection theory, K-theory",
    beauty: 9,
    difficulty: "sota",
    tags: ["algebraic geometry", "K-theory", "Grothendieck", "Chern character"],
  },
  {
    rank: 155,
    name: "Poincaré Duality",
    equation: "H^k(M;\\mathbb{Z}) \\cong H_{n-k}(M;\\mathbb{Z})",
    discoverer: "Henri Poincaré",
    year: "1895",
    field: "Algebraic Topology",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "For a closed orientable n-manifold, the k-th cohomology group is isomorphic to the (n−k)-th homology group. A fundamental symmetry of manifolds connecting topology in complementary dimensions. The prototype for all duality theorems in mathematics and physics.",
    constants: "H^k = cohomology, H_k = homology, M = closed orientable n-manifold, ℤ = integer coefficients",
    applications:
      "Algebraic topology, differential geometry, mathematical physics (Hodge theory), string theory (mirror symmetry)",
    beauty: 9,
    difficulty: "sota",
    tags: ["algebraic topology", "Poincaré duality", "cohomology", "manifolds"],
  },
  {
    rank: 156,
    name: "Lefschetz Fixed-Point Theorem",
    equation: "\\Lambda(f) = \\sum_k (-1)^k \\mathrm{tr}(f_*|_{H^k}) \\neq 0 \\Rightarrow f \\text{ has a fixed point}",
    discoverer: "Solomon Lefschetz",
    year: "1926",
    field: "Algebraic Topology",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Provides a topological criterion for the existence of fixed points via cohomological trace. Generalises Brouwer's fixed-point theorem and connects topology to dynamical systems. The Lefschetz number is a topological invariant of the map.",
    constants: "Λ(f) = Lefschetz number, f_* = induced map on cohomology, tr = trace, H^k = cohomology groups",
    applications:
      "Dynamical systems (periodic orbits), game theory (Nash equilibrium existence), algebraic geometry (Frobenius fixed points), economics",
    beauty: 8,
    difficulty: "sota",
    tags: ["algebraic topology", "fixed-point theory", "Lefschetz", "dynamical systems"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ANALYTIC NUMBER THEORY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 157,
    name: "Prime Number Theorem",
    equation: "\\pi(x) \\sim \\frac{x}{\\ln x} \\quad (x \\to \\infty)",
    discoverer: "Hadamard & de la Vallée Poussin",
    year: "1896",
    field: "Analytic Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves that the number of primes up to x is asymptotically x/ln(x). Conjectured by Gauss from tables and proved independently by Hadamard and de la Vallée Poussin using complex analysis. The proof requires the Riemann zeta function — a profound bridge between analysis and arithmetic.",
    constants:
      "π(x) = prime-counting function, x = upper limit, ln x = natural logarithm, Li(x) = logarithmic integral (sharper approximation)",
    applications:
      "Cryptography (prime generation), computational number theory, RSA key size selection, probabilistic primality testing",
    beauty: 9,
    difficulty: "sota",
    tags: ["number theory", "primes", "prime number theorem", "analytic number theory"],
  },
  {
    rank: 158,
    name: "Dirichlet's Theorem on Primes in Arithmetic Progressions",
    equation: "\\sum_{p \\equiv a\\,(\\mathrm{mod}\\,d)} \\frac{1}{p} = \\infty \\quad \\gcd(a,d)=1",
    discoverer: "Peter Gustav Lejeune Dirichlet",
    year: "1837",
    field: "Analytic Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves there are infinitely many primes in any arithmetic progression a, a+d, a+2d, … when gcd(a,d)=1. First use of analysis (L-functions) to prove a number-theoretic result — the birth of analytic number theory. Introduced Dirichlet characters, fundamental to modern number theory.",
    constants: "a = residue class, d = modulus, gcd(a,d) = 1 (coprimality condition), Dirichlet L-functions L(s,χ)",
    applications: "Analytic number theory, cryptography (prime distribution), Dirichlet L-functions, automorphic forms",
    beauty: 8,
    difficulty: "sota",
    tags: ["number theory", "Dirichlet", "arithmetic progressions", "L-functions"],
  },
  {
    rank: 159,
    name: "Chebyshev's Psi Function",
    equation: "\\psi(x) = \\sum_{p^k \\leq x} \\ln p \\sim x",
    discoverer: "Pafnuty Chebyshev",
    year: "1852",
    field: "Analytic Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Chebyshev's ψ-function counts prime powers with logarithmic weight, proving it is asymptotically x. Chebyshev's approach (before the PNT was proved) gave the first quantitative bounds on π(x) and introduced the essential tools later used to prove the prime number theorem.",
    constants: "ψ(x) = von Mangoldt summatory function, p = prime, k = positive integer, ln = natural log",
    applications: "Analytic number theory, prime distribution bounds, explicit formulae for ζ(s) zeros",
    beauty: 7,
    difficulty: "sota",
    tags: ["number theory", "Chebyshev psi", "prime distribution", "von Mangoldt"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // NONLINEAR DYNAMICS & CHAOS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 160,
    name: "Lorenz System",
    equation: "\\dot{x}=\\sigma(y-x),\\;\\dot{y}=x(\\rho-z)-y,\\;\\dot{z}=xy-\\beta z",
    discoverer: "Edward Lorenz",
    year: "1963",
    field: "Nonlinear Dynamics / Chaos Theory",
    domain: "Mathematics",
    subDomain: "Differential Equations",
    domainEmoji: "📐",
    significance:
      "A simple 3D ODE system exhibiting the first mathematically described strange attractor — sensitive dependence on initial conditions (the butterfly effect). Founded the modern study of chaos theory and showed that deterministic systems can be unpredictable.",
    constants: "σ = Prandtl number ≈ 10, ρ = Rayleigh number ≈ 28, β ≈ 8/3, x,y,z = state variables",
    applications:
      "Weather prediction (chaos and limits of forecasting), fluid turbulence, neural dynamics, cryptography, laser physics",
    beauty: 9,
    difficulty: "hard",
    tags: ["chaos theory", "Lorenz attractor", "nonlinear dynamics", "butterfly effect"],
  },
  {
    rank: 161,
    name: "Lyapunov Exponent",
    equation: "\\lambda = \\lim_{t\\to\\infty}\\frac{1}{t}\\ln\\frac{|\\delta\\mathbf{x}(t)|}{|\\delta\\mathbf{x}(0)|}",
    discoverer: "Aleksandr Lyapunov",
    year: "1892",
    field: "Dynamical Systems / Chaos Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Quantifies the rate of separation of infinitesimally close trajectories in phase space. A positive Lyapunov exponent is the mathematical signature of chaos. The maximal Lyapunov exponent measures the inverse of the horizon of predictability.",
    constants: "λ = Lyapunov exponent, δx(t) = trajectory separation at time t, δx(0) = initial separation",
    applications:
      "Chaos characterisation, weather forecasting limits, cryptography, econophysics, neural network stability",
    beauty: 8,
    difficulty: "hard",
    tags: ["dynamical systems", "chaos", "Lyapunov exponent", "stability"],
  },
  {
    rank: 162,
    name: "KAM Theorem",
    equation:
      "\\text{Quasi-periodic tori persist if } |\\omega\\cdot k| > \\gamma|k|^{-\\tau}\\;\\forall k\\in\\mathbb{Z}^n\\setminus\\{0\\}",
    discoverer: "Kolmogorov / Arnold / Moser",
    year: "1954–1962",
    field: "Hamiltonian Dynamics / Perturbation Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Proves that most quasi-periodic orbits in nearly-integrable Hamiltonian systems survive small perturbations, provided the frequency vector is sufficiently irrational (Diophantine). Resolved centuries of debate about the stability of the solar system and founded modern symplectic dynamics.",
    constants: "ω = frequency vector, k = integer vector, γ,τ = Diophantine condition constants, quasi-periodic tori",
    applications:
      "Celestial mechanics (solar system stability), plasma physics (magnetic confinement), accelerator physics, astrodynamics",
    beauty: 9,
    difficulty: "sota",
    tags: ["Hamiltonian dynamics", "KAM theory", "perturbation theory", "stability"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // QUANTUM FIELD THEORY & HIGH ENERGY PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 163,
    name: "Path Integral (Feynman)",
    equation: "\\langle x_f|e^{-iHT}|x_i\\rangle = \\int \\mathcal{D}[x(t)]\\,e^{iS[x]/\\hbar}",
    discoverer: "Richard Feynman",
    year: "1948",
    field: "Quantum Mechanics / Quantum Field Theory",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Reformulates quantum mechanics as a sum over all possible paths, weighted by exp(iS/ℏ). In the classical limit ℏ→0, the stationary path dominates — recovering classical mechanics. The foundation of quantum field theory, string theory, and lattice QCD.",
    constants: "S[x] = action functional, ℏ = reduced Planck constant, 𝒟[x] = path integral measure, H = Hamiltonian",
    applications:
      "Quantum field theory, particle physics (Feynman diagrams), statistical mechanics, finance (path-dependent options)",
    beauty: 10,
    difficulty: "sota",
    tags: ["quantum mechanics", "path integral", "Feynman", "quantum field theory"],
  },
  {
    rank: 164,
    name: "QED Lagrangian",
    equation:
      "\\mathcal{L}_{\\mathrm{QED}} = \\bar{\\psi}(i\\gamma^\\mu D_\\mu - m)\\psi - \\tfrac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}",
    discoverer: "Feynman / Schwinger / Tomonaga",
    year: "1948",
    field: "Quantum Electrodynamics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The Lagrangian density of quantum electrodynamics — the most accurately tested theory in science. Describes all electromagnetic interactions of matter via a U(1) gauge symmetry. Feynman, Schwinger, and Tomonaga shared the 1965 Nobel Prize for its development.",
    constants:
      "ψ = electron spinor, D_μ = covariant derivative, γ^μ = Dirac matrices, F_μν = electromagnetic field tensor, m = electron mass",
    applications:
      "Atomic physics (Lamb shift), magnetic moments (g−2), particle physics, quantum optics, precision tests of the Standard Model",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["quantum electrodynamics", "QED", "gauge theory", "Standard Model"],
  },
  {
    rank: 165,
    name: "Yang-Mills Equations",
    equation:
      "D_\\mu F^{\\mu\\nu} = J^\\nu, \\quad F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu + [A_\\mu, A_\\nu]",
    discoverer: "Chen-Ning Yang & Robert Mills",
    year: "1954",
    field: "Gauge Theory / Quantum Field Theory",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Generalised Maxwell's equations to non-Abelian gauge groups. The mathematical framework underlying the strong and weak nuclear forces. The Yang-Mills existence and mass gap problem is a Clay Millennium Prize Problem. The Standard Model of particle physics is built entirely on Yang-Mills theories.",
    constants:
      "A_μ = gauge connection (matrix-valued), F_μν = curvature (field strength), J^ν = current, [·,·] = Lie bracket",
    applications:
      "Strong force (QCD), weak force (electroweak), Standard Model, quark confinement, lattice gauge theory",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    tags: ["gauge theory", "Yang-Mills", "Standard Model", "Millennium Prize", "QCD"],
  },
  {
    rank: 166,
    name: "Renormalisation Group (Callan-Symanzik)",
    equation:
      "\\left(\\mu\\frac{\\partial}{\\partial\\mu} + \\beta(g)\\frac{\\partial}{\\partial g} - n\\gamma\\right)G^{(n)} = 0",
    discoverer: "Callan & Symanzik / Wilson",
    year: "1970",
    field: "Quantum Field Theory",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "Describes how coupling constants run (change) with energy scale. Wilson's RG framework earned him the 1982 Nobel Prize. The β function encodes asymptotic freedom in QCD and is the language of all modern particle physics and critical phenomena in condensed matter.",
    constants:
      "μ = renormalisation scale, β(g) = beta function (running of coupling), γ = anomalous dimension, G^(n) = n-point Green's function",
    applications:
      "Particle physics (running couplings), critical phenomena (phase transitions), condensed matter, string theory",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["renormalisation group", "QFT", "beta function", "Wilson", "asymptotic freedom"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CONDENSED MATTER PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 167,
    name: "BCS Gap Equation",
    equation:
      "\\Delta = \\lambda\\int_0^{\\omega_D}\\frac{\\Delta}{\\sqrt{\\xi^2+\\Delta^2}}\\tanh\\frac{\\sqrt{\\xi^2+\\Delta^2}}{2k_BT}\\,d\\xi",
    discoverer: "Bardeen, Cooper & Schrieffer",
    year: "1957",
    field: "Superconductivity",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "The self-consistency equation for the superconducting gap Δ in BCS theory. The first microscopic theory of superconductivity, explaining how Cooper pairs form and condense. Won Bardeen, Cooper, and Schrieffer the 1972 Nobel Prize.",
    constants:
      "Δ = superconducting gap, λ = electron-phonon coupling, ω_D = Debye frequency, ξ = electron energy, k_B T = thermal energy",
    applications:
      "Superconducting magnets (MRI, LHC), Josephson junctions, SQUIDs, quantum computing (superconducting qubits)",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["superconductivity", "BCS theory", "Cooper pairs", "condensed matter"],
  },
  {
    rank: 168,
    name: "Bloch's Theorem",
    equation: "\\psi_{n\\mathbf{k}}(\\mathbf{r}) = e^{i\\mathbf{k}\\cdot\\mathbf{r}}\\, u_{n\\mathbf{k}}(\\mathbf{r})",
    discoverer: "Felix Bloch",
    year: "1928",
    field: "Solid-State Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "States that electron wavefunctions in a periodic crystal potential take a specific form: a plane wave modulated by a function with the periodicity of the lattice. Foundation of band theory and the entire physics of semiconductors, metals, and insulators.",
    constants:
      "ψ = Bloch wavefunction, k = crystal momentum (wavevector), u(r) = periodic lattice function, n = band index",
    applications:
      "Semiconductor physics, band gap engineering, transistors, solar cells, topological insulators, photonic crystals",
    beauty: 8,
    difficulty: "hard",
    tags: ["solid-state physics", "Bloch's theorem", "band theory", "semiconductors"],
  },
  {
    rank: 169,
    name: "Ginzburg-Landau Equation",
    equation:
      "\\alpha\\psi + \\beta|\\psi|^2\\psi - \\frac{1}{2m}\\left(\\nabla - \\frac{2ie}{\\hbar c}\\mathbf{A}\\right)^2\\psi = 0",
    discoverer: "Ginzburg & Landau",
    year: "1950",
    field: "Superconductivity / Phase Transitions",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "A phenomenological theory of superconductivity in terms of an order parameter ψ. Predicts vortices, the two types of superconductors (Type I/II), and the Abrikosov lattice. Landau's concept of order parameters became the universal language of phase transitions.",
    constants:
      "ψ = superconducting order parameter, α,β = GL coefficients, m = electron mass, A = vector potential, e = electron charge",
    applications:
      "Superconducting devices, Josephson junctions, vortex physics, Type II superconductors, topological defects",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["superconductivity", "Ginzburg-Landau", "order parameter", "phase transitions"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // PLASMA PHYSICS & MAGNETOHYDRODYNAMICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 170,
    name: "MHD Equations (Ideal)",
    equation:
      "\\frac{\\partial\\mathbf{B}}{\\partial t} = \\nabla\\times(\\mathbf{v}\\times\\mathbf{B}), \\quad \\rho\\frac{D\\mathbf{v}}{Dt} = -\\nabla p + \\frac{(\\nabla\\times\\mathbf{B})\\times\\mathbf{B}}{\\mu_0}",
    discoverer: "Alfvén / MHD tradition",
    year: "1942",
    field: "Plasma Physics / MHD",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Ideal magnetohydrodynamics couples fluid dynamics with electromagnetic induction to describe conducting plasma behaviour. Alfvén won the 1970 Nobel Prize for MHD wave discovery. Governs solar plasma, fusion reactor design, and magnetospheres.",
    constants: "B = magnetic field, v = plasma velocity, ρ = density, p = pressure, μ₀ = permeability of free space",
    applications:
      "Fusion energy (tokamaks, stellarators), solar physics, space weather, astrophysical jets, Earth's magnetosphere",
    beauty: 7,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["plasma physics", "MHD", "Alfvén waves", "fusion energy"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // COMPUTATIONAL COMPLEXITY & INFORMATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 171,
    name: "Cook-Levin Theorem (NP-Completeness)",
    equation: "\\mathrm{SAT} \\in \\mathsf{NP\\text{-}complete}",
    discoverer: "Stephen Cook & Leonid Levin",
    year: "1971",
    field: "Computational Complexity",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Proves that Boolean satisfiability (SAT) is NP-complete — every NP problem reduces to SAT in polynomial time. Established NP-completeness theory, showing thousands of important problems are computationally equivalent. The central result around which the P vs NP question is framed.",
    constants:
      "SAT = Boolean satisfiability problem, NP-complete = hardest problems in NP, polynomial-time reduction ≤_p",
    applications:
      "Compiler optimisation (register allocation), circuit design (VLSI), AI planning, bioinformatics, scheduling",
    beauty: 9,
    difficulty: "sota",
    tags: ["complexity theory", "NP-complete", "SAT", "Cook-Levin"],
  },
  {
    rank: 172,
    name: "Channel Capacity (Shannon)",
    equation: "C = B\\log_2\\!\\left(1 + \\frac{S}{N}\\right)",
    discoverer: "Claude Shannon",
    year: "1948",
    field: "Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "The Shannon-Hartley theorem gives the maximum rate at which information can be transmitted over a channel with bandwidth B and signal-to-noise ratio S/N. Sets a hard theoretical limit on communication, approached but never exceeded. Foundation of all digital communications.",
    constants: "C = channel capacity (bits/s), B = bandwidth (Hz), S/N = signal-to-noise ratio",
    applications: "WiFi and 5G design, fiber optics, satellite communications, data modem design, wireless engineering",
    beauty: 9,
    difficulty: "hard",
    tags: ["information theory", "Shannon capacity", "communications", "bandwidth"],
  },
  {
    rank: 173,
    name: "Minimum Description Length (MDL) Principle",
    equation: "\\hat{H} = \\arg\\min_H [L(H) + L(D|H)]",
    discoverer: "Jorma Rissanen",
    year: "1978",
    field: "Information Theory / Statistics",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Formalises Occam's razor: the best model is the one that provides the shortest description of both itself and the data. The information-theoretic foundation of model selection, connecting Kolmogorov complexity to statistical inference.",
    constants: "L(H) = code length of hypothesis, L(D|H) = code length of data given hypothesis",
    applications: "Model selection, regularisation theory, Bayesian model comparison, compression, machine learning",
    beauty: 8,
    difficulty: "hard",
    tags: ["information theory", "MDL", "model selection", "Occam's razor", "Kolmogorov"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // REINFORCEMENT LEARNING & CONTROL
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 174,
    name: "Bellman Equation",
    equation: "V^*(s) = \\max_a \\left[R(s,a) + \\gamma\\sum_{s'} P(s'|s,a)V^*(s')\\right]",
    discoverer: "Richard Bellman",
    year: "1957",
    field: "Dynamic Programming / Reinforcement Learning",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Defines optimal value functions via the principle of optimality: the optimal policy from any state must be optimal for all subsequent states. The foundation of dynamic programming, Markov decision processes, and all modern reinforcement learning algorithms.",
    constants:
      "V*(s) = optimal value function, R(s,a) = reward, γ = discount factor, P(s'|s,a) = transition probability",
    applications:
      "Reinforcement learning (Q-learning, PPO, AlphaGo), robotics, optimal control, economics, operations research",
    beauty: 9,
    difficulty: "hard",
    tags: ["reinforcement learning", "Bellman equation", "dynamic programming", "MDP"],
  },
  {
    rank: 175,
    name: "Policy Gradient Theorem",
    equation:
      "\\nabla_\\theta J(\\theta) = \\mathbb{E}_{\\pi_\\theta}\\!\\left[\\nabla_\\theta \\log\\pi_\\theta(a|s)\\,Q^{\\pi}(s,a)\\right]",
    discoverer: "Sutton, McAllester, Singh & Mansour",
    year: "1999",
    field: "Reinforcement Learning",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Provides the gradient of expected total reward with respect to policy parameters, enabling gradient-based policy optimisation in RL. Foundation of REINFORCE, actor-critic methods, PPO, and RLHF — the algorithm used to align LLMs like ChatGPT.",
    constants: "θ = policy parameters, π_θ = parameterised policy, Q^π = action-value function, J(θ) = expected return",
    applications:
      "RLHF (LLM alignment), game-playing AI (AlphaGo/AlphaZero), robotics, autonomous vehicles, drug discovery",
    beauty: 8,
    difficulty: "hard",
    tags: ["reinforcement learning", "policy gradient", "RLHF", "LLM alignment"],
  },
  {
    rank: 176,
    name: "Linear Quadratic Regulator (LQR)",
    equation: "u^* = -K x, \\quad K = R^{-1}B^\\top P, \\quad A^\\top P + PA - PBR^{-1}B^\\top P + Q = 0",
    discoverer: "Kalman / various",
    year: "1960",
    field: "Optimal Control Theory",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "The optimal feedback controller for linear systems with quadratic cost. The algebraic Riccati equation (ARE) gives the optimal gain matrix K in closed form. Foundation of modern optimal control and the precursor to Kalman filtering.",
    constants:
      "u = control input, x = state, K = gain matrix, P = solution to Riccati equation, Q,R = state/control cost matrices",
    applications: "Aerospace autopilots, missile guidance, robotics, active noise cancellation, stability augmentation",
    beauty: 7,
    difficulty: "hard",
    tags: ["optimal control", "LQR", "Riccati equation", "control theory"],
  },
  {
    rank: 177,
    name: "Kalman Filter Update",
    equation:
      "\\hat{x}_{k|k} = \\hat{x}_{k|k-1} + K_k(z_k - H\\hat{x}_{k|k-1}), \\quad K_k = P_{k|k-1}H^\\top(HP_{k|k-1}H^\\top + R)^{-1}",
    discoverer: "Rudolf Kálmán",
    year: "1960",
    field: "Estimation Theory / Control",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "The optimal linear state estimator for systems with Gaussian noise. Recursively updates state estimates as new measurements arrive. Powers GPS navigation, Apollo guidance computers, radar tracking, and every modern autonomous vehicle.",
    constants:
      "x̂ = state estimate, K_k = Kalman gain, z_k = measurement, H = observation matrix, P = error covariance, R = measurement noise",
    applications:
      "GPS/INS navigation, autonomous vehicles, Apollo guidance, missile tracking, financial time series, SLAM (robotics)",
    beauty: 8,
    difficulty: "hard",
    tags: ["Kalman filter", "state estimation", "control theory", "navigation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CAUSAL INFERENCE & ECONOMETRICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 178,
    name: "Potential Outcomes Framework (ATE)",
    equation: "\\tau = \\mathbb{E}[Y_i(1) - Y_i(0)]",
    discoverer: "Rubin / Neyman",
    year: "1923 / 1974",
    field: "Causal Inference / Econometrics",
    domain: "Economics",
    subDomain: "Econometrics",
    domainEmoji: "📊",
    significance:
      "Defines the Average Treatment Effect as the expected difference between potential outcomes under treatment and control. The Rubin causal model formalised causation in statistics, enabling rigorous experimental and observational causal inference.",
    constants: "τ = ATE, Y_i(1) = potential outcome under treatment, Y_i(0) = potential outcome under control",
    applications:
      "Randomised controlled trials, policy evaluation, A/B testing, program evaluation, epidemiology, economics",
    beauty: 8,
    difficulty: "hard",
    tags: ["causal inference", "potential outcomes", "ATE", "econometrics"],
  },
  {
    rank: 179,
    name: "Instrumental Variables Estimator",
    equation: "\\hat{\\beta}_{\\mathrm{IV}} = \\frac{\\mathrm{Cov}(Z, Y)}{\\mathrm{Cov}(Z, X)}",
    discoverer: "Philip Wright / Working & Leontief",
    year: "1928",
    field: "Econometrics / Causal Inference",
    domain: "Economics",
    subDomain: "Econometrics",
    domainEmoji: "📊",
    significance:
      "Estimates causal effects when explanatory variables are endogenous (correlated with the error term). The instrumental variable Z must affect X but not Y directly. The workhorse of empirical economics for identifying causal effects from observational data.",
    constants: "β_IV = IV estimator, Z = instrument variable, Y = outcome, X = endogenous regressor, Cov = covariance",
    applications: "Empirical economics, epidemiology, policy evaluation, labour economics, health economics",
    beauty: 7,
    difficulty: "hard",
    tags: ["econometrics", "instrumental variables", "causal inference", "endogeneity"],
  },
  {
    rank: 180,
    name: "Difference-in-Differences",
    equation:
      "\\hat{\\tau}_{\\mathrm{DiD}} = (\\bar{Y}^1_{\\mathrm{post}} - \\bar{Y}^1_{\\mathrm{pre}}) - (\\bar{Y}^0_{\\mathrm{post}} - \\bar{Y}^0_{\\mathrm{pre}})",
    discoverer: "Snow / Ashenfelter & Card",
    year: "1854 / 1984",
    field: "Causal Inference / Econometrics",
    domain: "Economics",
    subDomain: "Econometrics",
    domainEmoji: "📊",
    significance:
      "Estimates treatment effects by comparing pre/post changes for treated vs control groups, removing time-invariant confounding. Card and Krueger's minimum wage study using DiD reshaped empirical economics and contributed to Card's 2021 Nobel Prize.",
    constants: "τ_DiD = DiD estimator, Ȳ¹ = treated group mean, Ȳ⁰ = control group mean, pre/post = time periods",
    applications: "Policy evaluation, natural experiments, public health, labour economics, A/B testing at scale",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["causal inference", "difference-in-differences", "econometrics", "policy evaluation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // TIME SERIES & STATISTICAL METHODS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 181,
    name: "AR(p) Process",
    equation:
      "X_t = \\sum_{i=1}^p \\phi_i X_{t-i} + \\varepsilon_t, \\quad \\varepsilon_t \\sim \\mathcal{N}(0,\\sigma^2)",
    discoverer: "Yule / Walker",
    year: "1927",
    field: "Time Series Analysis",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "The autoregressive model of order p — a time series depends linearly on its own p previous values plus noise. Foundation of time series analysis and econometric modelling. The basis of ARMA, ARIMA, GARCH, and state-space models.",
    constants: "X_t = time series, φ_i = AR coefficients, ε_t = white noise innovation, σ² = variance, p = order",
    applications: "Financial time series, economic forecasting, speech processing, signal analysis, climate modelling",
    beauty: 7,
    difficulty: "hard",
    tags: ["time series", "autoregressive", "ARIMA", "forecasting"],
  },
  {
    rank: 182,
    name: "GARCH(1,1) Model",
    equation: "\\sigma_t^2 = \\omega + \\alpha\\varepsilon_{t-1}^2 + \\beta\\sigma_{t-1}^2",
    discoverer: "Engle (ARCH) / Bollerslev (GARCH)",
    year: "1982 / 1986",
    field: "Financial Econometrics",
    domain: "Finance & Quant",
    subDomain: "Risk Management",
    domainEmoji: "💹",
    significance:
      "Models time-varying volatility — variance clusters in financial markets (high volatility follows high volatility). Engle won the 2003 Nobel Prize. GARCH is the standard model for financial volatility and the backbone of risk management and option pricing.",
    constants: "σ²_t = conditional variance, ω = constant, α = ARCH coefficient, β = GARCH coefficient, ε = innovation",
    applications:
      "Financial risk management, VaR estimation, options pricing, high-frequency trading, portfolio optimisation",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["financial econometrics", "GARCH", "volatility", "risk management"],
  },
  {
    rank: 183,
    name: "Cointegration / Error Correction Model",
    equation: "\\Delta Y_t = \\alpha(Y_{t-1} - \\beta X_{t-1}) + \\gamma\\Delta X_t + \\varepsilon_t",
    discoverer: "Engle & Granger",
    year: "1987",
    field: "Econometrics / Time Series",
    domain: "Economics",
    subDomain: "Econometrics",
    domainEmoji: "📊",
    significance:
      "Models the long-run equilibrium relationship between non-stationary time series. Engle and Granger shared the 2003 Nobel Prize for this. Essential for macroeconomic modelling, pairs trading, and any analysis of long-run relationships between financial or economic variables.",
    constants: "Y_t, X_t = I(1) time series, α = adjustment speed, β = cointegrating vector, ε_t = error term",
    applications: "Macroeconomics, central bank modelling, pairs trading (quant finance), long-run forecasting",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["cointegration", "time series", "error correction", "Engle-Granger"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ACTUARIAL & INSURANCE MATHEMATICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 184,
    name: "Collective Risk Model (Compound Poisson)",
    equation:
      "S = \\sum_{i=1}^N X_i, \\quad N \\sim \\mathrm{Poisson}(\\lambda),\\; X_i \\stackrel{\\mathrm{iid}}{\\sim} F_X",
    discoverer: "Cramér / actuarial tradition",
    year: "1930",
    field: "Actuarial Mathematics",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Models aggregate insurance losses as a sum of a Poisson-distributed number of individual claims. The foundation of non-life insurance pricing, reserving, and risk capital calculations. Generating functions of S are used to compute ruin probabilities.",
    constants: "S = aggregate loss, N = claim count (Poisson), X_i = individual claim sizes, λ = claim frequency",
    applications:
      "General insurance pricing, reserving, solvency capital (Solvency II), catastrophe modelling, reinsurance",
    beauty: 7,
    difficulty: "hard",
    tags: ["actuarial mathematics", "collective risk", "compound Poisson", "insurance"],
  },
  {
    rank: 185,
    name: "Cramér-Lundberg Ruin Formula",
    equation: "\\psi(u) \\leq e^{-Ru}, \\quad \\phi(R) = \\lambda + cR - \\lambda M_X(R) = 0",
    discoverer: "Cramér & Lundberg",
    year: "1903–1930",
    field: "Actuarial Mathematics / Ruin Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Provides an exponential upper bound on the probability that an insurer's surplus becomes negative (ruin) given initial reserve u. The adjustment coefficient R solves Lundberg's equation. Foundation of classical ruin theory and solvency modelling.",
    constants:
      "ψ(u) = ruin probability, u = initial surplus, R = Lundberg adjustment coefficient, c = premium rate, λ = claim rate, M_X = MGF of claims",
    applications:
      "Insurance solvency regulation, optimal dividend strategies, reinsurance design, Solvency II, catastrophe bonds",
    beauty: 7,
    difficulty: "sota",
    tags: ["ruin theory", "actuarial mathematics", "solvency", "Cramér-Lundberg"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // OPERATIONS RESEARCH & OPTIMISATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 186,
    name: "KKT Conditions",
    equation:
      "\\nabla f = \\sum_i \\mu_i\\nabla h_i + \\sum_j \\lambda_j\\nabla g_j, \\quad \\lambda_j g_j = 0,\\; \\lambda_j \\geq 0",
    discoverer: "Karush / Kuhn & Tucker",
    year: "1939 / 1951",
    field: "Nonlinear Optimisation",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "Karush-Kuhn-Tucker conditions generalise Lagrange multipliers to inequality constraints. Necessary (and sufficient for convex problems) conditions for constrained optimality. The theoretical foundation of all nonlinear programming and SVM training.",
    constants: "f = objective, h_i = equality constraints, g_j = inequality constraints, μ_i, λ_j = multipliers",
    applications:
      "Nonlinear programming, SVM (support vector machines), neural network pruning, engineering design, economics",
    beauty: 8,
    difficulty: "hard",
    tags: ["optimisation", "KKT conditions", "Lagrangian", "SVM", "nonlinear programming"],
  },
  {
    rank: 187,
    name: "Simplex Method (Duality)",
    equation:
      "\\max c^\\top x \\text{ s.t. } Ax\\leq b \\quad \\Leftrightarrow \\quad \\min b^\\top y \\text{ s.t. } A^\\top y\\geq c,\\;y\\geq 0",
    discoverer: "George Dantzig (simplex) / von Neumann (duality)",
    year: "1947",
    field: "Linear Programming / Operations Research",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "LP duality: every linear maximisation problem has a dual minimisation problem with equal optimal value (strong duality). The simplex method solves both. One of the most practically impactful algorithms ever devised, solving billions of optimisation problems daily.",
    constants:
      "c = objective coefficients, A = constraint matrix, b = right-hand side, x = primal variables, y = dual variables",
    applications:
      "Supply chain, logistics, scheduling, airline crew planning, network flow, telecommunications, finance",
    beauty: 8,
    difficulty: "hard",
    tags: ["linear programming", "optimisation", "duality", "simplex", "operations research"],
  },
  {
    rank: 188,
    name: "Little's Law",
    equation: "L = \\lambda W",
    discoverer: "John Little",
    year: "1961",
    field: "Queueing Theory / Operations Research",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "States that the average number of items in a stable queueing system equals the average arrival rate times the average time spent. Holds under astonishingly general conditions — no distributional assumptions required. Ubiquitous in operations, manufacturing, and computer systems.",
    constants: "L = average number in system, λ = average arrival rate, W = average time in system",
    applications:
      "Manufacturing (WIP), software engineering (cycle time), hospital management, call centres, network design",
    beauty: 9,
    difficulty: "easy",
    tags: ["queueing theory", "operations research", "Little's law", "systems"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // GEOPHYSICS & EARTH SCIENCES
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 189,
    name: "Richter / Moment Magnitude Scale",
    equation: "M_w = \\frac{2}{3}\\log_{10}(M_0) - 10.7",
    discoverer: "Richter (1935) / Hanks & Kanamori (Mw)",
    year: "1935 / 1979",
    field: "Seismology",
    domain: "Earth & Space",
    subDomain: "Sediment Transport",
    domainEmoji: "🌍",
    significance:
      "Quantifies earthquake energy release via seismic moment M₀. Each unit increase = 31.6× more energy. The moment magnitude scale (Mw) replaced Richter for large earthquakes and is the standard used globally. A logarithmic scale connecting energy to a universally reported number.",
    constants:
      "M_w = moment magnitude, M₀ = seismic moment (N·m), constants chosen so Mw matches Richter at moderate magnitudes",
    applications:
      "Earthquake hazard assessment, building codes, tsunami warning, insurance (catastrophe risk), seismic monitoring",
    beauty: 6,
    difficulty: "easy",
    tags: ["seismology", "earthquake", "magnitude scale", "geophysics"],
  },
  {
    rank: 190,
    name: "Radiometric Dating (Decay Law)",
    equation:
      "t = \\frac{1}{\\lambda}\\ln\\!\\left(1 + \\frac{D}{N}\\right) = \\frac{t_{1/2}}{\\ln 2}\\ln\\!\\left(\\frac{N_0}{N}\\right)",
    discoverer: "Rutherford & Soddy",
    year: "1902",
    field: "Geochronology / Nuclear Physics",
    domain: "Earth & Space",
    subDomain: "Landscape Dynamics",
    domainEmoji: "🌍",
    significance:
      "Uses the constant rate of radioactive decay to determine the age of rocks, fossils, and ancient artefacts. Established the age of Earth at 4.54 Gyr. The basis of carbon-14 dating and all radiometric geochronology.",
    constants:
      "t = age, λ = decay constant, t₁/₂ = half-life, N = current atoms, D = daughter atoms, N₀ = initial atoms",
    applications:
      "Geochronology (rock dating), archaeology (carbon-14), nuclear forensics, cosmochemistry, evolutionary timelines",
    beauty: 7,
    difficulty: "hard",
    tags: ["geochronology", "radioactive decay", "carbon dating", "nuclear physics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // COSMOLOGY & ASTROPHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 191,
    name: "Bekenstein-Hawking Entropy",
    equation: "S_{\\mathrm{BH}} = \\frac{k_B c^3}{4G\\hbar}\\,A = \\frac{A}{4l_P^2}",
    discoverer: "Bekenstein & Hawking",
    year: "1973–1974",
    field: "Quantum Gravity / Black Hole Thermodynamics",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "The entropy of a black hole is proportional to the area of its event horizon, measured in Planck areas. This merging of GR, quantum mechanics, and thermodynamics is one of the deepest results in theoretical physics. The holographic principle emerged from this formula.",
    constants:
      "S_BH = black hole entropy, A = horizon area, k_B = Boltzmann constant, G = Newton's constant, ℏ = reduced Planck constant, l_P = Planck length",
    applications:
      "Quantum gravity, holographic principle, black hole information paradox, string theory (microstate counting), AdS/CFT",
    beauty: 10,
    difficulty: "sota",
    tags: ["black holes", "quantum gravity", "entropy", "holographic principle", "Hawking"],
  },
  {
    rank: 192,
    name: "Hubble-Lemaître Law",
    equation: "v = H_0 d",
    discoverer: "Lemaître (1927) / Hubble (1929)",
    year: "1927–1929",
    field: "Cosmology",
    domain: "Earth & Space",
    subDomain: "Astronomy & Astrophysics",
    domainEmoji: "🌍",
    significance:
      "Galaxies recede at velocities proportional to their distance — evidence for the expanding universe. The first observational confirmation of the Big Bang cosmological model. H₀ (the Hubble constant) is still debated at 1% level precision.",
    constants: "v = recession velocity, H₀ = Hubble constant ≈ 70 km/s/Mpc, d = proper distance",
    applications: "Cosmology, Big Bang theory, dark energy, cosmic distance ladder, expansion history of the universe",
    beauty: 8,
    difficulty: "easy",
    tags: ["cosmology", "Hubble law", "expanding universe", "Big Bang"],
  },
  {
    rank: 193,
    name: "CMB Power Spectrum",
    equation: "C_\\ell = \\frac{2}{\\pi}\\int_0^\\infty k^2 P(k)|\\Delta_\\ell(k)|^2\\,dk",
    discoverer: "Sachs & Wolfe / WMAP / Planck teams",
    year: "1967 / 2003",
    field: "Cosmology",
    domain: "Earth & Space",
    subDomain: "Astronomy & Astrophysics",
    domainEmoji: "🌍",
    significance:
      "The angular power spectrum of CMB temperature fluctuations encodes the entire history of the early universe. The acoustic peak positions and amplitudes constrain cosmological parameters (Ω, H₀, n_s) to percent-level precision. The Rosetta Stone of modern cosmology.",
    constants:
      "C_ℓ = angular power spectrum, P(k) = primordial power spectrum, Δ_ℓ = transfer function, k = wavenumber, ℓ = multipole",
    applications:
      "Cosmological parameter estimation, inflation models, dark matter/dark energy, Big Bang nucleosynthesis constraints",
    beauty: 8,
    difficulty: "sota",
    tags: ["cosmology", "CMB", "power spectrum", "inflation", "cosmological parameters"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CHEMICAL ENGINEERING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 194,
    name: "Damköhler Number",
    equation: "\\mathrm{Da} = \\frac{\\text{reaction rate}}{\\text{transport rate}} = \\frac{k\\tau}{1}",
    discoverer: "Gerhard Damköhler",
    year: "1936",
    field: "Chemical Engineering / Reaction Engineering",
    domain: "Engineering",
    subDomain: "Chemical Engineering",
    domainEmoji: "⚙️",
    significance:
      "A dimensionless number comparing the timescale of chemical reaction to the timescale of transport. If Da >> 1, reactions are transport-limited; if Da << 1, kinetics-limited. Governs reactor design, catalytic converters, and biological cell metabolism.",
    constants: "Da = Damköhler number, k = reaction rate constant, τ = residence/transport time",
    applications: "Chemical reactor design, catalytic converters, combustion engineering, bioprocessing, fuel cells",
    beauty: 6,
    difficulty: "hard",
    tags: ["chemical engineering", "Damköhler", "reaction engineering", "dimensionless numbers"],
  },
  {
    rank: 195,
    name: "Reynolds Number",
    equation: "\\mathrm{Re} = \\frac{\\rho v L}{\\mu} = \\frac{vL}{\\nu}",
    discoverer: "Osborne Reynolds",
    year: "1883",
    field: "Fluid Dynamics / Dimensionless Analysis",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "The ratio of inertial to viscous forces in a fluid flow. The single most important dimensionless number in fluid mechanics. Determines whether flow is laminar or turbulent (Re > ~4000 for pipe flow). Enables scale models: a ship model and the real ship at the same Re have identical flow patterns.",
    constants:
      "ρ = fluid density, v = flow velocity, L = characteristic length, μ = dynamic viscosity, ν = kinematic viscosity",
    applications:
      "Aerospace design (wind tunnels), naval engineering, biomedical flows, HVAC, chemical reactors, sports engineering",
    beauty: 8,
    difficulty: "easy",
    tags: ["fluid dynamics", "Reynolds number", "turbulence", "dimensionless analysis"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // REPRESENTATION THEORY & SYMMETRY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 196,
    name: "Character Orthogonality Relations",
    equation: "\\frac{1}{|G|}\\sum_{g\\in G}\\chi_i(g)\\overline{\\chi_j(g)} = \\delta_{ij}",
    discoverer: "Frobenius / Schur",
    year: "1896–1905",
    field: "Representation Theory / Group Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Characters of irreducible representations of a finite group form an orthonormal basis for class functions. The central theorem of representation theory and the foundation of harmonic analysis on groups. Applied to crystallography, particle physics symmetries, and quantum chemistry.",
    constants: "χ_i = character of representation i, G = finite group, |G| = group order, δ_ij = Kronecker delta",
    applications:
      "Quantum chemistry (molecular orbitals), crystallography (space groups), particle physics (Standard Model representations), coding theory",
    beauty: 9,
    difficulty: "sota",
    tags: ["representation theory", "group theory", "characters", "harmonic analysis"],
  },
  {
    rank: 197,
    name: "Peter-Weyl Theorem",
    equation: "L^2(G) \\cong \\bigoplus_{\\pi\\in\\hat{G}} \\mathcal{H}_\\pi \\otimes \\mathcal{H}_\\pi^*",
    discoverer: "Hermann Weyl & Fritz Peter",
    year: "1927",
    field: "Representation Theory / Harmonic Analysis",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Decomposes the L² space on a compact group G into matrix coefficients of irreducible unitary representations. The non-abelian generalisation of Fourier analysis — every L² function on a compact group is a sum of representation matrix elements. Foundation of non-abelian harmonic analysis.",
    constants: "L²(G) = square-integrable functions on G, Ĝ = dual (set of irreps), ℋ_π = representation space",
    applications:
      "Harmonic analysis on groups, quantum mechanics (angular momentum), signal processing on spheres (CMB), machine learning on graphs",
    beauty: 9,
    difficulty: "sota",
    tags: ["representation theory", "harmonic analysis", "compact groups", "Peter-Weyl"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MATHEMATICAL PHYSICS — INTEGRABLE SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 198,
    name: "KdV Equation",
    equation:
      "\\frac{\\partial u}{\\partial t} - 6u\\frac{\\partial u}{\\partial x} + \\frac{\\partial^3 u}{\\partial x^3} = 0",
    discoverer: "Korteweg & de Vries",
    year: "1895",
    field: "Nonlinear PDEs / Integrable Systems",
    domain: "Mathematics",
    subDomain: "Differential Equations",
    domainEmoji: "📐",
    significance:
      "Describes shallow water waves and is the first exactly solved nonlinear PDE via the inverse scattering transform. Exhibits soliton solutions — stable nonlinear waves that pass through each other without changing shape. Founded the theory of integrable systems.",
    constants: "u(x,t) = wave amplitude, x = spatial coordinate, t = time, nonlinear convection + dispersion terms",
    applications:
      "Water waves, optical fibre solitons, plasma physics, Bose-Einstein condensates, quantum gravity models",
    beauty: 9,
    difficulty: "sota",
    tags: ["integrable systems", "solitons", "nonlinear PDEs", "KdV equation"],
  },
  {
    rank: 199,
    name: "Yang-Baxter Equation",
    equation: "R_{12}R_{13}R_{23} = R_{23}R_{13}R_{12}",
    discoverer: "Yang (1967) & Baxter (1972)",
    year: "1967–1972",
    field: "Integrable Systems / Quantum Groups",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "A consistency condition on scattering matrices in integrable quantum systems. Solutions yield exactly solvable models in statistical mechanics and quantum field theory. Drives the theory of quantum groups and braid groups, with deep connections to knot theory and topological quantum computation.",
    constants:
      "R_ij = R-matrix (scattering operator acting on tensor product), indices denote the two interacting particles",
    applications:
      "Quantum integrable systems, knot invariants (Jones polynomial), quantum groups, topological quantum computation",
    beauty: 9,
    difficulty: "sota",
    tags: ["integrable systems", "Yang-Baxter", "quantum groups", "knot theory"],
  },
  {
    rank: 200,
    name: "Gross-Pitaevskii Equation",
    equation:
      "i\\hbar\\frac{\\partial\\psi}{\\partial t} = \\left(-\\frac{\\hbar^2}{2m}\\nabla^2 + V(\\mathbf{r}) + g|\\psi|^2\\right)\\psi",
    discoverer: "Gross & Pitaevskii",
    year: "1961",
    field: "Quantum Physics / Bose-Einstein Condensation",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "A nonlinear Schrödinger equation governing the macroscopic wavefunction of a Bose-Einstein condensate. The mean-field theory of quantum fluids at ultra-cold temperatures. Describes superfluid vortex formation, matter-wave interference, and quantum turbulence.",
    constants:
      "ψ = condensate wavefunction (order parameter), g = interaction strength, V(r) = trapping potential, m = particle mass, ℏ = reduced Planck constant",
    applications:
      "Bose-Einstein condensates, atom lasers, superfluid helium, quantum computing with cold atoms, quantum simulation",
    beauty: 8,
    difficulty: "sota",
    tags: ["Bose-Einstein condensate", "superfluidity", "nonlinear Schrödinger", "quantum fluids"],
  },
  {
    rank: 201,
    name: "Milnor K-Theory",
    equation: "K_n^M(F) = F^\\times\\otimes\\cdots\\otimes F^\\times / \\langle a\\otimes(1-a)\\rangle",
    discoverer: "John Milnor",
    year: "1970",
    field: "Algebraic K-Theory / Number Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Milnor K-theory encodes higher-order multiplicative structure of a field. The Milnor conjecture (proved by Voevodsky, Fields Medal 2002) and Bloch-Kato conjecture connect it to Galois cohomology. The starting point of motivic cohomology and the Bloch-Kato theorem.",
    constants: "F = field, F× = multiplicative group, n = degree, Steinberg relation a⊗(1−a) = 0",
    applications: "Algebraic K-theory, motivic cohomology, Galois cohomology, arithmetic geometry, algebraic cycles",
    beauty: 8,
    difficulty: "sota",
    tags: ["algebraic K-theory", "Milnor", "motivic cohomology", "Galois cohomology"],
  },
  {
    rank: 202,
    name: "Homotopy Groups of Spheres",
    equation: "\\pi_n(S^k): \\quad \\pi_1(S^1)=\\mathbb{Z},\\;\\pi_3(S^2)=\\mathbb{Z},\\;\\pi_n(S^n)=\\mathbb{Z}",
    discoverer: "Hopf / Freudenthal / Toda / various",
    year: "1931–1960s",
    field: "Algebraic Topology / Homotopy Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The homotopy groups of spheres πₙ(Sᵏ) are among the most mysterious objects in mathematics — simple to state yet ferociously hard to compute. Hopf's discovery that π₃(S²) = ℤ (the Hopf fibration) shocked mathematicians and launched modern homotopy theory.",
    constants: "πₙ(Sᵏ) = n-th homotopy group of k-sphere, ℤ = integers, stable homotopy groups, stem notation",
    applications:
      "Algebraic topology, string theory (Hopf fibration in physics), topological quantum field theory, HoTT",
    beauty: 9,
    difficulty: "sota",
    tags: ["homotopy theory", "spheres", "Hopf fibration", "algebraic topology"],
  },
  {
    rank: 203,
    name: "Grothendieck's Six Functor Formalism",
    equation: "f^*,\\, f_*,\\, f_!,\\, f^!,\\, \\otimes^L,\\, R\\mathcal{H}om",
    discoverer: "Alexander Grothendieck",
    year: "1963",
    field: "Algebraic Geometry / Category Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Six functors encoding all natural operations on sheaves: direct/inverse image, exceptional image, tensor product, and internal Hom. The categorical language behind Poincaré duality, Verdier duality, and the Weil conjectures. The most powerful framework in modern algebraic geometry.",
    constants: "f: X→Y = morphism of spaces, Derived category D(X), six adjoint functor pairs",
    applications:
      "Algebraic geometry (perverse sheaves), number theory (étale cohomology), representation theory (geometric Langlands)",
    beauty: 9,
    difficulty: "sota",
    tags: ["algebraic geometry", "category theory", "Grothendieck", "six functors"],
  },
  {
    rank: 204,
    name: "Univalence Axiom (HoTT)",
    equation: "(A = B) \\simeq (A \\simeq B)",
    discoverer: "Vladimir Voevodsky",
    year: "2010",
    field: "Homotopy Type Theory / Foundations",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "States that identity of types is equivalent to equivalence of types — collapsing the distinction between 'equal' and 'isomorphic.' Founded Homotopy Type Theory (HoTT), a new foundation for mathematics combining type theory, homotopy theory, and logic. Voevodsky won the Fields Medal for this and preceding work.",
    constants: "A, B = types, ≃ = equivalence of types, = = propositional identity, HoTT = Homotopy Type Theory",
    applications:
      "Foundations of mathematics, proof assistants (Lean, Coq, Agda), formal verification, programming language theory",
    beauty: 9,
    difficulty: "sota",
    tags: ["homotopy type theory", "foundations", "univalence", "Voevodsky"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // GEOMETRIC MEASURE THEORY & VARIATIONAL CALCULUS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 205,
    name: "Plateau's Problem (Minimal Surfaces)",
    equation: "H = 0 \\quad (\\text{mean curvature vanishes})",
    discoverer: "Lagrange / Plateau / Douglas",
    year: "1760 / 1931",
    field: "Differential Geometry / Calculus of Variations",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Plateau's problem asks for a surface of minimal area spanning a given boundary. The condition H=0 (vanishing mean curvature) characterises minimal surfaces. Jesse Douglas won the first Fields Medal (1936) for solving the general case. Soap films realise minimal surfaces physically.",
    constants: "H = mean curvature = (κ₁+κ₂)/2, κ₁,κ₂ = principal curvatures, minimal surface",
    applications:
      "Architecture (lightweight structures), materials science (lipid bilayers), general relativity (apparent horizons), nanotechnology",
    beauty: 9,
    difficulty: "sota",
    tags: ["minimal surfaces", "differential geometry", "calculus of variations", "Plateau"],
  },
  {
    rank: 206,
    name: "Isoperimetric Inequality",
    equation: "4\\pi A \\leq L^2",
    discoverer: "Ancient Greeks (proved: Weierstrass/Hurwitz/Federer)",
    year: "ancient / 1870–1950",
    field: "Geometric Measure Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Among all planar regions with fixed perimeter L, the circle has maximum area A. Equality holds only for circles. The oldest and most natural optimisation problem — known to ancient Greeks. Deep generalisations (Brunn-Minkowski, Sobolev inequalities) appear throughout analysis.",
    constants: "A = enclosed area, L = perimeter, π ≈ 3.14159",
    applications:
      "Geometry, materials science (surface tension), biology (cell shape), image processing, machine learning (ball packing)",
    beauty: 9,
    difficulty: "hard",
    tags: ["geometry", "isoperimetric inequality", "optimisation", "geometric measure theory"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // SYMPLECTIC GEOMETRY & MIRROR SYMMETRY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 207,
    name: "Symplectic Form",
    equation: "\\omega = \\sum_{i=1}^n dp_i \\wedge dq_i, \\quad d\\omega = 0, \\quad \\omega^n \\neq 0",
    discoverer: "Various (formalized by Weyl / Arnold)",
    year: "1897 / 1960s",
    field: "Symplectic Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "A closed non-degenerate 2-form on a manifold. The natural geometric structure of phase space in classical mechanics (Hamiltonian dynamics). Gromov's non-squeezing theorem (1985) and Floer homology revealed rich rigidity phenomena in symplectic geometry.",
    constants: "ω = symplectic form, p_i = momenta, q_i = positions, ∧ = exterior product, d = exterior derivative",
    applications: "Hamiltonian mechanics, string theory, mirror symmetry, symplectic topology, Floer homology",
    beauty: 8,
    difficulty: "sota",
    tags: ["symplectic geometry", "Hamiltonian mechanics", "phase space", "Gromov"],
  },
  {
    rank: 208,
    name: "Mirror Symmetry (Homological)",
    equation: "D^b\\mathrm{Coh}(X) \\simeq D^b\\mathrm{Fuk}(\\check{X})",
    discoverer: "Kontsevich (homological) / Strominger-Yau-Zaslow",
    year: "1994",
    field: "Algebraic Geometry / String Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Homological mirror symmetry conjectures that the derived category of coherent sheaves on X is equivalent to the Fukaya category of its mirror ˇX. Connects complex algebraic geometry and symplectic geometry through string theory duality. Won Kontsevich the Fields Medal.",
    constants:
      "D^b Coh = derived category of coherent sheaves, D^b Fuk = derived Fukaya category, X, ˇX = mirror Calabi-Yau manifolds",
    applications: "String theory, mirror symmetry enumerative invariants, knot invariants, mathematical physics",
    beauty: 10,
    difficulty: "sota",
    tags: ["mirror symmetry", "algebraic geometry", "string theory", "Kontsevich"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MODEL THEORY & LOGIC
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 209,
    name: "Löwenheim-Skolem Theorem",
    equation: "\\text{If }T\\text{ has an infinite model, it has models of every infinite cardinality}",
    discoverer: "Löwenheim / Skolem",
    year: "1915–1920",
    field: "Model Theory / Mathematical Logic",
    domain: "Mathematics",
    subDomain: "Mathematical Logic",
    domainEmoji: "📐",
    significance:
      "Any first-order theory with an infinite model has models of every infinite cardinality. The downward version (Skolem 1920) shows uncountable theories like analysis have countable models — Skolem's paradox. Foundation of model theory and the limits of first-order axiomatisation.",
    constants: "T = first-order theory, cardinality, countable = ℵ₀, model = interpretation satisfying T",
    applications:
      "Model theory, foundations of mathematics, non-standard analysis (Robinson), database theory, formal verification",
    beauty: 8,
    difficulty: "sota",
    tags: ["model theory", "logic", "Löwenheim-Skolem", "cardinality"],
  },
  {
    rank: 210,
    name: "Completeness Theorem (Gödel)",
    equation: "T \\models \\phi \\Leftrightarrow T \\vdash \\phi",
    discoverer: "Kurt Gödel",
    year: "1929",
    field: "Mathematical Logic",
    domain: "Mathematics",
    subDomain: "Mathematical Logic",
    domainEmoji: "📐",
    significance:
      "Gödel's completeness theorem (1929, distinct from incompleteness 1931): first-order logic is complete — every semantically valid formula is provable. Together with the incompleteness theorems, Gödel's work defined the landscape of formal logic and computability.",
    constants: "T = first-order theory, φ = formula, ⊨ = semantic consequence, ⊢ = syntactic provability",
    applications:
      "Foundations of mathematics, automated theorem proving, formal verification, database query languages, AI reasoning",
    beauty: 8,
    difficulty: "sota",
    tags: ["mathematical logic", "completeness", "Gödel", "first-order logic"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // GRAVITATIONAL WAVES & ASTROPHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 211,
    name: "Gravitational Wave Strain",
    equation: "h_{\\mu\\nu} = \\frac{4G}{c^4 r}\\ddot{I}_{\\mu\\nu}",
    discoverer: "Einstein (prediction) / LIGO (detection)",
    year: "1916 / 2015",
    field: "General Relativity / Astrophysics",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "The leading-order gravitational wave strain from a source with quadrupole moment I_μν. Einstein predicted gravitational waves in 1916 but doubted they could be measured. LIGO detected them in 2015 (2017 Nobel Prize) from merging black holes — opening gravitational wave astronomy.",
    constants:
      "h_μν = strain (dimensionless displacement ~10⁻²¹), G = Newton's constant, c = speed of light, r = distance, İ = second time derivative of quadrupole moment",
    applications:
      "LIGO/Virgo/KAGRA detectors, binary mergers, neutron star EOS, Hubble constant measurement, multi-messenger astronomy",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["gravitational waves", "general relativity", "LIGO", "black holes"],
  },
  {
    rank: 212,
    name: "Tolman-Oppenheimer-Volkoff Equation",
    equation: "\\frac{dp}{dr} = -\\frac{(\\varepsilon+p)(m+4\\pi r^3 p/c^2)}{r^2(1-2Gm/rc^2)}",
    discoverer: "Tolman / Oppenheimer & Volkoff",
    year: "1939",
    field: "Stellar Astrophysics / General Relativity",
    domain: "Physics",
    subDomain: "Relativity & Gravity",
    domainEmoji: "⚛️",
    significance:
      "The relativistic equation of hydrostatic equilibrium for a neutron star. Determines the maximum mass a neutron star can support — above this, collapse to a black hole is inevitable. The TOV limit constrains the nuclear equation of state and neutron star physics.",
    constants:
      "p = pressure, ε = energy density, m(r) = enclosed mass, r = radial coordinate, G = gravitational constant, c = speed of light",
    applications:
      "Neutron star physics, equation of state of dense nuclear matter, gravitational wave modelling, pulsar observations",
    beauty: 7,
    difficulty: "sota",
    tags: ["neutron stars", "general relativity", "stellar structure", "TOV equation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // STANDARD MODEL & PARTICLE PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 213,
    name: "Standard Model Lagrangian",
    equation:
      "\\mathcal{L}_{\\mathrm{SM}} = \\mathcal{L}_{\\mathrm{gauge}} + \\mathcal{L}_{\\mathrm{Higgs}} + \\mathcal{L}_{\\mathrm{Yukawa}} + \\mathcal{L}_{\\mathrm{fermion}}",
    discoverer: "Glashow / Weinberg / Salam / Higgs / Quark model",
    year: "1961–1973",
    field: "Particle Physics / Quantum Field Theory",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The complete Lagrangian of the Standard Model, encoding all known fundamental particles and interactions (except gravity). A SU(3)×SU(2)×U(1) gauge theory whose predictions have been confirmed to extraordinary precision. The most successful physical theory ever constructed.",
    constants: "SU(3)×SU(2)×U(1) gauge symmetry, quarks, leptons, gauge bosons, Higgs field, 19 free parameters",
    applications: "LHC (Higgs discovery 2012), precision QED, muon g−2, B-physics, CP violation, neutrino physics",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["Standard Model", "particle physics", "gauge theory", "Higgs boson"],
  },
  {
    rank: 214,
    name: "Higgs Mechanism",
    equation: "\\mathcal{L}_{\\mathrm{Higgs}} = |D_\\mu\\phi|^2 - \\lambda\\left(|\\phi|^2 - \\frac{v^2}{2}\\right)^2",
    discoverer: "Higgs / Englert & Brout / Guralnik & Hagen & Kibble",
    year: "1964",
    field: "Quantum Field Theory / Electroweak Physics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The scalar field potential whose spontaneous symmetry breaking (|φ|→v/√2) gives mass to W and Z bosons and fermions. Without this mechanism, the Standard Model's gauge bosons would be massless. The Higgs boson was discovered at LHC in 2012. Higgs and Englert shared the 2013 Nobel Prize.",
    constants:
      "φ = Higgs doublet, v ≈ 246 GeV (vacuum expectation value), λ = quartic coupling, D_μ = covariant derivative",
    applications:
      "Electroweak symmetry breaking, Higgs boson physics, mass generation, LHC phenomenology, BSM model building",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["Higgs mechanism", "symmetry breaking", "electroweak", "mass generation"],
  },
  {
    rank: 215,
    name: "Asymptotic Freedom (QCD Beta Function)",
    equation: "\\beta(g_s) = -\\frac{g_s^3}{16\\pi^2}\\left(11 - \\frac{2n_f}{3}\\right) + O(g_s^5)",
    discoverer: "Gross, Politzer & Wilczek",
    year: "1973",
    field: "Quantum Chromodynamics",
    domain: "Physics",
    subDomain: "Quantum Mechanics",
    domainEmoji: "⚛️",
    significance:
      "The β function of QCD is negative for n_f ≤ 16 flavours, meaning the strong coupling g_s decreases at high energies — asymptotic freedom. Quarks behave as free particles at short distances but are confined at long distances. Won Gross, Politzer, and Wilczek the 2004 Nobel Prize.",
    constants: "g_s = strong coupling, n_f = number of quark flavours, β < 0 → asymptotic freedom, Λ_QCD ≈ 200 MeV",
    applications: "Deep inelastic scattering, jet physics, hadron structure, lattice QCD, heavy-ion collisions",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["QCD", "asymptotic freedom", "strong force", "renormalisation group"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // SOFT MATTER & BIOPHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 216,
    name: "Langevin Equation",
    equation:
      "m\\ddot{x} = -\\gamma\\dot{x} + F(x) + \\xi(t), \\quad \\langle\\xi(t)\\xi(t')\\rangle = 2\\gamma k_BT\\delta(t-t')",
    discoverer: "Paul Langevin",
    year: "1908",
    field: "Statistical Mechanics / Biophysics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes Brownian motion of a particle subjected to friction and random thermal noise, connected by the fluctuation-dissipation theorem. Foundation of non-equilibrium statistical mechanics. Extended to simulate molecular dynamics, polymer chains, and neural dynamics.",
    constants:
      "γ = friction coefficient, F(x) = deterministic force, ξ(t) = Gaussian white noise, k_B T = thermal energy",
    applications:
      "Molecular dynamics simulation, polymer physics, biological motors, colloidal suspensions, stochastic gradient descent",
    beauty: 8,
    difficulty: "hard",
    tags: ["Brownian motion", "Langevin equation", "statistical mechanics", "biophysics"],
  },
  {
    rank: 217,
    name: "Flory-Huggins Theory",
    equation:
      "\\frac{\\Delta G_{\\text{mix}}}{nk_BT} = \\frac{\\phi_A}{N_A}\\ln\\phi_A + \\frac{\\phi_B}{N_B}\\ln\\phi_B + \\chi\\phi_A\\phi_B",
    discoverer: "Flory & Huggins",
    year: "1942",
    field: "Polymer Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "A lattice model for the free energy of mixing polymer solutions. The χ (chi) parameter captures enthalpic polymer-solvent interactions. Foundation of polymer thermodynamics, block copolymer self-assembly, and the design of polymer blends.",
    constants: "φ_A, φ_B = volume fractions, N_A, N_B = degrees of polymerisation, χ = Flory-Huggins parameter",
    applications:
      "Polymer blends, block copolymer nanopatterning, drug delivery (polymer matrices), coatings, lithium battery electrolytes",
    beauty: 7,
    difficulty: "hard",
    tags: ["polymer physics", "Flory-Huggins", "thermodynamics", "soft matter"],
  },
  {
    rank: 218,
    name: "Worm-Like Chain Model",
    equation: "\\langle r^2\\rangle = 2L_p L\\left[1 - \\frac{L_p}{L}\\left(1-e^{-L/L_p}\\right)\\right]",
    discoverer: "Kratky & Porod",
    year: "1949",
    field: "Biophysics / Polymer Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes the end-to-end distance statistics of semi-flexible polymers like DNA and actin. The persistence length L_p characterises stiffness. Essential for understanding DNA mechanics, protein folding, cytoskeleton, and the elasticity of biological filaments.",
    constants: "⟨r²⟩ = mean-square end-to-end distance, L_p = persistence length, L = contour length",
    applications:
      "DNA mechanics, optical tweezers experiments, protein filaments (actin, collagen), polymer mechanics, nanotechnology",
    beauty: 7,
    difficulty: "hard",
    tags: ["biophysics", "polymer physics", "DNA mechanics", "worm-like chain"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // COMPUTATIONAL BIOLOGY & BIOINFORMATICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 219,
    name: "Needleman-Wunsch Algorithm",
    equation: "F(i,j) = \\max\\begin{cases}F(i-1,j-1)+s(a_i,b_j)\\\\F(i-1,j)-d\\\\F(i,j-1)-d\\end{cases}",
    discoverer: "Needleman & Wunsch",
    year: "1970",
    field: "Bioinformatics / Dynamic Programming",
    domain: "Biology & Medicine",
    subDomain: "Molecular Biology",
    domainEmoji: "🧬",
    significance:
      "A dynamic programming algorithm for optimal global alignment of biological sequences. One of the foundational algorithms of bioinformatics, enabling comparison of DNA, RNA, and protein sequences. Generalised to local alignment (Smith-Waterman) and underlies BLAST.",
    constants: "F(i,j) = alignment score, s(a,b) = substitution score, d = gap penalty",
    applications: "DNA/protein sequence alignment, phylogenetics, BLAST searches, genomics, drug target identification",
    beauty: 7,
    difficulty: "hard",
    tags: ["bioinformatics", "sequence alignment", "dynamic programming", "genomics"],
  },
  {
    rank: 220,
    name: "Wright-Fisher Diffusion",
    equation:
      "\\frac{\\partial p}{\\partial t} = \\frac{1}{2}\\frac{\\partial^2}{\\partial x^2}[x(1-x)p] - \\frac{\\partial}{\\partial x}[\\mu(x)p]",
    discoverer: "Wright & Fisher",
    year: "1931",
    field: "Population Genetics / Stochastic Processes",
    domain: "Biology & Medicine",
    subDomain: "Genetics & Evolution",
    domainEmoji: "🧬",
    significance:
      "The Fokker-Planck equation governing allele frequency distributions under genetic drift, mutation, and selection. Foundation of theoretical population genetics. Connects coalescent theory, neutral evolution, and the stochastic dynamics of alleles over generations.",
    constants:
      "p(x,t) = density of allele frequency x at time t, μ(x) = deterministic force (selection+mutation), drift term x(1−x)",
    applications:
      "Population genetics, evolutionary modelling, GWAS, conservation genetics, ancestral inference, coalescent theory",
    beauty: 8,
    difficulty: "sota",
    tags: ["population genetics", "Wright-Fisher", "genetic drift", "evolutionary dynamics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MECHANISM DESIGN & MATCHING THEORY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 221,
    name: "Revelation Principle",
    equation: "\\text{Any equilibrium outcome can be implemented by a truth-telling direct mechanism}",
    discoverer: "Gibbard / Myerson",
    year: "1973 / 1979",
    field: "Mechanism Design / Microeconomics",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "Any social choice function implementable by some mechanism is implementable by an incentive-compatible direct mechanism where truth-telling is optimal. Simplifies mechanism design enormously. Foundation of auction theory, optimal contracts, and platform design. Myerson won the 2007 Nobel Prize.",
    constants:
      "Direct mechanism = (message space = type space, allocation rule, transfer rule), incentive compatibility",
    applications: "Auction design, matching markets, optimal taxation, platform economics, voting theory, AI alignment",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["mechanism design", "revelation principle", "auction theory", "Myerson"],
  },
  {
    rank: 222,
    name: "Gale-Shapley Algorithm (Stable Matching)",
    equation: "\\text{Deferred acceptance produces a stable matching in }O(n^2)\\text{ steps}",
    discoverer: "David Gale & Lloyd Shapley",
    year: "1962",
    field: "Combinatorics / Economics",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "The deferred acceptance algorithm always produces a stable matching (no blocking pairs) in the two-sided matching problem. Shapley won the 2012 Nobel Prize. Implemented in medical residency matching (NRMP), school choice systems, and kidney exchange programs.",
    constants:
      "Stable matching = no pair prefers each other over their assignment, n = number of participants, O(n²) = complexity",
    applications: "Medical residency matching, school admissions, kidney exchange, job markets, college admissions",
    beauty: 8,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["matching theory", "Gale-Shapley", "stable matching", "mechanism design"],
  },
  {
    rank: 223,
    name: "Myerson's Optimal Auction",
    equation: "\\phi_i(v_i) = v_i - \\frac{1 - F_i(v_i)}{f_i(v_i)}, \\quad \\text{sell to highest } \\phi_i > 0",
    discoverer: "Roger Myerson",
    year: "1981",
    field: "Auction Theory / Mechanism Design",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "Characterises the revenue-maximising auction mechanism via virtual valuations φᵢ. The seller should allocate to the bidder with the highest positive virtual valuation. Foundation of optimal mechanism design and internet advertising auctions.",
    constants: "φᵢ = virtual valuation, vᵢ = true valuation, Fᵢ = CDF of valuations, fᵢ = density",
    applications: "Online advertising auctions (Google, Meta), spectrum auctions, procurement, optimal pricing",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["auction theory", "mechanism design", "Myerson", "virtual valuation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // HIGH-DIMENSIONAL STATISTICS & MACHINE LEARNING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 224,
    name: "LASSO (L1 Regularisation)",
    equation:
      "\\hat{\\beta} = \\arg\\min_\\beta \\left\\|y - X\\beta\\right\\|_2^2 + \\lambda\\left\\|\\beta\\right\\|_1",
    discoverer: "Robert Tibshirani",
    year: "1996",
    field: "High-Dimensional Statistics / Machine Learning",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Least Absolute Shrinkage and Selection Operator — adds an L1 penalty that induces sparsity, automatically performing variable selection. Revolutionised high-dimensional regression and sparked the field of compressed sensing. The canonical example of convex relaxation for combinatorial problems.",
    constants:
      "β = regression coefficients, X = design matrix, y = response, λ = regularisation strength, ‖·‖₁ = L1 norm",
    applications:
      "Genomics (GWAS), neuroimaging, finance, compressed sensing, natural language processing, feature selection",
    beauty: 8,
    difficulty: "hard",
    tags: ["statistics", "LASSO", "regularisation", "sparsity", "high-dimensional"],
  },
  {
    rank: 225,
    name: "Compressed Sensing (RIP)",
    equation: "\\hat{x} = \\arg\\min_x \\|x\\|_1 \\text{ s.t. } \\|Ax - b\\|_2 \\leq \\varepsilon",
    discoverer: "Candès, Romberg & Tao / Donoho",
    year: "2004–2006",
    field: "Signal Processing / Statistics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Under the Restricted Isometry Property (RIP), sparse signals can be recovered from far fewer measurements than the Nyquist rate using convex L1 minimisation. Candès and Tao won the 2006 Fields Medal (Tao) and other major prizes. Underpins MRI acceleration and one-pixel cameras.",
    constants: "x = sparse signal, A = measurement matrix, b = measurements, RIP = restricted isometry property",
    applications: "Accelerated MRI, single-pixel cameras, wireless communications, array processing, medical imaging",
    beauty: 9,
    difficulty: "sota",
    tags: ["compressed sensing", "sparsity", "signal processing", "L1 minimisation"],
  },
  {
    rank: 226,
    name: "Johnson-Lindenstrauss Lemma",
    equation: "(1-\\varepsilon)\\|u-v\\|^2 \\leq \\|f(u)-f(v)\\|^2 \\leq (1+\\varepsilon)\\|u-v\\|^2",
    discoverer: "Johnson & Lindenstrauss",
    year: "1984",
    field: "High-Dimensional Geometry / Randomised Algorithms",
    domain: "Mathematics",
    subDomain: "Linear Algebra & Systems",
    domainEmoji: "📐",
    significance:
      "A random linear map from ℝⁿ to ℝᵏ (k = O(log n/ε²)) approximately preserves all pairwise distances. Enables dimensionality reduction with distortion guarantees. The mathematical foundation of random projections, locality-sensitive hashing, and the success of random embeddings in ML.",
    constants: "ε = distortion, n = original dimension, k = target dimension = O(log n/ε²), f = random projection",
    applications:
      "Approximate nearest neighbour search, locality-sensitive hashing, database queries, neural network compression",
    beauty: 8,
    difficulty: "hard",
    tags: ["dimensionality reduction", "random projections", "Johnson-Lindenstrauss", "geometry"],
  },
  {
    rank: 227,
    name: "Rademacher Complexity",
    equation:
      "\\mathcal{R}_n(\\mathcal{F}) = \\mathbb{E}_{\\sigma,S}\\left[\\sup_{f\\in\\mathcal{F}}\\frac{1}{n}\\sum_{i=1}^n\\sigma_i f(x_i)\\right]",
    discoverer: "Bartlett & Mendelson / Koltchinskii",
    year: "2002",
    field: "Statistical Learning Theory",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "A data-dependent measure of the richness of a function class, capturing the ability of functions to fit random noise. Gives tight generalisation bounds for machine learning algorithms. A sharper and more practical alternative to VC dimension for modern ML theory.",
    constants: "σ_i = ±1 Rademacher random variables, ℱ = hypothesis class, n = sample size, S = dataset",
    applications: "Generalisation bounds for deep learning, kernel methods, boosting, neural network theory",
    beauty: 7,
    difficulty: "sota",
    tags: ["learning theory", "Rademacher complexity", "generalisation", "statistical learning"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // DEEP GENERATIVE MODELS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 228,
    name: "Variational Autoencoder (ELBO)",
    equation:
      "\\mathcal{L}(\\theta,\\phi) = \\mathbb{E}_{q_\\phi(z|x)}[\\log p_\\theta(x|z)] - D_{\\mathrm{KL}}(q_\\phi(z|x)\\|p(z))",
    discoverer: "Kingma & Welling",
    year: "2013",
    field: "Deep Generative Models",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "The Evidence Lower BOund (ELBO) objective of variational autoencoders — a reparameterisable lower bound on the log-likelihood. Combining a reconstruction term and KL regularisation, VAEs learn continuous latent representations. Foundation of all modern latent variable generative models.",
    constants:
      "θ = decoder parameters, φ = encoder parameters, z = latent variable, q_φ = encoder, p_θ = decoder, p(z) = prior",
    applications:
      "Image generation, drug discovery (molecule design), anomaly detection, representation learning, text generation",
    beauty: 8,
    difficulty: "hard",
    tags: ["VAE", "generative models", "variational inference", "deep learning"],
  },
  {
    rank: 229,
    name: "Score Matching / Diffusion Score",
    equation: "\\ell(\\theta) = \\mathbb{E}_{x}\\left[\\left\\|s_\\theta(x) - \\nabla_x \\log p(x)\\right\\|^2\\right]",
    discoverer: "Hyvärinen (score matching) / Song & Ermon (denoising)",
    year: "2005 / 2019",
    field: "Generative Models / Density Estimation",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Score matching trains a neural network to estimate the score (gradient of log-density) without computing the normalisation constant. The theoretical backbone of score-based diffusion models (DDPM, stable diffusion), which are the state of the art in image, audio, and video generation.",
    constants: "s_θ(x) = neural score network, ∇_x log p(x) = true score function, p(x) = data distribution",
    applications:
      "Stable Diffusion, DALL-E, Sora (video), audio synthesis, molecular generation, scientific simulations",
    beauty: 8,
    difficulty: "sota",
    tags: ["diffusion models", "score matching", "generative AI", "density estimation"],
  },
  {
    rank: 230,
    name: "GAN Minimax Objective",
    equation: "\\min_G\\max_D\\;\\mathbb{E}_x[\\log D(x)] + \\mathbb{E}_z[\\log(1-D(G(z)))]",
    discoverer: "Ian Goodfellow et al.",
    year: "2014",
    field: "Deep Generative Models",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "The adversarial training objective of Generative Adversarial Networks — a minimax game between generator G and discriminator D. At Nash equilibrium, G produces samples indistinguishable from real data. One of the most influential ideas in modern deep learning.",
    constants: "G = generator network, D = discriminator network, x = real data, z = noise latent vector",
    applications:
      "Photorealistic image synthesis, deepfakes, data augmentation, image-to-image translation, drug discovery",
    beauty: 8,
    difficulty: "hard",
    tags: ["GAN", "generative models", "adversarial training", "deep learning"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // GRAPH NEURAL NETWORKS & GEOMETRIC DEEP LEARNING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 231,
    name: "Graph Neural Network (Message Passing)",
    equation:
      "h_v^{(k+1)} = \\phi\\!\\left(h_v^{(k)},\\, \\bigoplus_{u\\in\\mathcal{N}(v)} \\psi(h_v^{(k)}, h_u^{(k)}, e_{vu})\\right)",
    discoverer: "Gilmer et al. (MPNN) / Kipf & Welling / Hamilton et al.",
    year: "2017",
    field: "Graph Machine Learning",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "The general message-passing neural network framework: each node aggregates messages from neighbours, then updates its representation. Unifies GCN, GraphSAGE, GAT, and most GNN architectures. Enables learning on irregular graph-structured data.",
    constants:
      "h_v = node feature, 𝒩(v) = neighbourhood, ⊕ = permutation-invariant aggregation, φ = update function, ψ = message function",
    applications:
      "Molecular property prediction, drug discovery (AlphaFold), social network analysis, knowledge graphs, traffic prediction",
    beauty: 7,
    difficulty: "hard",
    tags: ["graph neural networks", "message passing", "geometric deep learning", "GNN"],
  },
  {
    rank: 232,
    name: "AlphaFold Loss (FAPE)",
    equation:
      "\\mathcal{L}_{\\mathrm{FAPE}} = \\frac{1}{|\\mathcal{P}|\\cdot N}\\sum_{k,i}\\left\\|T_k^{-1}\\circ\\hat{x}_i^{(k)} - T_k^{-1}\\circ x_i^{(k)}\\right\\|_c",
    discoverer: "Jumper et al. (DeepMind)",
    year: "2021",
    field: "Computational Biology / Deep Learning",
    domain: "Biology & Medicine",
    subDomain: "Molecular Biology",
    domainEmoji: "🧬",
    significance:
      "The Frame Aligned Point Error loss in AlphaFold2, measuring structural accuracy in a locally invariant way. AlphaFold2 essentially solved the 50-year-old protein folding problem, predicting 3D protein structures from sequence with near-experimental accuracy.",
    constants:
      "T_k = local reference frames (backbone rigid transforms), x̂_i = predicted atom positions, x_i = true positions, ‖·‖_c = clamped L2 norm",
    applications: "Drug discovery, protein engineering, synthetic biology, pandemic response, materials design",
    beauty: 7,
    difficulty: "sota",
    tags: ["AlphaFold", "protein folding", "computational biology", "deep learning"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CAUSAL MACHINE LEARNING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 233,
    name: "do-Calculus (Pearl)",
    equation: "P(y \\mid do(x)) = \\sum_z P(y \\mid x, z)P(z)",
    discoverer: "Judea Pearl",
    year: "1995",
    field: "Causal Inference / AI",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Pearl's do-operator represents interventions rather than observations, formalising the difference between correlation and causation. The do-calculus provides complete rules for identifying causal effects from observational data via directed acyclic graphs (DAGs). Won Pearl the Turing Award.",
    constants:
      "P(y|do(x)) = interventional distribution, P(y|x) = observational distribution, z = adjustment variables, DAG = directed acyclic graph",
    applications:
      "Causal AI, epidemiology (confounding), policy evaluation, fairness in ML, clinical trial design, AI safety",
    beauty: 9,
    difficulty: "hard",
    tags: ["causal inference", "do-calculus", "Pearl", "DAG", "interventions"],
  },
  {
    rank: 234,
    name: "Structural Causal Model",
    equation:
      "X_i := f_i(\\mathrm{Pa}(X_i), \\varepsilon_i), \\quad \\varepsilon_i \\perp\\!\\!\\!\\perp \\varepsilon_j \\;(i\\neq j)",
    discoverer: "Pearl / Spirtes-Glymour-Scheines",
    year: "1993–2000",
    field: "Causal Inference",
    domain: "Computer Science",
    subDomain: "AI & Machine Learning",
    domainEmoji: "💻",
    significance:
      "Defines a causal model via structural equations where each variable is a function of its direct causes and independent noise. Encodes counterfactuals: what would have happened under different conditions. Foundation of causal representation learning and AI causality.",
    constants:
      "X_i = endogenous variable, Pa(X_i) = causal parents in DAG, f_i = structural function, ε_i = exogenous noise",
    applications:
      "Causal discovery, counterfactual reasoning, fairness, drug effect estimation, AI safety, social science",
    beauty: 8,
    difficulty: "hard",
    tags: ["causal inference", "structural causal models", "counterfactuals", "DAG"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CLIMATE DYNAMICS & EARTH SYSTEM
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 235,
    name: "Radiative Forcing & Climate Sensitivity",
    equation: "\\Delta T_s = \\lambda\\,\\Delta F, \\quad \\lambda = \\frac{T_s^{(0)}}{4\\sigma T_s^{(0)4}\\cdot(1-f)}",
    discoverer: "Arrhenius / Hansen / IPCC formalism",
    year: "1896 / 1984",
    field: "Climate Science",
    domain: "Earth & Space",
    subDomain: "Geosciences",
    domainEmoji: "🌍",
    significance:
      "Relates global mean surface temperature change ΔT_s to radiative forcing ΔF via climate sensitivity λ. Arrhenius predicted CO₂-driven warming in 1896. The equilibrium climate sensitivity (ECS ≈ 2.5–4°C per CO₂ doubling) is the single most policy-critical parameter in earth system science.",
    constants:
      "λ = climate sensitivity, ΔF = radiative forcing (W/m²), σ = Stefan-Boltzmann constant, f = feedback factor",
    applications:
      "Climate projections (IPCC), carbon pricing, energy policy, climate model evaluation, geoengineering assessment",
    beauty: 7,
    difficulty: "hard",
    tags: ["climate science", "radiative forcing", "climate sensitivity", "greenhouse effect"],
  },
  {
    rank: 236,
    name: "AMOC Stream Function",
    equation: "\\Psi(y,z) = -\\int_{-H}^z\\int_{x_W}^{x_E} v\\,dx\\,dz'",
    discoverer: "Oceanographic community",
    year: "20th century",
    field: "Physical Oceanography",
    domain: "Earth & Space",
    subDomain: "Geosciences",
    domainEmoji: "🌍",
    significance:
      "The overturning stream function of the Atlantic Meridional Overturning Circulation — the planetary heat conveyor belt. AMOC transports ~1.3 PW of heat northward. Its potential collapse under climate change would drastically alter European climate. A critical tipping element of the Earth system.",
    constants:
      "Ψ = overturning stream function (Sv = 10⁶ m³/s), v = meridional velocity, x_W, x_E = zonal boundaries, H = ocean depth",
    applications:
      "Climate modelling (AMOC collapse risk), ocean heat uptake, North Atlantic weather, sea level rise, fisheries",
    beauty: 6,
    difficulty: "sota",
    tags: ["oceanography", "AMOC", "climate", "thermohaline circulation"],
  },
  {
    rank: 237,
    name: "Energy Balance Model (Budyko-Sellers)",
    equation: "C\\frac{dT}{dt} = S_0(1-\\alpha)/4 - \\varepsilon\\sigma T^4 + f(T)",
    discoverer: "Budyko & Sellers",
    year: "1969",
    field: "Climate Science / Earth System",
    domain: "Earth & Space",
    subDomain: "Geosciences",
    domainEmoji: "🌍",
    significance:
      "The simplest global climate model: energy balance between absorbed solar radiation and outgoing longwave radiation with feedback f(T). Despite simplicity, it captures ice-albedo feedback, multiple equilibria (snowball Earth), and the essence of climate sensitivity.",
    constants:
      "C = heat capacity, S₀ = solar constant ≈ 1361 W/m², α = albedo ≈ 0.3, ε = emissivity, σ = Stefan-Boltzmann constant",
    applications:
      "Climate sensitivity analysis, paleoclimate (snowball Earth), climate education, policy-relevant simple models",
    beauty: 7,
    difficulty: "hard",
    tags: ["climate science", "energy balance", "Budyko-Sellers", "ice-albedo feedback"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // RENEWABLE ENERGY & ENGINEERING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 238,
    name: "Betz Limit",
    equation: "P_{\\max} = \\frac{16}{27}\\cdot\\frac{1}{2}\\rho A v^3",
    discoverer: "Albert Betz",
    year: "1919",
    field: "Fluid Mechanics / Wind Energy",
    domain: "Engineering",
    subDomain: "Mechanical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Proves that no wind turbine can extract more than 16/27 ≈ 59.3% of the kinetic energy from wind, regardless of design. Derived from momentum theory and conservation principles. The fundamental limit governing wind energy engineering.",
    constants: "P_max = maximum extractable power, ρ = air density ≈ 1.225 kg/m³, A = rotor swept area, v = wind speed",
    applications: "Wind turbine design, wind farm layout, energy policy, aerodynamics, Betz efficiency limits",
    beauty: 8,
    difficulty: "hard",
    tags: ["wind energy", "Betz limit", "fluid mechanics", "renewable energy"],
  },
  {
    rank: 239,
    name: "Shockley-Queisser Limit",
    equation: "\\eta_{\\max} \\approx 33.7\\%\\text{ for }E_g \\approx 1.34\\,\\mathrm{eV}",
    discoverer: "Shockley & Queisser",
    year: "1961",
    field: "Photovoltaics / Semiconductor Physics",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "Sets the theoretical maximum efficiency of a single-junction solar cell under unconcentrated sunlight at ~33.7%. Derived from detailed balance of photon absorption and emission. The fundamental limit guiding all solar cell research and the benchmark for photovoltaic innovation.",
    constants: "η_max ≈ 33.7% (Shockley-Queisser limit), E_g = 1.34 eV (optimal bandgap), AM1.5 solar spectrum",
    applications:
      "Solar cell design, photovoltaic research, tandem/multi-junction cells, concentrator photovoltaics, energy policy",
    beauty: 8,
    difficulty: "hard",
    tags: ["solar cells", "photovoltaics", "Shockley-Queisser", "semiconductor physics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ADVANCED SIGNAL PROCESSING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 240,
    name: "Nyquist-Shannon Sampling Theorem",
    equation: "f_s \\geq 2f_{\\max} \\Rightarrow x(t)\\text{ perfectly recoverable}",
    discoverer: "Nyquist / Shannon",
    year: "1928 / 1949",
    field: "Signal Processing / Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "A band-limited signal can be perfectly reconstructed from discrete samples if the sampling rate is at least twice the maximum frequency. The theoretical foundation of all digital audio, digital communications, and analogue-to-digital conversion. Sampling below Nyquist causes aliasing.",
    constants: "f_s = sampling frequency, f_max = signal bandwidth, Nyquist rate = 2f_max",
    applications: "Digital audio (CD: 44.1 kHz), medical imaging, software-defined radio, telecommunications, radar",
    beauty: 8,
    difficulty: "easy",
    tags: ["signal processing", "sampling theorem", "Nyquist-Shannon", "digital communications"],
  },
  {
    rank: 241,
    name: "Z-Transform",
    equation: "X(z) = \\sum_{n=-\\infty}^{\\infty} x[n]\\,z^{-n}, \\quad z \\in \\mathbb{C}",
    discoverer: "Lotfi Zadeh / Ragazzini",
    year: "1952",
    field: "Digital Signal Processing",
    domain: "Engineering",
    subDomain: "Electrical Engineering",
    domainEmoji: "⚙️",
    significance:
      "The discrete-time analogue of the Laplace transform. Converts difference equations to algebraic equations in the complex z-plane. The language of digital filters, digital control systems, and all discrete-time system analysis.",
    constants:
      "X(z) = Z-transform, x[n] = discrete-time sequence, z = complex frequency variable, ROC = region of convergence",
    applications:
      "Digital filter design (IIR, FIR), digital control systems, digital audio processing, communications, DSP chips",
    beauty: 7,
    difficulty: "hard",
    tags: ["digital signal processing", "Z-transform", "digital filters", "discrete-time systems"],
  },
  {
    rank: 242,
    name: "Wavelet Transform",
    equation: "W_\\psi f(a,b) = \\frac{1}{\\sqrt{|a|}}\\int f(t)\\,\\overline{\\psi\\!\\left(\\frac{t-b}{a}\\right)}dt",
    discoverer: "Morlet / Grossmann / Meyer / Daubechies",
    year: "1982–1988",
    field: "Signal Processing / Harmonic Analysis",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "Analyses signals in both time and frequency simultaneously, unlike the Fourier transform which loses temporal localisation. Daubechies' compactly supported wavelets (1988) enabled JPEG2000 image compression and medical image analysis. The mathematical basis of multi-resolution analysis.",
    constants: "ψ = mother wavelet, a = scale, b = translation, W_ψ f = wavelet coefficient",
    applications:
      "JPEG2000, EEG/ECG analysis, turbulence analysis, gravitational wave detection preprocessing, fingerprint compression (FBI)",
    beauty: 8,
    difficulty: "hard",
    tags: ["wavelets", "signal processing", "time-frequency analysis", "compression"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // QUANTUM INFORMATION THEORY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 243,
    name: "Von Neumann Entropy",
    equation: "S(\\rho) = -\\mathrm{tr}(\\rho\\ln\\rho) = -\\sum_i \\lambda_i\\ln\\lambda_i",
    discoverer: "John von Neumann",
    year: "1927",
    field: "Quantum Information Theory",
    domain: "Computer Science",
    subDomain: "Quantum Computing",
    domainEmoji: "💻",
    significance:
      "The quantum generalisation of Shannon entropy for density matrices. Measures quantum entanglement, quantum channel capacity, and thermodynamic entropy in quantum systems. Central to quantum information theory, quantum error correction, and the black hole information paradox.",
    constants: "ρ = density matrix, λ_i = eigenvalues of ρ, tr = trace, S(ρ) = 0 for pure states",
    applications:
      "Quantum entanglement quantification, quantum cryptography, black hole thermodynamics, quantum computing (error bounds)",
    beauty: 9,
    difficulty: "hard",
    tags: ["quantum information", "von Neumann entropy", "entanglement", "density matrix"],
  },
  {
    rank: 244,
    name: "No-Cloning Theorem",
    equation:
      "\\nexists\\text{ unitary }U: U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle\\;\\forall|\\psi\\rangle",
    discoverer: "Wootters & Zurek / Dieks",
    year: "1982",
    field: "Quantum Information",
    domain: "Computer Science",
    subDomain: "Quantum Computing",
    domainEmoji: "💻",
    significance:
      "It is impossible to create an identical copy of an arbitrary unknown quantum state. A fundamental difference between quantum and classical information. Underlies the security of quantum key distribution (QKD) and prevents quantum error correction by simple copying.",
    constants: "|ψ⟩ = arbitrary quantum state, U = unitary operation, |0⟩ = blank ancilla",
    applications:
      "Quantum cryptography (QKD security), quantum error correction, quantum teleportation, quantum networks",
    beauty: 9,
    difficulty: "hard",
    tags: ["quantum information", "no-cloning", "quantum cryptography", "quantum fundamentals"],
  },
  {
    rank: 245,
    name: "Quantum Teleportation Protocol",
    equation: "\\Phi^+_{AB}\\otimes|\\psi\\rangle_C \\xrightarrow{\\text{LOCC}} |\\psi\\rangle_B",
    discoverer: "Bennett, Brassard, Crépeau, Jozsa, Peres & Wootters",
    year: "1993",
    field: "Quantum Information",
    domain: "Computer Science",
    subDomain: "Quantum Computing",
    domainEmoji: "💻",
    significance:
      "Demonstrates that an unknown quantum state can be transmitted using a shared entangled pair and two classical bits — no physical matter transferred. Teleportation does not violate relativity (classical communication required). Foundation of quantum networks and quantum repeaters.",
    constants:
      "Φ⁺_AB = Bell state (maximally entangled pair), |ψ⟩ = state to teleport, LOCC = local operations + classical communication",
    applications:
      "Quantum networks, quantum repeaters, quantum internet, quantum key distribution, distributed quantum computing",
    beauty: 10,
    difficulty: "hard",
    tags: ["quantum teleportation", "entanglement", "quantum networks", "Bell states"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // TOPOLOGICAL QUANTUM COMPUTATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 246,
    name: "Anyonic Exchange Statistics",
    equation: "|\\psi\\rangle \\to e^{i\\theta}|\\psi\\rangle \\quad (0 < \\theta < \\pi\\text{ for anyons})",
    discoverer: "Wilczek",
    year: "1982",
    field: "Topological Quantum Computation",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "In 2D systems, particle exchange can give any phase e^{iθ}, interpolating between bosons (θ=0) and fermions (θ=π). Non-abelian anyons implement quantum gates by braiding. Microsoft's topological quantum computing approach is based on Majorana fermions as non-abelian anyons.",
    constants:
      "θ = statistical angle, e^{iθ} = exchange phase, abelian anyons: θ ∈ (0,π), non-abelian anyons: matrix-valued",
    applications:
      "Topological quantum computing (fault-tolerant qubits), fractional quantum Hall effect, Majorana fermions",
    beauty: 9,
    difficulty: "sota",
    tags: ["topological quantum computation", "anyons", "braiding", "quantum Hall effect"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // APPLIED MATHEMATICS — SPECIAL FUNCTIONS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 247,
    name: "Gamma Function",
    equation: "\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt, \\quad \\Gamma(n+1) = n!",
    discoverer: "Euler",
    year: "1729",
    field: "Analysis / Special Functions",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Extends the factorial function to all complex numbers (except non-positive integers). Appears in Stirling's formula, the Beta function, the Riemann zeta function, and throughout mathematical physics. Gauss called it 'the most important function in mathematics after the exponential.'",
    constants: "z = complex argument, Γ(n+1) = n! for positive integers, poles at z = 0, −1, −2, …",
    applications:
      "Probability distributions (chi-squared, beta, gamma), statistical mechanics, quantum field theory, number theory",
    beauty: 9,
    difficulty: "hard",
    tags: ["special functions", "Gamma function", "factorial", "complex analysis"],
  },
  {
    rank: 248,
    name: "Bessel Function Equation",
    equation: "x^2y'' + xy' + (x^2 - n^2)y = 0, \\quad y = J_n(x)",
    discoverer: "Daniel Bernoulli / Friedrich Bessel",
    year: "1703 / 1824",
    field: "Analysis / Mathematical Physics",
    domain: "Mathematics",
    subDomain: "Differential Equations",
    domainEmoji: "📐",
    significance:
      "The Bessel differential equation arises whenever Laplace's equation is solved in cylindrical coordinates. Its solutions Jₙ(x) are the canonical oscillatory functions of mathematical physics, appearing in heat conduction, electromagnetic waves, quantum mechanics, and acoustic modes.",
    constants: "J_n(x) = Bessel function of the first kind, n = order (integer or real), cylindrical symmetry",
    applications:
      "Cylindrical waveguides, drum vibration modes, heat conduction in cylinders, MRI (k-space), optical fibres",
    beauty: 7,
    difficulty: "hard",
    tags: ["special functions", "Bessel functions", "cylindrical coordinates", "mathematical physics"],
  },
  {
    rank: 249,
    name: "Legendre Polynomial Orthogonality",
    equation: "\\int_{-1}^1 P_m(x)P_n(x)\\,dx = \\frac{2}{2n+1}\\delta_{mn}",
    discoverer: "Adrien-Marie Legendre",
    year: "1785",
    field: "Analysis / Special Functions",
    domain: "Mathematics",
    subDomain: "Calculus & Analysis",
    domainEmoji: "📐",
    significance:
      "Legendre polynomials form a complete orthogonal basis on [−1,1]. They arise in the angular part of Laplace's equation in spherical coordinates — governing gravitational potentials, electrostatics, and quantum angular momentum (spherical harmonics).",
    constants: "P_n(x) = Legendre polynomial of degree n, δ_mn = Kronecker delta, orthogonality weight = 1",
    applications:
      "Quantum mechanics (angular momentum), electrostatics (multipole expansion), numerical integration (Gauss-Legendre quadrature), geophysics",
    beauty: 7,
    difficulty: "hard",
    tags: ["special functions", "Legendre polynomials", "orthogonality", "spherical harmonics"],
  },
  {
    rank: 250,
    name: "Modularity Theorem (Taniyama-Shimura-Weil)",
    equation: "E\\text{ elliptic curve over }\\mathbb{Q} \\Rightarrow E\\text{ is modular: }L(E,s) = L(f,s)",
    discoverer: "Taniyama / Shimura / Weil (conj.) / Wiles & Taylor (proved)",
    year: "1955 / 1995–2001",
    field: "Number Theory / Algebraic Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Every elliptic curve over ℚ is a modular form — its L-function equals that of a weight-2 cusp form. This was Fermat's Last Theorem's actual key: Ribet showed FLT follows from modularity. Wiles proved the semistable case (1995), Taylor-Wiles the full theorem (2001). One of the landmark achievements in 20th-century mathematics.",
    constants:
      "E = elliptic curve, L(E,s) = Hasse-Weil L-function, f = weight-2 cusp form, L(f,s) = modular L-function",
    applications:
      "Fermat's Last Theorem (key step), Langlands programme, arithmetic geometry, elliptic curve cryptography",
    beauty: 10,
    difficulty: "sota",
    tags: ["number theory", "modularity theorem", "elliptic curves", "Langlands", "Fermat"],
  },
  {
    rank: 251,
    name: "Langlands Correspondence (Local)",
    equation: "\\mathrm{Irr}(GL_n(F)) \\longleftrightarrow \\{\\text{n-dim Weil-Deligne reps of }W_F\\}",
    discoverer: "Robert Langlands",
    year: "1967",
    field: "Number Theory / Representation Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Langlands' visionary 1967 letter to Weil proposed a vast unification of number theory and representation theory via a correspondence between automorphic representations and Galois representations. Called 'a grand unified theory of mathematics,' it connects harmonic analysis, algebraic geometry, and arithmetic. The geometric Langlands programme was proved by a 800-page collaboration in 2024.",
    constants:
      "GL_n(F) = general linear group over local field F, W_F = Weil group, n-dimensional representations, L-functions",
    applications:
      "Fermat's Last Theorem (via modularity), Shimura varieties, automorphic forms, the geometric Langlands programme, string theory",
    beauty: 10,
    difficulty: "sota",
    tags: ["Langlands programme", "number theory", "representation theory", "automorphic forms"],
  },
  {
    rank: 252,
    name: "Birch and Swinnerton-Dyer Conjecture",
    equation: "\\mathrm{ord}_{s=1}L(E,s) = \\mathrm{rank}(E(\\mathbb{Q}))",
    discoverer: "Birch & Swinnerton-Dyer",
    year: "1965",
    field: "Number Theory / Algebraic Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Conjectures that the order of vanishing of the L-function of an elliptic curve at s=1 equals the algebraic rank of the group of rational points. One of the seven Clay Millennium Prize Problems ($1M). Only the rank-0 and rank-1 cases are partially resolved.",
    constants: "L(E,s) = Hasse-Weil L-function of elliptic curve E, rank(E(ℚ)) = rank of rational points group",
    applications: "Arithmetic geometry, cryptography (elliptic curves), Langlands programme, congruent number problem",
    beauty: 10,
    difficulty: "sota",
    millenniumProblem: true,
    unsolved: true,
    tags: ["Birch Swinnerton-Dyer", "elliptic curves", "Millennium Prize", "number theory"],
  },
  {
    rank: 253,
    name: "Wiles's Modularity Lifting",
    equation: "\\rho: G_{\\mathbb{Q}} \\to GL_2(\\mathcal{O}) \\text{ is modular if }\\bar{\\rho}\\text{ is}",
    discoverer: "Andrew Wiles / Richard Taylor",
    year: "1995",
    field: "Number Theory / Algebraic Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The technical core of Wiles's proof of Fermat's Last Theorem: a Galois representation is modular if its reduction mod p is modular. The R=T theorem (deformation rings equal Hecke algebras) unlocked the proof. This paradigm — 'modularity lifting' — now drives the entire Langlands programme.",
    constants: "ρ = p-adic Galois representation, G_ℚ = absolute Galois group, ℴ = ring of integers, modular lifting",
    applications: "Fermat's Last Theorem, Langlands programme, arithmetic geometry, automorphic forms",
    beauty: 9,
    difficulty: "sota",
    tags: ["modularity lifting", "Galois representations", "Fermat", "Wiles"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // RANDOM MATRIX THEORY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 254,
    name: "Wigner Semicircle Law",
    equation: "\\rho(x) = \\frac{2}{\\pi R^2}\\sqrt{R^2 - x^2}, \\quad |x| \\leq R",
    discoverer: "Eugene Wigner",
    year: "1955",
    field: "Random Matrix Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The empirical spectral distribution of a large random symmetric matrix with i.i.d. entries converges to the semicircle law. Wigner introduced random matrices to model nuclear energy level statistics. The law appears in free probability, wireless communications, and deep learning.",
    constants: "ρ(x) = eigenvalue density, R = spectral radius = 2√N (N = matrix size), semicircular support",
    applications:
      "Nuclear physics (heavy nuclei spectra), wireless MIMO channels, deep neural network weight matrices, financial correlation matrices",
    beauty: 8,
    difficulty: "sota",
    tags: ["random matrix theory", "Wigner", "semicircle law", "eigenvalue distribution"],
  },
  {
    rank: 255,
    name: "Tracy-Widom Distribution",
    equation: "F_2(s) = \\exp\\!\\left(-\\int_s^\\infty (x-s)q^2(x)\\,dx\\right)",
    discoverer: "Craig Tracy & Harold Widom",
    year: "1994",
    field: "Random Matrix Theory / Probability",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The distribution of the largest eigenvalue of a GUE random matrix — a new universal law in probability, distinct from the Gaussian. Appears wherever correlated maxima arise: longest increasing subsequences, KPZ growth models, stochastic PDEs, and statistical physics.",
    constants: "F₂ = GUE Tracy-Widom CDF, q(x) = solution to Painlevé II ODE, s = scaled maximal eigenvalue",
    applications:
      "Longest increasing subsequences, KPZ universality class, statistical physics, genomics (PCA), wireless communications",
    beauty: 9,
    difficulty: "sota",
    tags: ["random matrix theory", "Tracy-Widom", "extreme eigenvalue", "universality"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // OPTIMAL TRANSPORT
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 256,
    name: "Monge-Kantorovich Optimal Transport",
    equation: "W_p(\\mu,\\nu)^p = \\inf_{\\gamma\\in\\Pi(\\mu,\\nu)}\\int_{X\\times Y} c(x,y)\\,d\\gamma(x,y)",
    discoverer: "Monge (1781) / Kantorovich (1942) / Villani (theory)",
    year: "1781 / 1942",
    field: "Optimal Transport / Probability",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "Defines the Wasserstein distance between probability measures as the minimum cost of transporting one distribution into another. Kantorovich won the 1975 Nobel Prize for his linear programming formulation. Villani won the Fields Medal for the modern theory. Optimal transport now powers machine learning, imaging, and economics.",
    constants:
      "W_p = p-Wasserstein distance, μ,ν = probability measures, c(x,y) = transport cost, γ = coupling (transport plan)",
    applications:
      "Generative models (Wasserstein GANs), domain adaptation, image registration, economics (matching), fluid dynamics",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["optimal transport", "Wasserstein distance", "probability", "Kantorovich"],
  },
  {
    rank: 257,
    name: "Brenier's Theorem",
    equation: "T^* = \\nabla\\varphi, \\quad T^*_{\\#}\\mu = \\nu, \\quad \\varphi\\text{ convex}",
    discoverer: "Yann Brenier",
    year: "1987",
    field: "Optimal Transport",
    domain: "Mathematics",
    subDomain: "Optimization",
    domainEmoji: "📐",
    significance:
      "The unique optimal transport map (for quadratic cost) is the gradient of a convex function — a generalised gradient. Connects optimal transport to the Monge-Ampère PDE and makes the map explicit. Foundation of computational optimal transport and fluid mechanics (Euler equations as geodesics).",
    constants: "T* = optimal transport map, φ = Brenier potential (convex function), ∇φ = gradient, T*#μ = pushforward",
    applications:
      "Colour transfer in images, generative models (normalising flows), fluid dynamics, meteorology, computational geometry",
    beauty: 8,
    difficulty: "sota",
    tags: ["optimal transport", "Brenier", "Monge-Ampère", "convex functions"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // FREE PROBABILITY & NONCOMMUTATIVE GEOMETRY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 258,
    name: "Free Entropy (Voiculescu)",
    equation: "\\chi(X) = \\int\\int \\log|s-t|\\,d\\mu(s)\\,d\\mu(t) + \\tfrac{3}{4} + \\tfrac{1}{2}\\log(2\\pi)",
    discoverer: "Dan-Virgil Voiculescu",
    year: "1991",
    field: "Free Probability Theory",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "Free entropy is the analogue of Boltzmann entropy for noncommutative random variables. Voiculescu's free probability theory — where independence is replaced by 'free independence' — explains random matrix eigenvalue statistics and provides a framework for von Neumann algebras.",
    constants: "χ(X) = free entropy, μ = spectral measure, log = natural logarithm, free cumulants",
    applications:
      "Random matrix theory (free convolution), von Neumann algebras (free group factors), wireless communications, quantum groups",
    beauty: 8,
    difficulty: "sota",
    tags: ["free probability", "Voiculescu", "random matrix theory", "noncommutative"],
  },
  {
    rank: 259,
    name: "Connes' Spectral Triple",
    equation: "(\\mathcal{A}, \\mathcal{H}, D): \\|[D,a]\\|<\\infty\\;\\forall a\\in\\mathcal{A}",
    discoverer: "Alain Connes",
    year: "1994",
    field: "Noncommutative Geometry",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "A spectral triple (algebra, Hilbert space, Dirac operator) encodes Riemannian geometry purely in operator-algebraic terms, allowing geometry to be extended to noncommutative spaces. Connes won the Fields Medal for this framework, which unifies the Standard Model with gravity geometrically.",
    constants:
      "𝒜 = unital algebra, ℋ = Hilbert space, D = Dirac operator (self-adjoint, compact resolvent), [D,a] = commutator",
    applications:
      "Noncommutative geometry, Standard Model derivation, quantum gravity approaches, number theory (noncommutative tori)",
    beauty: 9,
    difficulty: "sota",
    tags: ["noncommutative geometry", "Connes", "Dirac operator", "spectral triple"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // PERCOLATION THEORY & STATISTICAL PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 260,
    name: "Percolation Threshold",
    equation: "P_{\\infty}(p) = \\begin{cases}0 & p < p_c \\\\ >0 & p > p_c\\end{cases}",
    discoverer: "Broadbent & Hammersley",
    year: "1957",
    field: "Statistical Physics / Probability",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "The probability of an infinite connected cluster jumps discontinuously at the percolation threshold p_c. One of the sharpest phase transitions in probability. Smirnovwon the 2010 Fields Medal for proving conformal invariance of percolation — connecting it to SLE curves.",
    constants:
      "P_∞(p) = infinite cluster probability, p = bond/site probability, p_c = critical threshold (e.g. ½ for 2D square bond)",
    applications: "Epidemics (critical R₀), porous media, network robustness, forest fires, oil recovery, polymer gels",
    beauty: 8,
    difficulty: "sota",
    tags: ["percolation theory", "phase transitions", "critical phenomena", "probability"],
  },
  {
    rank: 261,
    name: "Ising Model Partition Function",
    equation:
      "Z = \\sum_{\\{s_i\\}}\\exp\\!\\left(\\beta J\\sum_{\\langle i,j\\rangle}s_i s_j + \\beta h\\sum_i s_i\\right)",
    discoverer: "Lenz / Ising / Onsager",
    year: "1920 / 1944",
    field: "Statistical Mechanics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "The partition function of the Ising model of ferromagnetism. Onsager's exact 2D solution (1944) was a landmark in statistical mechanics — the first exact solution of a nontrivial interacting system. The model exhibits a phase transition and is the universal model of critical phenomena.",
    constants:
      "Z = partition function, s_i = ±1 spins, β = 1/k_BT, J = coupling constant, h = external field, ⟨i,j⟩ = nearest neighbours",
    applications:
      "Phase transitions, magnetic materials, neural networks (Hopfield), image processing (Markov random fields), computational complexity (#P-hard)",
    beauty: 9,
    difficulty: "sota",
    tags: ["Ising model", "statistical mechanics", "phase transitions", "Onsager"],
  },
  {
    rank: 262,
    name: "Renormalisation Group Fixed Point (Wilson)",
    equation: "\\beta(g^*) = 0, \\quad \\nu = -1/\\lambda_1",
    discoverer: "Kenneth Wilson",
    year: "1971",
    field: "Statistical Mechanics / Critical Phenomena",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "At a second-order phase transition, the RG flow reaches a fixed point β(g*)=0. Critical exponents are determined by the eigenvalues of the linearised RG. Wilson's real-space and ε-expansion RG methods won him the 1982 Nobel Prize and unified the theory of critical phenomena.",
    constants:
      "g* = fixed-point coupling, β = RG beta function, ν = correlation length exponent, λ₁ = relevant eigenvalue",
    applications:
      "Phase transitions (universality classes), polymer scaling, turbulence (energy cascade), particle physics (asymptotic freedom)",
    beauty: 9,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["renormalisation group", "critical phenomena", "phase transitions", "Wilson"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MAGNETISM & CONDENSED MATTER
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 263,
    name: "Heisenberg Spin Exchange Hamiltonian",
    equation:
      "H = -J\\sum_{\\langle i,j\\rangle}\\mathbf{S}_i\\cdot\\mathbf{S}_j - g\\mu_B\\sum_i \\mathbf{B}\\cdot\\mathbf{S}_i",
    discoverer: "Werner Heisenberg",
    year: "1928",
    field: "Quantum Magnetism",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes the quantum mechanical exchange interaction between spins. J>0 gives ferromagnetism (parallel spins), J<0 antiferromagnetism. Foundation of all quantum magnetism, spin waves, frustrated magnets, and quantum spin liquids.",
    constants: "J = exchange coupling, S_i = spin-½ operators, g = g-factor, μ_B = Bohr magneton, B = magnetic field",
    applications:
      "Magnetic materials, spintronics, quantum computing (spin qubits), frustrated magnets, high-temperature superconductivity",
    beauty: 8,
    difficulty: "hard",
    tags: ["quantum magnetism", "Heisenberg model", "exchange interaction", "spins"],
  },
  {
    rank: 264,
    name: "Landau-Lifshitz-Gilbert Equation",
    equation:
      "\\frac{d\\mathbf{M}}{dt} = -\\gamma\\mathbf{M}\\times\\mathbf{H}_{\\text{eff}} + \\frac{\\alpha}{M_s}\\mathbf{M}\\times\\frac{d\\mathbf{M}}{dt}",
    discoverer: "Landau & Lifshitz / Gilbert",
    year: "1935 / 1955",
    field: "Micromagnetics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Governs the precessional dynamics and damping of magnetisation in a ferromagnet. The equation of motion for every magnetic memory device. Foundation of spintronics and magnetic data storage — the physics inside every hard drive, MRAM, and magnetic sensor.",
    constants:
      "M = magnetisation vector, γ = gyromagnetic ratio, H_eff = effective field, α = damping constant, M_s = saturation magnetisation",
    applications:
      "Hard disk drives, MRAM (magnetic RAM), spin-torque oscillators, magnonic devices, magnetic skyrmions",
    beauty: 7,
    difficulty: "hard",
    tags: ["micromagnetics", "magnetisation dynamics", "spintronics", "LLG equation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // SEMICONDUCTOR DEVICE PHYSICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 265,
    name: "Shockley Diode Equation",
    equation: "I = I_0\\left(e^{V/nV_T} - 1\\right), \\quad V_T = k_BT/q",
    discoverer: "William Shockley",
    year: "1949",
    field: "Semiconductor Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "The ideal diode equation describing current-voltage characteristics of a p-n junction. Foundation of all semiconductor device physics. Shockley, Bardeen, and Brattain won the 1956 Nobel Prize for the transistor — the device built from understanding these junctions.",
    constants:
      "I₀ = saturation current, V = applied voltage, n = ideality factor, V_T = thermal voltage ≈ 25.85 mV at 300 K, q = electron charge",
    applications: "Diodes, solar cells, LEDs, transistors, rectifiers, all semiconductor electronics",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["semiconductor physics", "diode equation", "Shockley", "p-n junction"],
  },
  {
    rank: 266,
    name: "MOSFET Drain Current (Long-Channel)",
    equation: "I_D = \\frac{\\mu_n C_{\\mathrm{ox}}W}{2L}(V_{GS}-V_{th})^2\\,(1+\\lambda V_{DS})",
    discoverer: "Atalla & Kahng / Sah-Noyce-Shockley",
    year: "1960",
    field: "Semiconductor Device Physics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "The saturation-region drain current of a MOSFET — the most manufactured object in human history. Every CPU, smartphone, and digital system is built from billions of transistors described by this equation. Moore's Law is fundamentally about making W/L smaller.",
    constants:
      "μₙ = electron mobility, C_ox = oxide capacitance/area, W/L = width-to-length ratio, V_GS = gate-source voltage, V_th = threshold voltage, λ = channel-length modulation",
    applications:
      "CPU/GPU design, memory (DRAM, flash), RF circuits, power electronics, integrated circuits, IoT devices",
    beauty: 7,
    difficulty: "hard",
    tags: ["MOSFET", "transistor", "semiconductor devices", "digital electronics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // QUANTUM CHEMISTRY & DFT
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 267,
    name: "Density Functional Theory (Kohn-Sham)",
    equation:
      "\\left(-\\frac{\\hbar^2}{2m}\\nabla^2 + V_{\\text{ext}} + V_H[n] + V_{xc}[n]\\right)\\phi_i = \\varepsilon_i\\phi_i",
    discoverer: "Hohenberg-Kohn / Kohn-Sham",
    year: "1964–1965",
    field: "Computational Chemistry / Materials Science",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "DFT replaces the many-body Schrödinger equation with a set of one-particle equations for the electron density. Walter Kohn won the 1998 Nobel Prize. DFT is the workhorse of computational chemistry and materials science — used to design drugs, catalysts, battery materials, and semiconductors.",
    constants:
      "φ_i = Kohn-Sham orbital, n = electron density, V_ext = external potential, V_H = Hartree potential, V_xc = exchange-correlation potential",
    applications:
      "Drug design, catalyst design, battery materials, semiconductor design, surface chemistry, materials discovery",
    beauty: 8,
    difficulty: "sota",
    nobelPrize: true,
    tags: ["DFT", "density functional theory", "quantum chemistry", "Kohn-Sham"],
  },
  {
    rank: 268,
    name: "Hartree-Fock Equations",
    equation: "f_i\\phi_i = \\left(h + \\sum_j(J_j - K_j)\\right)\\phi_i = \\varepsilon_i\\phi_i",
    discoverer: "Hartree / Fock / Slater",
    year: "1927–1935",
    field: "Quantum Chemistry",
    domain: "Chemistry",
    subDomain: "Physical Chemistry",
    domainEmoji: "🧪",
    significance:
      "The Hartree-Fock mean-field approximation reduces the many-electron Schrödinger equation to a set of one-electron equations. The foundation of all ab initio quantum chemistry. Coulomb (J) and exchange (K) integrals capture electron-electron interactions approximately.",
    constants:
      "φ_i = molecular orbital, h = one-electron Hamiltonian, J_j = Coulomb operator, K_j = exchange operator, ε_i = orbital energy",
    applications:
      "Quantum chemistry (structure, energetics, spectra), drug design, catalysis, molecular dynamics, post-HF methods",
    beauty: 7,
    difficulty: "sota",
    tags: ["quantum chemistry", "Hartree-Fock", "molecular orbitals", "electronic structure"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // METABOLIC SCALING & SYSTEMS BIOLOGY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 269,
    name: "Kleiber's Law (Metabolic Scaling)",
    equation: "B = B_0 M^{3/4}",
    discoverer: "Max Kleiber",
    year: "1932",
    field: "Metabolic Biology / Allometry",
    domain: "Biology & Medicine",
    subDomain: "Ecology & Systems Bio",
    domainEmoji: "🧬",
    significance:
      "Metabolic rate scales as the ¾ power of body mass across 20+ orders of magnitude — from microbes to blue whales. The 3/4 exponent (vs the naively expected 2/3 from surface area) is explained by fractal vascular networks (West-Brown-Enquist theory). One of the most universal laws in biology.",
    constants: "B = basal metabolic rate, B₀ = normalisation constant, M = body mass, exponent 3/4",
    applications:
      "Drug dosing (allometric scaling), ecology (energy flux), evolution (lifespan scaling), hospital ICU planning, ageing",
    beauty: 8,
    difficulty: "hard",
    tags: ["metabolic scaling", "Kleiber's law", "allometry", "fractal biology"],
  },
  {
    rank: 270,
    name: "Michaelis-Menten with Hill Cooperativity",
    equation: "v = \\frac{V_{\\max}[S]^n}{K_d^n + [S]^n}",
    discoverer: "Hill / Monod-Wyman-Changeux",
    year: "1910",
    field: "Systems Biology / Biochemistry",
    domain: "Biology & Medicine",
    subDomain: "Molecular Biology",
    domainEmoji: "🧬",
    significance:
      "The Hill equation extends Michaelis-Menten to cooperative binding with Hill coefficient n. n>1 produces sigmoidal (switch-like) responses critical in gene regulation networks. n=2 describes haemoglobin O₂ binding. Foundation of systems biology toggle switches and bistability.",
    constants:
      "n = Hill coefficient (cooperativity), K_d = dissociation constant, V_max = maximum rate, [S] = substrate concentration",
    applications:
      "Gene regulatory networks (bistability), haemoglobin O₂ binding, synthetic biology (genetic circuits), drug dose-response, cell signalling",
    beauty: 7,
    difficulty: "hard",
    tags: ["Hill equation", "cooperativity", "systems biology", "gene regulation"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // NETWORK SCIENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 271,
    name: "Barabási-Albert Preferential Attachment",
    equation: "\\Pi(k_i) = \\frac{k_i}{\\sum_j k_j} \\Rightarrow P(k) \\sim k^{-\\gamma}",
    discoverer: "Barabási & Albert",
    year: "1999",
    field: "Network Science / Complex Systems",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "New nodes attach preferentially to high-degree nodes ('rich get richer'), producing scale-free networks with power-law degree distributions. Explains why the World Wide Web, citation networks, and protein interaction networks have hub structure. The foundational model of complex networks.",
    constants: "Π(k_i) = attachment probability, k_i = degree of node i, P(k) = degree distribution, γ ≈ 3",
    applications:
      "World Wide Web, citation networks, protein interaction networks, social networks, internet infrastructure",
    beauty: 8,
    difficulty: "hard",
    tags: ["network science", "scale-free networks", "preferential attachment", "power laws"],
  },
  {
    rank: 272,
    name: "Watts-Strogatz Small-World Model",
    equation: "L \\sim \\ln N / \\ln k, \\quad C \\gg C_{\\text{random}}",
    discoverer: "Watts & Strogatz",
    year: "1998",
    field: "Network Science",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Real networks have high clustering (C >> C_random) yet short average path lengths (L ~ ln N) — the 'small-world' property. Watts and Strogatz showed that randomly rewiring a few edges of a regular lattice creates small-world behaviour, explaining the 'six degrees of separation' phenomenon.",
    constants: "L = average path length, N = network size, k = average degree, C = clustering coefficient",
    applications:
      "Social networks, epidemic spreading, neural networks (brain), power grids, the internet, epidemiology",
    beauty: 8,
    difficulty: "hard",
    tags: ["network science", "small world", "complex networks", "Watts-Strogatz"],
  },
  {
    rank: 273,
    name: "SIR on Networks (Bond Percolation Mapping)",
    equation: "R_0 = \\tau\\frac{\\langle k^2\\rangle - \\langle k\\rangle}{\\langle k\\rangle}",
    discoverer: "Newman / Molloy-Reed / Pastor-Satorras",
    year: "2001",
    field: "Network Epidemiology",
    domain: "Mathematics",
    subDomain: "Applied Mathematics",
    domainEmoji: "📐",
    significance:
      "The basic reproduction number on a heterogeneous network depends on the ratio of second to first moments of the degree distribution. Scale-free networks (⟨k²⟩ → ∞) have no epidemic threshold — any infection spreads. This explained why computer viruses and STIs spread in hub networks.",
    constants:
      "R₀ = network basic reproduction number, τ = transmission rate, ⟨k⟩ = mean degree, ⟨k²⟩ = second moment of degree distribution",
    applications:
      "COVID-19 network models, STI epidemiology, computer virus spreading, immunisation strategy, information cascades",
    beauty: 8,
    difficulty: "hard",
    tags: ["network epidemiology", "SIR model", "percolation", "herd immunity"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // FLUID TURBULENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 274,
    name: "Kolmogorov Energy Cascade (K41)",
    equation: "E(k) = C_K \\varepsilon^{2/3} k^{-5/3}",
    discoverer: "Andrei Kolmogorov",
    year: "1941",
    field: "Turbulence / Fluid Dynamics",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "In the inertial range of fully developed turbulence, the energy spectrum follows a k^(−5/3) power law. Kolmogorov's 1941 dimensional analysis — one of the most successful applications of scaling arguments — underpins all turbulence modelling. The −5/3 spectrum is observed everywhere from wind tunnels to the solar wind.",
    constants: "E(k) = energy spectrum, C_K ≈ 1.5 (Kolmogorov constant), ε = energy dissipation rate, k = wavenumber",
    applications:
      "Turbulence modelling (LES, RANS), atmospheric dynamics, ocean mixing, astrophysical turbulence, aerodynamics",
    beauty: 9,
    difficulty: "sota",
    tags: ["turbulence", "Kolmogorov", "energy cascade", "scaling laws"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ADDITIVE COMBINATORICS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 275,
    name: "Green-Tao Theorem",
    equation: "\\text{Primes contain arithmetic progressions of every finite length}",
    discoverer: "Ben Green & Terence Tao",
    year: "2004",
    field: "Additive Combinatorics / Number Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "The primes contain arbitrarily long arithmetic progressions. The proof combined Fourier analysis (Hardy-Littlewood circle method), Szemerédi's theorem, and Gowers uniformity norms in a tour de force of modern combinatorics. Tao received the 2006 Fields Medal partly for this work.",
    constants:
      "Arithmetic progression: a, a+d, a+2d, ..., a+(k-1)d among primes, Gowers norms, correlation with nilsequences",
    applications: "Number theory, additive combinatorics, Szemerédi's theorem, Gowers norms, coding theory",
    beauty: 10,
    difficulty: "sota",
    tags: ["additive combinatorics", "Green-Tao", "prime numbers", "arithmetic progressions"],
  },
  {
    rank: 276,
    name: "Szemerédi Regularity Lemma",
    equation: "\\text{Any graph can be partitioned into }k\\text{ parts where almost all pairs are pseudo-random}",
    discoverer: "Endre Szemerédi",
    year: "1975",
    field: "Combinatorics / Graph Theory",
    domain: "Mathematics",
    subDomain: "Discrete Mathematics",
    domainEmoji: "📐",
    significance:
      "Any sufficiently large graph can be decomposed into a bounded number of nearly uniform parts. A fundamental structure theorem in graph theory. Szemerédi won the 2012 Abel Prize. The regularity lemma enabled Green-Tao and is the foundation of the dense graph removal lemma and extremal graph theory.",
    constants:
      "ε-regular pair = edges distributed uniformly (density in any subsets within ε), partition size k ≤ tower(1/ε)",
    applications:
      "Extremal graph theory, Green-Tao theorem, property testing algorithms, graph limits (graphons), network analysis",
    beauty: 8,
    difficulty: "sota",
    tags: ["combinatorics", "Szemerédi lemma", "graph theory", "regularity"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ROBUST STATISTICS & HIGH-DIMENSIONAL INFERENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 277,
    name: "Huber Loss",
    equation:
      "L_\\delta(y,\\hat{y}) = \\begin{cases}\\tfrac{1}{2}(y-\\hat{y})^2 & |y-\\hat{y}|\\leq\\delta \\\\ \\delta|y-\\hat{y}|-\\tfrac{\\delta^2}{2} & \\text{otherwise}\\end{cases}",
    discoverer: "Peter J. Huber",
    year: "1964",
    field: "Robust Statistics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Combines the squared-error loss (efficient near zero) with absolute loss (robust to outliers) via a threshold δ. Foundation of robust statistics and M-estimation. Widely used in machine learning loss functions and gradient boosting.",
    constants: "δ = transition threshold, y = true value, ŷ = prediction, quadratic-linear hybrid",
    applications:
      "Robust regression, gradient boosting (XGBoost), object detection (smooth L1), outlier-robust model fitting",
    beauty: 7,
    difficulty: "hard",
    tags: ["robust statistics", "Huber loss", "M-estimation", "outliers"],
  },
  {
    rank: 278,
    name: "Donoho-Jin Higher Criticism",
    equation: "HC_n^* = \\max_{0<t\\leq t_0}\\frac{\\sqrt{n}(\\hat{F}(t)-t)}{\\sqrt{t(1-t)}}",
    discoverer: "David Donoho & Jin",
    year: "2004",
    field: "High-Dimensional Statistics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "A second-level goodness-of-fit test that aggregates departures across many small p-values — detecting sparse signals invisible to individual tests. Optimal for detecting extremely sparse mixtures, with applications in genetics, astrophysics, and counter-terrorism.",
    constants:
      "HC*_n = Higher Criticism statistic, F̂(t) = empirical CDF of p-values, t = threshold, n = number of tests",
    applications:
      "Genomics (rare variant detection), astrophysics (point source detection), network intrusion detection, text analysis",
    beauty: 7,
    difficulty: "sota",
    tags: ["multiple testing", "higher criticism", "sparse signals", "high-dimensional statistics"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // EXTREME VALUE THEORY
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 279,
    name: "Generalised Extreme Value Distribution",
    equation: "G(x;\\mu,\\sigma,\\xi) = \\exp\\!\\left(-\\left(1+\\xi\\frac{x-\\mu}{\\sigma}\\right)^{-1/\\xi}\\right)",
    discoverer: "Fisher & Tippett / Gnedenko / Gumbel",
    year: "1928–1943",
    field: "Extreme Value Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "The GEV distribution is the limiting distribution of block maxima from any underlying distribution (Extremal Types Theorem). Unifies Gumbel (ξ=0), Fréchet (ξ>0), and Weibull (ξ<0) families. The fundamental tool for quantifying tail risks.",
    constants: "μ = location, σ = scale, ξ = shape (tail index), GEV encompasses three extreme value families",
    applications:
      "Flood frequency analysis, financial tail risk, wind speed extremes, seismic hazard, insurance (catastrophe modelling)",
    beauty: 7,
    difficulty: "hard",
    tags: ["extreme value theory", "GEV distribution", "tail risk", "maxima"],
  },
  {
    rank: 280,
    name: "Pickands-Balkema-de Haan Theorem",
    equation: "P(X-u > y \\mid X > u) \\to G_{\\xi,\\sigma_u}(y) \\text{ as } u \\to x^*",
    discoverer: "Pickands / Balkema & de Haan",
    year: "1974–1975",
    field: "Extreme Value Theory",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "Exceedances above a high threshold converge to a Generalised Pareto Distribution. This peaks-over-threshold approach is more data-efficient than block maxima. Foundation of extreme risk quantification and the Expected Shortfall estimation used in Basel III banking regulations.",
    constants:
      "G_{ξ,σ} = Generalised Pareto Distribution, u = threshold, ξ = shape, σ_u = scale, x* = distribution endpoint",
    applications:
      "Operational risk (Basel III), catastrophe reinsurance, coastal flooding, extreme wind loads, systemic financial risk",
    beauty: 7,
    difficulty: "hard",
    tags: ["extreme value theory", "GPD", "peaks over threshold", "tail risk"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // HIGH-FREQUENCY TRADING & MARKET MICROSTRUCTURE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 281,
    name: "Almgren-Chriss Optimal Execution",
    equation: "\\min_{x(t)}\\left[\\int_0^T S_0\\dot{x}(t)g(\\dot{x})\\,dt + \\sigma^2\\int_0^T x^2(t)\\,dt\\right]",
    discoverer: "Almgren & Chriss",
    year: "2000",
    field: "Market Microstructure / Quantitative Finance",
    domain: "Finance & Quant",
    subDomain: "Risk Management",
    domainEmoji: "💹",
    significance:
      "Formulates the optimal execution of a large stock trade as a control problem balancing market impact (trading too fast) against price risk (trading too slow). The industry standard model for algorithmic execution used by every major investment bank and asset manager.",
    constants:
      "x(t) = shares remaining, ẋ = trading rate, g(ẋ) = market impact function, σ = volatility, T = execution horizon",
    applications:
      "Algorithmic trading, execution algorithms (TWAP, VWAP, IS), transaction cost analysis, smart order routing",
    beauty: 7,
    difficulty: "sota",
    tags: ["algorithmic trading", "optimal execution", "market impact", "HFT"],
  },
  {
    rank: 282,
    name: "Hawkes Process Intensity",
    equation: "\\lambda(t) = \\mu + \\sum_{t_i < t}\\phi(t - t_i)",
    discoverer: "Alan Hawkes",
    year: "1971",
    field: "Stochastic Processes / Finance",
    domain: "Mathematics",
    subDomain: "Probability & Statistics",
    domainEmoji: "📐",
    significance:
      "A self-exciting point process where each event increases the probability of future events. Natural model for clustering in financial order flow, earthquakes, and crime. The workhorse of high-frequency trading models and the basis of limit order book modelling.",
    constants:
      "λ(t) = intensity, μ = baseline rate, φ(t) = excitation kernel (e.g. exponential decay), t_i = past event times",
    applications:
      "High-frequency trading (order book dynamics), earthquake aftershock modelling, crime pattern analysis, social media cascades",
    beauty: 7,
    difficulty: "hard",
    tags: ["Hawkes process", "self-exciting", "point processes", "high-frequency finance"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MEDICAL IMAGING & NEUROSCIENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 283,
    name: "Bloch Equations (MRI)",
    equation: "\\frac{dM_z}{dt} = \\frac{M_0-M_z}{T_1}, \\quad \\frac{dM_{xy}}{dt} = -\\frac{M_{xy}}{T_2}",
    discoverer: "Felix Bloch",
    year: "1946",
    field: "Nuclear Magnetic Resonance / Medical Imaging",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes the relaxation of nuclear magnetisation after an RF pulse in an NMR experiment. T₁ (longitudinal) and T₂ (transverse) relaxation times encode tissue type in MRI. Bloch shared the 1952 Nobel Prize for NMR. Every MRI scan is built on solving these equations.",
    constants:
      "M_z = longitudinal magnetisation, M_xy = transverse magnetisation, T₁ = spin-lattice relaxation, T₂ = spin-spin relaxation, M₀ = equilibrium magnetisation",
    applications:
      "MRI contrast (tissue differentiation), fMRI (BOLD signal), NMR spectroscopy, qMRI, hyperpolarised MRI",
    beauty: 7,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["MRI", "NMR", "Bloch equations", "medical imaging"],
  },
  {
    rank: 284,
    name: "Hemodynamic Response Function (BOLD fMRI)",
    equation:
      "y(t) = \\beta\\, h(t) * s(t) + \\varepsilon, \\quad h(t) = \\frac{t^{a_1-1}e^{-t/b_1}}{b_1^{a_1}\\Gamma(a_1)} - \\frac{c\\,t^{a_2-1}e^{-t/b_2}}{b_2^{a_2}\\Gamma(a_2)}",
    discoverer: "Friston et al. / Boynton et al.",
    year: "1994",
    field: "Computational Neuroscience / Neuroimaging",
    domain: "Biology & Medicine",
    subDomain: "Neuroscience",
    domainEmoji: "🧬",
    significance:
      "The canonical haemodynamic response function h(t) models the BOLD (Blood-Oxygen-Level Dependent) signal in fMRI as a gamma-function-shaped response to neural activity. Convolved with a stimulus s(t), it predicts the measured fMRI signal. Foundation of all fMRI data analysis.",
    constants:
      "h(t) = HRF, β = activation amplitude, s(t) = stimulus function, * = convolution, a₁,a₂,b₁,b₂,c = SPM parameters",
    applications:
      "fMRI brain imaging, cognitive neuroscience, clinical neurology, brain-computer interfaces, neurofeedback",
    beauty: 6,
    difficulty: "hard",
    tags: ["fMRI", "BOLD", "neuroscience", "hemodynamic response"],
  },
  {
    rank: 285,
    name: "Cable Equation (Neuron Dendrite)",
    equation:
      "\\frac{\\partial V}{\\partial t} = \\frac{d}{4R_a C_m}\\frac{\\partial^2 V}{\\partial x^2} - \\frac{V-V_\\text{rest}}{\\tau_m}",
    discoverer: "Wilfrid Rall",
    year: "1957",
    field: "Computational Neuroscience",
    domain: "Biology & Medicine",
    subDomain: "Neuroscience",
    domainEmoji: "🧬",
    significance:
      "Describes voltage propagation along a dendritic cable — the passive spread of membrane potential in neuron dendrites. Rall's cable theory established how dendritic geometry shapes neural computation. The basis of all compartmental neuron models and multi-compartment simulations.",
    constants:
      "V = membrane potential, d = dendrite diameter, R_a = axial resistance, C_m = membrane capacitance, τ_m = membrane time constant",
    applications:
      "Neuron modelling (NEURON simulator), synaptic integration, dendritic computation, epilepsy modelling, brain-computer interfaces",
    beauty: 7,
    difficulty: "hard",
    tags: ["cable equation", "computational neuroscience", "dendrites", "membrane potential"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ENVIRONMENTAL & ATMOSPHERIC SCIENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 286,
    name: "Advection-Diffusion Equation",
    equation: "\\frac{\\partial c}{\\partial t} + \\mathbf{u}\\cdot\\nabla c = D\\nabla^2 c + R",
    discoverer: "Various (continuum mechanics)",
    year: "19th century",
    field: "Fluid Dynamics / Environmental Science",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Governs the transport of any scalar quantity (concentration, temperature, pollutant) in a flow field through advection (bulk transport) and diffusion (molecular mixing). The fundamental equation of atmospheric dispersion, ocean tracer transport, and contaminant spreading.",
    constants: "c = concentration, u = velocity field, D = diffusion coefficient, R = source/sink term, ∇ = gradient",
    applications:
      "Air pollution modelling, ocean tracer transport, nuclear plume dispersion, drug delivery, industrial mixing",
    beauty: 7,
    difficulty: "hard",
    tags: ["advection-diffusion", "transport equations", "atmospheric science", "fluid dynamics"],
  },
  {
    rank: 287,
    name: "Mie Scattering",
    equation: "Q_{\\text{sca}} = \\frac{2}{x^2}\\sum_{n=1}^\\infty (2n+1)\\left(|a_n|^2+|b_n|^2\\right)",
    discoverer: "Gustav Mie",
    year: "1908",
    field: "Electromagnetic Scattering / Atmospheric Optics",
    domain: "Physics",
    subDomain: "Electromagnetism",
    domainEmoji: "⚛️",
    significance:
      "Exact solution for electromagnetic scattering by a sphere of any size — generalising Rayleigh scattering (x ≪ 1) to all size parameters x = 2πr/λ. Governs why clouds are white (all wavelengths scattered equally), radar return from rain, and lidar atmospheric sensing.",
    constants:
      "Q_sca = scattering efficiency, x = size parameter = 2πr/λ, a_n,b_n = Mie coefficients (Legendre functions)",
    applications:
      "Cloud physics, radar meteorology, lidar, atmospheric optics, particle sizing, plasmonic nanoparticles",
    beauty: 7,
    difficulty: "hard",
    tags: ["Mie scattering", "electromagnetic scattering", "atmospheric optics", "light scattering"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // MATERIALS SCIENCE & PHASE FIELD
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 288,
    name: "Cahn-Hilliard Equation",
    equation:
      "\\frac{\\partial c}{\\partial t} = \\nabla\\cdot\\left(M\\nabla\\frac{\\delta F}{\\delta c}\\right), \\quad F = \\int\\left[f(c) + \\frac{\\kappa}{2}|\\nabla c|^2\\right]dV",
    discoverer: "Cahn & Hilliard",
    year: "1958",
    field: "Materials Science / Phase Field Theory",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Describes spinodal decomposition — how a homogeneous mixture spontaneously separates into two phases. The phase-field approach avoids tracking sharp interfaces explicitly. Foundation of computational materials science for solidification, corrosion, battery electrode evolution.",
    constants:
      "c = composition field, M = mobility, F = free energy functional, f(c) = bulk free energy, κ = gradient energy coefficient",
    applications:
      "Spinodal decomposition, solidification modelling, battery electrode microstructure, corrosion, polymer phase separation",
    beauty: 7,
    difficulty: "hard",
    tags: ["Cahn-Hilliard", "phase field", "spinodal decomposition", "materials science"],
  },
  {
    rank: 289,
    name: "Peierls-Nabarro Model (Dislocation)",
    equation:
      "\\tau_P = \\frac{2\\mu}{1-\\nu}\\exp\\!\\left(-\\frac{2\\pi w}{b}\\right), \\quad w = \\frac{b}{2\\pi}\\frac{1}{1-\\nu}",
    discoverer: "Peierls / Nabarro",
    year: "1940–1947",
    field: "Materials Science / Crystal Plasticity",
    domain: "Physics",
    subDomain: "Condensed Matter & Applied",
    domainEmoji: "⚛️",
    significance:
      "Gives the minimum stress τ_P needed to move a dislocation in a crystal — the Peierls stress. Dislocations control plastic deformation of all metals. Understanding τ_P guides the design of high-strength materials and explains the brittleness of ceramics.",
    constants: "τ_P = Peierls stress, μ = shear modulus, ν = Poisson ratio, b = Burgers vector, w = dislocation width",
    applications:
      "Mechanical properties of metals, high-strength alloy design, crystal plasticity modelling, semiconductor defects",
    beauty: 6,
    difficulty: "hard",
    tags: ["materials science", "dislocations", "crystal plasticity", "Peierls stress"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ETHICS, DECISION THEORY & SOCIAL CHOICE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 290,
    name: "Arrow's Impossibility Theorem",
    equation: "\\nexists\\text{ social choice rule satisfying: Pareto, IIA, non-dictatorship, unrestricted domain}",
    discoverer: "Kenneth Arrow",
    year: "1951",
    field: "Social Choice Theory / Economics",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "No voting system with 3+ choices can simultaneously satisfy: unanimity (Pareto), independence of irrelevant alternatives, and non-dictatorship. The most profound impossibility theorem in social science. Won Arrow the 1972 Nobel Prize and shaped the theory of voting, welfare economics, and democracy.",
    constants:
      "Social welfare function, Pareto condition, IIA = independence of irrelevant alternatives, n ≥ 3 alternatives",
    applications:
      "Voting systems design, welfare economics, AI preference aggregation, multi-objective optimisation, social choice",
    beauty: 9,
    difficulty: "hard",
    nobelPrize: true,
    tags: ["social choice", "Arrow's theorem", "voting theory", "impossibility"],
  },
  {
    rank: 291,
    name: "Expected Utility Theory",
    equation: "U(L) = \\sum_i p_i u(x_i), \\quad \\text{rational agent maximises }U",
    discoverer: "von Neumann & Morgenstern",
    year: "1944",
    field: "Decision Theory / Microeconomics",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "The axiomatic foundation of rational choice under uncertainty: a rational agent maximises the expected value of a utility function. Von Neumann and Morgenstern's theorem shows this follows from four axioms. Foundation of game theory, insurance theory, and financial economics.",
    constants:
      "U = expected utility, p_i = probabilities, x_i = outcomes, u = utility function (concave for risk aversion)",
    applications:
      "Decision analysis, insurance pricing, financial economics, game theory, AI utility functions, risk management",
    beauty: 8,
    difficulty: "hard",
    tags: ["decision theory", "expected utility", "von Neumann-Morgenstern", "rational choice"],
  },
  {
    rank: 292,
    name: "Rawls' Maximin Criterion",
    equation: "\\text{Maximise the welfare of the worst-off individual: }\\max_{x} \\min_i u_i(x)",
    discoverer: "John Rawls (formalised by Harsanyi/Arrow)",
    year: "1971",
    field: "Political Philosophy / Social Choice",
    domain: "Economics",
    subDomain: "Microeconomics",
    domainEmoji: "📊",
    significance:
      "Behind a 'veil of ignorance' (not knowing one's position), rational agents would choose to maximise the minimum welfare — a maximin criterion. The mathematical formalisation of egalitarian justice. Influences policy design, AI fairness, and social welfare functions.",
    constants: "u_i = utility of individual i, x = social allocation/policy choice, min_i = minimum over individuals",
    applications:
      "Social welfare policy, AI fairness (group-level guarantees), income redistribution, risk-averse decision making",
    beauty: 7,
    difficulty: "hard",
    tags: ["social choice", "Rawls", "maximin", "distributive justice"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // PHILOSOPHY OF MATHEMATICS — FORMAL SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 293,
    name: "Curry-Howard Correspondence",
    equation:
      "\\text{Propositions} \\leftrightarrow \\text{Types},\\quad \\text{Proofs} \\leftrightarrow \\text{Programs}",
    discoverer: "Curry / Howard / Lambek",
    year: "1934–1969",
    field: "Logic / Type Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Mathematical proofs and computer programs are the same thing — just viewed differently. A proof of a proposition corresponds to a program of the corresponding type. The deep connection underlying all proof assistants (Lean, Coq, Agda) and dependently typed programming languages.",
    constants:
      "Proposition = type, proof = term, modus ponens ↔ function application, ∀ quantifier ↔ dependent product type",
    applications:
      "Formal verification, proof assistants (Lean, Coq), dependently typed languages, compiler correctness, AI theorem proving",
    beauty: 10,
    difficulty: "sota",
    tags: ["type theory", "Curry-Howard", "formal verification", "logic", "programming languages"],
  },
  {
    rank: 294,
    name: "Lawvere's Fixed-Point Theorem",
    equation: "\\text{If }A^A\\text{ is a retract of }A^X\\text{, every }f:A\\to A\\text{ has a fixed point}",
    discoverer: "F. William Lawvere",
    year: "1969",
    field: "Category Theory / Logic",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "A categorical generalisation unifying Cantor's theorem, Gödel's incompleteness, Turing's halting problem, and Russell's paradox as instances of the same diagonal argument. Shows these fundamental impossibility results are manifestations of one categorical fixed-point phenomenon.",
    constants: "A = object in cartesian closed category, A^A = exponential (function space), retract, diagonal map",
    applications:
      "Foundations of mathematics, theoretical computer science, domain theory (denotational semantics), categorical logic",
    beauty: 10,
    difficulty: "sota",
    tags: ["category theory", "fixed-point theorem", "Lawvere", "diagonal argument"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // CODING THEORY & INFORMATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 295,
    name: "Hamming Bound (Sphere-Packing Bound)",
    equation: "M \\leq \\frac{q^n}{\\sum_{i=0}^t \\binom{n}{i}(q-1)^i}",
    discoverer: "Richard Hamming",
    year: "1950",
    field: "Coding Theory / Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "An upper bound on the number of codewords M in an error-correcting code with block length n, alphabet size q, and correction capability t. Hamming codes achieve this bound perfectly (perfect codes). Foundation of modern coding theory, enabling reliable digital communications.",
    constants:
      "M = number of codewords, n = block length, q = alphabet size, t = error correction capability, C(n,i) = binomial coefficient",
    applications:
      "Error-correcting codes (LDPC, turbo, polar), storage (RAID, QR codes), deep-space communications, 5G",
    beauty: 7,
    difficulty: "hard",
    tags: ["coding theory", "Hamming bound", "error correction", "information theory"],
  },
  {
    rank: 296,
    name: "Shannon's Noisy Channel Coding Theorem",
    equation: "R < C \\Rightarrow \\exists\\text{ code with }P_e \\to 0\\text{ as }n\\to\\infty",
    discoverer: "Claude Shannon",
    year: "1948",
    field: "Information Theory",
    domain: "Computer Science",
    subDomain: "Theory of Computation",
    domainEmoji: "💻",
    significance:
      "Any communication rate R below channel capacity C is achievable with arbitrarily small error probability using long codes. Conversely, R > C implies unavoidable errors. The deepest result in information theory — proved existence long before practical codes (turbo codes 1993, LDPC 1995) approached capacity.",
    constants: "R = code rate (bits/symbol), C = channel capacity, P_e = block error probability, n = codeword length",
    applications: "All digital communications: 5G, WiFi, satellite, deep space (Voyager), optical fibre, data storage",
    beauty: 10,
    difficulty: "sota",
    tags: ["information theory", "Shannon", "channel coding", "capacity"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // GEOMETRY — CLASSICAL & MODERN
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 297,
    name: "Descartes' Rule of Signs",
    equation: "\\text{Number of positive roots}\\leq\\text{sign changes in }p(x)\\text{ coefficient sequence}",
    discoverer: "René Descartes",
    year: "1637",
    field: "Algebra / Polynomial Theory",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "Bounds the number of positive real roots of a polynomial by the number of sign changes in its coefficients. A simple, powerful tool predating modern algebra. One of the first results in algebraic analysis of polynomials, from Descartes' foundational 1637 work.",
    constants: "Sign changes in coefficient sequence of p(x), parity with actual positive root count",
    applications: "Polynomial root finding, stability analysis (control theory), algebraic geometry, numerical methods",
    beauty: 7,
    difficulty: "easy",
    tags: ["polynomial theory", "Descartes", "sign changes", "algebra"],
  },
  {
    rank: 298,
    name: "Cauchy's Theorem (Group Theory)",
    equation: "p \\mid |G| \\Rightarrow \\exists\\, g\\in G: \\mathrm{ord}(g) = p",
    discoverer: "Augustin-Louis Cauchy",
    year: "1845",
    field: "Group Theory / Abstract Algebra",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "If a prime p divides the order of a finite group G, then G contains an element of order p. A fundamental structural theorem of group theory — the first major result relating prime divisors of |G| to subgroup structure. Precursor to Sylow's theorems.",
    constants: "G = finite group, |G| = order of G, p = prime, ord(g) = order of element g",
    applications:
      "Group theory, cryptography (group order factorisation), molecular symmetry (spectroscopy), error-correcting codes",
    beauty: 7,
    difficulty: "hard",
    tags: ["group theory", "Cauchy theorem", "abstract algebra", "prime divisors"],
  },
  {
    rank: 299,
    name: "Pick's Theorem",
    equation: "A = I + \\frac{B}{2} - 1",
    discoverer: "Georg Pick",
    year: "1899",
    field: "Combinatorial Geometry",
    domain: "Mathematics",
    subDomain: "Core Foundations",
    domainEmoji: "📐",
    significance:
      "The area of a lattice polygon equals the number of interior lattice points plus half the boundary points minus 1. Elegant, counterintuitive, and very useful. A rare formula connecting combinatorics and geometry with perfect simplicity.",
    constants: "A = polygon area, I = interior lattice points, B = boundary lattice points",
    applications: "Computational geometry, lattice problems, integer programming, tiling, crystallography",
    beauty: 8,
    difficulty: "easy",
    tags: ["combinatorial geometry", "lattice points", "Pick's theorem", "area"],
  },
  {
    rank: 300,
    name: "Banach Fixed-Point Theorem (Contraction Mapping)",
    equation: "d(Tx, Ty) \\leq k\\,d(x,y),\\;k<1 \\Rightarrow \\exists!\\text{ fixed point }x^* = Tx^*",
    discoverer: "Stefan Banach",
    year: "1922",
    field: "Functional Analysis / Metric Spaces",
    domain: "Mathematics",
    subDomain: "Pure Mathematics",
    domainEmoji: "📐",
    significance:
      "A contraction mapping on a complete metric space has a unique fixed point, approached by iteration from any starting point. One of the most practically useful theorems in analysis — guaranteeing existence and convergence simultaneously. Proves existence of solutions to ODEs, PDEs, and integral equations.",
    constants:
      "T = contraction mapping, k < 1 = Lipschitz constant, d = metric, x* = unique fixed point, (X,d) = complete metric space",
    applications:
      "ODEs (Picard-Lindelöf theorem), PDEs, iterative numerical methods, Newton's method convergence, computer graphics (fractals via IFS)",
    beauty: 9,
    difficulty: "hard",
    tags: ["fixed-point theorem", "Banach", "functional analysis", "contraction mapping"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PREDICTION MARKETS & MARKET MICROSTRUCTURE
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 301,
    name: "Kelly Criterion",
    equation: "f^* = \\frac{p(b+1) - 1}{b} = p - \\frac{q}{b}",
    discoverer: "John L. Kelly Jr.",
    year: "1956",
    field: "Information Theory / Betting",
    domain: "Finance & Quant",
    subDomain: "Prediction Markets",
    domainEmoji: "📈",
    significance:
      "The Kelly criterion maximizes the expected geometric growth rate of wealth. It determines the optimal fraction of bankroll to wager given edge and odds. Derived from Shannon's information theory — the connection between gambling and communication channels.",
    constants:
      "f* = optimal fraction of bankroll, p = probability of winning, q = 1−p = probability of losing, b = net odds (payout per $1 wagered)",
    applications:
      "Sports betting, prediction markets (Kalshi, Polymarket), hedge fund position sizing, blackjack card counting (Ed Thorp), venture capital allocation",
    beauty: 9,
    difficulty: "hard",
    tags: ["Kelly", "bet sizing", "information theory", "prediction markets", "bankroll management"],
  },
  {
    rank: 302,
    name: "Brier Score (Forecast Calibration)",
    equation: "\\text{BS} = \\frac{1}{N}\\sum_{i=1}^N (f_i - o_i)^2",
    discoverer: "Glenn W. Brier",
    year: "1950",
    field: "Forecast Verification",
    domain: "Finance & Quant",
    subDomain: "Prediction Markets",
    domainEmoji: "📈",
    significance:
      "The Brier score measures the accuracy of probabilistic predictions. It decomposes into reliability (calibration), resolution (sharpness), and uncertainty. A perfectly calibrated forecaster who says 70% should be right exactly 70% of the time.",
    constants:
      "BS ∈ [0,1], f_i = forecast probability, o_i = outcome (0 or 1), N = number of forecasts. Lower is better. BS = 0 is perfect.",
    applications:
      "Weather forecasting (NWS), prediction market scoring, election forecasting (FiveThirtyEight), clinical trial predictions, IARPA forecasting tournaments",
    beauty: 7,
    difficulty: "easy",
    tags: ["Brier", "calibration", "forecast", "prediction markets", "scoring rule"],
  },
  {
    rank: 303,
    name: "Avellaneda-Stoikov Reservation Price",
    equation: "r = s - q \\cdot \\gamma \\sigma^2 (T - t)",
    discoverer: "Marco Avellaneda & Sasha Stoikov",
    year: "2008",
    field: "Market Microstructure",
    domain: "Finance & Quant",
    subDomain: "Market Microstructure",
    domainEmoji: "📈",
    significance:
      "The A-S model provides the optimal market-making strategy under inventory risk. The reservation price shades the midprice based on inventory, risk aversion, volatility, and time to expiry. Foundation of modern electronic market making.",
    constants:
      "r = reservation price, s = midprice, q = inventory (signed), γ = risk aversion, σ² = forecast variance, T−t = time to settlement",
    applications:
      "HFT equity market making, crypto AMMs, prediction market making (Kalshi weather bins), optimal quoting algorithms",
    beauty: 8,
    difficulty: "hard",
    tags: ["Avellaneda-Stoikov", "market making", "inventory risk", "reservation price", "prediction markets"],
  },
  {
    rank: 304,
    name: "Avellaneda-Stoikov Optimal Spread",
    equation: "\\delta = \\gamma\\sigma^2(T-t) + \\frac{2}{\\gamma}\\ln\\!\\left(1 + \\frac{\\gamma}{\\kappa}\\right)",
    discoverer: "Marco Avellaneda & Sasha Stoikov",
    year: "2008",
    field: "Market Microstructure",
    domain: "Finance & Quant",
    subDomain: "Market Microstructure",
    domainEmoji: "📈",
    significance:
      "The optimal half-spread has two components: inventory risk compensation (grows near expiry) and pure liquidity profit (survives even when risk aversion → 0). κ is the order arrival rate — high κ means tight spreads are sustainable.",
    constants:
      "δ = optimal half-spread, γ = risk aversion, σ² = variance, T−t = time remaining, κ = order arrival intensity",
    applications:
      "Automated market-making strategies, spread optimization in illiquid markets, prediction market quoting, crypto DEX liquidity provision",
    beauty: 8,
    difficulty: "sota",
    tags: ["Avellaneda-Stoikov", "optimal spread", "market making", "liquidity", "order arrival"],
  },
  {
    rank: 305,
    name: "LMSR Cost Function (Hanson)",
    equation: "C(\\mathbf{q}) = b \\cdot \\ln\\!\\left(\\sum_{i=1}^n e^{q_i/b}\\right)",
    discoverer: "Robin Hanson",
    year: "2003",
    field: "Prediction Market Design",
    domain: "Finance & Quant",
    subDomain: "Prediction Markets",
    domainEmoji: "📈",
    significance:
      "The Logarithmic Market Scoring Rule provides continuous liquidity via an automated market maker with bounded worst-case loss of b·ln(n). It connects information aggregation to convex optimization and is the theoretical foundation of modern prediction markets.",
    constants:
      "C = cost function, q_i = outstanding shares of outcome i, b = liquidity parameter, n = number of outcomes. Max loss = b·ln(n)",
    applications:
      "Prediction market platforms (Augur, Polymarket), corporate forecasting, intelligence analysis (IARPA), combinatorial prediction markets",
    beauty: 9,
    difficulty: "hard",
    tags: ["LMSR", "Hanson", "market scoring rule", "prediction markets", "automated market maker"],
  },
  {
    rank: 306,
    name: "VPIN (Volume-Synchronized PIN)",
    equation: "\\text{VPIN} = \\frac{\\sum_{\\tau=1}^n |V_B^\\tau - V_S^\\tau|}{n \\cdot V}",
    discoverer: "Easley, López de Prado & O'Hara",
    year: "2012",
    field: "Market Microstructure",
    domain: "Finance & Quant",
    subDomain: "Market Microstructure",
    domainEmoji: "📈",
    significance:
      "VPIN estimates order flow toxicity in real time by measuring buy-sell imbalance in fixed-volume buckets. It spiked before the 2010 Flash Crash, demonstrating its predictive power for market stress events.",
    constants:
      "V_B^τ = buy volume in bucket τ, V_S^τ = sell volume, V = bucket volume, n = number of buckets. VPIN ∈ [0,1]; high = toxic",
    applications:
      "Flash crash prediction, market maker risk management, exchange circuit breakers, HFT toxicity detection, prediction market spread management",
    beauty: 7,
    difficulty: "hard",
    tags: ["VPIN", "order flow toxicity", "informed trading", "flash crash", "market microstructure"],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // TIBSHIRANI / STATISTICAL LEARNING
  // ─────────────────────────────────────────────────────────────────────────
  {
    rank: 307,
    name: "Elastic Net",
    equation:
      "\\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 + \\lambda_1\\|\\beta\\|_1 + \\lambda_2\\|\\beta\\|_2^2",
    discoverer: "Zou & Hastie (with Tibshirani)",
    year: "2005",
    field: "High-Dimensional Statistics / Machine Learning",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Combines L1 (sparsity) and L2 (grouping) penalties to handle correlated predictors where pure LASSO fails. When predictors come in groups (e.g. gene pathways), Elastic Net selects or drops the entire group together. Strictly generalises both LASSO (λ₂=0) and Ridge (λ₁=0).",
    constants:
      "β = regression coefficients, X = design matrix, y = response, λ₁ = L1 penalty (sparsity), λ₂ = L2 penalty (grouping)",
    applications:
      "Genomics pathway analysis, multi-collinear financial factor models, NLP with correlated n-gram features",
    beauty: 7,
    difficulty: "hard",
    tags: ["elastic net", "regularisation", "sparsity", "LASSO", "ridge", "statistics"],
  },
  {
    rank: 308,
    name: "Bias–Variance Decomposition",
    equation:
      "E[(y - \\hat{f})^2] = \\underbrace{(E[\\hat{f}] - f)^2}_{\\text{Bias}^2} + \\underbrace{E[(\\hat{f} - E[\\hat{f}])^2]}_{\\text{Variance}} + \\sigma^2",
    discoverer: "Geman, Bienenstock & Doursat / Hastie, Tibshirani & Friedman",
    year: "1992 / 2001",
    field: "Statistical Learning Theory",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "The fundamental decomposition of prediction error into three irreducible components. Every model selection decision is implicitly a bias-variance trade-off: regularisation increases bias but decreases variance, usually winning when the number of predictors exceeds samples.",
    constants:
      "f = true function, f̂ = estimated function, σ² = irreducible noise, E = expectation over training sets",
    applications:
      "Model selection, hyperparameter tuning, ensemble methods (bagging reduces variance, boosting reduces bias)",
    beauty: 9,
    difficulty: "hard",
    tags: ["bias-variance", "statistical learning", "model selection", "generalisation"],
  },
  {
    rank: 309,
    name: "SAM Statistic (Significance Analysis of Microarrays)",
    equation:
      "d_i = \\frac{\\bar{x}_{i1} - \\bar{x}_{i2}}{s_i + s_0}",
    discoverer: "Tusher, Tibshirani & Chu",
    year: "2001",
    field: "Biostatistics / Genomics",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "A modified t-statistic with a fudge factor s₀ that stabilises variance for low-expression genes. Uses permutation-based FDR estimation to identify differentially expressed genes among thousands of simultaneous tests. The standard tool for microarray and RNA-seq differential expression.",
    constants:
      "x̄ᵢ₁, x̄ᵢ₂ = group means for gene i, sᵢ = gene-specific standard error, s₀ = exchangeability factor (percentile of sᵢ distribution)",
    applications:
      "Cancer subtype discovery, drug response genomics, single-cell RNA-seq, GWAS",
    beauty: 6,
    difficulty: "sota",
    tags: ["SAM", "genomics", "multiple testing", "FDR", "microarray", "biostatistics"],
  },
  {
    rank: 310,
    name: "Conformal Prediction Coverage",
    equation:
      "P(Y_{n+1} \\in C(X_{n+1})) \\geq 1 - \\alpha",
    discoverer: "Vovk, Gammerman & Shafer / Lei, G'Sell, Rinaldo, Tibshirani & Wasserman",
    year: "2005 / 2019",
    field: "Statistical Inference / Machine Learning",
    domain: "Data Science",
    subDomain: "Statistical Methods",
    domainEmoji: "📡",
    significance:
      "Distribution-free prediction sets with exact finite-sample coverage. Wraps any black-box model (neural net, random forest, etc.) to produce prediction intervals that contain the true value with probability ≥ 1-α. Only requires exchangeability — no parametric assumptions.",
    constants:
      "C(X) = prediction set, α = miscoverage level, n = calibration set size",
    applications:
      "Medical AI uncertainty quantification, autonomous vehicles, drug dosing, financial risk bounds",
    beauty: 8,
    difficulty: "sota",
    tags: ["conformal prediction", "uncertainty quantification", "distribution-free", "coverage"],
  },
  {
    rank: 311,
    name: "Birkhoff Ergodic Theorem",
    equation: "\\lim_{N\\to\\infty} \\frac{1}{N}\\sum_{n=0}^{N-1} f(T^n x) = \\int f \\, d\\mu",
    discoverer: "George D. Birkhoff",
    year: "1931",
    field: "Dynamical Systems",
    domain: "Mathematics",
    subDomain: "Ergodic Theory",
    domainEmoji: "🌀",
    significance: "Connects long-run trajectory averages to statistical averages in measure-preserving systems.",
    constants: "f = observable, T = transformation, x = state, μ = invariant measure",
    applications: "Statistical mechanics, simulation, chaos, probability",
    beauty: 9,
    difficulty: "hard",
    tags: ["ergodic theorem", "dynamics", "measure theory", "statistical mechanics"],
  },
  {
    rank: 312,
    name: "Poincaré–Birkhoff Theorem",
    equation: "\\text{Area-preserving twist map of an annulus} \\Rightarrow \\text{at least two fixed points}",
    discoverer: "Henri Poincaré / George D. Birkhoff",
    year: "1913",
    field: "Dynamical Systems",
    domain: "Mathematics",
    subDomain: "Hamiltonian Dynamics",
    domainEmoji: "🪐",
    significance: "A foundational fixed-point result in conservative dynamics.",
    constants: "Area preservation and boundary twist conditions",
    applications: "Hamiltonian systems, celestial mechanics, symplectic geometry",
    beauty: 8,
    difficulty: "hard",
    tags: ["fixed points", "twist map", "annulus", "hamiltonian systems"],
  },
  {
    rank: 313,
    name: "Dynamic Kinetic Stability",
    equation: "\\frac{dX}{dt} = (k_r - k_d)X",
    discoverer: "Addy Pross",
    year: "2012",
    field: "Systems Chemistry",
    domain: "Chemistry",
    subDomain: "Origin of Life",
    domainEmoji: "🧪",
    significance: "Describes how replicating systems persist through driven kinetics rather than equilibrium.",
    constants: "X = replicator concentration, k_r = replication rate, k_d = degradation rate",
    applications: "Abiogenesis, systems chemistry, prebiotic evolution",
    beauty: 7,
    difficulty: "hard",
    tags: ["dynamic kinetic stability", "origin of life", "replication", "systems chemistry"],
  },
  {
    rank: 314,
    name: "Replicator Growth Equation",
    equation: "X_{t+1} = (1 + r - d)X_t",
    discoverer: "Modern replicator framework",
    year: "Contemporary",
    field: "Non-Equilibrium Chemistry",
    domain: "Chemistry",
    subDomain: "Replicating Systems",
    domainEmoji: "♻️",
    significance: "A simple persistence model for reproducing systems under growth and decay.",
    constants: "X_t = population at time t, r = growth, d = degradation",
    applications: "Chemical evolution, protocells, replication models",
    beauty: 6,
    difficulty: "hard",
    tags: ["replicator", "growth", "chemical evolution", "dissipation"],
  },
  {
    rank: 315,
    name: "Smoluchowski Diffusion Equation",
    equation: "\\frac{\partial p}{\partial t} = D \\nabla^2 p - \\nabla \\cdot (\\mu F p)",
    discoverer: "Marian Smoluchowski",
    year: "1906",
    field: "Statistical Physics",
    domain: "Physics",
    subDomain: "Brownian Motion",
    domainEmoji: "🌫️",
    significance: "Models how probability density evolves under diffusion and drift in fluctuation-driven systems.",
    constants: "p = probability density, D = diffusion coefficient, μ = mobility, F = force",
    applications: "Brownian motion, colloids, soft matter, stochastic transport",
    beauty: 8,
    difficulty: "hard",
    tags: ["smoluchowski", "diffusion", "brownian motion", "statistical physics"],
  },
  {
    rank: 316,
    name: "Einstein–Smoluchowski Relation",
    equation: "D = \\mu k_B T",
    discoverer: "Albert Einstein / Marian Smoluchowski",
    year: "1905",
    field: "Statistical Physics",
    domain: "Physics",
    subDomain: "Transport Theory",
    domainEmoji: "⚛️",
    significance: "Links diffusion to mobility and temperature, one of the classic fluctuation-dissipation relations.",
    constants: "D = diffusion coefficient, μ = mobility, k_B = Boltzmann constant, T = temperature",
    applications: "Colloids, transport theory, soft matter, biophysics",
    beauty: 9,
    difficulty: "hard",
    tags: ["diffusion", "mobility", "brownian motion", "einstein-smoluchowski"],
  },
  {
    rank: 317,
    name: "Exner Equation",
    equation: "\\frac{\partial \\eta}{\partial t} = -\\frac{1}{1-\\lambda_p} \\nabla \\cdot \\mathbf{q_s}",
    discoverer: "Felix Maria Exner",
    year: "1925",
    field: "Geomorphology",
    domain: "Earth & Space",
    subDomain: "Sediment Transport",
    domainEmoji: "🏞️",
    significance: "Expresses sediment-mass conservation in an evolving bed, making it foundational for morphodynamic modeling.",
    constants: "η = bed elevation, λ_p = bed porosity, q_s = sediment flux",
    applications: "River morphodynamics, delta evolution, erosion, channel adjustment",
    beauty: 8,
    difficulty: "hard",
    tags: ["exner equation", "sediment transport", "geomorphology", "morphodynamics"],
  },
  {
    rank: 318,
    name: "Sediment Continuity Law",
    equation: "\\frac{\partial \\eta}{\partial t} + \\frac{1}{1-\\lambda_p} \\nabla \\cdot \\mathbf{q_s} = 0",
    discoverer: "Morphodynamic continuity framework",
    year: "Modern form",
    field: "Geomorphology",
    domain: "Earth & Space",
    subDomain: "Landscape Dynamics",
    domainEmoji: "🌍",
    significance: "A conservation-law form of bed evolution used to couple transport and topographic change.",
    constants: "η = bed elevation, λ_p = porosity, q_s = sediment flux",
    applications: "Landscape evolution, river engineering, sediment-routing models",
    beauty: 7,
    difficulty: "hard",
    tags: ["sediment continuity", "bed evolution", "transport", "earth science"],
  },
];

// =============================================================================
// DERIVED EXPORTS
// =============================================================================

/** All unique domain values */
export const EQUATION_DOMAINS: Domain[] = [...new Set(EQUATIONS.map((e) => e.domain))] as Domain[];

/** All unique sub-domain values */
export const EQUATION_SUBDOMAINS: SubDomain[] = [...new Set(EQUATIONS.map((e) => e.subDomain))] as SubDomain[];

/** All unique difficulty levels */
export const EQUATION_DIFFICULTIES: Difficulty[] = ["easy", "hard", "sota"];

/** All unique tags across all equations */
export const ALL_TAGS: string[] = [...new Set(EQUATIONS.flatMap((e) => e.tags))].sort();

/** Equations that are Clay Millennium Prize Problems */
export const MILLENNIUM_PROBLEMS = EQUATIONS.filter((e) => e.millenniumProblem);

/** Equations with Nobel Prize connections */
export const NOBEL_EQUATIONS = EQUATIONS.filter((e) => e.nobelPrize);

/** Equations representing open / unsolved problems */
export const UNSOLVED_EQUATIONS = EQUATIONS.filter((e) => e.unsolved);

/** Equations with beauty rating of 10 */
export const MOST_BEAUTIFUL = EQUATIONS.filter((e) => e.beauty === 10);

/** Equations at sota (state-of-the-art / expert) difficulty */
export const SOTA_EQUATIONS = EQUATIONS.filter((e) => e.difficulty === "sota");

/**
 * Get all equations for a given domain.
 * @example getByDomain('Physics')
 */
export function getByDomain(domain: Domain): Equation[] {
  return EQUATIONS.filter((e) => e.domain === domain);
}

/**
 * Get all equations for a given sub-domain.
 * @example getBySubDomain('Quantum Mechanics')
 */
export function getBySubDomain(subDomain: SubDomain): Equation[] {
  return EQUATIONS.filter((e) => e.subDomain === subDomain);
}

/**
 * Get all equations matching a tag (case-insensitive partial match).
 * @example getByTag('quantum')
 */
export function getByTag(tag: string): Equation[] {
  const lower = tag.toLowerCase();
  return EQUATIONS.filter((e) => e.tags.some((t) => t.toLowerCase().includes(lower)));
}

/**
 * Get equations filtered by difficulty.
 * @example getByDifficulty('sota')
 */
export function getByDifficulty(difficulty: Difficulty): Equation[] {
  return EQUATIONS.filter((e) => e.difficulty === difficulty);
}

/**
 * Get equations with beauty rating at or above threshold.
 * @example getBeautyAbove(9)
 */
export function getBeautyAbove(threshold: number): Equation[] {
  return EQUATIONS.filter((e) => e.beauty >= threshold);
}

/**
 * Get a single equation by rank.
 */
export function getByRank(rank: number): Equation | undefined {
  return EQUATIONS.find((e) => e.rank === rank);
}

/**
 * Search equations by name or field (case-insensitive).
 */
export function searchEquations(query: string): Equation[] {
  const lower = query.toLowerCase();
  return EQUATIONS.filter(
    (e) =>
      e.name.toLowerCase().includes(lower) ||
      e.field.toLowerCase().includes(lower) ||
      e.significance.toLowerCase().includes(lower) ||
      e.discoverer.toLowerCase().includes(lower),
  );
}

export default EQUATIONS;
