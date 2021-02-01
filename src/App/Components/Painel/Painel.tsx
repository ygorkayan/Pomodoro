import React, { useContext } from "react";
import { Container, Menu, Cronometro, AreaBtn, Btn, BtnConfig } from "./Style";
import { converteTempo, IProps } from "./Util";
import { PomodoroContext } from "../../Pomodoro/Pomodoro";
import TuneIcon from "@material-ui/icons/Tune";

export default function Painel(props: IProps) {
  const { tempo, concluidos, descansando, iniciar, parar } = useContext(
    PomodoroContext
  );

  return (
    <Container color={descansando}>
      <Menu>
        <BtnConfig onClick={() => props.toggleConfigHidden()}>
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
