import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CTAHome() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 60%, #0a0a0f 100%)" }}
    >
      <div className="mx-auto w-full px-[4%] text-center">
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
            className="inline-block bg-blue hover:bg-blue-light text-white text-btn font-medium px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
          >
            Agendar asesoría gratuita
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}