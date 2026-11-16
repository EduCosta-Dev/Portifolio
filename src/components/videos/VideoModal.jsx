import { FiExternalLink } from 'react-icons/fi';
import Modal from '../ui/Modal.jsx';
import Button from '../ui/Button.jsx';

export default function VideoModal({ video, onClose }) {
  const isOpen = Boolean(video && video.youtubeId);
  const embedUrl = isOpen ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}` : '';
  const externalUrl = isOpen ? `https://www.youtube.com/watch?v=${video.youtubeId}` : '';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={video?.title || 'Vídeo'}>
      {isOpen && (
        <div className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
            <iframe
              src={embedUrl}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {video.description && (
            <p className="max-w-[65ch] text-sm leading-relaxed text-ink-muted">
              {video.description}
            </p>
          )}

          <div>
            <Button
              as="anchor"
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Abrir no YouTube</span>
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}