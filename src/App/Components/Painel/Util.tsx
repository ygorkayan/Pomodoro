export function converteTempo(tempoSeg: number) {
  const minutos = Math.floor(tempoSeg / 60);
  const segundos = tempoSeg - minutos * 60;

  const minutosString = minutos <= 9 ? `0${minutos}` : minutos;
  const segundosString = segundos <= 9 ? `0${segundos}` : segundos;

  return `${minutosString}:${segundosString}`;
}


export interface IProps {
  toggleConfigHidden: () => void;
}