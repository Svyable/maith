import type { GlossaryTerm } from '../types';

export const earthSpaceTerms_es: GlossaryTerm[] = [
  {
    id: 'plate-tectonics',
    field: 'earth-space',
    topic: 'Geología',
    term: 'Tectónica de Placas',
    definition:
      'La teoría de que la litosfera terrestre está dividida en grandes placas que flotan sobre la astenosfera e interactúan en sus límites.',
    example:
      'El Himalaya se formó por la colisión de la placa India con la placa Euroasiática.',
    formula: '$v_{\\text{placa}} \\approx 2\\text{–}10 \\; \\text{cm/año}$',
    latex: 'v_{\\text{placa}} \\approx 2\\text{--}10 \\; \\text{cm/año}',
    code:
      '-- Tasa de deriva (orden de magnitud)\ndef plate_velocity : Float := 0.05 -- m/año ≈ 5 cm/año',
  },
  {
    id: 'redshift',
    field: 'earth-space',
    topic: 'Astronomía',
    term: 'Corrimiento al Rojo',
    definition:
      'El alargamiento de las longitudes de onda de la luz de objetos que se alejan del observador, evidencia clave de la expansión del universo.',
    example: 'Hubble midió el corrimiento al rojo de galaxias para descubrir la expansión cósmica.',
    formula:
      '$z = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}$',
    latex:
      'z = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}',
    code:
      '-- Corrimiento al rojo cosmológico\ndef redshift (λ_obs λ_emit : Float) : Float :=\n  (λ_obs - λ_emit) / λ_emit',
  },
  {
    id: 'carbon-cycle',
    field: 'earth-space',
    topic: 'Ciencias Ambientales',
    term: 'Ciclo del Carbono',
    definition:
      'El ciclo biogeoquímico por el cual el carbono se intercambia entre la biosfera, la atmósfera, los océanos y la geosfera.',
    example:
      'La quema de combustibles fósiles libera carbono almacenado, aumentando el CO₂ atmosférico.',
    formula:
      '$\\frac{d[\\text{CO}_2]}{dt} = E(t) - S_{\\text{océano}}(t) - S_{\\text{tierra}}(t)$',
    latex:
      '\\frac{d[\\text{CO}_2]}{dt} = E(t) - S_{\\text{océano}}(t) - S_{\\text{tierra}}(t)',
    code:
      '-- Balance de carbono (simplificado)\ndef co2_rate (emisiones sumidero_oceano sumidero_tierra : Float) : Float :=\n  emisiones - sumidero_oceano - sumidero_tierra',
  },
  {
    id: 'coriolis-effect',
    field: 'earth-space',
    topic: 'Meteorología',
    term: 'Efecto Coriolis',
    definition:
      'Una deflexión aparente de los objetos en movimiento causada por la rotación de la Tierra: hacia la derecha en el hemisferio norte, hacia la izquierda en el sur.',
    example:
      'Los huracanes giran en sentido antihorario en el hemisferio norte debido al efecto Coriolis.',
    formula:
      '$\\mathbf{F}_{\\text{Cor}} = -2m(\\boldsymbol{\\Omega} \\times \\mathbf{v})$',
    latex: '\\mathbf{F}_{\\text{Cor}} = -2m(\\boldsymbol{\\Omega} \\times \\mathbf{v})',
    code:
      '-- Aceleración de Coriolis\ndef coriolis (Ω v : Vector3) (m : Float) : Vector3 :=\n  -2 * m • (Ω × v)',
  },
  {
    id: 'light-year',
    field: 'earth-space',
    topic: 'Astronomía',
    term: 'Año Luz',
    definition:
      'La distancia que recorre la luz en un año: aproximadamente $9.461 \\times 10^{12}$ km. Es una unidad de distancia, no de tiempo.',
    example:
      'La estrella más cercana, Próxima Centauri, está a unos 4,24 años luz.',
    formula: '$1 \\; \\text{al} = c \\cdot t = 9.461 \\times 10^{15} \\; \\text{m}$',
    latex: '1 \\; \\text{al} = c \\cdot t = 9.461 \\times 10^{15} \\; \\text{m}',
    code:
      '-- Año luz en metros\ndef light_year : Float :=\n  299_792_458 * 365.25 * 24 * 3600',
  },
  {
    id: 'greenhouse-effect',
    field: 'earth-space',
    topic: 'Ciencias del Clima',
    term: 'Efecto Invernadero',
    definition:
      'Los gases atmosféricos (CO₂, CH₄, H₂O) atrapan la radiación infrarroja saliente, calentando la superficie terrestre por encima de lo que sería de otro modo.',
    example:
      'Sin el efecto invernadero, la temperatura media de la Tierra sería de unos −18 °C.',
    formula:
      '$T_s = T_e(1 - \\alpha)^{-1/4} \\cdot (1 + \\tau_{\\text{IR}})^{1/4}$',
    latex: 'T_s = T_e(1 - \\alpha)^{-1/4} \\cdot (1 + \\tau_{\\text{IR}})^{1/4}',
    code:
      '-- Temperatura superficial simplificada\ndef surface_temp (T_e α τ_IR : Float) : Float :=\n  T_e * (1 - α) ^ (-1/4) * (1 + τ_IR) ^ (1/4)',
  },
];
