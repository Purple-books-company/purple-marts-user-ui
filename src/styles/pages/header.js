import styled, { css } from "styled-components";
import { DarkShade, LightShade } from "../themes/color-theme";
import { Navbar, Nav } from "react-bootstrap";

// Nav bar styles
export const HeaderNav = styled(Navbar)`
  border-bottom: 0.1rem solid ${LightShade};
  overflow: hidden;
  height:5em;
  @media(min-width:0) and (max-width:992px){
    overflow:visible;
  }
  @media(min-width:992px){
    padding: 1em;
    padding-right:3em;
  }
`;

export const BrandImg = styled.img`
  height: 3.5rem;
  @media(min-width:0) and (max-width:800px){
    height:3rem;
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

export const NavLink = styled(Nav.Link)`
  font-weight: 600;
  font-size: 88%;
  letter-spacing: 0.2vh;
  margin: 0 0.7rem 1em 0.7rem;
  color: #535252 !important;
  cursor: pointer;
  text-transform: uppercase;
  padding-top: 1.5em;
  ${(props) =>
    props.icon &&
    css`
      text-align: center;
      align-items: center;
      font-weight: bold;
      font-size: x-small;
      text-transform: capitalize;
      margin-left: 2%;
      margin-right: 1%;

      @media (min-width: 0px) and (max-width: 1000px){
        text-align: left;
        align-items: left;
        font-size: 88% !important;
        font-weight: 600;
        margin: 0 0.7rem;
        text-transform: uppercase;
      }

    `}
    @media (min-width: 1000px){
  :hover {
    color: ${DarkShade} !important;
    ${(props) =>
    props.color &&
    css`
        border-bottom: 0.2rem solid;
        border-bottom-color: ${props.color};
      `}
  }
    }
`;
