import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    LogoImg,
    LogoBox
} from '../../../styles/pages/header';
import logo from '../../../assets/images/PM_logo.png'
import data from '../../../api/navbarDetails.json'
import Slider from './Slider'
import { Dropdown } from 'react-bootstrap'

const Navbar = () => {
    const [log, setLog] = useState(false)
    const [navData, setNavData] = useState(data)
    const [dropShow, setDropShow] = useState(false)

    return (
        <>

            <LogoBox >
                <LogoImg src={logo} alt="" />
            </LogoBox>
            <Slider />
            <Nav className="sticky-top">
                <NavMenu>
                    <NavLink to="/" activeStyle >Home</NavLink>
                    <NavLink to="/category" activeStyle>category</NavLink>
                    <NavLink to="/" activeStyle >Custom Product</NavLink>
                    <NavLink to="/cart" activeStyle >Cart</NavLink>
                    <NavLink to="/wishlist" activeStyle >Wishlist</NavLink>
                    {
                        log ?
                            <NavLink to="/profile/info" activeStyle >Profile</NavLink>
                            :
                            <NavLink to="/login" activeStyle >Login</NavLink>
                    }
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;