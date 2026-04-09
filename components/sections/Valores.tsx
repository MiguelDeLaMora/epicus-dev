import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface ValorProps {
  num: string;
  title: string;
  body: string;
  index: number;
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function ValorItem({ num, title, body, index }: ValorProps) {
  return (
    <FadeIn delay={0.1 + index * 0.08}>
      <div className="border-t border-black/[0.08] pt-8">
        <div className="font-display text-[19px] tracking-[0.08em] text-blue mb-3">
          {num}
        </div>
        <h3 className="text-h6 text-ink mb-3">{title}</h3>
        <p className="text-[13px] font-light text-ink-soft leading-[1.8]">{body}</p>
      </div>
    </FadeIn>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const valores = [
  { num: "01", title: "El cliente primero, siempre", body: "No tenemos presión de vender un proyecto específico. Nuestro éxito se mide por la calidad de la decisión del cliente, no por el volumen de transacciones." },
  { num: "02", title: "Información como activo", body: "Invertimos en inteligencia de mercado porque creemos que la información bien procesada es la ventaja más grande que podemos darle a alguien tomando una decisión de esta magnitud." },
  { num: "03", title: "Proceso por encima de presión", body: "Creemos en acompañar, no en empujar. La mejor venta es la que el cliente hace convencido, con tiempo y con claridad sobre lo que está eligiendo." },
  { num: "04", title: "Resultados medibles", body: "Trabajamos con KPIs, dashboards y sistemas de seguimiento. No con improviso. La estructura nos permite ser constantes, escalables y confiables." },
  { num: "05", title: "Visión de largo plazo", body: "Construimos relaciones que duran décadas. Muchos de nuestros clientes han comprado con nosotros más de una vez porque saben lo que van a encontrar." },
  { num: "06", title: "Honestidad sobre conveniencia", body: "Si una propiedad no es la correcta para el cliente, lo decimos. Aunque eso signifique alargar la búsqueda. La confianza no se construye con una sola operación." },
];

// ─── Valores ──────────────────────────────────────────────────────────────────

export default function Valores() {
  return (
    <Section className="bg-white">
      <FadeIn delay={0}>
        <p className="flex items-center gap-3 text-overline text-blue mb-5">
          <span className="block w-6 h-px bg-blue" />
          Nuestros principios
        </p>
        <h2 className="font-display text-h2 text-ink">
          Cómo pensamos.<br />
          <em className="italic text-blue">Cómo operamos.</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-16">
        {valores.map((v, i) => (
          <ValorItem key={v.num} {...v} index={i} />
        ))}
      </div>
    </Section>
  );
}