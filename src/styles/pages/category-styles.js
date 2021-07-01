import styled,{css} from "styled-components";
import { Lora, Slab } from "../themes/font-styles";
import {Carousel} from "react-bootstrap";

export const Productpage = styled.div`
      margin-top: 7em;
      @media(min-width:0px) and (max-width:568px){
          margin-top: 5em;
    }
`;

export const SidebarWrapper = styled.div`                                                                                                       
     min-height: 20vh;
    margin-left: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
    @media screen and (max-width:600px){
          display: none;
    }
`;

export const SidebarHeading = styled.div`
     font-family: ${Slab};
     padding: 0.875rem 1.25rem;
    font-size: 18px;
    border-bottom: 1px solid lightgray;
    text-transform: uppercase;
`;

export const Toggle = styled.button`
     border: none;
     font-size: 30px;
     background-color: white;
     color: black;
     @media screen and (max-width:600px){
          color: black;
          display: none;
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
    font-size: 17px;
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
     margin-bottom: 14px;
`;

export const PriceLink = styled.label`
    position: relative;
    color: black;
    cursor: pointer;
    font-size: 17px;
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
    font-size: 17px;
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

//card

export const CardDesign = styled.div`
    box-sizing: border-box;
    display: flex;
    margin: 0;
    padding: 0;
    /* :hover {
       border: 1px solid purple;
       box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
       z-index: 500;
     } */
     @media(min-width:0px) and (max-width:568px){
          object-fit: contain;
          position: absolute;
          width: 20%;
          margin:5px;
     }
`;

export const Linkdec = styled.a`
    text-align: center;
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
     width: 16rem;
     height: 95%;
     width: 100%;
     position: relative;
     box-shadow: 0 2px 7px #dfdfdf;
     margin: 8px;
     background-color: white;
     
`;

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

export const ProductThumb = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     height: 65%;
     object-fit: contain;
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
     text-align: center;
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
     padding-left: 30px;
     padding-right: 10px;
     padding-bottom: 3px;
    margin-left: 5px;
    font-size: 22px;
    color: purple;
    transition: 0.3s;
    :hover{
         color: plum;
    }
`;

export const Card = styled.div`
     box-shadow :0 2px 7px #dfdfdf;
     padding:0px;
     margin:10px;
     @media screen and (max-width:568px){
          margin:5px;
          width: 46%;
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
   @media screen and (max-width:568px){
          font-size:10px;
    }
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
          font-size:15px;
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
     color:black;
     font-weight:400;
     padding-left:10px;
     padding-bottom:10px;
     display:flex;
     align-items:center;
     @media screen and (max-width:568px){
          font-size: 1.2rem;
          flex-wrap: wrap;
          text-align: center;
          padding-left: 30px;
    }
`;

export const CardProductOldprice = styled.small`
     font-size:80%;
     font-weight:400;
     text-decoration:line-through;
     display:inline-block;
     margin-right:5px;
     @media screen and (max-width:568px){
          font-size: 1rem;
          text-align: center;
    }
`;

export const CardProductOffer = styled.div`
     color:purple;
     font-weight:600;
     @media screen and (max-width:568px){
          font-size: 1rem;
          text-align: center;
    }
`;

export const CardWishlist = styled.button`
     text-align:center;
     display:inline-block;
     padding-left:8px;
     border: none;
     background-color: white;
     padding-bottom:3px;
     margin-left:5px;
     font-size:22px;
     color:purple;
     transition:0.3s;
     :hover{
          color: plum;
     }
     :active {
          svg{
               fill: purple;
          }
     }
     @media screen and (max-width:568px){
          font-size: 1.1rem;
          text-align: center;
    }
`;

//Product Details Page

export const ProductImg = styled.div`
     @media screen and (max-width:568px){
          margin-left: 7%;
    }
`;

export const ProductNameDetail = styled.h2`
     padding-top :5%;
     padding-bottom: 5px;
     font-size:25px;
     text-transform:uppercase;
     font-family: ${Slab};
     @media screen and (max-width:568px){
          margin-top: -25%;
    }
`;

export const ProductPriceDetail = styled.h4`
     font-size:20px;
     font-family:${Lora};
     @media screen and (max-width:568px){
          margin-top: -5%;
    }
`;

export const ProductOldPriceDetail = styled.del`
     font-size:18px;
     font-family:${Lora};
     margin-left:5px;
`;

export const ProductOfferDetail = styled.span`
     font-size:22px;
     font-family:${Slab};
     margin-left:15px;
     text-transform:uppercase;
     color:purple;
`;

export const ProductColorDetail = styled.button`
     width:4%;
     height:75%;
     border-color: white;
     border-radius:50%;
     margin-left:5px;
     font-size:10px;
     &.active{
          border: 4px solid plum;
     }
     @media screen and (max-width:568px){
          width: 7%;
    }
`;

export const QtyBtn = styled.button`
    border: none;
    background: none;
    display: flex;
    font-size: 18px;
    margin-top: 3px;
    :hover{
        color:purple;
    }
`;

export const ProductSubDetail = styled.h2`
     padding-top :2%;
     padding-bottom: 5px;
     font-size:25px;
     text-transform:uppercase;
     font-family: ${Lora};
     @media screen and (max-width:568px){
          font-size: 23px;
    }
`;

export const ProductWriteReview = styled.h3`
     padding-bottom: 5px;
     font-size:22px;
     text-transform:uppercase;
     font-family: ${Lora};
`;

export const FormControl = styled.input`
     :focus{
          box-shadow: 0 0 4px 0 plum;
          border: 1px solid plum;
     }
`;

export const Caro = styled(Carousel)`
     @media screen and (max-width:568px){
          overflow: hidden;
          object-fit: contain;
          width: 85%;
          height: 90%;
          margin-top: -10%;
    }
`;

export const CartButton  = styled.div`
     @media screen and (max-width:568px){
          margin-left: 7%;
    }
`;

export const WishlistButton  = styled.div`
     @media screen and (max-width:568px){
          margin-left: 23%;
          margin-top: -4%;
    }
`;

export const Similar = styled.div`
     @media screen and (max-width:568px){
          justify-content: center;
    }
`;

export const TopButton = styled.div`
     position: fixed;
     width: 100%;
     left: 89%;
     bottom: 40px;
     height: 20px;
     font-size: 2rem;
     z-index: 1;
     cursor: pointer;
     color: plum;
     display: none;
     :hover{
          color: purple;
     }
     @media screen and (max-width:568px){
          display: inline;
    }
`;

//shopbyfilter

export const Shopbyprice = styled.div`
     text-align:center;
     margin:5px;
     text-transform:uppercase;
     font-family:${Lora};
     display: none;
     @media screen and (max-width:568px){
          display: block;
    }
`;

export const Shopbysize = styled.div`
     text-align:center;
     margin:5px;
     text-transform:uppercase;
     font-family:${Lora};
     display: none;
     @media screen and (max-width:568px){
          display: block;
    }
`;

export const Shopcol = styled.div`
     float:left;
     height:7vh;
     width:18%;
     padding:0 10px;
     margin-left:5.5%;
     @media screen and (max-width:568px){
          width: 50%;
          margin-left: 0%;
          float: none;
          padding: 5px;
          margin-bottom: 2%;
    }
`;

export const Shopcard = styled.div`
     box-shadow :2px 2px 2px 2px #dfdfdf;
     border-radius: 5%;
     text-align:center;
     background-color :white;
     &:hover{
          cursor: pointer;
     }
     @media screen and (max-width:568px){
          padding: 0px;
    }
`;

export const Shoplist = styled.li`
     display:inline-block;
     margin-right:15px;
     margin-top :10px;
     height:5vh;
`;

export const LabelforSize = styled.label`
     cursor: pointer;
     font-size: 17px;
`;

export const Size = styled.input`
  visibility: hidden;
  &:checked + ${LabelforSize} {
     color: #f83535;
  }
`;