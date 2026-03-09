import type { Question } from '../types';

export const jacobusVanTHoffQuestions: Question[] = [
  {
    id: 50016,
    topic: 'jacobus-van-t-hoff',
    difficulty: 'easy',
    question: 'Jacobus van \'t Hoff won the very first Nobel Prize in Chemistry (1901). What foundational concept did he introduce to organic chemistry?',
    options: [
      'The tetrahedral carbon atom — explaining why carbon forms four bonds directed toward the corners of a tetrahedron, giving rise to stereoisomers',
      'The periodic table of elements',
      'The concept of electron orbitals and quantum numbers',
      'The discovery of radioactivity in carbon isotopes'
    ],
    correctIndex: 0,
    explanation: 'In 1874, van \'t Hoff (independently of Le Bel) proposed that the four bonds of carbon are directed tetrahedrally, explaining optical isomerism. A carbon with four different substituents is chiral, producing non-superimposable mirror images that rotate plane-polarized light in opposite directions.',
    realWorld: 'This insight is the foundation of stereochemistry — essential in drug design, where the wrong enantiomer of a chiral drug can be inactive or toxic (e.g., thalidomide).',
    hint: 'He explained why some molecules can exist as mirror-image pairs by considering 3D geometry.'
  },
  {
    id: 50017,
    topic: 'jacobus-van-t-hoff',
    difficulty: 'hard',
    question: 'The van \'t Hoff equation describes how the equilibrium constant $K$ varies with temperature. Which expression is correct?',
    options: [
      '$\\dfrac{d \\ln K}{dT} = \\dfrac{\\Delta H^\\circ}{RT^2}$',
      '$\\dfrac{d K}{dT} = \\dfrac{\\Delta S^\\circ}{R}$',
      '$K = e^{\\Delta G / RT}$, independent of temperature',
      '$\\ln K = -\\Delta H^\\circ \\cdot T$'
    ],
    correctIndex: 0,
    explanation: 'The van \'t Hoff equation:\n$$\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$$\nshows that for endothermic reactions ($\\Delta H^\\circ > 0$), $K$ increases with temperature, and for exothermic reactions, $K$ decreases. Integrating gives the linearized form: $\\ln K = -\\Delta H^\\circ/RT + \\Delta S^\\circ/R$.',
    realWorld: 'Chemical engineers use van \'t Hoff plots ($\\ln K$ vs $1/T$) to extract thermodynamic parameters and optimize reaction conditions in industrial processes.',
    hint: 'It connects the temperature dependence of equilibrium to the enthalpy of reaction.'
  },
  {
    id: 50018,
    topic: 'jacobus-van-t-hoff',
    difficulty: 'sota',
    question: 'Van \'t Hoff also established the law of osmotic pressure for dilute solutions. His equation $\\Pi V = nRT$ is formally analogous to:',
    options: [
      'The ideal gas law, suggesting dissolved solute particles exert "pressure" analogously to gas molecules',
      'Ohm\'s law ($V = IR$) in electrical circuits',
      'Newton\'s law of gravitation ($F = GMm/r^2$)',
      'The wave equation ($v = f\\lambda$) for sound'
    ],
    correctIndex: 0,
    explanation: 'Van \'t Hoff showed that osmotic pressure $\\Pi$ for dilute solutions obeys $\\Pi = cRT$ (where $c = n/V$ is molar concentration), mathematically identical to the ideal gas law. For electrolytes, he introduced the van \'t Hoff factor $i$ to account for dissociation:\n$$\\Pi = iMRT.$$',
    realWorld: 'Osmotic pressure is critical in biology (cell turgor, kidney filtration), water desalination (reverse osmosis), and pharmaceutical IV fluid formulation.',
    hint: 'His osmotic pressure formula looks exactly like $PV = nRT$ — a beautiful analogy between solutions and gases.'
  }
];
