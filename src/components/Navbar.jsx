import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#cases", label: "Cases" },
    { href: "#diensten", label: "Diensten" },
    { href: "#aanpak", label: "Aanpak" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-bold text-white text-lg tracking-tight">
            Niks Geen Gedoe
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Plan een call
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium w-max">
              Plan een call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
