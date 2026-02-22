import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { t } from '@/i18n';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface QuizHeaderProps {
  streak: number;
  showStreak: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
  onHome: () => void;
}

const NAV_ITEMS = [
  { path: '/', label: 'Quiz', emoji: '🧠', mobileOnly: false },
  { path: '/thinkers', label: 'MasterMinds', emoji: '🎓', mobileOnly: false },
  { path: '/glossary', label: 'Glossary', emoji: '📖', mobileOnly: false },
  { path: '/leaderboard', label: 'Leaderboard', emoji: '🏆', mobileOnly: false },
];

export function QuizHeader({ streak, showStreak, isDark, onToggleTheme, onHome }: QuizHeaderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

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

        {/* Desktop: text nav links */}
        {!isMobile && (
          <nav className="flex items-center gap-0.5 mr-2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {item.emoji} {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* Mobile: icon-only nav */}
        {isMobile && NAV_ITEMS.slice(0, 2).map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            title={item.label}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
              location.pathname === item.path
                ? 'bg-primary/15 text-primary'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {item.emoji}
          </button>
        ))}

        <button
          onClick={onToggleTheme}
          className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {user ? (
          <button
            onClick={() => navigate('/profile')}
            title={t('nav.profile')}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
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
