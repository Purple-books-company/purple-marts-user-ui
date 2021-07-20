import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(255, 255, 255, 255);
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  transition: 0.5s ease;
`;

export const Column = styled(Col)`
  margin-bottom: 3%;
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 1%;
  position: relative;
  @media screen and (max-width: 450px) {
    margin-bottom: 1%;
    margin-top: 1%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImgOverlay = styled.div`
  position: relative;
  :hover {
    opacity: 1;
    ${Overlay} {
      opacity: 1;
    }
  }
`;
