import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './models/Task';
import './App.css';

const App: React.FC = () => {
  const [tarefas, setTarefas] = useState<Task[]>(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (tarefa: Task) => {
    setTarefas([...tarefas, tarefa]);
  };

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const atualizarTarefa = (tarefaAtualizada: Task) => {
    setTarefas(tarefas.map(tarefa => (tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa)));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm adicionarTarefa={adicionarTarefa} />
      <TaskList tarefas={tarefas} removerTarefa={removerTarefa} atualizarTarefa={atualizarTarefa} />
    </div>
  );
};

export default App;
