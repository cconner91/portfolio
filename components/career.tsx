"use client";

import { useState } from "react";
import { career } from "../data/career";

export default function Career() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
    id="career"
    className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-12 text-center">
        Career
      </h2>

      <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">

        {/* LEFT SIDE - TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-gray-800" />

          <div className="space-y-6">
            {career.map((job: any, i: number) => (
              <div key={i}>
                {/* CLICKABLE ROW */}
                <div
                  onClick={() => setActiveIndex(i)}
                  className={`
    relative flex items-center gap-3 cursor-pointer group
    px-3 py-2 rounded-lg
    transition-all duration-200
    ${i === activeIndex
                      ? "bg-gray-800/60"
                      : "hover:bg-gray-800/40"
                    }
  `}
                >
                  {/* DOT */}
                  <div
                    className={`
      w-3 h-3 rounded-full z-10 transition-all
      ${i === activeIndex
                        ? "bg-slate-400 scale-125 shadow-[0_0_8px_rgba(148,163,184,0.6)]"
                        : "bg-gray-600 group-hover:bg-gray-400"
                      }
    `}
                  />

                  {/* LOGO */}
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-md p-[2px]">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col">
                    <p className="text-sm font-medium transition group-hover:text-white">
                      {job.company}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">
                      {job.period}
                    </p>
                  </div>

                  {/* HOVER ARROW */}
                  <span className="ml-auto text-gray-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </div>

                {/* CONNECTOR */}
                {i !== career.length - 1 && (
                  <div className="ml-[11px] mt-2 h-6 w-[2px] bg-gray-800" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="border border-gray-800 rounded-xl p-6 bg-black/30 transition-all duration-300">

          <h3 className="text-xl font-semibold">
            {career[activeIndex].role}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            {career[activeIndex].company} • {career[activeIndex].period}
          </p>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            {career[activeIndex].description}
          </p>

        </div>
      </div>
    </section>
  );
}