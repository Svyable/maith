import type { Question } from '../types';

export const biotSavartQuestions: Question[] = [
  {
    id: 21860,
    topic: 'biot-savart',
    difficulty: 'sota',
    question: 'The Biot-Savart law gives the magnetic field dB⃗ due to a current element Idl⃗. What is the expression?',
    options: [
      'dB⃗ = (μ₀/4π) I dl⃗ × r̂ / r²',
      'dB⃗ = (μ₀/4π) I dl⃗ · r̂ / r²',
      'dB⃗ = (μ₀/4π) I dl⃗ / r',
      'dB⃗ = μ₀ I dl⃗ × r̂ / r'
    ],
    correctIndex: 0,
    explanation: 'The Biot-Savart law: dB⃗ = (μ₀/4π)(Idl⃗ × r̂)/r², where r̂ points from the current element to the field point. The cross product means B⃗ is perpendicular to both the current direction and the displacement. Total B⃗ is obtained by integrating over the entire current distribution.',
    realWorld: 'Biot-Savart is essential for calculating magnetic fields of arbitrary current geometries — Helmholtz coils, MRI gradient coils, and particle accelerator magnets.',
    hint: 'It\'s the magnetic analog of Coulomb\'s law, but with a cross product because magnetism involves motion.'
  },
  {
    id: 21861,
    topic: 'biot-savart',
    difficulty: 'sota',
    question: 'Using the Biot-Savart law, the magnetic field at the center of a circular loop of radius R carrying current I is what?',
    options: [
      'B = μ₀I/(2R)',
      'B = μ₀I/(4πR)',
      'B = μ₀I/(2πR)',
      'B = μ₀IR²/2'
    ],
    correctIndex: 0,
    explanation: 'For a circular loop, every element dl is perpendicular to r̂ (|dl × r̂| = dl), and r = R everywhere. Integrating: B = (μ₀I/4πR²)∮dl = (μ₀I/4πR²)(2πR) = μ₀I/(2R). The field points along the axis by symmetry.',
    realWorld: 'This formula is used to design electromagnetic coils for NMR/MRI machines, where precise field uniformity at the center is critical.',
    hint: 'All current elements are the same distance R from the center, and dl ⊥ r̂ everywhere.'
  },
  {
    id: 21862,
    topic: 'biot-savart',
    difficulty: 'sota',
    question: 'The Biot-Savart law for a long straight wire carrying current I gives a magnetic field at distance d of what?',
    options: [
      'B = μ₀I/(2πd) — field circles the wire',
      'B = μ₀I/(4πd²)',
      'B = μ₀I/(4πd)',
      'B = μ₀Id/(2π)'
    ],
    correctIndex: 0,
    explanation: 'Integrating the Biot-Savart law over an infinite straight wire: B = (μ₀I/4π)∫dl sin θ/r² = μ₀I/(2πd). The field forms concentric circles around the wire (right-hand rule). This can also be derived directly from Ampère\'s law with a circular Amperian loop.',
    realWorld: 'This result is fundamental to electrical engineering: calculating magnetic fields around power lines, designing inductors, and understanding electromagnetic interference.',
    hint: 'This is the same result you get from Ampère\'s law with a circular loop around the wire.'
  },
];
