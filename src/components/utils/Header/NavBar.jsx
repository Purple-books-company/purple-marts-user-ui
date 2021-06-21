import React, { useState } from 'react';
import {
    HeaderNav,
    NavLink,
    CartNum
} from '../../../styles/pages/header';
// import data from '../../../api/navbarDetails.json'
import { Nav } from 'react-bootstrap'
import { MdShoppingCart } from 'react-icons/md'

const NavBar = () => {
    const [logged, setLogged] = useState(true)
    return (
        <>
            <HeaderNav bg="light" expand="lg" className="sticky-top">

                <Nav
                    className="my-lg-0"
                    navbarScroll
                >
                    <NavLink href='/' >Home</NavLink>
                    <NavLink href='/category' >category</NavLink>
                    <NavLink href='/custom' >custom products</NavLink>
                    {
                        logged ?
                            <>
                                <NavLink href='/profile/order' >my orders</NavLink>
                                <NavLink id="wishlist" href='/wishlist' >Wishlist</NavLink>
                                <NavLink id="cart" href='/cart' ><MdShoppingCart size="27" />
                                    <CartNum id="cartnum">2</CartNum>
                                </NavLink>
                                <NavLink href='/profile/info'  >Profile</NavLink>
                            </>
                            :
                            <NavLink href='/auth/login' >login</NavLink>
                    }

                </Nav>
            </HeaderNav>
        </>
    );
};

export default NavBar;