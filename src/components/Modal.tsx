/* eslint-disable @typescript-eslint/no-unused-vars */
import { CloseButton, ContentModal, ModalContainer, Overlay } from "./styles";
import { AnimatePresence } from "framer-motion";
import UpdateLogo from "../assets/update-icon.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};
export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={onClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>X</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#5c3aff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#5c3aff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </CloseButton>

            <ContentModal>
            <img src={UpdateLogo} alt="update-app" />
            <h2>Happy 2024 version  1.0 🎉</h2>
            <span> Novas Melhorias : </span>

            <ul>
              <li>Melhorias no loading da pagina</li>
              <li>Corrigido bugs de codigo</li>
              <li>Corrigido Css do modal</li>
              <li>Melhoria na animaçao quando chegar o  grande dia</li>
            </ul>
           
            </ContentModal>
        
            <h3>Sugestoes ? Mande-me email luisphelipe1000@gmail.com</h3>

          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
