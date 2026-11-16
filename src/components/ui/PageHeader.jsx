export default function PageHeader({ title, description }) {
  return (
    <header className="mb-8 border-b border-border pb-6">
      <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h1>
      {description && (
        <p className="mt-2 max-w-[65ch] text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </header>
  );
}