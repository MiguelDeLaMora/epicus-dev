import Hero from "@/components/sections/Hero";
import Propuesta from "@/components/sections/Propuesta";
import Proceso from "@/components/sections/Proceso";
import Testimonios from "@/components/sections/Testimonios";
import CTAHome from "@/components/sections/CTAHome";
import { getImagen, getHero } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export default async function Home() {
  const [heroImagen, heroData] = await Promise.all([
    getImagen("hero"),
    getHero(),
  ]);

  const heroImagenUrl = heroImagen?.imagen ? urlForImage(heroImagen.imagen) : null;

  return (
    <>
      <Hero imagenUrl={heroImagenUrl} data={heroData} />
      <Propuesta />
      <Proceso />
      <Testimonios />
      <CTAHome />
    </>
  );
}

