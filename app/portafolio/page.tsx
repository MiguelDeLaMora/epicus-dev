import PortafolioHero from "@/components/sections/PortafolioHero";
import EpicusIntelligence from "@/components/sections/EpicusIntelligence";
import Tipologias from "@/components/sections/Tipologias";

export const metadata = {
  title: "Portafolio",
};

export default function PortafolioPage() {
  return (
    <>
      <PortafolioHero />
      <EpicusIntelligence />
      <Tipologias />
    </>
  );
}