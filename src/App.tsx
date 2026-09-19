import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeoManager } from "@/components/SeoManager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { APP_PATHS, LEARN_ROUTE_PATTERNS } from "@/config/site-navigation";
import Index from "./pages/Index";

const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Thinkers = lazy(() => import("./pages/Thinkers"));
const Glossary = lazy(() => import("./pages/Glossary"));
const Formulas = lazy(() => import("./pages/Formulas"));
const Vault = lazy(() => import("./pages/Vault"));
const Bonafides = lazy(() => import("./pages/Bonafides"));
const Learn = lazy(() => import("./pages/Learn"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function OnboardingGuard({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const { needsOnboarding, loading: profileLoading } = useProfile();
  const location = useLocation();

  if (authLoading || profileLoading) return <div className="min-h-screen bg-background" />;

  if (
    user
    && needsOnboarding
    && location.pathname !== APP_PATHS.onboarding
    && location.pathname !== APP_PATHS.auth
  ) {
    return <Navigate to={APP_PATHS.onboarding} replace />;
  }

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SeoManager />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <OnboardingGuard>
              <Routes>
                <Route path={APP_PATHS.home} element={<Index />} />
                <Route path={APP_PATHS.auth} element={<Auth />} />
                <Route path={APP_PATHS.onboarding} element={<Onboarding />} />
                <Route path={APP_PATHS.profile} element={<Profile />} />
                <Route path={APP_PATHS.leaderboard} element={<Leaderboard />} />
                <Route path={APP_PATHS.thinkers} element={<Thinkers />} />
                <Route path={APP_PATHS.glossary} element={<Glossary />} />
                <Route path={APP_PATHS.formulas} element={<Formulas />} />
                <Route path={APP_PATHS.vault} element={<Vault />} />
                <Route path={APP_PATHS.bonafides} element={<Bonafides />} />
                <Route path={APP_PATHS.learn} element={<Learn />} />
                <Route path={LEARN_ROUTE_PATTERNS.field} element={<Learn />} />
                <Route path={LEARN_ROUTE_PATTERNS.topic} element={<Learn />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </OnboardingGuard>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LocaleProvider>
  </QueryClientProvider>
);

export default App;
