import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';
import { AUTH_LOGOUT_REQUEST } from '../../constant';
import { push } from 'react-router-redux';
class AuthButton extends Component {
	render() {
		const { token, showLogin } = this.props;
		
		return (
			token ? (
				<NavItem onClick={() => this.logout()} eventKey={1}>Logout</NavItem>
			) : (
				<NavItem onClick={showLogin} eventKey={1}>Login</NavItem>
			)
		);
	}
	logout() {
		const { dispatch } = this.props;
	  	return new Promise((resolve, reject) => {
	    	dispatch({
	      		type: AUTH_LOGOUT_REQUEST,
	      		callbackSuccess: () => {
	        		dispatch(push('/'));
	        		resolve();
	      		}
	    	})
	  	});
	}
}

export default AuthButton;