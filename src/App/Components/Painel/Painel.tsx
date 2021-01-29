import React from "react";
import { Container, Menu, Cronometro, AreaBtn, Btn, BtnConfig } from "./Style";
import { converteTempo } from "./Util";
import TuneIcon from "@material-ui/icons/Tune";

import UsePomodoro from "../../Pomodoro/UsePomodoro";

export default function Painel() {
  const { tempo, concluidos, descansando, iniciar, parar } = UsePomodoro();

  return (
    <Container color={descansando ? "verde" : "vermelho"}>
      <Menu>
        <BtnConfig>
          <TuneIcon />
        </BtnConfig>
        <span>Concluidos: {concluidos.length}</span>
      </Menu>
      <Cronometro>{converteTempo(tempo)}</Cronometro>
      <AreaBtn>
        <Btn onClick={() => iniciar()}>iniciar</Btn>
        <Btn onClick={() => parar()}>parar</Btn>
      </AreaBtn>
    </Container>
  );
}
