export const siteConfig = {
  name: "Anik",
  fullName: "Md Asaduzzaman Anik",
  title: "Full Stack Developer",
  email: "asaduzzamananik12@gmail.com",
  location: "Bangladesh · Available remotely",
  github: "https://github.com/asaduzzaman-anik",
  linkedin: "https://www.linkedin.com/in/anik-asaduzzaman/",
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
  { value: "3+", label: "Production projects" },
  { value: "12+", label: "Business modules" },
  { value: "100%", label: "Responsive delivery" },
  { value: "Global", label: "Remote collaboration" },
];

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
    location: "Manchester, United Kingdom · Remote",
    duration: "2025 — Present",
    highlights: [
      "Designed and expanded CRM, SRM, procurement, inventory, and account intelligence workflows.",
      "Implemented role-based permissions, approval workflows, reporting, and operational dashboards.",
      "Improved usability and consistency across legacy Bootstrap interfaces and complex data tables.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "SquartUp",
    location: "Remote",
    duration: "July 2025 — Present",
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
    duration: "May 2022 — October 2025",
    highlights: [
      "Delivered undergraduate courses in Web Development, Software Engineering, and Programming Fundamentals.",
      "Mentored 120+ students in full-stack development, version control, and modern UI/UX principles.",
      "Supervised 15+ final-year capstone projects from ideation to deployment.",
    ],
  },
  {
    role: "Backend & API Development",
    company: "Application Projects",
    location: "Independent and academic development",
    duration: "2024 — 2026",
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
