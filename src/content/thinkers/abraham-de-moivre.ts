import type { Question } from "../types";

export const abrahamDeMoivreQuestions: Question[] = [
  {
    id: 304033,
    topic: "abraham-de-moivre",
    difficulty: "easy",
    question:
      "De Moivre’s formula states that $(\\cos \\theta + i\\sin \\theta)^n$ equals:",
    options: [
      "\\cos(n\\theta) + i\\sin(n\\theta)",
      "n\\cos(\\theta) + in\\sin(\\theta)",
      "\\cos(\\theta^n) + i\\sin(\\theta^n)",
      "e^{in} (\\cos \\theta + i\\sin \\theta)",
    ],
    correctIndex: 0,
    explanation:
      "De Moivre’s formula is $(\\cos \\theta + i\\sin \\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ for integer $n$. It is a central bridge between trigonometry and complex numbers.",
    realWorld:
      "This formula is used to compute powers and roots of complex numbers in signal processing, control, and electrical engineering.",
    hint: "The angle gets multiplied by $n$.",
    symbolLinks: {
      "\\\\cos": "cosine",
      "\\\\sin": "sine",
      "\\\\theta": "theta",
      "i": "iota",
      "n": "eta",
    },
    formulaLinks: ["De Moivre's formula"],
    glossaryLinks: ["complex-numbers", "trigonometry", "polar-form"],
  },
  {
    id: 304034,
    topic: "abraham-de-moivre",
    difficulty: "hard",
    question:
      "Which probability distribution is De Moivre especially associated with through his early approximation work?",
    options: [
      "The binomial distribution via a normal approximation",
      "The Cauchy distribution via contour integration",
      "The Poisson distribution via rare-event limits",
      "The exponential distribution via waiting-time models",
    ],
    correctIndex: 0,
    explanation:
      "De Moivre studied the binomial distribution and derived an early normal approximation to it, an important step toward the later De Moivre–Laplace theorem.",
    realWorld:
      "This approximation is one of the historical roots of why the normal distribution appears so often in statistics and data analysis.",
    hint: "Think coin flips becoming bell-shaped.",
    symbolLinks: {},
    formulaLinks: ["De Moivre–Laplace theorem"],
    glossaryLinks: ["binomial-distribution", "normal-approximation", "probability"],
  },
  {
    id: 304035,
    topic: "abraham-de-moivre",
    difficulty: "sota",
    question:
      "Why is De Moivre’s formula still conceptually important in modern Fourier analysis and signal processing?",
    options: [
      "Because it links rotations in the complex plane to oscillatory basis functions",
      "Because it proves every signal is periodic",
      "Because it eliminates the need for complex exponentials in transforms",
      "Because it converts any nonlinear filter into a linear one",
    ],
    correctIndex: 0,
    explanation:
      "Complex exponentials and trigonometric oscillations are two views of the same structure. De Moivre’s formula helps explain why multiplying phases corresponds to rotating angles, which is foundational in Fourier methods.",
    realWorld:
      "Digital communications, spectral estimation, and FFT-based algorithms all rely on this complex-oscillatory viewpoint.",
    hint: "Think rotations and waves.",
    symbolLinks: {
      "\\\\theta": "theta",
      "i": "iota",
    },
    formulaLinks: ["De Moivre's formula", "Fourier transform"],
    glossaryLinks: ["signal-processing", "complex-exponential", "fourier-analysis"],
  },
];
