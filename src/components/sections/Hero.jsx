import { Play, Dumbbell, UserCheck, ClipboardList, Users } from 'lucide-react';
import { featuresData } from '../../data/gymData';

const iconMap = {
  Dumbbell,
  UserCheck,
  ClipboardList,
  Users,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gym-dark text-white flex flex-col justify-between overflow-hidden pt-20"
    >
      {/* 1. IMAGEN DE FONDO — Full Size */}
      <img
        src="/src/assets/hero.jpg"
        alt="Athlete training in a modern gym"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] z-0 opacity-90"
      />

      {/* 2. GRADIENTE LEFT→RIGHT — Legibilidad del contenido */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/70 to-transparent z-10"
        aria-hidden="true"
      />

      {/* 3. GRADIENTE BOTTOM→TOP — Fusión con features card */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-transparent z-10"
        aria-hidden="true"
      />

      {/* 4. BLOQUE DE CONTENIDO PRINCIPAL */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-12 pb-8 z-20 flex-1 flex flex-col justify-center">
        <p className="text-white font-bold text-sm sm:text-base uppercase tracking-wide sm:tracking-widest mb-3">
          BUILD STRENGTH.<br />
          BUILD CONFIDENCE.
        </p>

        <h1 className="font-black text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-4">
          BECOME <span className="text-gym-accent">YOUR BEST</span>
        </h1>

        <p className="text-zinc-300 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
          Join a community that pushes you, supports you and helps you
          become the strongest version of yourself.
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <a
            href="#membership"
            className="bg-gym-accent text-black font-black text-xs tracking-wider uppercase px-7 py-3.5 rounded-md hover:bg-gym-accent-hover active:scale-[0.97] transition-colors transition-transform flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark"
          >
            JOIN NOW
            <span aria-hidden="true">&rarr;</span>
          </a>

          <button
            type="button"
            aria-label="Watch promotional video"
            className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase hover:text-gym-accent transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark rounded-md"
          >
            <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:border-gym-accent transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </span>
            WATCH VIDEO
          </button>
        </div>
      </div>

      {/* 5. TARJETA FLotante DE FEATURES */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 lg:pb-12 z-20">
        <div className="bg-gym-surface/90 backdrop-blur-md border border-gym-border rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-gym-border">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3 sm:justify-center lg:justify-start lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                <Icon className="w-5 h-5 text-gym-accent mt-0.5 shrink-0" />
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
      </div>
    </section>
  );
}
