// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import floobytelogo from './assets/company_logo/floobyte_logo.png';
import persistentlogo from './assets/company_logo/persistent_logo.png';
import phntechnologylogo from './assets/company_logo/phn_logo.png';

// Education Section Logo's
import mitslogo from './assets/education_logo/mits_logo.png';
import excellencelogo from './assets/education_logo/excellence_logo.png';
import mplogo from './assets/education_logo/mp_logo.png';

// Project Section Logo's
import roomlogo from './assets/work_logo/room_logo.png';
import templogo from './assets/work_logo/tem_logo.png';
import ranlogo from './assets/work_logo/random_logo.png';
import kalogo from './assets/work_logo/kal_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Familier with Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Familier with TypeScript', logo: typescriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: floobytelogo,
      role: "Fullstack Developer",
      company: "Floobyte",
      date: "January 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: persistentlogo,
      role: "Software Associate",
      company: "Persistent Systems",
      date: "june 2023 - August 2023",
      desc: "Acquired knowledge in Python, DBMS, SQL, and Linux commands during my learning phase at Persistent Systems, strengthening my technical foundation and problem-solving skills.",
      skills: [
        "Python",
        "linux",
        "DBMS",
        "SQL"
      ],
    },
    {
      id: 2,
      img: phntechnologylogo,
      role: "Web Development",
      company: "PHN Technology Pvt Ltd",
      date: "April 2023 - jun 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript. Collaborated with the design team.",
      skills: [
        "HTML",
        "CSS",
        "Javascript"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mitslogo,
      school: "Madhav Institute of Technology and Science, Gwalior",
      date: "Oct 2020 - june 2024",
      grade: "8.22 CGPA",
      desc: "I completed B.Tech in Internet of Things (IoT) from Madhav Institute of Technology and Science, Gwalior in 2024. I have a strong foundation in full-stack development with MERN stack, Next.js, Core Java, and SQL. During my studies, I completed courses like Web Development, DBMS, and Software Engineering, and gained hands-on experience through various projects and technical events.",
      degree: "Bachelor Of Technology - B.TECH",
    },
    
    {
      id: 1,
      img: excellencelogo,
      school: "Govt. Excellence H.S. School Raisen,Madhya Pradesh",
      date: "Apr 2017 - March 2018",
      grade: "81.2%",
      desc: "I completed my class 12 education from Govt. Excellence H.S. School Raisen,Madhya Pradesh, under the MPBSE board, where I studied Physics, Chemistry, and Mathematics",
      degree: "MPBSE(XII) - PCM with Mathematics",
    },
    {
      id: 2,
      img: mplogo,
      school: "M.P. Convent School,Bari",
      date: "Apr 2015 - March 2016",
      grade: "89.33%",
      desc: "I completed my class 10 education from M.P. Convent School,Bari, under the MPBSE board.",
      degree: "MPBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Room/Flat Booking system",
      description:
        "Room/Flat Booking System is a self-practice project built with a MERN stack (React.js, Node.js, Express.js, MongoDB) that allows users to book rooms or flats. It integrates Google Auth for user authentication, Redux-Toolkit for state management, and Firebase for additional functionalities. Insomnia is used for API testing and debugging. The project demonstrates a full-stack  for booking management with secure authentication and real-time updates.",
      image: roomlogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "REST-API", "Node js"],
      github: "https://github.com/arvind761999/-Modern-Real-Estate-Marketplace",
      webapp: "https://modern-real-estate-marketplace-8ejc.onrender.com/sign-up",
    },
    {
      id: 1,
      title: "Temprature_Convertor",
      description:
        "I developed a Temperature Converter web application using HTML, CSS, and JavaScript. It allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin with instant results. The interface is user-friendly and responsive.",
      image: templogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/arvind761999/Temprature_Converter",
      webapp: "https://temprature-convertor.onrender.com/",
    },
    {
      id: 2,
      title: "Guess random Number",
      description:
        "I built a Guess Random Number game using React.js. The application generates a random number, and users try to guess it, receiving real-time feedback on whether their guess is too high or too low. The app demonstrates state management and interactive UI handling in React.",
      image: ranlogo,
      tags: ["React js"],
      github: "https://github.com/arvind761999/Guess_Random_Number",
      webapp: "https://guess-random-number.onrender.com/",
    },
    {
      id: 3,
      title: "Kalvium Clone",
      description:
        "I developed a project named Kalvium Clone using React, Node.js, Express, and MongoDB. I worked on both frontend and backend, implementing user interfaces, API integrations, and database operations. The project simulates key features of the Kalvium platform, providing full-stack development experience.",
      image: kalogo,
      tags: ["React js"],
      github: "https://github.com/arvind761999/Kalvium_Clone",
      webapp: "https://bespoke-dragon-8c4b26.netlify.app/program",
    },
   
  ];  