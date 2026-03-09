import type { Question } from '../types';

export const lehnCramPedersenQuestions: Question[] = [
  {
    id: 22801, topic: 'lehn-cram-pedersen', difficulty: 'easy',
    question: 'Charles Pedersen discovered crown ethers in 1967. Crown ethers are cyclic polyethers that selectively bind:',
    options: ['Metal cations — with selectivity determined by matching the ion\'s radius to the cavity size of the ring', 'Anions through hydrogen bonding', 'Neutral organic molecules by hydrophobic effect', 'Only transition metals via coordinate bonds'],
    correctIndex: 0,
    explanation: 'Crown ethers like 18-crown-6 have oxygen atoms pointing inward, creating a cavity that perfectly fits K⁺ (ionic radius 1.38 Å matches the 1.3–1.6 Å cavity). Na⁺ is too small, Cs⁺ too large — hence size selectivity.',
    realWorld: 'Crown ethers are used in phase-transfer catalysis, ion-selective electrodes, and nuclear waste processing (separating radioactive cesium).',
    hint: 'The name "18-crown-6" means 18 atoms in the ring, 6 of which are oxygen — and the cavity fits potassium perfectly.',
  },
  {
    id: 22802, topic: 'lehn-cram-pedersen', difficulty: 'hard',
    question: 'Jean-Marie Lehn extended Pedersen\'s work by creating cryptands — three-dimensional cage molecules. His [2.2.2]cryptand binds K⁺ with much higher affinity than 18-crown-6 because:',
    options: ['The 3D cage encapsulates the cation completely (cryptate effect), providing more binding contacts and desolvation than a 2D ring', 'It uses covalent bonds to the metal', 'It is smaller than 18-crown-6', 'It only binds in non-polar solvents'],
    correctIndex: 0,
    explanation: 'Cryptands wrap around the cation in three dimensions, providing 6-8 oxygen/nitrogen donors that completely desolvate the ion. This "cryptate effect" gives binding constants 10,000× higher than the analogous crown ether.',
    realWorld: 'Lehn\'s work on molecular recognition founded supramolecular chemistry — "chemistry beyond the molecule" — with applications in sensors, drug delivery, and self-assembling materials.',
    hint: 'A 3D cage captures the guest more completely than a 2D ring — like a baseball glove vs. a flat plate.',
  },
  {
    id: 22803, topic: 'lehn-cram-pedersen', difficulty: 'sota',
    question: 'Donald Cram formulated the principle of "preorganization," which states:',
    options: ['The most effective hosts are those that are pre-shaped to complement the guest, minimizing the entropic cost of reorganization upon binding', 'Hosts should be as flexible as possible to accommodate any guest', 'Preorganization refers to crystallizing the host before adding guest', 'The guest must be organized before encountering the host'],
    correctIndex: 0,
    explanation: 'Cram showed that rigid, preorganized hosts (like spherands) bind guests millions of times more strongly than flexible analogues because they don\'t pay an entropic penalty for conformational change upon binding. This is a quantitative expression of the lock-and-key principle.',
    realWorld: 'Preorganization is the guiding principle of modern drug design — rigid drug molecules that are pre-shaped for the binding site have higher potency and selectivity.',
    hint: 'Paying an entropic cost to reorganize upon binding weakens the interaction. Pre-shaped hosts avoid this penalty.',
  },
];
