import React from "react";
import { logotext, socialprofils, contactConfig } from "../../content_option";
import { useTranslation } from "../../i18n/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <p className="site-footer__name">{logotext}</p>
          <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
        </div>
        <ul className="site-footer__links">
          <li><a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={socialprofils.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={socialprofils.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
        </ul>
        <p className="site-footer__copy">© {new Date().getFullYear()} {logotext}. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
