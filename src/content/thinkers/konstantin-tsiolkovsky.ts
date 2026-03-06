import type { Question } from "../types";

export const konstantinTsiolkovskyQuestions: Question[] = [
  {
    id: 304009,
    topic: "konstantin-tsiolkovsky",
    difficulty: "easy",
    question:
      "The Tsiolkovsky rocket equation states that achievable $\\Delta v$ depends primarily on:",
    options: [
      "Exhaust velocity and the logarithm of the mass ratio",
      "Only the total thrust produced at liftoff",
      "Only the payload mass and launch angle",
      "The square of the fuel volume",
    ],
    correctIndex: 0,
    explanation:
      "The rocket equation is $\\Delta v = v_e \\ln\\!\\left(\\frac{m_0}{m_f}\\right)$. It shows that performance depends on exhaust velocity $v_e$ and the mass ratio between initial and final mass.",
    realWorld:
      "This is why rocket staging and efficient engines matter so much: orbit requires enormous total $\\Delta v$.",
    hint: "Look for the log of the mass ratio.",
    symbolLinks: {
      "\\\\Delta v": "delta",
      "v_e": "nu",
      "\\\\ln": "lambda",
      "m_0": "mu",
      "m_f": "mu",
    },
    formulaLinks: ["Tsiolkovsky rocket equation"],
    glossaryLinks: ["delta-v", "specific-impulse", "rocket-equation"],
  },
  {
    id: 304010,
    topic: "konstantin-tsiolkovsky",
    difficulty: "hard",
    question:
      "Why does the rocket equation make single-stage orbital launch so difficult?",
    options: [
      "Because $\\Delta v$ grows only logarithmically with mass ratio, so large performance gains require huge propellant fractions",
      "Because thrust decreases quadratically with altitude in all engines",
      "Because payload mass always increases exhaust velocity",
      "Because gravity disappears only after staging",
    ],
    correctIndex: 0,
    explanation:
      "Since $\\Delta v$ depends on $\\ln(m_0/m_f)$, adding more propellant has diminishing returns. To get the large $\\Delta v$ needed for orbit, a single-stage rocket often needs an extreme mass ratio unless its engines are exceptionally efficient.",
    realWorld:
      "This is the core reason multistage launch vehicles dominate practical spaceflight.",
    hint: "The logarithm is the hard part.",
    symbolLinks: {
      "\\\\Delta v": "delta",
      "\\\\ln": "lambda",
      "m_0": "mu",
      "m_f": "mu",
    },
    formulaLinks: ["Tsiolkovsky rocket equation"],
    glossaryLinks: ["mass-ratio", "staging", "orbital-mechanics"],
  },
  {
    id: 304011,
    topic: "konstantin-tsiolkovsky",
    difficulty: "sota",
    question:
      "In modern propulsion analysis, increasing specific impulse $I_{sp}$ helps in essentially the same way as increasing which quantity in the Tsiolkovsky equation?",
    options: [
      "Effective exhaust velocity $v_e$",
      "Payload mass fraction directly",
      "Aerodynamic drag coefficient",
      "Structural dry mass alone",
    ],
    correctIndex: 0,
    explanation:
      "Specific impulse and effective exhaust velocity are closely related by $v_e \\approx g_0 I_{sp}$. A higher $I_{sp}$ means propellant is used more efficiently, improving achievable $\\Delta v$ for a given mass ratio.",
    realWorld:
      "Electric propulsion systems can achieve very high $I_{sp}$, which is excellent for deep-space missions even though their thrust is too low for launch from Earth.",
    hint: "It is the efficiency-like propulsion metric.",
    symbolLinks: {
      "I_{sp}": "iota",
      "v_e": "nu",
      "g_0": "gamma",
    },
    formulaLinks: ["Tsiolkovsky rocket equation"],
    glossaryLinks: ["specific-impulse", "electric-propulsion", "delta-v"],
  },
];
