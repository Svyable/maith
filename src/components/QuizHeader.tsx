import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { t } from "@/i18n";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/useTheme";
import { LanguageFlags } from "@/components/LanguageFlags";
import { Moon, Sun } from "lucide-react";

interface QuizHeaderProps {
  streak: number;
  showStreak: boolean;
}

const NAV_ITEMS = [
  { path: "/", label: "Quiz", emoji: "🧠", mobileOnly: false },
  { path: "/thinkers", label: "MasterMinds", emoji: "🎓", mobileOnly: false },
  { path: "/formulas", label: "Formulas", emoji: "📜", mobileOnly: false },
  { path: "/vault", label: "Vault", emoji: "🔐", mobileOnly: false },
  { path: "/glossary", label: "Glossary", emoji: "📖", mobileOnly: false },
  { path: "/leaderboard", label: "Leaderboard", emoji: "🏆", mobileOnly: false },
];

export function QuizHeader({ streak, showStreak }: QuizHeaderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <header
      className="flex items-center justify-center px-4 py-2.5 border-b border-border bg-card sticky top-0 z-50"
      style={{ paddingTop: "calc(0.5rem + env(safe-area-inset-top))" }}
    >
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {showStreak && (
          <div className="flex items-center gap-1 mr-1">
            <span className="text-accent animate-streak-fire">🔥</span>
            <span className="font-mono font-bold text-accent text-sm">{streak}</span>
          </div>
        )}

        {/* Desktop: text nav links */}
        {!isMobile && (
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {item.emoji} {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* Mobile: icon-only nav */}
        {isMobile &&
          NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              title={item.label}
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {item.emoji}
            </button>
          ))}

        <LanguageFlags />

        {user ? (
          <button
            onClick={() => navigate("/profile")}
            title={t("nav.profile")}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
              location.pathname === "/profile"
                ? "bg-primary/15 text-primary"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            👤
          </button>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap"
          >
            {t("nav.signIn")}
          </button>
        )}
      </div>
    </header>
  );
}
