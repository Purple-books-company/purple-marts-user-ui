import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { DelPara, Header, Image, Link, StyledCard, TabData, TabHead } from "../../../../../styles/pages/order-details";
import data from '../../../../../api/OrderDetails.json'


const OrderDetails = () => {

    const [order, setOrder] = useState(data.products)
    console.log(order);
    const tabBody = order.map((id)=>
        
        <tr className="border-top my-1">
            <TabData><Image src={id.url} /></TabData>
            <TabData align="left"> {id.productName}</TabData>
            <TabData width="etc" >₹ {id.price} </TabData>
            <TabData > {id.quantity} </TabData>
            <TabData width="etc" >₹ {id.price * id.quantity} </TabData>
        </tr>
        
    );

    return(
        <Container fluid>
            <Row>
                <Col xs={2} className="mt-5 d-none d-md-block">
					<ul style={{listStyleType:'none', paddingTop:'30px'}}>
						{/* <li>Personal Information</li>
						<li>Delivery Information</li>
						<li>Order Details</li>
						<li>Log Out</li> */}
                        Subscribe to technoblade
					</ul>
                </Col>
                <Col md={10} className="mt-5">
                    <Header align="right">Order #{data.orderId}</Header>
                    <Row>
                        <Col lg={8}>
                            <table style={{width:'100%'}}>
                                <TabHead>
                                    <tr>
                                        <td></td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Total</td>
                                    </tr>
                                </TabHead>
                                <tbody>
                                    {tabBody}
                                </tbody>
                            </table>
                        </Col>
                        <Col lg={4} md={0} className=''>
                            <StyledCard className="my-2">
                                <Header>Order Summary</Header>
                                <table>
                                    <tr>
                                        <TabData align="left"><p style={{margin:'0px'}}>Subtotal of 3 items</p></TabData>
                                        <TabData align="right" font="none">₹</TabData>
                                        <TabData align="right"> {data.subtotal} </TabData>
                                    </tr>
                                    <tr>
                                        <TabData align="left" padding="etc">Delivery Charges</TabData>
                                        <TabData align="right" padding="etc" font="none">₹</TabData>
                                        <TabData align="right" padding="etc"> {data.delivery} </TabData>
                                    </tr>
                                    <tr className='border-top'>
                                        <TabData align="left" >Total</TabData>
                                        <TabData align="right" font="none">₹</TabData>
                                        <TabData align="right"> {data.subtotal + data.delivery} </TabData>
                                    </tr>
                                </table>
                                <div class="mt-3">
                                    <TabData float="left" >Payment method</TabData>
                                    <TabData float="right" > {data.payment} </TabData>
                                </div>
                                <div>
                                    <TabData float="left"  font="small">Ordered Date</TabData>
                                    <TabData float="right" font="small"> {data.orderDate} </TabData>
                                </div>
                                <div>
                                    <TabData float="left" font="small">Est. Delivery</TabData>
                                    <TabData float="right" font="small"> {data.estDelivery} </TabData>
                                </div>
                            </StyledCard>
                            <StyledCard  className="my-2">
                                <Header>Shipping Information</Header>
                                <DelPara font="big"> {data.delName} </DelPara>
                                <DelPara>{data.address},<br />{data.city}, {data.state}-{data.pincode}.</DelPara>
                                <div className='text-center mt-2'>
                                    <Button style={{width:'50%', backgroundColor:'purple', border:'none'}}>Track Package</Button>
                                </div>
                            </StyledCard>
                            <div style={{textAlign:'right'}}>
                                <Link>Cancel Order</Link><br />
                                <Link>Download Invoice</Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderDetails