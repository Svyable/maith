import type { Question } from '../types';

export const wolfgangKetterleQuestions: Question[] = [
  {
    id: 31400,
    topic: 'wolfgang-ketterle',
    difficulty: 'easy',
    question: 'Wolfgang Ketterle shared the 2001 Nobel Prize for achieving a groundbreaking state of matter. What did his team create?',
    options: [
      'A Bose-Einstein Condensate (BEC) — a macroscopic quantum state where thousands of atoms collapse into a single coherent quantum wavefunction at near absolute zero.',
      'A quark-gluon plasma — recreating the primordial soup of the universe by smashing heavy gold ions at relativistic speeds.',
      'A time crystal — a new phase of matter that spontaneously breaks continuous time-translation symmetry in its quantum ground state.',
      'A room-temperature superconductor — achieving zero electrical resistance in a copper-oxide compound at standard atmospheric pressure.'
    ],
    correctIndex: 0,
    explanation: 'Ketterle\'s group at MIT cooled sodium atoms to billionths of a degree above absolute zero, causing them to collectively occupy the same quantum ground state. This Bose-Einstein Condensate was first predicted by Einstein in 1925 using Bose\'s statistics, but took 70 years to realize experimentally.',
    realWorld: 'BECs are now used in atom lasers, precision interferometry, quantum simulation of condensed matter systems, and tests of fundamental quantum mechanics at macroscopic scales.',
    hint: 'Think of a gas so cold that all atoms become one giant "super-atom" described by a single wavefunction.',
  },
  {
    id: 31401,
    topic: 'wolfgang-ketterle',
    difficulty: 'hard',
    question: 'Ketterle\'s BEC experiments confirmed the critical temperature formula for an ideal Bose gas. What is the transition temperature $T_c$ for Bose-Einstein condensation in a 3D box?',
    options: [
      '$T_c = \\frac{2\\pi\\hbar^2}{m k_B}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}$, where $n$ is particle density and $\\zeta(3/2) \\approx 2.612$ is the Riemann zeta function.',
      '$T_c = \\frac{\\hbar \\omega}{k_B} \\left(\\frac{N}{1.202}\\right)^{1/3}$, valid only for atoms in a 3D harmonic trap with frequency $\\omega$.',
      '$T_c = \\frac{E_F}{k_B}$, where $E_F$ is the Fermi energy, because BEC occurs when bosonic atoms exceed the Fermi degeneracy pressure.',
      '$T_c = \\frac{\\hbar^2}{2 m k_B a_s^2}$, determined purely by the $s$-wave scattering length $a_s$ of the interatomic potential.'
    ],
    correctIndex: 0,
    explanation: 'The BEC transition occurs when the thermal de Broglie wavelength $\\lambda_{dB} = \\sqrt{2\\pi\\hbar^2/(mk_BT)}$ becomes comparable to the interparticle spacing $n^{-1/3}$. The Riemann zeta function $\\zeta(3/2)$ arises from integrating the Bose-Einstein distribution over all momentum states.',
    realWorld: 'For sodium atoms at Ketterle\'s densities (~$10^{14}$ cm$^{-3}$), $T_c$ is roughly 2 microkelvin — achieved via laser cooling followed by evaporative cooling in magnetic traps.',
    hint: 'The critical temperature involves the particle density raised to the 2/3 power and features a special value of the Riemann zeta function.',
  },
  {
    id: 31402,
    topic: 'wolfgang-ketterle',
    difficulty: 'sota',
    question: 'Ketterle\'s group demonstrated the first "atom laser" by coherently outcoupling atoms from a BEC. What is the key mathematical distinction between an atom laser and a thermal atomic beam?',
    options: [
      'The atom laser emits atoms in a coherent matter wave described by a macroscopic order parameter $\\Psi(\\mathbf{r},t) = \\sqrt{n(\\mathbf{r},t)}\\, e^{i\\phi(\\mathbf{r},t)}$ with a well-defined global phase $\\phi$, analogous to an optical laser\'s coherent state.',
      'The atom laser emits atoms with quantized angular momentum $L = n\\hbar$ strictly perpendicular to the beam axis, creating a helical wavefront pattern.',
      'The atom laser produces atoms whose de Broglie wavelengths are all exactly identical, because evaporative cooling filters out every atom not at the ground state energy.',
      'The atom laser achieves population inversion in the atomic momentum distribution, stimulating emission of atoms into a single propagating plane wave mode.'
    ],
    correctIndex: 0,
    explanation: 'In a BEC, macroscopic occupation of the ground state gives rise to a well-defined order parameter $\\Psi$ with long-range phase coherence. Ketterle demonstrated this by interfering two independent BECs and observing high-contrast interference fringes — proving the coherent nature of the matter wave.',
    realWorld: 'Atom lasers could revolutionize atom interferometry for inertial navigation, gravitational wave detection, and precision measurements of fundamental constants like $\\hbar/m$.',
    hint: 'Like an optical laser has a coherent electromagnetic field, the atom laser has a coherent matter-wave field with a definite phase.',
  },
];
