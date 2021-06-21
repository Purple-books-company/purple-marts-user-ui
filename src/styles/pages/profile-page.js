import styled, {css} from "styled-components"
import {Lora , Slab} from '../themes/font-styles'
import { Link } from 'react-router-dom';

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
    width : 225px;
    height : 225px;
`;

export const Para = styled.p`
    font-family: ${Lora};
    text-align:center;
    ${props => props.font === "big" && css`
        font-size: 1.1rem;
        font-weight: 700;
        text-align: left;
        /* padding-top:10px; */
        margin:0;
    `}
`;

export const Links= styled.div`
    margin-top: 10px;
    font:15px ${Lora};
    color:blue;
`;

export const NavDiv=styled.div`
    margin-top:10px;
    margin-right:-15px;
    background-color:#F9F1F7;
    box-shadow: 3px 3px 10px 1px rgba(199,173,230,0.77);
    -webkit-box-shadow: 3px 3px 10px 1px rgba(199,173,230,0.77);
    font-family:${Slab};

    ${props => props.type === "main" && css`
        padding: 20px;
        margin: 10px 5px 10px 10px !important;
    `}

    ${props => props.mobile ==='yes' && css`
        padding: 20px 0 15px;
        margin: 10px 10px !important;
        background-color:#fff;
    `}

    ${props => props.mobile === "diff" && css`
        @media (min-width:0px) and (max-width:766px){
            padding:0 !important;
            margin:0 0 0 -7px !important;
            background-color:#fff;
            box-shadow: none;
            -webkit-box-shadow: none;
        }
    `}
`;

export const ProfileLink = styled(Link)`
    color:inherit;
    text-decoration:none;
    :hover{
        color:inherit;
    }
`;