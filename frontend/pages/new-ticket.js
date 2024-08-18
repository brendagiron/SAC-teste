import axios from 'axios'; // Importa o módulo axios para fazer requisições HTTP
import { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect do React

// Função para criar um novo chamado
export default function NewTicket() {
  // Estados para gerenciar setores, opções de assunto e dados do chamado
  const [sectors, setSectors] = useState([]); // Estado para armazenar setores disponíveis
  const [selectedSector, setSelectedSector] = useState(''); // Estado para o setor selecionado
  const [subjectOptions, setSubjectOptions] = useState([]); // Estado para opções de assunto baseadas no setor selecionado
  const [subject, setSubject] = useState(''); // Estado para o assunto selecionado
  const [description, setDescription] = useState(''); // Estado para a descrição do chamado

  // UseEffect para buscar setores disponíveis quando o componente é montado
  useEffect(() => {
    const fetchSectors = async () => {
      const response = await axios.get('/api/sectors'); // Faz a requisição para buscar setores
      setSectors(response.data); // Atualiza o estado com a lista de setores
    };

    fetchSectors(); // Chama a função para buscar setores
  }, []); // O array vazio garante que o useEffect execute apenas uma vez após a montagem do componente

  // UseEffect para atualizar opções de assunto baseado no setor selecionado
  useEffect(() => {
    if (selectedSector) {
      const fetchSubjectOptions = async () => {
        const response = await axios.get(`/api/subjects?sector=${selectedSector}`); // Faz a requisição para buscar opções de assunto para o setor selecionado
        setSubjectOptions(response.data); // Atualiza o estado com as opções de assunto
      };

      fetchSubjectOptions(); // Chama a função para buscar opções de assunto
    }
  }, [selectedSector]); // O useEffect é executado sempre que o selectedSector é atualizado

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    await axios.post('/api/tickets', {
      sectorId: selectedSector, // Envia o setor selecionado
      subject, // Envia o assunto selecionado
      description // Envia a descrição do chamado
    });
    // Redirecionar ou exibir mensagem de sucesso pode ser adicionado aqui
  };

  // Renderiza o formulário para criar um novo chamado
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Setor:</label>
        <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
          {/* Lista de setores disponíveis */}
          {sectors.map(sector => (
            <option key={sector.id} value={sector.id}>{sector.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Assunto:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {/* Lista de opções de assunto baseadas no setor selecionado */}
          {subjectOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Descrição:</label>
        {/* Campo para a descrição do chamado */}
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      {/* Botão para submeter o formulário */}
      <button type="submit">Abrir Chamado</button>
    </form>
  );
}

