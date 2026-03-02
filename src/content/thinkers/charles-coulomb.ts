import type { Question } from '../types';

export const charlesCoulombQuestions: Question[] = [
  {
    id: 21830,
    topic: 'charles-coulomb',
    difficulty: 'sota',
    question: 'Coulomb\'s law gives the electrostatic force between two point charges. What is the force F?',
    options: [
      'F = kₑ q₁q₂/r², where kₑ = 1/(4πε₀) ≈ 8.99 × 10⁹ N·m²/C²',
      'F = μ₀ q₁q₂/(4πr²)',
      'F = q₁q₂/(4πε₀r)',
      'F = kₑ q₁q₂/r³'
    ],
    correctIndex: 0,
    explanation: 'Coulomb\'s law: F = kₑ|q₁q₂|/r² directed along the line joining the charges. Like charges repel, unlike attract. The 1/r² dependence is exact (tested to 1 part in 10¹⁶) and reflects the geometry of 3D space (flux through a sphere ~ r²).',
    realWorld: 'Coulomb\'s law governs atomic structure (electron-proton binding), chemical bonding, semiconductor physics, and all of electrostatics in circuit design.',
    hint: 'It has the same inverse-square form as Newton\'s gravitational law, but with charge instead of mass.'
  },
  {
    id: 21831,
    topic: 'charles-coulomb',
    difficulty: 'sota',
    question: 'Coulomb measured electrostatic forces using what ingenious device?',
    options: [
      'A torsion balance — measuring the twist of a fiber against electrostatic repulsion',
      'A galvanometer connected to charged plates',
      'A Faraday cage with internal electrometers',
      'A Leyden jar with calibrated discharge'
    ],
    correctIndex: 0,
    explanation: 'Coulomb\'s torsion balance (1785) suspended a charged pith ball on a fine silver wire next to another charged ball. The electrostatic force twisted the wire until the restoring torque balanced it. By measuring the twist angle and varying the distance, he established the 1/r² law.',
    realWorld: 'The torsion balance was later used by Cavendish to measure gravitational constant G, and by Eötvös to test the equivalence principle to extraordinary precision.',
    hint: 'The same principle Cavendish later used to "weigh the Earth."'
  },
  {
    id: 21832,
    topic: 'charles-coulomb',
    difficulty: 'sota',
    question: 'The electric field from a point charge q at distance r has magnitude E = ?',
    options: [
      'E = kₑ q/r² = q/(4πε₀r²)',
      'E = kₑ q/r',
      'E = kₑ q²/r²',
      'E = q/(2πε₀r)'
    ],
    correctIndex: 0,
    explanation: 'The electric field E = F/q_test = kₑQ/r² points radially outward for positive Q. The field concept (introduced by Faraday, formalized by Maxwell) replaces action-at-a-distance: charge Q creates a field, and test charge q experiences force F = qE.',
    realWorld: 'Electric field calculations are essential for designing capacitors, particle accelerators, electron microscopes, and understanding lightning.',
    hint: 'It\'s Coulomb\'s force divided by the test charge — force per unit charge.'
  },
];
