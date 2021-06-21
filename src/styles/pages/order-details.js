import styled, { css } from 'styled-components';
import { Lora, Slab } from '../themes/font-styles';
import { Card , Col } from 'react-bootstrap';

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
    font: 1.25rem ${Slab};
    font-weight: 500;
    text-align:center;
    @media (min-width:0px) and (max-width:568px){
        font: 0.9rem ${Lora};
        font-weight: 700;   
    }
`;

export const TabData = styled.td`
    font: 1rem ${Slab};
    text-align: center;
    @media (min-width:0px) and (max-width:568px){
        font-size : 0.9rem;
        padding:0.3rem 0;
    }

    ${props => props.width === "etc" && css`
        width: 80px;

        @media (min-width:0px) and (max-width:568px){
            width : 58px;
        }
    `}
    
    ${props => props.font === "small" && css`
        font-size:0.89rem !important;
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
        font-size: 1rem;
        font-weight: 600;
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
        padding: 7px 7px 0 0;
        @media (min-width:0px) and (max-width:568px){
            padding-right:0;
        }
        @media (min-width:568px) and (max-width:991px){
            margin-bottom:1rem !important;
        }
    `}
    ${props => props.font === "small" && css`
        font-size: 14px;
        font-weight: 400;
    `}
    @media (min-width:0px) and (max-width:766px){
        font-size:1.2rem;
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

export const StyledCol=styled(Col)`
    ${props => props.paddindR === "true" && css`
        padding-right:0.25rem;
        @media (min-width:0px) and (max-width:568px){
            padding-right:0;
        }
    `}
    ${props => props.marginL === "true" && css`
        margin-left: -5px;
        @media (min-width:0px) and (max-width:568px){
            margin-left:0;
        }
    `}
`;

export const StyledTable = styled.table`
    width:100%;
    margin-left: 4px;
    margin-top: -18px;
    @media (min-width:0px) and (max-width:568px){
        margin-top:0;
    }
`;