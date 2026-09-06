import { programsData } from '../../data/gymData';
import { Dumbbell, Flame, Activity, Flower2 } from 'lucide-react';
import { Card } from '../ui/Card';

const iconMap = {
  Dumbbell,
  Flame,
  Activity,
  Flower2,
};

export function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gym-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Our Programs
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Train. Focus. <span className="text-gym-accent">Achieve.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <Card key={program.id} className="group p-0 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Icon className="w-8 h-8 text-gym-accent mb-3" />
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">{program.description}</p>
                  <a href="#" className="text-gym-accent text-sm font-semibold uppercase tracking-wider hover:underline">
                    Learn More →
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
