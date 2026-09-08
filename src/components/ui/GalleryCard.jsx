export function GalleryCard({ tag, title, caption, image }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gym-surface border border-gym-border hover:border-gym-accent/50 transition-colors duration-300 h-full w-full">
      <img
        src={image}
        alt={`${title} at FitZone gym`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-gym-accent font-mono text-[10px] px-2 py-1 rounded border border-gym-accent/30 uppercase">
        {tag}
      </span>

      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="text-white font-black text-lg sm:text-xl uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-400 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
          {caption}
        </p>
      </div>
    </div>
  );
}
