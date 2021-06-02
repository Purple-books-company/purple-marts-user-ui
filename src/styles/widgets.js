import styled, { css } from "styled-components";
import { LightShade, DarkShade } from "./color-theme";

// Contains widgets like Button, Text box etc.
export const Button = styled.button`
  background: ${LightShade};
  border-radius: 5px;
  border: 2px solid ${LightShade};
  color: white;
  margin: 0 1em;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  width: 150px;
  height: 50px;
  margin-top: 40px;
  padding: 0.25em 1em;

  &:hover {
    background: transparent;
    color: ${LightShade};
  }
`;
