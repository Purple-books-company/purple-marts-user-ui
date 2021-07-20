import React, { useState } from "react";
import { Table, Row, Col , Card } from "react-bootstrap"; 
import {Tab, Para, StyleStatus , TabData} from '../../../../styles/pages/order-page'
import data from "../../../../api/Orders.json"
import {Slab} from '../../../../styles/themes/font-styles';
import {NavDiv, ProfileLink} from '../../../../styles/pages/profile-page';
import { MdContentCopy , MdOpenInNew } from 'react-icons/md';
import Clipboard from 'react-clipboard.js';

function Orders() {
    
    const [order, setOrder] = useState(data)
    
    const card = order.map((id) =>
        <Card className='mb-lg-2 mb-md-3'>
            <ProfileLink to='../profile/details'>
            <Card.Header>
                <Table style={{marginBottom:0}}>
                    <tbody>
                        <tr>
                            <TabData width='med' font='bold'>Ordered on</TabData>
                            <TabData float='right'>Order ID</TabData>
                            <TabData width='auto' float='right'>#{id.orderRef}</TabData>
                        </tr>
                        <tr>
                            <TabData>21/11/11</TabData>
                            <TabData colSpan={2} width='full'>Shipped to Gowthaman</TabData>
                        </tr>
                    </tbody>
                </Table>
            </Card.Header>
            </ProfileLink>            
            <Card.Body>
                <Table style={{marginBottom:0}}>
                    <tbody>
                        <tr>
                            <TabData width='med' font='bold'>Delivered</TabData>
                            <TabData width='big'>{id.deliveryDate}</TabData>
                            <TabData font='bold'>Tracking ID</TabData>
                            <TabData>:</TabData>
                            <TabData>CT040857193IN</TabData>
                            <TabData width='small' >
                                <Clipboard data-clipboard-text='CT040857193IN' style={{border:'none', padding:0, backgroundColor:'#fff'}}>
                                    <MdContentCopy className='mb-1' size='20' />
                                </Clipboard>
                            </TabData>
                        </tr>
                        <tr>
                            <TabData width='med' font='bold'>Total</TabData>
                            <TabData>₹ {id.total}</TabData>
                            <TabData font='bold'>Tracking URL</TabData>
                            <TabData>:</TabData>
                            <TabData><a style={{padding:0}} href="https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx" rel="noreferrer" target='_blank'>{add3Dots('https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx' , 22)}</a></TabData>
                            <TabData width='small'>
                                <a href="https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx" rel="noreferrer" target='_blank' className='px-0'><MdOpenInNew className='mb-1' style={{color:'#000'}} size='20' /></a>
                            </TabData>
                        </tr>
                        <tr>
                            <TabData width='med' font='bold'>No. of Items</TabData>
                            <TabData>{id.noItems}</TabData>
                            <TabData font='bold'>Payment</TabData>
                            <TabData>:</TabData>
                            <TabData>{id.payment}</TabData>
                        </tr>
                    </tbody>
                </Table>                              
            </Card.Body>
        </Card>
    );

    function add3Dots(string, limit)
    {
        var dots = "...";
        if(string.length > limit)
        {
            string = string.substring(0,limit) + dots;
        }
        
        return string;
    }

    const tab = order.map((id) =>
        <div>
            <ProfileLink to='../profile/details'>
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
            </ProfileLink>
            <hr />
        </div>
    );
    return (
        <>
            <Col xs={10} id="as" className="d-none d-md-block">
                <NavDiv type='main'>
                <h4 style={{fontFamily:Slab}} >Order History</h4>
                <Tab>
                    <h5 style={{fontFamily:Slab}}>Here are the orders you've placed since your account was created.</h5>
                    {card}
                </Tab>
                <br />
                </NavDiv>
            </Col>
            <div className="d-md-none">
                <h5 style={{fontFamily:Slab, margin:'10px 0 0'}} >Order History</h5>
                <Tab>
                    <h6 style={{fontFamily:Slab}}>Here are the orders you've placed since your account was created.</h6>
                    {tab}
                </Tab>
                <br />
                <br /><br />
            </div>
        </>
    );
}

export default Orders;