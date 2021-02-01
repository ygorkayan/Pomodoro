import { useState, createContext } from "react";

export const PomodoroConfigContext = createContext<any>({});

export function PomodoroConfigProvider(props: any) {
  const [configTempo, setConfigTempo] = useState(30);
  const [configQtdPomodoro, setConfigQtdPomodoro] = useState(4);
  const [configPausaCurta, setConfigPausaCurta] = useState(5);
  const [configPausaLonga, setConfigPausaLonga] = useState(10);

  const Provider = {
    configTempo: { get: configTempo, set: setConfigTempo },
    configQtdPomodoro: { get: configQtdPomodoro, set: setConfigQtdPomodoro },
    configPausaCurta: { get: configPausaCurta, set: setConfigPausaCurta },
    configPausaLonga: { get: configPausaLonga, set: setConfigPausaLonga },
  };

  return (
    <PomodoroConfigContext.Provider value={Provider}>
      {props.children}
    </PomodoroConfigContext.Provider>
  );
}
