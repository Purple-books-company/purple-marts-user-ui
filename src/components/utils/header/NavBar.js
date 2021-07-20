import React from "react";
import { HeaderNav, NavLink, BrandImg } from "../../../styles/pages/header";
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

  let logged = localStorage.getItem("isLogged");

  return (
    <div className="w-100">
      <HeaderNav
        expand="lg"
        // variant="light"
        fixed="top"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid>
          <Nav.Link href="#">
            <BrandImg src={logo} alt="Purple Marts" className="me-5" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          >
            <Nav
              className="d-lg-none d-inline"
              style={{ marginTop: "3em !important" }}
            >
              <Search />
            </Nav>
            <Nav className="pt-2">
              <NavLink to="/" color="#FF005C">
                Home
              </NavLink>
              <NavLink to="/category/All" color={DarkShade}>
                Category
              </NavLink>
              <NavLink to="/custom" color="#45EFFF">
                custom products
              </NavLink>

              <NavLink to="/profile/order" color="#EDEC17">
                my orders
              </NavLink>
            </Nav>

            <Nav className="mt-2 mx-auto d-none d-lg-inline">
              <Search />
            </Nav>

            <Nav className="ml-2 mt-1">
              <NavLink icon="true" to="/profile">
                <br className="d-none d-lg-inline" />
                <BiUser size="21" className="d-none d-lg-inline" />
                <p> profile</p>
              </NavLink>
              <NavLink icon="true" id="wishlist" className="" to="/wishlist">
                <br className="d-none d-lg-inline" />
                <FiHeart size="21" className="d-none d-lg-inline" />
                <p>wishlist</p>
              </NavLink>
              <NavLink icon="true" id="cart" to="/cart">
                <br className="d-none d-lg-inline" />
                <HiOutlineShoppingCart
                  size="21"
                  className="d-none d-lg-inline"
                />
                {/* <CartNum id="cartnum">2</CartNum> */}
                <p>cart</p>
              </NavLink>
              {logged ? (
                <NavLink icon="true" onClick={handleLogOut} to="#">
                  <br className="d-none d-lg-inline" />
                  <HiLogout size="21" className="d-none d-lg-inline" />
                  <p>Logout</p>
                </NavLink>
              ) : (
                <NavLink to="/login" icon="true" color="#F9FF00">
                  <br className="d-none d-lg-inline" />
                  <HiLogout size="21" className="d-none d-lg-inline" />
                  <p>Login</p>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </HeaderNav>
    </div>
  );
};

export default React.memo(NavBar);
