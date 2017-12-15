/* global _ */
import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import Http from '../../lib/Http';

class SignUp extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success: ''
		}
	}
	formSubmit(values) {
		const {hideDialog} = this.props;
		return new Promise((resolve, reject) => {
			Http.post('register', values)
			.then(({records}) => {
				this.setState({success: 'You are registered successfully, kindly check your inbox/spam folder to verify your email!!'})
				this.handleExited();
				setTimeout(() => {
					hideDialog();
				},5000);
				resolve();
			})
			.catch(({errors}) => {
				let message = 'Internal Error';
				if( _.has(errors, 'email') ){
					message = errors.email.message;
				} else {
					message = errors.message;
				}
				reject(new SubmissionError({_error: message}))
			});
		});
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('signup_form'));
	}
	render() {
		const {show, hideDialog, handleSubmit, error, submitting, invalid, showLoginDialog} = this.props;
		const { success } = this.state;
		return (
			<Modal className="login-popup" show={show} onHide={hideDialog} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>SignUp</Modal.Title>
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
						<Field
							type="password"
							label="Password"
							name="password"
							placeholder="Enter Password"
							doValidateWithStackedForm={true}
							theme="custom"
							component={FormField}
						/>
						<Field
							type="password"
							label="Confirm Password"
							name="confirm_password"
							placeholder="Confirm Password"
							doValidateWithStackedForm={true}
							theme="custom"
							component={FormField}
						/>
			        </Modal.Body>
			        <Modal.Footer>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} 
			      			className="btn-info btn-block" 
			      			buttonSaveLoading="Processing..." 
			      			buttonSave="SignUp"/>
			        	<p><a className="loginLink" onClick={showLoginDialog}>Already have an account?</a></p>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		);
	}
}

const SignUpForm = reduxForm({
  	form: 'signup_form',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.email) {
  	    	errors.email = 'Email is required';
  	  	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  	      	errors.email = 'Invalid email address'
  	    }
  	    if(!values.password) {
      		errors.password = 'Password is required';
    	} else if( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password) ) {
    		errors.password = 'Password must contain at least 8 characters, at least one number and both lowercase and uppercase letters and special characters';
    	}else if( values.confirm_password && values.password !== values.confirm_password ) {
    		errors.password = 'Password and Confirm password should match';
    	}
    	if (!values.confirm_password) {
        	errors.confirm_password = 'Confirm Password is required';
      	}
  	  	return errors;
  	}
})(SignUp);
export default SignUpForm;