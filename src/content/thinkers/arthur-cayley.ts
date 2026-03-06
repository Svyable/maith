import type { Question } from "../types";

export const arthurCayleyQuestions: Question[] = [
  {
    id: 304042,
    topic: "arthur-cayley",
    difficulty: "easy",
    question:
      "In graph theory, a tree is a connected graph with:",
    options: [
      "No cycles",
      "Exactly one cycle",
      "Only weighted edges",
      "An even number of vertices only",
    ],
    correctIndex: 0,
    explanation:
      "A tree is a connected graph with no cycles. Cayley is closely associated with counting labeled trees, one of the classic results in combinatorics.",
    realWorld:
      "Tree structures appear in file systems, search algorithms, network design, and hierarchical clustering.",
    hint: "A tree has branching but no loops.",
    symbolLinks: {},
    formulaLinks: ["Cayley's formula"],
    glossaryLinks: ["graph-theory", "tree", "combinatorics"],
  },
  {
    id: 304043,
    topic: "arthur-cayley",
    difficulty: "hard",
    question:
      "Cayley’s formula states that the number of labeled trees on $n$ vertices is:",
    options: [
      "$n^{n-2}$",
      "$2^n$",
      "$n!$",
      "$n(n-1)/2$",
    ],
    correctIndex: 0,
    explanation:
      "Cayley’s formula is the famous result that there are exactly $n^{n-2}$ labeled trees on $n$ vertices. It is a cornerstone theorem in enumerative combinatorics.",
    realWorld:
      "Counting spanning trees and tree-like structures matters in network reliability, phylogenetics, and combinatorial optimization.",
    hint: "It is one of the most famous closed forms in graph enumeration.",
    symbolLinks: {
      "n": "eta",
    },
    formulaLinks: ["Cayley's formula"],
    glossaryLinks: ["labeled-graph", "enumeration", "spanning-tree"],
  },
  {
    id: 304044,
    topic: "arthur-cayley",
    difficulty: "sota",
    question:
      "Why is the Cayley–Hamilton theorem important in modern linear algebra and control theory?",
    options: [
      "It lets a matrix satisfy its own characteristic polynomial, reducing higher matrix powers to lower ones",
      "It proves every matrix is diagonalizable over the reals",
      "It shows all eigenvalues are integers for square matrices",
      "It converts every nonlinear system into a matrix exponential",
    ],
    correctIndex: 0,
    explanation:
      "The Cayley–Hamilton theorem states that every square matrix satisfies its own characteristic polynomial. This allows higher powers of a matrix to be expressed in terms of lower powers, which is useful in matrix functions, state-space systems, and control.",
    realWorld:
      "In control theory, it helps simplify matrix exponentials, transfer functions, and computations involving state-transition models.",
    hint: "A matrix can be plugged into its own characteristic polynomial.",
    symbolLinks: {},
    formulaLinks: ["Cayley–Hamilton theorem"],
    glossaryLinks: ["characteristic-polynomial", "matrix-theory", "control-theory"],
  },
];
