import type { Question } from "../types";

export const archimedesOfSyracuseQuestions: Question[] = [
  {
    id: 11101,
    topic: "archimedes",
    difficulty: "easy",
    question: "Archimedes' principle states that a submerged object experiences an upward buoyant force equal to:",
    options: [
      "The weight of the fluid displaced by the object",
      "The weight of the object itself",
      "The pressure at the object's centroid times its volume",
      "The difference between the object's weight in air and water",
    ],
    correctIndex: 0,
    explanation:
      "The buoyant force equals ρ_fluid × V_displaced × g — the weight of displaced fluid. This allows objects denser than water to float if they displace enough fluid (e.g., steel ships).",
    realWorld:
      "Submarine depth control, hydrometer density measurements, and floatation engineering all rest on Archimedes' principle.",
    hint: "Eureka! The bath water that overflows equals the buoyant force.",
  },
  {
    id: 11102,
    topic: "archimedes",
    difficulty: "easy",
    question:
      "Archimedes approximated $\\pi$ by inscribing and circumscribing regular polygons around a circle. His final bound was:",
    options: [
      "$3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$",
      "$3.14 < \\pi < 3.15$",
      "$\\frac{22}{7} < \\pi < \\frac{355}{113}$",
      "$3 < \\pi < 3\\frac{1}{6}$",
    ],
    correctIndex: 0,
    explanation:
      "Using 96-sided polygons, Archimedes bounded π between 223/71 ≈ 3.1408 and 22/7 ≈ 3.1429. This iterative polygon method is essentially numerical integration by limit approximation.",
    realWorld:
      "The polygon-doubling method is a geometric analog of Richardson extrapolation used in modern numerical analysis to improve approximation accuracy.",
    hint: "As polygon sides double, the perimeter converges to 2πr from inside and outside.",
  },
  {
    id: 11103,
    topic: "archimedes",
    difficulty: "easy",
    question: 'The "Method of Exhaustion" that Archimedes used to find areas and volumes is the precursor to:',
    options: [
      "Integral calculus — computing areas as limits of sums of infinitesimal regions",
      "Differential calculus — computing rates of change at a point",
      "Linear algebra — decomposing shapes into orthogonal components",
      "Number theory — counting lattice points inside geometric regions",
    ],
    correctIndex: 0,
    explanation:
      "Archimedes exhausted the area of parabolic segments by filling them with triangles, summing a geometric series. This is mathematically equivalent to Riemann integration — 1800 years before Newton and Leibniz.",
    realWorld:
      "The Archimedes Palimpsest (rediscovered in 1906) revealed he was using proto-integral calculus with indivisibles — arguably the first physicist-mathematician.",
    hint: "He computed the area under a parabola by summing an infinite series of triangles.",
  },
  {
    id: 11104,
    topic: "archimedes",
    difficulty: "easy",
    question: "Archimedes discovered that the surface area of a sphere of radius $r$ is:",
    options: [
      "$4\\pi r^2$ — equal to the lateral surface of its circumscribed cylinder",
      "$2\\pi r^2$ — the area of two great circles",
      "$\\frac{4}{3}\\pi r^3$ — the volume formula",
      "$\\pi r^2$ — one great circle area",
    ],
    correctIndex: 0,
    explanation:
      "Archimedes proved S = 4πr² and that the sphere's volume is 2/3 of its circumscribed cylinder's total volume. He considered this his greatest discovery and had it inscribed on his tomb.",
    realWorld:
      "Spherical surface area is fundamental in rendering (shading models), antenna design, atmospheric radiation balance, and gravitational field calculations.",
    hint: "Archimedes was so proud of this that he asked for a sphere-and-cylinder diagram on his tombstone.",
  },
  {
    id: 11105,
    topic: "archimedes",
    difficulty: "hard",
    question:
      "Archimedes computed the area of a parabolic segment by summing $\\sum_{k=1}^{\\infty} \\frac{A}{4^k}$. This evaluates to:",
    options: [
      "$\\frac{A}{3}$, giving a total area of $\\frac{4}{3}A$ for the inscribed triangle",
      "$\\frac{A}{2}$, giving a total area of $\\frac{3}{2}A$",
      "$A$, making the parabola area equal to the triangle",
      "$\\frac{2A}{3}$, giving $\\frac{5}{3}A$ total",
    ],
    correctIndex: 0,
    explanation:
      "The geometric series ∑(1/4)^k = 1/3, so the infinite sum of triangle areas = A/3. Total parabolic segment area = A + A/3 = 4A/3. This required Archimedes to sum an infinite series — a feat not rigorously justified until Cauchy.",
    realWorld:
      "Geometric series summation is the basis for analyzing recurrence relations, computing network propagation depths, and understanding gradient flow in deep networks.",
    hint: "Geometric series: ∑(1/4)^k from k=1 to ∞ = (1/4)/(1 - 1/4) = 1/3.",
  },
  {
    id: 11106,
    topic: "archimedes",
    difficulty: "hard",
    question: "The Archimedean spiral $r = a\\theta$ has arc length from $\\theta=0$ to $\\theta=\\Theta$ given by:",
    options: [
      "$\\frac{a}{2}\\left[\\Theta\\sqrt{1+\\Theta^2} + \\ln(\\Theta + \\sqrt{1+\\Theta^2})\\right]$",
      "$a\\Theta^2 / 2$",
      "$\\pi a \\Theta^2$",
      "$a(e^\\Theta - 1)$",
    ],
    correctIndex: 0,
    explanation:
      "Arc length in polar coordinates: ∫₀^Θ √(r² + (dr/dθ)²) dθ = a∫₀^Θ √(θ² + 1) dθ. This integral evaluates to the given formula via the substitution θ = sinh(t).",
    realWorld:
      "Archimedean spirals appear in vinyl record grooves, watch mainsprings, and coiling algorithms for robot cables — where equal spacing per revolution is required.",
    hint: "For polar curves: ds = √(r² + (dr/dθ)²) dθ, with r = aθ and dr/dθ = a.",
  },
  {
    id: 11107,
    topic: "archimedes",
    difficulty: "hard",
    question:
      'The "Archimedes Cattle Problem" requires finding the number of cattle satisfying a system of linear Diophantine equations. The smallest solution has approximately:',
    options: [
      "$7.76 \\times 10^{206544}$ cattle — requiring 206,545-digit numbers",
      "$10^{48}$ cattle — discovered by hand calculation",
      "$10^6$ cattle — solved using only integer arithmetic",
      "$3 \\times 10^{12}$ — solvable with ancient Greek number systems",
    ],
    correctIndex: 0,
    explanation:
      "The problem involves square and triangular number constraints making it a Pell equation. First solved computationally in 1965; the answer requires over 206,000 digits — Archimedes may have known a closed form existed without computing it.",
    realWorld:
      "The cattle problem illustrates Pell equations (x² - Dy² = 1) which are central to continued fractions, quadratic number fields, and public-key cryptography.",
    hint: "It reduces to a Pell equation — the smallest solution to x² - Dy² = 1 can be astronomically large.",
  },
  {
    id: 11108,
    topic: "archimedes",
    difficulty: "sota",
    question:
      'Archimedes\' "Method" used the law of the lever to derive integration results. Which modern concept does this correspond to?',
    options: [
      "Cavalieri's principle: solids with equal cross-sectional areas at every height have equal volumes",
      "Fubini's theorem: double integrals can be computed as iterated single integrals",
      "The divergence theorem: volume integrals equal surface integrals of flux",
      "Stokes' theorem: line integrals equal surface integrals of curl",
    ],
    correctIndex: 0,
    explanation:
      "Archimedes balanced infinitesimal slices on a lever to compare volumes — equivalent to Cavalieri's principle (1635). Both say V = ∫A(h)dh, integrating cross-sections. The Archimedes Palimpsest showed he used this 1800 years before Cavalieri.",
    realWorld:
      "MRI and CT scanners reconstruct 3D volumes by integrating 2D cross-sectional slices — Cavalieri's principle in medical imaging.",
    hint: 'He sliced shapes into infinitely thin layers and balanced them on a lever — what modern theorem does "equal cross-sections = equal volumes" correspond to?',
  },
  {
    id: 11109,
    topic: "archimedes",
    difficulty: "sota",
    question:
      'In numerical analysis, "Archimedes\' method" for π using polygon perimeters is equivalent to which modern technique?',
    options: [
      "Richardson extrapolation applied to the trapezoidal rule for computing arc length",
      "Monte Carlo estimation of π using random point sampling",
      "Newton's method applied to $\\sin(x) = 0$",
      "Fast Fourier Transform-based π computation using Ramanujan series",
    ],
    correctIndex: 0,
    explanation:
      "Doubling the polygon sides halves the error — this is the same convergence pattern as the trapezoidal rule for arc length with step size halving. Richardson extrapolation (combining estimates at different step sizes) is the modern acceleration of this method.",
    realWorld:
      "Modern π computations use AGM (arithmetic-geometric mean) iterations — O(log n) iterations for n-digit precision — which is Richardson extrapolation taken to its limit.",
    hint: "Each polygon doubling gives error ≈ C/4^n — combining two estimates eliminates the leading error term.",
  },
  {
    id: 11110,
    topic: "archimedes",
    difficulty: "sota",
    question:
      'The "Stomachion" puzzle discovered in the Archimedes Palimpsest asks: in how many ways can 14 pieces tile a 12×12 square? Modern combinatorics found:',
    options: [
      "17,152 ways (up to symmetry: 536)",
      "42 ways — equal to the Catalan number C₅",
      "12! = 479,001,600 ways by permutation",
      "2^14 = 16,384 ways by binary inclusion-exclusion",
    ],
    correctIndex: 0,
    explanation:
      "Bill Cutler's 2003 computer search found 17,152 solutions (536 up to the square's 32-fold symmetry group). Archimedes may have been doing early combinatorics — counting geometric configurations rather than just solving a puzzle.",
    realWorld:
      "The Stomachion is an early example of constraint satisfaction problems (CSP), solved today by backtracking search and constraint propagation — used in scheduling, planning, and SAT solvers.",
    hint: "It's a tiling constraint problem — modern CSP solvers use backtracking + pruning to count all valid configurations.",
  },
];
