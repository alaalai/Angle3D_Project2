import clsx from 'clsx';

export function Input({ label, hint, className, ...props }) {
  return (
    <label className={clsx('flex flex-col gap-2 text-sm text-white/90', className)}>
      {label && <span>{label}</span>}
      <input
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
        {...props}
      />
      {hint && <span className="text-xs text-white/60">{hint}</span>}
    </label>
  );
}
