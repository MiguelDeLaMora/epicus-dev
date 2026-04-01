import Link from "next/link";
import Section from "@/components/ui/Section";

// ─── Wrapper de card ──────────────────────────────────────────────────────────

function RecursoCard({
  header,
  footerLabel,
  body,
}: {
  header: React.ReactNode;
  footerLabel: string;
  body: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] bg-white flex flex-col">
      {/* Header con contenido visual */}
      <div>{header}</div>

      {/* Footer con link */}
      <div className="px-7 py-[18px] flex items-center justify-between border-b border-black/[0.06]">
        <span className="text-[12px] text-ink-soft">{footerLabel}</span>
        <Link
          href="/contacto"
          className="text-[12px] text-blue font-medium hover:underline"
        >
          Platícalo con nosotros →
        </Link>
      </div>

      {/* Cuerpo de texto */}
      <div className="px-7 py-5 flex-1">
        <p className="text-[13px] font-light text-ink-mid leading-[1.8]">{body}</p>
      </div>
    </div>
  );
}

// ─── Card 1: Terreno vs Departamento ─────────────────────────────────────────

function Card1() {
  const filas = [
    ["Plusvalía alta",       "Flujo de renta"],
    ["Largo plazo",          "Ingreso inmediato"],
    ["Sin mantenimiento",    "Gestión activa"],
    ["5–15 años horizonte",  "Ticket más accesible"],
  ];
  return (
    <RecursoCard
      footerLabel="Depende de tu perfil y horizonte"
      body="No hay una respuesta universal. Hay una respuesta correcta para tu situación específica. Un terreno te construye patrimonio con paciencia; un departamento te genera flujo desde el primer mes. La pregunta no es cuál es mejor — es cuál se alinea con lo que estás construyendo hoy."
      header={
        <div style={{ background: "linear-gradient(145deg,#0a1628 0%,#1e3a8a 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Inversión · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            ¿Terreno o departamento?<br />Entiende la diferencia.
          </h3>
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded overflow-hidden text-[11px]">
            <div className="bg-white/[0.05] px-[10px] py-2 text-white/45 font-medium tracking-[0.06em]">TERRENO</div>
            <div className="bg-white/[0.05] px-[10px] py-2 text-white/45 font-medium tracking-[0.06em]">DEPARTAMENTO</div>
            {filas.map(([a, b], i) => (
              <>
                <div key={a} className={`px-[10px] py-2 text-white/75 ${i % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.03]"}`}>{a}</div>
                <div key={b} className={`px-[10px] py-2 text-white/75 ${i % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.03]"}`}>{b}</div>
              </>
            ))}
          </div>
        </div>
      }
    />
  );
}

// ─── Card 2: Zonas de plusvalía ───────────────────────────────────────────────

function Card2() {
  const zonas = [
    { nombre: "Carretera Nacional", sub: "Terrenos residenciales premium", val: "+12–18%", color: "#4ade80" },
    { nombre: "Santiago / Los Rodriguez", sub: "Terrenos y comunidades", val: "+10–15%", color: "#4ade80" },
    { nombre: "Santa Catarina / García", sub: "Industrial + residencial emergente", val: "+8–12%", color: "#facc15" },
  ];
  return (
    <RecursoCard
      footerLabel="El contexto importa tanto como el número"
      body="Carretera Nacional no es cara por moda — es cara porque el suelo disponible se agota y la demanda no para. Cuando la geografía limita la expansión, los precios solo van en una dirección. Entender por qué sube una zona es tan importante como saber cuánto ha subido."
      header={
        <div style={{ background: "linear-gradient(145deg,#0c1f3a 0%,#163d6e 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Mercado · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            Zonas de mayor plusvalía<br />en Monterrey hoy
          </h3>
          <div className="flex flex-col gap-2">
            {zonas.map((z) => (
              <div key={z.nombre} className="bg-white/[0.06] rounded px-[14px] py-[10px] flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium text-white">{z.nombre}</p>
                  <p className="text-[10px] text-white/40 mt-[2px]">{z.sub}</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-medium" style={{ color: z.color }}>{z.val}</p>
                  <p className="text-[9px] text-white/30">plusvalía anual est.</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-white/20 mt-3">*Estimaciones orientativas. Fines educativos. No es recomendación de inversión.</p>
        </div>
      }
    />
  );
}

// ─── Card 3: Nearshoring ──────────────────────────────────────────────────────

function Card3() {
  return (
    <RecursoCard
      footerLabel="Oportunidad real para inversionistas"
      body="Las empresas que relocalizan producción desde Asia no esperan — necesitan espacio industrial ya. Eso está convirtiendo a corredores como Santa Catarina y Salinas en algunas de las apuestas más sólidas del norte del país. La ventana existe hoy. No sabemos cuánto dura."
      header={
        <div style={{ background: "linear-gradient(145deg,#0a1a2e 0%,#0f3460 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Industrial · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            Nearshoring: por qué Nuevo León<br />está en el mapa global.
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/[0.05] rounded p-3">
              <p className="font-display text-[28px] font-light text-amber-400 leading-none">+$30B</p>
              <p className="text-[10px] text-white/40 mt-1 leading-[1.4]">en inversión extranjera anunciada en NL (2023–2024)</p>
            </div>
            <div className="bg-white/[0.05] rounded p-3">
              <p className="font-display text-[28px] font-light text-green-400 leading-none">&lt;2%</p>
              <p className="text-[10px] text-white/40 mt-1 leading-[1.4]">vacancia industrial en corredores consolidados de MTY</p>
            </div>
          </div>
          <p className="text-[12px] font-light text-white/55 leading-[1.75]">
            La demanda de bodegas y parques industriales en Santa Catarina, García y Salinas no da señales de desaceleración.
          </p>
        </div>
      }
    />
  );
}

// ─── Card 4: Esquema de pago ──────────────────────────────────────────────────

function Card4() {
  const puntos = [
    { color: "#4ade80", text: "Entrada accesible — empieza con el 10% del precio total" },
    { color: "#4ade80", text: "El 80% se paga cuando el inmueble ya está terminado y escriturable" },
    { color: "#facc15", text: "El porcentaje durante obra puede ser en mensualidades sin intereses" },
  ];
  return (
    <RecursoCard
      footerLabel="Cada proyecto tiene su esquema"
      body="El error más común no es elegir la zona equivocada. Es no entender el esquema de pago antes de separar. El 10% inicial se siente pequeño, pero el 80% al escriturar llega más rápido de lo que parece. Conviene planear ese momento desde el día uno — con claridad y sin sorpresas."
      header={
        <div style={{ background: "linear-gradient(145deg,#0f172a 0%,#1e3a8a 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Finanzas · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            ¿Qué significa el esquema<br />de pago 10 – 10 – 80?
          </h3>
          {/* Barra visual */}
          <div className="mb-4">
            <div className="flex h-9 rounded overflow-hidden gap-px mb-[10px]">
              <div className="w-[10%] bg-blue flex items-center justify-center text-[11px] font-semibold text-white">10%</div>
              <div className="w-[10%] bg-blue-light flex items-center justify-center text-[11px] font-semibold text-white">10%</div>
              <div className="flex-1 bg-white/[0.12] flex items-center justify-center text-[13px] font-medium text-white">80%</div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_2fr] gap-px text-[10px] text-center text-white/50 leading-[1.4]">
              <span>Al separar</span>
              <span>Durante obra</span>
              <span>Al escriturar (crédito bancario)</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {puntos.map((p) => (
              <div key={p.text} className="flex items-start gap-[10px]">
                <span className="w-[6px] h-[6px] rounded-full mt-[5px] shrink-0" style={{ background: p.color }} />
                <p className="text-[12px] text-white/60 leading-[1.6]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

// ─── Card 5: Preventa ─────────────────────────────────────────────────────────

function Card5() {
  const items = [
    "Permiso de construcción y lotificación vigente",
    "Uso de suelo compatible con tu objetivo",
    "Trayectoria del desarrollador (proyectos entregados)",
    "Contrato de promesa de venta claro y notariado",
    "Esquema de garantía para tus anticipos",
  ];
  return (
    <RecursoCard
      footerLabel="En EPICUS ya hicimos esta tarea"
      body="Una preventa puede ser una de las mejores decisiones financieras que tomes — o una de las más costosas. La diferencia casi siempre está en la solidez del desarrollador, no en el precio por metro cuadrado. Antes de emocionarte con el proyecto, revisa quién lo está construyendo."
      header={
        <div style={{ background: "linear-gradient(145deg,#0c1a30 0%,#1a3a6a 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Guía · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            ¿Qué revisar antes de<br />comprometerte en preventa?
          </h3>
          <div className="flex flex-col gap-[6px]">
            {items.map((item, i) => (
              <div key={item} className="flex items-center gap-[10px] bg-white/[0.05] rounded px-3 py-[10px]">
                <span className="w-5 h-5 rounded-full bg-blue flex items-center justify-center text-[10px] font-semibold text-white shrink-0">
                  {i + 1}
                </span>
                <p className="text-[12px] text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

// ─── Card 6: Qué preguntar ────────────────────────────────────────────────────

function Card6() {
  const preguntas = [
    "¿Cuántos proyectos manejas actualmente y con qué desarrolladores?",
    "¿Cuál es tu comisión y quién la paga?",
    "¿Puedes mostrarme opciones de distintos desarrolladores, no solo uno?",
    "¿Qué pasa con mi anticipo si el proyecto se retrasa?",
    "¿Tienes clientes previos a quienes pueda contactar como referencia?",
  ];
  return (
    <RecursoCard
      footerLabel="Haznos estas mismas preguntas a nosotros"
      body="Un buen asesor no le teme a las preguntas difíciles — las espera. Si alguien se incomoda cuando le preguntas cuántos proyectos maneja o cómo funciona su comisión, ya tienes información valiosa. Haznos estas mismas preguntas a nosotros. Tenemos respuestas claras para todas."
      header={
        <div style={{ background: "linear-gradient(145deg,#0a1628 0%,#1e3560 100%)" }} className="p-7">
          <p className="text-[10px] tracking-[0.18em] uppercase text-blue-light/80 mb-4">Guía · EPICUS</p>
          <h3 className="font-display text-[22px] font-normal text-white leading-[1.25] mb-5">
            Las preguntas que deberías hacerle<br />a cualquier asesor inmobiliario.
          </h3>
          <div className="flex flex-col gap-2">
            {preguntas.map((p) => (
              <div key={p} className="border-l-2 border-blue pl-3 py-2 bg-white/[0.04] rounded-r">
                <p className="text-[12px] text-white/75 leading-[1.5]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

// ─── Recursos ─────────────────────────────────────────────────────────────────

export default function Recursos() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>

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