export function TrainerCard({ name, role, certifications, image, socials }) {
  return (
    <div className="bg-gym-surface border border-gym-border rounded-xl overflow-hidden relative group hover:border-gym-accent/50 transition-colors duration-300 flex flex-col justify-between h-full">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${role} at FitZone gym`}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="bg-black/60 backdrop-blur-md text-gym-accent font-mono text-[10px] px-2 py-1 rounded border border-gym-accent/30 uppercase"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-gym-surface via-gym-surface/80 to-transparent" />

        <div className="absolute bottom-0 inset-x-0 p-5">
          <h3 className="text-white font-black text-lg sm:text-xl uppercase tracking-tight">
            {name}
          </h3>
          <p className="text-gym-accent font-bold text-xs uppercase tracking-wider mb-3">
            {role}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="text-zinc-400 font-mono text-xs"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {socials.instagram && (
            <a
              href={socials.instagram}
              aria-label={`${name} on Instagram`}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-gym-accent transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          )}
          {socials.tiktok && (
            <a
              href={socials.tiktok}
              aria-label={`${name} on TikTok`}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-gym-accent transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 10.86 4.46V13a8.28 8.28 0 0 0 5.58 2.15v-3.45a4.85 4.85 0 0 1-5.58-2.73V2.44h3.45A4.83 4.83 0 0 0 19.59 6.69z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
