import styled from "styled-components"
import {Lora , Slab} from '../themes/font-styles'
import {LightShade, DarkShade, Silver} from "../themes/color-theme"

export const TabHead= styled.thead`
    background-color: ${LightShade};
    font-weight: 700;
    font-size: 18px;
    font-family: ${Slab};
    color:white;
    text-align:center;
    vertical-align: middle !important;
`;

export const TabBody = styled.tbody`
    white-space: pre-line;
    font-size: 13px;
    font-weight:700;
    color: ${DarkShade};
    font-family: ${Lora};
    text-align:center;
    vertical-align: middle !important;
`;

export const Tab = styled.div`
    padding: 20px;
    background-color: #fff;
`;

export const Para=styled.p`
    margin:0px;
    font-weight: 600;
    color:grey;
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
            return "green";
        case "Dispatched":
            return "blue";
        default:
            return "red";
    }
};

export const StyleStatus =styled.h5`
    color: ${({ status }) => StatusColor(status)};
    text-align:center;
    vertical-align: middle !important;
    font-weight: 900;
    margin-top:auto;
`;