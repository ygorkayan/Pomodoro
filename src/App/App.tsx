import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Painel from "./Components/Painel/Painel";

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
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <StyledGlobal />
      <Painel />
    </Container>
  );
}
