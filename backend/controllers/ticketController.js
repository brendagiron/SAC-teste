const Ticket = require('../models/ticket'); // Importa o modelo Ticket para manipular tickets
const mailer = require('../utils/mailer'); // Importa o módulo mailer


// Função para criar um ticket e enviar um e-mail de notificação
async function createTicket(req, res) {
  const { userId, sectorId, subject, description } = req.body; // Extrai os dados do corpo da requisição
  try {
    // Cria um novo ticket e obtém o ID do ticket criado
    const ticketId = await Ticket.create(userId, sectorId, subject, description);
    // Obtém o e-mail do setor para notificação
    const sectorEmail = getSectorEmail(sectorId);

    // Envia um e-mail para o setor informando sobre o novo ticket
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Remetente do e-mail
      to: sectorEmail, // Destinatário do e-mail
      subject: 'Novo Chamado Recebido', // Assunto do e-mail
      text: `Novo chamado foi criado com ID ${ticketId}. Assunto: ${subject}. Descrição: ${description}.` // Corpo do e-mail
    });

    // Responde com o status 201 (Criado) e o ID do ticket
    res.status(201).json({ id: ticketId });
  } catch (error) {
    // Registra o erro detalhado no console para ajudar no diagnóstico
    console.error('Error creating ticket:', error);
    // Se ocorrer um erro, responde com o status 500 e uma mensagem de erro
    res.status(500).json({ message: 'Error creating ticket' });
  }
};

// Função para atualizar o status de um ticket com um motivo de atraso
async function updateTicketStatusWithDelay(req, res) {
  const { ticketId, status, delayReason } = req.body; // Extrai os dados do corpo da requisição
  try {
    // Atualiza o status do ticket com o motivo do atraso
    await Ticket.updateStatusWithDelayReason(ticketId, status, delayReason);
    // Responde com o status 200 (OK) e uma mensagem de sucesso
    res.status(200).json({ message: 'Status atualizado com sucesso.' });
  } catch (error) {
    // Se ocorrer um erro, responde com o status 500 e uma mensagem de erro
    res.status(500).json({ message: 'Erro ao atualizar o status do chamado.' });
  }
};

// Função para reabrir um ticket
async function reopenTicket(req, res) {
    const { ticketId } = req.body;
    try {
      const updated = await Ticket.updateStatus(ticketId, 'reaberto'); // 'reaberto' deve ser um status válido no seu sistema
      if (updated) {
        // Se necessário, envie um e-mail notificando a reabertura
        const sectorEmail = mailer.sectorEmails[sectorId] || 'default@example.com'; // Assumindo que você tenha o sectorId no req.body ou de outra forma
        await mailer.sendMail({
          from: process.env.EMAIL_USER,
          to: sectorEmail,
          subject: 'Chamado Reaberto',
          text: `O chamado com ID ${ticketId} foi reaberto.`
        });
        res.status(200).json({ message: 'Chamado reaberto com sucesso.' });
      } else {
        res.status(404).json({ message: 'Chamado não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao reabrir o chamado.' });
    }
  }

// Função para obter o e-mail do setor com base no ID do setor
function getSectorEmail(sectorId) {
    // Retorna o e-mail correspondente ao ID do setor ou um e-mail padrão se o ID não for encontrado
    return sectorEmails[sectorId] || 'default@example.com';
}

// Exporta as funções
module.exports = {
    createTicket,
    updateTicketStatusWithDelay,
    reopenTicket,
    getSectorEmail
  };
