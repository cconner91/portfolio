"use client";

import { profile } from "../data/profile";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div
      className="h-[65vh] bg-cover bg-center flex items-end justify-center relative"
      style={{ backgroundImage: `url(${profile.heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content (BOTTOM POSITIONED) */}
      <div className="relative text-center px-6 pb-8">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {profile.name}
        </h1>

        {/* Title */}
        <p className="mt-2 text-lg text-gray-100">
          {profile.title}
        </p>

        {/* Tagline */}
        <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
          {profile.tagline}
        </p>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center gap-6 text-lg opacity-80">
          <a
            href="https://linkedin.com/in/charlesconner91"
            target="_blank"
            className="hover:text-slate-400 hover:opacity-100 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/cconner91"
            target="_blank"
            className="hover:text-slate-400 hover:opacity-100 transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:charlieconner91@gmail.com"
            className="hover:text-slate-400 hover:opacity-100 transition"
          >
            <MdEmail />
          </a>

          <a
            href="tel:+2405068824"
            className="hover:text-slate-400 hover:opacity-100 transition"
          >
            <MdPhone />
          </a>
        </div>

{/* Resume Button */}
<div className="mt-6 flex justify-center">
  <a
    href="/charlie_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-1.5
      px-6 py-4
      rounded-full
      text-sm font-semibold
      text-white
      border border-slate-400
      bg-slate-900
      transition-all duration-200
      hover:bg-slate-500 hover:border-slate-800 hover:text-white
      hover:scale-105 active:scale-95
    "
  >
    View Resume
    <FiArrowRight className="text-xl" />
  </a>
</div>
      </div>
    </div>
  );
}