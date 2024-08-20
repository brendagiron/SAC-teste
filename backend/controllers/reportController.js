const fs = require('fs'); // Importa o módulo fs para manipulação de arquivos
const { Parser } = require('json2csv'); // Importa a classe Parser do módulo json2csv para converter JSON para CSV
const Ticket = require('../models/ticket'); // Importa o modelo Ticket para manipular tickets

// Função para gerar um relatório em CSV dos tickets
async function generateReport(req, res) {
  try {
    // Obtém todos os tickets do banco de dados
    const tickets = await Ticket.findAll();
    // Cria uma instância do parser para converter JSON para CSV
    const json2csvParser = new Parser();
    // Converte a lista de tickets em formato CSV
    const csv = json2csvParser.parse(tickets);

    // Grava o CSV gerado em um arquivo chamado 'tickets_report.csv'
    fs.writeFileSync('tickets_report.csv', csv);
    // Envia o arquivo 'tickets_report.csv' como um download para o cliente
    res.download('tickets_report.csv');
  } catch (error) {
    // Se ocorrer um erro, responde com o status 500 e uma mensagem de erro
    res.status(500).json({ message: 'Erro ao gerar o relatório.' });
  }
};

module.exports = {
    generateReport
  };
