import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import PageHeader from '../components/ui/PageHeader.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import PresentationCard from '../components/presentations/PresentationCard.jsx';
import PresentationViewer from '../components/presentations/PresentationViewer.jsx';
import { presentations } from '../data/presentations.js';

export default function Presentations() {
  useDocumentTitle('Apresentações');
  const [activePresentation, setActivePresentation] = useState(null);

  return (
    <div>
      <PageHeader
        title="Apresentações"
        description="Slides utilizados nas apresentações acadêmicas, com visualização em PDF e download em PPTX."
      />

      {activePresentation && (
        <PresentationViewer
          presentation={activePresentation}
          onClose={() => setActivePresentation(null)}
        />
      )}

      {presentations.length === 0 ? (
        <EmptyState
          title="Nenhum item disponível no momento"
          description="Em breve os materiais de apresentação estarão disponíveis nesta página."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {presentations.map((item) => (
            <PresentationCard
              key={item.id}
              presentation={item}
              isActive={activePresentation?.id === item.id}
              onSelect={setActivePresentation}
            />
          ))}
        </div>
      )}
    </div>
  );
}