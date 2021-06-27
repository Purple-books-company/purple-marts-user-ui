import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { DarkShade, LightShade, Silver } from "../themes/color-theme";
import { FcMenu } from "react-icons/fc";
import { Lora, Slab } from "../themes/font-styles";
import { Image, Navbar, Nav } from "react-bootstrap";

// Nav bar styles
export const HeaderNav = styled(Navbar)`
  /* padding: 0.5%; */
  background-color: white;
  border-bottom: 0.1rem solid ${LightShade};
  height: 10%;
  @media (min-width: 0px) and (max-width: 1000px) {
    display: none;
  }
`;

export const BrandImg = styled.img`
  /* margin-top: 1%; */
  margin-left: 20%;
  height: 3.2rem;
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
  margin: 0 0.7rem;
  color: #535252 !important;
  border-bottom: 0.2rem solid white;
  cursor: pointer;
  text-transform: uppercase;
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
    `}

  :hover {
    color: ${DarkShade} !important;
    ${(props) =>
      props.color &&
      css`
        border-bottom: 0.2rem solid;
        border-bottom-color: ${props.color};
      `}
  }
`;

// Slider styles

// logo styles
export const LogoImg = styled(Image)`
  margin: 0;
  height: 10%;
  width: 15%;
  @media (min-width: 0px) and (max-width: 568px) {
    height: 35%;
    width: 30%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Menu = styled(FcMenu)`
  display: none;
  @media (min-width: 0px) and (max-width: 1000px) {
    display: flex;
    margin-left: 2px;
  }
`;

export const SliderBtn = styled.p`
  @media (min-width: 0px) and (max-width: 1000px) {
    display: flex;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const CanvasHeader = styled.div`
  background-color: #ffa1ed;
`;

export const ProfileImg = styled.img`
  margin: 20px;
  object-fit: contain;
  height: 60px;
  width: 60px;
  border-width: 2px;
  border-radius: 10px;
  border-color: red;
`;

export const ProfileName = styled(Link)`
  margin-left: 22px;
  font-weight: bold;
  font-family: ${Lora};
  text-decoration: none;
  color: black;
  :hover {
    color: white;
  }
`;

export const CanvasBody = styled.div``;

export const NavBtn = styled(Link)`
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  text-transform: uppercase;
  text-align: center;
  font-size: medium;
  font-family: ${Slab};
  width: 100%;
  margin: 5px;
  color: ${DarkShade};
  :hover {
    color: white;
  }
`;

export const SlideBtnsDiv = styled.div`
  padding: 15px;
  border-width: 1px;
  border-color: gray;
  color: ${DarkShade};
  :hover {
    background-color: ${LightShade};
    color: ${Silver};
  }
`;
