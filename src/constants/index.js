//THIS IS THE SOURCE OF CONTENT , CHANGE IT HERE AND GETS REFERENCES AVERYWHERE//

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    typeform,
    amalgama,
    ironhack,
    king,
    skypulse,
    foodfolio,
    ninja,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "JavaScript Player",
      icon: mobile,
    },
    {
      title: "FullStack Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Facilities Specialist",
      company_name: "King",
      icon: king,
      iconBg: "#383E56",
      date: " 2014 - December 2016",
      points: [
        "I helped our team to provide a high standard service to our internal costumers and key stakeholders across three different offices over 8000sqm, ranked top 25 in the world.",
        "Collaborating with cross-functional teams including designers, project managers, and stake holders to create high-quality service consistently during the huge expansion from startup to Market Leader.",
        "Responsible for hard and soft services delivery, Planned and Reactive maintenance operations as well as refurbishments and direct contact with architects and design teams.",
        "Management and supervision of our in-house HelpDesk",
        "Physical security and international H&S and legislation specialist."
      ],
    },
    {
      title: "Senior Facilities Coordinator",
      company_name: "Typeform",
      icon: typeform,
      iconBg: "#E6DEDD",
      date: "December 2016 - August 2022",
      points: [
        "Actively involved in cross-functional project and facilities management initiatives.",
        "Planned and designed a transition strategy post Covid to transfer the workforce into a seamless and efficient remote work environment that caters to the needs of every employee and aligns with Typeform's core values and culture.  ",
        "Yearly Budgets, projects management in expansion of offices from 50 employees to 300 strong.",
        "Implementing company's design guides and brand codes to 3 sites , Barcelona , San Francisco and Berlin.",
        
      ],
    },
    {
      title: "Ironhack SullStack Course",
      company_name: "Ironhack",
      icon: ironhack,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Succesfully passed the year intensive FullStack | JavaScript development course including pre-work, acceptation tests and career development.",
        "Acquisition of industry driven skills through HTML5, CSS3 and ReactJS to build responsive Web Apps and create database-driven applications using ExpressJS, implementing RESTful APIs and managing data in MongoDB. ",
        "Endured Pair Programming projects, Agile Methodologies course and Git Branching management course.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "FullStack React Developer",
      company_name: "Amalgama-Digital Co.",
      icon: amalgama,
      iconBg: "#383E56",
      date: "October 2022 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional international teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Direct contact with clients from scratch to delivery in both the English and the French divisions ensuring client satisfaction by building customized solutions using a broad spectrum of technologies.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a websites as beautiful as our product, but Joandi proved me wrong.",
      name: "Patricia Aroca",
      designation: "CEO",
      company: "Amalgama Digital",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their client's success like Joandi does.",
      name: "Mia Garzón",
      designation: "CGF",
      company: "Typeform",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      testimonial:
        "After Joandi optimized our e-commerce, our sales increased by 30%. We can't thank him enough!",
      name: "Zoa Wang",
      designation: "CFO",
      company: "King",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sky Pulse",
      description:
        "Web-based platform that allows users to login,search, share, and manage content about drone technology, photography, providing a convenient platform for amateurs and professionals to connect.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: skypulse,
      source_code_link: "https://github.com/JoanDidac/frontend-template-m3",
    },
    {
      name: "Food Folio",
      description:
        "Mobile first App that enables users to search for recipies in a huge database nurished and curated by users. Full CRUD with likes and favourites so users can build up a personalized recipe book.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: foodfolio,
      source_code_link: "https://food-folio-app.fly.dev/",
    },
    {
      name: "Ninja Havoc 美 ~ 🥷 ",
      description:
        "Join Hattori Hanzo as he skillfully defends his town from the relentless samurai menace in this Arcade styled, engaging and dynamic game built as first project at Ironhack using HTML5 Canvas and pure JavaScript.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: ninja,
      source_code_link: "https://github.com/JoanDidac/Ninja-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };