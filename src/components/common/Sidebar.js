import React from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {NavItem} from 'react-bootstrap';

const Sidebar = ({rtino}) => (
	<div className="col-sm-3">
		<ul className="dash-list">
	        <LinkContainer to={`/dashboard/app-progress/${rtino}`}>
            	<NavItem eventKey={1}> App progress </NavItem>
            </LinkContainer>
            <LinkContainer to={`/dashboard/app-status/${rtino}`}>
            	<NavItem eventKey={2}> App Status </NavItem>
            </LinkContainer>
            <LinkContainer to={`/dashboard/rti-application/${rtino}`}>
            	<NavItem eventKey={3}> RTI application </NavItem>
            </LinkContainer>
            <LinkContainer to={`/dashboard/edit-profile/${rtino}`}>
            	<NavItem eventKey={4}> Edit Profile </NavItem>
            </LinkContainer>
			<li><Link to="">Download</Link></li>
			<li><Link to="">Payment Infor &amp; Invoice</Link></li>
			<li><Link to="">First Appeal</Link></li>
			<LinkContainer to={`/dashboard/tracking-details/${rtino}`}>
				<NavItem eventKey={5}> Tracking Details </NavItem>
			</LinkContainer>
		</ul>
	</div>
);

export default Sidebar;