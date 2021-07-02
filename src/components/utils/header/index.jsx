// import { LogoBox, LogoImg } from "../../../styles/pages/header";
import NavBar from "./NavBar";
// import Slider from "./Slider";
// import logo from "../../../assets/images/logo.png";

const Header = ({ func }) => {
  return (
    <>
      {/* <LogoBox >
        <LogoImg src={logo} alt="" />
      </LogoBox> */}
      {/* <Slider /> */}
      <NavBar func={func} />
    </>
  );
};

export default Header;
