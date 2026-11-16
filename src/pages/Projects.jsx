import { useMemo, useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import PageHeader from '../components/ui/PageHeader.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import Button from '../components/ui/Button.jsx';
import ProjectFilters from '../components/projects/ProjectFilters.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  useDocumentTitle('Projetos');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const unique = new Set(projects.map((item) => item.category).filter(Boolean));
    return Array.from(unique);
  }, []);

  const filteredProjects = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.category === selectedCategory;
      const matchesSearch =
        !term ||
        project.title.toLowerCase().includes(term) ||
        (project.description && project.description.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  function resetFilters() {
    setSelectedCategory('Todos');
    setSearchQuery('');
  }

  return (
    <div>
      <PageHeader
        title="Projetos"
        description="Aplicações desenvolvidas com links de acesso, descrição técnica e repositórios."
      />

      {projects.length === 0 ? (
        <EmptyState
          title="Nenhum item disponível no momento"
          description="Em breve os projetos desenvolvidos estarão listados nesta página."
        />
      ) : (
        <>
          <ProjectFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {filteredProjects.length === 0 ? (
            <EmptyState
              title="Nenhum item disponível no momento"
              description="Nenhum projeto corresponde ao filtro ou termo pesquisado."
            >
              <Button variant="secondary" onClick={resetFilters}>
                Limpar filtros
              </Button>
            </EmptyState>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}