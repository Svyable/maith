import type { Question } from "../types";

export const georgeZipfQuestions: Question[] = [
  {
    id: 304021,
    topic: "george-zipf",
    difficulty: "easy",
    question:
      "Zipf’s law says that in many datasets, the frequency of an item is approximately:",
    options: [
      "Inversely proportional to its rank",
      "Equal to the square of its rank",
      "Independent of rank",
      "Exponential in its rank",
    ],
    correctIndex: 0,
    explanation:
      "Zipf’s law is often written as $f(r) \\propto 1/r$, where $r$ is rank. The highest-ranked item appears most often, the second-ranked item appears about half as often, and so on.",
    realWorld:
      "Word frequencies in natural language often roughly follow Zipf’s law, with a few very common words and many rare ones.",
    hint: "Rank 2 is about half of rank 1.",
    symbolLinks: {
      "f": "phi",
      "r": "rho",
      "\\\\propto": "proportional",
    },
    formulaLinks: ["Zipf's law"],
    glossaryLinks: ["power-law", "rank-frequency", "natural-language-processing"],
  },
  {
    id: 304022,
    topic: "george-zipf",
    difficulty: "hard",
    question:
      "Why is Zipf’s law considered a heavy-tailed pattern?",
    options: [
      "Because many low-rank items are common, but there is also a long tail of rare items",
      "Because every item occurs with almost exactly the same frequency",
      "Because the distribution has a hard cutoff after a fixed rank",
      "Because frequencies oscillate periodically with rank",
    ],
    correctIndex: 0,
    explanation:
      "A heavy-tailed distribution has substantial mass far into the tail. Zipf-like systems have a few dominant items and a very long tail of infrequent ones, which is typical in language, city sizes, and web traffic.",
    realWorld:
      "Search queries, social media attention, and online content popularity often show this kind of long-tail behavior.",
    hint: "A few items dominate, but many rare items still matter.",
    symbolLinks: {},
    formulaLinks: ["Zipf's law", "Power law"],
    glossaryLinks: ["heavy-tail", "long-tail", "power-law"],
  },
  {
    id: 304023,
    topic: "george-zipf",
    difficulty: "sota",
    question:
      "Why does Zipf-like behavior matter in modern language modeling and information retrieval?",
    options: [
      "Because rare tokens are numerous and strongly affect coverage, generalization, and indexing strategy",
      "Because it guarantees that all vocabularies can be truncated with no loss",
      "Because it implies language has uniform entropy across all words",
      "Because it removes the need for smoothing and subword tokenization",
    ],
    correctIndex: 0,
    explanation:
      "Zipf-like frequency structure means a model sees a few tokens constantly and a huge number rarely. That affects vocabulary design, tokenization, smoothing, retrieval systems, and long-tail generalization in NLP.",
    realWorld:
      "Subword tokenization and retrieval-aware indexing are practical responses to the fact that natural language has a vast long tail of rare forms.",
    hint: "The rare words are the challenge.",
    symbolLinks: {},
    formulaLinks: ["Zipf's law"],
    glossaryLinks: ["language-models", "tokenization", "information-retrieval"],
  },
];
