import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../data/gymData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-4" aria-hidden="true">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gym-accent text-gym-accent" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, text, rating, avatar }) {
  return (
    <div className="bg-gym-surface border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between h-full">
      <div>
        <Stars rating={rating} />
        <p className="text-zinc-300 text-sm leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
        <img
          src={avatar}
          alt=""
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
          className="w-8 h-8 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-bold">{name}</p>
          <p className="text-zinc-500 text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

const VISIBLE_IDS = [3, 1, 4, 5];

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: reduceMotion
      ? { opacity: 1, transform: 'translate3d(0, 0px, 0)' }
      : { opacity: 0, transform: 'translate3d(0, 16px, 0)' },
    visible: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)',
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const visible = VISIBLE_IDS.map((id) => testimonialsData.find((t) => t.id === id)).filter(Boolean);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-left mb-8 sm:mb-10">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-3 text-balance">
            Lo que dicen los socios
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Prueba real, en sus palabras.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {visible.map((t) => (
            <motion.div key={t.id} variants={cardVariants} className="h-full">
              <TestimonialCard
                name={t.name}
                role={t.role}
                text={t.text}
                rating={t.rating}
                avatar={t.avatar}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
