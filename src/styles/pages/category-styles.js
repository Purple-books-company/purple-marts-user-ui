import styled,{css} from "styled-components";
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
     color: white;
     @media screen and (max-width:600px){
          color: black;
    }
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

export const TogglePrice = styled.button`
     border: none;
     font-size: 20px;
     background-color: white;
`;

export const RadioGroup = styled.div`
     padding-left: 30px;
     width: 15rem;
     font-family: ${Lora};
`;

export const PriceLink = styled.label`
    position: relative;
    color: black;
    cursor: pointer;
    font-size: 18px;
    font-weight: 300;
    padding-top: 10px;
    padding-left: 10px;
    border-left: 3px solid transparent;
    :hover{
        color: purple!important;
}
`;

export const SizeLink = styled.label`
    position: relative;
    color: black;
    cursor: pointer;
    font-size: 18px;
    font-weight: 300;
    padding-top: 10px;
    padding-left: 10px;
    border-left: 3px solid transparent;
    :hover{
        color: purple!important;
}
`;


// export const Displaycard = styled.div`
//     display: flex;
//     position: relative;
//     margin: 10px auto;
//     padding: 10px 0 0;
//     box-sizing: border-box;
//     flex-wrap: wrap;
//     text-align: center;
//     width: 100%;
// `;
// export const CardDesign = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     margin: 0;
//     padding: 0;
//     :hover {
//        border: 1px solid purple;
//        box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
//        z-index: 500;
//      }
//      @media(min-width:0px) and (max-width:568px){
//           object-fit: contain;
//           position: absolute;
//           width: 20%;
//           margin:5px;
//      }
// `;

// export const Linkdec = styled.a`
//     text-align: center;
//     font-weight: 400;
//     font-size: 20px;
//     font-family: ${Lora};
//     display: block;
//     margin-bottom: 2px;
//     text-transform: uppercase;
//     color:black;
//     text-decoration: none;
//     transition: 0.3s;
//     :hover{
//          color: plum;
//     }
// `;

// export const Procard = styled.div`
//      width: 16rem;
//      height: 95%;
//      width: 100%;
//      position: relative;
//      box-shadow: 0 2px 7px #dfdfdf;
//      margin: 8px;
//      background-color: white;
     
// `;

//  export const Badge =styled.div`
//     position: absolute;
//      left: 0;
//      top: 20px;
//      text-transform: uppercase;
//      font-size: 13px;
//      font-weight: 700;
//      background: purple;
//      color: white;
//      padding: 3px 10px;
//     ${props => props.Status==='Null' && css`
//      display: none;
//   `}
// `;

// export const ProductThumb = styled.div`
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      height: 65%;
//      object-fit: contain;
//      background: white;
// `;

// export const ProductCategory = styled.span`
//      display: block;
//      font-size: 12px;
//      font-weight: 700;
//      text-transform: uppercase;
//      color: black;
//      margin-bottom: 18px;
// `;

// export const ProductDescription = styled.p`
//      text-align: center;
//      font-size: 15px;
//      font-family: ${Slab};
//     line-height: 22px;
//     margin-bottom: 18px;
//     color: gray;
// `;

// export const ProductBottomDetails = styled.div`
//      overflow: hidden;
//      border-top: 1px solid #eee;
//      padding-top: 20px;
// `;

// export const ProductPrice = styled.div`
//      float: left;
//      width: 50%;
//      font-size:18px;
//      color: black;
//      font-weight: 400;
//      padding-left: 20px;
//      padding-bottom: 10px;
//      display: flex;
//      align-items: center;
// `;

// export const PriceSmall = styled.small`
//      font-size: 80%;
//     font-weight: 400;
//     text-decoration: line-through;
//     display: inline-block;
//     margin-right: 5px;
// `;

// export const OfferColor = styled.div`
//      color: purple;
//      font-weight: 600;
// `;


// export const ProLink = styled.a`
//      text-align:center;
//      display: inline-block;
//      padding-left: 30px;
//      padding-right: 10px;
//      padding-bottom: 3px;
//     margin-left: 5px;
//     font-size: 22px;
//     color: purple;
//     transition: 0.3s;
//     :hover{
//          color: plum;
//     }
// `;

export const Card = styled.div`
     box-shadow :0 2px 7px #dfdfdf;
     padding:0px;
     margin:10px;
      @media screen and (max-width:568px){
          margin-right: 10%;
          width: 30%;
          justify-content: space-around;
    }
`;

export const Badge = styled.h2`
     background-color:purple;
     color:white;
     position:absolute;
     text-transform:uppercase;
     padding:4px 8px;
     margin-top:10px;
     font-size:13px;
     font-weight:700;
     ${props => props.Status==='Null' && css`
           display: none;
   `}
`;

export const CardImg = styled.img`
     width:100%;
     height:12vw;
     object-fit :contain;
     @media screen and (max-width:568px){
          height: 30vw;
          margin-top: 5px;
    }
`;

export const CardProductName = styled.a`
     color:black;
     text-decoration :none;
     text-align :center;
     font-weight :400;
     font-size :20px;
     display:block;
     text-transform:uppercase;
     transition:0.3s;
     margin-bottom :2px;
     cursor: pointer;
     :hover{
          color: plum;
     }
     @media screen and (max-width:568px){
          font-size:13px;
    }
`;

export const CardProductDescription = styled.p`
     text-align :center;
     font-size :15px;
     line-height :22px;
      margin-bottom:18px;
      color:gray;
`;

export const CardProductBottomDetails = styled.div`
     border-top :1px solid #eee;
     padding-top:10px;
     font-size:1.125rem;
     color:black;
     font-weight:400;
     padding-left:10px;
     padding-bottom:10px;
     display:flex;
     align-items:center;
     @media screen and (max-width:568px){
          font-size: 1.3rem;
          flex-wrap: wrap;
          text-align: center;
    }
`;

export const CardProductOldprice = styled.small`
     font-size:80%;
     font-weight:400;
     text-decoration:line-through;
     display:inline-block;
     margin-right:5px;
     @media screen and (max-width:568px){
          font-size: 1.3rem;
          text-align: center;
    }
`;

export const CardProductOffer = styled.div`
     color:purple;
     font-weight:600;
     @media screen and (max-width:568px){
          padding-left: 5px;
          font-size: 1.3rem;
          text-align: center;
    }
`;

export const CardWishlist = styled.a`
     text-align:center;
     display:inline-block;
     padding-left:13px;
     padding-bottom:3px;
     margin-left:5px;
     font-size:22px;
     color:purple;
     transition:0.3s;
     :hover{
          color: plum;
     }
     @media screen and (max-width:568px){
          padding-left: 40px;
          font-size: 1.3rem;
          text-align: center;
    }
`;