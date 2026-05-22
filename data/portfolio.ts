export type SkillCategory = {
  title: string;
  items: string[];
};

export type Experience = {
  title: string;
  companyType: string;
  date: string;
  points: string[];
  website?: string;
};

export type Project = {
  name: string;
  image: string;
  description: string;
  tech: string[];
  features: string[];
  detailsUrl: string;
  githubUrl: string;
};

export type Education = {
  institute: string;
  program: string;
  period: string;
  location: string;
};

export const portfolio = {
  name: "Prageeth Gunarathne",
  logoText: "Prageeth.dev",
  role: "Full-Stack Developer | IT Undergraduate | Data Science Enthusiast",
  email: "pgunarathne123@gmail.com",
  phone: "+94 71 903 0204",
  linkedin: "https://linkedin.com/in/prageeth-gunarathne",
  github: "https://github.com/PrageeDG",
  heroBadge: "Full-Stack Developer | IT Undergraduate",
  heroTitle: "Hi, I'm Prageeth Gunarathne",
  heroSubtitle:
    "I build modern full-stack web applications, intelligent dashboards, and scalable software solutions.",
  about:
    "Passionate IT undergraduate specializing in Full-Stack Development, Software Engineering, and Data Science. I have hands-on experience building MERN-stack and Spring Boot applications with REST APIs, secure authentication, dashboards, and intelligent analytics platforms. I enjoy solving real-world problems through clean architecture, responsive interfaces, and scalable backend systems. Alongside software development, I am also professionally skilled in mobile phone repair, including hardware diagnostics, software recovery, flashing, and troubleshooting, which I continue as a side hobby and practical technical craft.",
  skills: [
    { title: "Programming Languages", items: ["JavaScript", "Java", "Python", "C/C++"] },
    { title: "Frontend Technologies", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"] },
    { title: "Backend Technologies", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"] },
    { title: "Databases", items: ["MongoDB", "MySQL"] },
    { title: "Authentication & Security", items: ["JWT Authentication", "Google OAuth 2.0"] },
    { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Power BI", "VS Code"] },
    { title: "Other Technologies", items: ["WebSocket", "AI Chatbot Integration", "Responsive UI Design"] },
  ] as SkillCategory[],
  experience: [
    {
      title: "Python Developer (Remote)",
      companyType: "CEYPEX Technologies | Startup Company",
      date: "2026 - Present",
      points: [
        "Working remotely as a Python developer on startup-focused product features and backend tasks.",
        "Contributing to implementation, debugging, and collaborative delivery in a fast-paced development environment.",
      ],
      website: "https://cypex-website.vercel.app/",
    },
    {
      title: "Full-Stack Developer",
      companyType: "Student Project Teams",
      date: "2024 - Present",
      points: [
        "Collaborated within Agile development teams to build scalable full-stack web applications using MERN-stack and Spring Boot.",
        "Designed responsive front-end interfaces using React and Tailwind CSS while integrating RESTful APIs.",
        "Participated in sprint planning, debugging, Git version control, and UI/UX optimization.",
      ],
    },
    {
      title: "Independent Mobile Repair Technician",
      companyType: "Hardware Troubleshooting Specialist",
      date: "2021 - Present",
      points: [
        "Performed hardware diagnostics, software recovery, and troubleshooting for smartphones and electronic devices.",
        "Handled OS installations, flashing, customer support, and device optimization services.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: "Smart Campus Operations Hub",
      image: "/smart campus.png",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "WebSocket"],
      description:
        "A smart campus management platform for managing university resources, facilities, bookings, maintenance tickets, SLA monitoring, real-time notifications, Google OAuth authentication, and AI chatbot support.",
      features: ["Resource Booking", "SLA Tracking", "Real-time Alerts"],
      detailsUrl: "#",
      githubUrl: "https://github.com/PrageeDG",
    },
    {
      name: "ClashGuard - Academic Deadline Collision & Burnout Detection System",
      image: "/clash gaurd.png",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      description:
        "A MERN-stack academic planning system that detects deadline collisions, calculates workload intensity, predicts burnout risk, displays heatmaps, and sends deadline warnings.",
      features: ["Collision Detection", "Burnout Prediction", "Weekly Heatmaps"],
      detailsUrl: "#",
      githubUrl: "https://github.com/PrageeDG",
    },
    {
      name: "Agricultural Trading System",
      image: "/projects/agri-trade.svg",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "A full-stack agricultural marketplace connecting farmers and customers with authentication, role-based access, product management, order tracking, dashboards, analytics, and search filtering.",
      features: ["Role-based Access", "Order Tracking", "Analytics Dashboard"],
      detailsUrl: "#",
      githubUrl: "https://github.com/PrageeDG",
    },
    {
      name: "Online Voting System",
      image: "/projects/online-voting.svg",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "A secure responsive online voting platform with user authentication, session handling, protected voting mechanisms, and admin-controlled results.",
      features: ["Secure Authentication", "Protected Voting", "Admin Results Control"],
      detailsUrl: "#",
      githubUrl: "https://github.com/PrageeDG",
    },
    {
      name: "Python Data Science Projects",
      image: "/python.png",
      tech: ["Python", "Scikit-learn", "Matplotlib", "Power BI"],
      description:
        "Data analysis and machine learning projects involving EDA, feature engineering, regression/classification models, dashboards, and visual reports.",
      features: ["EDA Pipelines", "ML Models", "Visual Reporting"],
      detailsUrl: "#",
      githubUrl: "https://github.com/PrageeDG",
    },
  ] as Project[],
  education: [
    {
      institute: "Sri Lanka Institute of Information Technology (SLIIT)",
      program: "BSc (Hons) in Information Technology",
      period: "2023 - Present",
      location: "Malabe, Sri Lanka",
    },
    {
      institute: "Sivali Central College",
      program: "G.C.E Advanced Level - Science Stream",
      period: "Completed",
      location: "Ratnapura, Sri Lanka",
    },
  ] as Education[],
};
