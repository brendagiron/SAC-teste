import axios from 'axios'; // Importa o módulo axios para fazer requisições HTTP
import { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect do React

// Função principal da página
export default function Home() {
  // Estados para armazenar chamados em aberto e finalizados
  const [openTickets, setOpenTickets] = useState([]); // Estado para armazenar chamados em aberto
  const [closedTickets, setClosedTickets] = useState([]); // Estado para armazenar chamados finalizados

  // Hook useEffect para buscar os chamados quando o componente é montado
  useEffect(() => {
    const fetchTickets = async () => {
      // Faz a requisição para buscar chamados do servidor
      const response = await axios.get('/api/tickets');
      const tickets = response.data; // Obtém os dados dos chamados da resposta
      // Filtra os chamados em aberto e finalizados
      setOpenTickets(tickets.filter(ticket => ticket.status === 'open')); // Atualiza o estado com chamados em aberto
      setClosedTickets(tickets.filter(ticket => ticket.status === 'closed')); // Atualiza o estado com chamados finalizados
    };

    fetchTickets(); // Chama a função para buscar os chamados
  }, []); // O array vazio garante que o useEffect execute apenas uma vez após a montagem do componente

  return (
    <div>
      <h1>Chamados</h1>
      <h2>Em Aberto</h2>
      <ul>
        {/* Lista chamados em aberto */}
        {openTickets.map(ticket => (
          <li key={ticket.id}>{ticket.subject} - {ticket.status}</li>
        ))}
      </ul>
      <h2>Finalizados</h2>
      <ul>
        {/* Lista chamados finalizados */}
        {closedTickets.map(ticket => (
          <li key={ticket.id}>{ticket.subject} - {ticket.status}</li>
        ))}
      </ul>
      <a href="/new-ticket">Abrir Novo Chamado</a> {/* Link para abrir um novo chamado */}
    </div>
  );
}
