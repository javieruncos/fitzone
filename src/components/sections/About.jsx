import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';

const EASE = [0.16, 1, 0.3, 1];

export function About() {
  const reduceMotion = useReducedMotion();

  const y = reduceMotion ? 0 : 16;

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gym-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, transform: `translateY(${y}px)` }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-gym-border"
          >
            <img
              src="/src/assets/images/about.jpg"
              alt="Gym interior"
              width="800"
              height="600"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, transform: `translateY(${y}px)` }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.15, ease: EASE }}
            className="space-y-6"
          >
            <p className="text-gym-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight">
              We Are The Best Gym In Town
            </h2>
            <p className="text-zinc-400 text-lg">
              With over 10 years of experience, we provide top-notch equipment, expert trainers, and a supportive community to help you reach your fitness goals.
            </p>
            <p className="text-zinc-400">
              Our state-of-the-art facility features the latest equipment, spacious workout areas, and everything you need for a complete fitness experience.
            </p>
            <Button>Join Our Community</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
