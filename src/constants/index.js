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
    travismathew,
    experis,
    fortyeightws,
    threelinedesign,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sr eCommerce Software Engineer",
      company_name: "TravisMathew",
      icon: travismathew,
      iconBg: "#383E56",
      date: "Sep 2019 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Responsible and owned the successful delivery of projects on-time with the development and implementation of all technical scopes of work across multiple projects",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Experis",
      icon: experis,
      iconBg: "#E6DEDD",
      date: "Dec 2017 - Jun 2019",
      points: [
        "Developed front-end UI portal using JavaScript libraries to provide user interface for hospital diagnostic systems",
        "Integrated web applications with Elasticsearch, Logstash, and Kibana stack to visualize data and generate interactive dashboards",
        "Implemented Angular4 concepts: Interpolation, Input variables, Bootstrapping, NgFor, NgIf, Router Outlet, binding the click event, Component decorator, binding to the hidden property",
        "Worked on Angular2 concepts like building the components, Data binding, String Interpolation, Property Binding, Event Binding, Two-way Data binding (with the help of Forms Module), Directives using ngif Structural Directive) to Output Data Conditionally",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "48WS",
      icon: fortyeightws,
      iconBg: "#383E56",
      date: "Oct 2016 - Dec 2019",
      points: [
        "Involved in Agile/ SCRUM based approach to UI development",
        "Developed code to convert design wireframes into website elements, ensured scalability of front-end elements by optimizing them for loading speed and performance",
        "Used skills in debugging to unit test code, enhance the cross-browser functionality, and create an effective customer experience",
        "Created several successful web campaigns to meet project goals",
      ],
    },
    {
      title: "Web Developer",
      company_name: "3 Line Design",
      icon: threelinedesign,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - Oct 2016",
      points: [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and PHP",
        "Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Lorem Ipsum",
      designation: "CFO",
      company: "Lorem Ipsum",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Lorem Brown",
      designation: "COO",
      company: "Lorem Corp",
      image: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ipsum White",
      designation: "CTO",
      company: "456 Ipsum",
      image: "https://randomuser.me/api/portraits/lego/0.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent - Place Holder",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT  - Place Holder",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide - Place Holder",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };