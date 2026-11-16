import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover border border-transparent',
  secondary: 'bg-surface text-ink border border-border hover:bg-muted',
  ghost: 'bg-transparent text-ink-muted border border-transparent hover:bg-muted hover:text-ink',
};

export default function Button({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = [
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
    VARIANTS[variant] || VARIANTS.primary,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'link') {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'anchor') {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}