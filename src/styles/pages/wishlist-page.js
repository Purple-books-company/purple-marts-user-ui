import styled, { css } from 'styled-components'
import { DarkShade } from '../themes/color-theme';
import { Slab } from '../themes/font-styles';

export const WlText = styled.div`
    color:${DarkShade};
    font-family: ${Slab};
    margin-left:20px;
    @media (min-width:0px) and (max-width:568px){
        font-size: 12px;
        ${props => props.display === "none" && css`
            display: none;
        `}
    }
    ${props => props.type === "icon" && css`
        :hover{
            color: red !important;
        }
        @media(min-width:568px){
            margin-left: 80px;
        }
    `}
`;

export const WlImage = styled.img`
    object-fit: contain;
    @media (min-width:0px) and (max-width:568px){
        height: 100px;   
        width : 80px;
    }
    @media (min-width:560px){
        height: 140px;
        width:100px;
    }
    
`;

export const WlTable = styled.table`
    margin-top: 20px;

`;

export const WlTableCol = styled.td`
    @media(mix-width:568px){
        padding:15px;
    }
`;

export const WlEmpty = styled.img`
    margin-bottom: 5px;
    @media(max-width:700px){
        width: 200px;
        height: 150px;
        object-fit: contain;
        margin-top: 100px;
    }
`;