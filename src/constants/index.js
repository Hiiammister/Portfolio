import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company: "Ayyan Tech-Edu Systems Pvt. Ltd.",
    date: "Dec 2023 – April 2024",
    location: "Mumbai, India",
    points: [
      "Optimized website performance by 35% using front-end refactoring and caching strategies.",
      "Reduced page load time by ~1.8 seconds, improving overall UX.",
      "Developed scalable React modules following modern UI/UX standards.",
      "Researched and integrated emerging frameworks to boost development efficiency."
    ],
  },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Hiiammister',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Spatial Temporal Analysis Learning',
        description: 'Developed a system which analyzes and visualizes spatiotemporal data using Python by generating heatmaps, trajectory insights, temporal patterns, and clustering on synthetic datasets.',
        link: 'https://github.com/Hiiammister/Spatial_Temporal_Analysis_Learning.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Book Shop using Tkinter',
        description: 'A Python GUI book shop application built with Tkinter and SQLite that manages books in four sections (manga, fiction, novels, horror) with an interactive interface and database support.',
        link: 'https://github.com/Hiiammister/Book-Shop-using-tkinter.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Dynamic Food Price Prediction System',
        description: 'A Python project that predicts and adjusts dynamic prices for food items like vadapav and samosa using machine learning models (e.g., Linear Regression and Random Forest) and visualizes price outputs interactively.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Weather Forecasting Application',
        description: 'A web application that uses the OpenWeather API to fetch and display real-time weather forecasts for user-selected locations with an intuitive interface.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    }
];