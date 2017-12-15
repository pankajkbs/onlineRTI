import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export class AlertDialog extends Component {
	render() {
		const {show, title, hideModal, message} = this.props;
		return (
			<Modal className="login-popup" show={show} onHide={hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>{'Message' || title}</Modal.Title>
				</Modal.Header>	
				<Modal.Body>
					<p>{message}</p>
				</Modal.Body>
			</Modal>
		);
	}
} 