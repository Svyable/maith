import type { Question } from '../types';

export const heegerMacdiarmidShirakawaQuestions: Question[] = [
  {
    id: 22301, topic: 'heeger-macdiarmid-shirakawa', difficulty: 'easy',
    question: 'Alan Heeger, Alan MacDiarmid, and Hideki Shirakawa shared the 2000 Nobel Prize for discovering that:',
    options: ['Polymers (plastics) can be made to conduct electricity like metals when chemically doped', 'All plastics are inherently conductive', 'Only inorganic materials can conduct electricity', 'Polymers can only be insulators'],
    correctIndex: 0,
    explanation: 'Shirakawa synthesized polyacetylene films; MacDiarmid and Heeger showed that exposing them to iodine vapor (oxidative doping) increased conductivity by a billion-fold — from insulator to near-metallic conductor.',
    realWorld: 'Conducting polymers enable OLED displays (in every smartphone), organic solar cells, flexible electronics, and artificial muscles.',
    hint: 'Plastics were thought to be permanent insulators — until chemical doping changed everything.',
  },
  {
    id: 22302, topic: 'heeger-macdiarmid-shirakawa', difficulty: 'hard',
    question: 'Polyacetylene conducts electricity when doped because:',
    options: ['Its conjugated π-electron backbone allows charge carriers (polarons/solitons) to move along the polymer chain', 'Free metal atoms are embedded in the polymer matrix', 'Doping introduces free protons that carry current', 'The polymer becomes ionic and conducts through ion migration'],
    correctIndex: 0,
    explanation: 'Polyacetylene has alternating single and double bonds (conjugation). Oxidative doping removes electrons, creating mobile charge carriers (polarons/solitons) that propagate along the conjugated backbone — analogous to holes in semiconductor physics.',
    realWorld: 'Understanding polaron transport led to the design of PEDOT:PSS, the most commercially successful conducting polymer, used in touchscreens and anti-static coatings.',
    hint: 'Conjugated double bonds create a highway for electrons — doping adds or removes travelers on that highway.',
  },
  {
    id: 22303, topic: 'heeger-macdiarmid-shirakawa', difficulty: 'sota',
    question: 'The band gap of a conjugated polymer determines its optical and electronic properties. For polyacetylene, the Peierls distortion:',
    options: ['Opens a band gap by dimerizing the chain into alternating long and short bonds, making undoped polyacetylene a semiconductor', 'Closes the band gap, making it a metal', 'Has no effect on the band structure', 'Only affects the mechanical properties'],
    correctIndex: 0,
    explanation: 'The Peierls theorem predicts that a 1D metallic chain is unstable — it will spontaneously dimerize, opening a gap at the Fermi level. In polyacetylene, this gives alternating bond lengths (1.36 Å vs 1.44 Å) and a ~1.5 eV band gap.',
    realWorld: 'Band gap engineering of conjugated polymers is the basis for organic electronics — tuning the gap controls whether a polymer absorbs visible light (solar cells), emits light (OLEDs), or conducts (transparent electrodes).',
    hint: 'A perfectly uniform 1D chain would be metallic, but structural distortion opens a gap — Rudolf Peierls showed this is always energetically favorable.',
  },
];
