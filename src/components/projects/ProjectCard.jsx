import { useState } from 'react';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';
import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = Boolean(project.image) && !imageError;
  const hasLinks = Boolean(project.liveUrl) || Boolean(project.repoUrl);

  return (
    <Card interactive className="flex flex-col overflow-hidden">
      <div className="aspect-video w-full border-b border-border bg-muted">
        {hasImage ? (
          <img
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-muted">
            <FiFolder className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs">Sem prévia visual</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.category && (
          <span className="font-mono text-xs font-medium text-accent-text">
            {project.category}
          </span>
        )}

        <h2 className="mt-1 text-lg font-semibold text-ink">{project.title}</h2>

        {project.description && (
          <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>
        )}

        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <ul aria-label="Tecnologias utilizadas" className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          {hasLinks ? (
            <div className="flex flex-wrap items-center gap-2">
              {project.liveUrl && (
                <Button
                  as="anchor"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Aplicação</span>
                </Button>
              )}

              {project.repoUrl && (
                <Button
                  as="anchor"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <FiGithub className="h-4 w-4" aria-hidden="true" />
                  <span>Código</span>
                </Button>
              )}
            </div>
          ) : (
            <span className="inline-flex min-h-[44px] items-center text-xs font-medium text-ink-muted">
              Em breve
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}