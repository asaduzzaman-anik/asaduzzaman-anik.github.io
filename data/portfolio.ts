export const siteConfig = {
  name: "Anik",
  fullName: "Md Asaduzzaman Anik",
  title: "Full Stack Developer",
  email: "anik.builds@gmail.com",
  location: "Dhaka, Bangladesh · Available remotely",
  github: "https://github.com/asaduzzaman-anik",
  avatar: "https://avatars.githubusercontent.com/u/31627055?v=4",
  linkedin: "https://www.linkedin.com/in/anik-asaduzzaman/",
  resume: "/resume.pdf",
  url: "https://asaduzzaman-anik.github.io",
  seoTitle: "Md Asaduzzaman Anik | Full Stack Developer | Django & Laravel",
  description:
    "Full Stack Developer specializing in Django, Django REST Framework, Laravel, React, and Next.js. I build scalable web applications, REST APIs, ERP systems, CRM platforms, inventory software, and modern business applications.",
  intro:
    "Full Stack Developer building scalable web applications with Django, Laravel, React, and Next.js. I build business systems, REST APIs, and modern web interfaces that turn complex workflows into reliable software.",
};

export const heroStack = [
  { label: "Backend", tech: "Django · DRF · Laravel · PHP" },
  { label: "Frontend", tech: "React · Next.js · TypeScript" },
  { label: "Databases", tech: "MySQL · PostgreSQL · SQLite" },
  { label: "Engineering", tech: "REST APIs · Auth · RBAC · Git" },
];

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
    "I help businesses and product teams turn operational workflows into reliable web software using Django, Django REST Framework, Laravel, React, and Next.js.",
    "My professional work centres on Laravel business systems — ERP, CRM, POS, and ecommerce — while my Django projects cover REST APIs, inventory, and role-based applications. Across both, I focus on maintainable architecture, secure authentication and authorization, clean APIs, and practical user experiences.",
    "Open to full-stack roles and selected freelance opportunities.",
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
    icon: "backend" as const,
    iconColor: "rose",
    title: "Backend Engineering",
    description:
      "Secure REST APIs, business workflows, authentication, authorization, and modular application architecture.",
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "PHP",
      "Laravel",
      "REST APIs",
      "JWT Auth",
      "RBAC",
    ],
  },
  {
    icon: "frontend" as const,
    iconColor: "sky",
    title: "Frontend Engineering",
    description:
      "Responsive interfaces with reusable components, accessible interactions, and smooth client-side experiences.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Inertia.js",
      "Tailwind CSS",
      "Blade",
    ],
  },
  {
    icon: "database" as const,
    iconColor: "emerald",
    title: "Databases & Data",
    description:
      "Relational data modelling, transactional integrity, and caching for data-heavy business applications.",
    tags: ["MySQL", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    icon: "delivery" as const,
    iconColor: "violet",
    title: "Engineering & Delivery",
    description:
      "Automated testing, background jobs, and repeatable delivery with version control and CI/CD.",
    tags: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "pytest",
      "Vitest",
      "Pest",
      "Celery",
      "Docker",
    ],
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development with Python, Django & React",
    issuer: "Ostad",
    year: "2026",
    url: "https://ostad.app/share/certificate/c48190-md-asaduzzaman-anik",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "SquartUp",
    location: "Remote",
    duration: "Jan 2025 — Present",
    highlights: [
      "Designed and shipped a multi-module CRM, POS, and eCommerce platform for Eclipse Auto Parts, covering Finance, CRM, SRM, procurement, and inventory workflows.",
      "Implemented role-based permissions, approval workflows, reporting, operational dashboards, and account health analytics (Account 360, churn risk, health monitoring).",
      "Built scheduled backend jobs for daily customer analysis pipelines, reducing manual reporting effort.",
      "Developed reusable Laradashboard modules — Eloquent models, database schemas, backend services, and React UI components for plug-and-play features.",
      "Collaborated remotely with clients to translate business requirements into scalable, maintainable APIs and codebases (Laravel/PHP in production).",
    ],
  },
  {
    role: "Lecturer (Computer Science)",
    company: "Royal University of Dhaka",
    location: "Dhaka, Bangladesh",
    duration: "May 2022 — Apr 2025",
    highlights: [
      "Delivered undergraduate courses in Web Development, Software Engineering, and Data Structures & Algorithms, with emphasis on Python, JavaScript, and web fundamentals.",
      "Mentored 120+ students in full-stack practices, Git/version control, API design, and modern UI principles.",
      "Supervised 15+ final-year capstone projects from ideation to deployment.",
    ],
  },
  {
    role: "Independent Developer",
    company: "Personal & academic projects",
    location: "Independent development",
    duration: "2024 — Present",
    highlights: [
      "Built full-stack applications using both Laravel and Django, including role-based web applications, REST APIs, inventory systems, and React-based interfaces.",
      "Built a Django inventory management system with a DRF API, JWT roles, multi-warehouse stock, concurrency-safe purchasing and sales workflows, and a React + TypeScript frontend.",
      "Developed a Django REST API for a role-based hospital management application with JWT authentication and a React frontend.",
      "Built role-based job portal workflows for employers, applicants, and administrators with Laravel, Blade, and Tailwind CSS.",
    ],
  },
];

type ProjectStatus = "live" | "private" | "source";

export const projectStacks = [
  { id: "all", label: "All" },
  { id: "django", label: "Django" },
  { id: "laravel", label: "Laravel" },
] as const;

export type ProjectStack = Exclude<(typeof projectStacks)[number]["id"], "all">;

export const projects = [
  {
    title: "Eclipse Auto Parts ERP",
    stack: "laravel" as ProjectStack,
    category: "Business Management System",
    categoryColor: "indigo",
    description:
      "A modular POS, ecommerce, and business management platform covering finance, CRM, SRM, procurement, inventory, and reporting.",
    tags: ["Laravel", "PHP", "MySQL", "React", "Inertia.js"],
    live: "https://eclipseautoparts.com/",
    github: "",
    image: "/projects/eclipse-erp.png",
    status: "live" as ProjectStatus,
    problem:
      "An auto-parts business needed connected POS, ecommerce, procurement, and CRM workflows instead of fragmented tools.",
    role: "Full Stack Developer (SquartUp) — modules, permissions, and integrations",
    outcomes: [
      "Built modular Finance, CRM, SRM, procurement, inventory, and car-management features with Laravel Modules.",
      "Implemented RBAC, activity logging, multi-business access control, and Account 360 / churn-risk analytics.",
      "Integrated Stripe, PayPal, Razorpay, WooCommerce, and Pusher notifications; delivered dashboards and PDF/Excel reports.",
    ],
  },
  {
    title: "Laradashboard Platform",
    stack: "laravel" as ProjectStack,
    category: "CMS & admin platform",
    categoryColor: "violet",
    description:
      "Laravel CMS and admin panel with plug-and-play modules, granular RBAC, and reusable UI components.",
    tags: ["Laravel", "PHP", "Livewire", "React", "MySQL"],
    live: "https://laradashboard.com/",
    github: "https://github.com/laradashboard/laradashboard",
    image: "/projects/laradashboard.png",
    status: "live" as ProjectStatus,
    problem:
      "Teams needed a reusable Laravel admin foundation instead of rebuilding auth, permissions, and modules for every product.",
    role: "Full Stack Developer — module architecture, RBAC, and UI components",
    outcomes: [
      "Built plug-and-play modules with nwidart/laravel-modules, including reusable CRUD generators.",
      "Implemented RBAC with Spatie Permissions — role assignment, authorization policies, and admin impersonation.",
      "Developed backend services, database schemas, and React UI components on a Laravel 13 + Livewire stack.",
    ],
  },
  {
    title: "Django Inventory Management System",
    stack: "django" as ProjectStack,
    category: "Inventory Management System",
    categoryColor: "sky",
    description:
      "Multi-warehouse inventory and warehouse management system with a Django REST API and a React admin UI.",
    tags: ["Python", "Django", "DRF", "React", "TypeScript", "MySQL"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/django-inventory-management",
    image: "",
    status: "source" as ProjectStatus,
    problem:
      "Multi-warehouse inventory software built with Django and Django REST Framework — purchasing, sales, transfers, adjustments, and reporting behind a JWT-secured API with a React + TypeScript admin UI.",
    role: "Full Stack Developer — Django REST API, data model, and React frontend",
    outcomes: [
      "Modelled stock as an immutable ledger plus balance tables updated in transaction.atomic, with select_for_update locking to prevent overselling.",
      "Built purchase orders, sales (reserve → complete), transfers, adjustments, and CSV/Excel reports across multiple warehouses.",
      "Implemented SimpleJWT with five roles and fail-closed warehouse scoping, Celery + Redis alerts and caching, and pytest/Vitest coverage.",
    ],
  },
  {
    title: "ChakriBazar Job Portal",
    stack: "laravel" as ProjectStack,
    category: "Marketplace platform",
    categoryColor: "emerald",
    description:
      "A role-based recruitment platform where applicants find opportunities, employers manage hiring, and admins oversee moderation.",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Pest"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/chakri-bazar",
    image: "/projects/chakribazar.png",
    status: "source" as ProjectStatus,
    problem:
      "Recruitment needed separate, permission-aware flows for applicants, employers, and administrators.",
    role: "Full Stack Developer — role workflows, hiring pipeline, and UI",
    outcomes: [
      "Built dedicated dashboards for applicants, employers, and admins, with applicant tracking for applications, saved jobs, resume uploads, and hiring statuses.",
      "Developed job search filters (keyword, location, category, experience, job type) plus moderation, approval, and admin reporting.",
      "Added queued email notifications, email verification, middleware authorization, and Pest feature tests.",
    ],
  },
  {
    title: "Hospital Management System",
    stack: "django" as ProjectStack,
    category: "Healthcare management",
    categoryColor: "rose",
    description:
      "Role-based hospital management platform with a decoupled Django REST API and React frontend.",
    tags: ["Django", "DRF", "React", "JWT", "SQLite"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/Hospital-Management-API",
    image: "",
    status: "source" as ProjectStatus,
    problem:
      "A decoupled Django REST API and React frontend for departments, doctors, patients, appointments, prescriptions, and billing.",
    role: "Full Stack Developer — REST API, permissions, and React UI",
    outcomes: [
      "Implemented JWT authentication and RBAC for Admin, Doctor, Receptionist, and Patient roles.",
      "Modelled the appointment lifecycle (pending, approved, completed, cancelled) with API-level validation.",
      "Built searchable, filterable, paginated endpoints with django-filter, consumed by a React 19 UI.",
    ],
  },
];

export const buildAreas = [
  {
    step: "01",
    title: "Business Applications",
    description:
      "Operational software connecting sales, stock, suppliers, and reporting.",
    tags: ["ERP", "CRM", "POS", "Inventory", "Procurement", "Ecommerce"],
  },
  {
    step: "02",
    title: "REST APIs",
    description:
      "Secure, documented APIs with clear permissions and validated business rules.",
    tags: ["Django REST Framework", "Laravel APIs", "JWT Auth", "RBAC"],
  },
  {
    step: "03",
    title: "Full Stack Applications",
    description:
      "End-to-end products pairing a robust backend with a modern frontend.",
    tags: ["Django + React", "Laravel + React", "Laravel Blade", "Next.js"],
  },
  {
    step: "04",
    title: "Management Systems",
    description:
      "Role-based systems that model real-world workflows across domains.",
    tags: ["Inventory", "Healthcare", "Recruitment", "Business Operations"],
  },
];
