import Hero from "@/components/sections/Hero";
import Propuesta from "@/components/sections/Propuesta";
import Proceso from "@/components/sections/Proceso";
import Testimonios from "@/components/sections/Testimonios";
import CTAHome from "@/components/sections/CTAHome";

export default function Home() {
  return (
    <>
      <Hero />
      <Propuesta />
      <Proceso />
      <Testimonios />
      <CTAHome />
    </>
  );
}