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
      "Hardened security in Laradashboard, an open-source Laravel admin panel with 400+ stars — fixing privilege escalation, role tampering, open redirect, path traversal, and secret-exposure vulnerabilities shipped in releases v1.4.5 to v1.4.7.",
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

export type ProjectStatus = "live" | "private" | "source";

export const projectStacks = [
  { id: "all", label: "All" },
  { id: "django", label: "Django" },
  { id: "laravel", label: "Laravel" },
] as const;

export type ProjectStack = Exclude<(typeof projectStacks)[number]["id"], "all">;

export type ProjectLink = { label: string; url: string };

export type CaseStudy = {
  overview: string;
  type: string;
  timeline: string;
  responsibilities: string[];
  features: { title: string; description: string }[];
  highlights: { title: string; description: string }[];
  stack: { group: string; items: string[] }[];
  extraLinks?: ProjectLink[];
  /** Optional screenshots shown in the "Screens" section (16:10 images). */
  gallery?: { src: string; alt: string; caption: string }[];
};

export type Project = {
  slug: string;
  title: string;
  stack: ProjectStack;
  category: string;
  categoryColor: string;
  /** Short summary shown on the project card. */
  description: string;
  tags: string[];
  live: string;
  github: string;
  githubLabel?: string;
  image: string;
  status: ProjectStatus;
  problem: string;
  role: string;
  outcomes: string[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "eclipse-auto-parts-erp",
    title: "Eclipse Auto Parts ERP",
    stack: "laravel",
    category: "Business Management System",
    categoryColor: "indigo",
    description:
      "Modular POS, ecommerce, and business management platform for a UK auto-parts business — inventory, vehicle fitments, procurement, finance, and CRM.",
    tags: ["Laravel", "PHP", "MySQL", "React", "Inertia.js"],
    live: "https://eclipseautoparts.com/",
    github: "",
    image: "/projects/eclipse-erp/dashboard.webp",
    status: "live",
    problem:
      "An auto-parts business was running sales, stores, suppliers, and customer relationships across fragmented tools. It needed connected POS, ecommerce, procurement, and CRM workflows in one platform, with clear permissions for different staff and businesses.",
    role: "Full Stack Developer at SquartUp — backend modules, permissions, integrations, and UI",
    outcomes: [
      "Connected POS, ecommerce, procurement, and CRM workflows in one modular platform running in production.",
      "Reduced manual reporting effort through automated daily customer analysis.",
      "Improved usability across dense data tables and operational screens used daily by staff.",
    ],
    caseStudy: {
      overview:
        "Eclipse Auto Parts is a production business management platform I build and maintain as a Full Stack Developer at SquartUp. It brings point of sale, ecommerce, inventory, a vehicle catalogue, procurement, finance, and CRM into one modular Laravel application that runs across the business's store and online locations.",
      type: "Professional · Client project (SquartUp)",
      timeline: "Jan 2025 — Present",
      responsibilities: [
        "Designed relational data models and backend workflows for the CRM, POS, and ecommerce modules.",
        "Built role-aware workflows, approval flows, activity logging, and multi-business access control.",
        "Implemented scheduled daily customer-analysis jobs that reduce manual reporting effort.",
        "Worked remotely with the client to translate business requirements into maintainable modules.",
      ],
      features: [
        {
          title: "Point of sale & ecommerce",
          description:
            "In-store POS and online orders on shared product and customer data, with Stripe, PayPal, and Razorpay payments, WooCommerce integration, and sell returns.",
        },
        {
          title: "Inventory & product catalogue",
          description:
            "Products with variations, units, brands, bin locations, and warranties, plus label printing, opening-stock import, and stock adjustments.",
        },
        {
          title: "Vehicle catalogue & fitments",
          description:
            "A vehicle catalogue and per-product fitment settings, so parts can be matched to the vehicles they fit.",
        },
        {
          title: "Procurement",
          description:
            "Purchase requests, purchase orders, receiving, and purchase returns, with order and payment status tracked per supplier.",
        },
        {
          title: "Finance",
          description:
            "Finance dashboard with cash position, revenue, receivables, payables, and profit; expenses (including recurring), payment accounts, cash flow, and PDF/Excel reports.",
        },
        {
          title: "CRM & account intelligence",
          description:
            "Contacts, inquiries, and CRM, plus an Account 360 view, churn-risk detection, and account health monitoring.",
        },
      ],
      highlights: [
        {
          title: "Modular architecture",
          description:
            "Each business area — Finance, CRM, SRM, car management — lives in its own Laravel module, so features can be developed and maintained independently.",
        },
        {
          title: "Location-aware operations",
          description:
            "Stock, sales, purchases, and finance figures are tracked per business location (store and ecommerce), and dashboards can be filtered by location or viewed across all of them.",
        },
        {
          title: "Scoped access control",
          description:
            "Role-based permissions, approval workflows, activity logging, and multi-business access control keep each team's data and actions scoped.",
        },
        {
          title: "Scheduled analysis pipelines",
          description:
            "Daily customer analysis runs on Laravel Scheduler, supporting the account health and churn-risk insights.",
        },
        {
          title: "Real-time and third-party integrations",
          description:
            "Pusher delivers real-time notifications alongside the payment gateway and WooCommerce integrations.",
        },
        {
          title: "React through Inertia.js",
          description:
            "Interactive screens use React via Inertia.js, keeping Laravel routing and controllers while delivering a modern UI.",
        },
      ],
      stack: [
        {
          group: "Backend",
          items: ["Laravel", "PHP", "Eloquent ORM", "Laravel Modules", "Laravel Scheduler"],
        },
        { group: "Frontend", items: ["React", "Inertia.js"] },
        { group: "Database", items: ["MySQL"] },
        {
          group: "Integrations",
          items: ["Stripe", "PayPal", "Razorpay", "WooCommerce", "Pusher"],
        },
      ],
      gallery: [
        {
          src: "/projects/eclipse-erp/products.webp",
          alt: "Product list with part numbers, locations, cost and sale prices, and stock status",
          caption:
            "Product catalogue — part numbers, locations, cost and sale prices, and stock status across the store and ecommerce.",
        },
        {
          src: "/projects/eclipse-erp/product-form.webp",
          alt: "Multi-step add product form with identification, media, pricing and inventory, and fitment steps",
          caption:
            "Multi-step product form — identification, media, pricing and inventory, then settings and vehicle fitments.",
        },
        {
          src: "/projects/eclipse-erp/purchases.webp",
          alt: "Purchases list with supplier, purchase status, payment status, and totals",
          caption:
            "Purchases — supplier orders with order and payment status, alongside requests, returns, and receiving.",
        },
        {
          src: "/projects/eclipse-erp/finance-dashboard.webp",
          alt: "Finance dashboard with cash position, revenue, expenses, receivables, payables, profit, and a cash flow chart",
          caption:
            "Finance dashboard — cash position, revenue, receivables, payables, profit, and cash flow by location.",
        },
        {
          src: "/projects/eclipse-erp/sell-returns.webp",
          alt: "Sell returns list linking each return to its parent sale with payment status and amount due",
          caption: "Sell returns — linked to the original sale, with payment status and amount due.",
        },
        {
          src: "/projects/eclipse-erp/dashboard-dark.webp",
          alt: "Main dashboard in dark mode with purchase, sales, and invoice totals and a sales chart",
          caption: "Full dark mode across the admin.",
        },
      ],
    },
  },
  {
    slug: "laradashboard",
    title: "Laradashboard Platform",
    stack: "laravel",
    category: "CMS & admin platform",
    categoryColor: "violet",
    description:
      "Open-source Laravel admin panel, CMS, and modular starter kit with 400+ GitHub stars, where I'm a core contributor.",
    tags: ["Laravel", "PHP", "Livewire", "REST API", "Tailwind CSS"],
    live: "https://laradashboard.com/",
    github: "https://github.com/laradashboard/laradashboard",
    image: "/projects/laradashboard/dashboard-light.png",
    status: "live",
    problem:
      "Teams kept rebuilding the same foundations — authentication, roles and permissions, user management, content, and admin screens — for every new product. Laradashboard packages them into one open-source platform, and as its user base grows, every module, role, and upload path has to stay secure by default.",
    role: "Core contributor (SquartUp) — security hardening, platform features, modules, and releases",
    outcomes: [
      "Closed a series of authorization and input-handling vulnerabilities, shipped in releases v1.4.5 to v1.4.7.",
      "Improved every list screen in the admin through changes to one shared datatable component.",
      "77 commits to an open-source project with 400+ stars and 160+ forks.",
      "Delivered reusable modules and UI components for plug-and-play feature development across dashboard applications.",
    ],
    caseStudy: {
      overview:
        "Lara Dashboard is an open-source Laravel admin panel, CMS, and modular starter kit built on Laravel 13, Livewire 3, and Tailwind CSS v4. As part of my work at SquartUp, I'm one of its core contributors — shipping security hardening, datatable and editor improvements, MCP media uploads, modules, and releases.",
      type: "Professional · Open source (SquartUp)",
      timeline: "2025 — Present",
      responsibilities: [
        "Hardened authorization: blocked Superadmin impersonation and privilege escalation, Superadmin role tampering, and a post publish-approval bypass.",
        "Fixed input and file-handling vulnerabilities: an open redirect (CWE-601), path traversal in backup and translation routes, secrets exposed through the settings API, unsafe SVG uploads, and a registration rate-limit race.",
        "Reworked the shared datatable component: one unified page scroll, column visibility on every table, post and page view counts, and responsive toolbars on small screens.",
        "Added multipart media uploads to the built-in MCP server, with upload verification and limits that reject corrupted or oversized files.",
        "Stabilised the block editor's Text Editor and list blocks, fixed module CRUD generator edge cases, and prepared releases v1.2.1 and v1.4.5 to v1.4.7.",
        "Developed plug-and-play modules, backend services, and UI components for products built on the platform.",
      ],
      features: [
        {
          title: "Role-based access control",
          description:
            "Users, roles, and permissions via Spatie, with admin impersonation and social login.",
        },
        {
          title: "Modules & CRUD generator",
          description:
            "Self-contained modules that can be installed, enabled, disabled, and zipped; one command scaffolds a full CRUD module with tests.",
        },
        {
          title: "Content management",
          description:
            "Posts, pages, categories, tags, a media library, and a drag-and-drop block editor.",
        },
        {
          title: "REST API",
          description:
            "Sanctum-authenticated API with documentation generated automatically by Scramble.",
        },
        {
          title: "MCP server for AI agents",
          description:
            "Lets Cursor, Claude Desktop, or Claude Code manage the site with token-based, permission-scoped access.",
        },
        {
          title: "Settings, i18n & monitoring",
          description:
            "Site settings, 21 preloaded languages, email templates, action logs, and Laravel Pulse monitoring.",
        },
      ],
      highlights: [
        {
          title: "Protecting the most privileged role",
          description:
            "Superadmin is guarded everywhere it can be reached: impersonation, role edits, user create/update requests, Livewire module actions, and core-upgrade actions.",
        },
        {
          title: "Never trusting client input for authorization",
          description:
            "Publish status is decided on the server, the settings API no longer returns secrets to view-only users, and the translation route can't read files outside the language directory.",
        },
        {
          title: "Defensive file handling",
          description:
            "SVG uploads are hardened, backup paths are checked for traversal, and MCP base64 uploads are size-capped before decoding to prevent memory exhaustion.",
        },
        {
          title: "One component, every list screen",
          description:
            "Scrolling, column visibility, and responsive behaviour live in the shared datatable, so a single change improves every admin table.",
        },
        {
          title: "Quality gates in CI",
          description:
            "Pest tests, PHPStan (Larastan), Rector, and Pint; I fixed PHPStan errors blocking CI and isolated tests so security tests can't wipe real media.",
        },
      ],
      stack: [
        {
          group: "Backend",
          items: ["Laravel 13", "PHP 8.3", "Livewire 3", "Spatie Permissions", "laravel-modules", "Sanctum"],
        },
        {
          group: "Frontend",
          items: ["Blade", "Alpine.js", "Tailwind CSS v4", "React"],
        },
        { group: "Database", items: ["MySQL"] },
        {
          group: "Quality & tooling",
          items: ["Pest", "PHPStan", "Rector", "Pint", "Scramble"],
        },
      ],
      gallery: [
        {
          src: "/projects/laradashboard/posts-datatable.png",
          alt: "Posts list in the admin datatable with search, status, tag, and category filters",
          caption:
            "The shared datatable behind every list screen — I reworked its scrolling, column visibility, and small-screen toolbar.",
        },
        {
          src: "/projects/laradashboard/roles.png",
          alt: "Roles list showing each role's user count and assigned permissions",
          caption:
            "Roles and permissions — the RBAC layer where I closed privilege-escalation and role-tampering paths.",
        },
        {
          src: "/projects/laradashboard/block-editor.png",
          alt: "Drag-and-drop block editor with a block library, canvas, and properties panel",
          caption:
            "The block editor — I stabilised the Text Editor and list blocks and restored native undo.",
        },
        {
          src: "/projects/laradashboard/modules.png",
          alt: "Modules list with descriptions, tags, versions, and enabled or disabled status",
          caption: "Module management — install, enable, and disable self-contained modules.",
        },
        {
          src: "/projects/laradashboard/api-docs.png",
          alt: "Auto-generated REST API documentation with endpoint groups and bearer authentication",
          caption: "Auto-generated REST API documentation with bearer-token authentication.",
        },
        {
          src: "/projects/laradashboard/action-logs.png",
          alt: "Action log list recording created and updated records and who performed each action",
          caption: "Action logs — an audit trail of who changed what across the platform.",
        },
      ],
    },
  },
  {
    slug: "django-inventory-management",
    title: "Django Inventory Management System",
    stack: "django",
    category: "Inventory Management System",
    categoryColor: "sky",
    description:
      "Multi-warehouse inventory system with an immutable stock ledger, a Django REST API, and a React + TypeScript admin UI.",
    tags: ["Python", "Django", "DRF", "React", "TypeScript", "MySQL"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/django-inventory-management",
    image: "/projects/django-inventory/dashboard.webp",
    status: "source",
    problem:
      "Inventory spread across several warehouses needs stock numbers that can be trusted: every movement auditable, no overselling when receipts and sales happen at the same time, and staff limited to the warehouses they are responsible for.",
    role: "Full Stack Developer — Django REST API, data model, and React frontend",
    outcomes: [
      "The stock ledger always reconciles: for every product and warehouse, the sum of ledger movements equals on-hand stock.",
      "Critical paths are tested with pytest, including concurrency races and role/permission boundaries, plus Vitest on the React client.",
      "The API is documented with Swagger UI and an OpenAPI schema.",
    ],
    caseStudy: {
      overview:
        "A production-style multi-warehouse inventory and warehouse management system. A Django REST Framework API handles purchasing, sales, transfers, adjustments, and reporting, and a React + TypeScript admin SPA consumes it.",
      type: "Personal project",
      timeline: "2026",
      responsibilities: [
        "Designed the stock data model, ledger, and transactional service workflows in Django.",
        "Built the versioned REST API with Django REST Framework, SimpleJWT, and drf-spectacular docs.",
        "Built the React 19 + TypeScript admin SPA with TanStack Query, Tailwind CSS, and Recharts.",
        "Set up Celery workers and beat, Docker Compose, and the pytest and Vitest test suites.",
      ],
      features: [
        {
          title: "Multi-warehouse stock",
          description:
            "On-hand and reserved quantities per product and warehouse, plus a dashboard with stock value, daily movement, and sales vs. purchases charts.",
        },
        {
          title: "Purchasing",
          description:
            "Purchase orders that are created, submitted, approved, and received into stock.",
        },
        {
          title: "Sales orders",
          description:
            "Orders reserve stock when confirmed and deduct it on completion, with payment status and line-level returns.",
        },
        {
          title: "Transfers & adjustments",
          description:
            "Move stock between warehouses and correct counts, with every change recorded.",
        },
        {
          title: "Reports & exports",
          description:
            "Inventory and movement reports with CSV/Excel export for permitted roles.",
        },
        {
          title: "Administration",
          description:
            "Users, roles, warehouse assignments, and an audit log.",
        },
      ],
      highlights: [
        {
          title: "Immutable stock ledger",
          description:
            "Every physical movement writes a ledger row with quantity_change and balance_after inside the same transaction.atomic block as the balance update.",
        },
        {
          title: "Concurrency-safe updates",
          description:
            "select_for_update row locking on stock balances prevents overselling when receipts and sales run at the same time.",
        },
        {
          title: "Reservations kept off the ledger",
          description:
            "Reserved quantity lives on the sales order until it completes or is cancelled, so holds never corrupt ledger history.",
        },
        {
          title: "Fail-closed warehouse scoping",
          description:
            "Five Django group roles plus custom DRF permissions; a user without a warehouse assignment has no warehouse access.",
        },
        {
          title: "Background jobs and caching",
          description:
            "Celery and Redis handle stock alerts, email, an hourly low-stock scan, and dashboard caching.",
        },
        {
          title: "Production-minded configuration",
          description:
            "Separate dev and prod settings, Gunicorn, Docker Compose, and prod checks that refuse unsafe settings such as DEBUG=True.",
        },
      ],
      stack: [
        {
          group: "Backend",
          items: ["Python", "Django 5.2", "Django REST Framework", "SimpleJWT", "drf-spectacular", "Celery"],
        },
        {
          group: "Frontend",
          items: ["React 19", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS", "Recharts"],
        },
        { group: "Data", items: ["MySQL 8", "Redis"] },
        {
          group: "Testing & ops",
          items: ["pytest", "Vitest", "Docker Compose", "Gunicorn"],
        },
      ],
      gallery: [
        {
          src: "/projects/django-inventory/stock-levels.webp",
          alt: "Inventory stock levels table listing on-hand, reserved, and available quantities per product across three warehouses",
          caption:
            "Stock levels — on-hand, reserved, and available per warehouse, with receive, transfer, and adjust actions.",
        },
        {
          src: "/projects/django-inventory/product-detail.webp",
          alt: "Product detail page with category, supplier, barcode, cost and selling price, reorder level, and stock by warehouse",
          caption:
            "Product detail — pricing, reorder level, and on-hand, reserved, and available stock in each warehouse.",
        },
        {
          src: "/projects/django-inventory/warehouse-detail.webp",
          alt: "Warehouse detail page with contact and address details and a table of the stock held there",
          caption: "Warehouse detail — contact details and the stock held at that location.",
        },
        {
          src: "/projects/django-inventory/transaction-ledger.webp",
          alt: "Transaction history table showing purchase, receipt, sale, and return movements with change, running balance, and source document",
          caption:
            "Transaction ledger — purchases, receipts, sales, and returns, each with its quantity change, running balance, and source document.",
        },
        {
          src: "/projects/django-inventory/adjust-stock.webp",
          alt: "Adjust stock form with warehouse, product, available quantity, signed quantity change, reason, and note fields",
          caption:
            "Stock adjustment — signed quantity changes with a reason code, reviewed before they hit the ledger.",
        },
        {
          src: "/projects/django-inventory/transfer-stock.webp",
          alt: "Transfer stock form with source and destination warehouse, product, available quantity, and note fields",
          caption:
            "Stock transfer — move stock between warehouses, reviewed before it is applied.",
        },
        {
          src: "/projects/django-inventory/purchase-orders.webp",
          alt: "Purchase orders list with supplier, warehouse, total, and draft, submitted, approved, and partially received statuses",
          caption:
            "Purchasing — orders move from draft to submitted, approved, and received, including partial receipts.",
        },
        {
          src: "/projects/django-inventory/sales-orders.webp",
          alt: "Sales orders list with customer, warehouse, total, and draft, confirmed, processing, completed, and cancelled statuses alongside payment status",
          caption:
            "Sales orders — order status from draft to completed or cancelled, tracked separately from payment status.",
        },
        {
          src: "/projects/django-inventory/sales-order.webp",
          alt: "Completed sales order with customer details, discount, tax, payment status, line items, and returned quantities",
          caption:
            "Sales order — customer, discount and tax totals, payment status, and line-level returns.",
        },
        {
          src: "/projects/django-inventory/inventory-report.webp",
          alt: "Inventory report with warehouse, category, and status filters, stock value per line, and CSV and Excel export buttons",
          caption:
            "Inventory report — filter by warehouse, category, and status, with stock value; export to CSV or Excel.",
        },
        {
          src: "/projects/django-inventory/users.webp",
          alt: "Users list with username, email, role such as Warehouse Manager, Sales Staff, Inventory Staff, or Super Admin, and status",
          caption:
            "Users and roles — Super Admin, Warehouse Manager, Inventory Staff, and Sales Staff, filterable by role and status.",
        },
        {
          src: "/projects/django-inventory/audit-log.webp",
          alt: "Audit log table listing user, action, entity, and record for logins, creates, status changes, and receipts",
          caption: "Audit log — who did what, to which record, searchable by action and date range.",
        },
      ],
    },
  },
  {
    slug: "chakribazar",
    title: "ChakriBazar Job Portal",
    stack: "laravel",
    category: "Marketplace platform",
    categoryColor: "emerald",
    description:
      "Role-based job marketplace for Bangladesh with separate portals for applicants, employers, and admins, and a full hiring pipeline.",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Pest"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/chakri-bazar",
    image: "/projects/chakribazar.png",
    status: "source",
    problem:
      "Recruitment involves three groups with very different needs: applicants searching and applying, employers managing a hiring pipeline, and admins keeping the marketplace healthy. Each needed its own permission-aware portal.",
    role: "Full Stack Developer — role workflows, hiring pipeline, and UI",
    outcomes: [
      "A complete hiring flow, from job posting and moderation to application and hire.",
      "Three distinct portals sharing one codebase, with role-scoped access.",
      "Automated feature tests with Pest, plus consistent code style through Laravel Pint.",
    ],
    caseStudy: {
      overview:
        "ChakriBazar — chakri means \"job\" in Bengali — is a full-stack job board built for the Bangladesh job market, with BDT salaries, local cities, and real hiring workflows.",
      type: "Personal project",
      timeline: "2026",
      responsibilities: [
        "Designed the domain model: users, companies, categories, job listings, applications, applicant profiles, and saved jobs.",
        "Built session authentication with role middleware, email verification, and password recovery.",
        "Built the Blade and Tailwind CSS interfaces for all three portals and the public job board.",
        "Wrote Pest feature tests and set up Laravel Pint, Commitlint, and Husky.",
      ],
      features: [
        {
          title: "Applicant portal",
          description:
            "Profile with skills, education, experience, and resume; one-step apply; saved jobs; application history.",
        },
        {
          title: "Employer portal",
          description:
            "Company profile, rich-text job posts, and an applicant pipeline: Applied → Shortlisted → Rejected → Hired.",
        },
        {
          title: "Admin portal",
          description:
            "Platform stats, user and role management, category management, a moderation queue, and reports.",
        },
        {
          title: "Job search",
          description:
            "Filter by keyword, location, category, experience level, and job type, with SEO-friendly slugs.",
        },
        {
          title: "Email notifications",
          description:
            "Emails when someone applies to a listing or an application's status changes.",
        },
      ],
      highlights: [
        {
          title: "Role-gated portals",
          description:
            "A role middleware gates each portal's routes, with a tailored dashboard for each role.",
        },
        {
          title: "Moderation by default",
          description:
            "New job posts start as pending and go live only after admin approval.",
        },
        {
          title: "Form Request validation",
          description:
            "Form Request classes keep validation rules out of the controllers.",
        },
        {
          title: "Queued notifications",
          description:
            "Laravel queues send application and status emails asynchronously.",
        },
        {
          title: "Duplicate-safe applications",
          description:
            "Applicants apply with their saved resume, and duplicate applications are blocked.",
        },
      ],
      stack: [
        {
          group: "Backend",
          items: ["Laravel 13", "PHP 8.3", "Eloquent ORM", "Laravel queues"],
        },
        {
          group: "Frontend",
          items: ["Blade", "Tailwind CSS v4", "Vite", "TinyMCE"],
        },
        { group: "Database", items: ["SQLite (MySQL-ready)"] },
        {
          group: "Quality",
          items: ["Pest", "Laravel Pint", "Commitlint", "Husky"],
        },
      ],
    },
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    stack: "django",
    category: "Healthcare management",
    categoryColor: "rose",
    description:
      "Decoupled Django REST API and React app for hospital operations, with JWT auth and role-based access for four user types.",
    tags: ["Django", "DRF", "React", "JWT", "SQLite"],
    live: "",
    github: "https://github.com/asaduzzaman-anik/Hospital-Management-API",
    githubLabel: "API repo",
    image: "",
    status: "source",
    problem:
      "Hospital workflows involve four kinds of users — admins, receptionists, doctors, and patients — who each need different access to departments, appointments, prescriptions, medicines, and billing.",
    role: "Full Stack Developer — REST API, permissions, and React UI",
    outcomes: [
      "A clean separation between API and frontend, with CORS configured for the React client.",
      "Role-specific workflows and business rules enforced by the API rather than only in the UI.",
    ],
    caseStudy: {
      overview:
        "A full-stack hospital management system with a decoupled architecture: a Django REST Framework API and a separate React single-page app that consumes it.",
      type: "Personal project",
      timeline: "2026",
      extraLinks: [
        {
          label: "Frontend repo",
          url: "https://github.com/asaduzzaman-anik/hospital-management-frontend-react",
        },
      ],
      responsibilities: [
        "Designed the domain modules and REST API with Django REST Framework and SimpleJWT.",
        "Implemented role-based permissions for Admin, Doctor, Receptionist, and Patient users.",
        "Built the React 19 frontend with React Router, Axios, and Tailwind CSS.",
      ],
      features: [
        {
          title: "Departments & doctors",
          description:
            "Departments plus doctor profiles with specializations, experience, and availability.",
        },
        {
          title: "Patients",
          description:
            "Patients manage their own profiles; admins and receptionists manage all patient records.",
        },
        {
          title: "Appointments",
          description:
            "Scheduling with pending, approved, completed, and cancelled states.",
        },
        {
          title: "Prescriptions",
          description:
            "Doctors write prescriptions with diagnoses and medicine dosages once an appointment is completed.",
        },
        {
          title: "Medicines & billing",
          description: "A medicine inventory for prescriptions, and patient billing.",
        },
      ],
      highlights: [
        {
          title: "JWT authentication with RBAC",
          description:
            "SimpleJWT access and refresh tokens, with DRF permissions defined per role.",
        },
        {
          title: "Business rules in the API",
          description:
            "Appointment status transitions and prescription rules are validated at the serializer and API level.",
        },
        {
          title: "Search, filtering, and pagination",
          description:
            "DRF ViewSets with django-filter, search, ordering, and page-number pagination.",
        },
        {
          title: "Role-aware React client",
          description:
            "Protected routes, role-aware navigation, loading and error states, and Axios-based API integration.",
        },
      ],
      stack: [
        {
          group: "Backend",
          items: ["Python", "Django", "Django REST Framework", "SimpleJWT", "django-filter"],
        },
        {
          group: "Frontend",
          items: ["React 19", "Vite", "React Router", "Axios", "Tailwind CSS"],
        },
        { group: "Database", items: ["SQLite"] },
      ],
    },
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
