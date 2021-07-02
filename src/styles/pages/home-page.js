import styled, { css } from "styled-components";
import { LightShade, Silver } from "../themes/color-theme";
import { Slab } from "../themes/font-styles";

// Home page carousel styling

export const Title = styled.div`
  background-color: #000000bd;
  border: 10px solid ${LightShade};
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const Main = styled.h3`
  color: white;
  @media screen and (max-width: 450px) {
    margin-top: 2%;
    font-size: medium;
  }
`;

// Grid styling

export const Caption = styled.div`
  display: block;
  margin: auto;
  font-size: 18px;
  font-family: ${Slab};
  color: white;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Block = styled.div`
  display: flex;
  height: 150px;
  border: 2px solid ${Silver};

  @media screen and (max-width: 450px) {
    height: 80px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  ${(props) =>
    props.primary &&
    css`
      height: 250px;
      border: none;
      width: 10%;

      :hover {
        cursor: pointer;
        box-shadow: none;
        transform: scale(1.1);
      }
    `};
`;

export const Image = styled.img`
  max-width: 80%;
  height: 90%;
  ${(props) =>
    props.sub &&
    css`
      height: 100%;
      width: 100%
      max-width: none;
      border: 5px solid ${LightShade};
      /* object-fit: fill; */
    `};
`;
