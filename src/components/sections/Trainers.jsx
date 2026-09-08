import { motion, useReducedMotion } from 'framer-motion';
import { trainersData } from '../../data/gymData';
import { TrainerCard } from '../ui/TrainerCard';

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

export function Trainers() {
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
    <section id="trainers" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            The Crew
          </p>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            World-Class Coaches.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our team of certified professionals brings decades of combined experience to every session. Each coach specializes in a distinct discipline to maximize your results.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
        >
          {trainersData.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={cardVariants}
            >
              <TrainerCard
                name={trainer.name}
                role={trainer.role}
                certifications={trainer.certifications}
                image={trainer.image}
                socials={trainer.socials}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
