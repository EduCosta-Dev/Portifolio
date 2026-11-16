import { useState } from 'react';
import { FiExternalLink, FiPlay, FiVideo } from 'react-icons/fi';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

export default function VideoCard({ video, onSelect }) {
  const [thumbError, setThumbError] = useState(false);
  const hasId = Boolean(video.youtubeId);
  const youtubeUrl = hasId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : '';

  return (
    <Card interactive className="flex flex-col overflow-hidden">
      <div className="aspect-video w-full border-b border-border bg-muted">
        {hasId && !thumbError ? (
          <img
            src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={`Miniatura do vídeo ${video.title}`}
            onError={() => setThumbError(true)}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-muted">
            <FiVideo className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs">Vídeo de apresentação</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-lg font-semibold text-ink">{video.title}</h2>

        {video.description && (
          <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
            {video.description}
          </p>
        )}

        <div className="mt-auto pt-6">
          {hasId ? (
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary" onClick={() => onSelect(video)}>
                <FiPlay className="h-4 w-4" aria-hidden="true" />
                <span>Assistir aqui</span>
              </Button>

              <Button
                as="anchor"
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>Abrir no YouTube</span>
              </Button>
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