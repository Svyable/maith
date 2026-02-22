import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { t } from '@/i18n';
import { motion } from 'framer-motion';

interface QuizHeaderProps {
  streak: number;
  showStreak: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
  onHome: () => void;
}

export function QuizHeader({ streak, showStreak, isDark, onToggleTheme, onHome }: QuizHeaderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠', title: t('nav.home') },
    { path: '/leaderboard', label: '🏆', title: t('nav.leaderboard') },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10" style={{ paddingTop: 'calc(0.5rem + env(safe-area-inset-top))' }}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 min-w-0"
      >
        <span className="text-xl flex-shrink-0">🧠</span>
        <h1 className="font-display font-bold text-lg text-foreground">
          m<span className="text-gradient-primary">AI</span>th
        </h1>
      </motion.button>
      <div className="flex items-center gap-1">
        {showStreak && (
          <div className="flex items-center gap-1 mr-1">
            <span className="text-accent animate-streak-fire">🔥</span>
            <span className="font-mono font-bold text-accent text-sm">{streak}</span>
          </div>
        )}

        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            title={item.title}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-colors ${
              location.pathname === item.path
                ? 'bg-primary/15 text-primary'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={onToggleTheme}
          className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {user ? (
          <button
            onClick={() => navigate('/profile')}
            title={t('nav.profile')}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-colors ${
              location.pathname === '/profile'
                ? 'bg-primary/15 text-primary'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            👤
          </button>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap"
          >
            {t('nav.signIn')}
          </button>
        )}
      </div>
    </header>
  );
}
