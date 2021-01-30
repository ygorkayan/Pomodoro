import PomodoroConfig from "../Pomodoro.config";

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

export const initialState: IState = {
  concluidos: [],
  tempo: PomodoroConfig.tempoPomodoro,
  funcionando: false,
  descansando: false,
};
