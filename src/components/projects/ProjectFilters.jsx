export default function ProjectFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  const allCategories = ['Todos', ...categories];

  return (
    <section
      aria-label="Filtros de projetos"
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
        {allCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              aria-pressed={isSelected}
              className={[
                'inline-flex min-h-[44px] items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-150',
                isSelected
                  ? 'border-accent bg-accent text-accent-contrast'
                  : 'border-border bg-surface text-ink-muted hover:bg-muted hover:text-ink',
              ].join(' ')}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="w-full sm:w-64">
        <label htmlFor="project-search" className="sr-only">
          Buscar projeto pelo nome
        </label>
        <input
          id="project-search"
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar projeto..."
          className="min-h-[44px] w-full rounded-md border border-border bg-surface px-4 py-2 text-sm text-ink placeholder:text-ink-muted"
        />
      </div>
    </section>
  );
}