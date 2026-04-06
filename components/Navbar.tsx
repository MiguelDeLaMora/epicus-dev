"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const links = [
  { label: "Inicio",         href: "/" },
  { label: "Nosotros",       href: "/nosotros" },
  { label: "Portafolio",     href: "/portafolio" },
  { label: "Desarrolladores",href: "/desarrolladores" },
  { label: "Recursos",       href: "/recursos" },
  { label: "Contacto",       href: "/contacto" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/95 backdrop-blur-[16px] border-b border-black/[0.08] flex items-center">
      <div className="w-full px-[4%] flex items-center justify-between">


        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] font-medium tracking-[0.12em] text-ink hover:opacity-80 transition-opacity duration-200"
        >
          EPICUS<span className="text-blue">.</span>
        </Link>

        {/* Links — desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] tracking-[0.06em] transition-colors duration-200",
                pathname === link.href
                  ? "text-ink font-medium"
                  : "text-ink-mid font-normal hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contacto"
            className="text-[13px] font-medium tracking-[0.06em] bg-blue hover:bg-blue-light text-white px-[22px] py-[10px] rounded-[4px] transition-colors duration-200"
          >
            Solicitar Asesoría
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 text-ink"
          aria-label="Abrir menú"
        >
          <span className={cn("block h-px bg-current transition-all duration-200 origin-center",
            open ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
          )} />
          <span className={cn("block h-px bg-current transition-all duration-200",
            open ? "opacity-0 w-0" : "w-4"
          )} />
          <span className={cn("block h-px bg-current transition-all duration-200 origin-center",
            open ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"
          )} />
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-white border-b border-black/[0.08] flex flex-col px-section py-6 gap-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-[15px] tracking-[0.04em] transition-colors duration-200",
                pathname === link.href
                  ? "text-ink font-medium"
                  : "text-ink-mid font-normal"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="inline-block text-center text-[13px] font-medium tracking-[0.06em] bg-blue text-white px-6 py-3 rounded-[4px] mt-2"
          >
            Solicitar Asesoría
          </Link>
        </div>
      )}
    </header>
  );
}