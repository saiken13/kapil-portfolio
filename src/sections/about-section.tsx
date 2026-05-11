"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { motion } from "framer-motion";

export function AboutSection() {
  const { bio, highlights, education } = portfolioData.about;

  return (
    <SectionContainer id="about" title="About" eyebrow="Who I am">
      <div className="space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-base leading-relaxed text-slate-300"
        >
          {bio}
        </motion.p>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400/70">Education</p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.97 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-5"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 30% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)" }}
                />
                <p className="text-xs uppercase tracking-[0.18em] text-sky-400/80">
                  {edu.period}
                  {edu.gpa ? ` · ${edu.gpa}` : ""}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-100">{edu.degree}</h3>
                <p className="mt-1 text-sm text-slate-400">{edu.school}</p>
                {edu.coursework.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400/70">Achievements</p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-start gap-3 rounded-xl border border-amber-200/12 bg-gradient-to-r from-amber-200/5 to-transparent px-4 py-3"
              >
                <span className="mt-0.5 text-amber-300">★</span>
                <span className="text-sm text-slate-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionContainer>
  );
}
