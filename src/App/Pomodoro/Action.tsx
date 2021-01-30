import { IAction } from "./Util";

function action(type: string, payload: any): IAction {
  return { type, payload };
}

export default function Actions(dispatch: React.Dispatch<IAction>) {
  return {
    tempo(tempo: number) {
      dispatch(action("tempo", tempo));
    },
    concluido() {
      dispatch(action("concluido", { terminadoEm: Date.now() }));
    },
    funcionando(valor: boolean) {
      dispatch(action("funcionando", valor));
    },
    descansando(valor: boolean) {
      dispatch(action("descansando", valor));
    },
  };
}
