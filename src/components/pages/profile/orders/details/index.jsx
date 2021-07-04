import React, { useState } from 'react';
import { Button, Col, Container, Row , Toast , Modal } from "react-bootstrap";
import { DelPara, Header, Image, Link, StyledCard, StyledCol, TabData, TabHead , StyledTable} from "../../../../../styles/pages/order-details";
import data from '../../../../../api/OrderDetails.json';
import SideNav from '../../SideNav';
import { NavDiv } from '../../../../../styles/pages/profile-page';
import { MdContentCopy , MdOpenInNew } from 'react-icons/md';
import Clipboard from 'react-clipboard.js';
import { Slab } from '../../../../../styles/themes/font-styles';


const OrderDetails = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [order, setOrder] = useState(data.products)
    const [copy, setCopy] = useState(false);
    console.log(order);
    const toggleCopy = () => setCopy(!copy);
    function add3Dots(string, limit)
    {
        var dots = "...";
        if(string.length > limit)
        {
            // you can also use substr instead of substring
            string = string.substring(0,limit) + dots;
        }
        
        return string;
    }
    const tabBody = order.map((id)=>
        <>
        <tr className="border-top mt-1">
            <TabData><Image src={id.url} /></TabData>
            <TabData align="left" className='d-none d-sm-block' style={{height:'150px',padding:'60px 0'}}> { id.productName }</TabData>
            <TabData align="left" className='d-block d-sm-none'> {add3Dots(id.productName , 30)}</TabData>
            <TabData width="etc" >₹ {id.price} </TabData>
            <TabData > {id.quantity} </TabData>
            <TabData width="etc" >₹ {id.price * id.quantity} </TabData>
        </tr>
        {/* <tr>
            <td colspan='1'></td>
            <td style={{textAlign:'center', paddingRight:'0.7rem'}} colspan='2'>Write a review!</td>
            <td colspan='2'></td>
        </tr> */}
        </>
        
    );

    return(
        <Container fluid style={{ clear:'both', marginTop:'9%' }}>
            <Row>
                
                <SideNav />
                <StyledCol md={10} paddingR='true'>
                    <NavDiv type="main" mobile='diff'>
                    <Header align="right">Order #{data.orderId}</Header>
                    <Row>
                        <Col lg={8}>
                            <StyledTable>
                                <TabHead>
                                    <tr>
                                        <td></td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Total</td>
                                    </tr>
                                </TabHead>
                                <tbody style={{backgroundColor:'#fff'}}>
                                    {tabBody}
                                </tbody>
                            </StyledTable>
                        </Col>
                        <StyledCol lg={4} md={0} marginL='true'>
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
                            <StyledCard className='my-2'>
                                <Row>
                                    <Col>
                                        <Header>Tracking</Header>
                                    </Col>
                                    <Col>
                                        <Toast show={copy} onClose={toggleCopy}  delay={1000} autohide style={{width:'auto', boxShadow:'none', border:'none'}} closeButton='false'>
                                            <Toast.Body style={{textAlign:'right', padding:0, margin:'5px -10px 0 0'}}>
                                            <strong className="me-auto">Copied!</strong>
                                            </Toast.Body>
                                        </Toast>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DelPara>ID  : {data.trackID}</DelPara>
                                    </Col>
                                    <Col xs={3}>                                        
                                        <Clipboard onClick={toggleCopy} data-clipboard-text={data.trackID} style={{border:'none', padding:0,float:'right', backgroundColor:'#fff'}}>
                                            <MdContentCopy className='mb-1' style={{float:'right'}} size='20' />
                                        </Clipboard>                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10}>
                                        <DelPara>URL  : <a href={data.trackURL} rel="noreferrer" target='_blank'>{data.trackURL}</a></DelPara>
                                    </Col>
                                    <Col xs={2}>
                                        <a href={data.trackURL} rel="noreferrer" target='_blank' ><MdOpenInNew className='mb-1' style={{float:'right', color:'#000'}} size='20' /></a>
                                    </Col>
                                </Row>
                            </StyledCard>
                            <StyledCard  className="my-2">
                                <Header>Shipping Information</Header>
                                <DelPara font="big"> {data.delName} </DelPara>
                                <DelPara>{data.address},<br />{data.city}, {data.state}-{data.pincode}.</DelPara>
                            </StyledCard>
                            <div style={{textAlign:'right'}}>
                                <Link onClick={handleShow}>Cancel Order</Link><br />
                                <Link>Download Invoice</Link>
                            </div>
                        </StyledCol>
                    </Row>
                    </NavDiv>
                </StyledCol>
            </Row>
            <Modal show={show} onHide={handleClose} centered size='sm' style={{textAlign:'center', fontFamily:Slab}}>
                <Modal.Body>
                    <p>Are you sure, you want to cancel the order?</p>
                    <div className='d-flex' style={{justifyContent:'center'}}>
                        <Button className='mx-2 text-light' style={{backgroundColor:'#3EBA2B', border:'none'}} size='sm' onClick={handleClose}>
                            No
                        </Button>
                        <Button className='mx-2' size='sm' style={{backgroundColor:'#F83535', border:'none'}} onClick={handleClose}>
                            Confirm
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>            
        </Container>
    );
};

export default OrderDetails