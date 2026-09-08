import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { facilitiesData } from '../../data/gymData';

const EASE = [0.16, 1, 0.3, 1];

function FacilityCard({ facility, featured = false, index = 0, reduceMotion }) {
  const delay = reduceMotion ? 0 : featured ? 0.2 : 0.15 + index * 0.1;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: EASE }}
      className={`group relative overflow-hidden rounded-xl ${
        featured ? 'aspect-[16/7]' : 'aspect-[4/3]'
      }`}
    >
      <img
        src={facility.image}
        alt={`${facility.name} at FitZone gym`}
        width={featured ? 1280 : 640}
        height={featured ? 560 : 480}
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <span className="text-gym-accent font-mono text-xs tracking-widest uppercase mb-2">
          {facility.zone}
        </span>
        <h3 className="text-white font-bold text-xl sm:text-2xl uppercase tracking-wide mb-2">
          {facility.name}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-3">
          {facility.description}
        </p>
        <span className="inline-flex items-center gap-2 text-white/0 group-hover:text-white/80 transition-colors duration-300 text-sm font-medium">
          Explore <ArrowRight size={14} />
        </span>
      </div>
    </motion.div>
  );
}

export function Facilities() {
  const reduceMotion = useReducedMotion();

  const featured = facilitiesData.find((f) => f.featured);
  const secondary = facilitiesData.filter((f) => !f.featured);

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ────────────────────────────────────────── */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }}
          className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-4"
        >
          Facilities
        </motion.p>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: EASE }}
          className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.9] mb-4"
        >
          Explore Our Space
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2, ease: EASE }}
          className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-12 sm:mb-16"
        >
          Discover the spaces designed for every kind of training.
        </motion.p>

        {/* ── FEATURED CARD ──────────────────────────────────── */}
        {featured && (
          <FacilityCard facility={featured} featured reduceMotion={reduceMotion} />
        )}

        {/* ── SECONDARY CARDS — 2×2 GRID ────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {secondary.map((facility, index) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
