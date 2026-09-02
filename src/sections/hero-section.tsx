"use client";

import { portfolioData } from "@/data/data";
import { SectionContainer } from "@/components/section-container";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "94%", label: "AI Resolution Accuracy" },
  { value: "350K+", label: "Users Scaled To" },
];

const techHighlights = ["LangGraph", "RAG Pipelines", "FastAPI", "LangChain", "React", "AWS", "PostgreSQL", "OpenAI API"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection() {
  return (
    <SectionContainer id="home" title="Home" eyebrow="Introduction">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-7"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-emerald-300">
            Building with LangChain · RAG Pipelines · FastAPI
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-xl leading-relaxed text-slate-200"
        >
          {portfolioData.profile.shortIntro}
        </motion.p>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
          className="grid grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.92 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -5, scale: 1.04, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent p-4 text-center"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at center, rgba(56,189,248,0.08) 0%, transparent 70%)" }}
              />
              <p className="text-2xl font-bold text-slate-50 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } } }}
          className="flex flex-wrap gap-2"
        >
          {techHighlights.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
              }}
              whileHover={{ y: -3, scale: 1.06, transition: { duration: 0.15 } }}
              className="rounded-full border border-sky-200/18 bg-sky-200/5 px-3 py-1 text-xs text-sky-200/75 hover:border-sky-200/40 hover:text-sky-100"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <a
            href={portfolioData.profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-sky-100/35 bg-gradient-to-r from-sky-200/20 to-cyan-200/10 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-sky-100/60 hover:from-sky-200/30 hover:to-cyan-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Download Resume
          </a>
          <a
            href="https://optifi-murex.vercel.app/login"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-emerald-200/30 bg-gradient-to-r from-emerald-200/12 to-emerald-300/6 px-5 py-2.5 text-sm font-medium text-emerald-100 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-emerald-200/55 hover:from-emerald-200/20 hover:to-emerald-300/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Live Demo — OptiFi
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
