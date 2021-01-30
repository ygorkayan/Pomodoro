import { useReducer, useEffect, createContext } from "react";
import Reducer from "./Reducer";
import Actions from "./Action";
import { initialState } from "./Util";
import PomodoroConfig from "../Pomodoro.config";

export const PomodoroContext = createContext<any>({});

export function PomodoroProvider(props: any) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { tempo, concluido, funcionando, descansando } = Actions(dispatch);

  useEffect(() => {
    setTimeout(() => {
      if (!state.funcionando) return;
      if (state.tempo >= 1) return tempo(-1);

      funcionando(false);

      if (state.descansando) {
        descansando(false);
        tempo(PomodoroConfig.tempoPomodoro);
      } else {
        descansando(true);
        tempo(PomodoroConfig.tempoPausa);
        concluido();
      }
    }, 1000);
  }, [state.tempo, state.funcionando]);

  const Pomodoro = {
    tempo: state.tempo,
    concluidos: state.concluidos,
    descansando: state.descansando,
    iniciar: () => funcionando(true),
    parar: () => funcionando(false),
  };

  return (
    <PomodoroContext.Provider value={Pomodoro}>
      {props.children}
    </PomodoroContext.Provider>
  );
}
