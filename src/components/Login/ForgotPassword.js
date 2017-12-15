import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import Http from '../../lib/Http';

class ForgotPassword extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success:''
		}
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('ForgotPasswordForm'));
	}
	render () {
		const {show, hideDialog, showLoginDialog, handleSubmit, error, submitting, invalid} = this.props;
		const { success } = this.state;
		return (
			<Modal className="login-popup" show={show} onHide={hideDialog} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Forgot Password</Modal.Title>
		        </Modal.Header>
		        <Form onSubmit={handleSubmit(this.formSubmit)}>
		        	<Notify message={error || success} type={error ? 'danger': 'success'}/>
			        <Modal.Body>
			            <Field
							type="email"
							label="Email address"
							name="email"
							placeholder="Enter email"
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
			      			buttonSave="Send me link"/>
			        	<p><a className="loginLink" onClick={showLoginDialog}>Back to login</a></p>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
	formSubmit(user) {
		const { dispatch, reset, hideDialog } = this.props;
		return new Promise((resolve, reject) => {
		  	Http.post('forgot-password', user)
		  	.then(res => {
				this.setState({success: res.message});
				dispatch(reset('ForgotPasswordForm'));
				setTimeout(() => {
					this.setState({success:''});
					hideDialog();
				}, 5000);
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message})) 
			})
		});
	}
}
const ForgotPasswordForm = reduxForm({
  	form: 'ForgotPasswordForm',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.email) {
  	    	errors.email = 'Email is required';
  	  	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  	      	errors.email = 'Invalid email address'
  	    }
  	  	return errors;
  	}
})(ForgotPassword);
export default ForgotPasswordForm;