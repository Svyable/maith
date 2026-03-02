import type { Question } from '../types';

export const ehrenfestQuestions: Question[] = [
  {
    id: 21870,
    topic: 'paul-ehrenfest',
    difficulty: 'sota',
    question: 'An adiabatic invariant J = ∮p dq is conserved when a system parameter changes slowly. What does "slowly" mean precisely?',
    options: [
      'The parameter changes over timescales much longer than the system\'s natural period',
      'The parameter changes at constant velocity',
      'The system remains at absolute zero temperature',
      'No heat is exchanged with the environment'
    ],
    correctIndex: 0,
    explanation: 'Adiabatic invariance requires the rate of parameter change to be much slower than the natural frequency: |dλ/dt|/λ ≪ ω. Under this condition, J = ∮p dq/(2π) is conserved to all orders in the slowness parameter ε = 1/(ωT), where T is the timescale of change.',
    realWorld: 'A pendulum slowly shortened conserves J: as L decreases, amplitude increases predictably. This explains why a child\'s swing amplitude grows when they pump at the right frequency.',
    hint: 'Adiabatic ≠ no heat. It means the change is slow compared to the oscillation period.'
  },
  {
    id: 21871,
    topic: 'paul-ehrenfest',
    difficulty: 'sota',
    question: 'Ehrenfest\'s theorem connects quantum mechanics to classical mechanics. What does it state?',
    options: [
      'd⟨p⟩/dt = −⟨∂V/∂x⟩ — expectation values obey Newton\'s laws (approximately)',
      'All quantum systems reduce to classical systems in the limit ℏ → 0',
      'The uncertainty principle is a consequence of non-commuting operators',
      'Wave functions always collapse to classical trajectories when measured'
    ],
    correctIndex: 0,
    explanation: 'Ehrenfest\'s theorem: d⟨x⟩/dt = ⟨p⟩/m and d⟨p⟩/dt = −⟨∂V/∂x⟩. For narrow wave packets where ⟨∂V/∂x⟩ ≈ ∂V/∂⟨x⟩, the expectation values follow Newton\'s equations exactly. For broad packets or nonlinear V, quantum corrections appear.',
    realWorld: 'Ehrenfest\'s theorem explains why macroscopic objects follow classical trajectories: their wave packets are incredibly narrow relative to the scale of potential variations.',
    hint: 'Take the time derivative of ⟨x⟩ and ⟨p⟩ using Schrödinger\'s equation.'
  },
  {
    id: 21872,
    topic: 'paul-ehrenfest',
    difficulty: 'sota',
    question: 'In plasma physics, the magnetic moment μ = mv⊥²/(2B) of a charged particle spiraling in a magnetic field is an adiabatic invariant. What does this conservation imply?',
    options: [
      'As B increases (particle moves into stronger field), v⊥ increases and v∥ decreases — magnetic mirror effect',
      'The particle always moves toward stronger magnetic field regions',
      'The particle\'s total speed increases proportionally to B',
      'The Larmor radius remains constant regardless of field strength'
    ],
    correctIndex: 0,
    explanation: 'Since μ = mv⊥²/(2B) is conserved and total energy E = ½m(v⊥² + v∥²) is also conserved, increasing B forces v⊥ to increase and v∥ to decrease. When v∥ → 0, the particle reflects — this is the magnetic mirror effect.',
    realWorld: 'Earth\'s Van Allen radiation belts trap charged particles via magnetic mirrors at the poles. Fusion reactors (mirror machines, tokamaks) use this principle to confine plasma.',
    hint: 'Energy is conserved. If the perpendicular speed must increase (to keep μ constant), the parallel speed must decrease.'
  },
];
