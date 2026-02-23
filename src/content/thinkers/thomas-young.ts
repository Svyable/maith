import type { Question } from '../types';

export const thomasYoungQuestions: Question[] = [
  {
    id: 21820,
    topic: 'thomas-young',
    difficulty: 'sota',
    question: 'In Young\'s double-slit experiment, the condition for constructive interference (bright fringes) is what?',
    options: [
      'd sin θ = mλ, where m is an integer, d is slit separation',
      'd cos θ = mλ',
      'd sin θ = (m + ½)λ',
      'd / sin θ = mλ'
    ],
    correctIndex: 0,
    explanation: 'Constructive interference occurs when the path difference between waves from two slits equals an integer number of wavelengths: d sin θ = mλ. Destructive interference occurs at d sin θ = (m + ½)λ. The fringe spacing on a screen at distance L is Δy = λL/d.',
    realWorld: 'Young\'s experiment (1801) definitively proved light is a wave, overturning Newton\'s corpuscular theory. It was later reinterpreted in quantum mechanics as demonstrating wave-particle duality.',
    hint: 'Path difference = integer × wavelength gives constructive interference.'
  },
  {
    id: 21821,
    topic: 'thomas-young',
    difficulty: 'sota',
    question: 'Young\'s modulus E = σ/ε measures what material property?',
    options: [
      'Stiffness — the ratio of stress (force/area) to strain (fractional extension)',
      'Hardness — resistance to surface indentation',
      'Toughness — total energy absorbed before fracture',
      'Ductility — ability to deform plastically without breaking'
    ],
    correctIndex: 0,
    explanation: 'Young\'s modulus E = σ/ε = (F/A)/(ΔL/L) is the slope of the stress-strain curve in the linear elastic region. Higher E means stiffer material. Steel: E ≈ 200 GPa, rubber: E ≈ 0.01 GPa.',
    realWorld: 'Engineers use Young\'s modulus to calculate beam deflections, column buckling loads, and structural deformations in buildings, bridges, and aircraft.',
    hint: 'It\'s the proportionality constant in Hooke\'s law for materials: stress = E × strain.'
  },
  {
    id: 21822,
    topic: 'thomas-young',
    difficulty: 'sota',
    question: 'When single photons are sent through a double slit one at a time, what pattern eventually builds up on the detector?',
    options: [
      'An interference pattern — each photon interferes with itself',
      'Two bright bands directly behind each slit (no interference)',
      'A uniform distribution with no pattern',
      'A single bright spot at the center'
    ],
    correctIndex: 0,
    explanation: 'Even single photons, sent one at a time, build up an interference pattern over many detections. Each photon\'s probability amplitude passes through both slits and interferes. This demonstrates wave-particle duality: the photon "interferes with itself" as Dirac said.',
    realWorld: 'This experiment has been repeated with electrons, neutrons, and even large molecules (C₆₀). It\'s the central mystery of quantum mechanics according to Feynman.',
    hint: 'Feynman called this "the only mystery" of quantum mechanics.'
  },
];
