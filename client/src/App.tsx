import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import type { Locale } from "./lib/i18n";

function Router({ locale, setLocale }: { locale: Locale; setLocale: (locale: Locale) => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home locale={locale} setLocale={setLocale} />} />
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

  useEffect(() => {
    window.localStorage.setItem("kisan-saathi-locale", locale);
    document.documentElement.lang = locale === "hi" ? "hi" : locale === "mr" ? "mr" : "en";
  }, [locale]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router locale={locale} setLocale={setLocale} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
