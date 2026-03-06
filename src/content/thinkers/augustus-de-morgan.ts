import type { Question } from "../types";

export const augustusDeMorganQuestions: Question[] = [
  {
    id: 306000,
    topic: "augustus-de-morgan",
    difficulty: "easy",
    question:
      "De Morgan’s law says the negation of a conjunction $\\neg(A \\wedge B)$ is equivalent to:",
    options: [
      "$\\neg A \\vee \\neg B$",
      "$\\neg A \\wedge \\neg B$",
      "$A \\vee B$",
      "$A \\wedge B$",
    ],
    correctIndex: 0,
    explanation:
      "De Morgan’s law transforms a negated AND into an OR of negations: $\\neg(A \\wedge B)=\\neg A \\vee \\neg B$. Intuitively, “not both true” means at least one of them must be false.",
    realWorld:
      "This rule is used constantly in digital logic and programming when simplifying boolean conditions such as negated if-statements.",
    hint: "“NOT (A AND B)” becomes “(NOT A) OR (NOT B)”.",
    symbolLinks: {
      "\\\\neg": "not",
      "\\\\wedge": "wedge",
      "\\\\vee": "vee",
      A: "alpha",
      B: "beta",
    },
    formulaLinks: ["De Morgan's laws"],
    glossaryLinks: ["logic", "boolean-algebra"],
  },
  {
    id: 306001,
    topic: "augustus-de-morgan",
    difficulty: "hard",
    question:
      "If a binary relation $R$ on a set is transitive, which statement must hold for all $a,b,c$?",
    options: [
      "If $aRb$ and $bRc$, then $aRc$",
      "If $aRb$, then $bRa$",
      "For every $a$, we must have $aRa$",
      "If $aRb$ and $aRc$, then $bRc$",
    ],
    correctIndex: 0,
    explanation:
      "Transitivity means that a two-step relation collapses into a one-step relation: $aRb \\wedge bRc \\Rightarrow aRc$. De Morgan’s work helped formalize relations and their logical structure.",
    realWorld:
      "In graph theory and database reachability, transitivity captures the idea that if one node reaches a second and the second reaches a third, then the first reaches the third.",
    hint: "Think: a chain of two links implies a direct link.",
    symbolLinks: {
      R: "rho",
      a: "alpha",
      b: "beta",
      c: "gamma",
      "\\\\wedge": "wedge",
      "\\\\Rightarrow": "implies",
    },
    formulaLinks: ["Transitivity"],
    glossaryLinks: ["binary-relation", "transitive-closure"],
  },
  {
    id: 306002,
    topic: "augustus-de-morgan",
    difficulty: "sota",
    question:
      "In formal verification and SAT solving, why are De Morgan’s laws especially useful when converting a formula into negation normal form (NNF)?",
    options: [
      "They push negations inward so that NOT applies only to atomic propositions",
      "They eliminate the need for conjunctions and disjunctions entirely",
      "They guarantee that every formula becomes a Horn clause",
      "They turn every satisfiable formula into an equivalent tautology",
    ],
    correctIndex: 0,
    explanation:
      "Negation normal form requires negations to appear only directly in front of atoms. De Morgan’s laws are the key rewrite rules that move $\\neg$ inward across conjunctions and disjunctions, e.g. $\\neg(A \\wedge B) \\equiv \\neg A \\vee \\neg B$ and $\\neg(A \\vee B) \\equiv \\neg A \\wedge \\neg B$.",
    realWorld:
      "Modern theorem provers, compilers, and verification systems use these rewrites before CNF conversion, model checking, and symbolic reasoning.",
    hint: "NNF wants negation at the leaves, not wrapped around larger expressions.",
    symbolLinks: {
      "\\\\neg": "not",
      "\\\\wedge": "wedge",
      "\\\\vee": "vee",
      A: "alpha",
      B: "beta",
    },
    formulaLinks: ["De Morgan's laws", "Negation normal form"],
    glossaryLinks: ["formal-verification", "sat-solving", "propositional-logic"],
  },
];
