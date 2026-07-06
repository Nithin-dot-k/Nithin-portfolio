import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "~/home" },
  { id: "about", label: "~/about" },
  { id: "specs", label: "~/tech_specs" },
  { id: "projects", label: "~/projects" },
  { id: "experience", label: "~/experience" },
  { id: "contact", label: "~/contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#05070a]/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-neon flex items-center gap-2">
          <span className="text-muted-foreground">root@</span>nithin-k<span className="text-muted-foreground">:~$</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded transition-colors ${
                  active === s.id
                    ? "text-neon bg-neon/10"
                    : "text-muted-foreground hover:text-neon-cyan"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-xs text-neon px-3 py-1.5 glow-border rounded"
        >
          {open ? "[x]" : "[≡]"}
        </button>
      </div>
      {open && (
        <ul className="md:hidden font-mono text-sm border-t border-border bg-[#05070a]/95">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 border-b border-border/50 ${
                  active === s.id ? "text-neon" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
