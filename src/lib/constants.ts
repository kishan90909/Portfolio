import {
  Code2,
  Brain,
  Wrench,
  Database,
  Blocks,
  type LucideIcon,
} from "lucide-react";
import { config } from "./config";

// ─── Personal Info (sourced from central config)
export const PERSONAL_INFO = {
  name: config.personal.name,
  title: config.personal.title,
  tagline: config.personal.tagline,
  email: config.personal.email,
  github: config.socials.github,
  linkedin: config.socials.linkedin,
  location: config.personal.location,
  resumePath: config.personal.resumePath,
  profileImage: config.personal.profileImage,
} as const;

// ─── Typing Animation Strings
export const TYPING_STRINGS = [...config.typingStrings];

// ─── Statistics
export const STATS = [
  { label: "Internship", value: "1+", suffix: "Experience" },
  { label: "Certifications", value: "8+", suffix: "" },
  { label: "National-level Hackathons", value: "2+", suffix: "" },
  { label: "Build Projects", value: "9+", suffix: "" },
] as const;

// ─── Skills
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Front-end",
    icon: Brain,
    skills: [
      "React.js",
      "HTML5",
      "Tailwind CSS",
      "CSS3",
      "Bootstrap",
      "Redux",
      "React Router",
      "Responsive UI/UX",
    ],
  },
  {
    title: "Back-end",
    icon: Brain,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "Flask",
      "JWT Authentication",
      "MVC Architecture",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Vite", "VS Code", "npm"],
  },
  {
    title: "Concepts",
    icon: Blocks,
    skills: [
      "OOP",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Debugging",
      "Performance Optimization",
    ],
  },
];

// ─── Experience
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "MERN Stack Developer Intern",
    company: "Excelsior Technologies",
    period: "May 2026 – Oct 2026",
    description:
      "Building responsive web applications and REST APIs using the MERN stack.",
    highlights: [
      "MERN stack development",
      "Responsive UI and reusable components",
      "REST API integration",
      "Database management and CRUD operations",
      "Debugging and performance optimization",
      "Git, GitHub, and team collaboration",
    ],
  },
];

// ─── Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "WorkFlow",
    title: "Project Management platform",
    description:
      "A full-stack Project management platform built with the MERN stack.",
    longDescription:
      "Engineered a scalable full-stack project management platform with a centralized dashboard to manage projects, track task progress, coordinate teams, and monitor overall project performance. Implemented role-based workflows for Admin, Project Manager, and Team Member roles, covering user administration, team assignments, project planning, and task management. Integrated interactive Kanban boards with drag-and-drop, Socket.IO notifications, workload monitoring, risk analysis, project analytics, and audit logging. Addressed challenges such as fragmented project tracking, communication delays, missed deadlines, and uneven workload distribution through centralized task management and real-time monitoring.",
    image: "/projects/WorkFlow.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.IO",
    ],
    category: "Full-Stack",
    githubUrl:
      "https://github.com/kishan90909/WorkFlow---Project_Management_Platform",
    liveUrl: "https://workflowpro1.netlify.app",
    featured: true,
  },
  {
    id: "RDX-Fast-Food",
    title: "Restaurant Management platform",
    description:
      "A full-stack restaurant management platform built with the MERN stack.",
    longDescription:
      "Developed a full-stack restaurant management platform using React.js, Node.js, Express.js, and MongoDB. Implemented secure authentication with JWT, OTP verification, and role-based access control. Built features for online ordering, checkout, delivery and pickup, real-time order tracking, menu and inventory management, kitchen operations, invoice generation, and admin analytics. Added customer engagement features such as loyalty points, coupons, offers, reviews, and personalized recommendations to improve the overall user experience.",
    image: "/projects/Restaurant.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
    ],
    category: "Full-Stack",
    githubUrl:
      "https://github.com/kishan90909/RDX-Fast-Food---Restaurant-Management-platform",
    liveUrl: "https://rdx-fast-food.netlify.app/",
    featured: true,
  },
  {
    id: "AutoCare",
    title: "Vehicle Service Management System",
    description:
      "Web-based platform for managing vehicle servicing, bookings, and customer records.",
    longDescription:
      "Developed a full-featured vehicle service management system that allows users to book services, track service status, and manage vehicle details. Admin features include service scheduling, customer management, and service history tracking. The system focuses on usability, responsiveness, and real-world business workflows.",
    image: "/projects/Vehicle.png",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    category: "Full-Stack",
    githubUrl:
      "https://github.com/kishan90909/Autocare---Vehicle-Service-Management-System",
    liveUrl: "https://autocare-6x78.onrender.com/",
    featured: true,
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "A premium, performance-optimized personal portfolio built with Next.js and Framer Motion.",
    longDescription:
      "Designed and developed a world-class personal portfolio website featuring smooth animations, dark/light mode, command palette, and a minimalist luxury aesthetic. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for a premium user experience.",
    image: "/projects/portfolio.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Front-end",
    githubUrl: "https://github.com/kishan90909/Portfolio",
    liveUrl: "https://kishanportfolios.netlify.app/",
    featured: true,
  },
  {
    id: "QR-Code",
    title: "QR-Code Generater",
    description: "Simple tool to generate QR codes instantly from user input.",
    longDescription:
      "Created a QR code generator web application that enables users to generate QR codes for text, URLs, and other inputs instantly. Focused on minimal design, fast processing, and ease of use for everyday utility.",
    image: "/projects/QRCode.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "Back-end",
    githubUrl: "https://github.com/kishan90909/QR-Code-Generator",
    liveUrl: "https://kishan90909.github.io/QR-Code-Generator/",
    featured: false,
  },
  {
    id: "Converter",
    title: "Currency Converter Web Application",
    description:
      "Real-time currency converter with accurate exchange rates and simple user interface.",
    longDescription:
      "Developed a currency converter web application that allows users to convert values between multiple international currencies in real time. The application integrates API-based exchange rates and provides a fast, responsive interface for smooth user experience.",
    image: "/projects/CurrencyConverter.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "API"],
    category: "Back-end",
    githubUrl: "https://github.com/kishan90909/Currency_Converter",
    liveUrl: "https://kishan90909.github.io/Currency_Converter/",
    featured: false,
  },
  {
    id: "weather dashboard",
    title: "weather dashboard",
    description:
      "A modern weather dashboard built with React that provides real-time weather information",
    longDescription:
      "A modern weather dashboard built with React that provides real-time weather information, hourly forecasts, and multi-day weather predictions using the Open-Meteo API. Users can search weather conditions by city or use their current location to view detailed weather insights, including temperature, humidity, precipitation, wind speed, and forecast trends through interactive charts.",
    image: "/projects/Weather.png",
    technologies: [
      "React 19",
      "Vite",
      "JavaScript (ES6+)",
      "Open-Meteo API",
      "Recharts",
      "CSS3",
    ],
    category: "Back-end",
    githubUrl: "https://github.com/kishan90909/Weather_APIS",
    liveUrl: "https://weather-kishan001.netlify.app/",
    featured: false,
  },
  {
    id: "Jewlo",
    title: "Jewelry E-Commerce",
    description:
      "Jewlo is a modern jewelry e-commerce landing page inspired by premium Shopify jewelry stores.",
    longDescription:
      "The project focuses on elegant UI design, responsive layouts, product showcases, category sections, promotional banners, and shopping cart interactions. Built with HTML, CSS, and JavaScript, the website delivers a clean shopping experience with a luxury brand aesthetic.",
    image: "/projects/Jewelry.png",
    technologies: ["HTML5", "CSS", "JavaScript"],
    category: "Front-end",
    githubUrl: "https://github.com/kishan90909/jewlo_Project",
    liveUrl: "https://kishan90909.github.io/jewlo_Project/",
    featured: false,
  },
  {
    id: "SHOOZ",
    title: "Modern Shoe E-Commerce Store",
    description:
      "SHOOZ is a modern React-based e-commerce application designed for showcasing and selling footwear products.",
    longDescription:
      "The application provides a smooth shopping experience with  features such as: Product browsing, Cart management, Wishlist functionality, Category filtering, LocalStorage persistence, Responsive user interface. Built using React 19, React Router, and Vite, the project demonstrates modern frontend development practices including reusable components, state management with hooks, and dynamic UI rendering.",
    image: "/projects/Shoe.png",
    technologies: [
      "React",
      "Vite",
      "React Router DOM",
      "JavaScript ES6+",
      "CSS3",
      "LocalStorage API",
      "Remix Icons",
    ],
    category: "Front-end",
    githubUrl: "https://github.com/kishan90909/SHOOZ",
    liveUrl: "https://shooz-kishan001.netlify.app/",
    featured: false,
  },
  // {
  //   id: "",
  //   title: "",
  //   description: "",
  //   longDescription: "",
  //   image: "/projects/portfolio.svg",
  //   technologies: [],
  //   category: "Front-end",
  //   githubUrl: "",
  //   liveUrl: "",
  //   featured: false,
  // },
];

// ─── Hackathons
export interface Hackathon {
  title: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  result?: string;
}

export const HACKATHONS: Hackathon[] = [
  {
    title: "IndiaAI Impact Gen-AI",
    date: "2024",
    location: "India",
    description:
      "Participated in the IndiaAI Impact Gen-AI Hackathon, focusing on generative AI solutions for real-world problems.",
    highlights: [
      "Built generative AI prototype for social impact",
      "Implemented prompt engineering strategies",
      "Presented solution to industry judges",
    ],
    result: "Participant",
  },
  {
    title: "Bharatiya Antraiksh",
    date: "2025",
    location: "India",
    description:
      "Participated in a national-level hackathon, developing a full-stack web application.",
    highlights: [
      "Built a responsive frontend using React.js",
      "Developed REST APIs using Node.js and Express.js",
      "Integrated MongoDB for data management",
      "Collaborated with team members to build the project",
    ],
    result: "Participant",
  },
];

// ─── Certifications
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Front-end Developer (React)",
    issuer: "HackerRank",
    date: "2026",
    description:
      "Demonstrates skills in React.js, component-based development, and building interactive user interfaces.",
  },
  {
    title: "Node.js",
    issuer: "HackerRank",
    date: "2026",
    description:
      "Covers Node.js fundamentals, server-side development, asynchronous programming, and backend application development.",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    date: "2026",
    description:
      "Covers JavaScript fundamentals, functions, objects, arrays, and problem-solving techniques.",
  },
  {
    title: "Python Developer Certification",
    issuer: "Parul University",
    date: "2025",
    description:
      "Covers Python programming, core language concepts, data structures, and application development.",
  },
  {
    title: "Java Programming",
    issuer: "IIT Bombay",
    date: "2025",
    description:
      "Covers Java programming fundamentals, object-oriented concepts, and core programming principles.",
  },
  {
    title: "NPTEL",
    issuer: "IIT Kharagpur",
    date: "2025",
    description:
      "Completed an NPTEL certification program focused on computer science and technical concepts.",
  },
  {
    title: "PHP & SQL Training",
    issuer: "IIT Bombay",
    date: "2025",
    description:
      "Covers PHP server-side programming, SQL queries, database operations, and dynamic web development.",
  },
  {
    title: "Software Engineering",
    issuer: "JPMorgan Chase",
    date: "2025",
    description:
      "Covers software development practices, problem-solving, code quality, and collaborative engineering workflows.",
  },
];

// ─── Achievements
export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "2x National Hackathon Participant",
    description:
      "Participated in two national-level hackathons, gaining experience in teamwork, problem-solving, and full-stack project development.",
    icon: "trophy",
  },
  {
    title: "MERN Stack Developer Intern",
    description:
      "Gained practical experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js at Excelsior Technologies.",
    icon: "briefcase",
  },
  {
    title: "8+ Professional Certifications",
    description:
      "Earned certifications in Java, Python, React.js, Node.js, Operating Systems, and Software Engineering.",
    icon: "award",
  },
  {
    title: "MCA Graduate, Parul University",
    description:
      "Completed a Master of Computer Applications degree with a focus on software development and computer science.",
    icon: "graduation-cap",
  },
];

// ─── Navigation
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

// ─── Command Palette
export interface Command {
  label: string;
  shortcut?: string;
  action: string;
  section: string;
}

export const COMMANDS: Command[] = [
  { label: "Home", shortcut: "H", action: "#hero", section: "Navigation" },
  { label: "About", shortcut: "A", action: "#about", section: "Navigation" },
  { label: "Skills", shortcut: "S", action: "#skills", section: "Navigation" },
  {
    label: "Experience",
    shortcut: "E",
    action: "#experience",
    section: "Navigation",
  },
  {
    label: "Projects",
    shortcut: "P",
    action: "#projects",
    section: "Navigation",
  },
  {
    label: "Certifications",
    shortcut: "C",
    action: "#certifications",
    section: "Navigation",
  },
  {
    label: "Contact",
    shortcut: "K",
    action: "#contact",
    section: "Navigation",
  },
  {
    label: "Download Resume",
    shortcut: "R",
    action: "resume",
    section: "Actions",
  },
  { label: "Toggle Theme", shortcut: "T", action: "theme", section: "Actions" },
  { label: "Go to GitHub", shortcut: "G", action: "github", section: "Links" },
  {
    label: "Go to LinkedIn",
    shortcut: "L",
    action: "linkedin",
    section: "Links",
  },
];
