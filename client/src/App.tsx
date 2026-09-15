import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import type { Locale } from "./lib/i18n";
import { loadSession, clearSession, type FarmerProfile } from "./lib/auth";

function Router({ locale, setLocale, profile, onLogin, onLogout }: { locale: Locale; setLocale: (locale: Locale) => void; profile: FarmerProfile | null; onLogin: () => void; onLogout: () => void }) {
  return (
    <Switch>
      <Route path="/" component={() => profile ? <Home locale={locale} setLocale={setLocale} profile={profile} onLogout={onLogout} /> : <Login locale={locale} setLocale={setLocale} onLogin={onLogin} />} />
      <Route path="/login" component={() => <Login locale={locale} setLocale={setLocale} onLogin={onLogin} />} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem("kisan-saathi-locale");
    return saved === "hi" || saved === "mr" ? saved : "en";
  });
  const [profile, setProfile] = useState<FarmerProfile | null>(() => loadSession());

  useEffect(() => {
    window.localStorage.setItem("kisan-saathi-locale", locale);
    document.documentElement.lang = locale === "hi" ? "hi" : locale === "mr" ? "mr" : "en";
  }, [locale]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router locale={locale} setLocale={setLocale} profile={profile} onLogin={() => setProfile(loadSession())} onLogout={() => { clearSession(); setProfile(null); }} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
