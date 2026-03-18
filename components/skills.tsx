"use client";

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
    id="skills" 
    className="px-6 py-20 max-w-5xl mx-auto">

      {/* TITLE */}
      <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-tight mb-12 text-center">
        Technical Skillsets & Tools
      </h2>

      <div className="space-y-16">

        {skills.map((group: any, i: number) => (
          <div key={i} className="max-w-4xl mx-auto">

            {/* OPEN TAG */}
            <div className="text-left text-[#4ea1ff] font-mono text-lg tracking-wide mb-4">
              {`<${group.label}>`}
            </div>

            {/* TOOLS */}
            {group.label === "tools" ? (
              <div className="space-y-8">

                {["technical", "marketing", "testing"].map((cat) => {
                  const filtered = group.items.filter(
                    (item: any) => item.category === cat
                  );

                  return (
                    <div key={cat} className="flex flex-col items-center">

                      {/* CATEGORY LABEL */}
                      <div className="text-[15px] text-gray-500 mb-3 tracking-widest uppercase">
                        {cat === "technical" && "Technical / Dev"}
                        {cat === "marketing" && "Marketing & Analytics"}
                        {cat === "testing" && "Testing & Wireframing"}
                      </div>

                      {/* HEX GRID */}
                      <div className="flex flex-wrap justify-center gap-4 max-w-[600px]">
                        {filtered.map((item: any, i: number) => (
                          <div key={i} className="hex">
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}

              </div>
            ) : (
              /* ✅ MODERN LIST STYLE */
              <div className="grid md:grid-cols-2 gap-x-1 gap-y-3 pl-4">

                {group.items.map((item: string, j: number) => (
                  <div
                    key={j}
                    className="
                      relative text-sm text-gray-300
                      pl-5
                      before:absolute before:left-0 before:top-[7px]
                      before:w-2 before:h-2
                      before:bg-[#4ea1ff]
                      before:rounded-full
                      before:opacity-70
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>
            )}

            {/* CLOSE TAG */}
            <div className="text-right text-[#4ea1ff] font-mono text-lg tracking-wide mt-4">
              {`</${group.label}>`}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}