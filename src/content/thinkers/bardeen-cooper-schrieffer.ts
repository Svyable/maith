import type { Question } from "../types";

export const bardeenCooperSchriefferQuestions: Question[] = [
  {
    id: 304048,
    topic: "bardeen-cooper-schrieffer",
    difficulty: "easy",
    question:
      "BCS theory explains conventional superconductivity through the formation of:",
    options: [
      "Cooper pairs of electrons",
      "Free isolated photons in the lattice",
      "Classical standing waves with no quantum effects",
      "Unbound protons moving through a conductor",
    ],
    correctIndex: 0,
    explanation:
      "BCS theory explains superconductivity by showing that electrons can form bound pairs, called Cooper pairs, through an effective attractive interaction mediated by lattice vibrations.",
    realWorld:
      "This theory explains why some materials can carry electrical current with essentially zero resistance below a critical temperature.",
    hint: "The key word is pairs.",
    symbolLinks: {},
    formulaLinks: ["BCS theory"],
    glossaryLinks: ["superconductivity", "cooper-pair", "condensed-matter-physics"],
  },
  {
    id: 304049,
    topic: "bardeen-cooper-schrieffer",
    difficulty: "hard",
    question:
      "In conventional superconductors, what typically mediates the effective attraction between electrons in BCS theory?",
    options: [
      "Phonons in the crystal lattice",
      "Direct Coulomb repulsion only",
      "Magnetic monopoles inside the material",
      "Nuclear fusion reactions in the lattice",
    ],
    correctIndex: 0,
    explanation:
      "Although electrons repel electrically, interactions with lattice vibrations can create an effective attraction that allows paired states to form near the Fermi surface.",
    realWorld:
      "Understanding phonon-mediated pairing is essential for interpreting low-temperature superconductors used in magnets, sensors, and quantum devices.",
    hint: "The lattice participates.",
    symbolLinks: {},
    formulaLinks: ["BCS theory"],
    glossaryLinks: ["phonon", "fermi-surface", "electron-phonon-coupling"],
  },
  {
    id: 304050,
    topic: "bardeen-cooper-schrieffer",
    difficulty: "sota",
    question:
      "Why is the BCS energy gap important in modern condensed matter physics?",
    options: [
      "It represents the finite energy needed to break Cooper pairs and create excitations",
      "It proves all superconductors are topological",
      "It is the same as the band gap of any insulator",
      "It eliminates thermal effects completely at every temperature",
    ],
    correctIndex: 0,
    explanation:
      "BCS theory predicts an excitation gap in the superconducting state. This gap suppresses low-energy scattering and is a key reason superconductors exhibit zero-resistance transport below the critical temperature.",
    realWorld:
      "The superconducting gap is measured in tunneling experiments, microwave resonators, and qubit hardware design.",
    hint: "Breaking the paired state costs energy.",
    symbolLinks: {},
    formulaLinks: ["BCS theory", "Superconducting gap"],
    glossaryLinks: ["energy-gap", "quasiparticle", "superconductivity"],
  },
];
