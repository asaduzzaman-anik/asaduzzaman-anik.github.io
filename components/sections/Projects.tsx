"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "CRM Dashboard System",
    description:
      "A full-featured CRM system with lead management, analytics dashboard, and reporting tools.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    title: "AI Data Analysis Tool",
    description:
      "Machine learning powered tool for analyzing datasets and generating insights automatically.",
    tech: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built with Next.js and component-based architecture.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl shadow-md p-6 hover:shadow-xl dark:hover:bg-white/10 transition backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 dark:bg-white/10 dark:text-cyan-300 px-2 py-1 rounded-full border border-transparent dark:border-cyan-400/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                className="inline-block mt-4 text-sm text-blue-600 dark:text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
