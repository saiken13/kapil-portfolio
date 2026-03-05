"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionContainer id="experience" title="Experience" eyebrow="Career path">
      <div className="relative ml-2 space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-white/12">
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-2 bottom-2 left-[6px] w-[3px] rounded-full bg-gradient-to-b from-sky-200/65 via-transparent to-sky-200/65"
        />

        {portfolioData.experience.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8"
            >
              <motion.span
                animate={isOpen ? { scale: [1, 1.2, 1], opacity: [0.9, 1, 0.9] } : { scale: 1, opacity: 0.5 }}
                transition={isOpen ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
                className={`absolute left-0 top-2.5 h-4 w-4 rounded-full border ${
                  isOpen ? "border-sky-200/70 bg-sky-200/70" : "border-zinc-600 bg-zinc-700"
                }`}
              />

              <motion.button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                whileHover={{ y: -3, scale: 1.01 }}
                className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-slate-200/[0.02] p-4 text-left transition hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/65 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                aria-expanded={isOpen}
              >
                <p className="text-sm text-slate-400">{item.period}</p>
                <h3 className="mt-1 text-lg font-medium text-slate-100">{item.role}</h3>
                <p className="text-sm text-slate-300">
                  {item.company} · {item.location}
                </p>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.ul
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-3 ml-5 list-disc space-y-2 overflow-hidden text-sm leading-relaxed text-slate-300"
                  >
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
