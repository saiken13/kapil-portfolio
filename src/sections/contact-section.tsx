"use client";

import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";
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
    <SectionContainer id="contact" title="Contact" eyebrow="Let\'s connect" isLast>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
        <p className="text-sm text-zinc-400">Email</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a className="text-lg text-zinc-100 hover:text-emerald-100" href={`mailto:${portfolioData.contact.email}`}>
            {portfolioData.contact.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/65 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-sm text-zinc-200 transition hover:border-white/35"
          >
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-sm text-zinc-200 transition hover:border-white/35"
          >
            LinkedIn
          </a>
        </div>

        <form className="mt-6 grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <input
            aria-label="Your name"
            placeholder="Your name"
            className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60"
          />
          <input
            aria-label="Your email"
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60"
          />
          <textarea
            aria-label="Message"
            rows={4}
            placeholder="Message"
            className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60"
          />
          <button
            type="submit"
            className="w-fit rounded-lg border border-emerald-200/40 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 transition hover:bg-emerald-300/20"
          >
            Send
          </button>
        </form>
      </div>
    </SectionContainer>
  );
}
