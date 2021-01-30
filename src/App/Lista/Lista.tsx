import React, { useContext } from "react";
import styled from "styled-components";
import { PomodoroContext } from "../Pomodoro/Pomodoro";

const Container = styled.div`
  margin-top: 2rem;
  width: 900px;
  height: 220px;
`;

const Titulo = styled.p`
  font-size: 1.5rem;
  color: #aaaaaa;
`;

const Separador = styled.hr`
  background-color: #d1d1d1;
  border: none;
  height: 1px;
`;

function exibirPomodoros(pomodoros: Record<string, number>[]) {
  const t = pomodoros.map((pomodoro) => <div>{pomodoro.terminadoEm}</div>);
  console.log(t);
  return t;
}

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
