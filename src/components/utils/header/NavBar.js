import React from "react";
import {
  HeaderNav,
  NavLink,
  // CartNum,
  BrandImg,
} from "../../../styles/pages/header";
import { Nav, Container, Navbar } from "react-bootstrap";
import { HiOutlineShoppingCart, HiLogout } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import clearStorage from "../../pages/authentication/components/LogOut";
import { DarkShade } from "../../../styles/themes/color-theme";
import Search from "../search";
// import { retriveDetails } from "../../../services/storage/details";

const NavBar = ({ func }) => {
  const handleLogOut = () => {
    clearStorage();
    func();
  };

  let logged = localStorage.getItem("isLogged")

  return (
    <div className="w-100">
      <HeaderNav expand="lg" bg="light" variant="light" fixed="top">
        <Container fluid className="bg-light">
          <Nav.Link href="#" className="j">
            <BrandImg src={logo} alt="Purple Marts" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-none d-inline" style={{ marginTop: '3em !important' }}>
              <Search className="" />
            </Nav>
            <Nav className="me-auto ms-auto">
              <NavLink href="/" color="#FF005C">
                Home
              </NavLink>
              <NavLink href="/category" color={DarkShade}>
                Category
              </NavLink>
              <NavLink href="/custom" color="#45EFFF">
                custom products
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
          </Navbar.Collapse>
        </Container>
      </HeaderNav>
    </div >
  );
};

export default React.memo(NavBar);
