import styled, { css }  from "styled-components"
import {Lora } from '../themes/font-styles'

export const TabData= styled.td`
    border:0;
    padding:0 !important;
    font:0.9rem;
    ${props => props.width === "med" && css`
        width:13%;
        @media (min-width:0px) and (max-width:1020px){
            width: 20%;   
        }
    `}
    ${props => props.width === "small" && css`
        width:10%;
        @media (min-width:0px) and (max-width:1020px){
            width: auto;   
        }
    `}
    ${props => props.font === "bold" && css`
        font-weight:700;
    `}
    ${props => props.width === "big" && css`
        width:40%;
        @media (min-width:1064px) and (max-width:1200px){
            width: 35%;   
        }
        @media (min-width:0px) and (max-width:1064px){
            width: auto;   
        }
    `}
    ${props => props.float === "right" && css`
        width:74%;
        text-align:right;
        @media (min-width:0px) and (max-width:900px){
            width: 60%;   
        }
    `}
    ${props => props.width === "full" && css`
        width:auto;
        text-align:right;
    `}
    ${props => props.width === "auto" && css`
        width:auto;
    `}
`;

export const Tab = styled.div`
    padding: 20px 20px 0;
    @media (min-width:0px) and (max-width:766px){
        padding: 20px 0;
    }
`;

export const Para=styled.p`
    margin:0px;
    font-family: ${Lora};
    font-weight: 600;
`;

export const Head = styled.h1`
    font-family : ${Lora};
    text-decoration: underline;
    color:orangered;
    text-align : center;
`;

const StatusColor = status =>{
    switch (status) {
        case "Delivered":
            return "4EDC07";
        case "Dispatched":
            return "1E14F7";
        default:
            return "F83535";
    }
};

export const StyleStatus =styled.h5`
    font-family : ${Lora};
    color: #${({ status }) => StatusColor(status)};
    text-align:center;
    vertical-align: middle !important;
    font-weight: 900;
    margin-top:auto;
`;