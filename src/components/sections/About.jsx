import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import aboutImage from '../../assets/images/about.jpg';

const EASE = [0.16, 1, 0.3, 1];

const principles = [
  {
    index: '01',
    title: 'Guiado',
    description: 'Acompañamiento certificado en técnica y progresión.',
  },
  {
    index: '02',
    title: 'Estructurado',
    description: 'Fuerza, funcional y recuperación a lo largo de la semana.',
  },
  {
    index: '03',
    title: 'Exigente y cercano',
    description: 'Te desafía sin intimidar.',
  },
];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gym-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }}
        >
          <p className="text-gym-accent font-mono text-xs tracking-widest uppercase mb-4">
            Sobre FitZone
          </p>

          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-5 text-balance">
            Entrena con intención.
            <br />
            <span className="text-gym-accent">Sé constante.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-4">
            FitZone es un espacio de entrenamiento guiado. Programación, acompañamiento y
            equipamiento trabajan juntos para que el progreso venga de la estructura, no de la motivación.
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            No necesitas experiencia. Empiezas con una evaluación, sigues un plan adaptado
            a tu nivel y avanzas desde la base hasta el trabajo avanzado con pasos claros.
          </p>

          <ul className="border-t border-white/[0.06] divide-y divide-white/[0.06] mb-8">
            {principles.map((principle) => (
              <li key={principle.index} className="flex items-baseline gap-4 py-4">
                <span className="text-gym-accent font-mono text-xs tracking-widest shrink-0 tabular-nums">
                  {principle.index}
                </span>
                <div className="min-w-0">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">
                    {principle.title}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-1">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            className="group inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase hover:text-gym-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark rounded-sm py-1"
          >
            Explorar programas
            <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: EASE }}
          className="relative overflow-hidden rounded-xl bg-gym-surface border border-white/[0.06] aspect-[16/10] lg:aspect-[4/5]"
        >
          <img
            src={aboutImage}
            alt="Sala de fuerza en el gimnasio FitZone"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-400">
              Sala de fuerza — FitZone
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
