import clsx from 'clsx';

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-accent text-white hover:bg-purple-500 focus:ring-accent/50',
    ghost: 'bg-white/5 text-white hover:bg-white/10 focus:ring-white/20',
    outline: 'border border-white/20 text-white hover:bg-white/10 focus:ring-white/30',
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
