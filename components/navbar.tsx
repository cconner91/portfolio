"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Career", id: "career" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const offset = scrollTop + 140;
      let current = "";
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">

      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#4ea1ff] transition-[width] duration-75"
        style={{ width: `${scrollProgress}%`, boxShadow: "0 0 6px rgba(78,161,255,0.6)" }}
      />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4">

        {/* Centered Nav */}
        <div className="flex justify-center">
          <div
            className="
              flex items-center gap-8
              px-6 py-2
              rounded-full
              bg-black/40 backdrop-blur
              border border-gray-800
            "
          >
            {navLinks.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === id
                    ? "text-[#4ea1ff] font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}

            <Link
              href="/resume"
              className="text-sm px-3 py-1 rounded-full border border-[#4ea1ff]/30 text-[#4ea1ff] hover:bg-[#4ea1ff]/10 transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
