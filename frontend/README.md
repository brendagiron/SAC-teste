# Frontend

Este diretório contém o código-fonte do frontend do projeto.

## Estrutura do Frontend

### /public
- **Descrição**: Arquivos estáticos, como imagens

### /pages
- **Descrição**: Páginas feitas com Next.js
  - **index.js**: Página inicial, exibe chamados
  - **new-ticket.js**: Página para abrir um novo chamado
  - **evaluate-ticket.js**: Página para avaliar um chamado
  - **api/**: Página para API interna (se tiver)

### /components
- **Descrição**: Componentes React reutilizáveis

### /styles
- **Descrição**: Arquivos de estilo

### /utils
- **Descrição**: Funções utilitárias, como helpers

### /hooks
- **Descrição**: Hooks personalizados

### /services
- **Descrição**: Serviços para consumir APIs, etc.

### Arquivos de Configuração
- **package.json**: Dependências e scripts do frontend
- **next.config.js**: Configurações do Next.js
- **README.md**: Documentação do projeto



## Instalação

Para instalar as dependências do frontend, execute:


```bash
cd frontend
npm install
npm install axios
npm run dev
