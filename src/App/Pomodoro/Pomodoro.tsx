import { useEffect, createContext, useState, useContext } from "react";
import { PomodoroConfigContext } from "./ConfigPomodoro";

export const PomodoroContext = createContext<any>({});

export function PomodoroProvider(props: any) {
  const {
    configQtdPomodoro,
    configTempo,
    configPausaLonga,
    configPausaCurta,
  } = useContext(PomodoroConfigContext);

  const [tempo, setTempo] = useState(configTempo.get * 60);
  const [concluidos, setConcluidos] = useState<number[]>([]);
  const [funcionando, setFuncionando] = useState(false);
  const [descansando, setDescansando] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!funcionando) return;
      if (tempo >= 1) return setTempo(tempo - 1);

      setFuncionando(false);

      if (descansando) {
        setDescansando(false);
        setTempo(configTempo.get * 60);
      } else {
        setDescansando(true);
        setConcluidos([...concluidos, Date.now()]);

        if ((concluidos.length + 1) % configQtdPomodoro.get === 0) {
          setTempo(configPausaLonga.get * 60);
        } else {
          setTempo(configPausaCurta.get * 60);
        }
      }
    }, 1000);
  }, [tempo, funcionando]);

  const Provider = {
    tempo: tempo,
    concluidos: concluidos,
    descansando: descansando,
    iniciar: () => setFuncionando(true),
    parar: () => setFuncionando(false),
  };

  return (
    <PomodoroContext.Provider value={Provider}>
      {props.children}
    </PomodoroContext.Provider>
  );
}
