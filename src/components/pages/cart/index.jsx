import React, { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im"
import { BiCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { CartItemBox, CartDetail, Image, CheckoutBox, CheckOutBtn, QtyBtn, CartTitleInfo, EmptyImg, CartEmpty } from "../../../styles/pages/cart-page"
import CartHead from "./CartHead";
import empty_cart from '../../../assets/images/empty_cart.png'
import { ApiGetService, ApiPostService } from '../../../services/api/api-services';
import { retriveDetails } from '../../../services/storage/details';
import Loading from '../../utils/loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [item, setItem] = useState(["initial"])
    const [delInfo, setDelInfo] = useState({ "total": 0, "shipping": 0, "delCharges": true })
    const [cod, setCod] = useState(false)

    useEffect(() => {
        async function fetchApi() {
            let usr = await retriveDetails()
            let res = await ApiGetService(process.env.REACT_APP_CART_GET + "/" + usr.id + "/")
            setItem(res)
        }
        fetchApi()
    }, [])


    useEffect(() => {
        calcTotal()
    }, [item])

    function messages(name, str) {
        setDelInfo(prevState => ({
            ...prevState,
            [name]: str
        }));
    }

    const calcTotal = () => {
        let tempTotal = 0;
        let deliveryAmount = 0;
        item.forEach((e) => {
            tempTotal = tempTotal + (e.amount * e.count)
            deliveryAmount = deliveryAmount + e.deliveryAmount
        })
        messages("total", tempTotal)
        messages("shipping", deliveryAmount)
        if (tempTotal > 500) {
            messages("delCharges", false)
            messages("shipping", 0)
        }
    }

    const payMethod = () => {
        setCod(!cod)
    }

    return (

        <div className="container mt-5">

            <CartHead />
            {
                item[0] === "initial" && <Loading />
            }
            {item.length !== 0 && item[0] !== "initial"
                && <>
                    <table className="w-100" style={{ margin: '50px', marginLeft: '0px' }}>
                        <thead>
                            <CartItemBox className="border-bottom">
                                <CartTitleInfo className="text-light">Pic</CartTitleInfo>
                                <CartTitleInfo align="">Product</CartTitleInfo>
                                <CartTitleInfo className="">Price</CartTitleInfo>
                                <CartTitleInfo className="">Quantity</CartTitleInfo>
                                <CartTitleInfo className="">Total</CartTitleInfo>
                                <CartTitleInfo className="text-light">rem</CartTitleInfo>
                            </CartItemBox>
                        </thead>
                        <tbody>
                            {
                                item.map((product, index) => {
                                    return (
                                        <CartItemBox className="mt-3 pl-5 border-bottom" key={product.id}>
                                            <CartDetail ><Image src={product.image} /></CartDetail>
                                            <CartDetail align="left">
                                                {product.name} <br />
                                                {
                                                    // delivery amount for each product and if our condition is satisfy its been free delivery
                                                    delInfo.delCharges ?
                                                        <p style={{ marginLeft: '2%' }}>| ₹{product.deliveryAmount}</p>
                                                        :
                                                        <del style={{ marginLeft: '2%' }}>| ₹{product.deliveryAmount}</del>
                                                }
                                            </CartDetail>
                                            <CartDetail >₹{product.amount}</CartDetail>
                                            <CartDetail className="form-inline" type="Quantity">
                                                <QtyBtn
                                                    onClick={() => {
                                                        if (product.count !== 1) {
                                                            let newItem = [...item]
                                                            newItem[index].count -= 1
                                                            setItem(newItem)
                                                            // setItem(items => [...items])
                                                        }
                                                    }}
                                                >
                                                    <FiMinusCircle className="mx-2" />
                                                </QtyBtn>
                                                {product.count}
                                                <QtyBtn onClick={() => {
                                                    let newItem = [...item]
                                                    newItem[index].count += 1
                                                    setItem(newItem)
                                                }}>
                                                    <FiPlusCircle className="mx-2" />
                                                </QtyBtn>
                                            </CartDetail>
                                            <CartDetail className="col">₹{product.amount * product.count}</CartDetail>
                                            <CartDetail className="col" hover="true">
                                                <ImCross onClick={async () => {
                                                    let newItem = [...item]
                                                    newItem.splice(index, 1)
                                                    setItem(newItem)
                                                    await ApiPostService(process.env.REACT_APP_CART_DELETE, {
                                                        "product": product.product,
                                                        "varient": product.varient,
                                                        "customer": product.customer
                                                    }
                                                    )
                                                    toast("removed successfully", {
                                                        style: { background: "#F1797B", textAlign: 'center', color: "#ffffff" }
                                                    })
                                                }} />
                                            </CartDetail>
                                            <ToastContainer
                                                position="bottom-center"
                                                autoClose={2000}
                                                hideProgressBar
                                                rtl={false}
                                                pauseOnFocusLoss
                                                pauseOnHover />
                                        </CartItemBox>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                    <CheckoutBox className="row p-3 sticky-bottom">
                        <div className="col" >
                            <p style={{ alignContent: 'left', fontWeight: 'bolder' }}>Choose Payment Mode:</p>
                            <span className="m-3 ">
                                {
                                    cod ?
                                        <BiCircle color="gray" className="mx-2" onClick={payMethod} />
                                        :
                                        <FaCheckCircle color="red" className="mx-2" onClick={payMethod} />
                                }
                                Pay By Online</span>
                            <br /><br />
                            <span className="m-3 mt-5">
                                {
                                    cod ? <FaCheckCircle color="red" className="mx-2" onClick={payMethod} />
                                        : <BiCircle color="gray" className="mx-2" onClick={payMethod} />

                                }
                                Cash on delivery
                            </span>
                        </div>
                        <div className="col-5 ml-5" style={{ alignContent: 'right' }}>
                            <span className="row">
                                <b className="col">Subtotal:</b>
                                <p className="col">₹{delInfo.total}</p>
                            </span>
                            <span className="row">
                                <b className="col">Shipping:</b>
                                <p className="col">₹{delInfo.shipping}</p>
                            </span>

                            <div className="border-bottom border-top">
                                <span className="row ">
                                    <b className="col">Total:</b>
                                    <p className="col">₹{delInfo.total + delInfo.shipping}</p>
                                </span>
                            </div>
                            <CheckOutBtn>Checkout ₹{delInfo.total + delInfo.shipping}</CheckOutBtn>
                        </div>
                    </CheckoutBox>
                </>
            }{
                item.length === 0 &&
                <div className="justify-content-center text-center">
                    <div className="container justify-content-center d-flex">
                        <EmptyImg src={empty_cart} alt="" srcset="" />
                    </div>
                    <CartEmpty className="h2">your cart is empty</CartEmpty>
                    <CartEmpty>Looks like you have not added any product to your cart yet</CartEmpty>
                </div>
            }
        </div>
    )
}

export default Cart;