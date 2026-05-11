"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { motion } from "framer-motion";

const colorMap = {
  violet: {
    heading: "text-violet-400",
    badge: "border-violet-200/18 bg-violet-200/5 text-violet-200/80 hover:border-violet-200/45 hover:text-violet-100",
    glow: "rgba(167,139,250,0.08)",
  },
  sky: {
    heading: "text-sky-400",
    badge: "border-sky-200/18 bg-sky-200/5 text-sky-200/80 hover:border-sky-200/45 hover:text-sky-100",
    glow: "rgba(56,189,248,0.08)",
  },
  pink: {
    heading: "text-pink-400",
    badge: "border-pink-200/18 bg-pink-200/5 text-pink-200/80 hover:border-pink-200/45 hover:text-pink-100",
    glow: "rgba(244,114,182,0.08)",
  },
  amber: {
    heading: "text-amber-400",
    badge: "border-amber-200/18 bg-amber-200/5 text-amber-200/80 hover:border-amber-200/45 hover:text-amber-100",
    glow: "rgba(251,191,36,0.08)",
  },
};

export function SkillsSection() {
  return (
    <SectionContainer id="skills" title="Skills" eyebrow="Toolkit">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-120px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-7"
      >
        {portfolioData.skills.map((group) => {
          const colors = colorMap[group.color];
          return (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <h3 className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${colors.heading}`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-120px" }}
                    transition={{ duration: 0.35, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.15 } }}
                    className={`cursor-default rounded-lg border px-3 py-1.5 text-sm transition-colors duration-200 ${colors.badge}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
