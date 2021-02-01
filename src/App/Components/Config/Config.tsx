import React, { useContext } from "react";
import { Container, AreaInput, Btn } from "./Style";
import { IProps, criarInput } from "./Util";
import { PomodoroConfigContext } from "../../Pomodoro/ConfigPomodoro";

export default function Config(props: IProps) {
  const {
    configTempo,
    configQtdPomodoro,
    configPausaCurta,
    configPausaLonga,
  } = useContext(PomodoroConfigContext);

  return (
    <Container hidden={props.configHidden}>
      <h1>Pomodoro</h1>
      <AreaInput>
        {criarInput("Tempo", configTempo)}
        {criarInput("Qtd Pomodoro", configQtdPomodoro)}
        {criarInput("Pausa Curta", configPausaCurta)}
        {criarInput("Pausa Longa", configPausaLonga)}
      </AreaInput>

      <Btn onClick={() => props.toggleConfigHidden()}>Fechar</Btn>
    </Container>
  );
}
