import styled from "styled-components";
import { LightShade, Silver } from "./color-theme";

// Home page carousel styling

export const Promotion = styled.div`
    position: relative;
    height: 400px;
  }
`;

export const Box = styled.div`
  position: absolute;
  background: ${LightShade};
  top: 10%;
  height: auto;
  width: auto;
  left: 10%;
  margin: 5%;
  padding: 20px;
  @media screen and (max-width: 450px) {
    height: 25%;
    width: auto;
    margin-bottom: 10%;
  }
`;

export const Text = styled.div`
  color: white;
  text-align: center;
  letter-spacing: 3px;
  line-height: 1.6;
  font-size: 20px;
  padding: 60px 20px;
  border: 4px solid ${Silver};
  @media screen and (max-width: 450px) {
    line-height: 1.3;
    font-size: 7px;
    padding: 20px 10px;
  }
`;
