"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SectionContainer id="contact" title="Contact" eyebrow="Let&apos;s connect" isLast>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-5 sm:p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a className="text-base text-slate-100 hover:text-sky-100" href={`mailto:${portfolioData.contact.email}`}>
                {portfolioData.contact.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-slate-200 transition hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/65 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone</p>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="mt-2 block text-base text-slate-100 hover:text-sky-100"
            >
              {portfolioData.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-sm text-slate-200 transition hover:border-white/35 hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-sky-200/20 bg-sky-200/5 px-3 py-2 text-sm text-sky-200 transition hover:border-sky-200/45 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href="https://kapil-portfolio-lemon.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-sm text-slate-200 transition hover:border-white/35 hover:-translate-y-0.5"
          >
            Portfolio
          </a>
        </div>

        <form className="mt-6 grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <input
            aria-label="Your name"
            placeholder="Your name"
            className="rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60"
          />
          <input
            aria-label="Your email"
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60"
          />
          <textarea
            aria-label="Message"
            rows={4}
            placeholder="Message"
            className="rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60"
          />
          <button
            type="submit"
            className="w-fit rounded-lg border border-sky-100/35 bg-sky-200/15 px-4 py-2 text-sm text-slate-100 transition hover:bg-sky-200/25 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </SectionContainer>
  );
}
