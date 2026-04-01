"use client";

import { useState } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Interes = "Comprar para vivir" | "Inversión" | "Industrial" | "Soy Desarrollador";

interface FormData {
  nombre: string;
  telefono: string;
  correo: string;
  interes: Interes[];
  presupuesto: string;
  mensaje: string;
}

// ─── Íconos ───────────────────────────────────────────────────────────────────

const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// ─── Constantes ───────────────────────────────────────────────────────────────

const INTERESES: Interes[] = ["Comprar para vivir", "Inversión", "Industrial", "Soy Desarrollador"];
const PRESUPUESTOS = ["Menos de 2 MDP", "2 – 5 MDP", "5 – 10 MDP", "Más de 10 MDP", "Prefiero no decirlo"];

const inputBase =
  "w-full border border-black/[0.12] rounded-[4px] px-4 py-3 text-[14px] text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-blue transition-colors duration-200 bg-white";

// ─── Contacto ─────────────────────────────────────────────────────────────────

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    nombre: "", telefono: "", correo: "",
    interes: ["Comprar para vivir"],
    presupuesto: "Menos de 2 MDP",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  function toggleInteres(opt: Interes) {
    setForm((prev) => ({
      ...prev,
      interes: prev.interes.includes(opt)
        ? prev.interes.filter((i) => i !== opt)
        : [...prev.interes, opt],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a CRM / email / WhatsApp
    setEnviado(true);
  }

  return (
    <div className="min-h-[calc(100vh-68px)] grid grid-cols-1 lg:grid-cols-2">

      {/* ── Lado izquierdo — oscuro ── */}
      <div
        className="relative flex flex-col justify-center px-section py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 60%, #0a0a0f 100%)" }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[480px]">
          <p className="flex items-center gap-3 text-overline text-blue-light/70 mb-5">
            <span className="block w-6 h-px bg-blue-light/70" />
            Hablemos
          </p>
          <h1 className="font-display text-h1 text-white mb-6">
            30 minutos que<br />
            pueden cambiar<br />
            tu <em className="italic text-blue-light">perspectiva.</em>
          </h1>
          <p className="text-b1 font-light text-white/55 mb-12">
            Una asesoría gratuita, sin presiones, donde saldrás con más claridad
            del mercado — independientemente de si decidimos trabajar juntos.
          </p>

          {/* Datos de contacto */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <IconPhone />, label: "WhatsApp", value: "+52 81 2600 5642", href: "https://wa.me/528126005642" },
              { icon: <IconMail />,  label: "Correo",   value: "info@epicus.com.mx", href: "mailto:info@epicus.com.mx" },
              { icon: <IconPin />,   label: "Ubicación", value: "Monterrey, Nuevo León", href: undefined },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[4px] border border-white/10 bg-white/[0.05] flex items-center justify-center text-white/60 shrink-0">
                  {d.icon}
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.08em] text-white/35 uppercase mb-[2px]">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-[14px] text-white/75 hover:text-white transition-colors duration-200">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-[14px] text-white/75">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lado derecho — formulario ── */}
      <div className="flex items-center justify-center bg-neutral-50 px-section py-20">
        <div className="w-full max-w-[520px]">

          {!enviado ? (
            <>
              <h2 className="font-display text-h3 text-ink mb-2">Cuéntanos sobre ti</h2>
              <p className="text-[14px] font-light text-ink-mid mb-8">
                Llena este formulario y un asesor te contactará en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={inputBase}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="81 0000 0000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={inputBase}
                      required
                    />
                  </div>
                </div>

                {/* Correo */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                    className={inputBase}
                    required
                  />
                </div>

                {/* Interés */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Me interesa</label>
                  <div className="flex flex-wrap gap-2">
                    {INTERESES.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleInteres(opt)}
                        className={
                          form.interes.includes(opt)
                            ? "text-[13px] px-4 py-2 rounded-[4px] border bg-blue border-blue text-white transition-all duration-200"
                            : "text-[13px] px-4 py-2 rounded-[4px] border border-black/[0.12] text-ink-mid hover:border-blue hover:text-blue transition-all duration-200"
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Presupuesto */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Presupuesto aproximado</label>
                  <select
                    value={form.presupuesto}
                    onChange={(e) => setForm({ ...form, presupuesto: e.target.value })}
                    className={inputBase}
                  >
                    {PRESUPUESTOS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[12px] font-medium text-ink tracking-[0.04em]">¿Algo que quieras contarnos?</label>
                  <textarea
                    rows={4}
                    placeholder="Contexto sobre lo que buscas, zona de interés, o cualquier pregunta..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue hover:bg-blue-light text-white text-btn py-4 rounded-[4px] transition-all duration-200 hover:-translate-y-px mt-2"
                >
                  Solicitar asesoría gratuita
                </button>

              </form>
            </>
          ) : (
            /* Estado de éxito */
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center text-blue mx-auto mb-6">
                <IconCheck />
              </div>
              <h3 className="font-display text-h3 text-ink mb-3">¡Listo! Recibimos tu solicitud.</h3>
              <p className="text-b1 font-light text-ink-mid">
                Un asesor de EPICUS te contactará en las próximas horas.
                Nos da gusto que quieras conocernos.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}