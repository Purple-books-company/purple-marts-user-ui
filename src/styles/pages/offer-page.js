import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Column = styled(Col)`
  margin-bottom: 3%;
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 1%;
  @media screen and (max-width: 450px) {
    margin-bottom: 1%;
    margin-top: 1%;
    margin-left: 0;
    margin-right: 0;
  }
`;
