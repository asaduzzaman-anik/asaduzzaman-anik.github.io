"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaProjectDiagram,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

export default function AboutStats() {
  const stats = [
    {
      icon: <FaUserGraduate className="text-cyan-400 text-3xl" />,
      value: "120+",
      label: "Students Mentored",
    },
    {
      icon: <FaProjectDiagram className="text-purple-400 text-3xl" />,
      value: "15+",
      label: "Capstone Projects Supervised",
    },
    {
      icon: <FaBriefcase className="text-orange-400 text-3xl" />,
      value: "1+",
      label: "Years Professional Experience",
    },
    {
      icon: <FaRocket className="text-pink-400 text-3xl" />,
      value: "3+",
      label: "Major Systems Delivered",
    },
  ];

  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl p-10 transition-colors"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              Dedicated Full Stack Developer specializing in the Laravel
              ecosystem, PHP, and React. With over 1 year of professional
              experience architecting scalable CRM, eCommerce, and POS
              platforms, I focus on building intelligent digital systems that
              solve real-world business challenges.
            </p>

            <p className="text-slate-500 dark:text-slate-400 mt-5 leading-relaxed">
              My background spans software engineering, academic teaching, and
              AI research — giving me a unique ability to build robust systems
              while maintaining clean architecture, strong documentation, and
              user-centered design.
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl border border-blue-600/30 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-400/10 font-medium transition-colors">
              Know More About Me
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-white/10 p-8 text-center transition-colors"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
