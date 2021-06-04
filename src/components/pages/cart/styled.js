import styled, { css } from 'styled-components'
import { lora, slab } from '../../../styles/font-styles'
import { DarkShade, LightShade } from '../../../styles/color-theme'

export const CartTitle = styled.h1`
    font-weight: bold;
    font-family: ${lora};
    margin-left: 40px;
    color: ${DarkShade};
`;

export const CartItemBox = styled.div`
    margin: 3px;
    border-radius: 40px;
`;

export const CartTitleInfo = styled.div`
    color: ${LightShade};
    font-weight:bolder;
    margin: 5px;
    font-family: ${lora};
    text-align: center;
    ${props => props.align === "right" && css`
        text-align: end;
        padding-right: 100px;
        @media (min-width:0px) and (max-width:568px){
        text-align: end !important;
        padding-right: 0px;
        }
    `
    }
    @media (min-width:0px) and (max-width:568px){
        text-align: center;
        margin: 0px;
        padding-right: 0px;
        margin-left: 5px;
        }
`;

export const ContinueBtn = styled.button`
    border:none;
    height:40px;
    width: 250px;
    background-color: #EDF0F3;
    border-radius: 10px;
    font-family: ${lora};
    text-align: center;
    :hover{
        color:${LightShade};
        background-color:  ${DarkShade};
    }
    @media (min-width:0px) and (max-width:568px){
        width: 100%;
        align-items: flex-end;
    }
`;

export const Image = styled.img`
    
    @media (min-width:0px) and (max-width:568px){
        width: 75px;
    }
    @media (min-width:560px){
        width:175px;
    }
    
`;

export const CartDetail = styled.p`
    color:${DarkShade} ;
    align-items: flex-start;
    font-family: ${lora};
    text-align: center;
    font-weight: bold;
    margin-left: 5px;
    @media (min-width:0px) and (max-width:568px){
        font-size: 12px;
        margin-right: 5px;
        width: fit-content;
        

        ${props => props.type === "Quatity" && css` font-size:18px; `}
    }
    ${props => props.align === "left" && css`
        text-align: left;
    `}
`;

export const CheckoutBox = styled.div`
    margin:50px;
    border-radius:30px;
    background-color:#EDF0F3;
    font-family:${lora};
    @media (min-width:0px) and (max-width:568px){
        margin: 5px;
        margin-left: 2px;
        margin-right: 2px;
        font-size: small;
    }
`;

export const CheckOutBtn = styled.button`
    border:none;
    background-color: #FC3D46;
    color:white;
    border-radius: 5px;
    width: 80%;
    font-family: ${slab};
    text-align: center;
    
`;