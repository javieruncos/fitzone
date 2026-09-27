import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scheduleData } from '../../data/gymData';

const EASE = [0.16, 1, 0.3, 1];

const DAYS = scheduleData.map((d) => d.day);

function ClassRow({ cls, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
      className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 py-4 sm:py-5 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-200 -mx-2 px-2 sm:mx-0 sm:px-0"
    >
      {/* Time */}
      <span className="font-mono text-sm sm:text-base text-gym-text-muted tracking-wide shrink-0 sm:w-20 lg:w-24">
        {cls.time}
      </span>

      {/* Program + Trainer */}
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide leading-tight">
          {cls.program}
        </h4>
        <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 truncate">
          {cls.trainer}
        </p>
      </div>

      {/* Duration + Level */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0 sm:text-right mt-1 sm:mt-0">
        <span className="font-mono text-xs text-zinc-500 tracking-wide">
          {cls.duration}
        </span>
        <span className="font-mono text-xs text-zinc-600 tracking-wide sm:inline">
          {cls.level}
        </span>
      </div>
    </motion.div>
  );
}

export function Schedule() {
  const reduceMotion = useReducedMotion();
  const [activeDay, setActiveDay] = useState(DAYS[0]);

  const activeClasses =
    scheduleData.find((d) => d.day === activeDay)?.classes ?? [];

  return (
    <section id="schedule" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-3">
            Horarios de clases
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Tu semana de entrenamiento. Encuentra la sesión ideal para tu objetivo.
          </p>
        </div>

        {/* Day Tabs */}
        <div
          role="tablist"
          aria-label="Elige un día"
          className="flex overflow-x-auto scrollbar-hide gap-0 border-b border-white/[0.06] mb-6 sm:mb-8 -mx-6 px-6 sm:mx-0 sm:px-0"
        >
          {DAYS.map((day) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="schedule-panel"
                onClick={() => setActiveDay(day)}
                className={`
                  relative px-4 sm:px-5 py-3 font-mono text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                  transition-colors duration-200 min-h-[44px] min-w-[44px] shrink-0
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark
                  ${isActive
                    ? 'text-gym-accent'
                    : 'text-zinc-500 hover:text-white'
                  }
                `}
              >
                {day}
                {isActive && (
                  <motion.span
                    layoutId="schedule-day-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gym-accent"
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Schedule Panel */}
        <div
          id="schedule-panel"
          role="tabpanel"
          aria-label={`Horario — ${activeDay}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: EASE }}
            >
              {activeClasses.length > 0 ? (
                activeClasses.map((cls) => (
                  <ClassRow key={cls.id} cls={cls} reduceMotion={reduceMotion} />
                ))
              ) : (
                <p className="text-zinc-500 text-sm py-8 text-center">
                  No hay clases programadas para este día.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="#membership"
            className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-white/40 px-6 py-3 min-h-[48px] font-bold uppercase tracking-wider text-sm transition-all duration-200 ease-out rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark active:scale-[0.98]"
          >
            Ver membresías
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
