import { motion, useReducedMotion } from 'framer-motion';
import { membershipsData } from '../../data/gymData';
import { PricingCard } from '../ui/PricingCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

export function Memberships() {
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

  return (
    <section id="membership" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            Pricing Plans
          </p>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            Join The Club.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose the membership that matches your goals. Every plan includes full access to our state-of-the-art facility and expert support.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
        >
          {membershipsData.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
            >
              <PricingCard
                tag={plan.tag}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                featured={plan.featured}
                badge={plan.badge}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
