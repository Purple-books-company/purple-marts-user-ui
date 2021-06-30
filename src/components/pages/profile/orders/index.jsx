import React, { useState } from "react";
import {Container, Table, Row, Col } from "react-bootstrap"; 
import {TabBody, TabHead, Tab, Para, StyleStatus} from '../../../../styles/pages/order-page'
import data from "../../../../api/Orders.json"
import {Slab} from '../../../../styles/themes/font-styles';
import  SideNav  from '../SideNav';
import {NavDiv, ProfileLink} from '../../../../styles/pages/profile-page';

function Order() {

    let StatusStyle={
        textAlign: 'center',
        verticalAlign: 'middle'
    };
    
    const [order, setOrder] = useState(data)
    
    const tabBody = order.map((id) =>
        <tr>            
            <td><ProfileLink to='../details'>{id.orderRef}</ProfileLink></td>
            <td>{id.orderDate}</td>
            <td>{id.deliveryDate}</td>
            <td>₹.{id.total}</td>
            <td>{id.noItems}</td>
            <td>{id.payment}</td>
            <td style={StatusStyle}><StyleStatus status={id.status}>{id.status}</StyleStatus>
                {/* <StyledButton className=" shadow-none " status={id.status}>{id.status}</StyledButton> */}
                </td>
            {/* <td><a href={id.invoice}><MdPictureAsPdf style={IconStyle}/></a></td> */}
            {/* <td><a>Details</a><br/>
            <a>Reorder</a></td> */}
        </tr>
    );

    const tab = order.map((id) =>
        <div>
            <ProfileLink to='../details'>
                <Row>
                    <Col xs={4}>
                        <Para>OrderRef</Para>
                        <Para>Ordered on</Para>
                        <Para>Est. Delivery</Para>
                        <Para>Total</Para>
                        <Para>{id.noItems} items</Para>
                    </Col>
                    <Col xs={2} style={{textAlign:'center'}}>
                        <Para>:</Para>
                        <Para>:</Para>
                        <Para>:</Para>
                        <Para>:</Para>
                    </Col>
                    <Col >
                        <Para>{id.orderRef}</Para>
                        <Para>{id.orderDate}</Para>
                        <Para>{id.deliveryDate}</Para>
                        <Para>₹.{id.total}</Para>
                        <StyleStatus style={{float:"left"}} status={id.status}>{id.status}</StyleStatus><br/>
                    </Col>
                </Row>
            {/* <Para>{id.noItems} items</Para>
            <StyleStatus style={{float:"left"}} status={id.status}>{id.status}</StyleStatus><br/> */}
            </ProfileLink>
            <hr />
        </div>
    );
    return (
        <Container fluid style={{ clear:'both', marginTop:'5%' }}>
            <Row>
                <SideNav />

                <Col xs={10} id="as" className="d-none d-md-block">
                    <NavDiv type='main'>
                    <h4 style={{fontFamily:Slab}} >Order History</h4>
                    <Tab>
                        <h5 style={{fontFamily:Slab}}>Here are the orders you've placed since your account was created.</h5>
                        <Table bordered >
                            <TabHead>
                                <tr>
                                    <td>Order<br/>
                                        Reference</td>
                                    <td>Ordered<br />
                                        Date</td>
                                    <td>Expected<br />
                                        Delivery Date</td>
                                    <td>Total<br/>
                                        Price</td>
                                    <td>No. of<br />
                                        Items</td>
                                    <td>Payment<br />
                                        Method</td>
                                    <td>Status</td>
                                    {/* <td>Invoice</td> */}
                                    {/* <td></td> */}
                                </tr>
                            </TabHead>
                            <TabBody>
                                {tabBody}
                            </TabBody>
                        </Table>
                    </Tab>
                    <br />
                    </NavDiv>
                </Col>
            </Row>
            <div className="d-md-none">
                <h5 style={{fontFamily:Slab, margin:'10px 0 0'}} >Order History</h5>
                <Tab>
                    <h6 style={{fontFamily:Slab}}>Here are the orders you've placed since your account was created.</h6>
                    {tab}
                </Tab>
                <br />
                <br /><br />
            </div>
        </Container>
    );
}

export default Order;