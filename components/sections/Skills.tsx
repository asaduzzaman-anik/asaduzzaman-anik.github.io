"use client";

import { motion } from "framer-motion";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-14 text-center">
          <p className="text-blue-600 dark:text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
            Technical Expertise
          </p>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">Skills & Technologies</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Building modern full-stack applications with scalable backend
            architecture and interactive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-400/40 dark:hover:border-cyan-400/40 transition-all"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
