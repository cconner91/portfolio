"use client";

import { about } from "../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-12">
        About
      </h2>

      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-5 text-white">
          Personal Background
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
          {about.personal}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-5 text-white">
          Professional Background
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-6 whitespace-pre-line">
          {about.professional}
        </p>

        <div className="flex flex-wrap gap-3">
          {about.focus.map((item: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-gray-800 px-3 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}