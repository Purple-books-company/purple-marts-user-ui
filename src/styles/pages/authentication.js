import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 20%;

  @media screen and (max-width: 540px) {
    grid-template-columns: 0fr 1fr;
    width: 100%;
    height: 50%;
    padding: 5%;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: fit-content;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }

  // button {
  //   padding: 10px 24px;
  //   background: #141414;
  //   color: #fff;
  //   border: none;
  // }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
