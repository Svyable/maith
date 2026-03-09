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
    explanation: 'In 1983, Barré-Sinoussi isolated a retrovirus from a patient\'s lymph node at the Pasteur Institute. She demonstrated reverse transcriptase activity and budding viral particles by electron microscopy, proving a retrovirus was the cause of AIDS. The virus was initially called LAV before being renamed HIV.',
    realWorld: 'Her discovery enabled the development of HIV blood tests, antiretroviral therapy (ART), and prevention strategies like PrEP that have transformed HIV from a death sentence into a manageable chronic condition.',
    hint: 'She found the retrovirus that destroys the immune system — the cause of a devastating 1980s epidemic.',
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
    explanation: 'Barré-Sinoussi detected reverse transcriptase activity in her cell cultures — the hallmark of retroviruses. RT first synthesizes a complementary DNA strand from the RNA template (RNA-dependent DNA polymerase activity), then its RNase H domain degrades the RNA, and RT synthesizes the second DNA strand. The resulting proviral DNA integrates into the host genome via integrase.',
    realWorld: 'RT is the target of nucleoside (AZT, tenofovir) and non-nucleoside (efavirenz, rilpivirine) reverse transcriptase inhibitors — the backbone of HIV antiretroviral therapy.',
    hint: 'This enzyme does the "reverse" of normal biology — making DNA from an RNA template.',
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
    explanation: 'Unlike DNA polymerases, HIV RT has no proofreading capability. The error rate of ~$3 \\times 10^{-5}$/base/cycle means each new virion carries ~0.3 mutations. With $10^{9}$–$10^{10}$ virions produced daily, the virus explores its entire mutational landscape every day, enabling rapid escape from immune responses and drug resistance.',
    realWorld: 'This is why HIV treatment requires combination therapy (≥3 drugs targeting different enzymes) — single-drug therapy selects resistant mutants within weeks. It also explains why an HIV vaccine remains elusive after 40 years.',
    hint: 'The enzyme that copies the viral genome has no "spell-checker" — so billions of slightly different viruses are made every day.',
  },
];
