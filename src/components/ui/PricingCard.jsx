export function PricingCard({ tag, name, price, period, features, featured, badge }) {
  return (
    <div
      className={`bg-gym-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative will-change-transform transform-gpu ${
        featured
          ? 'border-2 border-gym-accent shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-[1.02] lg:-translate-y-2 z-10'
          : 'border border-gym-border'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gym-accent text-black font-black text-xs px-3 py-1 uppercase tracking-wider">
          {badge}
        </span>
      )}

      <div>
        <span className="font-mono text-xs text-gym-accent tracking-widest uppercase">
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

        <hr className="border-white/10 my-6" />

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
        className={`mt-8 min-h-[48px] flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark ${
          featured
            ? 'bg-gym-accent text-black font-black hover:bg-yellow-400'
            : 'bg-white/5 border border-gym-border text-white hover:border-gym-accent hover:text-gym-accent'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
