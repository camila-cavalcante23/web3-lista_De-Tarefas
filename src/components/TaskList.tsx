import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Task } from '../models/Task';

interface TaskListProps {
  tarefas: Task[];
  removerTarefa: (id: number) => void;
  atualizarTarefa: (tarefa: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tarefas, removerTarefa, atualizarTarefa }) => {
  const [filtro, setFiltro] = useState<'todas' | 'concluídas' | 'pendentes'>('todas');
  const [mostrarInstrucoes, setMostrarInstrucoes] = useState(false);

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'concluídas') return tarefa.concluída;
    if (filtro === 'pendentes') return !tarefa.concluída;
    return true;
  });

  const alternarInstrucoes = () => {
    setMostrarInstrucoes(!mostrarInstrucoes);
  };

  return (
    <div>
      <div>
        <button className="filter filter-all" onClick={() => setFiltro('todas')}>Todas</button>
        <button className="filter filter-completed" onClick={() => setFiltro('concluídas')}>Concluídas</button>
        <button className="filter filter-pending" onClick={() => setFiltro('pendentes')}>Pendentes</button>
        <button className="instructions" onClick={alternarInstrucoes}>Instruções</button>
      </div>
      {mostrarInstrucoes && (
        <div className="instructions-container">
          <h2>Inserir Tarefas:</h2>
          <p>
            - Abra o aplicativo de lista de tarefas. <br />
            - Na seção de entrada de tarefas, insira a descrição da tarefa. <br />
            - Selecione ou digite a data para a tarefa, se aplicável. <br />
            - Defina a prioridade da tarefa como alta, média ou baixa. <br />
            - Clique no botão "Adicionar" para inserir a tarefa na lista.
          </p>
          
          <h2>Gerenciar Tarefas:</h2>
          <p>
            - Após adicionar suas tarefas, você pode visualizá-las em diferentes categorias. <br />
            - Clique no botão "Todas" para ver todas as tarefas. <br />
            - Clique no botão "Completas" para ver as tarefas marcadas como completas. <br />
            - Clique no botão "Pendentes" para ver as tarefas que ainda não foram concluídas.
          </p>
          
          <h2>Remover Tarefas:</h2>
          <p>
            - Para remover uma tarefa, localize-a na lista. <br />
            - Clique no botão "Remover" próximo à tarefa que deseja excluir. <br />
            - A tarefa será removida permanentemente da lista.
          </p>
        </div>
      )}
      <ul>
        {tarefasFiltradas.map(tarefa => (
          <TaskItem
            key={tarefa.id}
            tarefa={tarefa}
            removerTarefa={removerTarefa}
            atualizarTarefa={atualizarTarefa}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
