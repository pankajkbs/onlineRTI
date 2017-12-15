import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export class Notify extends Component {
	render() {
		const { type, message } = this.props;
		if( message ) {
			return (
				<Alert bsStyle={type || "danger"}>
				    <p>{message}</p>
				</Alert>
			);	
		} else {
			return null;
		}
	}	
}