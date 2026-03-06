import type { Question } from "../types";

export const hannesAlfvenQuestions: Question[] = [
  {
    id: 304054,
    topic: "hannes-alfven",
    difficulty: "easy",
    question:
      "In magnetohydrodynamics, the Alfvén speed is $v_A = \\dfrac{B}{\\sqrt{\\mu_0 \\rho}}$. If the mass density $\\rho$ is fixed, which change increases $v_A$?",
    options: [
      "Increase the magnetic field strength $B$",
      "Increase the density $\\rho$ while keeping $B$ fixed",
      "Set $B=0$ so that $v_A$ becomes largest",
      "Replace $\\sqrt{\\mu_0 \\rho}$ with $\\mu_0 \\rho$ in the denominator",
    ],
    correctIndex: 0,
    explanation:
      "From $v_A = \\dfrac{B}{\\sqrt{\\mu_0 \\rho}}$, increasing $B$ raises the Alfvén speed when $\\rho$ is fixed. Increasing $\\rho$ would instead decrease $v_A$ because it appears in the denominator under the square root.",
    realWorld:
      "Alfvén speeds matter in the solar wind, Earth’s magnetosphere, and fusion plasmas, where magnetic fields guide how disturbances propagate.",
    hint: "Look at which variable sits in the numerator.",
    symbolLinks: {
      "v_A": "nu",
      "B": "beta",
      "\\\\mu_0": "mu",
      "\\\\rho": "rho",
      "\\\\sqrt{}": "square-root",
    },
    formulaLinks: ["Alfvén wave"],
    glossaryLinks: ["magnetohydrodynamics", "plasma", "alfven-speed"],
  },
  {
    id: 304055,
    topic: "hannes-alfven",
    difficulty: "hard",
    question:
      "An Alfvén wave is best understood as a disturbance in a magnetized plasma where magnetic tension provides the restoring effect. Which description is most accurate?",
    options: [
      "A transverse wave propagating along magnetic field lines in a conducting plasma",
      "A longitudinal sound wave in vacuum with speed $c$",
      "A purely electrostatic wave requiring $\\mathbf{B}=0$ everywhere",
      "A thermal diffusion mode with no wave propagation",
    ],
    correctIndex: 0,
    explanation:
      "Alfvén waves are transverse magnetohydrodynamic waves. In a conducting plasma, perturbations of the magnetic field and fluid velocity couple so that the disturbance propagates along field lines with characteristic speed $v_A = \\dfrac{B}{\\sqrt{\\mu_0 \\rho}}$.",
    realWorld:
      "These waves are used to understand plasma transport in astrophysics and the behavior of confined plasmas in fusion devices.",
    hint: "Think magnetic field lines behaving a bit like stretched strings.",
    symbolLinks: {
      "\\\\mathbf{B}": "beta",
      "v_A": "nu",
      "\\\\mu_0": "mu",
      "\\\\rho": "rho",
    },
    formulaLinks: ["Alfvén wave", "Magnetohydrodynamics"],
    glossaryLinks: ["mhd", "magnetic-tension", "space-plasma"],
  },
  {
    id: 304056,
    topic: "hannes-alfven",
    difficulty: "sota",
    question:
      "Why are Alfvén waves considered important in modern heliophysics and space plasma physics?",
    options: [
      "They can transport energy and momentum along magnetic field lines, helping explain phenomena such as coronal heating and solar-wind dynamics",
      "They prove that all plasma turbulence is exactly periodic with frequency $\\omega = k^2$",
      "They require the plasma density to be identically $\\rho = 0$",
      "They eliminate reconnection by forcing magnetic topology to remain fixed forever",
    ],
    correctIndex: 0,
    explanation:
      "In magnetized plasmas, Alfvénic disturbances can carry energy over large distances. This is one reason they are studied in connection with the solar corona, solar wind turbulence, and magnetospheric dynamics. In simplified settings, their propagation reflects the MHD coupling between fluid motion and magnetic field tension.",
    realWorld:
      "Space missions studying the Sun and solar wind measure Alfvénic fluctuations to understand plasma heating, turbulence, and energy transfer in astrophysical environments.",
    hint: "The key phrase is transport along field lines.",
    symbolLinks: {
      "\\\\omega": "omega",
      "k": "kappa",
      "\\\\rho": "rho",
    },
    formulaLinks: ["Alfvén wave", "Magnetohydrodynamics"],
    glossaryLinks: ["heliophysics", "solar-wind", "plasma-turbulence"],
  },
];
