import { useReducer, useEffect } from "react";
import { IUsePomodoro } from "./Interfaces";
import { initialState, reducer } from "./UseReducer";
import PomodoroConfig from "../Pomodoro.config";
import Actions from "./Action";

export default function UsePomodoro(): IUsePomodoro {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cronometro, addConcluido, funcionando, descansando } = Actions(
    dispatch
  );

  useEffect(() => {
    setTimeout(() => {
      if (!state.funcionando) return;
      if (state.tempo >= 1) return cronometro(-1);

      funcionando(false);

      if (state.descansando) {
        descansando(false);
        cronometro(PomodoroConfig.tempoPomodoro);
      } else {
        descansando(true);
        cronometro(PomodoroConfig.tempoPausa);
        addConcluido();
      }
    }, 1000);
  }, [state.tempo, state.funcionando]);

  return {
    tempo: state.tempo,
    concluidos: state.concluidos,
    descansando: state.descansando,
    iniciar: () => funcionando(true),
    parar: () => funcionando(false),
  };
}
