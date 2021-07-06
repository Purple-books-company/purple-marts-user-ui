import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Links, TabData, Para, NavDiv, ProfileLink } from "../../../styles/pages/profile-page";
import { Slab } from "../../../styles/themes/font-styles"
import SideNav from './SideNav';
import { RiPencilFill } from "react-icons/ri";
import { AiTwotoneShopping } from "react-icons/ai";
import { IoIosArrowForward } from 'react-icons/io'
import { fetchResult, postApi } from '../../../services/api/loaded-services';
import { Button } from '../../../styles/widgets/widgets';

const Profile = () => {
	const [userData, setUserData] = useState({})
	const [details, setDetails] = useState({})
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
	return (
		<Container fluid style={{ clear: 'both', backgroundColor: '#fff', fontFamily: Slab ,marginTop:'9%'}}>
			<Row>

				<SideNav />

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
									<a>Change Password</a>
								</Links>
							</Col>
						</Row>
					</NavDiv>
				</Col>
				<div className="d-md-none" style={{ padding: 0, marginTop: '-5%' }}>
					<Container className='py-4' style={{ backgroundColor: "purple", width: '100%' }}>
						<h2 style={{ fontFamily: Slab, color: '#fff', textAlign: 'center' }}>Profile</h2>
						<img className='mx-auto' style={{ borderRadius: '50%', width: '100px', height: '100px', display: 'block', margin: 'auto' }} src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c" />
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
						<ProfileLink to='../delivery'>
							<h4 style={{ textAlign: 'right', margin: '0 8px' }}> <RiPencilFill className="mx-1 mb-1" />Edit Address </h4>
						</ProfileLink>
					</NavDiv>
				</div>
			</Row>
		</Container>
	);
};

export default Profile;
