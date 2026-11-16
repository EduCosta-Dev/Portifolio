import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import Button from '../components/ui/Button.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import VideoCard from '../components/videos/VideoCard.jsx';
import VideoModal from '../components/videos/VideoModal.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { videos } from '../data/videos.js';

export default function Home() {
  useDocumentTitle('Início');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredProject = projects[0] || null;
  const featuredVideo = !featuredProject ? videos[0] || null : null;

  return (
    <div className="space-y-12">
      <section aria-labelledby="home-heading" className="border-b border-border pb-12">
        <p className="font-mono text-xs font-medium text-accent-text">{profile.course}</p>
        <h1
          id="home-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-muted sm:text-lg">
          {profile.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button as="link" to="/projetos" variant="primary">
            Ver projetos
          </Button>
          <Button as="link" to="/apresentacoes" variant="secondary">
            Acessar apresentações
          </Button>
        </div>
      </section>

      <section aria-labelledby="featured-heading">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="featured-heading" className="text-xl font-semibold tracking-tight text-ink">
            Destaque
          </h2>
          {featuredProject && (
            <Button as="link" to="/projetos" variant="ghost">
              Ver todos
            </Button>
          )}
          {featuredVideo && (
            <Button as="link" to="/videos" variant="ghost">
              Ver todos
            </Button>
          )}
        </div>

        {featuredProject && (
          <div className="max-w-xl">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        {featuredVideo && (
          <div className="max-w-xl">
            <VideoCard video={featuredVideo} onSelect={setSelectedVideo} />
          </div>
        )}

        {!featuredProject && !featuredVideo && (
          <EmptyState
            title="Nenhum item disponível no momento"
            description="Em breve um projeto ou vídeo em destaque será exibido aqui."
          />
        )}
      </section>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}