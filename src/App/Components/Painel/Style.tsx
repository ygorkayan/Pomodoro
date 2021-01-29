import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.color === "verde" ? "#56bd56" : "#d04643"};
  margin-top: 1rem;
  height: 20vh;
  width: 45vw;
  border-radius: 0.5rem;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BtnConfig = styled.button`
  cursor: pointer;
  margin-top: 0.2rem;
  width: 40px;
  height: 40px;
  background: none;
  color: #fff;
  border: none;
`;

export const Cronometro = styled.p`
  font-size: 6rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const AreaBtn = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 200px;
  height: 35px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  text-transform: uppercase;
  border-radius: 0.2rem;
`;
