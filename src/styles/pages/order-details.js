import styled, { css } from 'styled-components'
import { Lora, Slab } from '../themes/font-styles';
import { Card } from 'react-bootstrap';

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

export const TabHead = styled.thead`
    font: 20px ${Slab};
    font-weight: 700;
    text-align:center;
    @media (min-width:0px) and (max-width:568px){
        font: 15px ${Lora};
        font-weight: 700;   
    }
`;

export const TabData = styled.td`
    font: 16px ${Slab};
    text-align: center;
    @media (min-width:0px) and (max-width:568px){
        font-size : 14px;
    }
    /* padding-bottom: 7px; */

    ${props => props.width === "etc" && css`
        width: 80px;

        @media (min-width:0px) and (max-width:568px){
            width : 70px;
        }
    `}
    
    ${props => props.font === "small" && css`
        font-size:13px !important;
        @media (min-width:0px) and (max-width:568px){
            font-size : 11px;
        }
    `}


    ${props => props.font === "none" && css`
        font-family:system-ui;
    `}

    ${props => props.padding === "etc" && css`
        padding-bottom: 15px;
    `}

    ${props => props.float === "left" && css`
        float: left;
        font-size: 16px;
        font-weight: bold;
    `}

    ${props => props.float === "right" && css`
        float: right;
    `}
    
    ${props => props.align === "left" && css`
        text-align: left;
    `}

    ${props => props.align === "right" && css`
        text-align: right;
    `}
`;

export const Header = styled.h5`
    font-family:${Lora};
    font-weight:600;
    ${props => props.align === "right" && css`
        text-align: right;
        color:purple;
    `}
    ${props => props.font === "small" && css`
        font-size: 14px;
        font-weight: 400;
    `}
    @media (min-width:0px) and (max-width:568px){
        font-size:18px;
    }
`;

export const StyledCard = styled(Card)`
    padding: 15px;
    font-family: ${Slab};
`;

export const DelPara = styled.p`
    margin-bottom:0px;
    font-size:15px;

    ${props => props.font === "big" && css`
        font-size:18px;
        font-weight: 600;
        @media (min-width:0px) and (max-width:568px){
            font-size: 17px;
            font-weight: 600;   
    }
    `}
`;

export const Link= styled.a`
    font: 15px ${Slab};
    color:blue;
    text-decoration: none;

    :hover{
        color:blue;
        cursor:default;
    };
    :visited{
        color:blue;
    };
`;