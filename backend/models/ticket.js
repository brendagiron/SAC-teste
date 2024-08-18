const db = require('../config/db'); // Importa o módulo de configuração do banco de dados

// Define a classe Ticket para manipular tickets
class Ticket {
  // Método estático para criar um novo ticket
  static async create(userId, sectorId, subject, description) {
    const deadline = this.getDeadlineBySubject(subject); // Define o prazo com base no assunto

    // Executa uma consulta SQL para inserir um novo ticket na tabela 'tickets'
    const [result] = await db.execute(
      'INSERT INTO tickets (user_id, sector_id, subject, description, deadline) VALUES (?, ?, ?, ?, ?)', // Consulta SQL com placeholders para os valores
      [userId, sectorId, subject, description, deadline] // Valores a serem inseridos na consulta
    );
    return result.insertId; // Retorna o ID do ticket criado
  }

  // Método estático para atualizar o status de um ticket com um motivo de atraso
  static async updateStatusWithDelayReason(id, status, delayReason) {
    // Executa uma consulta SQL para atualizar o status e o motivo do atraso de um ticket
    await db.execute(
      'UPDATE tickets SET status = ?, delay_reason = ? WHERE id = ?', // Consulta SQL para atualização
      [status, delayReason, id] // Valores a serem atualizados
    );
  }

  // Método estático para obter o prazo de resposta com base no assunto do ticket
  static getDeadlineBySubject(subject) {
    // Define prazos específicos para diferentes assuntos
    const deadlines = {
      'Hardware': 7, // Prazo de 7 dias para assuntos de Hardware
      'Software': 3, // Prazo de 3 dias para assuntos de Software
      'Solicitação de Compra': 5 // Prazo de 5 dias para Solicitações de Compra
    };
    // Retorna o prazo correspondente ao assunto ou um prazo padrão de 3 dias se o assunto não estiver definido
    return deadlines[subject] || 3;
  }
}

module.exports = Ticket; // Exporta a classe Ticket para uso em outros módulos
