import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DarkShade, LightShade, Silver } from '../themes/color-theme'
import { TiThMenu } from 'react-icons/ti'
import { Lora, Slab } from '../themes/font-styles'
export const LogoImg = styled.img`
  display: block;
  object-fit: contain;
  overflow: hidden;
  height: 250px;
  width:250px;
  margin: -88px 0px -90px 0px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Nav = styled.nav`
  @media (min-width:568px){
    background: #FFF5F8;
    margin-top: 20px;
    height: 55px;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;     
  }
  @media (min-width:0px) and (max-width:568px){
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${DarkShade};
  display: flex;
  margin-left: 50px;
  align-items: center;
  text-decoration: solid;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  &.active {
    color: purple;
  }
  :hover{
    color: red;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Menu = styled(TiThMenu)`
  display: none;
  @media (min-width:0px) and (max-width:568px){
        display: flex;
        margin-left: 2px;
    }
`;

export const SliderBtn = styled.p`
    @media (min-width:0px) and (max-width:568px){
        display: flex;
    }
    @media (min-width:569px){
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