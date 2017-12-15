import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import Http from '../../lib/Http';

class MobileVerificationPopup extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success:''
		}
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('MobileVerificationPopupForm'));
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
							label="Mobile number"
							name="mobile"
							placeholder="Enter mobile number"
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
			      			buttonSave="Send me otp"/>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
	formSubmit(value) {
		const { dispatch, reset, hideDialog, setMobileNumber } = this.props;
		return new Promise((resolve, reject) => {
		  	Http.get(`send-otp?mobile=${value.mobile}`)
		  	.then(res => {
				this.setState({success: res.message});
				dispatch(reset('MobileVerificationPopupForm'));
				setTimeout(() => {
					this.setState({success:''});
					hideDialog();
					setMobileNumber(value.mobile);
				}, 5000);
			})
			.catch(errors => {
				reject(new SubmissionError({_error: errors.message})) 
			})
		});
	}
}
const MobileVerificationPopupForm = reduxForm({
  	form: 'MobileVerificationPopupForm',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.mobile) {
  	    	errors.mobile = 'Mobile number is required';
  	  	}else if (!/^[789]\d{9}$/i.test(values.mobile)) {
  	      	errors.mobile = 'Invalid mobile number'
  	    }
  	  	return errors;
  	}
})(MobileVerificationPopup);
export default MobileVerificationPopupForm;