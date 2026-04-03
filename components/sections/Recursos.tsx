import Link from "next/link";
import Section from "@/components/ui/Section";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Recurso {
  _id: string;
  categoria: string;
  titulo: string;
  resumen: string;
  cuerpo: string;
  orden: number;
}

// ─── Gradientes por categoría ─────────────────────────────────────────────────

const gradientes: Record<string, string> = {
  "Inversión":  "linear-gradient(145deg,#0a1628 0%,#1e3a8a 100%)",
  "Mercado":    "linear-gradient(145deg,#0c1f3a 0%,#163d6e 100%)",
  "Industrial": "linear-gradient(145deg,#0a1a2e 0%,#0f3460 100%)",
  "Finanzas":   "linear-gradient(145deg,#0f172a 0%,#1e3a8a 100%)",
  "Guía":       "linear-gradient(145deg,#0c1a30 0%,#1a3a6a 100%)",
};

const defaultGradiente = "linear-gradient(145deg,#0a1628 0%,#1e3560 100%)";

// ─── Card ─────────────────────────────────────────────────────────────────────

function RecursoCard({ recurso }: { recurso: Recurso }) {
  const gradiente = gradientes[recurso.categoria] ?? defaultGradiente;

  return (
    <div className="rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] bg-white flex flex-col">
      {/* Header */}
      <div style={{ background: gradiente }} className="p-7">
        <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">
          {recurso.categoria} · EPICUS
        </p>
        <h3 className="font-display text-[22px] font-normal text-white leading-[1.25]">
          {recurso.titulo}
        </h3>
      </div>

      {/* Footer con link */}
      <div className="px-7 py-[18px] flex items-center justify-between border-b border-black/[0.06]">
        <span className="text-[12px] text-ink-soft">{recurso.resumen}</span>
        <Link
          href="/contacto"
          className="text-[12px] text-blue font-medium hover:underline shrink-0 ml-4"
        >
          Platícalo con nosotros →
        </Link>
      </div>

      {/* Cuerpo */}
      <div className="px-7 py-5 flex-1">
        <p className="text-[13px] font-light text-ink-mid leading-[1.8]">
          {recurso.cuerpo}
        </p>
      </div>
    </div>
  );
}

// ─── Recursos ─────────────────────────────────────────────────────────────────

export default function Recursos({ recursos }: { recursos: Recurso[] }) {
  return (
    <Section className="bg-white">
      {/* Header */}
      <p className="flex items-center gap-3 text-overline text-blue mb-5">
        <span className="block w-6 h-px bg-blue" />
        Recursos e Inteligencia
      </p>
      <h1 className="font-display text-h1 text-ink">
        Lo que sabemos,<br />
        <em className="italic text-blue">lo compartimos.</em>
      </h1>
      <p className="text-b1 font-light text-ink-mid max-w-[560px] mt-5 mb-16">
        Cápsulas de información sobre el mercado inmobiliario de Monterrey — para
        que llegues a cualquier conversación mejor preparado.
      </p>

      {/* Grid de cards */}
      {recursos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso) => (
            <RecursoCard key={recurso._id} recurso={recurso} />
          ))}
        </div>
      ) : (
        <p className="text-b1 text-ink-soft">
          Próximamente publicaremos nuevos recursos.
        </p>
      )}

      {/* CTA final */}
      <div className="mt-16 text-center bg-cream rounded-lg px-12 py-12">
        <p className="text-overline text-blue mb-4">Cada semana compartimos más</p>
        <h3 className="font-display text-h3 font-light text-ink mb-3">
          ¿Quieres que te avisemos cuando<br />publiquemos nuevo contenido?
        </h3>
        <p className="text-[14px] font-light text-ink-mid mb-7">
          Agenda una asesoría y te mantenemos al tanto del mercado.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
        >
          Hablar con un asesor
        </Link>
      </div>
    </Section>
  );
}