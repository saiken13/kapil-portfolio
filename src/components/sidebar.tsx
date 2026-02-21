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
        <p className="inline-flex items-center rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
          {status}
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">{name}</h1>
        <p className="mt-3 text-lg text-zinc-300">{role}</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">{tagline}</p>
        <p className="mt-4 text-sm text-zinc-500">{location}</p>
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
                      ? "border-emerald-300/35 bg-emerald-300/10 text-zinc-100"
                      : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
                >
                  <span>{link.label}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-emerald-200" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
