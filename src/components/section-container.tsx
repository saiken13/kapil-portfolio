"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  title: string;
  eyebrow?: string;
  isLast?: boolean;
  children: ReactNode;
};

export function SectionContainer({ id, title, eyebrow, isLast = false, children }: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16, scale: 0.985, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-120px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`scroll-mt-24 pb-16 ${isLast ? "" : "border-b border-white/10"}`}
    >
      <div className="mb-7">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.24em] text-slate-400/80">{eyebrow}</p> : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
