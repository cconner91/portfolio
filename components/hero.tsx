"use client";

import { profile } from "../data/profile";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

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
        <h1 className="font-orbitron text-5xl md:text-7xl font-black tracking-tight">
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
        <div className="mt-5 flex justify-center gap-6 text-xl">
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
<div className="mt-8 flex justify-center">
  <a
    href="/resume"
    className="
      font-orbitron
      inline-flex items-center gap-3
      px-10 py-4
      text-xs font-bold tracking-[0.2em] uppercase
      text-[#4ea1ff]
      bg-[#050d1f]
      border border-[#4ea1ff]/50
      transition-all duration-300
      hover:text-white
      hover:border-[#4ea1ff]
      hover:shadow-[0_0_25px_rgba(78,161,255,0.45),inset_0_0_25px_rgba(78,161,255,0.07)]
      hover:scale-105 active:scale-95
    "
    style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
  >
    View Resume
    <img src="/logos/resume_file.png" alt="" className="w-5 h-5 object-contain opacity-80" />
  </a>
</div>
      </div>
    </div>
  );
}