import type { GlossaryTerm } from './types';

export const biologyTerms: GlossaryTerm[] = [
  { id: 'crispr', field: 'biology', term: 'CRISPR-Cas9', definition: 'A gene-editing tool that uses a guide RNA to direct the Cas9 enzyme to cut DNA at a precise location, enabling targeted genetic modifications.', example: 'Used to develop disease-resistant crops and experimental gene therapies.' },
  { id: 'mitosis', field: 'biology', term: 'Mitosis', definition: 'Cell division producing two genetically identical daughter cells, each with the same chromosome count as the parent.', example: 'Wound healing relies on mitosis to replace damaged cells.' },
  { id: 'natural-selection', field: 'biology', term: 'Natural Selection', definition: 'The process by which organisms with traits better suited to their environment tend to survive and reproduce more successfully.', example: 'Antibiotic-resistant bacteria emerge through natural selection.' },
  { id: 'homeostasis', field: 'biology', term: 'Homeostasis', definition: 'The tendency of biological systems to maintain stable internal conditions (temperature, pH, glucose) despite external changes.', example: 'Sweating cools the body to maintain a core temperature of ~37°C.' },
  { id: 'central-dogma', field: 'biology', term: 'Central Dogma', definition: 'The flow of genetic information: DNA → (transcription) → RNA → (translation) → Protein. Information flows one direction.', example: 'mRNA vaccines work by providing the RNA step directly.' },
  { id: 'atp', field: 'biology', term: 'ATP (Adenosine Triphosphate)', definition: 'The primary energy currency of cells. Hydrolysis of ATP to ADP releases energy that powers cellular processes.', example: 'Muscle contraction requires ATP for every cross-bridge cycle.' },
  { id: 'enzyme', field: 'biology', term: 'Enzyme', definition: 'A biological catalyst (usually a protein) that accelerates chemical reactions by lowering activation energy without being consumed.', example: 'Lactase breaks down lactose; people without it are lactose intolerant.' },
  {
    id: 'endosymbiosis', field: 'biology', topic: 'cell-biology',
    term: 'Endosymbiosis',
    definition: 'The theory that mitochondria and chloroplasts originated as free-living bacteria engulfed by ancestral eukaryotic cells, forming a permanent mutualistic relationship.',
    example: 'Mitochondria retain their own circular DNA and 70S ribosomes — relics of their bacterial past.',
    thinkerLinks: ['ivan-wallin', 'lynn-margulis'],
    related: ['mitosis', 'natural-selection'],
    difficulty: 'intro',
  },
  {
    id: 'mitochondria', field: 'biology', topic: 'cell-biology',
    term: 'Mitochondria',
    definition: 'Double-membraned organelles that produce ATP via oxidative phosphorylation. They possess their own genome (~16.5 kb in humans) of alpha-proteobacterial origin.',
    formula: '$\\text{NADH} + \\text{O}_2 \\xrightarrow{\\text{ETC}} \\text{ATP} + \\text{H}_2\\text{O}$',
    example: 'A single human cell contains 1,000–2,000 mitochondria; muscle cells have even more.',
    thinkerLinks: ['ivan-wallin', 'lynn-margulis'],
    related: ['endosymbiosis', 'atp'],
    difficulty: 'intro',
  },
];
