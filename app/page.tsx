import BackgroundDecor from "@/components/layout/BackgroundDecor";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import TrustStrip from "@/components/sections/TrustStrip";

export default function Page() {
  return (
    <>
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
