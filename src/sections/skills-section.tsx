"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <SectionContainer id="skills" title="Skills" eyebrow="Toolkit">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-120px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-6"
      >
        {portfolioData.skills.map((group) => (
          <motion.div
            key={group.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{group.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-120px" }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.04] to-slate-200/[0.02] px-3 py-1.5 text-sm text-slate-200 transition hover:border-sky-200/35 hover:text-sky-100"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
