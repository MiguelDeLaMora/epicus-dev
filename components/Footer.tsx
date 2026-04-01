import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const nav = [
  {
    heading: "Empresa",
    links: [
      { label: "Nosotros",            href: "/nosotros" },
      { label: "Para Desarrolladores", href: "/desarrolladores" },
      { label: "Recursos",            href: "/recursos" },
    ],
  },
  {
    heading: "Portafolio",
    links: [
      { label: "Terrenos Residenciales", href: "/portafolio" },
      { label: "Departamentos",          href: "/portafolio" },
      { label: "Industrial",             href: "/portafolio" },
      { label: "Casas",                  href: "/portafolio" },
    ],
  },
  {
    heading: "Contacto",
    links: [
      { label: "info@epicus.com.mx", href: "mailto:info@epicus.com.mx" },
      { label: "+52 81 2600 5642",   href: "tel:+528126005642" },
      { label: "Monterrey, N.L.",    href: "#" },
    ],
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-10">
      <div className="mx-auto w-full max-w-6xl px-section">

        {/* Top — brand + columnas de nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06] mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[20px] font-medium tracking-[0.12em] mb-4">
              EPICUS<span className="text-blue">.</span>
            </p>
            <p className="text-[13px] font-light text-white/40 leading-[1.8]">
              Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.
            </p>
          </div>

          {/* Columnas de links */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h5 className="text-overline text-white/30 mb-5">{col.heading}</h5>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-light text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — copyright + aviso */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} EPICUS — Todos los derechos reservados
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-[12px] text-white/25 hover:text-white/60 transition-colors duration-200"
          >
            Aviso de Privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}