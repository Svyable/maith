import type { Question } from '../types';

export const ampereQuestions: Question[] = [
  {
    id: 21840,
    topic: 'ampere',
    difficulty: 'sota',
    question: 'Ampère\'s circuital law relates the magnetic field circulation to enclosed current. In integral form: ∮B⃗·dl⃗ = ?',
    options: [
      'μ₀ I_enc (for steady currents in vacuum)',
      'ε₀ I_enc',
      'μ₀ε₀ dΦ_E/dt',
      'I_enc / (4πε₀)'
    ],
    correctIndex: 0,
    explanation: 'Ampère\'s law: ∮B⃗·dl⃗ = μ₀I_enc, where the line integral is over a closed loop and I_enc is the total current threading the loop. Maxwell later added the displacement current term μ₀ε₀(dΦ_E/dt) to make it consistent with charge conservation.',
    realWorld: 'Ampère\'s law is used to calculate magnetic fields in solenoids (B = μ₀nI), toroids, and coaxial cables — essential for electromagnet and transformer design.',
    hint: 'Current enclosed by the loop → magnetic field circulation. The permeability of free space μ₀ appears.'
  },
  {
    id: 21841,
    topic: 'ampere',
    difficulty: 'sota',
    question: 'Ampère showed that two parallel wires carrying currents I₁ and I₂ separated by distance d experience a force per unit length of what?',
    options: [
      'F/L = μ₀I₁I₂/(2πd) — attractive for parallel currents, repulsive for anti-parallel',
      'F/L = μ₀I₁I₂/(4πd²)',
      'F/L = I₁I₂/(4πε₀d)',
      'F/L = μ₀I₁I₂d/(2π)'
    ],
    correctIndex: 0,
    explanation: 'Wire 1 creates field B₁ = μ₀I₁/(2πd) at wire 2. Force on wire 2: F/L = I₂B₁ = μ₀I₁I₂/(2πd). Parallel currents attract (their fields reinforce between wires), anti-parallel repel.',
    realWorld: 'This force was used to define the ampere (SI): 1 A is the current that produces 2×10⁻⁷ N/m of force between two infinite parallel wires 1 m apart.',
    hint: 'One wire\'s magnetic field exerts a Lorentz force on the current in the other wire.'
  },
  {
    id: 21842,
    topic: 'ampere',
    difficulty: 'sota',
    question: 'Maxwell\'s correction to Ampère\'s law adds what term to handle time-varying electric fields?',
    options: [
      'Displacement current: μ₀ε₀ ∂E⃗/∂t (or equivalently μ₀ ∂D⃗/∂t)',
      'Magnetic monopole current: μ₀ρ_m v⃗',
      'Radiation pressure: E²/(2μ₀c)',
      'Convection current: ρ v⃗'
    ],
    correctIndex: 0,
    explanation: 'Maxwell added the displacement current J_d = ε₀ ∂E⃗/∂t to Ampère\'s law: ∇×B⃗ = μ₀(J⃗ + ε₀ ∂E⃗/∂t). This ensures ∇·(∇×B⃗) = 0 (charge conservation) and predicts electromagnetic waves propagating at c = 1/√(μ₀ε₀).',
    realWorld: 'Without the displacement current, Ampère\'s law would violate charge conservation at a charging capacitor. Maxwell\'s fix predicted EM waves — leading to radio, WiFi, and all wireless communication.',
    hint: 'A changing electric field acts like a current for generating magnetic fields.'
  },
];
