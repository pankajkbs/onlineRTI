import { Component } from "react";

class Auth extends Component {
	static isUserLogged() {
		const token = localStorage.getItem('prod.token');
		if( token ) {
			return true;
		}
		return false;
	}
	static getCurrentUser() {
		const token = localStorage.getItem('prod.token');
		if( token ) {
			return localStorage.getItem('prod.user');
		}
		return false;
	}
	static saveUserSession(response) {
		localStorage.setItem('prod.user', response.user);
		localStorage.setItem('prod.token', response.token);
		return true;
	}
	static signOutUser() {
		const token = localStorage.getItem('prod.token');
		if( token !== null ) {
			localStorage.removeItem('prod.token');
			localStorage.removeItem('prod.user');
		}
	}
}

export default Auth;