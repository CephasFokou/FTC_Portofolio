const getByPath = (obj, path) => {
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
};

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      portfolio: "Portfolio",
      experience: "Expériences",
      about: "À propos",
      contact: "Contact",
      cv: "CV",
      letter: "Lettre",
    },
    home: {
      projects: "Projets",
      aboutMe: "À propos",
      contactMe: "Me contacter",
      downloadCv: "Télécharger mon CV",
      heroCarousel: "Carrousel d’images",
    },
    about: {
      title: "À propos",
      workTimeline: "Parcours",
      education: "Formation",
      languages: "Langues",
      skills: "Compétences",
      documents: "Documents",
      downloadCv: "Télécharger mon CV",
      downloadLetter: "Télécharger ma lettre de motivation",
    },
    experience: {
      title: "Expériences professionnelles",
      lead:
        "Une sélection de mes expériences et responsabilités clés (données issues de mon CV). Je compléterai avec plus de détails au fur et à mesure.",
      seeVideo: "Voir la vidéo",
      previewVideo: "Prévisualiser la vidéo",
    },
    portfolio: {
      title: "Portfolio",
      preview: "Aperçu",
      viewDemo: "Voir la démo",
    },
    contact: {
      title: "Contact",
      getInTouch: "Me contacter",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse",
      cv: "CV",
      letter: "Lettre",
      download: "Télécharger",
      namePlaceholder: "Nom",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      sending: "Envoi…",
      send: "Envoyer",
      success: "Message envoyé ! Je reviens vers vous rapidement.",
      failed: "Échec d’envoi :",
    },
    footer: {
      followMe: "Suivez-moi",
      copyright: "copyright",
    },
    language: {
      short_fr: "FR",
      short_en: "EN",
      aria: "Changer de langue",
      hint: "Raccourci : Alt+L (ou Ctrl/Cmd+Shift+L)",
    },
  },
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      cv: "Resume",
      letter: "Cover letter",
    },
    home: {
      projects: "Projects",
      aboutMe: "About me",
      contactMe: "Contact",
      downloadCv: "Download my resume",
      heroCarousel: "Image carousel",
    },
    about: {
      title: "About",
      workTimeline: "Work timeline",
      education: "Education",
      languages: "Languages",
      skills: "Skills",
      documents: "Documents",
      downloadCv: "Download my resume",
      downloadLetter: "Download my cover letter",
    },
    experience: {
      title: "Professional experience",
      lead:
        "A selection of my experience and key responsibilities (from my resume). I’ll add more details over time.",
      seeVideo: "Watch video",
      previewVideo: "Preview video",
    },
    portfolio: {
      title: "Portfolio",
      preview: "Preview",
      viewDemo: "View demo",
    },
    contact: {
      title: "Contact",
      getInTouch: "Get in touch",
      email: "Email",
      phone: "Phone",
      address: "Address",
      cv: "Resume",
      letter: "Cover letter",
      download: "Download",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      sending: "Sending…",
      send: "Send",
      success: "Message sent! I’ll get back to you soon.",
      failed: "Failed to send:",
    },
    footer: {
      followMe: "Follow me",
      copyright: "copyright",
    },
    language: {
      short_fr: "FR",
      short_en: "EN",
      aria: "Switch language",
      hint: "Shortcut: Alt+L (or Ctrl/Cmd+Shift+L)",
    },
  },
};

export const translate = (lang, key, vars = {}) => {
  const table = translations[lang] || translations.fr;
  const fallback = translations.en;
  const raw = getByPath(table, key) ?? getByPath(fallback, key) ?? key;
  if (typeof raw !== "string") return String(raw);
  return raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? `{${k}}` : String(vars[k])));
};
