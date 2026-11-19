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
      projects: "Projets",
      experience: "Parcours",
      about: "À propos",
      contact: "Contact",
      cv: "Télécharger le CV",
      menu: "Menu",
      close: "Fermer le menu",
      skip: "Aller au contenu",
    },
    home: {
      seeProjects: "Voir les projets",
      contactMe: "Me contacter",
      portraitAlt: "Portrait de Cephas Fokou",
    },
    projects: {
      title: "Projets",
      lead: "Projets récents en banque digitale, paiement et services numériques, puis réalisations antérieures en conception web.",
      recentTitle: "Projets récents",
      role: "Mon rôle",
      outcome: "Résultat",
      archiveTitle: "Réalisations antérieures",
      archiveLead: "Sites, applications et maquettes conçus entre 2019 et 2022.",
      gallery: "Voir les écrans",
      video: "Voir la vidéo",
      link: "Ouvrir le lien",
      illustration: "Illustration schématique",
    },
    experience: {
      title: "Parcours",
      lead: "Du développement web à la direction d'une société d'intégration.",
      video: "Voir la vidéo",
      current: "En poste",
    },
    contact: {
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      formTitle: "Envoyer un message",
      name: "Nom",
      emailField: "Adresse e-mail",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé. Merci, je reviens vers vous rapidement.",
      failed: "Le message n'a pas pu être envoyé. Écrivez-moi directement par e-mail.",
    },
    lightbox: {
      close: "Fermer",
      prev: "Image précédente",
      next: "Image suivante",
    },
    language: {
      switch: "EN",
      aria: "Switch to English",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Career",
      about: "About",
      contact: "Contact",
      cv: "Download CV",
      menu: "Menu",
      close: "Close menu",
      skip: "Skip to content",
    },
    home: {
      seeProjects: "See projects",
      contactMe: "Contact me",
      portraitAlt: "Portrait of Cephas Fokou",
    },
    projects: {
      title: "Projects",
      lead: "Recent work in digital banking, payments and digital services, followed by earlier web design work.",
      recentTitle: "Recent projects",
      role: "My role",
      outcome: "Outcome",
      archiveTitle: "Earlier work",
      archiveLead: "Websites, apps and mockups designed between 2019 and 2022.",
      gallery: "View screens",
      video: "Watch video",
      link: "Open link",
      illustration: "Schematic illustration",
    },
    experience: {
      title: "Career",
      lead: "From web development to running an integration company.",
      video: "Watch video",
      current: "Current",
    },
    contact: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      formTitle: "Send a message",
      name: "Name",
      emailField: "Email address",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. Thank you, I'll get back to you soon.",
      failed: "The message could not be sent. Please email me directly.",
    },
    lightbox: {
      close: "Close",
      prev: "Previous image",
      next: "Next image",
    },
    language: {
      switch: "FR",
      aria: "Passer en français",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const translate = (lang, key, vars) => {
  const l = lang === "en" ? "en" : "fr";
  const raw = getByPath(translations[l], key) ?? getByPath(translations.fr, key) ?? key;
  if (!vars || typeof raw !== "string") return raw;
  return raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
};
