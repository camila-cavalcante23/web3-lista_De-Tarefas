export interface Task {
    id: number;
    texto: string;
    prazo: string;
    prioridade: 'alta' | 'média' | 'baixa';
    concluída: boolean;
  }
  