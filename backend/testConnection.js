// testConnection.js
const db = require('./config/db');

// Crie uma consulta simples para verificar a conexão
db.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Erro ao executar a consulta:', err);
    return;
  }
  console.log('Resultado da consulta:', results);
});
