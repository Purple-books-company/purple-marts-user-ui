import {
    CanvasHeader,
    CanvasBody,
    SlideBtnsDiv,
    Menu,
    ProfileImg,
    ProfileName,
    SliderBtn,
    NavBtn
} from "../../../styles/pages/header";
import { NavLink as Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineRight } from 'react-icons/ai'
import { RiDashboardFill, RiHome2Fill, RiHome3Line } from 'react-icons/ri'
import { FaOpencart, FaUserAlt, FaUserCircle, } from 'react-icons/fa'
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BiCustomize } from "react-icons/bi";
const Slider = () => {
    const [user, setUser] = useState(true)
    return (
        <>
            <SliderBtn
                className="btn fixed-top"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
            >
                <Menu size="28" className="sticky-top bg-light" />
            </SliderBtn>
            <div
                className="offcanvas offcanvas-start w-75"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <CanvasHeader>
                    <div style={{ textAlign: 'right', padding: '5px' }}>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>

                    </div>
                    <Link to="/profile/info">
                        {
                            user ?
                                <ProfileImg src="https://images-na.ssl-images-amazon.com/images/I/81tGpBQtMfL.png" />
                                :
                                <FaUserCircle size="45" style={{ margin: '10px', marginLeft: '20px', color: 'black' }} />
                        }
                    </Link>
                    <div className="row">
                        {
                            user ?
                                <ProfileName to="/profile/info" className="col">
                                    Yuvi
                                </ProfileName>
                                :

                                <ProfileName to="auth/login" className="col">
                                    Login
                                </ProfileName>

                        }

                        <div className="col container" style={{ textAlign: 'right' }}><AiOutlineRight /></div>
                    </div>
                </CanvasHeader>
                <CanvasBody>
                    <SlideBtnsDiv className="border">
                        <NavBtn to="/">
                            <RiHome3Line style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> Home
                        </NavBtn>
                    </SlideBtnsDiv>
                    <SlideBtnsDiv >

                        <NavBtn to="/category">
                            <RiDashboardFill style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> Category
                        </NavBtn>
                    </SlideBtnsDiv>
                    <SlideBtnsDiv>
                        <NavBtn to="/">
                            <BiCustomize style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> Custom Products
                        </NavBtn>
                    </SlideBtnsDiv>
                    <SlideBtnsDiv>
                        <NavBtn to="/cart">
                            <FaOpencart style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> Cart
                        </NavBtn>
                    </SlideBtnsDiv>
                    <SlideBtnsDiv>
                        <NavBtn to="/wishlist">
                            <AiOutlineHeart style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> wishlist
                        </NavBtn>
                    </SlideBtnsDiv>
                    {
                        user &&
                        <SlideBtnsDiv className="text-danger">
                            <NavBtn to="/" className="text-danger">
                                <FiLogOut className="text-danger" style={{ marginRight: '5px', marginBottom: '5px' }} size="23" /> logout
                            </NavBtn>
                        </SlideBtnsDiv>
                    }

                </CanvasBody>
            </div>
        </>
    );
};

export default Slider;
