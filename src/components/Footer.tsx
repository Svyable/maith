import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { t } from "@/i18n";
import { APP_PATHS, EXTERNAL_LINKS, FOOTER_NAV_ITEMS } from "@/config/site-navigation";

export function Footer() {
  const navigate = useNavigate();
  const alphabet = EXTERNAL_LINKS.alphabet;

  return (
    <footer className="w-full border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <button onClick={() => navigate(APP_PATHS.home)} className="flex items-center gap-2 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🧠</span>
              <span className="font-display font-bold text-xl text-foreground">
                m<span className="text-gradient-primary">AI</span>th
              </span>
            </button>
            <p className="text-xs text-muted-foreground max-w-[200px] text-center md:text-left">
              {t('app.footerTagline')}
            </p>
          </div>

          <nav aria-label={t('nav.primary')} className="flex items-center gap-2 flex-wrap justify-center">
            {FOOTER_NAV_ITEMS.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(link.path)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors flex items-center gap-1.5"
              >
                <span className="text-xs">{link.emoji}</span>
                {t(link.labelKey)}
              </motion.button>
            ))}
            <motion.a
              href={alphabet.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors flex items-center gap-1.5"
            >
              <span className="text-xs">{alphabet.emoji}</span>
              {t(alphabet.footerLabelKey)}
            </motion.a>
          </nav>
        </div>

        <div className="my-6 h-px bg-border/40" />

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
