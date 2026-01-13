import { useMemo } from "react";
import { useLanguage } from "../context/language";
import { translate } from "./translations";

export const useTranslation = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => (key, vars) => translate(lang, key, vars), [lang]);
  return { t, lang };
};

