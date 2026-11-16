# Portfólio Profissional & Acadêmico — Eduardo Costa

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.28.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.21.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

<p align="center">
  Aplicação web moderna desenvolvida para a <strong>Produção de Aprendizagem Significativa (PAS)</strong> da disciplina <strong>Programação WEB Front-End</strong> no curso de <strong>Análise e Desenvolvimento de Sistemas</strong>.
</p>

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo consolidar a presença profissional e acadêmica na web através de um portfólio completo, interativo e acessível. A aplicação foi construída com foco em **Interação Humano-Computador (IHC)**, aplicando boas práticas de usabilidade, design responsivo, acessibilidade e arquitetura desacoplada em componentes reutilizáveis.

### 🎯 Atendimento aos Requisitos da PAS

1. **Apresentação de Projetos:** Catálogo com filtros interativos por tecnologia e categoria, pesquisa em tempo real, links diretos para repositórios no GitHub e aplicações em produção.
2. **Apresentações Acadêmicas (PPTs / PDFs):** Seção dedicada à disponibilização de apresentações acadêmicas com suporte a download direto do arquivo oficial `.pptx` e visualizador embutido para documentos `.pdf`.
3. **Vídeos de Demonstração:** Galeria com player modal responsivo integrado à API do YouTube, permitindo a reprodução fluida das gravações e demonstrações.
4. **Aplicação das 10 Heurísticas de Usabilidade de Nielsen (IHC):** Seção institucional documentando a correspondência prática de cada princípio de usabilidade na interface do portfólio.
5. **Alternância de Tema (Dark / Light Mode):** Sistema dinâmico de cores com preferência persistida via `localStorage` e suporte nativo às preferências do sistema operacional.
6. **Acessibilidade & Usabilidade (a11y):** Atalho *Skip to Content* ("Pular para o conteúdo principal"), navegação acessível por teclado (foco e tecla `ESC` em modais), estados `aria-*` informativos e trilha de navegação (*Breadcrumbs*).

---

## 🚀 Tecnologias Utilizadas

- **[React 18.3.1](https://react.dev/):** Biblioteca para interfaces declarativas, componentizadas e reativas.
- **[Vite 6.2.0](https://vitejs.dev/):** Ferramenta de build de última geração com Fast Refresh instantâneo.
- **[Tailwind CSS 4.0.9](https://tailwindcss.com/):** Framework utilitário de estilização moderna com suporte a temas e design system consistente.
- **[React Router DOM 6.28.0](https://reactrouter.com/):** Roteamento client-side com layouts aninhados e rotas protegidas/curinga (404).
- **[React Icons 5.3.0](https://react-icons.github.io/react-icons/):** Biblioteca de ícones SVG otimizados e acessíveis (Feather Icons).
- **[ESLint 9.21.0](https://eslint.org/):** Análise estática de código garantindo boas práticas de código e hooks no React.

---

## 📁 Estrutura do Projeto

O projeto adota uma arquitetura limpa com separação rigorosa entre dados estáticos, regras de negócio/hooks, layouts e componentes de interface:

```text
portfolio/
├── public/
│   ├── apresentacoes/          # Documentos para download (.pptx) e visualização (.pdf)
│   └── img/                    # Capturas de tela e assets dos projetos
├── src/
│   ├── components/             # Componentes reutilizáveis organizados por domínio
│   │   ├── layout/             # Header, Footer, Breadcrumbs, ThemeToggle
│   │   ├── presentations/      # PresentationCard, PresentationViewer
│   │   ├── projects/           # ProjectCard, ProjectFilters
│   │   ├── ui/                 # Button, Card, Badge, Modal, EmptyState, PageHeader
│   │   └── videos/             # VideoCard, VideoModal
│   ├── data/                   # Conteúdo desacoplado da interface
│   │   ├── heuristics.js       # As 10 Heurísticas de Nielsen detalhadas
│   │   ├── presentations.js    # Metadados e links das apresentações
│   │   ├── profile.js          # Informações biográficas e links sociais
│   │   ├── projects.js         # Informações do catálogo de projetos
│   │   └── videos.js           # IDs e metadados dos vídeos do YouTube
│   ├── hooks/                  # Hooks customizados (useTheme, useDocumentTitle)
│   ├── layouts/                # Layout mestre (MainLayout) com skip-link e acessibilidade
│   ├── pages/                  # Páginas principais da aplicação
│   │   ├── About.jsx           # Contexto acadêmico e relatório de IHC
│   │   ├── Home.jsx            # Página inicial e destaque profissional
│   │   ├── NotFound.jsx        # Página de erro 404 personalizada
│   │   ├── Presentations.jsx   # Listagem e download de apresentações
│   │   ├── Projects.jsx        # Catálogo interativo de projetos com busca e filtros
│   │   └── Videos.jsx          # Demonstrações em vídeo com modal interativo
│   ├── App.jsx                 # Configuração de rotas da aplicação
│   ├── index.css               # Tema Tailwind CSS e tokens de design
│   └── main.jsx                # Ponto de entrada da aplicação React
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Instruções para Avaliação / Execução Local

### Pré-requisitos
- **Node.js** (versão 18.x ou superior recomendada)
- Gerenciador de pacotes **npm** (incluso com o Node.js)

### 1. Clonar o repositório
```bash
git clone https://github.com/EduCosta-Dev/Portifolio.git
cd Portifolio
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o ambiente de desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em: **`http://localhost:5173`**

### 4. Compilar para produção (Build)
```bash
npm run build
```
Os arquivos otimizados e prontos para deploy estático serão gerados no diretório `dist/`.

### 5. Executar análise estática (Linter)
```bash
npm run lint
```

---

## 🎨 Princípios de IHC Aplicados (Jakob Nielsen)

| # | Heurística | Aplicação no Sistema |
|---|---|---|
| **1** | **Status do Sistema** | Rota ativa destacada visualmente e via `aria-current="page"`, botão de alternância de tema informando modo ativo. |
| **2** | **Correspondência com o Mundo Real** | Vocabulário familiar em português (Início, Projetos, Vídeos, Apresentações, Sobre), ícones reconhecíveis. |
| **3** | **Controle e Liberdade** | Navegação fluida sem becos sem saída, fechamento de modais por botão, clique externo ou tecla `ESC`. |
| **4** | **Consistência e Padrões** | Tokens semânticos unificados via Tailwind CSS, espaçamentos padronizados e componentes de UI reaproveitáveis. |
| **5** | **Prevenção de Erros** | Desabilitação/ocultação inteligente de botões para links ou arquivos ausentes, evitando links quebrados. |
| **6** | **Reconhecimento em vez de Memorização** | Cabeçalho e navegação persistentes, trilhas (*breadcrumbs*) e cabeçalhos contextuais em todas as rotas. |
| **7** | **Flexibilidade e Eficiência** | Atalho acessível *"Pular para o conteúdo principal"*, atalhos de teclado e busca combinada com filtros. |
| **8** | **Design Estético e Minimalista** | Tipografia balanceada (largura de leitura limitada a 65ch), hierarquia visual clara e ausência de ruídos gráficos. |
| **9** | **Recuperação de Erros** | Página 404 personalizada sugerindo rotas válidas e estado vazio informativo quando buscas não encontram resultados. |
| **10** | **Ajuda e Documentação** | Página "Sobre" com documentação completa das heurísticas e contexto pedagógico da aplicação. |

---

## 👤 Autor

**Eduardo Costa**  
Estudante de Análise e Desenvolvimento de Sistemas — 2º Período  

- **GitHub:** [@EduCosta-Dev](https://github.com/EduCosta-Dev)  
- **LinkedIn:** [Eduardo Costa](https://www.linkedin.com/in/eduardo-costa-095124371/)
