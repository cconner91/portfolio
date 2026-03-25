"use client";

import { useState } from "react";
import { projects } from "../data/projects";

function ProjectCard({ project }: any) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -6;
        const rotateY = ((x / rect.width) - 0.5) * 6;

        setTransform(`
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.02)
        `);
      }}
      onMouseLeave={() => {
        setTransform(
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
        );
      }}
      style={{ transform }}
      className="
        group
        border border-gray-800
        rounded-2xl
        p-6
        bg-black/50 backdrop-blur
        transition-all duration-200
        hover:border-slate-500
        hover:shadow-2xl
        will-change-transform
      "
    >
      {/* TOP ROW */}
      <div className="flex items-center gap-4 mb-4">

        {/* LOGO */}
        {project.logo && (
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-[4px] shrink-0">
            <img
              src={project.logo}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-slate-300 tracking-tight transition group-hover:text-white">
          {project.title}
        </h3>

      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        {project.description}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs bg-gray-800 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* LINK */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm underline hover:text-white"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-12 text-center">
        My Techincal Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 auto-rows-[260px]">
        {projects.map((project: any, i: number) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}