import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../../data/profile.js';

const NAV_ITEMS = [
  { to: '/', label: 'Início', end: true },
  { to: '/projetos', label: 'Projetos' },
  { to: '/videos', label: 'Vídeos' },
  { to: '/apresentacoes', label: 'Apresentações' },
  { to: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinkClass = ({ isActive }) =>
    [
      'inline-flex min-h-[44px] items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
      isActive
        ? 'bg-muted text-accent-text'
        : 'text-ink-muted hover:bg-muted hover:text-ink',
    ].join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center text-base font-semibold tracking-tight text-ink"
        >
          {profile.name}
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-border bg-surface text-ink transition-colors duration-150 hover:bg-muted md:hidden"
          >
            {menuOpen ? (
              <FiX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação principal móvel"
          className="border-t border-border bg-surface px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      'flex min-h-[44px] w-full items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
                      isActive
                        ? 'bg-muted text-accent-text'
                        : 'text-ink-muted hover:bg-muted hover:text-ink',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}