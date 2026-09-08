import { motion, useReducedMotion } from 'framer-motion';
import { galleryData } from '../../data/gymData';
import { GalleryCard } from '../ui/GalleryCard';

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

export function Gallery() {
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
    <section id="gallery" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
            Facilities
          </p>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
            The Arena.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px] sm:auto-rows-[260px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
        >
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={item.span}
            >
              <GalleryCard
                tag={item.tag}
                title={item.title}
                caption={item.caption}
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
