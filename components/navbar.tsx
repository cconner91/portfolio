"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        
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
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition">
              About
            </a>

            <a href="#career" className="text-sm text-gray-300 hover:text-white transition">
              Career
            </a>

            <a href="#skills" className="text-sm text-gray-300 hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition">
              Projects
            </a>

            <a href="#certifications" className="text-sm text-gray-300 hover:text-white transition">
              Certifications
            </a>

            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}