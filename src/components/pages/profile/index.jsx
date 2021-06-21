import { Col, Container, Row } from "react-bootstrap";
import { Links, Img, TabData, Para , NavDiv , ProfileLink} from "../../../styles/pages/profile-page";
import { Slab } from "../../../styles/themes/font-styles"
import  SideNav  from './SideNav';
import { RiPencilFill } from "react-icons/ri";
import { AiTwotoneShopping } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi';
import {IoIosArrowForward} from 'react-icons/io'
const Profile = () => {
	return (
		<Container fluid style={{ clear:'both', backgroundColor:'#fff', fontFamily: Slab }}>
			<Row>

				<SideNav />
				
				<Col xs={10} className="m-auto p-auto d-none d-md-block">
					<NavDiv type='main'>
						<h4 style={{fontFamily:Slab, color:'purple'}}>Personal Information</h4>
						<Row>
							<Col className="p-5">
								<table>
									<tr><TabData font="bold">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big">Gowthaman M</TabData></tr>
									<tr><TabData font="bold">E-mail &nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big">manogowtham211@gmail.com</TabData></tr>
									<tr><TabData font="bold">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</TabData><TabData font="big">+91 9003091453</TabData></tr>
									<br />
									<tr><TabData font="bold">Address &nbsp;:</TabData><TabData>37/9a, Srinivasa Perumal Koil, 1st street,</TabData></tr>
									<tr><TabData></TabData><TabData>Chennai, TamilNadu-600019 </TabData></tr>
								</table>
								<Links>
									<a>Change Password</a>
								</Links>
							</Col>
						</Row>
					</NavDiv>
				</Col>
				<div className="d-md-none" style={{padding:0}}>
						<Container className='py-4' style={{backgroundColor:"purple",width:'100%'}}>
							<h2 style={{fontFamily:Slab, color:'#fff' , textAlign:'center'}}>Profile</h2>
							<img className='mx-auto' style={{ borderRadius: '50%' , width : '100px' , height : '100px' ,display:'block', margin:'auto'}} src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c" />
							<Para font="big" className='text-center py-2 text-light'>Gowthaman M</Para>
							<Para font="big" className='text-center pb-2 text-light'>manogowtham211@gmail.com</Para>
						</Container>
					<NavDiv mobile='yes' className="my-5 pt-3 mx-4">
						<ProfileLink to='../profile/order'>
							<div>
							<h2 style={{fontFamily:Slab, color:'purple', marginBottom:0, float:'left'}} ><AiTwotoneShopping className="mx-1 mb-2" />My Orders</h2>
							<h2 style={{float:'right'}}><IoIosArrowForward className="mx-3 mb-1"/></h2>
							</div>
						</ProfileLink>
						<div style={{clear:'both'}}></div>
					</NavDiv>
					<NavDiv mobile='yes' className="px-3">
						<h2 style={{fontFamily:Slab, color:'purple'}} >My Address</h2>
						<hr />
						<Para style={{textAlign:'left', margin: 0}}>37/9a, Srinivasa Perumal Koil, 1st street,<br/> Chennai, TamilNadu-600019<br /><strong>9003091453</strong></Para><br />
						<hr style={{marginTop:0}} />
						<ProfileLink to='../delivery'>
							<h4 style={{textAlign:'right', margin:'0 8px'}}> <RiPencilFill className="mx-1 mb-1" />Edit Address </h4>
						</ProfileLink>
					</NavDiv>
				</div>
			</Row>
		</Container>
	);
};

export default Profile;
