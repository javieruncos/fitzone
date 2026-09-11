import { motion, useReducedMotion } from 'framer-motion';
import { facilitiesData } from '../../data/gymData';

const EASE = [0.16, 1, 0.3, 1];

// Mapeo seguro de Tailwind para evitar que el compilador JIT ignore las clases dinámicas
const ASPECT_CLASSES = {
  '16/9': 'aspect-[16/9]',
  '16/10': 'aspect-[16/10]',
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  full: 'h-full min-h-[320px]',
};

function FacilityCard({ facility, aspect = '4/3', index = 0, reduceMotion }) {
  const delay = reduceMotion ? 0 : 0.1 + index * 0.08;
  const aspectClass = ASPECT_CLASSES[aspect] || 'aspect-[4/3]';

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: EASE }}
      className={`group relative overflow-hidden rounded-xl bg-gym-surface border border-white/[0.06] w-full ${aspectClass}`}
    >
      <img
        src={facility.image}
        alt={`${facility.name} at FitZone gym`}
        width="640"
        height="480"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Gradient Overlay con mejor contraste UX */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
        {facility.zone && (
          <span className="text-gym-accent font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">
            {facility.zone}
          </span>
        )}
        <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-wide mb-1 sm:mb-2">
          {facility.name}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm line-clamp-3">
          {facility.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const [hero, left, ...rightCards] = facilitiesData;

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
            className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-none mb-3"
          >
            Explore Our Space
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
          >
            Discover the spaces designed for every kind of training.
          </motion.p>
        </div>

        {/* ── BENTO GRID STRUCTURAL FIX ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* HERO CARD — Full Row */}
          {hero && (
            <div className="lg:col-span-3">
              <FacilityCard
                facility={hero}
                aspect="16/9"
                index={0}
                reduceMotion={reduceMotion}
              />
            </div>
          )}

          {/* LEFT COLUMN — Main Feature */}
          {left && (
            <div className="lg:col-span-2 flex">
              <FacilityCard
                facility={left}
                aspect="full"
                index={1}
                reduceMotion={reduceMotion}
              />
            </div>
          )}

          {/* RIGHT COLUMN — Stacked Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {rightCards.map((facility, index) => (
              <FacilityCard
                key={facility.id || index}
                facility={facility}
                aspect="16/10"
                index={index + 2}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}