import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes";
import Header from "../header";
import Footer from "../components/footer";
import { LanguageProvider } from "../context/language";
import { useTranslation } from "../i18n/useTranslation";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const { t } = useTranslation();
  return (
    <>
      <a className="skip-link" href="#main">{t("nav.skip")}</a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex="-1">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Shell />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
