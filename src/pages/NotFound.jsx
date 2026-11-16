import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  useDocumentTitle('Página não encontrada');

  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex flex-col items-start rounded-lg border border-border bg-surface p-8"
    >
      <span className="font-mono text-sm font-medium text-error">Erro 404</span>
      <h1 id="not-found-heading" className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-ink-muted">
        O endereço acessado não existe ou foi movido. Utilize os links abaixo para retornar a uma
        seção válida do portfólio.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button as="link" to="/" variant="primary">
          Voltar para o início
        </Button>
        <Button as="link" to="/projetos" variant="secondary">
          Ver projetos
        </Button>
      </div>
    </section>
  );
}