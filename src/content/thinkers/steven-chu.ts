import type { Question } from '../types';

export const stevenChuQuestions: Question[] = [
  {
    id: 31560, topic: 'steven-chu', difficulty: 'easy',
    question: 'Steven Chu shared the 1997 Nobel Prize in Physics for developing methods to cool and trap atoms. What technique did he pioneer?',
    options: [
      'Laser cooling using "optical molasses" — three pairs of counter-propagating laser beams tuned slightly below an atomic resonance create a viscous force that slows atoms to microkelvin temperatures.',
      'Adiabatic demagnetization — using powerful magnetic fields to align atomic spins, then removing the field to extract thermal energy.',
      'Evaporative cooling — selectively removing the hottest atoms from a magnetic trap to lower the average temperature.',
      'Sympathetic cooling — using pre-cooled helium buffer gas to thermalize hot atoms via elastic collisions.'
    ],
    correctIndex: 0,
    explanation: 'Chu demonstrated that six laser beams (three orthogonal pairs) tuned slightly below the atomic transition frequency create a velocity-dependent damping force. Atoms moving toward a laser beam see it blue-shifted into resonance, absorb photons, and receive a momentum kick opposing their motion — effectively creating "optical molasses" that slows atoms to ~10 μK.',
    realWorld: 'Laser cooling enabled atomic clocks accurate to 1 second in 30 billion years, Bose-Einstein condensation, atom interferometry for GPS-free navigation, and quantum computing with trapped atoms.',
    hint: 'Six laser beams create a "thick honey" of light that slows atoms almost to a standstill.',
  },
  {
    id: 31561, topic: 'steven-chu', difficulty: 'hard',
    question: 'The Doppler cooling limit sets a minimum temperature achievable by optical molasses. What determines this limit?',
    options: [
      '$T_{\\text{Doppler}} = \\frac{\\hbar \\Gamma}{2 k_B}$, where $\\Gamma$ is the natural linewidth of the atomic transition. It arises from the balance between laser cooling and random recoil heating from spontaneously emitted photons.',
      '$T_{\\text{Doppler}} = \\frac{\\hbar^2 k^2}{2 m k_B}$, the single-photon recoil temperature, determined solely by the photon momentum and atomic mass.',
      '$T_{\\text{Doppler}} = \\frac{h \\nu}{k_B}$, the photon energy divided by Boltzmann\'s constant, representing the thermal equivalent of one absorbed photon.',
      '$T_{\\text{Doppler}} = \\frac{m v_c^2}{3 k_B}$, where $v_c$ is the capture velocity of the magneto-optical trap.'
    ],
    correctIndex: 0,
    explanation: 'Each photon absorption cools the atom, but the subsequent spontaneous emission in a random direction heats it by one recoil kick. The Doppler limit occurs when cooling and heating rates balance: $T_D = \\hbar\\Gamma/(2k_B)$. For sodium, $\\Gamma \\approx 2\\pi \\times 10$ MHz gives $T_D \\approx 240$ μK.',
    realWorld: 'Sub-Doppler cooling techniques (Sisyphus cooling, discovered by Cohen-Tannoudji) can reach temperatures 100× below the Doppler limit — into the nanokelvin regime.',
    hint: 'It\'s set by the linewidth of the atomic transition — broader lines mean higher minimum temperatures.',
  },
  {
    id: 31562, topic: 'steven-chu', difficulty: 'sota',
    question: 'After his Nobel Prize, Chu served as US Secretary of Energy (2009–2013). What major scientific policy initiative did he champion?',
    options: [
      'ARPA-E (Advanced Research Projects Agency–Energy) — modeled after DARPA, funding high-risk/high-reward energy technologies including advanced batteries, biofuels, grid-scale storage, and carbon capture. He also pushed for stringent vehicle fuel efficiency standards.',
      'The Superconducting Super Collider revival — proposing a 100-km circumference proton collider in Texas to discover physics beyond the Standard Model.',
      'Project Prometheus — a NASA initiative to develop nuclear-thermal propulsion for manned Mars missions by 2025.',
      'The National Quantum Initiative — a $1.2B program to establish quantum computing research centers at national laboratories.'
    ],
    correctIndex: 0,
    explanation: 'Chu was the first Nobel laureate to serve in a US Cabinet position. He launched ARPA-E, which has funded over 1,200 projects and created 100+ companies. He also championed SunShot (reducing solar energy costs to $1/W), increased DOE R&D spending, and advocated for carbon pricing based on climate science.',
    realWorld: 'ARPA-E funded technologies like solid-state lithium batteries, direct air capture, and advanced nuclear reactors that are now being commercialized. After leaving government, Chu returned to Stanford to work on climate and energy research.',
    hint: 'He created a DARPA-like agency for energy moonshots — funding risky clean energy technologies.',
  },
];
