"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaravel,
  FaReact,
  FaPhp,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function Hero() {
  const floatingIcons = [
    {
      icon: <FaLaravel className="text-red-500 text-3xl" />,
      pos: "top-10 left-0",
    },
    {
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      pos: "top-20 right-0",
    },
    {
      icon: <FaPhp className="text-indigo-400 text-3xl" />,
      pos: "bottom-24 left-8",
    },
    {
      icon: <SiMysql className="text-blue-400 text-3xl" />,
      pos: "bottom-10 right-8",
    },
  ];

  return (
    <section
      id="home"
      className="grid lg:grid-cols-2 gap-16 items-center py-24 min-h-[90vh]"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <p className="text-blue-600 dark:text-cyan-400 font-semibold tracking-widest mb-4 uppercase">
          Full Stack Developer
        </p>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Md Asaduzzaman{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text">
            Anik
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          Building scalable CRM, POS, dashboard systems and intelligent web
          solutions with Laravel, React, and modern backend architecture.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/30 dark:shadow-none cursor-pointer">
            View Projects
          </button>
          <button className="px-8 py-4 rounded-xl border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer">
            Hire Me
          </button>
        </div>

        <div className="flex gap-5 mt-8 text-2xl text-slate-500 dark:text-slate-300">
          <a href="https://github.com/asaduzzaman-anik" target="blank">
            <FaGithub className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/anik-asaduzzaman/"
            target="blank"
          >
            <FaLinkedin className="hover:text-blue-600 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
          </a>
          <a href="mailto:asaduzzamananik12@gmail.com" target="blank">
            <FaEnvelope className="hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex justify-center"
      >
        <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 blur-3xl" />

        <div className="relative w-[360px] h-[360px] rounded-full p-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.2)] dark:shadow-[0_0_80px_rgba(34,211,238,0.25)]">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Md Asaduzzaman Anik"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i }}
            className={`absolute ${item.pos} bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-lg`}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
