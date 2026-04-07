import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface TestimonioProps {
  quote: string;
  author: string;
  index: number;
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-overline text-blue mb-5">
      <span className="block w-6 h-px bg-blue" />
      {children}
    </p>
  );
}

function TestimonioCard({ quote, author, index }: TestimonioProps) {
  // Par superior (0,1) entra antes que par inferior (2,3)
  const delay = index < 2 ? 0.2 + index * 0.1 : 0.4 + (index - 2) * 0.1;

  return (
    <FadeIn delay={delay}>
      <div className="bg-cream p-10 h-full">
        <div className="text-blue tracking-[2px] mb-5 text-base">★★★★★</div>
        <p className="font-display text-h5 font-normal italic text-ink leading-[1.6] mb-6">
          "{quote}"
        </p>
        <p className="text-btn text-ink-mid tracking-[0.05em]">{author}</p>
      </div>
    </FadeIn>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonios = [
  {
    quote: "Se tomaron el tiempo de entender exactamente lo que estaba buscando. Me mostraron distintas opciones dentro de su portafolio y encontramos una que realmente se ajustaba a mi presupuesto y estilo de vida.",
    author: "Carlos R. — Comprador residencial",
  },
  {
    quote: "Lo que me dio confianza es que no intentan venderte cualquier propiedad. Su enfoque es ayudarte a encontrar la mejor opción para ti. La decisión fue mucho más clara gracias a su honestidad.",
    author: "Camila L. — Inversionista",
  },
  {
    quote: "Desde el primer contacto sentí un trato muy personalizado. Siempre estuvieron disponibles para resolver mis dudas y me respondieron rápido en cada etapa del proceso.",
    author: "Joaquín M. — Comprador primera vivienda",
  },
  {
    quote: "Me sorprendió ver que manejan opciones para todo tipo de perfiles. Eso facilita mucho encontrar algo que realmente se adapte a lo que uno busca, sin comprometerse con lo que no encaja.",
    author: "Andrea R. — Inversionista industrial",
  },
];

// ─── Testimonios ──────────────────────────────────────────────────────────────

export default function Testimonios() {
  return (
    <Section className="bg-white">
      <FadeIn delay={0}>
        <SectionLabel>Lo que dicen nuestros clientes</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          Confiados <em className="italic text-blue">por muchos</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.08] mt-16">
        {testimonios.map((t, i) => (
          <TestimonioCard key={t.author} {...t} index={i} />
        ))}
      </div>
    </Section>
  );
}