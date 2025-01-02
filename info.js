let info = {
  name: "Umer Daraz",
  logo_name: "Umer",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "",
  links: {
    linkedin: "https://www.linkedin.com/in/umer-daraz-267254148/",
    github: "https://github.com/UmerDaraz163",
    resume: "https://drive.google.com/file/d/1uYqLjQYMhRNCrHnB4hkZYsQ5KvQ0wkcm/view?usp=sharing",
  },
  education: [
    {
      name: "Capital University of Sciecne and Technology",
      place: "Islamabad",
      date: "sep, 2014 - Aug. 2018",
      degree: "bachelor in Computer Science",
      gpa: "3.1/4.0",
      description:
        "",
      skills: [
        "Software Engineering",
        "web programming",
        "UI/UX design",
        "Front-end developing",
      ]
    },
    {
      name: "Punjab Group of Colleges",
      place: "Rawalpindi",
      date: "Aug, 2012 - July. 2014",
      degree: "FSc (Pre-Engineering)",
      // gpa: "3.1/4.0",
      description:
        "",
      skills: [
        "Physics",
        "Maths",
        "Chemistry",
      ]
    },
  ],
  experience: [
    {
      name: "Teresol Pvt Ltd",
      place: "Islamabad, Pakistan",
      date: "2,Jan, 2023 - Till Now",
      position: "Senior Software Design Engineer",
      description:
        "Working on Bank AL Habib's banking application using XState, JavaScript, and Vue.js, focusing on state management, API integration, and front-end and back-end collaboration. U se case integration, user activity-based visibility, versioning, and deployment. Improved code performance, debugged legacy applications, and integrated CI/CD pipelines with GitHub Actions. Conducted extensive analysis and debugging of legacy Java code to understand business logic and software architecture while assisting in designing APIs and business logic.",
      skills: ["XState", "JavaSript", "VueJS","Java","API Integration and Management","Version Control and Deployment Processes"]
    },
    {
      name: "XIIUM Pvt Ltd",
      place: "Islamabad, Pakistan",
      date: "Aug 2020 - June 2024",
      position: "Software Engineer",
      description:
        "Worked on multiple projects, primarily platforms for ticket deals and affiliate ticketing. Utilized Laravel for backend development, JavaScript, jQuery, and Bootstrap for responsive interfaces. Designed efficient databases, integrated third-party APIs for real-time updates, and managed timelines using JIRA. Led team and project management to ensure successful project delivery.",
      skills: ["Javascript", "JQuery", "Laravel", "PHP", "API Integration", "Project Management","Database Design and Management" , "Client Communication"," Stakeholder Management"]
    },
    {
      name: "MACES",
      place: "Rawalpindi, Paksitan",
      date: "Feb, 2020 - May, 2020",
      position: "Software Developer",
      description: "creating apps and web UI, Creating Interactive prototypes, Low fidelity and UX researches",
      skills: ["PHP", "API Development", "Bootstrap"]
    },
    {
      name: "Technokeet Pvt Ltd",
      place: "Islamabad, Paksitan",
      date: "May 2017 - Sep 2017",
      position: "Internee Software Engineer",
      description: "Developed and maintained PHP and WordPress websites. Conducted manual testing for mobile apps and games, creating detailed test cases for functionality coverage.",
      skills: ["PHP", "WordPress", "Manual Testing", "Test Cases Documentation"]
    },
  ],
  skills: [
    
    {
      title: "Language",
      info: [
        "PPHP(Laravel)","JavaScript (including XState for state management)","Java"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "Vue.js","HTML5","CSS","Bootstrap4","JQuery"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["WordPress", "Git (Version Control)"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Other Skills",
      info: ["RDBMS", "Database design and optimization", "API testing and debugging", "JIRA, Taiga (Collaboration tools)", "Gimp"],
      icon: "fa fa-cogs"
    },
  ],
  portfolio: [
    {
      name: "Core Banking Application (Bank AL Habib)",
      pictures: [
        {
          img: require("./src/assets/portfolio/bahl/bahl1.png")
        }
      ],
      technologies: ["JavaScript", "XState", "VueJs","Java"],
      category: "Web App",
      date: "Jan, 2023 - Till Date",
      description:
        "It is a banking application designed for the bank's internal operations. The application supports key banking functions, including account management, transaction processing, and customer data handling, ensuring efficient and secure financial services."
    },
    {
      name: "Tikata Deals/ Tikada Deals",
      pictures: [
        {
          img: require("./src/assets/portfolio/tikata/t1.png")
        },
        {
          img: require("./src/assets/portfolio/tikata/t2.png")
        },
        {
          img: require("./src/assets/portfolio/tikata/t3.png")
        },
        {
          img: require("./src/assets/portfolio/tikata/t4.png")
        },
        {
          img: require("./src/assets/portfolio/tikata/t5.png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP(Laravel)", "MySQL","API Testing","RDBMS","Database Design","Project Management(JIRA)"],
      category: "Web App",
      date: "Aug, 2020 - May, June, 2024",
      visit: "https://www.tikatadeals.com",
      description:
        "I developed and launched Tikata, a platform designed to simplify the process of finding the best ticket deals by seamlessly integrating tickets from various seller APIs and managing them through a custom CMS. The platform's user interface was designed to support six languages, ensuring accessibility for a diverse and international audience. My responsibilities included API integration, CMS development, multilingual user interface design, and contributing to the platform's international expansion. I also focused on optimizing the user experience to deliver a seamless and engaging journey for all users"
    },
    {
      name: "Vergelijkdeals.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/vd/v1.png")
        },
        {
          img: require("./src/assets/portfolio/vd/v2.png")
        },
        {
          img: require("./src/assets/portfolio/vd/v3.png")
        },
        {
          img: require("./src/assets/portfolio/vd/v4.png")
        },
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP(Laravel)", "API Integration","MySQL","Database Design","Project Management(JIRA)"],
      category: "Web App",
      date: "Jan, 2022 - June, 2024",
      visit: "https://www.vergelijkdeals.com",
      description:
        "I contributed to the development of Vergelijkdeals.com, a deal comparison platform that aggregates offers from multiple sellers across categories such as Electronics, Beauty, and Home & Garden. The platform includes a custom CMS for managing deals retrieved from seller APIs and organizing them into well-structured categories. This project streamlined the process of finding and comparing deals, significantly enhancing the user experience. My responsibilities included CMS development, API integration, and optimizing the user interface to ensure a seamless and efficient browsing experience for users."
    },
    {
      name: "ThuisBatterijPlaza.nl",
      pictures: [
        {
          img: require("./src/assets/portfolio/tp/tp1.png")
        },
        {
          img: require("./src/assets/portfolio/tp/tp2.png")
        },
        {
          img: require("./src/assets/portfolio/tp/tp3.png")
        },
        {
          img: require("./src/assets/portfolio/tp/tp4.png")
        },
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP(Laravel)", "API Integration","MySQL","Database Design","Project Management(JIRA)"],
      category: "Web App",
      date: "Apr, 2022 - June, 2024",
      visit: "https://www.thuisbatterijplaza.nl/",
      description:
        "I developed ThuisBatterijPlaza, a platform designed to simplify the search for home and car batteries by providing clear and transparent comparisons of products and suppliers. The platform addresses the lack of transparency in the market, enabling users to compare complete battery sets, including installation options, based on real prices and customer reviews. My responsibilities encompassed platform development and user experience design, ensuring that the interface was intuitive and provided users with an efficient and reliable way to make informed decisions."
    },
  ],
};

export default info;
