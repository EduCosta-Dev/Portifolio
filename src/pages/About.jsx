import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import PageHeader from '../components/ui/PageHeader.jsx';
import Card from '../components/ui/Card.jsx';
import { profile } from '../data/profile.js';
import { heuristics } from '../data/heuristics.js';

export default function About() {
  useDocumentTitle('Sobre');

  return (
    <div className="space-y-12">
      <PageHeader
        title="Sobre o Portfólio e IHC"
        description="Contexto acadêmico da entrega e documentação das 10 Heurísticas de Nielsen aplicadas."
      />

      <section aria-labelledby="context-heading" className="space-y-4">
        <h2 id="context-heading" className="text-xl font-semibold text-ink">
          Contexto Acadêmico
        </h2>
        {profile.about.map((paragraph, index) => (
          <p key={index} className="max-w-[65ch] text-base leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section aria-labelledby="heuristics-heading" className="space-y-6">
        <div>
          <h2 id="heuristics-heading" className="text-xl font-semibold text-ink">
            Aplicação das 10 Heurísticas de Nielsen
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
            Relação das heurísticas oficiais de usabilidade e os componentes onde cada uma foi
            implementada.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {heuristics.map((item) => (
            <Card key={item.number} className="p-6">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-semibold text-accent-text">
                  H{item.number}
                </span>
                <h3 className="text-base font-semibold text-ink">{item.name}</h3>
              </div>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
                {item.application}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}