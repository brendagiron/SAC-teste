const express = require('express'); // Importa o módulo express para criar e gerenciar rotas
const router = express.Router(); // Cria um roteador para definir rotas específicas
const reportController = require('../controllers/reportController'); // Importa o controlador de relatórios

// Define a rota para gerar um relatório de tickets
router.get('/reports/tickets', reportController.generateReport);

// Exporta o roteador para uso em outros módulos
module.exports = router;
