const logotext = "{#FTC}";
const meta = {
    title: "Cephas Fokou",
    description: "I'm Cephas Fokou, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm {Cephas Fokou}",
    animated: {
        first: "UI | UX",
        second: "Front End Dev",
        third: "Graphic Designer",
        fourth: "Programmer",
        fifth: "Team Lead",
        sixth: "Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Despite the fact UI|UX is what i prefer, i can also work on project as a FrontEnd Developper; Team lead manager or even deploying cloud systems infracstructures.",
    your_img_url: require("./assets/images/Ftc_sans_fond.png"),
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am Cephas Fokou, Web|Mobile developper from Yaounde|Cameroon. Since 2017 i have worked on serval projects like web site designing, web application creation, customization of digital platform... Despite the fact UI|UX is what i prefer, i can also work on project as a FrontEnd Developper; Team lead manager or even deploying cloud systems infracstructures.",
};
const worktimeline = [{
        jobtitle: "Product manager",
        where: "PKFRC",
        date: "2023",
    },
    {
        jobtitle: "Front End Dev",
        where: "PKFRC",
        date: "2022",
    },
    {
        jobtitle: "IT Officer",
        where: "SEINOVA",
        date: "2021",
    },
    {
        jobtitle: "IT Officer",
        where: "MaSolution",
        date: "2020",
    },
    {
        jobtitle: "Web developper",
        where: "Visiocare Academy",
        date: "2018",
    },
    {
        jobtitle: "Graphic Designer",
        where: "Eden Africa",
        date: "2018",
    },
    {
        jobtitle: "IT Assistant",
        where: "GLOTELHO",
        date: "2017",
    },
];

const skills = [{
        name: "Figma",
    },
    
    {
        name: "AdobeXD",
    },
    
    {
        name: "HTML5, CSS3, JavaScript",
    },
    {
        name: "Boostrapp",
    },
    
    {
        name: "Jquery",
    },

    {
        name: "Angular",
    },

    {
        name: "ReactJs",
    },

    {
        name: "React Native",
    },

    {
        name: "Java, PHP",
    },
    {
        name: "PostgreSql, MySQL",
    },
    {
        name: "Scrum",
    },
    {
        name: "Git",
    },
    {
        name: "GitHub",
    },
    {
        name: "GitLab",
    },
    {
        name: "BitBucket",
    },
    {
        name: "WordPress",
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
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0g0wl08",
    YOUR_TEMPLATE_ID: "template_h7p8ht5",
    YOUR_USER_ID: "slafKVy_zYtFtzv99",
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
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};