export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  concluidos: Record<string, number>[];
  tempo: number;
  funcionando: boolean;
  descansando: boolean;
}

export interface IUsePomodoro {
  tempo: number;
  concluidos: Record<string, number>[];
  descansando: boolean;
  iniciar: () => void;
  parar: () => void;
}
