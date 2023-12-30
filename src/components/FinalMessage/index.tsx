import { ContainerMain } from "./styles";
import Confetti from 'react-confetti';



export default function FinalMessage() {
  return (
    <ContainerMain>
      <h1>Happy New Year!!! 2024</h1>
      <Confetti  numberOfPieces={1000} />
    </ContainerMain>
  );
}