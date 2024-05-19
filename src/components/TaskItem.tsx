import React from 'react';
import { Task } from '../models/Task';

interface TaskItemProps {
  tarefa: Task;
  removerTarefa: (id: number) => void;
  atualizarTarefa: (tarefa: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ tarefa, removerTarefa, atualizarTarefa }) => {
  const alternarConclusao = () => {
    atualizarTarefa({ ...tarefa, concluída: !tarefa.concluída });
  };

  return (
    <li>
      <span style={{ textDecoration: tarefa.concluída ? 'line-through' : 'none' }}>
        {tarefa.texto} - {tarefa.prazo} - {tarefa.prioridade}
      </span>
      <button className="complete" onClick={alternarConclusao}>
        {tarefa.concluída ? 'Desmarcar' : 'Concluída'}
      </button>
      <button className="remove" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </li>
  );
};

export default TaskItem;
