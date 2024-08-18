const express = require('express'); // Importa o módulo express para criar e gerenciar rotas
const router = express.Router(); // Cria um roteador para definir rotas específicas
const ticketController = require('../controllers/ticketController'); // Importa o controlador de tickets

// Define a rota para criar um novo ticket
router.post('/tickets', ticketController.createTicket);

// Define a rota para atualizar o status de um ticket com motivo de atraso
router.post('/tickets/status-with-delay', ticketController.updateTicketStatusWithDelay);

// Define a rota para reabrir um ticket
router.post('/tickets/reopen', ticketController.reopenTicket);

// Exporta o roteador para uso em outros módulos
module.exports = router;

