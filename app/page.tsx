"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Certifications from "../components/certifications";
import Skills from "../components/skills";
import Career from "../components/career";
import Contact from "../components/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="fade-in"><About /></div>
        <div className="my-16 section-divider" />
        <div className="fade-in"><Career /></div>
        <div className="my-16 section-divider" />
        <div className="fade-in"><Skills /></div>
        <div className="my-16 section-divider" />
        <div className="fade-in"><Projects /></div>
        <div className="my-16 section-divider" />
        <div className="fade-in"><Certifications /></div>
        <div className="my-16 section-divider" />
        <div className="fade-in"><Contact /></div>
        <div className="my-16 section-divider" />
      </main>
    </>
  );
}