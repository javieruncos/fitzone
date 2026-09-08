import { motion, useReducedMotion } from 'framer-motion';
import { programsData } from '../../data/gymData';
import { Dumbbell, Flame, Activity, Flower2 } from 'lucide-react';
import { Card } from '../ui/Card';

const iconMap = { Dumbbell, Flame, Activity, Flower2 };

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

export function Programs() {
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
    <section id="programs" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            Our Programs
          </p>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            Train. Focus. Achieve.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Structured training paths designed to push your limits. From strength to endurance, every program is engineered for results.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
        >
          {programsData.map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                className="h-full"
              >
                <Card
                  image={program.image}
                  alt={`${program.title} session at FitZone gym`}
                  icon={<Icon className="text-gym-accent w-6 h-6 shrink-0 mr-3" />}
                  title={program.title}
                  description={program.description}
                  href="#membership"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
