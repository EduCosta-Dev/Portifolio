import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const ROUTE_LABELS = {
  projetos: 'Projetos',
  videos: 'Vídeos',
  apresentacoes: 'Apresentações',
  sobre: 'Sobre',
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const currentSegment = segments[0];
  const currentLabel = ROUTE_LABELS[currentSegment] || 'Página não encontrada';

  return (
    <nav aria-label="Trilha de navegação" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <li>
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center rounded-md px-2 transition-colors duration-150 hover:text-ink"
          >
            Início
          </Link>
        </li>
        <li aria-hidden="true" className="flex items-center">
          <FiChevronRight className="h-4 w-4" />
        </li>
        <li>
          <span
            aria-current="page"
            className="inline-flex min-h-[44px] items-center px-2 font-medium text-ink"
          >
            {currentLabel}
          </span>
        </li>
      </ol>
    </nav>
  );
}