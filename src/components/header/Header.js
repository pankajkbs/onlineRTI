import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AuthButton from './AuthButton';
import Login from '../Login/login';
import SignUp from '../Login/SignUp';
import ForgotPassword from '../Login/ForgotPassword';
import {connect} from 'react-redux';
import { SHOW_LOGIN_POPUP } from '../../constant';
import {rtiSidebar} from '../../lib/Helper';
import logoImg from '../../assets/images/Rti-logo-01-col-01.png';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showSignUpDialog: false,
			showForgotPasswordDialog: false
		}
	}
	showDialog(name) {
		let _state = (name === 'showLoginDialog') ? true : false,
		_opp = name === 'showLoginDialog' ? 'showSignUpDialog' : 'showLoginDialog';
		this.props.dispatch({
			type: SHOW_LOGIN_POPUP,
			displayLoginPopup: _state
		});
		this.setState({[name]: true, [_opp]: false});		
	}
	hideDialog(name) {
		
		if( name === 'showLoginDialog') {
			this.props.dispatch({
				type: SHOW_LOGIN_POPUP,
				displayLoginPopup: false
			})
		} else {
			this.setState({[name]: false});
		}	
	}
	render() {
		const {token, dispatch, showLoginDialog} = this.props;
		const {showForgotPasswordDialog, showSignUpDialog} = this.state;
		return (
			<div>
				<div className="alert alert-danger hidden" id="alert"> Network failure! make sure you have an active internet connection </div>
				<header>
					<Navbar fluid collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
								<Link to="/"> <img src={logoImg} alt="logoImg" /> </Link>
							</Navbar.Brand>
						  	<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav>
								<LinkContainer to="/cms/about-us">
									<NavItem eventKey={1}>About</NavItem>
								</LinkContainer>
								<LinkContainer to="/blog">
									<NavItem eventKey={1}>Blog</NavItem>
								</LinkContainer>
								{token &&
								<LinkContainer to="/myrti/dashboard" isActive={rtiSidebar}>
									<NavItem eventKey={2}>My RTis</NavItem>
								</LinkContainer>	
								}
								<LinkContainer to="/pricing">
									<NavItem eventKey={2}>Pricing</NavItem>
								</LinkContainer>		
								<LinkContainer to="/team">
									<NavItem eventKey={2}>Teams</NavItem>
								</LinkContainer>	
								<LinkContainer to="/contact-us">
									<NavItem eventKey={2}>Contact</NavItem>
								</LinkContainer>	
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<div className="header-right-menu">
						
						<LinkContainer to="/apply-now">
							<NavItem eventKey={1}>Apply Now</NavItem>
						</LinkContainer>
						
						<AuthButton token={token} dispatch={dispatch} showLogin={() => this.showDialog('showLoginDialog')}/>
					</div>
				</header>
				<Login show={showLoginDialog} 
				showSignUpDialog={() => this.showDialog('showSignUpDialog')}
				showForgotPasswordDialog={() => this.showDialog('showForgotPasswordDialog')}
				hideDialog={() => this.hideDialog('showLoginDialog')}/>
				<ForgotPassword show={showForgotPasswordDialog} 
				showLoginDialog={() => this.showDialog('showLoginDialog')}
				hideDialog={() => this.hideDialog('showForgotPasswordDialog')}/>
				<SignUp show={showSignUpDialog} 
				showLoginDialog={() => this.showDialog('showLoginDialog')}
				hideDialog={() => this.hideDialog('showSignUpDialog')}/>
			</div>    
		);
	}	
}	

const mapStateToProps = (state) => ({
	token: state.auth.token,
	showLoginDialog: state.loginPopup.displayLoginPopup
});

export default connect(mapStateToProps, null, null, {pure: false})(Header);