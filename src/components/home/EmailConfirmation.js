import React from 'react';
import {Modal} from "react-bootstrap";
import Http from '../../lib/Http';

class EmailConfirmation extends React.Component {
	constructor (props) { 
		super(props);
		this.state = {
			showConfirmModal: true,
			showFailedModal: true,
			emailVerified: false,
			emailExpired: false
		};	
	}
	componentDidMount() {
		const search = this.props.location.search; // could be '?foo=bar'

		const params = new URLSearchParams(search);
		const salt = params.get('salt');
		if(salt) {
			Http.post('verify-email', {salt})
			.then(({data}) => {
				this.setState({emailVerified: data.emailVerified});
			})
			.catch(({errors}) => console.log(errors));
		}	
	}
	close (modal) {
		if( modal === 'confirm' ) {
			this.setState({ showConfirmModal: false });
			this.props.history.push('/');
		} else if(modal === 'failed') {
			this.setState({ showFailedModal: false });
		} 
	}
	render() {
		const {emailVerified, emailExpired} = this.state;
		if( emailVerified ){
			return (
				<Modal className="login-popup" show={this.state.showConfirmModal} onHide={() => this.close('confirm')}>
					<Modal.Header closeButton>
				    	<Modal.Title>Confirmation</Modal.Title>
				    </Modal.Header>
			        <Modal.Body>
			        	<p>Your email has been verified successfully!!</p>
			        </Modal.Body>
		    	</Modal>
			);	
		} 
		if ( emailExpired ) {
			return (
				<Modal className="login-popup" show={this.state.showFailedModal} onHide={() => this.close('failed')}>
					<Modal.Header closeButton>
				    	<Modal.Title>Confirm</Modal.Title>
				    </Modal.Header>
			        <Modal.Body>
			        	<p>Invalid or expired link</p>
			        </Modal.Body>
		    	</Modal>
			);
		} 
		return null;
	}
}

export default EmailConfirmation;