import type { Question } from '../types';

export const lewisFryRichardsonQuestions: Question[] = [
  {
    id: 9531,
    topic: 'lewis-fry-richardson',
    difficulty: 'sota',
    question: 'Richardson\'s 1922 weather prediction attempt discretized the atmosphere into cells and computed by hand. His forecast failed primarily because:',
    options: [
      'Initial data had small errors that grew explosively due to unfiltered gravity waves',
      'He used the wrong equations of motion',
      'His grid was too coarse to resolve any weather features',
      'He forgot to include the Coriolis effect',
    ],
    correctIndex: 0,
    explanation: 'Richardson\'s primitive equations admitted fast gravity and sound waves alongside the slow meteorological modes. Tiny imbalances in initial data excited these fast modes, producing a wildly wrong 6-hour pressure forecast of 145 hPa change.',
    realWorld: 'Modern numerical weather prediction solved this by "initializing" — filtering out gravity waves from initial conditions. This insight made today\'s reliable 7-day forecasts possible.',
    hint: 'The equations support multiple wave types at very different speeds — unbalanced initial conditions excite the wrong ones.',
  },
  {
    id: 9532,
    topic: 'lewis-fry-richardson',
    difficulty: 'sota',
    question: 'Richardson\'s cascade model of turbulence is summarized by his famous verse: "Big whorls have little whorls..." This describes energy transfer:',
    options: [
      'From large eddies to small eddies until viscous dissipation',
      'From small eddies to large eddies (inverse cascade)',
      'Equally in all directions in wavenumber space',
      'Only between adjacent eddy sizes',
    ],
    correctIndex: 0,
    explanation: 'Richardson\'s 1922 cascade concept — energy injected at large scales cascades through smaller and smaller eddies until reaching the Kolmogorov microscale where viscosity converts kinetic energy to heat.',
    realWorld: 'This cascade governs jet engine exhaust mixing, ocean current dissipation, cloud formation, and the design of wind turbine wake models in wind farms.',
    hint: '"Big whorls have little whorls that feed on their velocity; little whorls have lesser whorls, and so on to viscosity."',
  },
  {
    id: 9533,
    topic: 'lewis-fry-richardson',
    difficulty: 'sota',
    question: 'Richardson\'s $t^3$ law for turbulent particle dispersion states that the mean-square separation of particle pairs grows as:',
    options: [
      '$\\langle |\\mathbf{r}(t)|^2 \\rangle \\propto \\varepsilon t^3$',
      '$\\langle |\\mathbf{r}(t)|^2 \\rangle \\propto Dt$',
      '$\\langle |\\mathbf{r}(t)|^2 \\rangle \\propto t^2$',
      '$\\langle |\\mathbf{r}(t)|^2 \\rangle \\propto \\sqrt{t}$',
    ],
    correctIndex: 0,
    explanation: 'In the inertial range of turbulence, particle pairs separate superdiffusively as $t^3$ (Richardson 1926). This is much faster than molecular diffusion ($\\propto t$) because larger eddies advect particles faster.',
    realWorld: 'Richardson dispersion governs pollutant spreading in the atmosphere, oil spill expansion in the ocean, and volcanic ash cloud dispersal — critical for environmental emergency response.',
    hint: 'Turbulent dispersion is much faster than molecular diffusion — the exponent is greater than 1.',
  },
];
