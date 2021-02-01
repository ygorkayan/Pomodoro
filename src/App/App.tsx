import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PomodoroProvider } from "./Pomodoro/Pomodoro";
import { PomodoroConfigProvider } from "./Pomodoro/ConfigPomodoro";
import Config from "./Components/Config/Config";
import Painel from "./Components/Painel/Painel";
import Lista from "./Components/Lista/Lista";

const StyledGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export default function App() {
  const [configHidden, setConfigHidden] = useState(true);

  function toggleConfigHidden() {
    return () => setConfigHidden(configHidden ? false : true);
  }

  return (
    <Container>
      <StyledGlobal />
      <PomodoroConfigProvider>
        <Config
          configHidden={configHidden}
          toggleConfigHidden={toggleConfigHidden()}
        />
        <PomodoroProvider>
          <Painel toggleConfigHidden={toggleConfigHidden()} />
          <Lista />
        </PomodoroProvider>
      </PomodoroConfigProvider>
    </Container>
  );
}
