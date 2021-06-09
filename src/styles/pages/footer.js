import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { DarkShade } from '../themes/color-theme'
import { TiThMenu } from 'react-icons/ti'

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
  @media (min-width:560px){
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
    color:#D01B50;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  justify-content: space-around;
`;

export const Menu = styled(TiThMenu)`
  display: none;
  @media (min-width:0px) and (max-width:568px){
        display: flex;
        margin-left: 2px;
    }
`;