import clsx from 'clsx';

export function Badge({ children, variant = 'neutral', className }) {
  const variants = {
    neutral: 'bg-white/10 text-white',
    success: 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-200 border border-amber-500/30',
  };

  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  );
}
