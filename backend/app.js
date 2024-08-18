const express = require('express'); // Importa o módulo express para criar e gerenciar o servidor
const app = express(); // Cria uma instância do aplicativo Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Importa as rotas de tickets e relatórios
const ticketRoutes = require('./routes/ticketRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Usa o middleware para interpretar JSON em todas as requisições
app.use(express.json());

// Define que as rotas de tickets e relatórios estarão sob o caminho base '/api'
app.use('/api', ticketRoutes); // Adiciona as rotas de tickets ao caminho '/api'
app.use('/api', reportRoutes); // Adiciona as rotas de relatórios ao caminho '/api'

// Inicia o servidor na porta 3000 e exibe uma mensagem quando o servidor estiver em execução
app.listen(3000, () => {
  console.log('Server running on port 3000'); // Mensagem exibida no console quando o servidor estiver rodando
});

