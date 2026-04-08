"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const desarrolladores = [
  { name: "CARZA",         logo: "/logos/carza-logo.webp",                    active: true  },
  { name: "AGORA",         logo: "/logos/agora-residencial-logo.webp",        active: true  },
  { name: "IMOBILEM",      logo: "/logos/imobilem-logo.webp",                 active: true },
  { name: "ALTIO CAPITAL", logo: "/logos/altio-capital-logo.webp",            active: true },
  { name: "IDEKA",         logo: "/logos/ideka-logo.webp",                    active: true },
  { name: "SANTTE",        logo: "/logos/santte-residencial-logo.webp",       active: true  },
  { name: "IBP",           logo: "/logos/ibp-logo.webp",                      active: true  },
];

const items = [...desarrolladores, ...desarrolladores, ...desarrolladores];

export default function DesarrolladoresTrack() {
  return (
    <div className="bg-neutral-50 border-y border-black/[0.06] py-6 overflow-hidden">
      <p className="text-overline text-ink-soft mb-5 px-[4%]">
        Desarrolladores con quienes trabajamos
      </p>

      <div className="relative">
        {/* Gradientes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #F9FAFB, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #F9FAFB, transparent)" }} />

        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {items.map((d, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center transition-opacity duration-200",
                d.active ? "opacity-100" : "opacity-40"
              )}
            >
              <Image
                src={d.logo}
                alt={d.name}
                width={100}
                height={40}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}