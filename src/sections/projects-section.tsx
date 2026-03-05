"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject, useRef } from "react";

type ProjectsSectionProps = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
};

export function ProjectsSection({ scrollContainerRef }: ProjectsSectionProps) {
  const featured = portfolioData.projects.find((project) => project.featured);
  const rest = portfolioData.projects.filter((project) => !project.featured);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const coinY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [180, -20, -200]), {
    stiffness: 90,
    damping: 22,
  });
  const coinRotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [26, 2, -22]), {
    stiffness: 90,
    damping: 22,
  });
  const coinRotateY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]), {
    stiffness: 90,
    damping: 22,
  });
  const coinRotateZ = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-12, 2, 12]), {
    stiffness: 90,
    damping: 22,
  });
  const coinScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]), {
    stiffness: 90,
    damping: 22,
  });
  const tickerX = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.75, 0.3]);
  const trendCardY = useTransform(scrollYProgress, [0, 1], [34, -46]);
  const trendCardRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const signalCardY = useTransform(scrollYProgress, [0, 1], [58, -20]);
  const signalCardRotate = useTransform(scrollYProgress, [0, 1], [5, -4]);

  return (
    <SectionContainer id="projects" title="Projects" eyebrow="Selected work">
      <div ref={trackRef} className="space-y-7">
        {featured ? (
          <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl border border-sky-200/30 bg-gradient-to-br from-sky-200/14 via-zinc-900 to-zinc-950 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <motion.div
              style={{ opacity: haloOpacity }}
              className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"
            />
            <motion.div style={{ x: tickerX }} className="pointer-events-none absolute -left-10 top-2 flex gap-8 opacity-35">
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-sky-100">NASDAQ +1.8%</span>
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-emerald-200">Revenue +24%</span>
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-sky-100">ARR +31%</span>
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-emerald-200">Profit +12%</span>
            </motion.div>

            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Featured Project</p>
                <h3 className="mt-2 text-3xl font-semibold text-slate-50">{featured.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">{featured.summary}</p>
                <p className="mt-3 text-sm text-slate-200">Impact: {featured.impact}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
                  >
                    GitHub
                  </a>
                  {featured.live ? (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-sky-100/35 bg-sky-200/15 px-3 py-2 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-sky-100/55 hover:bg-sky-200/25"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="block [perspective:1400px]">
                <div className="relative mx-auto h-[310px] w-[220px] sm:h-[340px] sm:w-[250px]">
                  <motion.div
                    style={{ y: coinY, rotateX: coinRotateX, rotateY: coinRotateY, rotateZ: coinRotateZ, scale: coinScale }}
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100/45 bg-gradient-to-br from-emerald-200/65 via-emerald-300/35 to-emerald-500/20 shadow-[0_30px_60px_rgba(16,185,129,0.35)]"
                  >
                    <motion.div
                      animate={{ rotateZ: [0, 360] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border border-emerald-100/30 bg-black/20"
                    />
                    <motion.div
                      animate={{ y: [0, -6, 0], scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 grid place-items-center text-6xl font-bold text-emerald-50/90"
                    >
                      $
                    </motion.div>
                  </motion.div>

                  <motion.div
                    style={{ y: trendCardY, rotate: trendCardRotate }}
                    className="absolute right-0 top-3 w-40 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/95 to-slate-800/80 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Portfolio Trend</p>
                    <div className="mt-2 h-2 w-24 rounded-full bg-emerald-300/55" />
                    <div className="mt-1 h-2 w-16 rounded-full bg-sky-300/45" />
                    <p className="mt-2 text-xs text-emerald-200">+18.4%</p>
                  </motion.div>

                  <motion.div
                    style={{ y: signalCardY, rotate: signalCardRotate }}
                    className="absolute left-0 bottom-4 w-36 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/95 to-slate-800/80 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Signal</p>
                    <div className="mt-2 h-14 rounded-lg border border-sky-100/15 bg-sky-200/12" />
                    <p className="mt-2 text-xs text-sky-200">Buy momentum</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.04] via-zinc-900 to-zinc-900 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-white/25"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Project</p>
              <h3 className="mt-2 text-lg font-medium text-slate-100">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.summary}</p>
              <p className="mt-2 text-sm text-slate-200">Impact: {project.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
                >
                  View Repository
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-lg border border-sky-100/35 bg-sky-200/15 px-3 py-2 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-sky-100/55 hover:bg-sky-200/25"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
