import type { Question } from "../types";

export const zieglerNicholsQuestions: Question[] = [
  {
    id: 304006,
    topic: "ziegler-nichols",
    difficulty: "easy",
    question:
      "In the classic Ziegler–Nichols closed-loop tuning method, you increase proportional gain until the system reaches:",
    options: [
      "Sustained oscillations at the ultimate gain",
      "Zero steady-state error with no oscillation",
      "A critically damped response by inspection",
      "Minimum energy consumption at the actuator",
    ],
    correctIndex: 0,
    explanation:
      "The closed-loop Ziegler–Nichols method raises proportional gain until the loop exhibits sustained oscillations. That gain is the ultimate gain $K_u$, and the oscillation period is the ultimate period $P_u$.",
    realWorld:
      "Industrial control engineers used this method to tune boilers, flow loops, and temperature systems without building a full mathematical model first.",
    hint: "You are looking for the edge of stability.",
    symbolLinks: {
      "K_u": "kappa",
      "P_u": "pi",
    },
    formulaLinks: ["Ziegler–Nichols tuning"],
    glossaryLinks: ["pid-control", "ultimate-gain"],
  },
  {
    id: 304007,
    topic: "ziegler-nichols",
    difficulty: "hard",
    question:
      "Why do Ziegler–Nichols tuning rules often produce relatively aggressive controller settings on real plants?",
    options: [
      "They aim for a fast response with limited robustness margin",
      "They are derived from exact nonlinear optimal control",
      "They always remove derivative action completely",
      "They assume zero delay and infinite actuator bandwidth in every case",
    ],
    correctIndex: 0,
    explanation:
      "Ziegler–Nichols rules are heuristic formulas designed to get a quick, responsive loop, often with noticeable overshoot. That speed can come at the cost of robustness, especially when the plant has delay, noise, or unmodeled dynamics.",
    realWorld:
      "A temperature loop tuned too aggressively may oscillate around the setpoint, which is fine for a demo but frustrating in production.",
    hint: "Fast response and robustness usually trade off.",
    symbolLinks: {},
    formulaLinks: ["Ziegler–Nichols tuning"],
    glossaryLinks: ["robustness", "phase-margin", "control-theory"],
  },
  {
    id: 304008,
    topic: "ziegler-nichols",
    difficulty: "sota",
    question:
      "In modern control practice, what is the main criticism of relying only on Ziegler–Nichols tuning for high-performance systems?",
    options: [
      "It may ignore uncertainty, constraints, and noise that modern robust methods model explicitly",
      "It cannot be used on linear systems",
      "It requires solving the Hamilton–Jacobi–Bellman equation exactly",
      "It only works if the controller is implemented in analog hardware",
    ],
    correctIndex: 0,
    explanation:
      "Modern control design often cares about uncertainty, actuator saturation, sensor noise, and safety margins. Ziegler–Nichols is quick and useful, but it is heuristic rather than explicitly robust or constraint-aware like MPC or modern loop-shaping methods.",
    realWorld:
      "For autonomous vehicles, drones, and precision robotics, engineers usually go beyond hand-tuned PID heuristics and use model-based or robust design workflows.",
    hint: "Think beyond speed: safety margins and constraints matter too.",
    symbolLinks: {},
    formulaLinks: ["Ziegler–Nichols tuning", "Model predictive control"],
    glossaryLinks: ["robust-control", "model-predictive-control", "control-theory"],
  },
];
