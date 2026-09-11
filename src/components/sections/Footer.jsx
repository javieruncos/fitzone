import { contactInfo } from '../../data/gymData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

export function Footer() {
  return (
    <footer className="bg-gym-surface border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => {
            const Icon = iconMap[info.icon];
            return (
              <div key={info.title} className="space-y-3">
                <Icon className="w-6 h-6 text-white/50" />
                <h3 className="font-bold text-sm uppercase tracking-wider">
                  {info.title}
                </h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-zinc-400 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-zinc-400 text-sm">
            &copy; 2026 FITZONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
