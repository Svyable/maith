import type { Question } from '../types';

export const jamesLovelockQuestions: Question[] = [
  {
    id: 22701, topic: 'james-lovelock', difficulty: 'easy',
    question: 'James Lovelock invented the electron capture detector (ECD), which is extraordinarily sensitive to:',
    options: ['Halogenated compounds (like CFCs) at parts-per-trillion concentrations', 'Noble gases only', 'Metals in solution', 'Radioactive isotopes exclusively'],
    correctIndex: 0,
    explanation: 'The ECD uses a radioactive β-source to ionize a carrier gas. Electron-capturing compounds (especially halogenated organics) absorb these electrons, reducing the current. The ECD can detect some compounds at femtogram levels.',
    realWorld: 'The ECD enabled discovery of global CFC pollution, pesticide residues in food, and PCBs in the environment — directly leading to the Montreal Protocol banning CFCs.',
    hint: 'Compounds with high electron affinity (like those containing chlorine, fluorine) steal electrons from the detector.',
  },
  {
    id: 22702, topic: 'james-lovelock', difficulty: 'hard',
    question: 'Lovelock\'s Gaia hypothesis proposes that:',
    options: ['Earth\'s biosphere, atmosphere, oceans, and geology form a self-regulating system that maintains conditions suitable for life', 'Earth is a conscious living organism', 'Life has no effect on atmospheric composition', 'Earth\'s climate is entirely controlled by volcanic activity'],
    correctIndex: 0,
    explanation: 'Gaia theory (developed with Lynn Margulis) proposes that biological and geological processes are coupled through feedback loops that regulate atmospheric composition, ocean salinity, and surface temperature within habitable bounds.',
    realWorld: 'Earth system science — now a mainstream discipline — owes much to Lovelock\'s insight. Climate models that couple biology, chemistry, and physics are essentially formalizations of Gaia.',
    hint: 'Life doesn\'t just passively inhabit Earth — it actively modifies conditions to maintain habitability.',
  },
  {
    id: 22703, topic: 'james-lovelock', difficulty: 'sota',
    question: 'Lovelock\'s Daisyworld model demonstrates self-regulation through:',
    options: ['A simple albedo feedback: dark daisies warm the planet, white daisies cool it, and their competition maintains temperature homeostasis', 'Volcanic eruption cycles controlled by subsurface organisms', 'Oceanic bacteria that regulate salt concentration', 'Atmospheric fungi that control cloud formation'],
    correctIndex: 0,
    explanation: 'Daisyworld has only two species: black daisies (absorb light, warm locally) and white daisies (reflect light, cool locally). As solar luminosity changes, their population dynamics shift to maintain surface temperature — proving self-regulation emerges without teleology.',
    realWorld: 'Daisyworld showed that planetary-scale homeostasis can emerge from simple local interactions — a profound insight applicable to ecology, economics, and complex systems theory.',
    hint: 'It\'s a thought experiment with only two species and one feedback loop — yet stable temperature emerges.',
  },
];
