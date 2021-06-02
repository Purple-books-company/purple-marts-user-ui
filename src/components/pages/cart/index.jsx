import 'bootstrap/dist/css/bootstrap.min.css';
import { ContinueBtn, Thead, Image } from './styled'
import { FaArrowLeft } from 'react-icons/fa';

const Cart = () => {
    return (
        <div>
            <div style={{ background: 'white', margin: "100px", boxshadow: '#979797' }}>

                <div className="row m-5">
                    <h1 className="col font-weight-bolder">My Cart</h1>
                    <ContinueBtn className="col-2-lg">
                        <span><FaArrowLeft style={{ marginLeft: '7px', marginRight: '3px' }} /> continue shopping</span>
                    </ContinueBtn>
                </div>
                <div className="row mb-3">
                    <div className="col w-100"></div>
                    <Thead className="col">Product</Thead>
                    <Thead className="col">Price</Thead>
                    <Thead className="col">Qty</Thead>
                    <Thead className="col">Total</Thead>
                </div>
                <div className="row">
                    <div className="col">
                        <Image src="https://rukminim1.flixcart.com/image/580/696/koad9jk0/shoe/w/v/0/6-hkk43-adidas-creblu-conavy-scrora-original-imag2sd2r7cgumgv.jpeg?q=50" />
                    </div>
                    <div className="col">
                        <p>ADIDAS
                            <br />
                            Adigram M Running Shoes
                        </p>
                    </div>
                    <div className="col">₹2,203</div>
                    <div className="col">1</div>
                    <div className="col">₹2,203</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
