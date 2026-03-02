// diesel.ts
import type { Question } from '../types';

export const dieselQuestions: Question[] = [
  {
    id: 67060,
    topic: 'diesel',
    difficulty: 'easy',
    question:
      'In an ideal Diesel cycle, what distinguishes the heat-addition process from the ideal Otto cycle?',
    options: [
      'Heat is added at (approximately) constant pressure in the Diesel cycle, whereas Otto adds heat at constant volume',
      'Heat is added at constant volume in the Diesel cycle, whereas Otto adds heat at constant pressure',
      'Diesel adds heat isothermally, Otto adds heat adiabatically',
      'Diesel and Otto both add heat at constant entropy'
    ],
    correctIndex: 0,
    explanation:
      'Ideal Diesel: $2\\to3$ is constant-pressure heat addition; ideal Otto: $2\\to3$ is constant-volume heat addition.',
    realWorld:
      'Real diesel combustion is not perfectly constant-pressure, but the model captures the key “compression ignition” character.',
    hint:
      'Diesel ≈ constant pressure, Otto ≈ constant volume.'
  },
  {
    id: 67061,
    topic: 'diesel',
    difficulty: 'hard',
    question:
      'For an ideal Diesel cycle with compression ratio $r=\\frac{V_1}{V_2}$ and cutoff ratio $\\rho=\\frac{V_3}{V_2}$ (during constant-pressure heat addition), what is the thermal efficiency $\\eta_D$ (with $\\gamma=C_p/C_v$)?',
    options: [
      '$\\displaystyle \\eta_D = 1-\\frac{1}{r^{\\gamma-1}}\\cdot\\frac{\\rho^{\\gamma}-1}{\\gamma(\\rho-1)}$',
      '$\\displaystyle \\eta_D = 1-\\frac{1}{r^{\\gamma-1}}$',
      '$\\displaystyle \\eta_D = 1-\\frac{\\rho^{\\gamma-1}}{r^{\\gamma-1}}$',
      '$\\displaystyle \\eta_D = 1-\\frac{\\gamma(\\rho-1)}{\\rho^{\\gamma}-1}$'
    ],
    correctIndex: 0,
    explanation:
      'Diesel efficiency depends on both $r$ (compression) and $\\rho$ (cutoff). The extra factor reflects that heat is added over a volume change at constant pressure.',
    realWorld:
      'Shows why very high compression ratios help efficiency, while large cutoff ratios reduce it (more late heat addition).',
    hint:
      'It looks like the Otto efficiency multiplied by a cutoff correction factor.'
  },
  {
    id: 67062,
    topic: 'diesel',
    difficulty: 'hard',
    question:
      'Why do diesel engines typically operate at higher compression ratios than spark-ignition (Otto) engines?',
    options: [
      'Because diesel uses compression ignition: higher $r$ raises temperature above the fuel’s autoignition threshold; Otto engines are knock-limited at high $r$',
      'Because diesel fuel has a lower autoignition temperature than gasoline, so compression can be lower',
      'Because higher compression reduces peak pressure and mechanical stress',
      'Because spark plugs fail at low compression ratios'
    ],
    correctIndex: 0,
    explanation:
      'Diesel engines need high compression to ignite fuel without a spark. Gasoline engines face knock (premature autoignition) as compression rises, limiting $r$.',
    realWorld:
      'Higher compression ratio is a key reason diesels often achieve better fuel efficiency at steady loads.',
    hint:
      'Diesel must ignite from compression alone; Otto must avoid knock.'
  },
  {
    id: 67063,
    topic: 'diesel',
    difficulty: 'sota',
    question:
      'In real diesel combustion, “ignition delay” creates a premixed burn spike. Which factor most directly tends to increase ignition delay (all else equal)?',
    options: [
      'Lower in-cylinder temperature/pressure at the start of injection (e.g., cold engine or low compression temperature)',
      'Higher cetane number fuel (better ignition quality)',
      'Higher intake air temperature',
      'Earlier injection timing with the same temperature'
    ],
    correctIndex: 0,
    explanation:
      'Ignition delay shortens when conditions favor autoignition (higher $T$, higher $p$, higher cetane). Cooler/less dense conditions lengthen delay, allowing more premixing and a sharper pressure rise.',
    realWorld:
      'Cold-start diesel noise (“diesel knock”) and emissions can worsen due to longer delay and incomplete combustion.',
    hint:
      'Autoignition slows down when the charge is colder/less compressed.'
  },
  {
    id: 67064,
    topic: 'diesel',
    difficulty: 'sota',
    question:
      'Diesel NO$_x$ and soot often trade off. Which statement best captures the classic NO$_x$–soot trade-off?',
    options: [
      'Hot, oxygen-rich combustion tends to increase NO$_x$ but reduce soot; cooler or more fuel-rich local zones reduce NO$_x$ but increase soot formation',
      'NO$_x$ and soot always rise and fall together',
      'Soot forms only at very high oxygen levels, so increasing oxygen raises soot',
      'NO$_x$ forms only at low temperatures, so cooling always raises NO$_x$'
    ],
    correctIndex: 0,
    explanation:
      'Thermal NO$_x$ rises strongly with peak temperature (Zeldovich mechanism). Soot forms in locally rich regions and is oxidized in hot/oxygenated conditions—so strategies that cool combustion can cut NO$_x$ but can leave more soot.',
    realWorld:
      'Motivates EGR (cuts NO$_x$), DPF (captures soot), and advanced combustion modes (HCCI/PCCI) trying to reduce both.',
    hint:
      'NO$_x$ loves heat; soot loves fuel-rich pockets.'
  }
];