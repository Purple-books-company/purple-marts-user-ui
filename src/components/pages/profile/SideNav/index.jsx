import { FaUserCog } from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi'
import { Button, Col, Modal } from 'react-bootstrap';
import { NavDiv , ProfileLink } from '../../../../styles/pages/profile-page'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Slab } from "../../../../styles/themes/font-styles";


const SideNav = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Col xs={2} className="d-none d-md-block">
            <NavDiv className='px-1 py-2'>
                <img style={{ borderRadius: '50%' , width : '50px' , height : '50px' ,float:'left', margin:'0 1rem 0 0.5rem'}} src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c" />
                <p style={{fontSize:'15px', marginBottom:'0'}}>Hello,</p>
                <strong style={{color:'#7D0D80'}}>Gowthaman M</strong>
                <hr />
                <ProfileLink to='../profile/order'>
                <h5 style={{color:'#7D0D80'}} className="pl-1 mx-1"><AiTwotoneShopping className="mx-1 mb-1" size='16' />My Orders</h5>
                </ProfileLink>
                <hr />
                <h5 style={{color:'#7D0D80'}} className="pl-1 mx-1"><FaUserCog className="mx-1 mb-1" size='16' />Account Details</h5>
                <ul style={{listStyleType:'none', paddingInlineStart:'1.4rem'}}>
                    <li style={{padding:'14px 0'}}> <ProfileLink to='../profile/info'>Profile Information</ProfileLink> </li>
                    <li> <ProfileLink to='../delivery'>Delivery Information</ProfileLink></li>
                </ul>
            </NavDiv>
            <NavDiv className='px-1 py-3'>
                <h5 className="pl-1 mx-1" onClick={handleShow} style={{marginBottom:'0', color:'#F83535'}}><FiLogOut className="mx-1 mb-1" size='16' />Log Out</h5>
            </NavDiv>
            <Modal show={show} onHide={handleClose} centered size='sm' style={{textAlign:'center', fontFamily:Slab}}>
                <Modal.Body>
                    <p>Are you sure, you want to logout?</p>
                    <div className='d-flex' style={{justifyContent:'center'}}>
                        <Button className='mx-2 text-light' style={{backgroundColor:'#3EBA2B', border:'none'}} size='sm' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='mx-2' size='sm' style={{backgroundColor:'#F83535', border:'none'}} onClick={handleClose}>
                            Log Out
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Col>
    );
};

export default SideNav;