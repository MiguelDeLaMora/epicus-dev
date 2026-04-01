import NosotrosHero from "@/components/sections/NosotrosHero";
import Valores from "@/components/sections/Valores";
import Cofra from "@/components/sections/Cofra";

export const metadata = {
  title: "Nosotros",
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <Valores />
      <Cofra />
    </>
  );
}