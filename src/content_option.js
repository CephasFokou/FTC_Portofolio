const logotext = "{#FTC}";
const meta = {
    title: "Cephas Fokou",
    description: "Digital Banking Manager / Product Manager / Team Lead — pilotage opérationnel, continuité de service, gestion de projets bancaires digitaux.",
};

const introdata = {
    title: "Bonjour, je suis {Cephas Fokou}",
    animated: {
        first: "Digital Banking Manager",
        second: "Product Manager",
        third: "Team Lead",
        fourth: "Pilotage applicatif (RUN)",
        fifth: "Gestion de projet",
        sixth: "Agile / Scrum",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description:
        "Digital Banking Manager orienté continuité de service et pilotage opérationnel de produits bancaires digitaux. Supervision d’équipes, gestion de projets complexes et gestion de situations critiques.",
    your_img_url: require("./assets/images/ftc-2.jpg"),
};

const dataabout = {
    title: "Qui suis-je ?",
    aboutme:
        "Digital Banking Manager orienté continuité de service et pilotage opérationnel de produits bancaires digitaux (Online Banking, applications fintech). Je supervise une équipe de 20 développeurs et je gère des projets complexes dans le secteur bancaire. J’ai également une expérience en gestion de situations critiques, mise en place de plannings et roadmaps. Habitué aux environnements exigeants et multi-pays, avec un sens élevé de la rigueur, de la discrétion et du service.",
};
const worktimeline = [{
        jobtitle: "Digital Banking Manager / Team Lead / Product Manager",
        where: "Centre de Recherche PKFokam (PKFRC) / Afriland First Bank",
        date: "05/2022 – Actuel",
    },
    {
        jobtitle: "Team Lead & Responsable IT",
        where: "SEINOVA SARL",
        date: "01/2022 – 05/2022",
    },
    {
        jobtitle: "Team Lead / Product Manager / Développeur Full Stack",
        where: "MaSolution SARL",
        date: "06/2020 – 01/2022",
    },
    {
        jobtitle: "Web Designer & Assistant administratif",
        where: "EDEN AFRICA",
        date: "01/2019 – 06/2020",
    },
];

const skills = [{
    name: "Pilotage applicatif",
}, {
    name: "Coordination RUN",
}, {
    name: "Suivi opérationnel",
}, {
    name: "Priorisation",
}, {
    name: "Reporting",
}, {
    name: "Amélioration continue",
}, {
    name: "Gestion de crise",
}, {
    name: "Gestion d’équipe",
}, {
    name: "Leadership / Coaching",
}, {
    name: "Gestion de projet",
}, {
    name: "Planification / Roadmap",
}, {
    name: "Agile / Scrum",
}, {
    name: "Docker",
}, {
    name: "Azure",
}, {
    name: "ReactJs",
}, {
    name: "Angular",
}, {
    name: "React Native",
}, {
    name: "HTML5 / CSS3 / JavaScript",
}, {
    name: "PostgreSQL / MySQL",
}, {
    name: "Git",
}, {
    name: "Figma",
}, {
    name: "Adobe XD",
}, {
    name: "WordPress",
}, {
    name: "Excel",
}, {
    name: "ChatGPT",
},
];

const skillsGroups = [{
        title: "Pilotage & Delivery",
        items: [
            "Pilotage applicatif",
            "Coordination RUN",
            "Suivi opérationnel",
            "Priorisation",
            "Reporting",
            "Amélioration continue",
            "Arbitrage",
            "Suivi d’actions correctives",
            "Animation de comités",
        ],
    },
    {
        title: "Management",
        items: [
            "Gestion d’équipe",
            "Leadership",
            "Coaching",
            "Formation des équipes",
            "Communication structurée",
            "Travail avec des équipes multiculturelles",
            "Partenaires externes",
        ],
    },
    {
        title: "Gestion de projet",
        items: [
            "Gestion de projet",
            "Planification / Roadmap",
            "Coordination",
            "Suivi des livrables",
            "Agile / Scrum",
            "Gestion de crise",
        ],
    },
    {
        title: "Tech & Outils",
        items: [
            "Docker",
            "Azure",
            "ReactJs",
            "Angular",
            "React Native",
            "HTML5 / CSS3 / JavaScript",
            "PostgreSQL / MySQL",
            "Git",
            "Figma",
            "Adobe XD",
            "WordPress",
            "Excel",
            "ChatGPT",
        ],
    },
];

const education = [{
        title: "MBA International",
        where: "UNICAF",
        date: "En cours",
    },
    {
        title: "Licence Réseau & Télécom",
        where: "Institut Universitaire de Technologie",
        date: "",
    },
];

const languages = [{
        name: "Français",
        level: "C2",
    },
    {
        name: "Anglais",
        level: "B2",
    },
];

const dataportfolio = [{
        img: require('./assets/images/ebk-pub.jpg'),
        description: "From Figma maquette to the implementation, e-Banking is a modern Banking web application For Afriland First Bank.",
        link: "https://www.figma.com/file/iCyS7E5gY9LZd3THlH1mKm/E-BANKING?type=design&node-id=0-1&mode=design&t=vTP9a06BCQsZBKCM-0",
        gallery: [
            {
              src: require('./assets/images/e-Banking-view/LOGIN PAGE.png'),
             
            },
            {
              src:  require('./assets/images/e-Banking-view/RESET PASSWORD.PNG'),
              
            },
            {
              src:  require('./assets/images/e-Banking-view/USER PROFIL.PNG'),
              
            },
            {
              src:  require('./assets/images/e-Banking-view/INTERFACE LIST USER.PNG'),
              
            },
            {
              src:  require('./assets/images/e-Banking-view/INTERFACE AUTHORZATIONS.PNG'),
              
            },
            {
              src:  require('./assets/images/e-Banking-view/INFORMATION ICON.PNG'),
              
            },
            {
              src:  require('./assets/images/e-Banking-view/APPROBATIONS.PNG'),
              
            }
          ]
    },
    {
        img: require('./assets/images/Mes tutoriels apercu.jpg'),
        description: "If you were saying 'before it's just a website' i think you have never view this one",
        link: "https://youtu.be/pw6hurXCSwg?si=Rl05Z3PJVwYUlgBu",
        gallery:[]
        
    },
    {
        img: require('./assets/images/template homepage express redactor.jpg'),
        description: "A perfectly creative assets design. This platform began with a thinking and now see how it's look ",
        link: "https://youtu.be/WxwplnRRdrA?si=9jtdyssfwUIMwOrW",
        gallery: [
            {
              src: require('./assets/images/template homepage express redactor.jpg'),
             
            }
          ]
    },
    {
        img: require('./assets/images/template homepage help to find.jpg'),
        description: "A web application for people who lost their ID card",
        link: "https://youtu.be/pw6hurXCSwg?si=Rl05Z3PJVwYUlgBu",
        gallery: [
            {
              src: require('./assets/images/template homepage help to find.jpg'),
             
            }
          ]
    },
    {
        img: require('./assets/images/Sara v2-demo.jpg'),
        description: "Giving a new look to a mobile app 'Sara V2'",
        link: "https://www.youtube.com/shorts/6ZWMdA5qlsg", 
        gallery: [
          {
            src: require('./assets/images/Sara v2-all-frame-sans-fond.png'),
          
          },
        ]
    },
    {
        img: require('./assets/images/Dashboard - Service Financier.png'),
        description: "The difficulty about realising a financial web application it when you discover that money is not just a text it's a real value.",
        link: "https://youtu.be/CPEULVjROzE?si=qScOPKnUsd3x1wbw",
        gallery: [
            {
              src: require('./assets/images/Dashboard - Service Financier.png'),
             
            }
          ]
    },

    {
        img: require('./assets/images/reception.jpg'),
        description: "A tree stars Hotel Website",
        link: "https://youtu.be/T7s-kDemp3s?si=YQk9lXN_QTzVkbWz", 
        gallery:[]
       
    },
    // {
    //     img: require('./assets/images/ebk-login page.jpg'),
    //     description: "The wisdom 2 of life consists in the elimination of non-essentials.",
    //     link: "#", 
    //     gallery: [
    //   {
    //     src: require('./assets/images/reception.jpg'),
       
    //   },
    //   {
    //     src: '/images/image2.jpg',
        
    //   }
    // ]
    // },
    {
        img: require('./assets/images/Afb website template.jpg'),
        description: "Redesign a bank website. ",
        link: "https://www.youtube.com/watch?v=pw6hurXCSwg", 
        gallery:[]
        
    },
    {
        img: require('./assets/images/sts apecu homepage .jpg'),
        description: "Implementation of STS_Consulting web application Figma. It was so great to design an app with Native Css.",
        link: "https://youtu.be/pATQkMh8fic?si=1kT2rb0SHfPmglrY",
        gallery: []
    },
    {
        img: require('./assets/images/template homepage PKFREC Website.jpg'),
        description: "The website of a research center should look like this one",
        link: "", 
        gallery: [
      {
        src: require('./assets/images/template homepage PKFREC Website.jpg'),
       
      }
    ]
    },
    {
        img: require('./assets/images/1- FODEC WireFrame - Accueil.jpg'),
        description: "Before coding or designing you have to first drawing you ideas. Here is the National research program on Cacao platform Wireframe.",
        link: "http://seedtrack.org", 
        gallery: [
          {
            src: require('./assets/images/0- FODEC WireFrame IMAGE.jpg'),
          
          }
      ]
    },
];

const contactConfig = {
    YOUR_EMAIL: "cephasfokou@gmail.com",
    YOUR_PHONE: "+237 695 963 860",
    YOUR_ADDRESS: "Rue 5B577, Yaoundé, Cameroun",
    description: "Au plaisir d’échanger avec vous.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0g0wl08",
    YOUR_TEMPLATE_ID: "template_h7p8ht5",
    YOUR_USER_ID: "slafKVy_zYtFtzv99",
};

const documents = {
    cv: require("./assets/Cephas_Fokou_CV_5.pdf"),
    coverLetter: require("./assets/Lettre_Motivation_Cephas_FOKOU_AFG_Gestionnaire_Applicatifs.pdf.pdf"),
};

const experiences = [{
        role: "Digital Banking Manager / Team Lead / Product Manager",
        company: "Afriland First Bank (via Centre de Recherche PKFokam / PKFRC)",
        location: "Yaoundé, Cameroun",
        period: "05/2022 – Actuel",
        summary: "Pilotage opérationnel de produits bancaires digitaux (Online Banking, application fintech), continuité de service, coordination multi-équipes et gestion de situations critiques.",
        highlights: [
            "Supervision d’une équipe de 20 développeurs (Backend & Frontend).",
            "Gestion de projets complexes multifiliales (Online Banking, site web AFB, application fintech SARA).",
            "Coordination des parties prenantes et arbitrages (recette/validation, priorisation, reporting).",
            "Mise en place de roadmaps trimestrielles/annuelles et suivi des livrables.",
            "Gestion de crise avec des clients étrangers et pilotage d’actions correctives.",
        ],
        media: {
            type: "image",
            src: require("./assets/images/ebk-pub.jpg"),
            alt: "Illustration Online Banking",
        },
        video: "https://youtu.be/uxlOvuYc9k0?si=ZuiZWj6XfUm_-u_2",
    },
    {
        role: "Team Lead & Responsable IT",
        company: "SEINOVA SARL",
        location: "Yaoundé, Cameroun",
        period: "01/2022 – 05/2022",
        summary: "Encadrement et coordination technique, organisation de la delivery, suivi opérationnel et accompagnement des équipes.",
        highlights: [
            "Organisation et coordination des équipes et des interventions.",
            "Planification, communication et reporting d’activités.",
            "Mise en place d’objectifs hebdomadaires et suivi d’exécution.",
        ],
        media: {
            type: "image",
            src: require("./assets/images/Dashboard - Service Financier.png"),
            alt: "Illustration projet web",
        },
        video: "https://youtu.be/CPEULVjROzE?si=qScOPKnUsd3x1wbw",
    },
    {
        role: "Team Lead / Product Manager / Développeur Full Stack",
        company: "MaSolution SARL",
        location: "Yaoundé, Cameroun",
        period: "06/2020 – 01/2022",
        summary: "Pilotage de projets web et mobile, de l’analyse à la mise en production, avec un focus satisfaction client et respect des délais.",
        highlights: [
            "Du développement à la mise en exploitation d’applications web et mobile.",
            "Analyse, conception et planification des objectifs à atteindre.",
            "Livraison orientée qualité, délais et valeur métier.",
        ],
        media: {
            type: "image",
            src: require("./assets/images/1- FODEC WireFrame - Accueil.jpg"),
            alt: "Illustration application web",
        },
    },
    {
        role: "Web Designer & Assistant administratif",
        company: "EDEN AFRICA",
        location: "Yaoundé, Cameroun",
        period: "01/2019 – 06/2020",
        summary: "Conception et réalisation de supports / interfaces, accompagnement administratif et communication.",
        highlights: [
            "Conception UI (maquettes) et production de supports.",
            "Préparation de réunions de présentation et supports de communication.",
        ],
        media: {
            type: "image",
            src: require("./assets/images/Afb website template.jpg"),
            alt: "Illustration design web",
        },
    },
];

const socialprofils = {
    github: "https://github.com/CephasFokou",
    linkedin: "https://www.linkedin.com/in/cephas-fokou-a8443a125/",
    youtube: "https://www.youtube.com/@cephasfokou3005",
};

const meta_en = {
    title: "Cephas Fokou",
    description: "Digital Banking Manager / Product Manager / Team Lead — operations, service continuity, and delivery of digital banking products.",
};

const introdata_en = {
    title: "Hi, I'm {Cephas Fokou}",
    animated: {
        first: "Digital Banking Manager",
        second: "Product Manager",
        third: "Team Lead",
        fourth: "Application operations (RUN)",
        fifth: "Project management",
        sixth: "Agile / Scrum",
    },
    description:
        "Digital Banking Manager focused on service continuity and operational delivery of digital banking products. Team leadership, complex project delivery, and critical incident management.",
    your_img_url: introdata.your_img_url,
};

const dataabout_en = {
    title: "Who am I?",
    aboutme:
        "Digital Banking Manager focused on service continuity and operational delivery of digital banking products (Online Banking, fintech applications). I lead a team of 20 developers and deliver complex projects in the banking sector. I also have experience managing critical situations, building plans and roadmaps. Used to demanding, multi-country environments with a strong sense of rigor, discretion and service.",
};

const worktimeline_en = [{
        jobtitle: "Digital Banking Manager / Team Lead / Product Manager",
        where: "PKFokam Research Center (PKFRC) / Afriland First Bank",
        date: "05/2022 – Present",
    },
    {
        jobtitle: "Team Lead & IT Lead",
        where: "SEINOVA SARL",
        date: "01/2022 – 05/2022",
    },
    {
        jobtitle: "Team Lead / Product Manager / Full‑Stack Developer",
        where: "MaSolution SARL",
        date: "06/2020 – 01/2022",
    },
    {
        jobtitle: "Web Designer & Administrative Assistant",
        where: "EDEN AFRICA",
        date: "01/2019 – 06/2020",
    },
];

const skillsGroups_en = [{
        title: "Operations & Delivery",
        items: [
            "Application operations",
            "RUN coordination",
            "Operational follow‑up",
            "Prioritization",
            "Reporting",
            "Continuous improvement",
            "Arbitration",
            "Corrective actions follow‑up",
            "Steering committees facilitation",
        ],
    },
    {
        title: "Leadership",
        items: [
            "Team management",
            "Leadership",
            "Coaching",
            "Team training",
            "Structured communication",
            "Multicultural collaboration",
            "External partners",
        ],
    },
    {
        title: "Project Management",
        items: [
            "Project management",
            "Planning / Roadmap",
            "Coordination",
            "Deliverables tracking",
            "Agile / Scrum",
            "Incident / crisis management",
        ],
    },
    {
        title: "Tech & Tools",
        items: [
            "Docker",
            "Azure",
            "React",
            "Angular",
            "React Native",
            "HTML / CSS / JavaScript",
            "PostgreSQL / MySQL",
            "Git",
            "Figma",
            "Adobe XD",
            "WordPress",
            "Excel",
            "ChatGPT",
        ],
    },
];

const education_en = [{
        title: "MBA International",
        where: "UNICAF",
        date: "In progress",
    },
    {
        title: "BSc Network & Telecommunications",
        where: "University Institute of Technology",
        date: "",
    },
];

const languages_en = [{
        name: "French",
        level: "Fluent (C2)",
    },
    {
        name: "English",
        level: "Upper‑intermediate (B2)",
    },
];

const contactConfig_en = {
    ...contactConfig,
    description: "Looking forward to hearing from you!",
};

const experiences_en = [{
        role: "Digital Banking Manager / Team Lead / Product Manager",
        company: "Afriland First Bank (via PKFokam Research Center / PKFRC)",
        location: "Yaoundé, Cameroon",
        period: "05/2022 – Present",
        summary:
            "Operational delivery of digital banking products (Online Banking, fintech apps), service continuity, multi‑team coordination and critical incident management.",
        highlights: [
            "Led a team of 20 developers (Backend & Frontend).",
            "Delivered complex multi‑subsidiary projects (Online Banking, AFB website, SARA fintech app).",
            "Stakeholder coordination and governance (UAT, prioritization, reporting).",
            "Set up quarterly/annual roadmaps and tracked delivery.",
            "Handled critical incidents with international clients and drove corrective actions.",
        ],
        media: experiences[0].media,
        video: experiences[0].video,
    },
    {
        role: "Team Lead & IT Lead",
        company: "SEINOVA SARL",
        location: "Yaoundé, Cameroon",
        period: "01/2022 – 05/2022",
        summary:
            "Team leadership and technical coordination, delivery organization, operational follow‑up and team support.",
        highlights: [
            "Coordinated teams and interventions.",
            "Planning, communication and activity reporting.",
            "Set weekly objectives and ensured execution follow‑up.",
        ],
        media: experiences[1].media,
    },
    {
        role: "Team Lead / Product Manager / Full‑Stack Developer",
        company: "MaSolution SARL",
        location: "Yaoundé, Cameroon",
        period: "06/2020 – 01/2022",
        summary:
            "Delivery of web and mobile projects from analysis to production, with a focus on client satisfaction and timelines.",
        highlights: [
            "Delivered web & mobile applications end‑to‑end.",
            "Analysis, design and weekly planning of objectives.",
            "Quality and value‑driven delivery.",
        ],
        media: experiences[2].media,
    },
    {
        role: "Web Designer & Administrative Assistant",
        company: "EDEN AFRICA",
        location: "Yaoundé, Cameroon",
        period: "01/2019 – 06/2020",
        summary:
            "UI and creative work, production of communication assets, and administrative support.",
        highlights: [
            "Designed UI mockups and produced creative assets.",
            "Prepared presentations and communication materials.",
        ],
        media: experiences[3].media,
    },
];

const dataportfolio_fr_descriptions = [
    "De la maquette Figma à l’implémentation, e‑Banking est une application web bancaire moderne pour Afriland First Bank.",
    "Si tu te disais “avant c’était juste un site”, je pense que tu n’as pas encore vu celui‑ci.",
    "Un design d’assets parfaitement créatif. Cette plateforme a commencé par une idée… et voici le rendu.",
    "Une application web pour les personnes ayant perdu leur carte d’identité.",
    "Donner un nouveau look à une application mobile : “Sara V2”.",
    "La difficulté des applications financières, c’est de se rappeler que l’argent n’est pas du texte : c’est une valeur réelle.",
    "Un site web pour un hôtel 3 étoiles.",
    "Refonte d’un site web bancaire.",
    "Implémentation de la web app STS_Consulting depuis Figma. Une super expérience avec du CSS natif.",
    "Le site d’un centre de recherche devrait ressembler à ceci.",
    "Avant de coder ou designer, il faut d’abord dessiner ses idées. Wireframe de la plateforme du programme national de recherche sur le cacao.",
];

const dataportfolio_fr = dataportfolio.map((item, idx) => ({
    ...item,
    description: dataportfolio_fr_descriptions[idx] || item.description,
}));

const contentByLang = {
    fr: {
        meta,
        introdata,
        dataabout,
        worktimeline,
        skillsGroups,
        education,
        languages,
        experiences,
        dataportfolio: dataportfolio_fr,
        contactConfig,
    },
    en: {
        meta: meta_en,
        introdata: introdata_en,
        dataabout: dataabout_en,
        worktimeline: worktimeline_en,
        skillsGroups: skillsGroups_en,
        education: education_en,
        languages: languages_en,
        experiences: experiences_en,
        dataportfolio,
        contactConfig: contactConfig_en,
    },
};

const normalizeContentLang = (lang) => (String(lang || "").toLowerCase().startsWith("en") ? "en" : "fr");

const getContent = (lang) => contentByLang[normalizeContentLang(lang)] || contentByLang.fr;

export { getContent, documents, socialprofils, logotext };
