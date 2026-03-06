import type { Question } from "../types";

export const weberFechnerQuestions: Question[] = [
  {
    id: 304024,
    topic: "weber-fechner",
    difficulty: "easy",
    question:
      "The Weber–Fechner idea in psychophysics says perceived intensity tends to grow roughly like:",
    options: [
      "The logarithm of physical stimulus intensity",
      "The square of physical stimulus intensity",
      "A perfectly linear function of stimulus intensity at all scales",
      "A random walk independent of the stimulus",
    ],
    correctIndex: 0,
    explanation:
      "Fechner proposed that subjective sensation grows approximately as the logarithm of stimulus intensity, building on Weber’s law about just-noticeable differences.",
    realWorld:
      "This helps explain why loudness, brightness, and weight perception often do not scale linearly with the underlying physical signal.",
    hint: "Perception compresses large physical ranges.",
    symbolLinks: {
      "\\\\log": "lambda",
    },
    formulaLinks: ["Weber–Fechner law"],
    glossaryLinks: ["psychophysics", "logarithmic-scale", "perception"],
  },
  {
    id: 304025,
    topic: "weber-fechner",
    difficulty: "hard",
    question:
      "Weber’s law says that the just-noticeable difference $\\Delta I$ is approximately proportional to:",
    options: [
      "The baseline stimulus intensity $I$",
      "The square root of the stimulus intensity",
      "A universal constant independent of $I$",
      "The inverse of the stimulus intensity",
    ],
    correctIndex: 0,
    explanation:
      "Weber’s law is often written as $\\frac{\\Delta I}{I} \\approx k$, meaning the smallest noticeable change scales with the original intensity.",
    realWorld:
      "A person can notice a small increase in a light bulb’s brightness more easily in a dim room than under very bright illumination.",
    hint: "It is about relative change, not absolute change.",
    symbolLinks: {
      "\\\\Delta I": "delta",
      "I": "iota",
      "k": "kappa",
    },
    formulaLinks: ["Weber's law"],
    glossaryLinks: ["just-noticeable-difference", "psychophysics", "relative-change"],
  },
  {
    id: 304026,
    topic: "weber-fechner",
    difficulty: "sota",
    question:
      "Why is Weber–Fechner-style scaling still relevant in modern signal processing and human-centered design?",
    options: [
      "Because systems often need to match human perception, which is more sensitive to relative than absolute changes",
      "Because it proves all sensory systems are exactly logarithmic without exception",
      "Because it removes the need for calibration in measurement systems",
      "Because it implies raw sensor values can always replace perceptual models",
    ],
    correctIndex: 0,
    explanation:
      "Modern audio, imaging, and interface design frequently use perceptual scaling because humans respond strongly to relative differences and compressed ranges rather than raw linear magnitudes.",
    realWorld:
      "Examples include decibels in audio, exposure controls in imaging, and perceptual compression in user interface sliders.",
    hint: "Design often targets what users feel, not just what sensors measure.",
    symbolLinks: {},
    formulaLinks: ["Weber–Fechner law", "Decibel scale"],
    glossaryLinks: ["human-centered-design", "signal-processing", "perceptual-scaling"],
  },
];
