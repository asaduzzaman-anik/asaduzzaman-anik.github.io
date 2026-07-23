export const siteConfig = {
  name: "Anik",
  fullName: "Md Asaduzzaman Anik",
  title: "Full Stack Developer",
  email: "asaduzzamananik12@gmail.com",
  location: "Bangladesh · Available remotely",
  github: "https://github.com/asaduzzaman-anik",
  linkedin: "https://www.linkedin.com/in/anik-asaduzzaman/",
  resume: "/resume.pdf",
  description:
    "Full Stack Developer specializing in Laravel, React, and Next.js. I transform complex workflows into fast, scalable, and thoughtfully designed web applications.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const trustStats = [
  { value: "3+", label: "Production systems" },
  { value: "12+", label: "Business modules" },
  { value: "120+", label: "Students mentored" },
  { value: "15+", label: "Capstones supervised" },
];

export const aboutContent = {
  headline: "Engineering with clarity, not complexity.",
  paragraphs: [
    "I help businesses and product teams turn operational workflows into reliable web software — especially ERP, CRM, SRM, and ecommerce systems — using Laravel on the backend and React or Next.js on the frontend.",
    "I focus on understandable architecture, strong access control, polished interfaces, and code that stays maintainable as the product grows. Open to full-stack roles and selected freelance projects.",
  ],
  traits: [
    {
      title: "Product-minded",
      description:
        "I connect technical decisions with user needs and business goals.",
    },
    {
      title: "Detail-focused",
      description:
        "I refine edge cases, interactions, permissions, and visual consistency.",
    },
  ],
};

export const skillCategories = [
  {
    icon: "L",
    iconColor: "rose",
    title: "Backend Development",
    description:
      "Secure APIs, business workflows, authentication, authorization, and modular application architecture.",
    tags: ["Laravel", "PHP", "REST API", "MySQL"],
  },
  {
    icon: "R",
    iconColor: "sky",
    title: "Frontend Engineering",
    description:
      "Responsive interfaces with reusable components, accessible interactions, and smooth client-side experiences.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "ui",
    iconColor: "violet",
    title: "Product & UI Systems",
    description:
      "Professional design systems, dashboards, forms, tables, states, and reusable interaction patterns.",
    tags: ["Responsive UI", "Accessibility", "UX", "Design Systems"],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Eclipse Auto Parts ERP",
    location: "Manchester, United Kingdom · Remote (contract)",
    duration: "Jan 2025 — Present",
    highlights: [
      "Designed and expanded CRM, SRM, procurement, inventory, and account intelligence workflows.",
      "Implemented role-based permissions, approval workflows, reporting, and operational dashboards.",
      "Improved usability and consistency across legacy Bootstrap interfaces and complex data tables.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "SquartUp",
    location: "Remote (contract)",
    duration: "Jul 2025 — Present",
    highlights: [
      "Architected a full-featured CRM & POS system with eCommerce, Account 360 View, and Churn Risk Detection.",
      "Built plug-and-play modules for Laradashboard — reusable architecture, backend logic, and React UI components.",
      "Collaborated remotely with clients to translate business requirements into scalable, maintainable codebases.",
    ],
  },
  {
    role: "Lecturer (Computer Science)",
    company: "Royal University of Dhaka",
    location: "Dhaka, Bangladesh",
    duration: "May 2022 — Oct 2025",
    highlights: [
      "Delivered undergraduate courses in Web Development, Software Engineering, and Programming Fundamentals.",
      "Mentored 120+ students in full-stack development, version control, and modern UI/UX principles.",
      "Supervised 15+ final-year capstone projects from ideation to deployment.",
    ],
  },
  {
    role: "Independent Developer",
    company: "Personal & academic projects",
    location: "Independent development",
    duration: "2024 — 2025",
    highlights: [
      "Built role-based job portal workflows for employers, applicants, and administrators.",
      "Developed a hospital management API with JWT authentication and permission-aware resources.",
      "Created responsive, validation-focused interfaces using React, Laravel Blade, and Tailwind CSS.",
    ],
  },
];

export const projects = [
  {
    title: "Eclipse Auto Parts ERP",
    category: "Enterprise application",
    categoryColor: "indigo",
    description:
      "A modular ERP platform supporting ecommerce, retail stores, procurement, CRM, SRM, inventory, and reporting workflows.",
    tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    live: "https://eclipseautoparts.com/",
    github: "",
    image: "/projects/eclipse-erp.png",
    status: "live" as const,
    problem:
      "An auto-parts business needed connected ecommerce, store, procurement, and CRM workflows instead of fragmented tools.",
    role: "Full Stack Developer — backend modules, permissions, and UI consistency",
    outcomes: [
      "Shipped CRM, SRM, procurement, inventory, and account-intelligence workflows in one modular ERP.",
      "Implemented role-based permissions, approval flows, reporting, and operational dashboards.",
      "Improved usability across legacy Bootstrap screens and dense data tables used daily by staff.",
    ],
  },
  {
    title: "Laradashboard Platform",
    category: "Dashboard platform",
    categoryColor: "violet",
    description:
      "Modular dashboard platform with plug-and-play architecture, reusable components, and integrated React UI.",
    tags: ["Laravel", "React", "REST APIs"],
    live: "https://laradashboard.com/",
    github: "https://github.com/laradashboard/laradashboard",
    image: "/projects/laradashboard.png",
    status: "live" as const,
    problem:
      "Teams needed a reusable Laravel dashboard foundation instead of rebuilding auth, modules, and admin UI for every product.",
    role: "Full Stack Developer — module architecture, APIs, and React UI components",
    outcomes: [
      "Built plug-and-play modules for reusable backend logic and React admin interfaces.",
      "Delivered CRM & POS capabilities including ecommerce, Account 360 View, and churn-risk signals.",
      "Enabled faster product setup through a maintainable, modular Laravel + React stack.",
    ],
  },
  {
    title: "ChakriBazar Job Portal",
    category: "Marketplace platform",
    categoryColor: "emerald",
    description:
      "A role-based recruitment platform where applicants find opportunities, employers manage hiring, and admins oversee moderation.",
    tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    live: "",
    github: "",
    image: "/projects/chakribazar.png",
    status: "private" as const,
    problem:
      "Recruitment needed separate, permission-aware flows for applicants, employers, and administrators.",
    role: "Full Stack Developer — role workflows, validation, and UI",
    outcomes: [
      "Designed role-based hiring workflows for applicants, employers, and admins.",
      "Built moderation and opportunity-management paths with Laravel and MySQL.",
      "Shipped responsive, validation-focused Blade + Tailwind interfaces.",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Clarify goals, users, workflows, constraints, and what success should look like.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Plan architecture, data models, permissions, interfaces, and reusable components.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop incrementally with validation, error handling, and maintainable code structure.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Test edge cases, improve usability, optimize performance, and prepare for launch.",
  },
];
