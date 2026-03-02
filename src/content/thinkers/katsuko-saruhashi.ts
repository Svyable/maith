import type { Question } from '../types';

export const katsukoSaruhashiQuestions: Question[] = [
  {
    id: 20508,
    topic: 'katsuko-saruhashi',
    difficulty: 'hard',
    question: 'Katsuko Saruhashi developed a method for measuring CO₂ in seawater. Her technique measured which chemical equilibrium in the ocean?',
    options: ['The carbonate buffer system ($\\text{CO}_2 \\leftrightarrow \\text{HCO}_3^- \\leftrightarrow \\text{CO}_3^{2-}$)', 'Dissolved oxygen concentration', 'Salinity via chloride titration', 'Nitrogen fixation rates'],
    correctIndex: 0,
    explanation: 'She quantified how CO₂ dissolves in seawater and equilibrates with bicarbonate and carbonate ions — the ocean\'s primary pH buffer system.',
    realWorld: 'Her methods are foundational to modern ocean acidification research — the "other CO₂ problem" threatening coral reefs worldwide.',
    hint: 'CO₂ dissolves in water and forms a series of carbonate species.',
  },
  {
    id: 20509,
    topic: 'katsuko-saruhashi',
    difficulty: 'sota',
    question: 'Saruhashi\'s tracking of radioactive fallout (particularly $^{90}\\text{Sr}$) in Pacific seawater helped demonstrate which oceanographic phenomenon?',
    options: ['Global ocean circulation connects all basins within decades', 'The ocean floor is geologically static', 'Radioactive elements sink to the ocean floor immediately', 'Pacific currents are isolated from Atlantic circulation'],
    correctIndex: 0,
    explanation: 'By tracing how fallout from Pacific nuclear tests spread globally, she proved the deep interconnection of ocean basins via thermohaline circulation.',
    realWorld: 'Her data contributed to the political pressure that led to the 1963 Partial Nuclear Test Ban Treaty.',
    hint: 'Radioactive tracers showed that contamination doesn\'t stay local — the oceans mix on decadal timescales.',
  },
  {
    id: 20510,
    topic: 'katsuko-saruhashi',
    difficulty: 'easy',
    question: 'Saruhashi\'s research on radioactive fallout helped lead to which major international treaty?',
    options: ['The 1963 Partial Nuclear Test Ban Treaty', 'The Paris Climate Agreement', 'The Montreal Protocol', 'The Antarctic Treaty'],
    correctIndex: 0,
    explanation: 'Her meticulous data on oceanic radioactive contamination provided scientific evidence that forced the US and USSR to ban atmospheric nuclear testing.',
    realWorld: 'She demonstrated that science can directly drive global policy change.',
    hint: 'It banned nuclear weapons tests in the atmosphere, outer space, and underwater.',
  },
];
