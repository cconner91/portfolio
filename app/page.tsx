import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Certifications from "../components/certifications";
import Skills from "../components/skills";
import Career from "../components/career";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <About />
        <Career />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}