const desarrolladores = [
  { name: "CARZA",        active: true  },
  { name: "AGORA",        active: true  },
  { name: "IMOBILEM",     active: false },
  { name: "ALTIO CAPITAL",active: false },
  { name: "IDEKA",        active: false },
  { name: "SANTTE",       active: true  },
  { name: "IBP",          active: true  },
];

export default function DesarrolladoresTrack() {
  return (
    <div className="bg-neutral-50 border-y border-black/[0.06] py-6 px-section">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-overline text-ink-soft mb-4">
          Desarrolladores con quienes trabajamos
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {desarrolladores.map((d, i) => (
            <span key={d.name} className="flex items-center gap-6">
              <span
                className={
                  d.active
                    ? "text-[13px] font-medium tracking-[0.1em] text-ink"
                    : "text-[13px] font-light tracking-[0.1em] text-ink-soft"
                }
              >
                {d.name}
              </span>
              {i < desarrolladores.length - 1 && (
                <span className="text-ink-soft/40 text-[10px]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}