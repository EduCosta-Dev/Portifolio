import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import PageHeader from '../components/ui/PageHeader.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import VideoCard from '../components/videos/VideoCard.jsx';
import VideoModal from '../components/videos/VideoModal.jsx';
import { videos } from '../data/videos.js';

export default function Videos() {
  useDocumentTitle('Vídeos');
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <PageHeader
        title="Vídeos"
        description="Vídeos de apresentação e demonstrações práticas dos projetos desenvolvidos."
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {videos.length === 0 ? (
        <EmptyState
          title="Nenhum item disponível no momento"
          description="Em breve os vídeos de apresentação estarão disponíveis nesta página."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((item) => (
            <VideoCard
              key={item.id}
              video={item}
              onSelect={setSelectedVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
