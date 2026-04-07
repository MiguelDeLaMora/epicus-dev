import Link from "next/link";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const nav = [
  {
    heading: "Empresa",
    links: [
      { label: "Nosotros",             href: "/nosotros" },
      { label: "Para Desarrolladores", href: "/desarrolladores" },
      { label: "Recursos",             href: "/recursos" },
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

// ─── Iconos sociales ──────────────────────────────────────────────────────────

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="3"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-blue text-white pt-16 pb-10">
      <div className="mx-auto w-full px-[4%]">

        {/* Top — brand + columnas de nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/20 mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo-footer-epicus.webp"
              alt="EPICUS"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-[13px] font-light text-white/70 leading-[1.8] mb-6">
              Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/epicusresidencial/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] border border-white/25 bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.instagram.com/epicusinmobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] border border-white/25 bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Columnas de links */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h5 className="text-overline text-white/60 mb-5">{col.heading}</h5>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-light text-white/80 hover:text-white transition-colors duration-200"
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
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} EPICUS — Todos los derechos reservados
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-[12px] text-white/50 hover:text-white transition-colors duration-200"
          >
            Aviso de Privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}