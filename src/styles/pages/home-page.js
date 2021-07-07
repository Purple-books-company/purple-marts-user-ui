import { Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import { LightShade, Silver } from "../themes/color-theme";

// Home page carousel styling

export const TitleBox = styled.div`
  background-color: #000000bd;
  border: 10px solid ${LightShade};
  :hover {
    cursor: pointer;
  }

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

export const Block = styled.div`
  display: flex;
  height: 150px;
  border: 2px solid ${Silver};

  @media screen and (max-width: 450px) {
    height: 80px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px 0 rgb(210, 185, 225),
      0 6px 20px 0 rgb(210, 185, 225);
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
        /* transform: scale(1.1); */
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
    `};
`;

// Sale

export const Cards = styled(Card)`
  height: 270px;
  width: 230px;
  @media screen and (max-width: 450px) {
    height: 160px;
    width: 130px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const CardImg = styled(Card.Img)`
  height: 190px;
  /* width: 200px; */
  @media screen and (max-width: 450px) {
    height: 90px;
    /* width: 160px; */
  }
`;
