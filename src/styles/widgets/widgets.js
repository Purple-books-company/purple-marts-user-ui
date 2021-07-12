import styled, { css } from "styled-components";
import { Image } from "react-bootstrap";
import { LightShade, DarkShade } from "../themes/color-theme";
import { Roboto } from "../themes/font-styles";

// Contains widgets like Button, Text box etc.
export const Button = styled.button`
  font-weight: ${(props) => props.thickness || "600"};
  background: ${LightShade};
  border-radius: 5px;
  border: 2px solid ${LightShade};
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  width: auto;
  height: 40px;
  letter-spacing: 2px;
  padding: 0.25em 1em;
  font-family: ${Roboto};
  transition: 0.3s;

  :hover {
    background: transparent;
    color: #956daa;
    border: 2px solid #956daa;
  }
`;

// Text in caps
export const Text = styled.div`
  line-height: 1.8;
  font-family: ${Roboto};
  text-align: ${(props) => props.align || "start"};
  letter-spacing: ${(props) => props.space || "5px"};
  font-size: ${(props) => props.size || "110%"};
  text-transform: ${(props) => props.case || "uppercase"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.thickness || "600"};

  ${(props) =>
    props.primary &&
    css`
      padding: 60px 0px;
    `};

  ${(props) =>
    props.cursor &&
    css`
      border: 2px solid #d4d5d9;
      border-radius: 4px;
      :hover {
        cursor: pointer;
        border: 2px solid #282c3f;
      }
      @media screen and (max-width: 450px) {
        border: none;
      }
    `};

  ${(props) =>
    props.tags &&
    css`
      display: block;
      font-weight: 550;
      margin: auto;
      text-overflow: unset;
      white-space: unset;
      font-size: 18px;
    `};

  @media screen and (max-width: 450px) {
    line-height: 1.3;
    letter-spacing: ${(props) => props.space || "4px"};
    font-size: 8px;
    padding: 20px 10px;
  }
`;

// Search container
export const SearchContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 450px) {
    margin: auto;
    width: 75%;
  }
`;

export const Links = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;
  font-size: 90%;
  color: ${DarkShade};
  cursor: pointer;
  :hover {
    font-weight: 500;
  }

  @media screen and (max-width: 450px) {
    font-size: 70%;
    margin-bottom: 15%;
    margin-top: 10%;
  }
`;

export const HoverImage = styled(Image)`
  :hover {
    cursor: pointer;
  }
`;
