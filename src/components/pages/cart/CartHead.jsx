import { BsArrowLeftShort } from "react-icons/bs";
import { ContinueBtn, CartTitle } from "../../../styles/pages/cart-page";
import { useHistory } from "react-router";
const CartHead = () => {
  let history = useHistory()
  return (
    <>
      <div className="row container">
        <CartTitle className="col">My Cart</CartTitle>
        <ContinueBtn className="" aln="true" onClick={() => history.push('/')}>
          <span className="">
            <BsArrowLeftShort className="mx-2" />
            Continue shopping
          </span>
        </ContinueBtn>
      </div>
    </>
  );
};

export default CartHead;
