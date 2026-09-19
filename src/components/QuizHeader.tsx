import { useAuth } from "@/hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { t } from "@/i18n";
import { useTheme } from "@/hooks/useTheme";
import { LanguageFlags } from "@/components/LanguageFlags";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Brain, Menu, Moon, Sun, UserRound } from "lucide-react";

interface QuizHeaderProps {
  streak: number;
  showStreak: boolean;
}

const NAV_ITEMS = [
  { path: "/", hash: "#quiz-setup", labelKey: "nav.quiz", emoji: "🧠" },
  { path: "/thinkers", labelKey: "nav.masterMinds", emoji: "🗿" },
  { path: "/formulas", labelKey: "nav.formulas", emoji: "📜" },
  { path: "/bonafides", labelKey: "nav.bonafides", emoji: "🪪" },
  { path: "/vault", labelKey: "nav.vault", emoji: "🔐" },
  { path: "/glossary", labelKey: "nav.glossary", emoji: "📖" },
  { path: "/leaderboard", labelKey: "nav.leaderboard", emoji: "🏆" },
];

const EXTERNAL_NAV = { url: "https://geektome.lovable.app", labelKey: "nav.alphabet", emoji: "🔤" };

export function QuizHeader({ streak, showStreak }: QuizHeaderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggle: toggleTheme } = useTheme();

  const goToQuiz = () => {
    if (location.pathname === "/") {
      document.querySelector("#quiz-setup")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/#quiz-setup");
  };

  const isItemActive = (path: string, hash?: string) =>
    location.pathname === path && (hash ? location.hash === hash : true);

  const utilityControls = (
    <>
      <LanguageFlags />
      <Button
        variant="secondary"
        size="icon"
        onClick={toggleTheme}
        aria-label={isDark ? t("nav.lightMode") : t("nav.darkMode")}
        title={isDark ? t("nav.lightMode") : t("nav.darkMode")}
        className="h-11 w-11"
      >
        {isDark ? <Sun /> : <Moon />}
      </Button>
    </>
  );

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-3 sm:px-4">
        <NavLink
          to="/"
          aria-label={`${t("nav.home")} — mAIth`}
          className="flex min-h-11 items-center gap-2 rounded-lg px-2 font-display font-bold text-foreground"
        >
          <Brain className="h-5 w-5 text-primary" />
          <span>m<span className="text-primary">AI</span>th</span>
        </NavLink>

        {showStreak && (
          <div className="mr-auto flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-sm font-bold text-accent" aria-label={t("quiz.streak", { count: streak })}>
            <span aria-hidden="true">🔥</span><span className="font-mono">{streak}</span>
          </div>
        )}

        <nav aria-label={t("nav.primary")} className={`${showStreak ? "" : "ml-auto"} hidden items-center gap-1 xl:flex`}>
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.path, item.hash);
            if (item.hash) {
              return (
                <Button key={item.labelKey} variant="ghost" size="sm" onClick={goToQuiz} aria-current={active ? "page" : undefined} className={active ? "bg-primary/15 text-primary" : "text-muted-foreground"}>
                  <span aria-hidden="true">{item.emoji}</span>{t(item.labelKey)}
                </Button>
              );
            }
            return (
              <Button key={item.path} variant="ghost" size="sm" asChild className={active ? "bg-primary/15 text-primary" : "text-muted-foreground"}>
                <NavLink to={item.path} aria-current={active ? "page" : undefined}><span aria-hidden="true">{item.emoji}</span>{t(item.labelKey)}</NavLink>
              </Button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          {utilityControls}
          <Button variant={user ? "secondary" : "default"} size={user ? "icon" : "sm"} onClick={() => navigate(user ? "/profile" : "/auth")} aria-label={user ? t("nav.profile") : undefined} className={user ? "h-11 w-11" : "h-11"}>
            {user ? <UserRound /> : t("nav.signIn")}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          {showStreak ? null : utilityControls}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="h-11 w-11" aria-label={t('nav.menu')}><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-[min(88vw,22rem)] p-5">
              <SheetTitle className="mb-6 font-display">m<span className="text-primary">AI</span>th</SheetTitle>
              <nav aria-label={t("nav.mobilePrimary")} className="grid gap-1">
                <SheetClose asChild><NavLink to="/" className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold hover:bg-secondary"><span aria-hidden="true">⌂</span>{t("nav.home")}</NavLink></SheetClose>
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.labelKey}>
                    {item.hash ? (
                      <button onClick={goToQuiz} className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold hover:bg-secondary"><span aria-hidden="true">{item.emoji}</span>{t(item.labelKey)}</button>
                    ) : (
                      <NavLink to={item.path} aria-current={isItemActive(item.path) ? "page" : undefined} className={({ isActive }) => `flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold ${isActive ? "bg-primary/15 text-primary" : "hover:bg-secondary"}`}><span aria-hidden="true">{item.emoji}</span>{t(item.labelKey)}</NavLink>
                    )}
                  </SheetClose>
                ))}
                <a href={EXTERNAL_NAV.url} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold hover:bg-secondary"><span aria-hidden="true">{EXTERNAL_NAV.emoji}</span>{t(EXTERNAL_NAV.labelKey)} ↗</a>
              </nav>
              <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                {showStreak ? utilityControls : null}
                <SheetClose asChild>
                  <Button className="min-h-11 flex-1" variant={user ? "secondary" : "default"} onClick={() => navigate(user ? "/profile" : "/auth")}>
                    {user ? <><UserRound />{t("nav.profile")}</> : t("nav.signIn")}
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}