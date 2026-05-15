"use client";

import Link from "next/link";
import { resume } from "../../data/resume";
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
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-[#4ea1ff]/40 text-[#4ea1ff] hover:bg-[#4ea1ff]/10 transition"
        >
          <FiDownload />
          Download PDF
        </a>
      </div>

      {/* HEADER */}
      <div className="border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{resume.name}</h1>
        <p className="text-[#4ea1ff] mt-1 text-lg font-medium">{resume.title}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-gray-400">
          <a href={`mailto:${resume.contact.email}`} className="flex items-center gap-1.5 hover:text-white transition">
            <MdEmail className="shrink-0" />{resume.contact.email}
          </a>
          <a href={`tel:${resume.contact.phone.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition">
            <MdPhone className="shrink-0" />{resume.contact.phone}
          </a>
          <a href={`https://${resume.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
            <FaLinkedin className="shrink-0" />{resume.contact.linkedin}
          </a>
          <a href="https://github.com/cconner91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
            <FaGithub className="shrink-0" />github.com/cconner91
          </a>
        </div>
      </div>

      {/* SUMMARY */}
      <Section title="Professional Summary">
        <p className="text-sm text-gray-300 leading-relaxed">{resume.summary}</p>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Employment">
        <div className="space-y-8">
          {resume.experience.map((job, i) => (
            <div key={i} className="flex gap-5">
              {job.logo ? (
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg p-[3px] shrink-0 mt-1">
                  <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg shrink-0 mt-1 text-xs font-bold text-gray-400">
                  {job.company.charAt(0)}
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white leading-snug">
                      {job.role}
                      {job.partTime && (
                        <span className="ml-2 text-xs font-normal text-gray-500">(Part-Time)</span>
                      )}
                    </h3>
                    <p className="text-sm text-[#4ea1ff] mt-0.5">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-500 font-mono">{job.period}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{job.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-gray-400 flex gap-2.5">
                      <span className="text-[#4ea1ff] mt-[3px] shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <div className="flex flex-wrap gap-2 mb-8">
          {resume.skills.map((skill) => (
            <span key={skill} className="text-xs bg-gray-800/80 border border-white/5 px-2.5 py-1 rounded-md text-gray-300">
              {skill}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          {resume.tools.map(({ category, items }) => (
            <div key={category} className="flex gap-4 items-start">
              <span className="text-xs text-gray-500 w-44 shrink-0 pt-1">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-xs bg-[#4ea1ff]/5 border border-[#4ea1ff]/15 px-2.5 py-1 rounded-md text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Courses & Certifications">
        <div className="space-y-3">
          {resume.certifications.map((cert, i) => (
            <div key={i} className="flex items-center justify-between gap-4">
              <div className="text-sm">
                <span className="text-gray-200">{cert.name}</span>
                <span className="text-gray-500 ml-2 font-mono text-xs">· {cert.issuer}</span>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#4ea1ff] hover:underline shrink-0">
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
          <div className="w-10 h-10 bg-white rounded-lg p-[3px] flex items-center justify-center shrink-0">
            <img src={resume.education.logo} alt={resume.education.school} className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="font-semibold text-white">{resume.education.school}</p>
            <p className="text-sm text-gray-400 mt-0.5">{resume.education.degree} · {resume.education.period}</p>
          </div>
        </div>
      </Section>

    </div>
  );
}
