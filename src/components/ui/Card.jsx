export default function Card({ interactive = false, className = '', children }) {
  const classes = [
    'rounded-lg border border-border bg-surface',
    interactive ? 'transition-colors duration-150 hover:border-ink-muted' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <article className={classes}>{children}</article>;
}