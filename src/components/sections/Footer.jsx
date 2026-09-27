import { contactInfo, navLinks } from '../../data/gymData';
import { MapPin, Phone, Clock, Dumbbell, ArrowUp } from 'lucide-react';

const address = contactInfo.find((info) => info.icon === 'MapPin');
const direct = contactInfo.filter((info) => info.icon === 'Phone' || info.icon === 'Mail');
const hours = contactInfo.find((info) => info.icon === 'Clock');

const linkFocus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent rounded-md';

function ContactLines({ lines }) {
  return (
    <>
      {lines.map((line, idx) => {
        if (line.startsWith('+')) {
          const href = `tel:${line.replace(/[^+\d]/g, '')}`;
          return (
            <p key={idx} className="text-zinc-400 text-sm">
              <a href={href} className={`hover:text-white transition-colors duration-200 ${linkFocus}`}>
                {line}
              </a>
            </p>
          );
        }
        if (line.includes('@')) {
          return (
            <p key={idx} className="text-zinc-400 text-sm">
              <a href={`mailto:${line}`} className={`hover:text-white transition-colors duration-200 ${linkFocus}`}>
                {line}
              </a>
            </p>
          );
        }
        return (
          <p key={idx} className="text-zinc-400 text-sm">
            {line}
          </p>
        );
      })}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-gym-surface border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        {/* Brand + final CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          <a href="#home" className={`flex items-center gap-3 shrink-0 ${linkFocus}`}>
            <Dumbbell className="w-7 h-7 text-gym-accent shrink-0" aria-hidden="true" />
            <span className="flex flex-col">
              <span className="font-black text-2xl tracking-wider text-white uppercase leading-none">
                FITZONE
              </span>
              <span className="text-zinc-500 text-xs tracking-widest uppercase mt-1.5">
                Entrenamiento guiado. Progreso estructurado.
              </span>
            </span>
          </a>
          <a
            href="#membership"
            className="inline-flex items-center justify-center bg-gym-accent text-black font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-gym-accent-hover active:scale-[0.98] transition-[color,transform] duration-200 ease-out shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent"
          >
            Empezar ahora
          </a>
        </div>

        {/* Navigation + contact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          <nav aria-label="Footer navigation">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-4">
              Explorar
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-zinc-400 text-sm hover:text-white transition-colors duration-200 ${linkFocus}`}
                  >
                    {link.name === 'FAQ' ? 'FAQ' : link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {address && (
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/50" aria-hidden="true" />
                Visit
              </h3>
              <div className="space-y-2">
                <ContactLines lines={address.lines} />
              </div>
            </div>
          )}

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-white/50" aria-hidden="true" />
              Contact
            </h3>
            <div className="space-y-2">
              {direct.map((info) => (
                <ContactLines key={info.title} lines={info.lines} />
              ))}
            </div>
          </div>

          {hours && (
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/50" aria-hidden="true" />
                Hours
              </h3>
              <div className="space-y-2">
                <ContactLines lines={hours.lines} />
              </div>
            </div>
          )}
        </div>

        {/* Legal */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; 2026 FITZONE. Todos los derechos reservados.
          </p>
          <a
            href="#home"
            className={`inline-flex items-center gap-1.5 text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors duration-200 ${linkFocus}`}
          >
            Volver arriba
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
