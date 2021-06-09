import styled, {css} from "styled-components"
import {Lora , Slab} from '../themes/font-styles'
import {LightShade, DarkShade, Silver} from "../themes/color-theme"

export const Head= styled.h1`
    text-align: center;
    margin-top: 0px;
    font-family :${Slab};
    color : purple;
`;

export const TabData= styled.td`
    padding-left:10px;
    font-family: ${Lora};
    ${props => props.font === "big" && css`
        font-size: 20px;
    `}
    ${props => props.font === "bold" && css`
        font-weight: bold;
    `}
`;

export const Img = styled.img`
    display: block;
    margin: auto;
    border-radius: 50%;
    width : 200px;
    height : 200px;
`;

export const Para = styled.p`
    ${props => props.font === "big" && css`
        font-size: 18px;
        padding-top:20px;
        font-weight: 800;
    `}
    font-family: ${Lora};
    text-align:center;
`;