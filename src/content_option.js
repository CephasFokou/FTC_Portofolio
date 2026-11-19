// Contenu du portfolio — modifiez ici les textes FR / EN.

import portrait from "./assets/images/portrait-cephas.jpg";

import katalysMethode from "./assets/illustrations/katalys-methode.svg";
import ibV3 from "./assets/illustrations/ib-v3-multipays.svg";
import checkbook from "./assets/illustrations/checkbook.svg";
import saraRoadmap from "./assets/illustrations/sara-roadmap.svg";
import supraFacturation from "./assets/illustrations/supra-facturation.svg";
import penielBrunch from "./assets/illustrations/peniel-brunch.svg";

// Écrans sans données client uniquement.
import ebkLogin from "./assets/images/e-Banking-view/LOGIN PAGE.png";
import ebkHome from "./assets/images/e-Banking-view/INNTERFACE DE EBANKING.PNG";
import ebkAuth from "./assets/images/e-Banking-view/INTERFACE AUTHORZATIONS.PNG";
import ebkSwiftAdd from "./assets/images/e-Banking-view/SWIFT TRANSFERT - ADDING.PNG";
import ebkReset from "./assets/images/e-Banking-view/RESET PASSWORD.PNG";
import saraFrames from "./assets/images/Sara v2-all-frame-sans-fond.png";
import saraDemo from "./assets/images/Sara v2-demo.jpg";

import ebkPub from "./assets/images/ebk-pub.jpg";
import mesTutos from "./assets/images/Mes tutoriels apercu.jpg";
import expressRedactor from "./assets/images/template homepage express redactor.jpg";
import helpsToFind from "./assets/images/template homepage help to find.jpg";
import careDashboard from "./assets/images/Dashboard - Service Financier.png";
import hotel from "./assets/images/reception.jpg";
import afbSite from "./assets/images/Afb website template.jpg";
import sts from "./assets/images/sts apecu homepage .jpg";
import pkfrc from "./assets/images/template homepage PKFREC Website.jpg";
import fodec from "./assets/images/1- FODEC WireFrame - Accueil.jpg";
import fodec0 from "./assets/images/0- FODEC WireFrame IMAGE.jpg";

import cvFile from "./assets/CV_Cephas_Fokou_2026.pdf";

const logotext = "Cephas Fokou";

const documents = {
    cv: cvFile,
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/cephas-fokou-a8443a125/",
    github: "https://github.com/CephasFokou",
    youtube: "https://www.youtube.com/@cephasfokou3005",
};

const contactConfig = {
    YOUR_EMAIL: "cephasfokou@gmail.com",
    YOUR_PHONE: "+237 695 963 860",
    // EmailJS (https://www.emailjs.com/docs/examples/reactjs/)
    YOUR_SERVICE_ID: "service_0g0wl08",
    YOUR_TEMPLATE_ID: "template_h7p8ht5",
    YOUR_USER_ID: "slafKVy_zYtFtzv99",
};

/* ------------------------------------------------------------------ */
/* Données communes (images, liens)                                    */
/* ------------------------------------------------------------------ */

const ebankingGallery = [ebkLogin, ebkHome, ebkAuth, ebkSwiftAdd, ebkReset];

const recentMedia = {
    katalys: { cover: katalysMethode },
    ibv3: { cover: ibV3, gallery: ebankingGallery },
    checkbook: { cover: checkbook },
    sara: { cover: saraRoadmap, gallery: [saraFrames, saraDemo], video: "https://www.youtube.com/shorts/6ZWMdA5qlsg" },
    supra: { cover: supraFacturation },
    peniel: { cover: penielBrunch },
};

const archiveMedia = [
    { img: ebkPub, gallery: ebankingGallery, link: "https://www.figma.com/file/iCyS7E5gY9LZd3THlH1mKm/E-BANKING?type=design&node-id=0-1&mode=design&t=vTP9a06BCQsZBKCM-0" },
    { img: afbSite, gallery: [afbSite] },
    { img: careDashboard, gallery: [careDashboard], link: "https://youtu.be/CPEULVjROzE" },
    { img: hotel, gallery: [hotel], link: "https://youtu.be/T7s-kDemp3s" },
    { img: fodec, gallery: [fodec0, fodec], link: "http://seedtrack.org" },
    { img: pkfrc, gallery: [pkfrc] },
    { img: sts, gallery: [sts], link: "https://youtu.be/pATQkMh8fic" },
    { img: expressRedactor, gallery: [expressRedactor], link: "https://youtu.be/WxwplnRRdrA" },
    { img: mesTutos, gallery: [mesTutos], link: "https://youtu.be/pw6hurXCSwg" },
    { img: helpsToFind, gallery: [helpsToFind] },
];

/* ------------------------------------------------------------------ */
/* FRANÇAIS                                                            */
/* ------------------------------------------------------------------ */

const fr = {
    meta: {
        title: "Cephas Fokou — Directeur Général de KATALYS",
        description:
            "Cephas Fokou, Directeur Général de KATALYS. Intégration de systèmes, banque digitale et services managés : du cadrage à la mise en production, en Afrique centrale et de l'Ouest.",
    },
    hero: {
        name: "Cephas Fokou",
        role: "Directeur Général, KATALYS",
        title: "Je fais passer les projets bancaires du cadrage à la production.",
        lead:
            "Après plus de quatre ans à piloter la banque digitale de filiales bancaires africaines, je dirige KATALYS, société d'intégration de systèmes et de services numériques. Direction, gestion de projet, management d'équipes techniques et recrutement de talents : je tiens le fil jusqu'à la mise en service.",
        portrait,
    },
    footprint: {
        title: "Mises en production pilotées",
        lead: "Produits bancaires dont j'ai coordonné la livraison ou l'exploitation, par pays.",
        items: [
            { code: "CM", country: "Cameroun", product: "SARA, site web bancaire", status: "En production", live: true },
            { code: "SS", country: "Soudan du Sud", product: "Internet Banking", status: "En production", live: true },
            { code: "GN", country: "Guinée", product: "SARA, services Web & Cloud", status: "En service", live: true },
            { code: "CI", country: "Côte d'Ivoire", product: "Internet Banking V3", status: "Go-Live en préparation", live: false },
            { code: "ST", country: "Sao Tomé-et-Principe", product: "Internet Banking V3", status: "Go-Live en préparation", live: false },
        ],
    },
    offers: {
        title: "Ce que je prends en charge",
        items: [
            {
                title: "Cadrer",
                text: "Comprendre le besoin réel avant d'écrire une ligne de code.",
                points: ["Audit et schéma directeur", "Analyse métier et spécifications", "Choix de solutions, appels d'offres"],
            },
            {
                title: "Intégrer et mettre en production",
                text: "Relier les applications au Core Banking et livrer une version recettée.",
                points: ["Intégration API et Core Banking", "Migration de données, tests et recette", "Go-Live et accompagnement post-production"],
            },
            {
                title: "Exploiter",
                text: "Garder le service disponible une fois les projecteurs éteints.",
                points: ["Hébergement cloud et infogérance", "Monitoring et observabilité", "Support et maintenance sous SLA"],
            },
        ],
    },
    homeProjects: { title: "Projets récents", all: "Tous les projets" },
    homeCta: {
        title: "Un projet à cadrer ou à remettre sur les rails ?",
        text: "Banques, microfinances, intégrateurs : parlons de votre contexte.",
    },
    recent: [
        {
            id: "katalys",
            title: "Méthodologie de déploiement KATALYS",
            context: "KATALYS · 2026",
            summary:
                "Un cadre unique pour déployer Granit, SARA et l'Internet Banking chez les banques clientes, du besoin exprimé jusqu'à l'autonomie de l'équipe cliente.",
            role: [
                "Conception d'une méthode en six étapes, chacune fermée par un livrable validé",
                "Répartition des responsabilités : centre de développement, Delivery, DevOps, QA, IT et métier côté client",
                "Modèles de services associés : Monitoring & Observabilité, Exploitation & Maintenance L1",
            ],
            outcome: "Un référentiel commun pour planifier, recetter, mettre en production et transmettre.",
            tags: ["Gouvernance", "Delivery", "Services managés"],
        },
        {
            id: "ibv3",
            title: "Internet Banking V3, déploiement multi-pays",
            context: "PKFokam Research Center · 2026",
            summary:
                "Déploiement de la plateforme Internet Banking dans trois filiales bancaires : Côte d'Ivoire, Sao Tomé-et-Principe et Soudan du Sud.",
            role: [
                "Préparation des environnements de production : Docker, domaines, reverse proxy",
                "Coordination des validations avec les DSI et les équipes métier de chaque filiale",
                "Suivi des correctifs Core Banking, virements interbancaires et notifications SMS",
                "Reporting hebdomadaire et matrice des risques pour la direction",
            ],
            outcome: "Soudan du Sud en production ; Côte d'Ivoire et Sao Tomé en phase finale avant Go-Live.",
            tags: ["Digital Banking", "Go-Live", "Core Banking"],
        },
        {
            id: "checkbook",
            title: "Module Checkbook, commande de chéquier en ligne",
            context: "PKFokam Research Center · 2026",
            summary:
                "Nouveau module qui permet aux clients de commander un chéquier depuis l'Internet Banking, connecté au Core Banking ALTBank au Soudan du Sud.",
            role: [
                "Pilotage du développement et de l'intégration de six API : demande, statut, historique, types, frais, pagination",
                "Suivi des validations fonctionnelles et techniques",
                "Déblocage des tests en proposant une recette en préproduction client",
            ],
            outcome: "Module back-office clôturé, API livrées et intégrées au Core Banking.",
            tags: ["API", "Back-office", "Recette"],
        },
        {
            id: "sara",
            title: "SARA v2, paiement mobile et roadmap 2026",
            context: "PKFokam Research Center · 2025 – 2026",
            summary: "Application de paiement mobile en service au Cameroun, en Côte d'Ivoire et en Guinée.",
            role: [
                "Refonte de l'expérience mobile avec la nouvelle interface SARA v2",
                "Construction de la roadmap 2026 : 36 initiatives priorisées par score RICE",
                "Axes structurants : interopérabilité GIMAC, conformité BCEAO, migration Liberia, expansion",
            ],
            outcome: "Une feuille de route priorisée et partagée avec les parties prenantes.",
            tags: ["Produit", "Roadmap", "Paiement mobile"],
        },
        {
            id: "supra",
            title: "Facturation connectée à Supra Pay",
            context: "JOUZ · depuis 2023",
            summary: "Applications de gestion de factures interconnectées à la plateforme de paiement Supra Pay.",
            role: [
                "Recueil des besoins et coordination des évolutions",
                "Suivi des intégrations et de la maintenance applicative",
                "Amélioration du suivi des paiements et du recouvrement",
            ],
            outcome: "Rapprochement facturation–règlement simplifié, moins d'opérations manuelles.",
            tags: ["Fintech", "Intégration", "Maintenance"],
        },
        {
            id: "peniel",
            title: "Brunch with Péniel, réservation en ligne",
            context: "2026 · en cours",
            summary: "Plateforme de réservation et de paiement en ligne pour une offre de brunchs premium.",
            role: [
                "Conception full-stack : React, Vite, Tailwind CSS, Supabase",
                "Modèle de données : clients, réservations, services, paiements, notifications",
                "Intégration du paiement Supra Pay",
            ],
            outcome: "Base de données et maquettes en place, parcours de réservation en cours d'intégration.",
            tags: ["Full-stack", "Paiement", "UX"],
        },
    ],
    archive: [
        { title: "e-Banking", context: "De la maquette Figma à l'application web bancaire." },
        { title: "Refonte d'un site web bancaire", context: "Maquette du site institutionnel." },
        { title: "Gestion budgétaire, CARE Cameroun", context: "Logiciel de gestion financière et logistique, chez SEINOVA." },
        { title: "Site de l'hôtel Merina", context: "Site web et administration, chez SEINOVA." },
        { title: "Programme national cacao", context: "Wireframes de la plateforme de suivi." },
        { title: "Site du PKFokam Research Center", context: "Maquette de la page d'accueil." },
        { title: "STS Consulting", context: "Intégration de la maquette Figma en CSS natif." },
        { title: "Express Redactor", context: "Plateforme de création de CV et lettres en ligne." },
        { title: "MesTutoriels", context: "Refonte d'une plateforme d'e-learning." },
        { title: "Helps to Find", context: "Application pour retrouver des pièces d'identité perdues." },
    ],
    experiences: [
        {
            role: "Directeur Général & Head of Delivery",
            company: "KATALYS S.A.",
            note: "Fondateur",
            period: "Nov. 2026 – aujourd'hui",
            location: "Yaoundé",
            summary:
                "Direction d'une société d'intégration de systèmes et de services numériques : conseil, intégration, mise en production et services managés.",
            highlights: [
                "Définition de la vision, du positionnement et du modèle économique",
                "Structuration de trois offres : Conseil & cadrage, Intégration & mise en production, Exploitation & services managés",
                "Méthodologie de déploiement en six étapes et modèles de services Monitoring et Exploitation L1",
                "Chef de projet sur les déploiements clients : planification, risques, recette, Go-Live",
                "Management des équipes Delivery, DevOps et QA, recrutement et développement des talents",
            ],
        },
        {
            role: "Chef de projet Web & Cloud",
            company: "JOUZ",
            note: "Temps partiel",
            period: "Janv. 2023 – aujourd'hui",
            location: "Yaoundé",
            summary: "Pilotage du portefeuille de solutions Web et Cloud livrées à des filiales bancaires.",
            highlights: [
                "Portefeuille couvrant la Côte d'Ivoire, la Guinée, le Soudan du Sud et Sao Tomé-et-Principe",
                "Suivi des contrats, échéances, renouvellements et facturation",
                "Coordination technique et suivi des engagements clients",
                "Applications de facturation interconnectées à Supra Pay",
            ],
        },
        {
            role: "Digital Banking Manager, Team Lead & Product Manager",
            company: "PKFokam Research Center",
            period: "Mai 2022 – oct. 2026",
            location: "Yaoundé",
            summary:
                "Pilotage des produits de banque digitale développés pour des filiales bancaires dans plusieurs pays africains.",
            highlights: [
                "Supervision d'une équipe de 20 développeurs Backend et Frontend",
                "Projets multi-filiales : Online Banking, Internet Banking V3, site web bancaire, application SARA",
                "Mise en production de l'Internet Banking au Soudan du Sud en deux semaines, après trois mois de retard",
                "Roadmaps trimestrielles et annuelles, recettes, arbitrages et reporting",
                "Gestion de crise avec des clients étrangers ; membre du comité des managers pour le recrutement",
            ],
            video: "https://youtu.be/uxlOvuYc9k0",
        },
        {
            role: "Team Lead & Responsable IT",
            company: "SEINOVA SARL",
            period: "Janv. 2022 – mai 2022",
            location: "Yaoundé",
            summary: "Encadrement technique, organisation de la delivery et interface client.",
            highlights: [
                "Chef de projet par intérim, interlocuteur principal de CARE Cameroun",
                "Traduction du processus budgétaire du client en solution logicielle",
                "Encadrement de stagiaires développeurs jusqu'à l'obtention de leur diplôme",
            ],
            video: "https://youtu.be/CPEULVjROzE",
        },
        {
            role: "Team Lead, Product Manager & Développeur Full Stack",
            company: "MaSolution SARL",
            period: "Juin 2020 – janv. 2022",
            location: "Yaoundé",
            summary: "Applications web et mobiles, de l'analyse à la mise en exploitation.",
            highlights: [
                "Plateforme Corner Eat de commande et paiement de repas, publiée sur Play Store et App Store",
                "Analyse, conception et planification hebdomadaire des objectifs",
                "Livraison orientée qualité, délais et valeur métier",
            ],
        },
        {
            role: "Web Designer & Assistant administratif",
            company: "EDEN AFRICA",
            period: "Janv. 2019 – juin 2020",
            location: "Yaoundé",
            summary: "Conception d'interfaces, supports de communication et appui administratif.",
            highlights: ["Maquettes UI et supports visuels", "Préparation des réunions et présentations"],
        },
    ],
    about: {
        title: "À propos",
        intro: [
            "Je dirige KATALYS, une société qui part d'un constat simple : la plupart des projets informatiques ne bloquent pas faute de technologie, mais faute d'exécution. Besoins mal définis, environnements non prêts, recettes insuffisantes, mises en production repoussées.",
            "Mon parcours s'est construit sur ce terrain. Développeur puis chef d'équipe, j'ai ensuite piloté pendant plus de quatre ans les produits de banque digitale de filiales présentes dans plusieurs pays africains, avec une équipe de vingt développeurs. J'ai appris à tenir ensemble les exigences des DSI, des métiers et des équipes techniques jusqu'au Go-Live.",
            "Aujourd'hui, je cumule les rôles de directeur général, chef de projet, manager et recruteur de talents. Mon fil conducteur ne change pas : livrer juste, au bon niveau de qualité, avec une exploitation réaliste.",
        ],
        skillsTitle: "Compétences",
        skills: [
            { title: "Direction", items: ["Vision et stratégie", "Structuration d'offres", "Modèle économique", "Partenariats", "Développement commercial"] },
            { title: "Gestion de projet", items: ["Cadrage", "Roadmap", "Agile / Scrum", "Recette et Go-Live", "Gestion des risques", "Reporting"] },
            { title: "Management", items: ["Leadership", "Recrutement", "Coaching", "Équipes multiculturelles", "Comités de pilotage"] },
            { title: "Exploitation", items: ["Continuité de service", "Gestion d'incidents", "Monitoring", "CI/CD", "Docker", "GitLab"] },
            { title: "Technique", items: ["Core Banking", "API", "React", "Angular", "PostgreSQL / MySQL", "Figma"] },
        ],
        educationTitle: "Formation",
        education: [
            { title: "MBA International", where: "UNICAF", date: "En cours" },
            { title: "Licence Réseaux & Télécommunications", where: "IUT de Douala", date: "2014 – 2017" },
        ],
        languagesTitle: "Langues",
        languages: [
            { name: "Français", level: "Bilingue" },
            { name: "Anglais", level: "Professionnel (B2)" },
        ],
    },
    contact: {
        title: "Contact",
        lead: "Un projet, un recrutement, une collaboration : écrivez-moi directement.",
        location: "Yaoundé, Cameroun",
    },
};

/* ------------------------------------------------------------------ */
/* ENGLISH                                                             */
/* ------------------------------------------------------------------ */

const en = {
    meta: {
        title: "Cephas Fokou — CEO of KATALYS",
        description:
            "Cephas Fokou, CEO of KATALYS. Systems integration, digital banking and managed services: from scoping to production across Central and West Africa.",
    },
    hero: {
        name: "Cephas Fokou",
        role: "CEO, KATALYS",
        title: "I take banking projects from scoping to production.",
        lead:
            "After more than four years leading digital banking products for African bank subsidiaries, I now run KATALYS, a systems integration and digital services company. Leadership, project management, technical team management and talent hiring: I hold the thread until the service goes live.",
        portrait,
    },
    footprint: {
        title: "Go-lives I have led",
        lead: "Banking products whose delivery or operations I coordinated, by country.",
        items: [
            { code: "CM", country: "Cameroon", product: "SARA, bank website", status: "Live", live: true },
            { code: "SS", country: "South Sudan", product: "Internet Banking", status: "Live", live: true },
            { code: "GN", country: "Guinea", product: "SARA, Web & Cloud services", status: "In service", live: true },
            { code: "CI", country: "Côte d'Ivoire", product: "Internet Banking V3", status: "Go-live in preparation", live: false },
            { code: "ST", country: "São Tomé and Príncipe", product: "Internet Banking V3", status: "Go-live in preparation", live: false },
        ],
    },
    offers: {
        title: "What I take on",
        items: [
            {
                title: "Scope",
                text: "Understand the real need before writing a line of code.",
                points: ["IT audit and master plan", "Business analysis and specifications", "Solution selection, tenders"],
            },
            {
                title: "Integrate and go live",
                text: "Connect applications to the core banking system and ship a tested release.",
                points: ["API and core banking integration", "Data migration, testing and UAT", "Go-live and post-production support"],
            },
            {
                title: "Operate",
                text: "Keep the service running once the launch is over.",
                points: ["Cloud hosting and managed IT", "Monitoring and observability", "SLA-based support and maintenance"],
            },
        ],
    },
    homeProjects: { title: "Recent projects", all: "All projects" },
    homeCta: {
        title: "A project to scope or to get back on track?",
        text: "Banks, microfinance institutions, integrators: let's talk about your context.",
    },
    recent: [
        {
            id: "katalys",
            title: "KATALYS deployment methodology",
            context: "KATALYS · 2026",
            summary:
                "One framework to deploy Granit, SARA and Internet Banking at client banks, from the stated need to a self-sufficient client team.",
            role: [
                "Designed a six-step method, each step closed by a signed-off deliverable",
                "Defined responsibilities across the development centre, Delivery, DevOps, QA, client IT and business teams",
                "Related service models: Monitoring & Observability, Operations & L1 Maintenance",
            ],
            outcome: "A shared reference to plan, test, go live and hand over.",
            tags: ["Governance", "Delivery", "Managed services"],
        },
        {
            id: "ibv3",
            title: "Internet Banking V3, multi-country rollout",
            context: "PKFokam Research Center · 2026",
            summary: "Rollout of the Internet Banking platform in three bank subsidiaries: Côte d'Ivoire, São Tomé and Príncipe, and South Sudan.",
            role: [
                "Prepared production environments: Docker, domains, reverse proxy",
                "Coordinated sign-offs with each subsidiary's IT and business teams",
                "Tracked core banking fixes, interbank transfers and SMS notifications",
                "Weekly reporting and risk matrix for management",
            ],
            outcome: "South Sudan live; Côte d'Ivoire and São Tomé in the final pre-go-live phase.",
            tags: ["Digital banking", "Go-live", "Core banking"],
        },
        {
            id: "checkbook",
            title: "Checkbook module, online chequebook requests",
            context: "PKFokam Research Center · 2026",
            summary: "New module letting customers order a chequebook from Internet Banking, connected to the ALTBank core banking system in South Sudan.",
            role: [
                "Led development and integration of six APIs: request, status, history, types, fees, pagination",
                "Tracked functional and technical sign-offs",
                "Unblocked testing by proposing UAT on the client's pre-production environment",
            ],
            outcome: "Back-office module closed, APIs delivered and integrated with the core banking system.",
            tags: ["API", "Back-office", "UAT"],
        },
        {
            id: "sara",
            title: "SARA v2, mobile payments and 2026 roadmap",
            context: "PKFokam Research Center · 2025 – 2026",
            summary: "Mobile payments app in service in Cameroon, Côte d'Ivoire and Guinea.",
            role: [
                "Redesigned the mobile experience with the new SARA v2 interface",
                "Built the 2026 roadmap: 36 initiatives prioritised with RICE scoring",
                "Key themes: GIMAC interoperability, BCEAO compliance, Liberia migration, expansion",
            ],
            outcome: "A prioritised roadmap shared with stakeholders.",
            tags: ["Product", "Roadmap", "Mobile payments"],
        },
        {
            id: "supra",
            title: "Invoicing connected to Supra Pay",
            context: "JOUZ · since 2023",
            summary: "Invoice management applications connected to the Supra Pay payment platform.",
            role: [
                "Gathered requirements and coordinated enhancements",
                "Tracked integrations and application maintenance",
                "Improved payment tracking and collections",
            ],
            outcome: "Simpler invoice-to-payment reconciliation, fewer manual operations.",
            tags: ["Fintech", "Integration", "Maintenance"],
        },
        {
            id: "peniel",
            title: "Brunch with Péniel, online booking",
            context: "2026 · in progress",
            summary: "Booking and online payment platform for a premium brunch offer.",
            role: [
                "Full-stack design: React, Vite, Tailwind CSS, Supabase",
                "Data model: customers, bookings, services, payments, notifications",
                "Supra Pay payment integration",
            ],
            outcome: "Database and mockups in place, booking flow being integrated.",
            tags: ["Full-stack", "Payments", "UX"],
        },
    ],
    archive: [
        { title: "e-Banking", context: "From Figma mockup to banking web application." },
        { title: "Bank website redesign", context: "Mockup of the corporate website." },
        { title: "Budget management, CARE Cameroon", context: "Finance and logistics software, at SEINOVA." },
        { title: "Merina hotel website", context: "Website and admin, at SEINOVA." },
        { title: "National cocoa programme", context: "Wireframes of the tracking platform." },
        { title: "PKFokam Research Center website", context: "Homepage mockup." },
        { title: "STS Consulting", context: "Figma design built in plain CSS." },
        { title: "Express Redactor", context: "Online CV and cover letter builder." },
        { title: "MesTutoriels", context: "E-learning platform redesign." },
        { title: "Helps to Find", context: "App to recover lost identity documents." },
    ],
    experiences: [
        {
            role: "CEO & Head of Delivery",
            company: "KATALYS S.A.",
            note: "Founder",
            period: "Nov 2026 – present",
            location: "Yaoundé",
            summary: "Running a systems integration and digital services company: consulting, integration, go-live and managed services.",
            highlights: [
                "Set the vision, positioning and business model",
                "Structured three offers: Consulting & scoping, Integration & go-live, Operations & managed services",
                "Six-step deployment methodology and Monitoring / L1 Operations service models",
                "Project lead on client rollouts: planning, risks, UAT, go-live",
                "Managing Delivery, DevOps and QA teams; hiring and developing talent",
            ],
        },
        {
            role: "Web & Cloud Project Manager",
            company: "JOUZ",
            note: "Part-time",
            period: "Jan 2023 – present",
            location: "Yaoundé",
            summary: "Managing the portfolio of Web and Cloud solutions delivered to bank subsidiaries.",
            highlights: [
                "Portfolio covering Côte d'Ivoire, Guinea, South Sudan and São Tomé and Príncipe",
                "Contracts, deadlines, renewals and invoicing",
                "Technical coordination and client commitments follow-up",
                "Invoicing applications connected to Supra Pay",
            ],
        },
        {
            role: "Digital Banking Manager, Team Lead & Product Manager",
            company: "PKFokam Research Center",
            period: "May 2022 – Oct 2026",
            location: "Yaoundé",
            summary: "Led digital banking products built for bank subsidiaries in several African countries.",
            highlights: [
                "Led a team of 20 backend and frontend developers",
                "Multi-subsidiary projects: Online Banking, Internet Banking V3, bank website, SARA app",
                "Took Internet Banking live in South Sudan in two weeks after a three-month delay",
                "Quarterly and annual roadmaps, UAT, trade-offs and reporting",
                "Crisis management with international clients; member of the managers' hiring committee",
            ],
            video: "https://youtu.be/uxlOvuYc9k0",
        },
        {
            role: "Team Lead & IT Lead",
            company: "SEINOVA SARL",
            period: "Jan 2022 – May 2022",
            location: "Yaoundé",
            summary: "Technical leadership, delivery organisation and client interface.",
            highlights: [
                "Interim project manager and main contact for CARE Cameroon",
                "Turned the client's budget process into a software solution",
                "Mentored developer interns through to graduation",
            ],
            video: "https://youtu.be/CPEULVjROzE",
        },
        {
            role: "Team Lead, Product Manager & Full-Stack Developer",
            company: "MaSolution SARL",
            period: "Jun 2020 – Jan 2022",
            location: "Yaoundé",
            summary: "Web and mobile applications from analysis to production.",
            highlights: [
                "Corner Eat food ordering and payment platform, published on Play Store and App Store",
                "Analysis, design and weekly objective planning",
                "Delivery focused on quality, deadlines and business value",
            ],
        },
        {
            role: "Web Designer & Administrative Assistant",
            company: "EDEN AFRICA",
            period: "Jan 2019 – Jun 2020",
            location: "Yaoundé",
            summary: "Interface design, communication materials and administrative support.",
            highlights: ["UI mockups and visual assets", "Meeting and presentation preparation"],
        },
    ],
    about: {
        title: "About",
        intro: [
            "I run KATALYS, a company built on a simple observation: most IT projects don't stall for lack of technology, but for lack of execution. Unclear needs, unprepared environments, thin testing, postponed go-lives.",
            "That is where my career was built. Developer, then team lead, I spent more than four years leading digital banking products for subsidiaries in several African countries, with a team of twenty developers. I learned to keep IT departments, business teams and engineers aligned all the way to go-live.",
            "Today I combine the roles of CEO, project manager, team manager and talent recruiter. My guiding line hasn't changed: deliver the right thing, at the right quality, with realistic operations.",
        ],
        skillsTitle: "Skills",
        skills: [
            { title: "Leadership", items: ["Vision and strategy", "Offer design", "Business model", "Partnerships", "Business development"] },
            { title: "Project management", items: ["Scoping", "Roadmap", "Agile / Scrum", "UAT and go-live", "Risk management", "Reporting"] },
            { title: "Management", items: ["Leadership", "Hiring", "Coaching", "Multicultural teams", "Steering committees"] },
            { title: "Operations", items: ["Service continuity", "Incident management", "Monitoring", "CI/CD", "Docker", "GitLab"] },
            { title: "Technical", items: ["Core banking", "APIs", "React", "Angular", "PostgreSQL / MySQL", "Figma"] },
        ],
        educationTitle: "Education",
        education: [
            { title: "International MBA", where: "UNICAF", date: "In progress" },
            { title: "Bachelor's in Networks & Telecommunications", where: "IUT Douala", date: "2014 – 2017" },
        ],
        languagesTitle: "Languages",
        languages: [
            { name: "French", level: "Native / bilingual" },
            { name: "English", level: "Professional (B2)" },
        ],
    },
    contact: {
        title: "Contact",
        lead: "A project, a role, a partnership: write to me directly.",
        location: "Yaoundé, Cameroon",
    },
};

/* ------------------------------------------------------------------ */

const attachMedia = (content) => ({
    ...content,
    recent: content.recent.map((p) => ({ ...p, ...recentMedia[p.id] })),
    archive: content.archive.map((p, i) => ({ ...p, ...archiveMedia[i] })),
});

const contentByLang = { fr: attachMedia(fr), en: attachMedia(en) };

const getContent = (lang) =>
    String(lang || "").toLowerCase().startsWith("en") ? contentByLang.en : contentByLang.fr;

export { getContent, documents, socialprofils, logotext, contactConfig };
