import { Link } from "react-router-dom";
import theater from "../assets/theater.png";

export const NotFound = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mx-auto flex max-w-[672px] flex-col items-center text-center">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <img
            src={theater}
            alt="Empty theater with projector light"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-white/5" />
        </div>

        <h1 className="mt-2 font-display text-5xl font-extrabold leading-[0.96] tracking-[-2.4px] text-white">
          404
        </h1>

        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-[4px] text-[#FFB4AA]">
          Page not found
        </h2>

        <p className="mt-4 max-w-[420px] font-['Inter'] text-lg font-normal leading-7 text-[#E9BCB6]">
          No se encuentra la página o recurso que buscas
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FFB4AA] px-8 py-4 font-display text-base font-normal text-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-colors hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <i className="ri-home-2-line text-base leading-none" />
          Return to Home
        </Link>
      </section>
    </main>
  );
};
