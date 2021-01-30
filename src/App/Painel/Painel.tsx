import React, { useContext } from "react";
import { Container, Menu, Cronometro, AreaBtn, Btn, BtnConfig } from "./Style";
import { converteTempo } from "./Util";
import TuneIcon from "@material-ui/icons/Tune";

import { PomodoroContext } from "../Pomodoro/Pomodoro";

export default function Painel() {
  const { tempo, concluidos, descansando, iniciar, parar } = useContext(
    PomodoroContext
  );

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
