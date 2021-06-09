import React, { useState, useEffect } from "react";
import {Container, Table, Row, Col } from "react-bootstrap"; 
import {TabBody, TabHead, Tab, Para, StyleStatus} from '../../../../styles/pages/order-page'
import { MdPictureAsPdf } from "react-icons/md"
import { VscSync } from 'react-icons/vsc'
import data from "../../../../api/Orders.json"
import { BiSearchAlt2 } from "react-icons/bi";
import {Lora , Slab} from '../../../../styles/themes/font-styles'

function Order() {

    let styles={
        float:'right',
        zIndex:'10',
        fontSize:'20px'
    };
    let StatusStyle={
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle'
    };
    let IconStyle={
        fontSize:'30px',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        alignItems: 'center'
    };
    
    const [order, setOrder] = useState(data)
    
    const tabBody = order.map((id) =>
        <tr>
            <td>{id.orderRef}</td>
            <td>{id.orderDate}</td>
            <td>{id.deliveryDate}</td>
            <td>₹.{id.total}</td>
            <td>{id.noItems}</td>
            <td>{id.payment}</td>
            <td style={StatusStyle}><StyleStatus status={id.status}>{id.status}</StyleStatus>
                {/* <StyledButton className=" shadow-none " status={id.status}>{id.status}</StyledButton> */}
                </td>
            <td><a href={id.invoice}><MdPictureAsPdf style={IconStyle}/></a></td>
            <td><a>Details</a><br/>
            <a>Reorder</a></td>
        </tr>
    );

    const tab = order.map((id) =>
        <div>
            <BiSearchAlt2 style={styles}/>
            <Para>{id.orderRef}</Para>
            <VscSync style={styles}/>
            <Para>{id.orderDate}</Para>
            <Para>{id.deliveryDate}</Para>
            <Para>₹.{id.total}</Para>
            <Para>{id.noItems}</Para>
            <StyleStatus style={{float:"left"}} status={id.status}>{id.status}</StyleStatus><br/>
            <hr />
        </div>
    );
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="m-auto d-none d-lg-block">
                    <img
                    className="img-fluid"
                    src="https://demo.codezeel.com/prestashop/PRS16/PRS160380/PRS01/modules/cz_leftbanner/views/img/left-banner-1.jpg"
                    alt="temporary placeholder" />
                </Col>
                <Col xs={10} id="as" className="d-none d-lg-block">
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
                                    <td>Invoice</td>
                                    <td></td>
                                </tr>
                            </TabHead>
                            <TabBody>
                                {tabBody}
                            </TabBody>
                        </Table>
                    </Tab>
                    <br />
                </Col>
            </Row>
            <div className="d-lg-none">
                <h5 style={{fontFamily:Slab}} >Order History</h5>
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