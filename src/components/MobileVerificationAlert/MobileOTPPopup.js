import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import Http from '../../lib/Http';

class MobileOTPPopup extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.resendOTP = this.resendOTP.bind(this);
		this.state = {
			success:''
		}
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('MobileOTPPopupForm'));
	}
	render () {
		const {show, hideDialog, handleSubmit, error, submitting, invalid} = this.props;
		const { success } = this.state;
		return (
			<Modal className="login-popup" show={show} onHide={hideDialog} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Verify mobile number</Modal.Title>
		        </Modal.Header>
		        <Form onSubmit={handleSubmit(this.formSubmit)}>
		        	<Notify message={error || success} type={error ? 'danger': 'success'}/>
			        <Modal.Body>
			            <Field
							type="text"
							label="OTP"
							name="otp"
							placeholder="Enter otp"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
						/>
						
			        </Modal.Body>
			        <Modal.Footer>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} 
			      			className="btn-info btn-block" 
			      			buttonSaveLoading="Processing..." 
			      			buttonSave="Verify"/>
			      		<p><a className="loginLink" onClick={this.resendOTP}>Don't recieve OTP</a></p>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
	resendOTP() {
		const {mobile} = this.props;
		console.log(mobile);
		return new Promise((resolve, reject) => {
		  	Http.get(`send-otp?mobile=${mobile}`)
		  	.then(res => {
				this.setState({success: res.message});
				setTimeout(() => {
					this.setState({success:''});
				}, 5000);
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message})) 
			})
		});
	}
	formSubmit(value) {
		const { dispatch, reset, hideDialog, user, mobile } = this.props;
		const request = {
			mobile,
			otp: value.otp,
			_id: user._id
		}
		return new Promise((resolve, reject) => {
		  	Http.post('verify-mobile', request)
		  	.then(res => {
				this.setState({success: res.message});
				dispatch(reset('MobileOTPPopupForm'));
				setTimeout(() => {
					this.setState({success:''});
					hideDialog();
				}, 5000);
			})
			.catch(errors => {
				reject(new SubmissionError({_error: errors.message})) 
			})
		});
	}
}
const MobileOTPPopupForm = reduxForm({
  	form: 'MobileOTPPopupForm',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.otp) {
  	    	errors.otp = 'OTP is required';
  	  	}
  	  	return errors;
  	}
})(MobileOTPPopup);
export default MobileOTPPopupForm;