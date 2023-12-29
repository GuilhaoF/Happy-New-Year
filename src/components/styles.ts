import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
export const ModalContainer = styled(motion.div)`
  width: 85%;
  height: 60%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 50%;
    height: 50%;

    ul{
    margin: 0 1rem;
    }
  }
`;
export const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  img{
    margin-bottom: 0.9rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
  }
  ul{
    list-style-position: inside;
    margin-top: 2.2rem;
    text-align: left;
  }



`