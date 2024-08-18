import axios from 'axios'; // Importa o módulo axios para fazer requisições HTTP
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado

// Componente funcional para avaliar um chamado
export default function EvaluateTicket() {
  // Declara e inicializa os estados para o ID do chamado, nota e comentário
  const [ticketId, setTicketId] = useState(''); // Estado para armazenar o ID do chamado
  const [rating, setRating] = useState(1); // Estado para armazenar a nota, inicializado em 1
  const [comment, setComment] = useState(''); // Estado para armazenar o comentário

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    // Envia uma requisição POST para o endpoint '/api/evaluations' com os dados do formulário
    await axios.post('/api/evaluations', {
      ticketId,
      rating,
      comment
    });
  };

  // Renderiza o formulário para avaliar um chamado
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID do Chamado:</label>
        {/* Campo para inserir o ID do chamado */}
        <input 
          type="text" 
          value={ticketId} 
          onChange={(e) => setTicketId(e.target.value)} // Atualiza o estado ticketId com o valor inserido
        />
      </div>
      <div>
        <label>Nota (1 a 5):</label>
        {/* Campo para inserir a nota (de 1 a 5) */}
        <input 
          type="number" 
          min="1" 
          max="5" 
          value={rating} 
          onChange={(e) => setRating(e.target.value)} // Atualiza o estado rating com o valor inserido
        />
      </div>
      <div>
        <label>Comentário:</label>
        {/* Campo para inserir o comentário */}
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} // Atualiza o estado comment com o valor inserido
        />
      </div>
      {/* Botão para submeter o formulário */}
      <button type="submit">Avaliar</button>
    </form>
  );
}
