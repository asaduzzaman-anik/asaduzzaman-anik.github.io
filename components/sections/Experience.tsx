"use client";

import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "SquartUp",
    duration: "July 2025 - Present",
    description: [
      "Architected and developed a full-featured CRM & POS system (eclipseautoparts.com) for an auto parts store onLaravel with integrated eCommerce capabilities, Account 360 View, Churn Risk Detection, and Account HealthMonitoring.",
      "Engineered automated daily analysis pipelines using Laravel Scheduler, significantly reducing manual customer analysis effort and improving business decision-making.",
      "Building plug-and-play modules for Laradashboard (laradashboard.com | GitHub), a Laravel-based dashboard platform — designing reusable architecture, backend logic, database structures, and integrated UI componentswith React.",
      "Collaborating remotely with clients to translate business requirements into scalable, maintainable codebases.",
    ],
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "React.js",
      "Alpine.js",
      "Next.js",
      "Bootstrap",
      "Tailwind",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
    ],
  },

  {
    role: "Lecturer (Computer Science)",
    company: "Royal University of Dhaka",
    duration: "May 2022 - October 2025",
    description: [
      "Delivered undergraduate courses in Web Development, Software Engineering, and Programming Fundamentals(HTML, CSS, JavaScript, Python, C++).",
      "Mentored 120+ students in full-stack development practices, version control (Git), and modern UI/UX principles.",
      "Developed comprehensive course materials, assignments, and assessment strategies aligned with industry trends.",
      "Supervised 15+ final-year capstone projects, guiding students from ideation to deployment.",
      "Coordinated with department faculty to align curriculum with accreditation standards and academic policies.",
      "Organized and led technical workshops on topics like AI/ML, full-stack development",
      "Evaluated 500+ assignments, projects, and exams, providing constructive feedback to enhance student learning.",
    ],
    tech: [
      "Python",
      "C++",
      "SQL",
      "AI",
      "ML",
      "Data Structures",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    role: "Data Analyst (Intern)",
    company: "HappyFresh Malaysia",
    duration: "March 2019 - June 2019",
    description: [
      "Developed and maintained interactive dashboards, reports, and data visualizations using BI tools such as Tableuand Redash to support data-driven decision-making.",
      "Analyzed large-scale datasets to identify trends, patterns, and insights, and presented findings to stakeholders through reports and presentations",
      "Collaborated with cross-functional teams to understand data needs and deliver actionable insights",
      "Performed data cleaning, transformation, and validation to ensure data quality and integrity",
      "Designed and implemented ETL (Extract, Transform, Load) processes to integrate data from multiple sources,ensuring accuracy, consistency, and usability.",
    ],
    tech: [
      "Python",
      "PostgreSQL",
      "Tableau",
      "Redash",
      "APIs",
      "Google Apps Script",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Experience Timeline
      </h2>

      <div className="relative border-l border-gray-300 dark:border-white/10 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Dot */}
            <span className="absolute left-[-30px] top-8 w-3 h-3 bg-black dark:bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0)] dark:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <div className="bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl shadow-md p-6 hover:shadow-lg dark:hover:bg-white/10 transition backdrop-blur-sm">
              <h3 className="text-xl font-semibold dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company} • {exp.duration}
              </p>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {exp.description.map((point, i) => (
                  <li className="list-disc ml-5 mb-2" key={i}>
                    {point}
                  </li>
                ))}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 dark:bg-white/10 dark:text-cyan-300 px-2 py-1 rounded-full border border-transparent dark:border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
