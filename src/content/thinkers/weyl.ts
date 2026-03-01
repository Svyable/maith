import type { Question } from '../types';

export const weylQuestions: Question[] = [
  {
    id: 31085,
    topic: 'weyl',
    difficulty: 'easy',
    question: 'Hermann Weyl profoundly bridged the gap between pure mathematics and theoretical physics. Which massive area of modern physics relies heavily on Weyl\'s work with symmetry and group theory?',
    options: [
      'Quantum Mechanics and Gauge Theory.',
      'Fluid Dynamics and Aerodynamics.',
      'Classical Thermodynamics and Entropy.',
      'Newtonian Orbital Mechanics and Gravity.'
    ],
    correctIndex: 0,
    explanation: 'Weyl recognized that the strange behaviors of quantum mechanics were essentially expressions of abstract mathematical symmetries. He introduced group theory into quantum mechanics, proving that physical conservation laws are just reflections of underlying mathematical symmetries.',
    realWorld: 'Today, the entire Standard Model of particle physics (quarks, electrons, bosons) is mathematically written entirely in the language of group theory and Gauge Theory that Weyl pioneered.',
    hint: 'He used symmetry to explain the absolute smallest subatomic particles in the universe.',
  },
  {
    id: 31086,
    topic: 'weyl',
    difficulty: 'hard',
    question: 'In 1918, Weyl attempted to unify electromagnetism and gravity using geometry. Although his specific physical theory failed, he accidentally invented what absolutely foundational concept of modern physics?',
    options: [
      'Gauge invariance (Gauge theory).',
      'The Cosmological Constant.',
      'The Higgs Mechanism.',
      'Wave-particle duality.'
    ],
    correctIndex: 0,
    explanation: 'Weyl tried to unify gravity and electromagnetism by assuming that the "scale" or "gauge" of length could change from point to point in space. Einstein proved the physics were wrong, but Weyl\'s mathematical framework ("Gauge invariance") was later repurposed to explain the nuclear forces.',
    realWorld: 'Gauge theory is arguably the most successful physical theory in human history, forming the exact mathematical basis of quantum electrodynamics (QED) and quantum chromodynamics (QCD).',
    hint: 'It is the theory that allows physicists to "recalibrate" equations at any local point in space without changing the physical outcome.',
  },
  {
    id: 31087,
    topic: 'weyl',
    difficulty: 'sota',
    question: 'The "Weyl Tensor" is a crucial mathematical tool used in general relativity. How does it physically differ from the standard Ricci curvature tensor?',
    options: [
      'The Weyl tensor describes tidal forces and gravitational waves traveling through empty space where matter is absolutely zero.',
      'The Weyl tensor exclusively maps the curvature caused by dark energy, whereas the Ricci tensor only maps visible baryonic matter.',
      'The Weyl tensor operates strictly in flat 2D Minkowski space, while the Ricci tensor maps full 4D spacetime configurations.',
      'The Weyl tensor defines the curvature of quantum probability fields, while the Ricci tensor maps macro-scale celestial bodies.'
    ],
    correctIndex: 0,
    explanation: 'The Riemann curvature tensor splits into two parts: the Ricci tensor (which measures the curvature directly caused by local mass/energy) and the Weyl tensor (which measures curvature that propagates through empty space, like gravitational waves or tidal forces).',
    realWorld: 'When LIGO detected the collision of two black holes a billion light-years away, they were measuring ripples purely described by the Weyl tensor.',
    hint: 'It describes gravity that exists in a vacuum, completely disconnected from the matter that originally caused it.',
  },
  {
    id: 31088,
    topic: 'weyl',
    difficulty: 'hard',
    question: 'In quantum mechanics, a "Weyl fermion" is a theoretical particle that possesses a specific, inherent geometric property. What is this property?',
    options: [
      'Chirality (handedness)—the particle\'s spin is strictly locked parallel or anti-parallel to its momentum.',
      'Absolute zero mass—the particle does not interact with the Higgs field under any known physical circumstances.',
      'Perfect symmetry—the particle acts as its own anti-particle and annihilates upon contact with an identical copy.',
      'Infinite velocity—the particle natively travels faster than light outside of a locally observed reference frame.'
    ],
    correctIndex: 0,
    explanation: 'Weyl proposed a solution to the Dirac equation that yielded massless fermions with a distinct "handedness" or chirality. If the particle spins in the same direction it moves, it is right-handed; if opposite, left-handed.',
    realWorld: 'While it was thought neutrinos might be Weyl fermions (they aren\'t, as they have mass), scientists finally discovered Weyl fermions existing as quasiparticles inside synthetic crystals (Weyl semimetals) in 2015.',
    hint: 'It behaves as if it has a strict "left-hand" or "right-hand" orientation as it moves through space.',
  },
  {
    id: 31089,
    topic: 'weyl',
    difficulty: 'hard',
    question: 'Weyl fled Nazi Germany in 1933 and joined the newly established Institute for Advanced Study in Princeton. Which famous physicist was his most prominent colleague and close philosophical confidant there?',
    options: [
      'Albert Einstein, with whom he constantly debated the mathematical structure of the unified field theory.',
      'Niels Bohr, who heavily relied on Weyl\'s topology to structure the famous Copenhagen interpretation.',
      'Richard Feynman, who utilized Weyl\'s group theories to construct his initial quantum electrodynamic diagrams.',
      'Erwin Schrödinger, who derived his famous wave equation directly from Weyl\'s previous complex analytical writings.'
    ],
    correctIndex: 0,
    explanation: 'Weyl and Einstein were close colleagues. Weyl had been one of the very first mathematicians to deeply understand General Relativity, publishing the highly influential textbook *Space-Time-Matter* in 1918. At Princeton, they continued to collaborate and debate the possibility of a unified field theory.',
    realWorld: 'The Institute for Advanced Study served as a massive scientific sanctuary during WWII, bringing the greatest mathematical and physical minds of Europe into close, highly productive proximity.',
    hint: 'He worked down the hall from the man who discovered Relativity.',
  }
];