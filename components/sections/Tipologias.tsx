import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface TipologiaProps {
  icon: React.ReactNode;
  name: string;
  desc: string;
  zones: string[];
  index: number;
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function TipologiaCard({ icon, name, desc, zones, index }: TipologiaProps) {
  return (
    <FadeIn delay={0.2 + index * 0.1}>
      <div className="bg-white p-8 border border-black/[0.06] h-full">
        <div className="w-11 h-11 flex items-center justify-center bg-blue-dim rounded-[4px] mb-5 text-blue">{icon}</div>
        <h3 className="text-h6 text-ink mb-3">{name}</h3>
        <p className="text-[13px] font-light text-ink-soft leading-[1.7] mb-5">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {zones.map((z) => (
            <span key={z} className="text-[11px] text-ink-soft tracking-[0.04em] px-3 py-1 bg-neutral-100 rounded-[2px]">{z}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

// ─── Iconos ───────────────────────────────────────────────────────────────────

const svgStyle = { width: 22, height: 22, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const IconTerreno = () => (<svg viewBox="0 0 24 24" style={svgStyle}><path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
const IconDepto = () => (<svg viewBox="0 0 24 24" style={svgStyle}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>);
const IconIndustrial = () => (<svg viewBox="0 0 24 24" style={svgStyle}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>);
const IconCasa = () => (<svg viewBox="0 0 24 24" style={svgStyle}><path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/><path d="M5 9h2M17 9h2M5 13h2M17 13h2"/></svg>);

// ─── Data ─────────────────────────────────────────────────────────────────────

const tipologias = [
  { icon: <IconTerreno />, name: "Terrenos Residenciales", desc: "Para construir tu hogar en las zonas de mayor proyección y plusvalía en Monterrey y área metropolitana.", zones: ["Carr. Nacional", "Santiago", "García"] },
  { icon: <IconDepto />, name: "Departamentos", desc: "Verticales residenciales en zonas clave de la ciudad, desde opciones de entrada hasta segmento premium.", zones: ["Valle Oriente", "San Jerónimo", "Santa María"] },
  { icon: <IconIndustrial />, name: "Industrial", desc: "Terrenos y bodegas industriales en los corredores logísticos más activos de Nuevo León. Inversión con flujo.", zones: ["Santa Catarina", "Salinas", "García"] },
  { icon: <IconCasa />, name: "Casas", desc: "Proyectos de vivienda horizontal en fraccionamientos cerrados con amenidades y ubicación estratégica.", zones: ["Apodaca", "Monterrey", "Guadalupe"] },
];

// ─── Tipologias ───────────────────────────────────────────────────────────────

export default function Tipologias() {
  return (
    <Section className="bg-cream">

      <FadeIn delay={0}>
        <div className="flex items-start gap-4 mb-14 p-6 bg-white border border-black/[0.06]">
          <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0, stroke: "#2563eb", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }}>
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <p className="text-[14px] font-light text-ink-mid leading-[1.8]">
            <strong className="font-medium text-ink">Todos los proyectos en nuestro portafolio están curados.</strong>{" "}
            Trabajamos exclusivamente con desarrolladores de trayectoria comprobada, proyectos con permisos en regla y estructuras legales transparentes. Antes de presentarte una opción, nosotros ya hicimos la tarea.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="flex items-center gap-3 text-overline text-blue mb-6">
          <span className="block w-6 h-px bg-blue" />
          Tipologías de producto
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06]">
        {tipologias.map((t, i) => (
          <TipologiaCard key={t.name} {...t} index={i} />
        ))}
      </div>

      <FadeIn delay={0.6}>
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-white border border-black/[0.06]">
          <div>
            <h3 className="font-display text-h4 text-ink mb-2">¿Listo para ver opciones reales?</h3>
            <p className="text-[14px] font-light text-ink-mid">En 30 minutos te mostramos las mejores alternativas del mercado, filtradas para tu perfil y objetivos.</p>
          </div>
          <Link href="/contacto" className="shrink-0 inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px">
            Agendar asesoría
          </Link>
        </div>
      </FadeIn>

    </Section>
  );
}