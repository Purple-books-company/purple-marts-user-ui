import styled, { css } from 'styled-components'
import { Lora, Slab } from '../themes/font-styles'
import { DarkShade, LightShade } from '../themes/color-theme'

export const CartTitle = styled.h1`
    font-weight: bold;
    font-family: ${Lora};
    margin-left: 40px;
    color: ${DarkShade};
    @media (min-width:0px) and (max-width:568px){
        width: 100%;
    }
`;

export const CartItemBox = styled.tr`
    margin: 3px;
    border-radius: 40px;
`;

export const CartTitleInfo = styled.td`
    color: ${DarkShade};
    margin: 5px;
    margin-left:45px;
    font-family: ${Lora};
    text-align: center;
    text-transform: uppercase;
    ${props => props.align === "right" && css`
        text-align: right;
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
        font-weight: bolder;
        font-size: small;
        }
`;

export const ContinueBtn = styled.button`
    border:none;
    height:40px;
    width: 250px;
    background-color: #EDF0F3;
    border-radius: 10px;
    font-family: ${Lora};
    text-align: center;
    :hover{
        background-color: ${LightShade};
        color:#FFFFFF;

    }
    @media (min-width:0px) and (max-width:568px){
        font-size: smaller;
        width:200px;
    }
`;

export const Image = styled.img`
object-fit: contain;
    @media (min-width:0px) and (max-width:568px){
        width: 50px;
        height: 70px;    
    }
    @media (min-width:560px){
        width:100px;
        height: 150px;
    }
    
`;

export const CartDetail = styled.td`
    color:${DarkShade} ;
    align-items: flex-start;
    font-family: ${Lora};
    text-align: center;
    font-weight: bold;
    margin-left: 5px;
    @media (min-width:0px) and (max-width:568px){
        font-size: 12px;
        margin-left: 2px;
        width: fit-content;
        ${props => props.type === "Quantity" && css`
         letter-spacing: 2px;
        `}
    }
    ${props => props.align === "left" && css`
        width:20%;
        text-align: left;
    `}
    ${props => props.hover === "true" && css`
            :hover{
                color: red;
            }
        `
    }
`;

export const CheckoutBox = styled.div`
    margin:50px;
    border-radius:30px;
    background-color:#F4DFFA;
    font-family:${Lora};
    @media (min-width:0px) and (max-width:568px){
        margin-top: 20px;
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
    font-family: ${Slab};
    text-align: center;
    height: 40px;
    @media (min-width:0px) and (max-width:568px){
        width: 100%;
    }
    :hover{
        background-color: ${DarkShade};
    }
`;

export const QtyBtn = styled.button`
    border: none;
    background: none;
    :hover{
        color:red;
    }
    @media (min-width:0px) and (max-width:568px){
        width: 100%;
    }
`;

export const EmptyImg = styled.img`
    /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const CartEmpty = styled.p`
    font-style: italic oblique;
    font-family: ${Slab};
    color: ${DarkShade};
`;