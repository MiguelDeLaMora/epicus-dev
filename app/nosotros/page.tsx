import NosotrosHero from "@/components/sections/NosotrosHero";
import Valores from "@/components/sections/Valores";
import Cofra from "@/components/sections/Cofra";

export const metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de EPICUS. Somos asesores inmobiliarios en Monterrey comprometidos con construir relaciones, no transacciones.",
  openGraph: {
    title: "Nosotros | EPICUS",
    description:
      "Conoce al equipo detrás de EPICUS. Asesores inmobiliarios en Monterrey comprometidos con tu mejor decisión.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <Valores />
      {/*<Cofra />*/}
    </>
  );
}

