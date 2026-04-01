import Section from "@/components/ui/Section";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface StepProps {
  num: string;
  icon: React.ReactNode;
  title: string;
  body: string;
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

function PasoCard({ num, icon, title, body }: StepProps) {
  return (
    <div className="relative bg-white px-8 py-10 overflow-hidden group hover:bg-[#f4f3f0] transition-colors duration-200">
      {/* Número decorativo */}
      <span
        className="absolute top-4 right-5 font-display font-light leading-none select-none pointer-events-none text-[80px]"
        style={{ color: "rgba(37,99,235,0.08)" }}
        aria-hidden
      >
        {num}
      </span>

      {/* Ícono */}
      <div className="relative w-11 h-11 flex items-center justify-center bg-blue-dim rounded-[4px] mb-5 text-blue">
        {icon}
      </div>

      {/* Texto */}
      <h3 className="relative font-display text-h4 font-normal text-ink mb-3">
        {title}
      </h3>
      <p className="relative text-[13px] font-light text-ink-soft leading-[1.8]">
        {body}
      </p>
    </div>
  );
}

// ─── Iconos ───────────────────────────────────────────────────────────────────

const IconChat = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const IconFilter = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const IconDone = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps: StepProps[] = [
  {
    num: "01",
    icon: <IconChat />,
    title: "Te escuchamos primero",
    body: "Antes de mostrarte cualquier opción, queremos entender qué buscas, cuál es tu situación y qué tan claro tienes el camino. Sin prisa.",
  },
  {
    num: "02",
    icon: <IconFilter />,
    title: "Filtramos el mercado",
    body: "Con acceso a 95 proyectos activos, identificamos las opciones que realmente se alinean con tu perfil, presupuesto y objetivos.",
  },
  {
    num: "03",
    icon: <IconChart />,
    title: "Análisis y comparativa",
    body: "Te presentamos un análisis claro con argumentos, contexto de mercado y proyección. Para que tu decisión tenga base, no solo intuición.",
  },
  {
    num: "04",
    icon: <IconDone />,
    title: "Acompañamiento al cierre",
    body: "Coordinamos todo el proceso de compra hasta la formalización. Estamos contigo en cada paso, con claridad y seguimiento constante.",
  },
];

// ─── Proceso ──────────────────────────────────────────────────────────────────

export default function Proceso() {
  return (
    <Section className="bg-cream">
      <SectionLabel>Cómo trabajamos</SectionLabel>
      <h2 className="font-display text-h2 text-ink">
        El proceso que nos <em className="italic text-blue">define</em>
      </h2>

      {/* Grid 4 columnas — separadores de 1px con bg-black/[0.08] */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] mt-16">
        {steps.map((step) => (
          <PasoCard key={step.num} {...step} />
        ))}
      </div>
    </Section>
  );
}