import React, { useState } from 'react';
import {
    HeaderNav,
    NavLink,
    CartNum,
    BrandImg
} from '../../../styles/pages/header';
// import data from '../../../api/navbarDetails.json'
import { Nav } from 'react-bootstrap'
import { HiOutlineShoppingCart, HiLogout } from 'react-icons/hi'
import logo from '../../../assets/images/logo.png'
import { FiHeart } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import Search from '../Search'

const NavBar = () => {
    const [logged, setLogged] = useState(true)
    return (
        <>
            <HeaderNav bg="light" expand="lg" className="sticky-top">

                <Nav
                    className="my-lg-0"
                    navbarScroll
                >
                    <Nav.Link className="mx-3" href='/' color="#FF005C">
                        <BrandImg src={logo} alt="" />
                    </Nav.Link>
                    {/* <NavLink href='/' color="#FF005C">Home</NavLink> */}
                    <NavLink href='/category' color="#45FF8C">category</NavLink>
                    <NavLink href='/custom' color="#45EFFF">custom products</NavLink>
                    {
                        logged &&
                        <NavLink href='/profile/order' color="#EDEC17">my orders</NavLink>
                    }
                    <Search head="true" />
                    {
                        logged ?
                            <>
                                <NavLink href='/profile/info' style={{ display: 'flex', alignContent: 'right' }}>
                                    <BiUser size="23" />
                                    <p style={{ fontSize: 14, marginBottom: '-4.5em', marginLeft: '-3em' }}>profile</p>
                                </NavLink>
                                <NavLink id="wishlist" className="" href='/wishlist'>
                                    <FiHeart size="23" />
                                    <p style={{ fontSize: 14, marginBottom: '-4.5em', marginLeft: '-3em' }}>wishlist</p>
                                </NavLink>
                                <NavLink id="cart" href='/cart'>
                                    <HiOutlineShoppingCart size="23" />
                                    <CartNum id="cartnum">2</CartNum>
                                    <p style={{ fontSize: 14, marginBottom: '-4.5em', marginLeft: '-3em' }}>cart</p>
                                </NavLink>
                                <NavLink href='/'>
                                    <HiLogout size="23" />
                                    <p style={{ fontSize: 14, marginBottom: '-4.5em', marginLeft: '-3em' }}>Logout</p>
                                </NavLink>
                            </>
                            :
                            <NavLink href='/auth/login' color="#F9FF00" >login</NavLink>
                    }

                </Nav>
            </HeaderNav>
        </>
    );
};

export default NavBar;