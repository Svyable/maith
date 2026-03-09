// Additional deeper questions for Jennifer Doudna (supplements existing file)
// These are imported separately and appended

import type { Question } from '../types';

export const jenniferDoudnaExpandedQuestions: Question[] = [
  {
    id: 31640, topic: 'jennifer-doudna', difficulty: 'hard',
    question: 'CRISPR-Cas9 uses a guide RNA to target specific DNA sequences. What is the "PAM" requirement and why is it essential?',
    options: [
      'The Protospacer Adjacent Motif (PAM) is a short sequence (NGG for SpCas9) immediately downstream of the target on the non-target strand. Cas9 first scans for the PAM before interrogating the guide RNA:DNA match — PAM recognition is required to trigger R-loop formation and cleavage.',
      'PAM (Post-Activation Modifier) is a chemical modification added to the guide RNA after Cas9 binding that activates the nuclease domains.',
      'PAM (Paired Alignment Motif) is a secondary structure in the guide RNA that forms a stem-loop required for Cas9 loading.',
      'PAM (Proximal Anchoring Mechanism) is a protein domain on Cas9 that physically tethers the enzyme to the nuclear lamina before target search.'
    ],
    correctIndex: 0,
    explanation: 'Cas9 uses PAM recognition as a "license" to begin unwinding DNA. The PAM-interacting domain (PID) of Cas9 contacts the PAM on the non-target strand, triggering local DNA melting. The guide RNA then base-pairs with the target strand, forming an R-loop. If complementarity extends ~20 nt, the HNH and RuvC nuclease domains cleave both strands, creating a double-strand break.',
    realWorld: 'The PAM requirement limits Cas9 to ~1/8 of possible genomic targets. Alternative Cas proteins (Cas12a/Cpf1, Cas9 variants like xCas9) have different PAM requirements, expanding the targetable genome.',
    hint: 'A 2–3 letter "password" next to the target that the enzyme checks before it starts cutting.',
  },
  {
    id: 31641, topic: 'jennifer-doudna', difficulty: 'sota',
    question: 'Base editors and prime editors extend CRISPR beyond double-strand breaks. What is a prime editor and how does it work?',
    options: [
      'A Cas9 nickase fused to a reverse transcriptase, guided by a "pegRNA" that contains both the target-matching spacer and a 3\' extension encoding the desired edit. The nickase cuts one strand, RT copies the edit template into the target, and cellular repair incorporates the change — enabling all 12 point mutations, small insertions, and deletions without double-strand breaks.',
      'A catalytically dead Cas9 fused to a cytidine deaminase that converts C→T (or G→A on the complementary strand) within a ~5-nt editing window without cutting DNA.',
      'A Cas13-based RNA editor that deaminates adenosine to inosine (read as guanosine) in mRNA transcripts, enabling reversible A→G editing without altering DNA.',
      'A zinc finger nuclease-Cas9 hybrid that uses protein-DNA recognition instead of guide RNA, achieving higher specificity through dual recognition.'
    ],
    correctIndex: 0,
    explanation: 'Prime editing (Anzalone et al., 2019) uses a Cas9 H840A nickase fused to an engineered M-MLV reverse transcriptase. The pegRNA specifies both target recognition and the desired edit in a 3\' extension. After nicking, the 3\' flap hybridizes to the pegRNA template, RT synthesizes new DNA encoding the edit, and cellular 5\' flap excision and ligation install the change. No donor DNA template or double-strand breaks needed.',
    realWorld: 'Prime editing can correct ~89% of known pathogenic human mutations. It\'s being developed for sickle cell disease, progeria, and Tay-Sachs disease without the indel byproducts of standard CRISPR.',
    hint: 'A "search-and-replace" editor: nick one strand, reverse-transcribe the correction from the guide RNA itself.',
  },
];
