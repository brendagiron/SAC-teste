const db = require('../config/db'); // Importa o módulo de configuração do banco de dados

// Define a classe Evaluation para manipular avaliações
class Evaluation {
  // Método estático para criar uma nova avaliação
  static async create(ticketId, rating, comment) {
    // Executa uma consulta SQL para inserir uma nova avaliação na tabela 'evaluations'
    await db.execute(
      'INSERT INTO evaluations (ticket_id, rating, comment) VALUES (?, ?, ?)', // Consulta SQL com placeholders para os valores
      [ticketId, rating, comment] // Valores a serem inseridos na consulta
    );
  }
}

// Exporta a classe Evaluation para uso em outros módulos
module.exports = Evaluation;
