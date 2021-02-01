import { ContainerInput, TextoInput, Input } from "./Style";

export interface IProps {
  configHidden: boolean;
  toggleConfigHidden: () => void;
}

export function criarInput(label: string, state: { get: any; set: any }) {
  return (
    <ContainerInput>
      <TextoInput>{label}</TextoInput>
      <Input value={state.get} onChange={(e) => state.set(e.target.value)} />
    </ContainerInput>
  );
}
