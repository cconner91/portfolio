"use client";

import Link from "next/link";
import { profile } from "../../data/profile";
import { about } from "../../data/about";
import { career } from "../../data/career";
import { skills } from "../../data/skills";
import { certifications } from "../../data/certifications";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#4ea1ff] shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#4ea1ff]/30 to-transparent" />
      </div>
      {children}
    </div>
  );
}

const toolsGroup = skills.find((g: any) => g.label === "tools");
const systemsGroup = skills.find((g: any) => g.label === "systems");
const skillsetsGroup = skills.find((g: any) => g.label === "skillsets");

const completedCerts = certifications.filter((c: any) => c.status === "COMPLETE");

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 py-10 sm:px-8 max-w-4xl mx-auto">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <FiArrowLeft />
          Back to Portfolio
        </Link>

        <a
          href="/charlie_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-4 py-2 text-sm rounded-full
            border border-[#4ea1ff]/40
            text-[#4ea1ff]
            hover:bg-[#4ea1ff]/10
            transition
          "
        >
          <FiDownload />
          Download PDF
        </a>
      </div>

      {/* HEADER CARD */}
      <div className="border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-[#4ea1ff] mt-1 text-lg font-medium">{profile.title}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-gray-400">
          <a href="mailto:charlieconner91@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
            <MdEmail className="shrink-0" />
            charlieconner91@gmail.com
          </a>
          <a href="tel:+12405068824" className="flex items-center gap-1.5 hover:text-white transition">
            <MdPhone className="shrink-0" />
            (240) 506-8824
          </a>
          <a href="https://linkedin.com/in/charlesconner91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
            <FaLinkedin className="shrink-0" />
            linkedin.com/in/charlesconner91
          </a>
          <a href="https://github.com/cconner91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
            <FaGithub className="shrink-0" />
            github.com/cconner91
          </a>
        </div>
      </div>

      {/* SUMMARY */}
      <Section title="Professional Summary">
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {about.professional}
        </p>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <div className="space-y-8">
          {career.map((job: any, i: number) => (
            <div key={i} className="flex gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-[3px] shrink-0 mt-0.5">
                <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white leading-snug">{job.role}</h3>
                    <p className="text-sm text-[#4ea1ff] mt-0.5">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 shrink-0 mt-1 font-mono">{job.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{job.description}</p>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b: any, j: number) => (
                      <li key={j} className="text-sm text-gray-400 flex gap-2.5">
                        <span className="text-[#4ea1ff] mt-[3px] shrink-0">▸</span>
                        <span>
                          <span className="text-gray-200 font-medium">{b.label}: </span>
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Skills & Tools">
        {toolsGroup && (
          <div className="space-y-3 mb-5">
            {(["technical", "marketing", "testing"] as const).map((cat) => {
              const label = cat === "technical" ? "Technical / Dev" : cat === "marketing" ? "Marketing & Analytics" : "Testing & Design";
              const items = toolsGroup.items.filter((item: any) => item.category === cat);
              return (
                <div key={cat} className="flex gap-4 items-start">
                  <span className="text-xs text-gray-500 w-40 shrink-0 pt-1">{label}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item: any) => (
                      <span key={item.name} className="text-xs bg-gray-800/80 border border-white/5 px-2.5 py-1 rounded-md text-gray-300">
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {systemsGroup && (
          <div className="flex gap-4 items-start mb-3">
            <span className="text-xs text-gray-500 w-40 shrink-0 pt-1">Systems</span>
            <div className="flex flex-wrap gap-2">
              {(systemsGroup.items as string[]).map((item: string) => (
                <span key={item} className="text-xs bg-[#4ea1ff]/5 border border-[#4ea1ff]/15 px-2.5 py-1 rounded-md text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {skillsetsGroup && (
          <div className="flex gap-4 items-start">
            <span className="text-xs text-gray-500 w-40 shrink-0 pt-1">Skillsets</span>
            <div className="flex flex-wrap gap-2">
              {(skillsetsGroup.items as string[]).map((item: string) => (
                <span key={item} className="text-xs bg-gray-800/80 border border-white/5 px-2.5 py-1 rounded-md text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications">
        <div className="space-y-3">
          {completedCerts.map((cert: any, i: number) => (
            <div key={i} className="flex items-center justify-between gap-4">
              <div className="text-sm">
                <span className="text-gray-200">{cert.name}</span>
                <span className="text-gray-500 ml-2 font-mono text-xs">
                  {cert.issuer} · {cert.year}
                </span>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#4ea1ff] hover:underline shrink-0"
                >
                  Verify <FiExternalLink />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg p-[3px] flex items-center justify-center shrink-0">
            <img src="/logos/towson_logo.png" alt="Towson University" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="font-semibold text-white">Towson University</p>
            <p className="text-sm text-gray-400 mt-0.5">B.S. Sports Management & Business · 2013</p>
          </div>
        </div>
      </Section>

    </div>
  );
}
