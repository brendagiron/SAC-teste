const express = require('express'); // Importa o módulo express para criar e gerenciar o servidor
const app = express(); // Cria uma instância do aplicativo Express
require('dotenv').config();// Carrega variáveis de ambiente do arquivo .env

// Importa as rotas de tickets e relatórios
const ticketRoutes = require('./routes/ticketRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Define que as rotas de tickets e relatórios estarão sob o caminho base '/api'
app.use('/api/tickets', ticketRoutes); // Adiciona as rotas de tickets ao caminho '/api'
app.use('/api/reports', reportRoutes); // Adiciona as rotas de relatórios ao caminho '/api'

// Define uma rota para o caminho raiz que fornece uma mensagem de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao SAC. Use a rota /api/tickets para criar um novo chamado.');
  });

// Inicia o servidor na porta 5000 e exibe uma mensagem quando o servidor estiver em execução
/*const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/

const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
