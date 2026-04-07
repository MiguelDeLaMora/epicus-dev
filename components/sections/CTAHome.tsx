import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

export default function CTAHome() {
  return (
    <Section className="bg-blue" container={false}>
      <div className="mx-auto max-w-6xl px-section text-center">
        <FadeIn delay={0}>
          <p className="text-overline text-white/55 mb-5">Un paso a la vez</p>
          <h2 className="font-display text-h2 font-light text-white mb-5">
            Regálanos 30 minutos.<br />
            Te garantizamos que valdrán la pena.
          </h2>
          <p className="text-b1 font-light text-white/65 max-w-[500px] mx-auto mb-10">
            Una asesoría sin costo, sin presiones, donde saldrás con más claridad
            del mercado — independientemente de si decidimos trabajar juntos.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/contacto"
            className="inline-block bg-white text-blue text-btn font-medium px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:bg-neutral-100 hover:-translate-y-px"
          >
            Agendar asesoría gratuita
          </Link>
        </FadeIn>
      </div>
    </Section>
  );
}