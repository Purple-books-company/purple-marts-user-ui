import { LogoBox, LogoImg } from '../../../styles/pages/header';
import NavBar from './NavBar'
import Slider from './Slider';
import logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <LogoBox className="m-1">
                <LogoImg src={logo} alt="" />
            </LogoBox>
            <Slider />
            <NavBar />
        </>
    )
}

export default Header;