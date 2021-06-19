import styled, { css } from "styled-components";
import { LightShade, DarkShade, Silver } from "../themes/color-theme";
import { Lora } from "../themes/font-styles";

// Contains widgets like Button, Text box etc.
export const Button = styled.button`
  background: ${LightShade};
  border-radius: 5px;
  border: 2px solid ${LightShade};
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  width: auto;
  height: 40px;
  letter-spacing: 2px;
  padding: 0.25em 1em;
  font-family: ${Lora};
  transition: 0.3s;

  :hover {
    background: transparent;
    color: ${LightShade};
    border: 2px solid ${LightShade};
  }
`;

// Text in caps
export const Text = styled.div`
  color: white;
  font-family: ${Lora};
  text-align: center;
  letter-spacing: 3px;
  line-height: 1.6;
  font-size: 20px;
  padding: 60px 20px;
  border: 4px solid ${Silver};
  ${(props) =>
    props.primary &&
    css`
      color: ${DarkShade};
      border: none;
      padding: 60px 0px;
    `};
  @media screen and (max-width: 450px) {
    line-height: 1.3;
    letter-spacing: 4px;
    font-size: 7px;
    padding: 20px 10px;
  }
`;

// Search container
export const SearchContainer = styled.div`
  margin-right: 0%;
  width: 35%;
  @media screen and (max-width: 450px) {
    margin: auto;
    width: 75%;
  }
`;

export const SearchText = styled.span`
  @media screen and (max-width: 450px) {
    display: none;
    align-items: center;
  }
`;

export const Links = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;
  color: ${DarkShade};
  cursor: pointer;
  :hover {
    font-weight: 500;
  }
`;
