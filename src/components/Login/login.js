import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import { push } from 'react-router-redux';
import {AUTH_REQUEST} from '../../constant';
import SocialButton from '../common/SocialButton';
import './Social.css';
const fbAppId = process.env.NODE_ENV === 'production' ? '378734595873730' : '1976692732357771';

class Login extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('login_form'));
	}
	handleSocialLogin = (user) => {
		console.log(user)
	}

	handleSocialLoginFailure = (err) => {
	 	console.error(err)
	}
	render () {
		const {show, hideDialog, showSignUpDialog, handleSubmit, error, submitting, invalid, showForgotPasswordDialog} = this.props;
		return (
			<Modal className="login-popup" show={show} onHide={hideDialog} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Login</Modal.Title>
		        </Modal.Header>
		        <Form onSubmit={handleSubmit(this.formSubmit)}>
		        	<Notify message={error} />
			        <Modal.Body>
			            <Field
							type="text"
							label="Email Or Mobile"
							name="email"
							placeholder="Enter email or mobile"
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
						<a className="forgotLink" onClick={showForgotPasswordDialog}>Forgot Password</a>
			        </Modal.Body>
			        <Modal.Footer>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} 
			      			className="btn-info btn-block" 
			      			buttonSaveLoading="Processing..." 
			      			buttonSave="Login"/>
			        	<p><a className="loginLink" onClick={showSignUpDialog}>Don't have an account?</a></p>
			        	
			        </Modal.Footer>
			       
			    <div>
			        <SocialButton
			          provider='facebook'
			          appId={fbAppId}
			          className="loginBtn loginBtn--facebook"
			          onLoginSuccess={this.handleSocialLogin}
			          onLoginFailure={this.handleSocialLoginFailure}
			        >
			          Login with Facebook
			        </SocialButton>
			     </div>
			      <div>
			        <SocialButton
			          provider='google'
			          className="loginBtn loginBtn--google"
			          appId='452594809515-p2lhpgslg7u38rb3tp5m52rlbq3cks7k.apps.googleusercontent.com'
			          onLoginSuccess={this.handleSocialLogin}
			          onLoginFailure={this.handleSocialLoginFailure}
			        >
			          Login with Google
			        </SocialButton>
			      </div>
			      </Form> 
		    </Modal>
		); 
	}	   
	formSubmit(user) {
		const { dispatch, hideDialog } = this.props;
		return new Promise((resolve, reject) => {
		  	dispatch({
		    	type: AUTH_REQUEST,
		    	user: user,
		    	callbackError: (error) => {
		      		reject(new SubmissionError({_error: error}));
		    	},
		    	callbackSuccess: () => {
		    		hideDialog();
		      		dispatch(push('/myrti/dashboard'));
		      		resolve();
		    	}
		  	})
		});
	}
}
const LoginForm = reduxForm({
  	form: 'login_form',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.email) {
  	    	errors.email = 'Email or mobile is required';
  	  	}
  	    if (!values.password) {
  	        errors.password = 'Password is Required'
  	    }
  	  	return errors;
  	}
})(Login);
export default LoginForm;
