import React from 'react';
import {NavItem} from "react-bootstrap";
import { withRouter } from 'react-router-dom';

const LogoutButton = withRouter(({ history }) => (
	<NavItem onClick={() => history.push('/')} eventKey={1}>Logout</NavItem>
));

export default LogoutButton;