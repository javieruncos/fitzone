import { motion, useReducedMotion } from 'framer-motion';
import { trainersData } from '../../data/gymData';
import { TrainerCard } from '../ui/TrainerCard';

const EASE = [0.16, 1, 0.3, 1];

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
        : { duration: 0.25, ease: EASE },
    },
  };

  return (
    <section id="trainers" className="py-16 sm:py-20 lg:py-24 bg-gym-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header estandarizado */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-3">
            Entrenadores de primer nivel
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Profesionales certificados con años de experiencia combinada. Cada uno se especializa en una disciplina.
          </p>
        </div>

        {/* ── GRILLA RECOMPRIMIDA A 3 COLUMNAS (O 4 SEGÚN TU CANTIDAD DE TRAINERS) ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {trainersData.map((trainer) => (
            <motion.div
              key={trainer.id || trainer.name}
              variants={cardVariants}
              className="h-full"
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