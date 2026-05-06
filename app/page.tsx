"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ContactBar from "@/components/sections/ContactBar";

export default function Page() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main
      className={`${dark ? "bg-gradient-to-b from-[#020617] via-[#050B20] to-black text-white" : "bg-white text-slate-900"} min-h-screen`}
    >
      <Navbar dark={dark} setDark={setDark} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Hero />
        <AboutStats />
        <Skills />
        <Experience />
        <Projects />
        <ContactBar />
      </div>
    </main>
  );
}
