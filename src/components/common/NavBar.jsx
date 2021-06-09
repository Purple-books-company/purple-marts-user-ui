import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    LogoImg,
    LogoBox,
    Menu,
    SideNav,
    TopImgBox
} from '../../styles/pages/footer';
import logo from '../../assets/images/PM_logo.png'
import data from '../../api/navbarDetails.json'
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'


const Navbar = () => {
    const [log, setLog] = useState(true)
    const [navData, setNavData] = useState(data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <LogoBox >
                <LogoImg src={logo} alt="" />
            </LogoBox>
            <Nav className="sticky-top">
                <Menu size="28" />
                <NavMenu>
                    {
                        navData.map((tab, index) => (
                            <div key={tab.id}>
                                {
                                    tab.name !== "profile" ?
                                        (
                                            tab.name !== "login" ?
                                                <NavLink to={tab.path} activeStyle >
                                                    {tab.name}
                                                </NavLink>
                                                :
                                                !log &&
                                                <NavLink to={tab.path} activeStyle >
                                                    {tab.name}
                                                </NavLink>
                                        )
                                        :
                                        log &&
                                        <NavLink to={tab.path} activeStyle >
                                            {tab.name}
                                        </NavLink>

                                }

                            </div>
                        ))
                    }
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;