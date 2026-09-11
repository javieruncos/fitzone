import { motion, useReducedMotion } from 'framer-motion';
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

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-gym-surface border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between h-full">
      <p className="text-zinc-300 text-sm leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 pt-4 border-t border-white/[0.06]">
        <p className="text-white text-sm font-bold">{name}</p>
        <p className="text-zinc-500 text-xs mt-1">{role}</p>
      </div>
    </div>
  );
}

function FeaturedCard({ testimonial }) {
  return (
    <div className="bg-gym-surface border border-white/[0.06] rounded-xl overflow-hidden flex flex-col h-full relative">
      <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-surface via-gym-surface/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-gym-accent font-bold text-xs tracking-widest uppercase mb-2">
            Trusted by our members
          </p>
          <h3 className="text-white font-black text-3xl sm:text-4xl uppercase tracking-tight">
            FITZONE
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-gym-accent text-gym-accent" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            width="40"
            height="40"
            loading="lazy"
            decoding="async"
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold">{testimonial.name}</p>
            <p className="text-zinc-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  const featured = testimonialsData.find((t) => t.featured);
  const side = testimonialsData.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            What Our Members Say
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Real stories from real people who transformed their lives with FitZone.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {/* Featured — Left Column */}
          {featured && (
            <motion.div variants={cardVariants}>
              <FeaturedCard testimonial={featured} />
            </motion.div>
          )}

          {/* Side Cards — Right Column (stacked) */}
          <div className="flex flex-col gap-6">
            {side.slice(0, 2).map((t) => (
              <motion.div key={t.id} variants={cardVariants} className="flex-1">
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  text={t.text}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
