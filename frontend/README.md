# Frontend

Este diretório contém o código-fonte do frontend do projeto.

# Estrutura do Frontend

frontend/
│
├── /public
│   └── (arquivos estáticos, como imagens)
│
├── /pages
│   ├── index.js                  # Página inicial, exibe chamados
│   ├── new-ticket.js             # Página para abrir um novo chamado
│   ├── evaluate-ticket.js        # Página para avaliar um chamado
│   └── api
│   └── (opcional, para API interna)
│
├── /components 
│   └── (componentes React reutilizáveis)
│
├── /styles   
│   └── (arquivos de estilo, como CSS ou SCSS)
│   │
├── /utils 
│   └── (funções utilitárias, como helpers)
│   
├── /hooks 
│   └── (hooks personalizados, se houver)
│   
├── /services
│   └── (Serviços para consumir APIs, etc.)
│
|
├── package.json # Dependências e scripts do frontend  FALTA O LOCK
├── next.config.js # Configurações do Next.js
└── README.md # Documentação do projeto




## Instalação

Para instalar as dependências do frontend, execute:


```bash
cd frontend
npm install
npm install axios
npm run dev
