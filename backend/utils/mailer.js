// /utils/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

// Configuração do transportador de e-mail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// /config/emailConfig.js
const sectorEmails = {
    1: 'tech-support@example.com',
    2: 'dev-team@example.com',
    3: 'admin@example.com'
  };

// Função para enviar e-mail
async function sendMail(options) {
  try {
    await transporter.sendMail(options);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Propaga o erro para que o controlador possa lidar com ele
  }
}
  
module.exports = {
  sendMail,
  sectorEmails
};
