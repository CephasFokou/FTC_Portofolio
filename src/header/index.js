import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { logotext, documents } from "../content_option";
import LanguageToggle from "../components/languagetoggle";
import { useTranslation } from "../i18n/useTranslation";

const links = [
  { to: "/portfolio", key: "nav.projects" },
  { to: "/experience", key: "nav.experience" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to="/" className="brand">
          {logotext}
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? t("nav.close") : t("nav.menu")}
        </button>
        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Navigation">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{t(l.key)}</NavLink>
              </li>
            ))}
          </ul>
          <div className="site-nav__tools">
            <LanguageToggle />
            <a className="btn btn--ghost btn--sm" href={documents.cv} download>
              {t("nav.cv")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
