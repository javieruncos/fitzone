export function Card({ image, alt, icon, title, description, href = '#', className = '' }) {
  return (
    <div className={`bg-gym-surface border border-gym-border rounded-xl overflow-hidden flex flex-col h-full group ${className}`}>
      <div className="overflow-hidden will-change-transform transform-gpu">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center">
            {icon}
            <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 mb-6 line-clamp-2">
            {description}
          </p>
        </div>
        <a
          href={href}
          className="text-gym-accent font-bold text-xs sm:text-sm uppercase tracking-wider hover:underline active:scale-[0.98] transition-[color,transform] duration-200 ease-out flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark"
        >
          Learn More <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
