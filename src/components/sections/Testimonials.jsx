import { motion, useReducedMotion } from 'framer-motion';
import { testimonialsData } from '../../data/gymData';
import { Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gym-accent text-gym-accent" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, company, text, rating, avatar, variant = 'dark' }) {
  const bg = variant === 'dark' ? 'bg-gym-surface' : 'bg-neutral-800';

  return (
    <div className={`${bg} border border-gym-border rounded-xl p-6 flex flex-col justify-between h-full`}>
      <div>
        <StarRating count={rating} />
        <p className="text-zinc-300 text-sm leading-relaxed mt-4">
          &ldquo;{text}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gym-border">
        <img
          src={avatar}
          alt={name}
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-white text-sm font-bold">{name}</p>
          <p className="text-zinc-400 text-xs">{role} of {company}</p>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ testimonial }) {
  return (
    <div className="bg-gym-surface border border-gym-border rounded-xl overflow-hidden flex flex-col h-full relative">
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
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
            A Partner Who Accelerates Growth
          </p>
          <h3 className="text-white font-black text-3xl sm:text-4xl uppercase tracking-tight">
            FITZONE
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <StarRating count={testimonial.rating} />
        <p className="text-zinc-300 text-sm leading-relaxed mt-4">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gym-border">
          <div>
            <p className="text-white font-black text-3xl tracking-tight">32%</p>
            <p className="text-zinc-400 text-xs uppercase tracking-wider mt-1">Lead Generation</p>
          </div>
          <div>
            <p className="text-white font-black text-3xl tracking-tight">4.9</p>
            <p className="text-zinc-400 text-xs uppercase tracking-wider mt-1">Client Rating</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gym-border">
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
            <p className="text-zinc-400 text-xs">{testimonial.role} of {testimonial.company}</p>
          </div>
          <span className="text-zinc-500 text-xs font-mono">1 / 4</span>
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
  const left = side.slice(0, 2);
  const right = side.slice(2, 4);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            What Our Members Say.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Real stories from real people who transformed their lives with FitZone.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {left.map((t) => (
              <motion.div key={t.id} variants={cardVariants} className="flex-1">
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  company={t.company}
                  text={t.text}
                  rating={t.rating}
                  avatar={t.avatar}
                  variant="dark"
                />
              </motion.div>
            ))}
          </div>

          {/* Center Column — Featured */}
          {featured && (
            <motion.div variants={cardVariants}>
              <FeaturedCard testimonial={featured} />
            </motion.div>
          )}

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {right.map((t) => (
              <motion.div key={t.id} variants={cardVariants} className="flex-1">
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  company={t.company}
                  text={t.text}
                  rating={t.rating}
                  avatar={t.avatar}
                  variant="light"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
