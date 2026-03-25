"use client";

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto">

     <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-12 text-center">
        Technical Skillsets & Tools
      </h2>

      <div className="space-y-16">

        {skills.map((group: any, i: number) => (
          <div key={i} className="max-w-4xl mx-auto">

            <div className="text-left text-[#4ea1ff] font-mono text-2xl mb-6">
              {`<${group.label}>`}
            </div>

            {group.label === "tools" ? (
              <div className="space-y-12">

                {["technical", "marketing", "testing"].map((cat) => {
                  const filtered = group.items.filter(
                    (item: any) => item.category === cat
                  );

                  if (!filtered.length) return null;

                  return (
                    <div key={cat} className="flex flex-col items-center">

                      <div className="text-[19px] text-gray-100 mb-10 tracking-widest uppercase">
                        {cat === "technical" && "{Technical / Dev}"}
                        {cat === "marketing" && "{Marketing & Analytics}"}
                        {cat === "testing" && "{Testing & Wireframing}"}
                      </div>

                      {/* HEX GRID */}
                      <div className="hex-wrapper">

                        {filtered.map((item: any, i: number) => (
                          <div key={i} className="hex">
                            <svg
                              viewBox="0 0 100 100"
                              className="absolute inset-0 w-full h-full pointer-events-none"
                            >
                            <polygon
                              points="50,0 100,25 100,75 50,100 0,75 0,25"
                              fill="#1f1b2e"
                              stroke="transparent"
                              strokeWidth="2"
                              className="hex-shape"
                              />
                            </svg>
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-14 h-14 object-contain relative z-10"
                            />
                          </div>
                        ))}

                      </div>

                    </div>
                  );
                })}

              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-y-2 pl-10">
                {group.items.map((item: string, j: number) => (
                  <div key={j} className="text-sm text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            )}

            <div className="text-right text-[#4ea1ff] font-mono text-2xl mt-6">
              {`</${group.label}>`}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}