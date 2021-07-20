import React, { useState, useEffect } from 'react'
import { Col, Container, Row , Modal , Form , Alert} from "react-bootstrap";
import { Links, TabData, Para, NavDiv, ProfileLink } from "../../../../styles/pages/profile-page";
import { Slab } from "../../../../styles/themes/font-styles"
import { RiPencilFill } from "react-icons/ri";
import { AiTwotoneShopping , AiFillCloseSquare } from "react-icons/ai";
import { IoIosArrowForward } from 'react-icons/io'
import { fetchResult, postApi } from '../../../../services/api/loaded-services';
import { Button } from '../../../../styles/widgets/widgets';
import { ModalImg , ModalContent , ImgCol } from "../../../../styles/pages/authentication";
import crystal from "../../../../assets/images/AuthDesign.jpg";
import { ApiPostService } from '../../../../services/api/api-services';
import { RiCloseFill } from "react-icons/ri";

const Info = () => {
	const [show, setShow] = useState(false);
	const [form, setForm] = useState({password:'', cnfrmPass:''})
	const [err, setErr] = useState({error:'', color:''})
	const [userData, setUserData] = useState({})
	const [details, setDetails] = useState({})
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	useEffect(() => {
		async function fetchdata(){
			await postApi("profile")
			let res = await fetchResult("profile")
			let det = await fetchResult("delivery")
			setUserData(res)
			setDetails(det)
		}
		fetchdata()
	}, [])

	function errMsg(name, str){
        setErr(prevState => ({
            ...prevState,
            [name]: str
         }));
    }
	function resetForm(name){
        setForm(prevState => ({
            ...prevState,
            [name]: ''
         }));
    }

	const changePassword = async () => {
		if (form.password !== "" && form.cnfrmPass !== "") {
			if (form.password === form.cnfrmPass) {
				let res = await ApiPostService(process.env.REACT_APP_FORGOT_PASSWORD, {
					email: userData.email ,
					password: form.password,
				});
				if (res.success) {
					errMsg('error',res.description)
					errMsg('color','success')
					resetForm('password')
					resetForm('cnfrmPass')
				}		
			}
			else{
				errMsg('error', "Password's doesn't match")
				errMsg('color','danger')
				resetForm('cnfrmPass')
			}
		}
		else{
			errMsg('error', "Missing field")
			errMsg('color','danger')
		}
	};

	const handleChange = e => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

	return (
        <>
            <Col xs={10} className="mx-auto p-auto d-none d-md-block" >
                <NavDiv type='main'>
                    <h4 style={{ fontFamily: Slab, color: 'purple' }}>Personal Information</h4>
                    <Row>
                        <Col className="p-5">
                            <table>
                                <tbody>
                                    <tr><TabData font="bold">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big"> {userData.name} </TabData></tr>
                                    <tr><TabData font="bold">E-mail &nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big"> {userData.email} </TabData></tr>
                                    { details.address!=='' && <>
                                    <tr><TabData font="bold">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big"> {details.phoneNumber} </TabData></tr>
                                    <tr><TabData font="bold">Address &nbsp;:</TabData><TabData> {details.address} ,</TabData></tr>
                                    <tr><TabData></TabData><TabData>{details.city},{details.state} -{details.pincode}</TabData></tr>
                                    </> }
                                </tbody>
                            </table>
                            { details.address==='' && <> <ProfileLink to='../delivery'><Button >Add More Information</Button></ProfileLink> </>}
                            <Links>
                                <p onClick={handleShow}>Change Password</p>
                            </Links>
                        </Col>
                    </Row>
                </NavDiv>
            </Col>
            <div className="d-md-none" style={{ padding: 0, marginTop: '-5%' }}>
                <Container className='py-4' style={{ backgroundColor: "purple", width: '100%' }}>
                    <h2 style={{ fontFamily: Slab, color: '#fff', textAlign: 'center' }}>Profile</h2>
                    <img alt='user' className='mx-auto' style={{ borderRadius: '50%', width: '100px', height: '100px', display: 'block', margin: 'auto' }} src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c" />
                    <Para font="big" className='text-center py-2 text-light'> { userData.name } </Para>
                    <Para font="big" className='text-center pb-2 text-light'> { userData.email } </Para>
                </Container>
                <NavDiv mobile='yes' className="my-5 pt-3 mx-4">
                    <ProfileLink to='../profile/order'>
                        <div>
                            <h2 style={{ fontFamily: Slab, color: 'purple', marginBottom: 0, float: 'left' }} ><AiTwotoneShopping className="mx-1 mb-2" />My Orders</h2>
                            <h2 style={{ float: 'right' }}><IoIosArrowForward className="mx-3 mb-1" /></h2>
                        </div>
                    </ProfileLink>
                    <div style={{ clear: 'both' }}></div>
                </NavDiv>
                <NavDiv mobile='yes' className="px-3">
                    <h2 style={{ fontFamily: Slab, color: 'purple' }} >My Address</h2>
                    <hr />
                    { details.address!=='' && 
                        <>
                        <Para style={{ textAlign: 'left', margin: 0 }}>{details.address},<br /> {details.city}, {details.state}-{details.pincode}<br /><strong>{details.phoneNumber}</strong></Para><br />
                        <hr style={{ marginTop: 0 }} />
                        </> 
                    }
                    <ProfileLink to='../profile/delivery'>
                        <h4 style={{ textAlign: 'right', margin: '0 8px' }}> <RiPencilFill className="mx-1 mb-1" />Edit Address </h4>
                    </ProfileLink>
                </NavDiv>
            </div>
        
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered={true}
                animation={true}
            >
                <Modal.Header>
                    <Modal.Title>Purple Marts Welcomes you !</Modal.Title>
                    <AiFillCloseSquare
                        size="35"
                        onClick={()=>{
                                handleClose()
                                resetForm('password')
                                resetForm('cnfrmPass')
                                errMsg('error', "")
                            }
                        }
                        style={{ color: "ff5a57" }}
                    />
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <ImgCol>
                                <ModalImg src={crystal} alt="Design" />
                            </ImgCol>
                            <Col>
                                <ModalContent>
                                    <Modal.Title className="mb-3">
                                        Change Password
                                    </Modal.Title>
                                    <Form style={{ width: "100%" }}>
                                        <Form.Group className="mb-3 mt-4 " controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="New Password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4 " controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm Password"
                                                name="cnfrmPass"
                                                value={form.cnfrmPass}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Form>
                                    <Button
                                        style={{ width: "100%", marginBottom: "3px" }}
                                        onClick={changePassword}
                                        >
                                            Change Password
                                    </Button>
                                </ModalContent>
                                { err.error &&(
                                    <Alert variant={err.color} style={{ marginTop: "2%", width: "100%" }}>
                                        {err.error}
                                        <RiCloseFill
                                            style={{ float: "right", marginTop: "5px" }}
                                            onClick={() => {
                                                errMsg('error','')
                                            }}
                                        />
                                    </Alert>
                                )}
                            </Col>
                        </Row>
                    </Container>				
                </Modal.Body>
            </Modal>
        </>
	);
};

export default Info;
