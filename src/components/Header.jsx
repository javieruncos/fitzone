import { useState, useEffect, useCallback } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { navLinks } from '../data/gymData';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleEscape]);

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-black border-b border-neutral-800/80 px-6 sm:px-10 lg:px-16 flex items-center justify-between box-border">
      
      {/* 1. LOGO */}
      <a
        href="#home"
        className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-md"
      >
        <Dumbbell
          className="w-7 h-7 text-yellow-500 shrink-0"
          aria-hidden="true"
        />
        <div className="flex flex-col">
          <span className="font-black text-2xl tracking-wider text-white uppercase leading-none">
            FITZONE
          </span>
          <span className="block text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mt-1">
            STRONGER EVERYDAY
          </span>
        </div>
      </a>

      {/* 2. NAVEGACIÓN DESKTOP (Pantallas lg+) */}
      <nav aria-label="Main navigation" className="hidden lg:flex items-center">
        <ul className="flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={`relative text-xs font-bold tracking-widest uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-md px-1 py-1 ${
                  link.active
                    ? 'text-yellow-500 after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-yellow-500'
                    : 'text-white hover:text-yellow-500'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. BOTÓN CTA DESKTOP (Pantallas lg+) */}
      <a
        href="#membership"
        className="hidden lg:inline-flex items-center justify-center bg-yellow-500 text-black font-black text-xs tracking-wider uppercase px-6 py-2.5 rounded-md hover:bg-yellow-400 active:scale-[0.98] transition-[color,transform] duration-200 ease-out shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      >
        JOIN NOW
      </a>

      {/* 4. BOTÓN MENÚ MÓVIL (Pantallas < lg) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="lg:hidden text-white min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-md hover:text-yellow-500 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-neutral-800 overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none shadow-2xl ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4 w-full">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-bold tracking-widest uppercase py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-md px-3 ${
                    link.active
                      ? 'text-yellow-500 bg-neutral-900/60'
                      : 'text-zinc-300 hover:text-white hover:bg-neutral-900/30 transition-colors duration-200'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-yellow-500 text-black font-black text-xs tracking-wider uppercase px-6 py-3 rounded-md hover:bg-yellow-400 active:scale-[0.97] transition-all duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            JOIN NOW
          </a>
        </nav>
      </div>
    </header>
  );
}