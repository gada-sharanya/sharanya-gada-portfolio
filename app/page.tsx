import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import GitHubSection from "@/components/sections/GitHubSection";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import EasterEgg from "@/components/ui/EasterEgg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubSection />
        <Certifications />
        <Contact />
      </main>
      <EasterEgg />
    </>
  );
}
