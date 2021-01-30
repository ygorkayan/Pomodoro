import { IAction, IState } from "./Util";

export default function Reducer(state: IState, action: IAction) {
  const { type, payload } = action;
  const { concluidos, tempo } = state;

  switch (type) {
    case "tempo":
      return { ...state, tempo: tempo + payload };

    case "concluido":
      return { ...state, concluidos: [...concluidos, payload] };

    case "funcionando":
      return { ...state, funcionando: payload };

    case "descansando":
      return { ...state, descansando: payload };

    default:
      return state;
  }
}
