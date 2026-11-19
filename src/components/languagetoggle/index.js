import React from "react";
import { useLanguage } from "../../context/language";
import { useTranslation } from "../../i18n/useTranslation";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <button type="button" className="lang-toggle" onClick={toggleLanguage} aria-label={t("language.aria")}>
      {t("language.switch")}
    </button>
  );
};

export default LanguageToggle;
