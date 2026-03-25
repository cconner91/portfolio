"use client";

import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section 
    id="contact"
    className="px-6 py-28 max-w-5xl mx-auto text-center">
      
      {/* TITLE */}
      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
        Let’s Connect
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Whether it’s product, sports, betting, or building something new — 
        I’m always open to connecting and having a conversation.
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        
        {/* EMAIL */}
        <a
          href="mailto:charlieconner91@gmail.com"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-full
            text-sm font-semibold
            text-white
            border border-gray-700
            bg-slate-900
            transition-all duration-200
            hover:bg-slate-500 hover:border-slate-500
            hover:scale-105 active:scale-95
          "
        >
          <FiMail />
          Email Me
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/charlesconner91"
          target="_blank"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-full
            text-sm font-semibold
            border border-gray-700
            text-gray-300
            transition-all duration-200
            hover:text-white hover:border-slate-500
          "
        >
          <FiLinkedin />
          LinkedIn
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/cconner91"
          target="_blank"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-full
            text-sm font-semibold
            border border-gray-700
            text-gray-300
            transition-all duration-200
            hover:text-white hover:border-slate-500
          "
        >
          <FiGithub />
          GitHub
        </a>
      </div>

      {/* SUBTLE FOOTER LINE */}
      <div className="mt-16 text-xs text-gray-500">
        © {new Date().getFullYear()} Charlie Conner
      </div>
    </section>
  );
}