import clsx from 'clsx';

export function Card({ title, subtitle, children, className }) {
  return (
    <div className={clsx('glass rounded-2xl p-6 shadow-card border border-white/5', className)}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-300">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
