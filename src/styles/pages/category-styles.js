import styled,{css} from "styled-components";
import { LightShade } from "../themes/color-theme";
import { Lora, Slab } from "../themes/font-styles";

export const SidebarWrapper = styled.div`
     min-height: 20vh;
    margin-left: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
`;

export const SidebarHeading = styled.div`
     font-family: ${Slab};
     padding: 0.875rem 1.25rem;
    font-size: 20px;
    border-bottom: 1px solid lightgray;
`;

export const Toggle = styled.button`
     border: none;
     font-size: 30px;
     background-color: white;
`;

export const ListGroup = styled.div`
     width: 15rem;
     font-family: ${Lora};
     margin-left: -5mm;
`;

export const PageContentWrapper = styled.div`
     min-width: 0;
     width: 100%;
`;

export const UnorderedList = styled.ul`
     height: 100%;
     width: 100%;
     list-style: none;
`;

export const Links = styled.a`
    position: relative;
    color: black;
    text-decoration: none !important;
    font-size: 18px;
    padding-top: 10px;
    padding-left: 10px;
    font-weight: 500;
    display: block;
    width: 100%;
    border-left: 3px solid transparent;
    :hover{
        color: purple!important;
}
`;


export const Displaycard = styled.div`
    display: flex;
    position: relative;
    margin: 10px auto;
    padding: 10px 0 0;
    box-sizing: border-box;
    flex-wrap: wrap;
    text-align: center;
`;
export const CardDesign = styled.div`
   -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    :hover {
       border: 1px solid purple;
       box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
       z-index: 500;
     }
`;

export const Linkdec = styled.a`
    font-weight: 400;
    font-size: 20px;
    font-family: ${Lora};
    display: block;
    margin-bottom: 2px;
    text-transform: uppercase;
    color:black;
    text-decoration: none;
    transition: 0.3s;
    :hover{
         color: plum;
    }
`;

export const Procard = styled.div`
     width: 250px;
     position: relative;
     box-shadow: 0 2px 7px #dfdfdf;
     margin: 10px;
     background-color: white;
`;

 export const Badge =styled.div`
    position: absolute;
     left: 0;
     top: 20px;
     text-transform: uppercase;
     font-size: 13px;
     font-weight: 700;
     background: purple;
     color: white;
     padding: 3px 10px;
    ${props => props.Status==='Null' && css`
     display: none;
  `}
`;

export const ProductThumb = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     height: 250px;
     background: white;
`;

// export const ProductCategory = styled.span`
//      display: block;
//      font-size: 12px;
//      font-weight: 700;
//      text-transform: uppercase;
//      color: black;
//      margin-bottom: 18px;
// `;

export const ProductDescription = styled.p`
     font-size: 15px;
     font-family: ${Slab};
    line-height: 22px;
    margin-bottom: 18px;
    color: gray;
`;

export const ProductBottomDetails = styled.div`
     overflow: hidden;
     border-top: 1px solid #eee;
     padding-top: 20px;
`;

export const ProductPrice = styled.div`
     float: left;
     width: 50%;
     font-size:18px;
     color: black;
     font-weight: 400;
     padding-left: 20px;
     padding-bottom: 10px;
     display: flex;
     align-items: center;
`;

export const PriceSmall = styled.small`
     font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
`;

export const OfferColor = styled.div`
     color: purple;
     font-weight: 600;
`;


export const ProLink = styled.a`
     text-align:center;
     display: inline-block;
     padding-left: 40px;
     padding-bottom: 3px;
    margin-left: 5px;
    font-size: 22px;
    color: purple;
    transition: 0.3s;
    :hover{
         color: plum;
    }
`;







