import { motion } from 'framer-motion';
import { trainersData } from '../../data/gymData';
import { TrainerCard } from '../ui/TrainerCard';

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

export function Trainers() {
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
          viewport={{ once: true, amount: 0.2 }}
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
