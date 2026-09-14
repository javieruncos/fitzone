export function PricingCard({ tag, name, price, period, features, featured, badge }) {
  return (
    <div
      className={`bg-gym-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative ${
        featured
          ? 'border-2 border-gym-accent shadow-xl shadow-black/20 z-10'
          : 'border border-white/[0.06]'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gym-accent text-black font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}

      <div>
        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
          {tag}
        </span>
        <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mt-2">
          {name}
        </h3>

        <div className="flex items-baseline gap-1 my-4">
          <span className="text-white font-black text-4xl sm:text-5xl tracking-tight">
            ${price}
          </span>
          <span className="text-zinc-500 font-mono text-sm">
            {period}
          </span>
        </div>

        <hr className="border-white/[0.06] my-6" />

        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="text-zinc-300 text-sm flex items-center gap-3">
              <svg className="w-4 h-4 text-gym-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#membership"
        className={`mt-auto min-h-[48px] flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark ${
          featured
            ? 'bg-gym-accent text-black hover:bg-gym-accent-hover rounded-full'
            : 'bg-white/5 border border-white/[0.06] text-white hover:border-white/[0.12] rounded-full'
        }`}
      >
        Empezar ahora
      </a>
    </div>
  );
}
