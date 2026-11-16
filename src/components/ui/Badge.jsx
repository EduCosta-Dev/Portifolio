export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs text-ink-muted">
      {children}
    </span>
  );
}