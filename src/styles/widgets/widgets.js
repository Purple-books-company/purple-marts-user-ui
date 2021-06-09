import styled, { css } from "styled-components";
import { LightShade, DarkShade } from "../themes/color-theme";
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
  font-family: ${Lora}
  transition: 0.3s;

  :hover {
    background: transparent;
    color: ${LightShade};
    border: 2px solid ${LightShade};
  }
`;

export const SearchContainer = styled.div`
  margin: 20px;
  width: 35%;
  float: right;
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
   {
    margin-top: 5%;
    color: ${DarkShade};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
