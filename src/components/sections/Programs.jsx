import { motion } from 'framer-motion';
import { programsData } from '../../data/gymData';
import { Dumbbell, Flame, Activity, Flower2 } from 'lucide-react';
import { Card } from '../ui/Card';

const iconMap = { Dumbbell, Flame, Activity, Flower2 };

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Programs() {
  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
            Our Programs
          </p>
          <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
            Train. Focus. Achieve.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programsData.map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
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
