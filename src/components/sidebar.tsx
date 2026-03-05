import { NavLink } from "@/data/data";

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
        <p className="inline-flex items-center rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 text-xs font-medium text-sky-100">
          {status}
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl">{name}</h1>
        <p className="mt-3 text-lg text-slate-200">{role}</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300/85">{tagline}</p>
        <p className="mt-4 text-sm text-slate-400">{location}</p>
      </div>

      <nav className="mt-10 lg:mt-12" aria-label="Section navigation">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`group flex w-full items-center justify-between rounded-xl border px-4 py-2 text-left text-sm transition lg:max-w-[220px] ${
                    isActive
                      ? "border-sky-200/35 bg-gradient-to-r from-sky-200/20 to-cyan-200/10 text-slate-100"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
                >
                  <span>{link.label}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-sky-100" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
