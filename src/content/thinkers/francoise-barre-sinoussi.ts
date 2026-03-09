import type { Question } from '../types';

export const francoiseBarreSinoussiQuestions: Question[] = [
  {
    id: 31520, topic: 'francoise-barre-sinoussi', difficulty: 'easy',
    question: 'Françoise Barré-Sinoussi shared the 2008 Nobel Prize for the discovery of which virus?',
    options: [
      'Human Immunodeficiency Virus (HIV) — the retrovirus that causes AIDS, identified from a lymph node biopsy of a patient with lymphadenopathy in 1983.',
      'Hepatitis C virus (HCV) — the blood-borne flavivirus responsible for chronic liver disease and cirrhosis.',
      'Human papillomavirus (HPV) — the DNA virus that causes cervical cancer and genital warts.',
      'Ebola virus — the filovirus causing hemorrhagic fever outbreaks in Central and West Africa.'
    ],
    correctIndex: 0,
    explanation: 'In 1983, Barré-Sinoussi isolated a retrovirus from a patient\'s lymph node at the Pasteur Institute. She demonstrated reverse transcriptase activity and budding viral particles by electron microscopy. HIV\'s basic reproduction number $R_0 \\approx 2\\text{–}5$ (sexual transmission) means each infected person infects 2–5 others without intervention. Viral load dynamics follow: $$V(t) = V_0 \\, e^{(p/\\delta - c)t}$$ where $p$ = viral production rate, $\\delta$ = infected-cell death rate, and $c$ = viral clearance rate.',
    realWorld: 'Her discovery enabled the development of HIV blood tests, antiretroviral therapy (ART), and prevention strategies like PrEP that have transformed HIV from a death sentence into a manageable chronic condition.',
    hint: 'She found the retrovirus that destroys the immune system — the cause of a devastating 1980s epidemic.',
    formulaLinks: ['sir-model'],
  },
  {
    id: 31521, topic: 'francoise-barre-sinoussi', difficulty: 'hard',
    question: 'Barré-Sinoussi identified HIV as a retrovirus by detecting a key enzyme. What enzyme defines retroviruses and what reaction does it catalyze?',
    options: [
      'Reverse transcriptase — it synthesizes double-stranded DNA from the viral single-stranded RNA genome: $\\text{ssRNA} \\xrightarrow{\\text{RT}} \\text{RNA:DNA} \\xrightarrow{\\text{RNase H + RT}} \\text{dsDNA}$, which then integrates into the host genome.',
      'RNA-dependent RNA polymerase (RdRp) — it replicates the viral RNA genome directly without a DNA intermediate.',
      'Integrase — it inserts the viral protein coat directly into the host cell membrane, enabling cell-to-cell spread.',
      'Protease — it cleaves host cell proteins to create space for viral genome replication in the cytoplasm.'
    ],
    correctIndex: 0,
    explanation: 'Barré-Sinoussi detected reverse transcriptase activity — the hallmark of retroviruses. RT catalyzes: $$\\text{ssRNA} \\xrightarrow[k_{\\text{pol}}]{\\text{RT}} \\text{RNA:DNA} \\xrightarrow{\\text{RNase H}} \\text{ssDNA} \\xrightarrow{\\text{RT}} \\text{dsDNA}$$ The polymerization rate $k_{\\text{pol}} \\approx 1\\text{–}10$ nt/s with fidelity $\\sim 10^{4}$ (no proofreading). Drug inhibition follows: $$\\text{IC}_{50} = K_i \\left(1 + \\frac{[S]}{K_m}\\right)$$ for competitive inhibitors like tenofovir.',
    realWorld: 'RT is the target of nucleoside (AZT, tenofovir) and non-nucleoside (efavirenz, rilpivirine) reverse transcriptase inhibitors — the backbone of HIV antiretroviral therapy.',
    hint: 'This enzyme does the "reverse" of normal biology — making DNA from an RNA template.',
    formulaLinks: ['michaelis-menten'],
  },
  {
    id: 31522, topic: 'francoise-barre-sinoussi', difficulty: 'sota',
    question: 'HIV\'s extraordinary mutation rate enables immune evasion. What is the molecular basis of HIV\'s high mutation rate, and what is its approximate value?',
    options: [
      'HIV reverse transcriptase lacks 3\'→5\' proofreading exonuclease activity, yielding a mutation rate of ~$3 \\times 10^{-5}$ per base per replication cycle. With a ~9.7 kb genome and ~$10^{10}$ virions produced daily, every possible single point mutation is generated every day in a patient.',
      'HIV RNA polymerase operates at ~$10^{-2}$ errors per base, but host APOBEC3G corrects 99.9% of mutations, leaving a net rate of ~$10^{-5}$ per base.',
      'HIV integrase introduces random insertions during proviral integration at a rate of ~1 insertion per 100 integration events, generating mosaic genomes.',
      'HIV protease makes random cleavage errors in ~$10^{-3}$ of polyprotein processing events, generating truncated proteins that mimic antigenic variation.'
    ],
    correctIndex: 0,
    explanation: 'Unlike DNA polymerases, HIV RT has no proofreading capability. The mutation rate $\\mu \\approx 3 \\times 10^{-5}$/base/cycle means each new virion carries $\\mu \\cdot L \\approx 0.3$ mutations (genome $L = 9.7$ kb). With $N \\approx 10^{10}$ virions/day, the probability of any single point mutation existing is: $$P(\\text{mutation at site } i) = 1 - (1 - \\mu)^N \\approx 1$$ The virus explores its entire single-mutant landscape daily, enabling rapid immune escape.',
    realWorld: 'This is why HIV treatment requires combination therapy (≥3 drugs targeting different enzymes) — single-drug therapy selects resistant mutants within weeks. It also explains why an HIV vaccine remains elusive after 40 years.',
    hint: 'The enzyme that copies the viral genome has no "spell-checker" — so billions of slightly different viruses are made every day.',
    formulaLinks: ['probability'],
  },
];
