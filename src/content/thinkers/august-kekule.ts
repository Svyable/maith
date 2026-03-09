import type { Question } from '../types';

export const augustKekuleQuestions: Question[] = [
  {
    id: 21101, topic: 'august-kekule', difficulty: 'easy',
    question: 'August Kekulé proposed that the structure of benzene ($\\text{C}_6\\text{H}_6$) is:',
    options: ['A planar hexagonal ring of six carbon atoms with alternating single and double bonds', 'A linear chain of six carbons', 'A three-dimensional tetrahedral cage', 'A branched five-carbon chain with one methyl group'],
    correctIndex: 0,
    explanation: 'Kekulé proposed in 1865 that benzene is a six-membered ring with alternating C=C and C–C bonds. This cyclic structure explained benzene\'s unusual stability and 1:1 C:H ratio.',
    realWorld: 'The benzene ring is the most important structural motif in organic chemistry — found in pharmaceuticals, dyes, explosives, and polymers.',
    hint: 'He famously dreamed of a snake biting its own tail — an ouroboros.',
  },
  {
    id: 21102, topic: 'august-kekule', difficulty: 'hard',
    question: 'Modern understanding shows benzene\'s true structure differs from Kekulé\'s alternating bonds because:',
    options: ['The six π electrons are delocalized in a conjugated ring, making all C–C bonds equivalent (bond order 1.5)', 'The ring is actually non-planar', 'The bonds actually alternate but very rapidly', 'Benzene has no π electrons'],
    correctIndex: 0,
    explanation: 'Quantum mechanics reveals that benzene\'s six π electrons occupy delocalized molecular orbitals spanning the entire ring. All C–C bonds are identical at 1.40 Å — intermediate between single (1.54 Å) and double (1.34 Å) bonds.',
    realWorld: 'Delocalization gives benzene its extraordinary thermodynamic stability (36 kcal/mol resonance energy), making aromatic compounds resistant to addition reactions.',
    hint: 'If the bonds truly alternated, we\'d expect two different C–C lengths. X-ray shows only one.',
  },
  {
    id: 21103, topic: 'august-kekule', difficulty: 'sota',
    question: 'Kekulé\'s theory of carbon tetravalence, proposed in 1858, states that carbon atoms can:',
    options: ['Form exactly four bonds and link to each other in chains, establishing the structural basis of organic chemistry', 'Only form ionic bonds with other elements', 'Bond with a maximum of two other atoms', 'Only exist in sp³ hybridization'],
    correctIndex: 0,
    explanation: 'Kekulé independently proposed that carbon is tetravalent and can self-link into chains and rings. This insight, combined with his benzene ring, gave organic chemistry its structural language — enabling systematic classification of millions of compounds.',
    realWorld: 'Carbon\'s ability to form four bonds and catenate is why organic chemistry is so vast — over 100 million known organic compounds vs. ~500,000 inorganic ones.',
    hint: 'Before Kekulé, chemists had no systematic way to represent how atoms connect in organic molecules.',
  },
];
