import type { GlossaryTerm } from '../types';

export const earthSpaceTerms_en: GlossaryTerm[] = [
  {
    id: 'plate-tectonics',
    field: 'earth-space',
    topic: 'Geology',
    term: 'Plate Tectonics',
    definition:
      "The theory that Earth's lithosphere is divided into large plates that float on the asthenosphere and interact at boundaries.",
    example:
      'The Himalayas formed from the Indian plate colliding with the Eurasian plate.',
    formula: '$v_{\\text{plate}} \\approx 2\\text{–}10 \\; \\text{cm/yr}$',
    latex: 'v_{\\text{plate}} \\approx 2\\text{--}10 \\; \\text{cm/yr}',
    code:
      '-- Plate drift rate (order of magnitude)\ndef plate_velocity : Float := 0.05 -- m/yr ≈ 5 cm/yr',
  },
  {
    id: 'redshift',
    field: 'earth-space',
    topic: 'Astronomy',
    term: 'Redshift',
    definition:
      'The lengthening of light wavelengths from objects moving away from the observer, key evidence for the expanding universe.',
    example: 'Hubble measured galaxy redshifts to discover cosmic expansion.',
    formula:
      '$z = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}$',
    latex:
      'z = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}',
    code:
      '-- Cosmological redshift\ndef redshift (λ_obs λ_emit : Float) : Float :=\n  (λ_obs - λ_emit) / λ_emit',
  },
  {
    id: 'carbon-cycle',
    field: 'earth-space',
    topic: 'Environmental Science',
    term: 'Carbon Cycle',
    definition:
      'The biogeochemical cycle by which carbon is exchanged among the biosphere, atmosphere, oceans, and geosphere.',
    example:
      'Burning fossil fuels releases stored carbon, increasing atmospheric CO₂.',
    formula:
      '$\\frac{d[\\text{CO}_2]}{dt} = E(t) - S_{\\text{ocean}}(t) - S_{\\text{land}}(t)$',
    latex:
      '\\frac{d[\\text{CO}_2]}{dt} = E(t) - S_{\\text{ocean}}(t) - S_{\\text{land}}(t)',
    code:
      '-- Carbon budget (simplified)\ndef co2_rate (emissions sink_ocean sink_land : Float) : Float :=\n  emissions - sink_ocean - sink_land',
  },
  {
    id: 'coriolis-effect',
    field: 'earth-space',
    topic: 'Meteorology',
    term: 'Coriolis Effect',
    definition:
      "An apparent deflection of moving objects caused by Earth's rotation: rightward in the Northern Hemisphere, leftward in the Southern.",
    example:
      'Hurricanes spin counter-clockwise in the Northern Hemisphere due to Coriolis.',
    formula:
      '$\\mathbf{F}_{\\text{Cor}} = -2m(\\boldsymbol{\\Omega} \\times \\mathbf{v})$',
    latex: '\\mathbf{F}_{\\text{Cor}} = -2m(\\boldsymbol{\\Omega} \\times \\mathbf{v})',
    code:
      '-- Coriolis acceleration\ndef coriolis (Ω v : Vector3) (m : Float) : Vector3 :=\n  -2 * m • (Ω × v)',
  },
  {
    id: 'light-year',
    field: 'earth-space',
    topic: 'Astronomy',
    term: 'Light-Year',
    definition:
      'The distance light travels in one year: approximately $9.461 \\times 10^{12}$ km. A unit of distance, not time.',
    example:
      'The nearest star, Proxima Centauri, is about 4.24 light-years away.',
    formula: '$1 \\; \\text{ly} = c \\cdot t = 9.461 \\times 10^{15} \\; \\text{m}$',
    latex: '1 \\; \\text{ly} = c \\cdot t = 9.461 \\times 10^{15} \\; \\text{m}',
    code:
      '-- Light-year in metres\ndef light_year : Float :=\n  299_792_458 * 365.25 * 24 * 3600',
  },
  {
    id: 'greenhouse-effect',
    field: 'earth-space',
    topic: 'Climate Science',
    term: 'Greenhouse Effect',
    definition:
      "Atmospheric gases (CO₂, CH₄, H₂O) trap outgoing infrared radiation, warming Earth's surface above what it would be otherwise.",
    example:
      "Without the greenhouse effect, Earth's average temperature would be about −18°C.",
    formula:
      '$T_s = T_e(1 - \\alpha)^{-1/4} \\cdot (1 + \\tau_{\\text{IR}})^{1/4}$',
    latex: 'T_s = T_e(1 - \\alpha)^{-1/4} \\cdot (1 + \\tau_{\\text{IR}})^{1/4}',
    code:
      '-- Simplified greenhouse surface temp\ndef surface_temp (T_e α τ_IR : Float) : Float :=\n  T_e * (1 - α) ^ (-1/4) * (1 + τ_IR) ^ (1/4)',
  },
];
