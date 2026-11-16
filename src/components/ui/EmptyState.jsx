import { FiFolder } from 'react-icons/fi';

export default function EmptyState({ title, description, children }) {
  return (
    <section
      aria-label={title}
      className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface p-8 text-center"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-ink-muted">
        <FiFolder className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      {description && (
        <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">{description}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}