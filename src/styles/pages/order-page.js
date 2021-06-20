import styled from "styled-components"
import {Lora , Slab} from '../themes/font-styles'
import {LightShade, DarkShade} from "../themes/color-theme"

export const TabHead= styled.thead`
    background-color: ${LightShade};
    font-weight: 700;
    font-size: 1.125rem;
    font-family: ${Slab};
    color:white;
    text-align:center;
    vertical-align: middle !important;
`;

export const TabBody = styled.tbody`
    white-space: pre-line;
    font-size: 0.9rem;
    font-weight:700;
    color: ${DarkShade};
    background-color: #fff;
    font-family: ${Lora};
    text-align:center;
    vertical-align: middle !important;
`;

export const Tab = styled.div`
    padding: 20px;
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