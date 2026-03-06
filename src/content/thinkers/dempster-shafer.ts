import type { Question } from "../types";

export const dempsterShaferQuestions: Question[] = [
  {
    id: 304027,
    topic: "dempster-shafer",
    difficulty: "easy",
    question:
      "Dempster–Shafer theory differs from ordinary probability mainly by allowing belief to be assigned to:",
    options: [
      "Sets of possibilities, not just single outcomes",
      "Only outcomes with equal probability",
      "Negative probabilities for unlikely events",
      "Events that have already been observed only",
    ],
    correctIndex: 0,
    explanation:
      "In Dempster–Shafer theory, belief mass can be assigned to subsets of the hypothesis space, which lets the model represent uncertainty and ignorance more flexibly than standard point-probability assignments.",
    realWorld:
      "Sensor fusion systems can use this framework when different sensors support broad hypotheses rather than one precise answer.",
    hint: "It can express uncertainty over groups of hypotheses.",
    symbolLinks: {},
    formulaLinks: ["Dempster–Shafer theory"],
    glossaryLinks: ["belief-function", "evidence-theory", "uncertainty"],
  },
  {
    id: 304028,
    topic: "dempster-shafer",
    difficulty: "hard",
    question:
      "In Dempster–Shafer theory, what is the main role of the belief and plausibility functions?",
    options: [
      "They provide lower and upper bounds on supported uncertainty",
      "They force every hypothesis to have a single exact Bayesian posterior",
      "They eliminate all conflict between evidence sources automatically",
      "They convert continuous variables into deterministic labels",
    ],
    correctIndex: 0,
    explanation:
      "Belief gives a lower bound on support committed to a proposition, while plausibility gives an upper bound based on how much support does not contradict it.",
    realWorld:
      "This is useful in decision systems where available evidence is incomplete or partially conflicting, such as diagnosis or target tracking.",
    hint: "One is conservative support; the other is possible support.",
    symbolLinks: {},
    formulaLinks: ["Belief function", "Plausibility function"],
    glossaryLinks: ["belief-function", "plausibility", "sensor-fusion"],
  },
  {
    id: 304029,
    topic: "dempster-shafer",
    difficulty: "sota",
    question:
      "Why is Dempster’s rule of combination both useful and controversial in modern uncertainty modeling?",
    options: [
      "It fuses multiple evidence sources, but can behave unintuitively when conflict is very high",
      "It is the unique exact solution to every probabilistic inference problem",
      "It only works for continuous Gaussian observations",
      "It guarantees that conflicting evidence disappears without normalization",
    ],
    correctIndex: 0,
    explanation:
      "Dempster’s rule combines evidence from independent sources, but when the sources strongly conflict, the normalization step can produce results that many practitioners find counterintuitive.",
    realWorld:
      "This matters in autonomous systems and multi-sensor reasoning, where disagreement between sensors is common and must be handled carefully.",
    hint: "The tricky part is combining conflicting evidence.",
    symbolLinks: {},
    formulaLinks: ["Dempster's rule of combination"],
    glossaryLinks: ["evidence-combination", "uncertainty-modeling", "sensor-fusion"],
  },
];
