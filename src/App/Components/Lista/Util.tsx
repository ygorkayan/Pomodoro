import { PomodoroConcluido } from "./Style";

export function exibirPomodoros(pomodoros: number[]) {
  return pomodoros.map((unixepoca, indice) => (
    <PomodoroConcluido key={indice}>
      {indice + 1}º Pomodoro: {unixEpocaParaData(unixepoca)}
    </PomodoroConcluido>
  ));
}

function unixEpocaParaData(unixepoca: number) {
  const data = new Date(unixepoca);
  const hora = data.getHours();
  const minuto = data.getMinutes();

  const horaString = hora < 9 ? `0${hora}` : `${hora}`;
  const minutoString = minuto < 9 ? `0${minuto}` : `${minuto}`;

  return `${horaString}:${minutoString}`;
}
