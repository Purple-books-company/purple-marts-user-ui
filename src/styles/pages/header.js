import styled, { css } from "styled-components";
import { DarkShade, LightShade } from "../themes/color-theme";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Nav bar styles
export const HeaderNav = styled(Navbar)`
  border-bottom: 0.1rem solid ${LightShade};
  overflow: hidden;
  height: 5em;
  @media (min-width: 0) and (max-width: 992px) {
    overflow: visible;
  }
  @media (min-width: 992px) {
    padding: 1em;
    padding-right: 3em;
  }
`;

export const BrandImg = styled.img`
  height: 3rem;
  @media (min-width: 0) and (max-width: 800px) {
    height: 3rem;
    margin-left: 0em;
  }
`;

export const CartNum = styled.p`
  margin-left: -5px;
  margin-top: -15px;
  border: 2px solid;
  border-radius: 50%;
  border-color: ${DarkShade};
  font-size: 10px !important;
  padding: 0px 3px;
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 88%;
  letter-spacing: 0.2vh;
  margin: 0 1rem 1em 0.7rem;
  color: #393939;
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: none;
  /* padding-top: 0.8em; */
  padding: 0.5rem 0.2rem;
  height: 100%;
  ${(props) =>
    props.icon &&
    css`
      text-align: center;
      align-items: center;
      font-weight: bold;
      font-size: x-small;
      margin-left: 7%;
      margin-right: 1%;

      @media (min-width: 0px) and (max-width: 1000px) {
        text-align: left;
        align-items: left;
        font-weight: 600;
        font-size: 88%;
        margin: 0 0.7rem;
      }
    `}
  @media (min-width: 1000px) {
    :hover {
      transition: all 0.2s ease-out;
      color: #79379c;
      text-decoration: underline;

      ${(props) =>
        props.color &&
        css`
          /* border-bottom: 4px solid ${props.color}; */
        `};
    }
  }
`;
