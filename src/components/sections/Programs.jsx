import { motion, useReducedMotion } from 'framer-motion';
import { facilitiesData } from '../../data/gymData';
import { Card } from '../ui/Card';

const EASE = [0.16, 1, 0.3, 1];

export function Programs() {
  const reduceMotion = useReducedMotion();

  // Asegura exactamente 6 items reutilizando tus datos e imágenes reales
  const displayPrograms = Array.from({ length: 6 }, (_, index) => {
    const item = facilitiesData[index % facilitiesData.length];
    return {
      ...item,
      // Genera una key única combinada por si el array original tiene menos de 6 elementos
      uniqueKey: `${item.id || 'program'}-${index}`,
    };
  });

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

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-gym-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-3">
            Entrena. Concéntrate. Supérate.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Rutas de entrenamiento estructuradas para superar tus límites. Cada programa está diseñado para dar resultados.
          </p>
        </div>

        {/* Grilla simétrica 3x2 (Compacta) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {displayPrograms.map((program) => (
            <motion.div
              key={program.uniqueKey}
              variants={cardVariants}
              className="h-full"
            >
              <Card
                image={program.image}
                alt={`${program.name || program.title} — sesión en FitZone`}
                zone={program.zone}
                title={program.name || program.title}
                description={program.description}
                href="#membership"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}