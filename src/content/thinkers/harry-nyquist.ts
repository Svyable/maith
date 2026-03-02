import type { Question } from '../types';

export const nyquistQuestions: Question[] = [
  {
    id: 13300,
    topic: 'nyquist',
    difficulty: 'easy',
    question:
      'State the Nyquist–Shannon sampling theorem in its most common engineering form. If a continuous-time signal $x(t)$ is strictly band-limited to $|f|<B$ Hz, what sampling frequency $f_s$ guarantees perfect reconstruction (in the ideal mathematical setting)?',
    options: [
      'Sample at $f_s \\ge 2B$ (Nyquist rate), so reconstruction by sinc interpolation is possible',
      'Sample at $f_s \\ge B$ because the highest frequency is $B$',
      'Sample at $f_s \\le 2B$ to avoid “over-sampling artifacts”',
      'Any $f_s$ works if you use enough polynomial interpolation'
    ],
    correctIndex: 0,
    explanation:
      'If $X(f)=0$ for $|f|\\ge B$, sampling at $f_s\\ge 2B$ prevents spectral replicas from overlapping. Ideal reconstruction uses\n$$x(t)=\\sum_{n=-\\infty}^{\\infty} x(nT)\\,\\mathrm{sinc}\\left(\\frac{t-nT}{T}\\right),\\quad T=\\frac{1}{f_s}.$$',
    realWorld:
      'Audio: $f_s=44.1\\text{ kHz}$ implies Nyquist frequency $f_N=f_s/2\\approx 22.05\\text{ kHz}$, covering human hearing bandwidth.',
    hint: 'Perfect reconstruction needs the spectral copies to stay disjoint: $f_s/2 \\ge B$.'
  },
  {
    id: 13301,
    topic: 'nyquist',
    difficulty: 'easy',
    question:
      'A sinusoid at frequency $f_0$ is sampled at rate $f_s$. Under ideal sampling, what “alias” frequency $f_a$ (in $[0,f_s/2]$) can it appear as when $f_0>f_s/2$?',
    options: [
      '$f_a = \\left|f_0 - k f_s\\right|$ for the integer $k$ that brings it into $[0,f_s/2]$',
      '$f_a = f_0 + f_s$ always',
      '$f_a = f_s/2 - f_0$ always',
      'There is no aliasing for sinusoids, only for noise'
    ],
    correctIndex: 0,
    explanation:
      'Sampling produces spectral replicas at $f_0 \\pm k f_s$. The observed discrete-time frequency is the fold of $f_0$ into the baseband:\n$$f_a = \\min_{k\\in\\mathbb{Z}} \\left|f_0-kf_s\\right|,\\quad 0\\le f_a\\le \\frac{f_s}{2}.$$',
    realWorld:
      'The wagon-wheel effect in video is this folding: high rotational frequency “wraps” into a lower apparent rotation rate.',
    hint: '“Wrap” the frequency by multiples of $f_s$ into the baseband.'
  },
  {
    id: 13302,
    topic: 'nyquist',
    difficulty: 'hard',
    question:
      'In unity-feedback control, the Nyquist criterion uses the open-loop transfer $L(s)=G(s)H(s)$. Closed-loop stability depends on the Nyquist plot of $L(j\\omega)$ encircling which critical point in the complex plane?',
    options: [
      'The point $-1+0j$ (the “critical point” for $1+L(s)=0$)',
      'The origin $0+0j$ because poles are measured from zero',
      'The point $+1+0j$ because unity feedback uses $1-L(s)$',
      'The imaginary axis because only $\\Re\\{L\\}$ matters'
    ],
    correctIndex: 0,
    explanation:
      'Closed-loop poles satisfy $1+L(s)=0$. The Nyquist test counts encirclements of $-1$ by the contour of $L(j\\omega)$, relating them to the number of open-loop right-half-plane poles $P$ and closed-loop right-half-plane poles $Z$ via\n$$N = Z - P,$$\nwith sign conventions determined by encirclement direction.',
    realWorld:
      'Engineers use Nyquist/Bode margins (gain/phase) to ensure robust stability for flight control, motor drives, and power converters.',
    hint: 'Set the characteristic equation: $1+L(s)=0 \\Rightarrow L(s)=-1$.'
  },
  {
    id: 13303,
    topic: 'nyquist',
    difficulty: 'hard',
    question:
      'Define the Nyquist frequency and relate it to sampling period $T$. If $f_s=\\tfrac{1}{T}$, what is $f_N$ and why does it matter?',
    options: [
      '$f_N = \\frac{f_s}{2}=\\frac{1}{2T}$; it is the highest sinusoidal frequency representable without aliasing',
      '$f_N = f_s=\\frac{1}{T}$; it is the highest frequency any ADC can measure',
      '$f_N = 2f_s$; it is the frequency where aliasing disappears',
      '$f_N = \\frac{T}{2}$; it is a time constant not a frequency'
    ],
    correctIndex: 0,
    explanation:
      'Sampling maps continuous-time frequencies into the discrete-time fundamental interval. Frequencies above $f_s/2$ fold back (alias) into $[0,f_s/2]$. Thus\n$$f_N = \\frac{f_s}{2} = \\frac{1}{2T}.$$',
    realWorld:
      'Anti-alias filters are designed so the analog signal has negligible content above $f_N$ before digitization.',
    hint: 'It’s exactly half of $f_s$.'
  },
  {
    id: 13304,
    topic: 'nyquist',
    difficulty: 'sota',
    question:
      'Compressed sensing sometimes “beats Nyquist” in measurement count. Which pair of conditions is most essential in the classical theory for recovering $x\\in\\mathbb{R}^n$ from $m\\ll n$ measurements $y=Ax$?',
    options: [
      'Sparsity/compressibility (e.g., $\\|x\\|_0\\le k$) and measurement incoherence / RIP-like properties enabling $\\ell_1$ recovery',
      'Periodicity of $x$ and a high-pass measurement matrix',
      'Band-limitedness of $x$ and exact sinc interpolation',
      'Gaussian noise dominance and averaging to zero'
    ],
    correctIndex: 0,
    explanation:
      'If $x$ is $k$-sparse in some basis and $A$ satisfies suitable conditions (e.g., Restricted Isometry Property), one can recover via\n$$\\min_{\\hat x}\\ \\|\\hat x\\|_1\\ \\text{s.t.}\\ A\\hat x=y,$$\nwith $m\\approx Ck\\log(n/k)$ measurements (order-of-magnitude).',
    realWorld:
      'MRI acceleration uses sparsity in wavelet/TV domains; fewer samples in $k$-space reduce scan time.',
    hint: 'Nyquist assumes band-limited; CS assumes sparse (few degrees of freedom).'
  }
];