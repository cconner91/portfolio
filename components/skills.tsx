"use client";

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-5xl mx-auto">

      <h2 className="text-5xl md:text-6xl font-semibold mb-12 text-center">
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

                      <div className="text-[17px] text-gray-300 mb-10 tracking-widest uppercase">
                        {cat === "technical" && "[Technical / Dev]"}
                        {cat === "marketing" && "[Marketing & Analytics]"}
                        {cat === "testing" && "[Testing & Wireframing]"}
                      </div>

                      {/* HEX GRID */}
                      <div className="hex-wrapper">

                        {filtered.map((item: any, i: number) => (
                          <div key={i} className="hex">
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-14 h-14 object-contain"
                            />
                          </div>
                        ))}

                      </div>

                    </div>
                  );
                })}

              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-y-3 pl-4">
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