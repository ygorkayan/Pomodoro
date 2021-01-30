import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PomodoroProvider } from "./Pomodoro/Pomodoro";
import Painel from "./Painel/Painel";
import Lista from "./Lista/Lista";

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
  return (
    <Container>
      <StyledGlobal />
      <PomodoroProvider>
        <Painel />
        <Lista />
      </PomodoroProvider>
    </Container>
  );
}
