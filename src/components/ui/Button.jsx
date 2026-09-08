export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-[color,transform] duration-200 ease-out cursor-pointer rounded-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark';

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
