import React from "react";
import { useLanguage } from "../../context/language";
import { useTranslation } from "../../i18n/useTranslation";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const label = lang === "fr" ? t("language.short_fr") : t("language.short_en");

  return (
    <button
      type="button"
      className="nav_ac lang_toggle"
      onClick={toggleLanguage}
      aria-label={t("language.aria")}
      title={t("language.hint")}
    >
      {label}
    </button>
  );
};

export default LanguageToggle;

