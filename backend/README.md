# Backend

Este diretório contém o código-fonte do backend do projeto.

# Estrutura do Backend

backend/
│
├── /controllers
│   ├── ticketController.js         # Lógica para criar e gerenciar chamados
│   └── evaluationController.js     # Lógica para avaliações de atendimento
│   └── reportController.js     # Controladores para geração de relatórios
|
├── /models
│   ├── ticket.js                   # Modelo para tickets
│   └── evaluation.js               # Modelo para avaliações
│
├── /routes
│   ├── ticketRoutes.js             # Rotas para tickets
│   └── reportRoutes.js             # Rotas para relatórios (se necessário)
│
├── /config
│   └── db.js                       # Configuração do banco de dados
│
├── /utils
│   └── mailer.js                    # Funções utilitárias para envio de e-mails
│
├── app.js                          # Arquivo principal do servidor
├── package.json # Dependências e scripts do backend
└── README.md # Documentação do backend


## Instalação

Para instalar as dependências do backend, execute:

```bash
cd backend
npm install


npm run dev: Executa o backend em modo de desenvolvimento.
npm run start: Executa o backend em modo de produção.