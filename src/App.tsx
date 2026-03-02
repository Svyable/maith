import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Index from "./pages/Index";

const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Thinkers = lazy(() => import("./pages/Thinkers"));
const Glossary = lazy(() => import("./pages/Glossary"));
const Formulas = lazy(() => import("./pages/Formulas"));
const Vault = lazy(() => import("./pages/Vault"));
const Bonafides = lazy(() => import("./pages/Bonafides"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function OnboardingGuard({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const { needsOnboarding, loading: profileLoading } = useProfile();
  const location = useLocation();

  if (authLoading || profileLoading) return <div className="min-h-screen bg-background" />;

  // Redirect logged-in users who need onboarding (except if already on /onboarding or /auth)
  if (user && needsOnboarding && location.pathname !== '/onboarding' && location.pathname !== '/auth') {
    return <Navigate to="/onboarding" replace />;
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
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <OnboardingGuard>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/thinkers" element={<Thinkers />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/formulas" element={<Formulas />} />
              <Route path="/logos" element={<Navigate to="/formulas" replace />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/bonafides" element={<Bonafides />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
