import { BsArrowLeftShort } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { CartTitleInfo, ContinueBtn, CartTitle, CartItemBox, CartDetail, Image, CheckoutBox, CheckOutBtn } from "./styled"

const Cart = () => {

    return (
        <div>
            <div className="row m-3 ">
                <CartTitle className="col-9">My Cart</CartTitle>
                <ContinueBtn className="col-3" aln="true" >
                    <span className=""><BsArrowLeftShort className="mx-2" />Continue shopping</span>
                </ContinueBtn>
            </div>
            <div className="mt-5">
                <CartItemBox className="row border-bottom">

                    <CartTitleInfo className="col-5" align="right">Product</CartTitleInfo>
                    <CartTitleInfo className="col">Price</CartTitleInfo>
                    <CartTitleInfo className="col">Quantity</CartTitleInfo>
                    <CartTitleInfo className="col">Total</CartTitleInfo>
                </CartItemBox>

                <CartItemBox className="row mt-3 pl-5 border-bottom">
                    <CartDetail className="col-3"><Image src="https://rukminim1.flixcart.com/image/880/1056/koad9jk0/shoe/a/v/v/6-hkk43-adidas-creblu-conavy-scrora-original-imag2sd2zecjdzkr.jpeg?q=50" /></CartDetail>
                    <CartDetail className="col" align="left">ADIDAS Adigram M Running Shoes For Men (Blue)</CartDetail>
                    <CartDetail className="col">₹2,203</CartDetail>
                    <CartDetail className="col" type="Quatity"><FiPlusCircle className="mx-2" />1<FiMinusCircle className="mx-2" /></CartDetail>
                    <CartDetail className="col">₹2,203</CartDetail>
                </CartItemBox>

            </div>
            <CheckoutBox className="row p-3">
                <div className="col" >
                    <p style={{ alignContent: 'left', fontWeight: 'bolder' }}>Choose Payment Mode:</p>
                    <span className="m-3 "> <FaCheckCircle color="red" className="mx-2" /> Pay By Online</span>
                    <br /><br />
                    <span className="m-3 mt-5"><BiCircle color="gray" className="mx-2" />Cash on delivery</span>
                </div>
                <div className="col-5 ml-5" style={{ alignContent: 'right' }}>
                    <span className="row"><b className="col">Subtotal:</b><p className="col">₹2,203</p></span>
                    <span className="row"><b className="col">Shipping:</b><p className="col">₹50</p></span>

                    <div className="border-bottom border-top">
                        <span className="row "><b className="col">Total:</b><p className="col">₹2,253</p></span>

                    </div>
                    <CheckOutBtn>Checkout ₹2,253</CheckOutBtn>
                </div>

            </CheckoutBox>


        </div>
    )
}

export default Cart;

