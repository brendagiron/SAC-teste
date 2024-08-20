const Evaluation = require('../models/evaluation'); // Importa o modelo Evaluation para manipular avaliações

// Função para criar uma nova avaliação para um ticket
async function createEvaluation(req, res) {
  const { ticketId, rating, comment } = req.body; // Extrai os dados do corpo da requisição: ID do ticket, nota e comentário
  try {
    // Chama o método create do modelo Evaluation para registrar a avaliação
    await Evaluation.create(ticketId, rating, comment);
    // Responde com o status 201 (Criado) e uma mensagem de sucesso
    res.status(201).json({ message: 'Avaliação registrada com sucesso.' });
  } catch (error) {
    // Se ocorrer um erro, responde com o status 500 (Erro interno do servidor) e uma mensagem de erro
    res.status(500).json({ message: 'Erro ao registrar avaliação.' });
  }
};

module.exports = createEvaluation;

