import { Col, Container, Row } from "react-bootstrap";
import { Head, Img, TabData, Para } from "../../../styles/pages/profile-page";
import { Slab } from "../../../styles/themes/font-styles"

const Profile = () => {
	return (
		<Container fluid>
			<Row>
				<Col xs={2} className="mt-5 d-none d-md-block">
					<ul style={{listStyleType:'none', paddingTop:'30px'}}>
						{/* <li>Personal Information</li>
						<li>Delivery Information</li>
						<li>Order Details</li>
						<li>Log Out</li> */}
					</ul>
                </Col>
				<Col xs={10} className="m-auto p-auto d-none d-md-block">
					<Head>Account Details</Head>
					<div style={{padding: '20px', margin:'10px'}}>
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
							</Col>
							<Col className="p-5">
								<Img src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c"></Img>
							</Col>
						</Row>
					</div>
				</Col>
				<div className="d-md-none">
					{/* <Head>Account Details</Head> */}
					<div className="my-5">
						<h2 style={{fontFamily:Slab, color:'purple'}}>Personal Information</h2>
						<br />
						<Img src="https://lh3.googleusercontent.com/a-/AOh14GhwgF6-YeLPhg2KB8rPpU7DxzZXPMZFhuoIq5AIzg=s96-c"></Img>
						<Para font="big">Gowthaman M<br />
						manogowtham211@gmail.com<br />
						+91 9003091453</Para>
						<Para>37/9a, Srinivasa Perumal Koil, 1st street,<br/> Chennai, TamilNadu-600019</Para>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default Profile;
