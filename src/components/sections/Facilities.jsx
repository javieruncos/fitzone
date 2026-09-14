import { motion, useReducedMotion } from 'framer-motion';
import { facilitiesData } from '../../data/gymData';

const EASE = [0.16, 1, 0.3, 1];

// Mapeo seguro de Tailwind para evitar que el compilador JIT ignore las clases dinámicas
const ASPECT_CLASSES = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
};

const DIMENSIONS = {
  '16/9': { width: '1280', height: '720' },
  '4/3': { width: '800', height: '600' },
};

// Override de aspect solo para mobile (<640px). Desktop intacto por construcción.
const MOBILE_ASPECT_CLASSES = {
  '16/9': 'max-sm:aspect-[16/9]',
};

function FacilityCard({ facility, aspect = '4/3', mobileAspect = null, index = 0, large = false, reduceMotion }) {
  const delay = reduceMotion ? 0 : 0.1 + index * 0.08;
  const aspectClass = ASPECT_CLASSES[aspect] || 'aspect-[4/3]';
  const mobileAspectClass = (mobileAspect && MOBILE_ASPECT_CLASSES[mobileAspect]) || '';
  const dimensions = DIMENSIONS[aspect] || DIMENSIONS['4/3'];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: EASE }}
      className={`group relative overflow-hidden rounded-xl bg-gym-surface border border-white/[0.06] w-full ${aspectClass} ${mobileAspectClass}`}
    >
      <img
        src={facility.image}
        alt={`${facility.name} en FitZone`}
        width={dimensions.width}
        height={dimensions.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Gradient Overlay con mejor contraste UX */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
        {facility.zone && (
          <span className="text-gym-accent font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">
            {facility.zone}
          </span>
        )}
        <h3
          className={
            large
              ? 'text-white font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide mb-1 sm:mb-2'
              : 'text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-wide mb-1 sm:mb-2'
          }
        >
          {facility.name}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
          {facility.description}
        </p>
      </div>
    </motion.div>
  );
}

const FREE_WEIGHTS_DESCRIPTION =
  'Mancuernas, barras y un área dedicada a los pesos libres para entrenar la fuerza con foco.';

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const hero = facilitiesData.find((facility) => facility.id === 1);
  const functional = facilitiesData.find((facility) => facility.id === 2);
  const freeWeights = facilitiesData.find((facility) => facility.id === 4);
  const cardio = facilitiesData.find((facility) => facility.id === 3);
  const lockers = facilitiesData.find((facility) => facility.id === 5);

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24 bg-gym-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ────────────────────────────────────────── */}
        <div className="text-left mb-8 sm:mb-10">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }}
            className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-3 text-balance"
          >
            Conoce nuestro espacio
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
          >
            Cinco zonas, un solo piso. Fuerza, acondicionamiento y recuperación.
          </motion.p>
        </div>

        {/* ── HERO — Strength Floor ─────────────────────────── */}
        {hero && (
          <div className="mb-6">
            <FacilityCard
              facility={hero}
              aspect="16/9"
              index={0}
              large
              reduceMotion={reduceMotion}
            />
          </div>
        )}

        {/* ── SECONDARY — Functional + Free Weights ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {functional && (
            <FacilityCard
              facility={functional}
              aspect="4/3"
              mobileAspect="16/9"
              index={1}
              reduceMotion={reduceMotion}
            />
          )}
          {freeWeights && (
            <FacilityCard
              facility={{ ...freeWeights, description: FREE_WEIGHTS_DESCRIPTION }}
              aspect="4/3"
              mobileAspect="16/9"
              index={2}
              reduceMotion={reduceMotion}
            />
          )}
        </div>

        {/* ── UTILITY STRIP — Cardio + Lockers ──────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: EASE }}
          className="mt-8 pt-6 border-t border-white/[0.06]"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-zinc-500">
            También en el club — {cardio?.name} · {lockers?.name}
          </p>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-2 max-w-xl">
            Equipos de cardio para la resistencia, más vestuarios modernos.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
