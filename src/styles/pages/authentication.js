import styled from "styled-components";
import { Col } from "react-bootstrap";

export const ImgCol = styled(Col)`
  @media screen and (max-width: 540px) {
    display: none;
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
`;
