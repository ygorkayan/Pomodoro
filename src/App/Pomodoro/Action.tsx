import { IAction } from "./Interfaces";

export default function Actions(dispatch: React.Dispatch<IAction>) {
  return {
    addConcluido() {
      dispatch({ type: "addConcluido", payload: { terminadoEm: Date.now() } });
    },
    cronometro(tempo: number) {
      dispatch({ type: "tempo", payload: tempo });
    },
    funcionando(value: boolean) {
      dispatch({ type: "funcionando", payload: value });
    },
    descansando(valor: boolean) {
      dispatch({ type: "descansando", payload: valor });
    },
  };
}
