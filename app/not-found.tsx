import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-cream">
      <div className="text-center px-[4%]">

        <p className="font-display text-[120px] lg:text-[180px] font-light leading-none text-blue/10 select-none mb-0">
          404
        </p>

        <div className="-mt-4 lg:-mt-8">
          <p className="flex items-center justify-center gap-3 text-overline text-blue mb-5">
            <span className="block w-6 h-px bg-blue" />
            Página no encontrada
          </p>
          <h1 className="font-display text-h2 text-ink mb-5">
            Esta página no existe<br />
            <em className="italic text-blue">o fue movida.</em>
          </h1>
          <p className="text-b1 font-light text-ink-mid max-w-[440px] mx-auto mb-10">
            La URL que buscas no está disponible. Puedes regresar al inicio
            o contactarnos si crees que es un error.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
            >
              Ir al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-btn font-normal text-ink py-[14px] hover:text-blue transition-colors duration-200"
            >
              Contactarnos →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}