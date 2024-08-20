const fs = require('fs');
const { Parser } = require('json2csv');
const db = require('../config/db'); // Importa o módulo de configuração do banco de dados

// Função para gerar relatório de indicadores
async function generateReport(req, res) {
  try {
    // Consulta SQL para obter dados dos chamados
    const [tickets] = await db.execute(`
      SELECT 
        deadline,
        completion_date,
        IF(completion_date <= deadline, 'On Time', 'Late') AS status
      FROM tickets
    `);

    // Calcula o total de chamados e o número de chamados atendidos no prazo
    const totalTickets = tickets.length;
    const onTimeTickets = tickets.filter(ticket => ticket.status === 'On Time').length;
    const percentageOnTime = totalTickets > 0 ? (onTimeTickets / totalTickets) * 100 : 0;

    // Prepara os dados para o CSV
    const csvData = tickets.map(ticket => ({
      deadline: ticket.deadline,
      completion_date: ticket.completion_date,
      status: ticket.status
    }));

    // Converte os dados em CSV
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(csvData);

    // Grava o CSV em um arquivo
    fs.writeFileSync('tickets_report.csv', csv);

    // Adiciona as métricas ao CSV
    const metrics = `\n\nTotal Tickets,${totalTickets}\nOn Time Tickets,${onTimeTickets}\nPercentage On Time,${percentageOnTime.toFixed(2)}%`;
    fs.appendFileSync('tickets_report.csv', metrics);

    // Envia o arquivo CSV para o cliente
    res.download('tickets_report.csv');
  } catch (error) {
    // Se ocorrer um erro, responde com o status 500 e uma mensagem de erro
    res.status(500).json({ message: 'Erro ao gerar o relatório.' });
  }
}

module.exports = {
    generateReport
  };
