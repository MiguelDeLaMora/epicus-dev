import Section from "@/components/ui/Section";

export default function PortafolioHero() {
  return (
    <Section className="bg-white" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Izquierda — headline */}
        <div>
          <p className="flex items-center gap-3 text-overline text-blue mb-5">
            <span className="block w-6 h-px bg-blue" />
            Portafolio
          </p>
          <h1 className="font-display text-h1 text-ink">
            Acceso al mercado<br />
            que no verás<br />
            <em className="italic text-blue">en ningún portal.</em>
          </h1>
        </div>

        {/* Derecha — texto */}
        <div className="flex flex-col gap-4 lg:pt-4">
          <p className="text-b1 text-ink-mid">
            EPICUS tiene acceso en tiempo real a{" "}
            <strong className="font-medium text-ink">95 proyectos activos</strong>{" "}
            en Monterrey y su área metropolitana — terrenos residenciales,
            departamentos, casas y desarrollos industriales. Con más de{" "}
            <strong className="font-medium text-ink">11,000 unidades monitoreadas</strong>{" "}
            y 4,480 disponibles hoy.
          </p>
          <p className="text-b1 text-ink-mid">
            Esta información no se puede navegar sola. El valor está en saber
            cuál de esas opciones es la correcta para ti — y eso es lo que
            hacemos en una asesoría.
          </p>
        </div>

      </div>
    </Section>
  );
}