import { IAction, IState } from "./Interfaces";
import PomodoroConfig from "../Pomodoro.config";

export const initialState: IState = {
  concluidos: [],
  tempo: PomodoroConfig.tempoPomodoro,
  funcionando: false,
  descansando: false,
};

export function reducer(state: IState, action: IAction) {
  const { type, payload } = action;
  const { concluidos, tempo } = state;

  switch (type) {
    case "addConcluido":
      return { ...state, concluidos: [...concluidos, payload] };

    case "funcionando":
      return { ...state, funcionando: payload };

    case "tempo":
      return { ...state, tempo: tempo + payload };

    case "descansando":
      return { ...state, descansando: payload };

    default:
      return state;
  }
}
