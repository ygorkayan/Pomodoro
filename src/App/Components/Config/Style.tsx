import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.5rem;
  width: 420px;
  background-color: #57c24d;
  position: absolute;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  color: white;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TextoInput = styled.p`
  margin-right: 10px;
`;

export const Input = styled.input`
  margin-top: 1rem;
  padding: 0.5rem 0.5rem 3px 0.5rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid white;
  background-color: rgba(0, 0, 0, 0);
  color: white;
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
  margin-top: 1rem;

  @media (max-width: 900px) {
    width: 150px;
  }
`;
