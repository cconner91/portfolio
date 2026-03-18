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
    <main>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}