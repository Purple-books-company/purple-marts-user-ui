import styled, { css } from "styled-components";
import { DarkShade, LightShade, Silver } from "../themes/color-theme";
import { Lora, Slab } from "../themes/font-styles";

// Home page carousel styling

export const Promotion = styled.div`
  position: relative;
  height: 500px;
  margin-bottom: 40px;
  @media screen and (max-width: 450px) {
    height: auto;
    margin-bottom: 20px;
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
    height: auto;
    width: auto;
    margin-bottom: 10%;
  }
  :hover {
    cursor: pointer;
  }
`;

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
    `};
  @media screen and (max-width: 450px) {
    line-height: 1.3;
    letter-spacing: 4px;
    font-size: 7px;
    padding: 20px 10px;
  }
`;

export const Caption = styled.div`
  display: block;
  margin: auto;
  font-size: 18px;
  font-family: ${Slab};
  color: white;
  text-align: center;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Block = styled.div`
    display:flex;
    height: 150px;
    border: 2px solid ${Silver};
  
    @media screen and (max-width: 450px) {
      height: 80px;
    }
    &:hover {
      cursor: pointer;
      border: 2px solid black;
      }
  }

  ${(props) =>
    props.primary &&
    css`
      height: 250px;
      border: none;
      width: 10%;

      :hover {
        cursor: pointer;
        border: none;
      }
    `};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
