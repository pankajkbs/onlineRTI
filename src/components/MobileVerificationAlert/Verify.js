/* global _ */
import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import './Verify.css';
import MobileVerificationPopup from './MobileVerificationPopup';
import MobileOTPPopup from './MobileOTPPopup';
import {Storage} from '../../lib/Storage';

class Verify extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.closepopup = this.closepopup.bind(this);
		this.setMobileNumber = this.setMobileNumber.bind(this);
		this.state = {
			show:false,
			showMobileOTPDialog: false,
			isNumberVerified: Storage.get('isNumberVerified') ? true : false,
			mobile:''
		}
	}
	handleClick() {
		this.setState({show: true});
	}
	closepopup() {
		this.setState({show: false, showMobileOTPDialog: false});
	}
	setMobileNumber(mobile) {
		this.setState({mobile, showMobileOTPDialog: true})
	}
	hideAlert() {
		Storage.set('isNumberVerified', true);
		this.setState({isNumberVerified: true});
	}
	render() {
		Storage.set('isNumberVerified', true);
		const {show, mobile, showMobileOTPDialog, isNumberVerified} = this.state;
		const {user} = this.props;
		return (
			<div>
				{(_.isEmpty(user.mobile) || !isNumberVerified)
					? (	<Alert bsStyle="info" bsClass="m-b-10 alert">
							Your mobile number is not verified, <span className="styled-link" onClick={this.handleClick}>Click here</span> to verify your mobile number to recieve rtiguru updates
						</Alert>
					) : null}
				<MobileVerificationPopup show={show} setMobileNumber={this.setMobileNumber} hideDialog={this.closepopup}/>
				<MobileOTPPopup 
					show={showMobileOTPDialog} 
					hideAlert={this.hideAlert} 
					user={user} 
					mobile={mobile} 
					hideDialog={this.closepopup}
				/>
			</div>	
		)
	}
}

export default Verify;