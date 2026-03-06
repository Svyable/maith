import type { Question } from "../types";

export const heronAlexandriaQuestions: Question[] = [
  {
    id: 304036,
    topic: "heron-alexandria",
    difficulty: "easy",
    question:
      "Heron’s formula gives the area of a triangle in terms of its side lengths $a,b,c$ and semiperimeter $s$. Which expression is correct?",
    options: [
      "$\\sqrt{s(s-a)(s-b)(s-c)}$",
      "$\\frac{1}{2}abc$",
      "$a+b+c-s$",
      "$\\sqrt{a^2+b^2+c^2}$",
    ],
    correctIndex: 0,
    explanation:
      "Heron’s formula states that the area of a triangle is $\\sqrt{s(s-a)(s-b)(s-c)}$, where $s=\\frac{a+b+c}{2}$ is the semiperimeter.",
    realWorld:
      "It lets engineers and surveyors compute area from side lengths alone, even when altitude is not directly known.",
    hint: "It uses semiperimeter and four factors under a square root.",
    symbolLinks: {
      "\\\\sqrt{}": "square-root",
      "s": "sigma",
      "a": "alpha",
      "b": "beta",
      "c": "gamma",
    },
    formulaLinks: ["Heron's formula"],
    glossaryLinks: ["triangle-area", "geometry", "semiperimeter"],
  },
  {
    id: 304037,
    topic: "heron-alexandria",
    difficulty: "hard",
    question:
      "In Heron’s formula, what is the semiperimeter $s$?",
    options: [
      "$\\frac{a+b+c}{2}$",
      "$a+b+c$",
      "$\\frac{ab+bc+ca}{2}$",
      "$\\sqrt{ab+bc+ca}$",
    ],
    correctIndex: 0,
    explanation:
      "The semiperimeter is half the perimeter of the triangle, so $s=\\frac{a+b+c}{2}$. It is the key intermediate quantity in Heron’s formula.",
    realWorld:
      "This quantity appears in geometry problems, area formulas, and some optimization setups involving polygons and meshes.",
    hint: "Half the perimeter.",
    symbolLinks: {
      "s": "sigma",
      "a": "alpha",
      "b": "beta",
      "c": "gamma",
    },
    formulaLinks: ["Heron's formula"],
    glossaryLinks: ["semiperimeter", "euclidean-geometry"],
  },
  {
    id: 304038,
    topic: "heron-alexandria",
    difficulty: "sota",
    question:
      "Why is Heron’s method for square roots historically significant in numerical analysis?",
    options: [
      "It is an early iterative algorithm converging to $\\sqrt{x}$ by repeated refinement",
      "It is the first exact symbolic solution of all polynomial equations",
      "It computes square roots by counting lattice points in a circle",
      "It guarantees a finite-step solution for every irrational number",
    ],
    correctIndex: 0,
    explanation:
      "Heron’s method updates an estimate by averaging it with $x$ divided by that estimate. This is essentially the same as the Newton method for solving $y^2-x=0$.",
    realWorld:
      "Modern numerical computing still uses iterative refinement ideas of this kind in root-finding, optimization, and scientific simulation.",
    hint: "Think repeated approximation, not one-shot formula.",
    symbolLinks: {
      "\\\\sqrt{x}": "square-root",
      "x": "chi",
    },
    formulaLinks: ["Heron's method", "Newton's method"],
    glossaryLinks: ["numerical-analysis", "iterative-method", "root-finding"],
  },
];
