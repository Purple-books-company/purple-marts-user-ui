import React, { useState } from "react";
import {
  HeaderNav,
  NavLink,
  // CartNum,
  BrandImg,
} from "../../../styles/pages/header";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { Nav, Container, Modal, Button} from "react-bootstrap";
import { HiOutlineShoppingCart, HiLogout } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";
import clearStorage from "../../pages/authentication/components/LogOut";
import { DarkShade } from "../../../styles/themes/color-theme";
import Search from "../search";
// import { retriveDetails } from "../../../services/storage/details";

const NavBar = ({ func }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => {
    handleClose();
    clearStorage();
    func();
    // alert("Logged out");
  };
  let logged = localStorage.getItem("isLogged")

  return (
    <div className="container-fluid sticky-top w-100 bg-light">
      <HeaderNav expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Nav.Link href="#" className="j">
            {/* <HeaderNav.Toggle aria-controls="search-nav" />
          <HeaderNav.Collapse id="search-nav">
            <Search />
          </HeaderNav.Collapse> */}
            <BrandImg src={logo} alt="Purple Marts" />
          </Nav.Link>
          <HeaderNav.Toggle aria-controls="basic-navbar-nav" />
          <HeaderNav.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-none d-inline">
              <Search />
            </Nav>
            <Nav className="me-auto ms-auto">
              <NavLink href="/" color="#FF005C">
                Home
              </NavLink>
              <NavLink href="/category" color={DarkShade}>
                Category
              </NavLink>
              <NavLink href="/custom" color="#45EFFF">
                Custom products
              </NavLink>

              <NavLink href="/profile/order" color="#EDEC17">
                my orders
              </NavLink>
            </Nav>

            <Nav className="mt-2 me-auto d-none d-lg-inline">
              <Search />
            </Nav>

            <Nav className="ml-2">
              <NavLink icon="true" href="/profile/info">
                <br className="d-none d-lg-inline" />
                <BiUser size="21" className="d-none d-lg-inline" />
                <p> profile</p>
              </NavLink>
              <NavLink icon="true" id="wishlist" className="" href="/wishlist">
                <br className="d-none d-lg-inline" />
                <FiHeart size="21" className="d-none d-lg-inline" />
                <p>wishlist</p>
              </NavLink>
              <NavLink icon="true" id="cart" href="/cart">
                <br className="d-none d-lg-inline" />
                <HiOutlineShoppingCart size="21" className="d-none d-lg-inline" />
                {/* <CartNum id="cartnum">2</CartNum> */}
                <p>cart</p>
              </NavLink>
              {
                logged ?

                  <NavLink icon="true" onClick={handleLogOut}>
                    <br className="d-none d-lg-inline" />
                    <HiLogout size="21" className="d-none d-lg-inline" />
                    <p>Logout</p>
                  </NavLink >
                  :
                  <NavLink href="/login" icon="true" color="#F9FF00">
                    <br className="d-none d-lg-inline" />
                    <HiLogout size="21" className="d-none d-lg-inline" />
                    <p>Login</p>
                  </NavLink>
              }
            </Nav>
          </HeaderNav.Collapse>
        </Container>
      </HeaderNav>
    </div>
  );
};

export default React.memo(NavBar);
