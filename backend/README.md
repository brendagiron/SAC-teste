# Backend

Este diretório contém o código-fonte do backend do projeto.

## Estrutura do Backend

### /controllers
- **Descrição**: Lógica de controle de aplicação
  - **ticketController.js**: Lógica para criar e gerenciar chamados
  - **evaluationController.js**: Lógica para avaliações de atendimento
  - **reportController.js**: Controladores para geração de relatórios

### /models
- **Descrição**: Modelos de dados
  - **ticket.js**: Modelo para tickets
  - **evaluation.js**: Modelo para avaliações

### /routes
- **Descrição**: Definição de rotas e endpoints
  - **ticketRoutes.js**: Rotas para tickets
  - **reportRoutes.js**: Rotas para relatórios (se realmente precisar)

### /config
- **Descrição**: Configurações do projeto
  - **db.js**: Configuração do banco de dados

### /utils
- **Descrição**: Funções utilitárias
  - **mailer.js**: Funções utilitárias para envio de e-mails

### Arquivos de Configuração
- **app.js**: Arquivo principal do servidor
- **package.json**: Dependências e scripts do backend
- **README.md**: Documentação do backend


## Instalação

Para instalar as dependências do backend, execute:

```bash
cd backend
npm install
npm install axios
npm install nodemailer
npm install json2csv
npm instal dotev
npm install mysql2
npm start