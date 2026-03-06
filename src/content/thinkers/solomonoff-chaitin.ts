import type { Question } from "../types";

export const solomonoffChaitinQuestions: Question[] = [
  {
    id: 304018,
    topic: "solomonoff-chaitin",
    difficulty: "easy",
    question:
      "In algorithmic information theory, a string is considered simple if it has:",
    options: [
      "A short program that generates it",
      "Many different encodings of equal length",
      "High Shannon entropy under every distribution",
      "A large number of distinct prime factors",
    ],
    correctIndex: 0,
    explanation:
      "Kolmogorov complexity measures the length of the shortest program that produces a string. A string is simple if it can be described concisely.",
    realWorld:
      "Compression software exploits the same idea: highly regular data can be represented with shorter descriptions than random-looking data.",
    hint: "Simple means compressible.",
    symbolLinks: {},
    formulaLinks: ["Kolmogorov complexity"],
    glossaryLinks: ["algorithmic-information-theory", "compression", "kolmogorov-complexity"],
  },
  {
    id: 304019,
    topic: "solomonoff-chaitin",
    difficulty: "hard",
    question:
      "What is the key intuition behind Solomonoff induction?",
    options: [
      "Prefer hypotheses that generate the data with shorter descriptions",
      "Always choose the hypothesis with the most parameters",
      "Estimate truth by maximizing training accuracy only",
      "Reject any model that contains randomness",
    ],
    correctIndex: 0,
    explanation:
      "Solomonoff induction combines Bayesian reasoning with algorithmic simplicity: hypotheses with shorter generative descriptions receive higher prior weight.",
    realWorld:
      "The idea influences modern machine learning intuitions about simplicity, inductive bias, and minimum description length.",
    hint: "It blends prediction with Occam’s razor.",
    symbolLinks: {},
    formulaLinks: ["Solomonoff induction"],
    glossaryLinks: ["induction", "occams-razor", "minimum-description-length"],
  },
  {
    id: 304020,
    topic: "solomonoff-chaitin",
    difficulty: "sota",
    question:
      "Why is Chaitin’s constant $\\Omega$ important in computability theory?",
    options: [
      "It encodes halting information in its bits and is algorithmically random",
      "It gives a closed-form formula for the runtime of every Turing machine",
      "It proves that all undecidable problems become decidable with compression",
      "It is the exact entropy of the universal prior for any dataset",
    ],
    correctIndex: 0,
    explanation:
      "$\\Omega$ is the halting probability of a universal prefix-free Turing machine. Its bits are algorithmically random, and knowing enough of them would reveal answers to halting problems for programs up to a given size.",
    realWorld:
      "Chaitin’s work sharpened our understanding of the hard limits of formal systems, proof, and what can be computed from finite descriptions.",
    hint: "Its digits hide halting answers.",
    symbolLinks: {
      "\\\\Omega": "omega",
    },
    formulaLinks: ["Chaitin's constant", "Halting problem"],
    glossaryLinks: ["computability", "algorithmic-randomness", "halting-problem"],
  },
];
