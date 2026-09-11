import { ArrowRight } from 'lucide-react';

export function Card({ image, alt, zone, title, description, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-xl ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={alt}
          width="480"
          height="600"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          {zone && (
            <span className="text-white/50 font-mono text-xs tracking-widest uppercase mb-2">
              {zone}
            </span>
          )}
          <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide mb-1.5">
            {title}
          </h3>
          {description && (
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[280px] mb-3">
              {description}
            </p>
          )}
          <span className="inline-flex items-center gap-2 text-white/80 sm:text-white/0 sm:group-hover:text-white/80 transition-colors duration-300 text-xs sm:text-sm font-medium">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
