import type { Question } from '../types';

export const elizabethBlackburnQuestions: Question[] = [
  {
    id: 31510, topic: 'elizabeth-blackburn', difficulty: 'easy',
    question: 'Elizabeth Blackburn shared the 2009 Nobel Prize for discovering telomerase. What are telomeres and why do they matter?',
    options: [
      'Repetitive DNA sequences (TTAGGG in humans) capping chromosome ends that protect against degradation and fusion. They shorten with each cell division, acting as a biological clock for cellular aging.',
      'Protein complexes that hold sister chromatids together during mitosis, ensuring equal chromosome segregation to daughter cells.',
      'Methylation marks on histone H3K27 that silence developmental genes in stem cells, maintaining pluripotency.',
      'Ribosomal RNA gene clusters located at chromosome tips that increase protein synthesis capacity in rapidly dividing cells.'
    ],
    correctIndex: 0,
    explanation: 'Blackburn discovered the telomeric repeat sequence TTGGGG in Tetrahymena (TTAGGG in humans). Telomeres solve the "end-replication problem" — DNA polymerase cannot fully replicate chromosome ends, so telomeres act as sacrificial buffers. Telomere length after $n$ divisions follows: $$L_n = L_0 - n \\cdot \\delta$$ where $L_0 \\approx 10\\text{–}15$ kb at birth and $\\delta \\approx 50\\text{–}200$ bp/division. The Hayflick limit is reached when $L_n < L_{\\text{crit}} \\approx 4\\text{–}6$ kb.',
    realWorld: 'Short telomeres are linked to aging, cardiovascular disease, and cancer risk. Telomere length is now a biomarker studied in longevity research and stress biology.',
    hint: 'Think of the plastic tips on shoelaces — they protect the ends from fraying.',
    formulaLinks: ['linear-decay'],
  },
  {
    id: 31511, topic: 'elizabeth-blackburn', difficulty: 'hard',
    question: 'Blackburn and Carol Greider discovered telomerase, the enzyme that maintains telomere length. What is telomerase\'s unique biochemical mechanism?',
    options: [
      'Telomerase is a ribonucleoprotein reverse transcriptase: its RNA component (TERC) contains a template sequence that the catalytic subunit (TERT) uses to synthesize telomeric DNA repeats onto chromosome 3\' ends, extending them against the normal shortening.',
      'Telomerase is a DNA ligase that joins pre-formed TTAGGG oligonucleotides onto chromosome ends using ATP-dependent phosphodiester bond formation.',
      'Telomerase is a helicase that unwinds the telomeric G-quadruplex structure, allowing standard DNA polymerase to complete replication of the lagging strand.',
      'Telomerase is a histone acetyltransferase that opens chromatin at chromosome ends, permitting access by recombination enzymes that extend telomeres via the ALT pathway.'
    ],
    correctIndex: 0,
    explanation: 'Telomerase carries its own RNA template (TERC, ~451 nt in humans) and uses its TERT catalytic subunit to reverse-transcribe telomeric repeats: $$\\text{3\'-overhang} + n \\cdot \\text{dNTP} \\xrightarrow{\\text{TERT/TERC}} \\text{(TTAGGG)}_n$$ The processivity follows Michaelis-Menten kinetics: $v = \\frac{V_{\\max}[\\text{dNTP}]}{K_m + [\\text{dNTP}]}$ with $K_m \\approx 1\\text{–}5\\ \\mu\\text{M}$ for telomerase.',
    realWorld: '~90% of human cancers reactivate telomerase to achieve replicative immortality. Telomerase inhibitors (e.g., imetelstat) are in clinical trials for myelodysplastic syndromes and other cancers.',
    hint: 'It carries its own RNA template and works like a reverse transcriptase — building DNA from an RNA blueprint.',
    formulaLinks: ['michaelis-menten'],
  },
  {
    id: 31512, topic: 'elizabeth-blackburn', difficulty: 'sota',
    question: 'The "end-replication problem" that telomerase solves arises from a fundamental limitation of DNA polymerase. What is the precise molecular basis of this problem?',
    options: [
      'DNA polymerase requires an RNA primer and synthesizes only 5\'→3\'. After the terminal RNA primer on the lagging strand is removed, no upstream primer exists to fill the gap, causing progressive 3\' overhang shortening of ~50–200 bp per division: $L_n = L_0 - n \\cdot \\delta$.',
      'DNA polymerase cannot replicate through G-quadruplex structures that form at telomeres, stalling the replication fork and causing double-strand breaks.',
      'DNA polymerase has a proofreading exonuclease that degrades the last ~200 bp of each chromosome end after replication, mistaking it for damaged DNA.',
      'DNA polymerase dissociates from the template at chromosome ends due to loss of the sliding clamp (PCNA), which requires a circular DNA topology to remain loaded.'
    ],
    correctIndex: 0,
    explanation: 'The leading strand can be replicated to the very end, but the lagging strand uses discontinuous Okazaki fragments, each requiring an RNA primer. When the final RNA primer at the chromosome terminus is removed, DNA polymerase has no upstream primer to fill the gap. The net loss per division: $$\\Delta L = l_{\\text{primer}} + l_{\\text{processing}} \\approx 50\\text{–}200\\text{ bp}$$ The Hayflick limit $N_{\\max}$ is: $$N_{\\max} = \\frac{L_0 - L_{\\text{crit}}}{\\Delta L} \\approx \\frac{10000 - 5000}{100} = 50\\text{ divisions}$$',
    realWorld: 'This is why somatic cells have a finite replicative lifespan (Hayflick limit, ~50–70 divisions). Stem cells and germ cells express telomerase to maintain telomere length across generations.',
    hint: 'The lagging strand needs RNA primers — but there\'s nothing upstream of the very last primer to fill the gap it leaves behind.',
    formulaLinks: ['linear-decay', 'michaelis-menten'],
  },
];
