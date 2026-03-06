import type { Question } from "../types";

export const sergeiSobolevQuestions: Question[] = [
  {
    id: 304030,
    topic: "sergei-sobolev",
    difficulty: "easy",
    question:
      "Sobolev spaces are important because they let mathematicians work with functions together with their:",
    options: [
      "Weak derivatives",
      "Prime factorizations",
      "Exact Taylor series at every point",
      "Complex roots only",
    ],
    correctIndex: 0,
    explanation:
      "Sobolev spaces generalize classical differentiability by allowing weak derivatives, which makes it possible to analyze rougher functions that still behave well enough for PDE theory.",
    realWorld:
      "They are fundamental in finite element methods and the mathematical analysis of elasticity, fluids, and diffusion equations.",
    hint: "The derivative notion is weaker than pointwise differentiability.",
    symbolLinks: {},
    formulaLinks: ["Sobolev space"],
    glossaryLinks: ["weak-derivative", "partial-differential-equations", "functional-analysis"],
  },
  {
    id: 304031,
    topic: "sergei-sobolev",
    difficulty: "hard",
    question:
      "What is the main purpose of a Sobolev norm such as $\\|u\\|_{W^{k,p}}$?",
    options: [
      "To measure both the size of a function and the size of its derivatives up to order $k$",
      "To count the number of zeros of a function exactly",
      "To guarantee that the function is analytic everywhere",
      "To convert every PDE into an algebraic equation with no approximation",
    ],
    correctIndex: 0,
    explanation:
      "A Sobolev norm combines information about a function and its weak derivatives up to a specified order, giving a natural way to quantify regularity and integrability together.",
    realWorld:
      "This is central in proving existence and stability of solutions for PDEs used in mechanics, electromagnetism, and numerical simulation.",
    hint: "It tracks both magnitude and smoothness.",
    symbolLinks: {
      "\\\\|u\\\\|_{W^{k,p}}": "norm",
      "k": "kappa",
      "p": "pi",
    },
    formulaLinks: ["Sobolev norm"],
    glossaryLinks: ["regularity", "normed-space", "pde-analysis"],
  },
  {
    id: 304032,
    topic: "sergei-sobolev",
    difficulty: "sota",
    question:
      "Why are Sobolev embedding theorems so important in modern analysis and PDE theory?",
    options: [
      "They connect integrability and derivative bounds to stronger regularity properties like continuity",
      "They prove every weak solution is automatically analytic",
      "They eliminate boundary conditions from all elliptic problems",
      "They show all norms on infinite-dimensional spaces are equivalent",
    ],
    correctIndex: 0,
    explanation:
      "Sobolev embeddings show that enough derivative control in an integral sense can imply stronger properties such as continuity or membership in better function spaces. They are a bridge between weak and classical regularity.",
    realWorld:
      "Embedding results underpin error estimates in numerical PDE solvers and regularity arguments in fluid dynamics, elasticity, and geometric analysis.",
    hint: "The theorem upgrades rough control into stronger smoothness information.",
    symbolLinks: {},
    formulaLinks: ["Sobolev embedding theorem"],
    glossaryLinks: ["functional-analysis", "regularity-theory", "finite-element-method"],
  },
];
