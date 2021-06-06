import React, { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im"
import { BiCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { CartItemBox, CartDetail, Image, CheckoutBox, CheckOutBtn, QtyBtn, CartTitleInfo, EmptyImg, CartEmpty } from "../../../styles/pages/cart-page"
import CartHead from "./CartHead";
import data from '../../../api/CartProducts.json'
import empty_cart from '../../../assets/images/empty_cart.png'

const Cart = () => {
    const [item, setItem] = useState(data)
    const [total, setTotal] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [empty, setEmpty] = useState(0)
    const [cod, setCod] = useState(false)

    useEffect(() => {
        setItem(item)
        calcTotal()
        setShipping(50)
        setEmpty(item.length)
    }, [item])

    const calcTotal = () => {
        let tempTotal = 0;
        item.forEach((e) => {
            let temp = tempTotal + (e.price * e.quantity)
            tempTotal = temp
            console.log(total)
        })
        setTotal(tempTotal)
    }

    const payMethod = () => {
        setCod(!cod)
    }

    return (

        <div className="container mt-5">

            <CartHead />
            {empty !== 0
                ? <>
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
                                            <CartDetail ><Image src={product.url} /></CartDetail>
                                            <CartDetail align="left">{product.productName}</CartDetail>
                                            <CartDetail >₹{product.price}</CartDetail>
                                            <CartDetail className="form-inline" type="Quantity">
                                                <QtyBtn
                                                    onClick={() => {
                                                        if (product.quantity !== 1) {
                                                            let newItem = [...item]
                                                            newItem[index].quantity -= 1
                                                            setItem(newItem)
                                                            // setItem(items => [...items])
                                                        }
                                                    }}
                                                >
                                                    <FiMinusCircle className="mx-2" />
                                                </QtyBtn>
                                                {product.quantity}
                                                <QtyBtn onClick={() => {
                                                    let newItem = [...item]
                                                    newItem[index].quantity += 1
                                                    setItem(newItem)
                                                }}>
                                                    <FiPlusCircle className="mx-2" />
                                                </QtyBtn>
                                            </CartDetail>
                                            <CartDetail className="col">₹{product.price * product.quantity}</CartDetail>
                                            <CartDetail className="col" hover="true">
                                                <ImCross onClick={() => {
                                                    let newItem = [...item]
                                                    newItem.splice(index, 1)
                                                    setItem(newItem)
                                                }} />
                                            </CartDetail>
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
                                <p className="col">₹{total}</p>
                            </span>
                            <span className="row">
                                <b className="col">Shipping:</b>
                                <p className="col">₹{shipping}</p>
                            </span>

                            <div className="border-bottom border-top">
                                <span className="row ">
                                    <b className="col">Total:</b>
                                    <p className="col">₹{total + shipping}</p>
                                </span>
                            </div>
                            <CheckOutBtn>Checkout ₹{total + shipping}</CheckOutBtn>
                        </div>
                    </CheckoutBox>
                </>
                :
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

