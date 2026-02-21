"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { useState } from "react";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionContainer id="experience" title="Experience" eyebrow="Career path">
      <div className="relative ml-2 space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-white/10">
        {portfolioData.experience.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={`${item.company}-${item.role}`} className="relative pl-8">
              <span className={`absolute left-0 top-2.5 h-4 w-4 rounded-full border ${isOpen ? "border-emerald-200/60 bg-emerald-200/70" : "border-zinc-600 bg-zinc-700"}`} />
              <button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/65 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                aria-expanded={isOpen}
              >
                <p className="text-sm text-zinc-400">{item.period}</p>
                <h3 className="mt-1 text-lg font-medium text-zinc-100">{item.role}</h3>
                <p className="text-sm text-zinc-300">{item.company} · {item.location}</p>
              </button>
              {isOpen ? (
                <ul className="mt-3 ml-5 list-disc space-y-2 text-sm leading-relaxed text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
