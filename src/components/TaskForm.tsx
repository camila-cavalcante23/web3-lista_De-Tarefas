import React, { useState } from 'react';
import { Task } from '../models/Task';

interface TaskFormProps {
  adicionarTarefa: (tarefa: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ adicionarTarefa }) => {
  const [texto, setTexto] = useState('');
  const [prazo, setPrazo] = useState('');
  const [prioridade, setPrioridade] = useState<'alta' | 'média' | 'baixa'>('média');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!texto || !prazo) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const novaTarefa: Task = {
      id: Date.now(),
      texto,
      prazo,
      prioridade,
      concluída: false,
    };
    adicionarTarefa(novaTarefa);
    setTexto('');
    setPrazo('');
    setPrioridade('média');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova Tarefa"
      />
      <input
        type="date"
        value={prazo}
        onChange={(e) => setPrazo(e.target.value)}
      />
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value as 'alta' | 'média' | 'baixa')}
      >
        <option value="alta">Alta</option>
        <option value="média">Média</option>
        <option value="baixa">Baixa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
