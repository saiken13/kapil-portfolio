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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`scroll-mt-24 pb-14 ${isLast ? "" : "border-b border-white/8"}`}
    >
      <div className="mb-6">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{eyebrow}</p> : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
