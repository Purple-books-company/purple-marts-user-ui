import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DarkShade, LightShade, Silver } from '../themes/color-theme'
import { FcMenu } from 'react-icons/fc'
import { Lora, Slab } from '../themes/font-styles'
import { Image, Navbar, Nav } from 'react-bootstrap'

// logo styles
export const LogoImg = styled(Image)`
  height: 15%;
  width: 15%;
  @media (min-width:0px) and (max-width:568px){
    height: 35%;
    width: 30%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  @media(min-width:1000px){
    display:none;
  }
`;

// Nav bar styles 
export const HeaderNav = styled(Navbar)`
  padding:2px;
  @media (min-width:0px) and (max-width:1000px){
    display:none;
  }
`;

export const BrandImg = styled.img`
  height:4rem;
`;

export const CartNum = styled.p`
  margin-left: -5px;
  margin-top: -15px;
  border:2px solid;
  border-radius: 50%;
  border-color: ${DarkShade}; 
  font-size: 10px !important;
  padding: 0px 3px;
`;

export const NavLink = styled(Nav.Link)`
  font-weight: 600;
  color:#535252 !important;
  font-family:${Lora},${Slab};
  display: flex;
  align-items: center;
  text-decoration: solid;
  padding:1.5rem;
  margin: 0 0.7rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  vertical-align:middle;
  
  :hover{
    color: ${DarkShade} !important;
    font-weight: bold;
    ${props => props.color && css`
    border-bottom: 0.2rem solid;
    border-bottom-color:${props.color};
    `
  }
  }
`;


// Slider styles
export const Menu = styled(FcMenu)`
  display: none;
  @media (min-width:0px) and (max-width:1000px){
        display: flex;
        margin-left: 2px;
    }
`;

export const SliderBtn = styled.p`
    @media (min-width:0px) and (max-width:1000px){
        display: flex;
    }
    @media (min-width:1000px){
        display: none;
    }
`;

export const CanvasHeader = styled.div`
  background-color: #FFA1ED;
`;

export const ProfileImg = styled.img`
  margin:20px;
  object-fit: contain;
  height:60px;
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
  :hover{
    color: white;
  }
`;

export const CanvasBody = styled.div`
  
`;

export const NavBtn = styled(Link)`
  text-decoration: none;
  border-bottom-width:1px;
  border-bottom-color:gray;
  text-transform: uppercase;
  text-align: center;
  font-size: medium;
  font-family: ${Slab};
  width: 100%;
  margin:5px;
  color: ${DarkShade};
  :hover{
    color:white;
  }
`;

export const SlideBtnsDiv = styled.div`
  padding: 15px;
  border-width: 1px;
  border-color: gray;
  color: ${DarkShade};
  :hover{
    background-color: ${LightShade};
    color:${Silver};
  }
`;