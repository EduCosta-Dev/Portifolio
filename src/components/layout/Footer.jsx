import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-sm font-medium text-ink">{profile.name}</p>
          <p className="text-xs text-ink-muted">{profile.course}</p>
        </div>

        <div className="flex items-center gap-2">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-ink-muted transition-colors duration-150 hover:bg-muted hover:text-ink"
            >
              <FiGithub className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}

          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-ink-muted transition-colors duration-150 hover:bg-muted hover:text-ink"
            >
              <FiLinkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}