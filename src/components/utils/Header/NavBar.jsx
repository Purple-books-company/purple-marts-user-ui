import {
  HeaderNav,
  NavLink,
  // CartNum,
  BrandImg,
} from "../../../styles/pages/header";
import { Nav, Container } from "react-bootstrap";
import { HiOutlineShoppingCart, HiLogout } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import clearStorage from "../../pages/authentication/components/LogOut";
import { DarkShade } from "../../../styles/themes/color-theme";
import Search from "../search";

const NavBar = ({ func }) => {
  const handleLogOut = () => {
    clearStorage();
    func();
  };

  return (
    <>
      <HeaderNav expand="lg" className="sticky-top">
        <Nav.Link href="#">
          <BrandImg src={logo} alt="" />
        </Nav.Link>
        <Container>
          <Nav navbarScroll className="ms-5">
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
          <Nav className="mt-2">
            <Search />
          </Nav>
          <Nav className="mx-3">
            {/* <Navbar.Collapse className="justify-content-end"> */}
            <NavLink icon="true" href="/profile/info">
              <br />
              <BiUser size="21" />
              <p>profile</p>
            </NavLink>
            <NavLink icon="true" id="wishlist" className="" href="/wishlist">
              <br />
              <FiHeart size="21" />
              <p>wishlist</p>
            </NavLink>
            <NavLink icon="true" id="cart" href="/cart">
              <br />
              <HiOutlineShoppingCart size="21" />
              {/* <CartNum id="cartnum">2</CartNum> */}
              <p>cart</p>
            </NavLink>
            <NavLink icon="true" onClick={handleLogOut}>
              <br />
              <HiLogout size="21" />
              <p>Logout</p>
            </NavLink>
            {/* </Navbar.Collapse> */}

            {/* <NavLink href="/auth/login" color="#F9FF00">
              login
            </NavLink> */}
          </Nav>
        </Container>
      </HeaderNav>
    </>
  );
};

export default NavBar;
