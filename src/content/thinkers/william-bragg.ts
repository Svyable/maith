import type { Question } from "../types";

export const williamBraggQuestions: Question[] = [
  {
    id: 304015,
    topic: "william-bragg",
    difficulty: "easy",
    question:
      "Bragg’s law relates X-ray diffraction to crystal structure through the equation:",
    options: [
      "$n\\lambda = 2d\\sin\\theta$",
      "$E = h\\nu$",
      "$F = ma$",
      "$pV = nRT$",
    ],
    correctIndex: 0,
    explanation:
      "Bragg’s law, $n\\lambda = 2d\\sin\\theta$, gives the condition for constructive interference of X-rays reflected by crystal planes separated by distance $d$.",
    realWorld:
      "This law is foundational in X-ray crystallography, which is used to determine the structures of minerals, metals, and biological molecules.",
    hint: "It connects wavelength, spacing, and angle.",
    symbolLinks: {
      "n": "eta",
      "\\\\lambda": "lambda",
      "d": "delta",
      "\\\\theta": "theta",
      "\\\\sin": "sigma",
    },
    formulaLinks: ["Bragg's law"],
    glossaryLinks: ["x-ray-diffraction", "crystallography", "constructive-interference"],
  },
  {
    id: 304016,
    topic: "william-bragg",
    difficulty: "hard",
    question:
      "In Bragg diffraction, what physical quantity does $d$ represent?",
    options: [
      "The spacing between crystal planes",
      "The diameter of the X-ray beam",
      "The density of the crystal",
      "The detector distance from the sample",
    ],
    correctIndex: 0,
    explanation:
      "In Bragg’s law, $d$ is the interplanar spacing: the distance between parallel planes of atoms in a crystal lattice.",
    realWorld:
      "Changes in $d$ can reveal strain in materials, phase changes, and lattice distortions in semiconductor devices.",
    hint: "It is a structural spacing inside the crystal.",
    symbolLinks: {
      "d": "delta",
    },
    formulaLinks: ["Bragg's law"],
    glossaryLinks: ["interplanar-spacing", "crystal-lattice", "materials-science"],
  },
  {
    id: 304017,
    topic: "william-bragg",
    difficulty: "sota",
    question:
      "Why was Bragg-style diffraction revolutionary for biology and materials science?",
    options: [
      "It enabled atomic-scale structural inference from scattering patterns",
      "It directly imaged electrons in real time with no inverse problem",
      "It replaced spectroscopy as the only way to measure chemical composition",
      "It made thermal microscopy unnecessary in all solid-state experiments",
    ],
    correctIndex: 0,
    explanation:
      "Diffraction patterns encode lattice and molecular structure. Interpreting them made it possible to infer atomic arrangements, a breakthrough that later enabled structure determination of DNA, proteins, and complex materials.",
    realWorld:
      "Modern drug design, protein structure analysis, and materials engineering all descend from X-ray diffraction methods pioneered by the Braggs.",
    hint: "The pattern is indirect, but it reveals structure.",
    symbolLinks: {},
    formulaLinks: ["Bragg's law", "X-ray crystallography"],
    glossaryLinks: ["structural-biology", "materials-characterization", "diffraction"],
  },
];
