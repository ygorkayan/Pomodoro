import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  width: 900px;
  height: 220px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Titulo = styled.p`
  font-size: 1.5rem;
  color: #aaaaaa;
  margin-left: 1rem;
`;

export const Separador = styled.hr`
  background-color: #d1d1d1;
  border: none;
  height: 1px;
`;

export const PomodoroConcluido = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
  border-bottom: 1px solid #d1d1d1;
  color: #aaaaaa;
`;
