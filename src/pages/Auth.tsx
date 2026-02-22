import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { t } from '@/i18n';
import { useLocale } from '@/hooks/useLocale';
import { lovable } from '@/integrations/lovable/index';
import { LanguageSelector } from '@/components/LanguageSelector';

// Floating math symbols for background decoration
const MATH_SYMBOLS = ['∑', '∫', 'π', '√', '∞', 'Δ', '∇', 'λ', 'θ', 'σ', '∂', 'μ', 'ε', 'ζ'];

const FORMULAS = [
  'E = mc²',
  '∇ × B = μ₀J + μ₀ε₀ ∂E/∂t',
  'eiπ + 1 = 0',
  'F = ma',
  'S = k ln Ω',
  'ΔxΔp ≥ ℏ/2',
];

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { locale, changeLocale } = useLocale();
  const navigate = useNavigate();

  const handleAppleSignIn = async () => {
    setAppleLoading(true);
    const { error } = await lovable.auth.signInWithOAuth('apple', { redirect_uri: window.location.origin });
    if (error) setError(error.message);
    setAppleLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    const { error } = await lovable.auth.signInWithOAuth('google', { redirect_uri: window.location.origin });
    if (error) setError(error.message);
    setGoogleLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (mode === 'login') {
      const { error } = await signIn(email, password);
      if (error) setError(error.message);
    } else {
      const { error } = await signUp(email, password, displayName);
      if (error) setError(error.message);
      else setSuccess(t('auth.checkEmail'));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden relative">
      {/* Floating math symbols background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {MATH_SYMBOLS.map((sym, i) => (
          <motion.span
            key={i}
            className="absolute font-mono-code text-primary/8 font-bold select-none"
            style={{
              fontSize: `${1.5 + (i % 4) * 0.6}rem`,
              left: `${(i * 137.5) % 100}%`,
              top: `${(i * 97.3) % 100}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          >
            {sym}
          </motion.span>
        ))}
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-8 pt-4 pb-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🧠</span>
          <span className="font-display font-bold text-lg text-foreground">
            m<span className="text-gradient-primary">AI</span>th
          </span>
        </motion.button>

        <div className="flex items-center gap-2">
          <LanguageSelector locale={locale} onChangeLocale={changeLocale} />
        </div>
      </div>

      {/* Main content — centered two-panel on desktop */}
      <div className="relative z-10 flex-1 flex items-start md:items-center justify-center px-4 pt-6 md:pt-0 pb-8">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          
          {/* Left panel — brand hero (hidden on small mobile, visible on md+) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex flex-col items-start justify-center flex-1 space-y-6"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
              className="text-7xl"
            >
              🧠
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              m<span className="text-gradient-primary">AI</span>th
            </h1>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              Train your mind across every field of science, mathematics, and beyond.
            </p>

            {/* Scrolling formula strip */}
            <div className="w-full rounded-xl bg-card/50 border border-border/40 px-4 py-3 overflow-hidden">
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...FORMULAS, ...FORMULAS].map((f, i) => (
                  <span key={i} className="font-mono-code text-sm text-primary/50">{f}</span>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground/60 font-mono-code">
              <span>📐 Mathematics</span>
              <span>·</span>
              <span>⚛️ Physics</span>
              <span>·</span>
              <span>💻 CS</span>
              <span>·</span>
              <span>🧬 Biology</span>
              <span>·</span>
              <span>+40 fields</span>
            </div>
          </motion.div>

          {/* Right panel — auth form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm flex-shrink-0"
          >
            {/* Mobile-only header */}
            <div className="text-center space-y-2 mb-6 md:hidden">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                className="text-5xl"
              >
                🧠
              </motion.div>
              <h1 className="text-3xl font-display font-bold text-foreground">
                m<span className="text-gradient-primary">AI</span>th
              </h1>
            </div>

            {/* Desktop header for form */}
            <div className="hidden md:block mb-6">
              <h2 className="text-2xl font-display font-bold text-foreground">
                {mode === 'login' ? 'Welcome back' : 'Join the quest'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {mode === 'login' ? t('auth.welcome') : t('auth.create')}
              </p>
            </div>

            {/* Mobile subtitle */}
            <p className="text-sm text-muted-foreground text-center mb-4 md:hidden">
              {mode === 'login' ? t('auth.welcome') : t('auth.create')}
            </p>

            {/* Mode tabs */}
            <div className="flex rounded-xl bg-secondary p-1 mb-5">
              {(['login', 'signup'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setError(''); setSuccess(''); }}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                    mode === m
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {m === 'login' ? t('auth.login') : t('auth.signup')}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <AnimatePresence mode="wait">
                {mode === 'signup' && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <input
                      type="text"
                      placeholder={t('auth.displayName')}
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <input
                type="email"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder={t('auth.email')}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />

              <input
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder={t('auth.password')}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2"
                  >
                    {error}
                  </motion.p>
                )}
                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-success bg-success/10 rounded-lg px-3 py-2"
                  >
                    {success}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg disabled:opacity-50 glow-primary"
              >
                {loading ? '...' : mode === 'login' ? t('auth.login') : t('auth.createAccount')}
              </motion.button>

              {/* Divider */}
              <div className="relative flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-mono-code">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* OAuth buttons */}
              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  disabled={googleLoading}
                  onClick={handleGoogleSignIn}
                  className="w-full py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm flex items-center justify-center gap-3 disabled:opacity-50 transition-colors hover:bg-secondary"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {googleLoading ? '...' : 'Continue with Google'}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  disabled={appleLoading}
                  onClick={handleAppleSignIn}
                  className="w-full py-3 rounded-xl bg-foreground text-background font-semibold text-sm flex items-center justify-center gap-3 disabled:opacity-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                  </svg>
                  {appleLoading ? '...' : 'Continue with Apple'}
                </motion.button>
              </div>
            </form>

            {/* Footer: play without account */}
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/')}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono-code"
              >
                {'>'} play without account ↩
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 px-4 pb-4 flex items-center justify-center">
        <p className="text-[11px] text-muted-foreground/40 font-mono-code">
          © {new Date().getFullYear()} mAIth — knowledge is power
        </p>
      </div>
    </div>
  );
}
