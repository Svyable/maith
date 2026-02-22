import type { GlossaryTerm } from './types';

export const chemistryTerms: GlossaryTerm[] = [
  { id: 'mole', field: 'chemistry', term: 'Mole', definition: 'A unit representing $6.022 \\times 10^{23}$ entities (Avogadro\'s number). Bridges atomic-scale masses to laboratory-scale quantities.', example: 'One mole of water weighs about 18 grams.' },
  { id: 'pH', field: 'chemistry', term: 'pH', definition: 'Negative log of hydrogen ion concentration: $pH = -\\log[H^+]$. Scale from 0 (strong acid) to 14 (strong base), with 7 neutral.', example: 'Human blood is tightly regulated at pH 7.35–7.45.' },
  { id: 'covalent-bond', field: 'chemistry', term: 'Covalent Bond', definition: 'A chemical bond formed when two atoms share one or more pairs of electrons, typically between non-metals.', example: 'Water (H₂O) has two covalent bonds between oxygen and hydrogen.' },
  { id: 'oxidation-reduction', field: 'chemistry', term: 'Redox Reaction', definition: 'A reaction where one species loses electrons (oxidation) and another gains them (reduction). They always occur together.', example: 'Rusting is iron being oxidised; batteries work via redox reactions.' },
  { id: 'catalyst-chem', field: 'chemistry', term: 'Catalyst', definition: 'A substance that increases reaction rate by providing an alternative pathway with lower activation energy, without being consumed.', example: 'Catalytic converters in cars use platinum to reduce exhaust emissions.' },
  { id: 'electronegativity', field: 'chemistry', term: 'Electronegativity', definition: 'A measure of an atom\'s ability to attract shared electrons in a chemical bond. Fluorine is the most electronegative element.', example: 'The difference in electronegativity between O and H makes water polar.' },
];
