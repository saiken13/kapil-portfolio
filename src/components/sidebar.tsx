"use client";

import { NavLink } from "@/data/data";
import { motion } from "framer-motion";

type SidebarProps = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  navLinks: NavLink[];
  activeSection: string;
  onNavigate: (id: string) => void;
};

export function Sidebar({
  name,
  role,
  tagline,
  location,
  status,
  navLinks,
  activeSection,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="panel-scrollbar lg:sticky lg:top-14 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
      <div>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 text-xs font-medium text-sky-100"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
          </span>
          {status}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 bg-gradient-to-r from-sky-200 via-blue-200 to-violet-200 bg-clip-text text-lg font-medium text-transparent"
        >
          {role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300/85"
        >
          {tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-sm text-slate-400"
        >
          {location}
        </motion.p>
      </div>

      <nav className="mt-10 lg:mt-12" aria-label="Section navigation">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id}>
                <motion.button
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 3, transition: { duration: 0.15 } }}
                  className={`group flex w-full items-center justify-between rounded-xl border px-4 py-2 text-left text-sm transition lg:max-w-[220px] ${
                    isActive
                      ? "border-sky-200/35 bg-gradient-to-r from-sky-200/20 to-cyan-200/10 text-slate-100"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${isActive ? "bg-sky-100" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
