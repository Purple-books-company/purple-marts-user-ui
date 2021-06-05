import { BsArrowLeftShort } from "react-icons/bs";
import { ContinueBtn, CartTitle } from "../../../styles/cart-page"

const CartHead = () => {
    return (
        <>
            <div className="row container">
                <CartTitle className="col">My Cart</CartTitle>
                <ContinueBtn className="" aln="true" >
                    <span className=""><BsArrowLeftShort className="mx-2" />Continue shopping</span>
                </ContinueBtn>
            </div>

        </>
    )
}

export default CartHead;