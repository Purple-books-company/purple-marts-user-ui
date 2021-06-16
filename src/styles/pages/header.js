import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DarkShade, LightShade, Silver } from '../themes/color-theme'
import { TiThMenu } from 'react-icons/ti'
import { Lora, Slab } from '../themes/font-styles'
import { Image, Navbar, Nav } from 'react-bootstrap'

// logo styles
export const LogoImg = styled(Image)`
  height: 12%;
  width: 12%;
  @media (min-width:0px) and (max-width:600px){
    height: 35%;
    width: 40%;
  }
  @media (min-width:600px) and (max-width:1200px){
    height: 15%;
    width: 15%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

// Nav bar styles 
export const HeaderNav = styled(Navbar)`
  justify-content: space-around;
  @media (min-width:0px) and (max-width:1000px){
    display:none;
  }
`;

export const CartNum = styled.p`
  margin-left: -5px;
  margin-top: -15px;
  background-color: ${DarkShade};
  color: white; 
  font-size: 12px !important;
  padding: 0px 5px;
  border-radius: 50%;
  /* :hover{
    background-color: #B639FF;
  } */
`;

export const NavLink = styled(Nav.Link)`
  color: ${DarkShade} !important;
  font-family:${Slab};
  display: flex;
  margin-left: 5rem;
  align-items: center;
  text-decoration: solid;
  padding: .7rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  
  :hover{
    color: #F88989 !important ;
    ${CartNum}{
      background-color: #F88989;
    }
  }
`;


// Slider styles
export const Menu = styled(TiThMenu)`
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