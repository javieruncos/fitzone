export function TrainerCard({ name, role, image, socials = {} }) {
  return (
    <div className="bg-gym-surface border border-white/[0.06] rounded-xl overflow-hidden relative group hover:border-white/[0.12] transition-colors duration-300 h-full">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={`${name} — ${role} en FitZone`}
          width="480"
          height="600"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <h3 className="text-white font-black text-lg sm:text-xl uppercase tracking-tight mb-1">
            {name}
          </h3>
          <p className="text-white/60 font-bold text-xs uppercase tracking-wider mb-3">
            {role}
          </p>

          {(socials?.instagram || socials?.tiktok) && (
            <div className="flex items-center gap-2">
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  aria-label={`${name} en Instagram`}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-white active:scale-[0.98] transition-[color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent rounded-md"
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
                  aria-label={`${name} en TikTok`}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-white active:scale-[0.98] transition-[color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent rounded-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 10.86 4.46V13a8.28 8.28 0 0 0 5.58 2.15v-3.45a4.85 4.85 0 0 1-5.58-2.73V2.44h3.45A4.83 4.83 0 0 0 19.59 6.69z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}