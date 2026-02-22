import type { Question } from '../types';

export const rosalindFranklinQuestions: Question[] = [
  {
    id: 96031, topic: 'rosalind-franklin', difficulty: 'easy',
    question: 'Rosalind Franklin\'s "Photo 51" revealed that DNA has what structure?',
    options: ['A double helix with regular repeating units', 'A single straight chain', 'A triple helix', 'A branching tree structure'],
    correctIndex: 0,
    explanation: 'Photo 51, an X-ray diffraction image of DNA, showed the characteristic X-shaped pattern indicating a helical structure with specific dimensions — confirming the double helix.',
    realWorld: 'Watson and Crick used this data (without Franklin\'s explicit consent) to build their famous DNA model in 1953, one of biology\'s greatest discoveries.',
    hint: 'The X-pattern in X-ray diffraction is the signature of a helix.',
  },
  {
    id: 96032, topic: 'rosalind-franklin', difficulty: 'hard',
    question: 'X-ray crystallography, Franklin\'s technique, determines molecular structure by analyzing:',
    options: ['Diffraction patterns produced when X-rays scatter off a crystal lattice', 'The color of light absorbed by molecules', 'Magnetic resonance of atomic nuclei', 'Electron emission from heated samples'],
    correctIndex: 0,
    explanation: 'X-rays have wavelengths comparable to atomic spacing (~1 Å). When they scatter off atoms in a crystal, they create interference patterns that encode the 3D positions of every atom.',
    realWorld: 'X-ray crystallography has determined the structures of >170,000 proteins in the PDB, enabling drug design for diseases from HIV to COVID-19.',
    hint: 'The wavelength must match the scale of what you\'re measuring.',
  },
  {
    id: 96033, topic: 'rosalind-franklin', difficulty: 'sota',
    question: 'Franklin\'s work on tobacco mosaic virus (TMV) demonstrated that:',
    options: ['The viral RNA is embedded within a hollow protein helix, not at the center', 'Viruses are made entirely of protein with no nucleic acid', 'TMV has an icosahedral (spherical) shape', 'Viruses cannot crystallize'],
    correctIndex: 0,
    explanation: 'Franklin showed TMV has a hollow rod structure with RNA threaded through the protein subunits in a helix — overturning the prior model that placed RNA at the core.',
    realWorld: 'Her structural virology work laid foundations for understanding viral assembly, relevant to modern mRNA vaccine design and virus-based nanotechnology.',
    hint: 'The genetic material isn\'t at the center of the tube — it\'s woven through the wall.',
  },
];
