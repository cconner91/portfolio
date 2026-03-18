"use client";

import { useState } from "react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
    id="certifications" 
    className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-12 text-center">
        Certifications & Learning
      </h2>

      <div className="relative flex flex-col items-center">

        {/* CARDS */}
        <div className="relative flex items-center justify-center w-full h-[280px]">

          {certifications.map((cert: any, i: number) => {
            const isCenter = i === index;
            const isLeft =
              i === (index - 1 + certifications.length) % certifications.length;
            const isRight =
              i === (index + 1) % certifications.length;

            return (
              <div
                key={i}
                onClick={() => {
                  if (isLeft) prev();
                  if (isRight) next();
                }}
                className={`
                  absolute cursor-pointer  
                  transition-all duration-500 ease-in-out
                  ${
                    isCenter
                      ? "z-30 scale-100 opacity-100 translate-x-0 blur-0"
                      : isLeft
                      ? "z-20 scale-90 opacity-60 -translate-x-44 blur-[2px]"
                      : isRight
                      ? "z-20 scale-90 opacity-60 translate-x-44 blur-[2px]"
                      : "z-10 scale-75 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    w-[380px] h-[240px]
                    border border-gray-800
                    p-6 rounded-2xl
                    bg-black/50 backdrop-blur
                    shadow-lg
                    flex flex-col justify-between
                    hover:border-slate-500
                  "
                >
                  {/* TOP ROW */}
                  <div className="flex items-start gap-4">

                    {/* LOGO */}
                    {cert.logo && (
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-[4px] shrink-0">
                        <img
                          src={cert.logo}
                          alt={cert.issuer || ""}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    {/* TITLE + META */}
                    <div className="flex flex-col text-left">
                      <h3 className="text-lg font-semibold leading-snug">
                        {cert.name}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>

                  {/* STATUS (CENTERED) */}
                  <div className="flex justify-center">
                    <span
                      className={`
                        text-[11px] px-3 py-[4px] rounded-md font-medium
                        ${
                          cert.status === "COMPLETE"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      `}
                    >
                      {cert.status}
                    </span>
                  </div>

                  {/* BOTTOM */}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:text-white text-center"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex gap-3 mt-8">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-200
                ${
                  i === index
                    ? "bg-white scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}