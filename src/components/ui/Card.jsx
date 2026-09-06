export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-gym-surface border border-gym-border rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
