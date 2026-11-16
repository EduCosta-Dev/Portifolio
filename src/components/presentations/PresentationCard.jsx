import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

export default function PresentationCard({ presentation, isActive, onSelect }) {
  const hasPdf = Boolean(presentation.pdfFile);
  const hasPptx = Boolean(presentation.pptxFile);
  const hasFiles = hasPdf || hasPptx;

  return (
    <Card interactive className="flex flex-col p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-ink-muted">
          <FiFileText className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ink">{presentation.title}</h2>
          {presentation.summary && (
            <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
              {presentation.summary}
            </p>
          )}
        </div>
      </div>

      <div className="mt-auto pt-6">
        {hasFiles ? (
          <div className="flex flex-wrap items-center gap-2">
            {hasPdf && (
              <Button
                variant={isActive ? 'secondary' : 'primary'}
                aria-pressed={isActive}
                onClick={() => onSelect(presentation)}
              >
                <FiEye className="h-4 w-4" aria-hidden="true" />
                <span>{isActive ? 'Visualizando PDF' : 'Visualizar PDF'}</span>
              </Button>
            )}

            {hasPptx && (
              <Button
                as="anchor"
                href={presentation.pptxFile}
                download
                variant={hasPdf ? 'secondary' : 'primary'}
              >
                <FiDownload className="h-4 w-4" aria-hidden="true" />
                <span>Baixar PPTX</span>
              </Button>
            )}
          </div>
        ) : (
          <span className="inline-flex min-h-[44px] items-center text-xs font-medium text-ink-muted">
            Em breve
          </span>
        )}
      </div>
    </Card>
  );
}