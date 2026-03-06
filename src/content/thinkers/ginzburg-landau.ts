import type { Question } from "../types";

export const ginzburgLandauQuestions: Question[] = [
  {
    id: 304051,
    topic: "ginzburg-landau",
    difficulty: "easy",
    question:
      "Ginzburg–Landau theory models superconductivity using an order parameter that represents:",
    options: [
      "The macroscopic superconducting state",
      "The exact position of every electron in the metal",
      "The nuclear binding energy of the material",
      "The lattice spacing of the crystal only",
    ],
    correctIndex: 0,
    explanation:
      "Ginzburg–Landau theory introduces a complex order parameter to describe the superconducting phase on a macroscopic level, without tracking every microscopic particle individually.",
    realWorld:
      "This framework is widely used to study vortices, phase transitions, and superconducting devices.",
    hint: "It is a large-scale field description.",
    symbolLinks: {},
    formulaLinks: ["Ginzburg–Landau theory"],
    glossaryLinks: ["order-parameter", "superconductivity", "phase-transition"],
  },
  {
    id: 304052,
    topic: "ginzburg-landau",
    difficulty: "hard",
    question:
      "In Ginzburg–Landau theory, the coherence length mainly characterizes:",
    options: [
      "The spatial scale over which the order parameter varies significantly",
      "The average distance between all atoms in the lattice",
      "The wavelength of thermal radiation emitted by the sample",
      "The frequency of electron collisions in a resistor",
    ],
    correctIndex: 0,
    explanation:
      "The coherence length measures how quickly the superconducting order parameter can change in space. It is a central scale in describing interfaces, defects, and vortices.",
    realWorld:
      "Coherence length helps determine vortex structure and the size of superconducting features in thin films and nanodevices.",
    hint: "It is a spatial variation scale.",
    symbolLinks: {},
    formulaLinks: ["Ginzburg–Landau theory", "Coherence length"],
    glossaryLinks: ["coherence-length", "vortex", "condensed-matter-physics"],
  },
  {
    id: 304053,
    topic: "ginzburg-landau",
    difficulty: "sota",
    question:
      "Why is the Ginzburg–Landau parameter $\\kappa$ important for classifying superconductors?",
    options: [
      "It distinguishes type I from type II behavior through the ratio of penetration depth to coherence length",
      "It gives the exact microscopic pairing wavefunction of every Cooper pair",
      "It measures the total electrical resistance above the critical temperature only",
      "It determines the crystal symmetry group without experiments",
    ],
    correctIndex: 0,
    explanation:
      "The parameter $\\kappa = \\lambda/\\xi$ compares magnetic penetration depth $\\lambda$ to coherence length $\\xi$. Its value determines whether a superconductor is type I or type II, which strongly affects magnetic behavior and vortex formation.",
    realWorld:
      "This classification matters for superconducting magnets, MRI systems, and high-field materials where vortex physics is essential.",
    hint: "It is a ratio of two characteristic lengths.",
    symbolLinks: {
      "\\\\kappa": "kappa",
      "\\\\lambda": "lambda",
      "\\\\xi": "xi",
    },
    formulaLinks: ["Ginzburg–Landau parameter", "Ginzburg–Landau theory"],
    glossaryLinks: ["type-i-superconductor", "type-ii-superconductor", "magnetic-penetration-depth"],
  },
];
