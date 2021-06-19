import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { DarkShade } from "../themes/color-theme";

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
export const Text = styled.span`
  font-size: x-large;
  font-weight: bold;
  color: ${DarkShade};

  @media screen and (max-width: 540px) {
    font-size: large;
  }
`;
export const ModalWrapper = styled.div`
  width: 800px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 3;
  border-radius: 10px;

  @media screen and (max-width: 540px) {
    grid-template-columns: 0fr 1fr;
    width: 85%;
    height: 90%;
    margin: 5%;
    margin-bottom: 10%;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  /* p {
    margin-bottom: 1rem;
  } */

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
  top: 2%;
  right: 0%;
  width: 10%;
  height: 5%;
  z-index: 10;
`;
