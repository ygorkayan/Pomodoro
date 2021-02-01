import React, { useContext } from "react";
import { Container, Separador, Titulo } from "./Style";
import { exibirPomodoros } from "./Util";
import { PomodoroContext } from "../../Pomodoro/Pomodoro";

export default function Lista() {
  const { concluidos } = useContext(PomodoroContext);

  return (
    <Container>
      <Titulo>Pomodoros Concluidos</Titulo>
      <Separador />
      {exibirPomodoros(concluidos)}
    </Container>
  );
}
