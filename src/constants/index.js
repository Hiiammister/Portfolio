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
export const certifications = [
  {
    id: 1,
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    theme: "btn-back-yellow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/epA3EglyiDMh%2FqUuu0h2RU6ehFnZlmxSn6bitOZdW9I%3D", // Replace with actual badge image URL
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5375472",
  },
  {
    id: 2,
    title: "Build a Secure Google Cloud Network",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/R0PY7VGAcAz5JmrFUtfzHXnZppltPT8QE2efaWhq4Ew%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5374365",
  },
  {
    id: 3,
    title: "Perform Foundational Infras. Tasks in Google Cloud`",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/J%2F2cMSaiTVMQHOAlZpd%2BoEWBsyqegUpe0%2Fl3k26abvs%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5356102",
  },
  {
    id: 4,
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/sRCCMArUUjM9DvfPlVP%2FtvTR1dzfA6UfA%2FS7Ps3Zp8o%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5355348",
  },
  {
    id: 5,
    title: "Data, ML, and AI in Google Cloud",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/px5phE2bWY%2FDSwKkP2JFKT8tbXio8MHkd%2BqwSKJ1K%2F0%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5352205",
  },
  {
    id: 6,
    title: "Networking & Security in Google Cloud",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/Vs6IHP%2FtSwK6mE4DYR6shQBqETyiPjJ7QmeP2qm794E%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5328547",
  },
  {
    id: 7,
    title: "Infrastructure in Google Cloud",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/KnwQTdmMFl3m0jcrSMDsEtxihMCUUcTGd4Clgjsrsf8%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5287383",
  },
  {
    id: 8,
    title: "Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/Y1kBnL6iQgHdQoHV1v0jjZJjOzgqX2w4gp0bMHuZCrk%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5200433",
  },
  {
    id: 9,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    theme: "btn-glow",
    date: "2023",
    badgeUrl: "https://cdn.qwiklabs.com/EQ96YVRPhxwT%2BUm25F8dyHV1t3WYb7mQbxYXKipA9ik%3D",
    verificationUrl: "https://www.skills.google/public_profiles/7783a32a-9ec8-4665-b1e2-6226fb6a20af/badges/5195335",
  },

  // Add all your earned badges
];