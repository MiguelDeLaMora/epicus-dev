"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const desarrolladores = [
  { name: "CARZA",         active: true  },
  { name: "AGORA",         active: true  },
  { name: "IMOBILEM",      active: false },
  { name: "ALTIO CAPITAL", active: false },
  { name: "IDEKA",         active: false },
  { name: "SANTTE",        active: true  },
  { name: "IBP",           active: true  },
];

// Duplicamos para el loop infinito
const items = [...desarrolladores, ...desarrolladores, ...desarrolladores];

export default function DesarrolladoresTrack() {
  return (
    <div className="bg-neutral-50 border-y border-black/[0.06] py-6 overflow-hidden">
      <p className="text-overline text-ink-soft mb-4 px-[4%]">
        Desarrolladores con quienes trabajamos
      </p>

      {/* Slider infinito */}
      <div className="relative">
        {/* Gradiente izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #F9FAFB, transparent)" }} />
        {/* Gradiente derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #F9FAFB, transparent)" }} />

        <motion.div
          className="flex items-center gap-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {items.map((d, i) => (
            <span
              key={i}
              className={
                d.active
                  ? "text-[13px] font-medium tracking-[0.12em] text-ink whitespace-nowrap"
                  : "text-[13px] font-light tracking-[0.12em] text-ink-soft whitespace-nowrap"
              }
            >
              {d.name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}