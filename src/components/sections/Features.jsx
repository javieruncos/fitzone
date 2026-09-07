import { featuresData } from '../../data/gymData';
import { Dumbbell, UserCheck, ClipboardList, Users } from 'lucide-react';

const iconMap = {
  Dumbbell,
  UserCheck,
  ClipboardList,
  Users,
};

export function Features() {
  return (
    <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresData.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={feature.title} className="bg-gym-surface border border-gym-border rounded-none p-6 text-center">
              <Icon className="w-10 h-10 text-gym-accent mx-auto mb-3" />
              <h3 className="font-bold text-sm uppercase tracking-wider mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
