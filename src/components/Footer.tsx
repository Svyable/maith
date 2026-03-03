import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { t } from "@/i18n";

const FOOTER_LINKS = [
  { key: "footer.quiz", path: "/", emoji: "🧠" },
  { key: "footer.masterMinds", path: "/thinkers", emoji: "🎓" },
  { key: "footer.formulas", path: "/formulas", emoji: "📜" },
  { key: "footer.bonafides", path: "/bonafides", emoji: "🪪" },
  { key: "footer.vault", path: "/vault", emoji: "🔐" },
  { key: "footer.glossary", path: "/glossary", emoji: "📖" },
  { key: "footer.leaderboard", path: "/leaderboard", emoji: "🏆" },
];

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🧠</span>
              <span className="font-display font-bold text-xl text-foreground">
                m<span className="text-gradient-primary">AI</span>th
              </span>
            </button>
            <p className="text-xs text-muted-foreground max-w-[200px] text-center md:text-left">
              {t('app.footerTagline')}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {FOOTER_LINKS.map((link) => (
              <motion.button
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(link.path)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors flex items-center gap-1.5"
              >
                <span className="text-xs">{link.emoji}</span>
                {t(link.key)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-border/40" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground font-mono-code">
            {t('app.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-muted-foreground/50 font-mono-code">∑ ∫ ∇ π e ∞</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
