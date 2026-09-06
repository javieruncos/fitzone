export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-gym-accent text-black hover:bg-gym-accent-hover px-6 py-3',
    secondary: 'border border-white/20 text-white hover:border-white/40 px-6 py-3',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
