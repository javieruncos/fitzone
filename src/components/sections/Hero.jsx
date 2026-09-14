import { motion, useReducedMotion } from 'framer-motion';
import { Dumbbell, UserCheck, ClipboardList, Users } from 'lucide-react';
import { featuresData } from '../../data/gymData';
import heroImage from '../../assets/images/hero.jpg';

const iconMap = {
  Dumbbell,
  UserCheck,
  ClipboardList,
  Users,
};

const EASE = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] bg-gym-dark text-white flex flex-col justify-between overflow-hidden pt-20"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="Atleta entrenando en un gimnasio moderno"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] z-0 opacity-90"
      />

      {/* Gradient overlay — left to right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/70 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Gradient overlay — bottom to top */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-transparent z-10"
        aria-hidden="true"
      />

      {/* Main content block */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-12 max-sm:pt-8 pb-8 max-sm:pb-6 z-20 flex-1 flex flex-col justify-center max-sm:text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-white/80 font-bold text-sm uppercase tracking-widest mb-3"
        >
          CONSTRUYE FUERZA.
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="font-black text-4xl sm:text-5xl lg:text-[5.5rem] uppercase tracking-tighter leading-[0.9] mb-4 max-sm:text-balance"
        >
          SÉ TU MEJOR <span className="text-gym-accent">VERSIÓN</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="text-zinc-300 text-sm sm:text-base max-w-md max-sm:mx-auto mb-8 leading-relaxed"
        >
          Súmate a la comunidad más fuerte de la ciudad. Te exigimos, te acompañamos y te ayudamos a llegar a tu mejor versión.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <a
            href="#membership"
            className="inline-flex items-center justify-center gap-2 bg-gym-accent text-black font-bold text-xs tracking-wider uppercase px-8 py-4 max-sm:min-h-[48px] rounded-full hover:bg-gym-accent-hover active:scale-[0.98] transition-[color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark"
          >
            Empezar ahora
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>

      {/* Features card — floating at bottom */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 lg:pb-12 z-20"
      >
        <div className="bg-gym-surface/90 backdrop-blur-md border border-white/[0.06] rounded-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-4 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.06]">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3 sm:justify-center lg:justify-start lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                <Icon className="w-5 h-5 text-white/50 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold tracking-wider uppercase">
                    {feature.title}
                  </p>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
