import styled, { css } from 'styled-components';
import { Row } from 'react-bootstrap'
import { Lora, Slab } from '../themes/font-styles';

export const Input=styled.input`
    width:75%;     

    ${props => props.width === "full" && css`
        width:100%;
    `}

    @media (min-width:0px) and (max-width:766px){
        width:100% !important; 
    }

    :read-only{
        background-color: #fff;
    }
    :focus{
        box-shadow: inset 0 -1px 0 #fff;
        border: 1px solid #ced4da;
    }

    :active{
        border-color: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const StyledRow=styled(Row)`
    padding:0 4rem; 
    margin:0 4rem;
    font-family:${Slab};

    @media (min-width:0px) and (max-width:992px){
        padding:0; 
        margin:0;
    }
`;

export const StyledButton=styled.button`
    float:right;
    font-family:${Lora};
    font-weight:bold;
    margin:0.625rem 12rem;
    color:#fff !important;
    @media (min-width:0px) and (max-width:766px){
        margin:0.625rem 1rem !important;
    }
    width:auto;

    ${props => props.type === "save" && css`
        width:auto;
        float:none;
        margin:0.625rem 0 0.625rem 28vw;
        @media (min-width:0px) and (max-width:766px){
            width:auto;
            float:none;
            margin:0 auto 0.5rem !important;
        }
    `}

    :hover{
        color:#fff;
    }
    :focus{
        box-shadow: inset 0 0px 0 #fff;
    }
`;

export const Msg=styled.h5`
    margin-left:20rem;
    font-family:${Slab};
    font-weight:800;
    
    @media (min-width:0px) and (max-width:766px){
        margin:0 0 1rem !important;
        text-align:center;
    }
`;
