import type { Question } from "../types";

export const richardBellmanQuestions: Question[] = [
  {
    id: 304060,
    topic: "richard-bellman",
    difficulty: "easy",
    question:
      "Dynamic programming breaks a complex optimization problem into:",
    options: [
      "Overlapping subproblems with optimal substructure",
      "Independent random guesses with no recursion",
      "Only continuous PDE constraints",
      "A single matrix inversion done once",
    ],
    correctIndex: 0,
    explanation:
      "Bellman’s key insight was that many optimization problems can be solved recursively by combining solutions to smaller subproblems. This is the core idea of dynamic programming.",
    realWorld:
      "Shortest paths, sequence alignment, inventory control, and reinforcement learning all use dynamic programming ideas.",
    hint: "Solve smaller pieces, then build the full solution.",
    symbolLinks: {},
    formulaLinks: ["Dynamic programming"],
    glossaryLinks: ["optimal-substructure", "recursion", "optimization"],
  },
  {
    id: 304061,
    topic: "richard-bellman",
    difficulty: "hard",
    question:
      "The Bellman equation for a discounted value function is commonly written as $V(s)=\\max_a \\left[r(s,a)+\\gamma \\sum_{s'} P(s'\\mid s,a)V(s')\\right]$. What does $\\gamma$ represent?",
    options: [
      "A discount factor that downweights future rewards",
      "The probability that the current state disappears",
      "The learning rate of gradient descent",
      "The entropy bonus added to every action",
    ],
    correctIndex: 0,
    explanation:
      "In discounted dynamic programming and reinforcement learning, $\\gamma \\in [0,1)$ controls how much future rewards matter relative to immediate rewards. Larger $\\gamma$ means more long-term planning.",
    realWorld:
      "Choosing $\\gamma$ affects the behavior of agents in planning, robotics, and control systems where short-term and long-term goals must be balanced.",
    hint: "It tells the agent how patient to be.",
    symbolLinks: {
      "V(s)": "nu",
      "\\\\max": "maximum",
      "a": "alpha",
      "r(s,a)": "rho",
      "\\\\gamma": "gamma",
      "\\\\sum": "sum",
      "P(s'\\mid s,a)": "pi",
    },
    formulaLinks: ["Bellman equation"],
    glossaryLinks: ["discount-factor", "value-function", "reinforcement-learning"],
  },
  {
    id: 304062,
    topic: "richard-bellman",
    difficulty: "sota",
    question:
      "Why is Bellman’s principle of optimality foundational in modern reinforcement learning?",
    options: [
      "Because it justifies bootstrapping: optimal values can be defined recursively in terms of successor values",
      "Because it proves every exploration strategy is equally efficient",
      "Because it removes the need for state representations in sequential decision problems",
      "Because it guarantees deep networks will converge for any reward function",
    ],
    correctIndex: 0,
    explanation:
      "Bellman’s principle says that an optimal policy has the property that, whatever the initial decision, the remaining decisions must be optimal for the state that results. This recursive structure underlies value iteration, Q-learning, and many actor-critic methods.",
    realWorld:
      "Game-playing agents, robotic planning systems, and resource allocation algorithms rely on Bellman-style recursive value updates.",
    hint: "Optimal futures make optimal presents computable.",
    symbolLinks: {},
    formulaLinks: ["Bellman equation", "Bellman's principle of optimality"],
    glossaryLinks: ["bootstrapping", "q-learning", "sequential-decision-making"],
  },
];
