import { useEffect, useRef } from 'react';
import { FiDownload, FiExternalLink, FiX } from 'react-icons/fi';
import Button from '../ui/Button.jsx';

export default function PresentationViewer({ presentation, onClose }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!presentation?.pdfFile || !viewerRef.current) return;
    viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    viewerRef.current.focus({ preventScroll: true });
  }, [presentation]);

  if (!presentation || !presentation.pdfFile) return null;

  return (
    <section
      ref={viewerRef}
      tabIndex={-1}
      aria-label={`Visualizador de apresentação: ${presentation.title}`}
      className="mb-8 rounded-lg border border-border bg-surface p-4 focus:outline-none sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="font-mono text-xs text-ink-muted">Documento PDF</span>
          <h2 className="text-lg font-semibold text-ink">{presentation.title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {presentation.pptxFile && (
            <Button as="anchor" href={presentation.pptxFile} download variant="primary">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              <span>Baixar PPTX</span>
            </Button>
          )}

          <Button
            as="anchor"
            href={presentation.pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <FiExternalLink className="h-4 w-4" aria-hidden="true" />
            <span>Abrir PDF</span>
          </Button>

          <Button variant="ghost" onClick={onClose} aria-label="Fechar visualizador">
            <FiX className="h-4 w-4" aria-hidden="true" />
            <span>Fechar</span>
          </Button>
        </div>
      </div>

      <iframe
        src={presentation.pdfFile}
        title={`Slides da apresentação ${presentation.title}`}
        className="h-[70vh] w-full rounded-md border border-border bg-muted"
      />
    </section>
  );
}