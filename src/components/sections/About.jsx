import { motion, useReducedMotion } from 'framer-motion';
import aboutImage from '../../assets/hero.jpg';

const EASE = [0.16, 1, 0.3, 1];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-gym-dark border-t border-white/[0.06]">
      {/* Imagen de fondo */}
      <img
        src={aboutImage}
        alt="FitZone gym interior — modern training space"
        width="1920"
        height="1080"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60 scale-105"
      />

      {/* Sombra desde abajo que ocupa exactamente el 30% de la altura */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow ambiental sutil centrado detrás del texto */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-gym-accent/15 blur-[120px] rounded-full z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Contenido centrado */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 sm:py-20 lg:py-24 text-center z-20 flex flex-col items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: EASE }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gym-accent font-mono text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gym-accent animate-pulse" />
            The Ultimate Standard
          </span>

          {/* Título */}
          <h2 className="text-white font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.92] mb-3 max-w-3xl drop-shadow-lg">
            Where Strength Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">Community</span>
          </h2>

          {/* Bajada */}
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
            More than a gym. FitZone is an elite training environment where ambition drives results and every session pushes you beyond your limits.
          </p>

          {/* CTA Principal */}
          <div className="relative group">
            <a
              href="#membership"
              className="inline-flex items-center justify-center gap-3 bg-gym-accent text-black font-black text-sm sm:text-base tracking-widest uppercase px-10 py-5 rounded-full shadow-none hover:shadow-none hover:drop-shadow-none active:scale-[0.97] focus-visible:outline-none"
            >
              <span>Join The Movement</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}