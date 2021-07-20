import React from 'react'
import { Container, Row } from "react-bootstrap";
import { Slab } from "../../../styles/themes/font-styles"
import Info from './components/info';
import {Route} from "react-router-dom";
import DeliveryInformation from './components/delivery';
import Orders from './components/orders';
import OrderDetails from './components/details';
import SideNav from './components/sideNav';

const Profile = () => {

	return (
		<Container fluid style={{ clear: 'both', backgroundColor: '#fff', fontFamily: Slab }}>
			<Row>
				<SideNav />
				<Route exact path="/profile" component={Info} />
				<Route exact path="/profile/delivery" component={DeliveryInformation} />
				<Route exact path="/profile/order" component={Orders} />
				<Route exact path="/profile/details" component={OrderDetails} />
			</Row>
		</Container>
	);
};

export default Profile;
