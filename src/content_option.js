const logotext = "{#FTC}";
const meta = {
    title: "Cephas Fokou",
    description: "Digital Banking Manager / Product Manager / Team Lead — pilotage opérationnel, continuité de service, gestion de projets bancaires digitaux.",
};

const introdata = {
    title: "Hi, I'm {Cephas Fokou}",
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
    your_img_url: require("./assets/images/ftc-1.jpeg"),
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
    description: "Looking forward to hearing from you!",
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

const socialprofils = {
    github: "https://github.com/CephasFokou",
    linkedin: "https://www.linkedin.com/in/cephas-fokou-a8443a125/",
    youtube: "https://www.youtube.com/@cephasfokou3005",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    education,
    languages,
    introdata,
    contactConfig,
    documents,
    socialprofils,
    logotext,
};
