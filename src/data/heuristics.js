export const heuristics = [
  {
    number: 1,
    name: 'Visibilidade do status do sistema',
    application:
      'O menu principal marca a rota atual com destaque visual e aria-current="page" (Header), os filtros sinalizam a opção selecionada via aria-pressed (ProjectFilters) e o botão de tema informa o estado ativo (ThemeToggle).',
  },
  {
    number: 2,
    name: 'Correspondência entre o sistema e o mundo real',
    application:
      'Rótulos e caminhos de URL em português direto (Início, Projetos, Vídeos, Apresentações, Sobre), organizados em linguagem clara e familiar.',
  },
  {
    number: 3,
    name: 'Controle e liberdade do usuário',
    application:
      'Navegação livre entre páginas pelo menu e histórico do navegador, fechamento de modais via botão, clique fora ou tecla ESC (Modal) e botão para limpar filtros aplicados (Projects).',
  },
  {
    number: 4,
    name: 'Consistência e padrões',
    application:
      'Variáveis CSS centralizadas em index.css, estrutura uniforme de cabeçalho e rodapé via MainLayout e componentes reutilizáveis (Button, Card, PageHeader).',
  },
  {
    number: 5,
    name: 'Prevenção de erros',
    application:
      'Botões de links externos, vídeos e downloads só são renderizados quando o endereço ou arquivo existe nos dados (ProjectCard, VideoCard, PresentationCard), além de fallback visual caso uma imagem falhe ao carregar.',
  },
  {
    number: 6,
    name: 'Reconhecimento em vez de memorização',
    application:
      'Navegação sempre visível no topo (Header), trilha indicando o caminho atual (Breadcrumbs) e cabeçalhos explicativos em cada página (PageHeader).',
  },
  {
    number: 7,
    name: 'Flexibilidade e eficiência de uso',
    application:
      'Atalho "Pular para o conteúdo principal" (MainLayout), gerenciamento de foco por teclado em rotas e modais (MainLayout, Modal) e busca combinada com filtro por categoria (ProjectFilters).',
  },
  {
    number: 8,
    name: 'Estética e design minimalista',
    application:
      'Espaçamento baseado na grade de 4px do Tailwind, largura máxima de leitura de 65ch, paleta neutra com apenas uma cor de destaque e ausência de ornamentos visuais.',
  },
  {
    number: 9,
    name: 'Ajudar o usuário a reconhecer, diagnosticar e corrigir erros',
    application:
      'Rota curinga que exibe uma página 404 explicativa com atalhos de retorno para rotas válidas (NotFound) e mensagem clara quando uma busca não encontra resultados (Projects).',
  },
  {
    number: 10,
    name: 'Ajuda e documentação',
    application:
      'Página Sobre documentando o contexto acadêmico e cada heurística aplicada (About), além de avisos claros quando uma seção ainda não possui itens cadastrados (EmptyState).',
  },
];