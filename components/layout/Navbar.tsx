"use client";

import { motion } from "framer-motion";
import { FaMoon, FaSun, FaDownload } from "react-icons/fa";

interface NavbarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent transition-all">
            <a href="#home">anik.dev</a>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-xl border border-slate-300 dark:border-cyan-400/30 hover:bg-slate-100 dark:hover:bg-cyan-400/10 flex items-center gap-2 text-slate-700 dark:text-white transition-colors cursor-pointer">
            <FaDownload /> Resume
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="p-3 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-colors cursor-pointer"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
