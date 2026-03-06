import type { Question } from "../types";

export const nicolasMinorskyQuestions: Question[] = [
  {
    id: 304003,
    topic: "nicolas-minorsky",
    difficulty: "easy",
    question:
      "In PID control, the proportional term mainly responds to:",
    options: [
      "The current error between target and actual value",
      "The accumulated past error only",
      "The future predicted error only",
      "The square of the output signal",
    ],
    correctIndex: 0,
    explanation:
      "The proportional term is $K_p e(t)$, so it reacts directly to the present error. If the system is below the target, proportional action pushes harder in proportion to how far away it is.",
    realWorld:
      "A thermostat with proportional behavior increases heating more strongly when the room is much colder than the setpoint.",
    hint: "Proportional means present error right now.",
    symbolLinks: {
      "K_p": "kappa",
      "e(t)": "epsilon",
    },
    formulaLinks: ["PID controller"],
    glossaryLinks: ["pid-control", "feedback-control"],
  },
  {
    id: 304004,
    topic: "nicolas-minorsky",
    difficulty: "hard",
    question:
      "What is the main purpose of the integral term $K_i \\int e(t)\\,dt$ in a PID controller?",
    options: [
      "Eliminating steady-state error by accumulating persistent offset",
      "Amplifying measurement noise so the controller reacts faster",
      "Predicting future disturbances from the second derivative",
      "Keeping the output fixed regardless of plant dynamics",
    ],
    correctIndex: 0,
    explanation:
      "The integral term sums error over time. If a system sits slightly below the target for too long, the accumulated error grows and pushes the controller to remove that long-run offset.",
    realWorld:
      "Cruise control uses integral action to recover the exact target speed after a long uphill climb.",
    hint: "It remembers past error.",
    symbolLinks: {
      "K_i": "kappa",
      "\\\\int": "integral",
      "e(t)": "epsilon",
    },
    formulaLinks: ["PID controller"],
    glossaryLinks: ["integral-action", "steady-state-error"],
  },
  {
    id: 304005,
    topic: "nicolas-minorsky",
    difficulty: "sota",
    question:
      "Why is derivative action $K_d \\frac{de}{dt}$ often described as adding damping in modern feedback systems?",
    options: [
      "Because it opposes rapid changes in error and can reduce overshoot",
      "Because it guarantees zero noise in any measured signal",
      "Because it converts every nonlinear system into a linear one",
      "Because it removes the need for proportional and integral terms",
    ],
    correctIndex: 0,
    explanation:
      "Derivative action reacts to the rate of change of the error. When error is changing quickly, the derivative term pushes back against that rapid motion, often reducing oscillation and overshoot. In practice it must be filtered because differentiation can amplify noise.",
    realWorld:
      "In robotics and servo control, derivative action helps suppress ringing and overshoot when a motor moves quickly toward a target position.",
    hint: "Think of shock absorbers: resist fast motion.",
    symbolLinks: {
      "K_d": "kappa",
      "\\\\frac{de}{dt}": "delta",
      "e": "epsilon",
      "t": "tau",
    },
    formulaLinks: ["PID controller"],
    glossaryLinks: ["derivative-action", "damping", "control-theory"],
  },
];
