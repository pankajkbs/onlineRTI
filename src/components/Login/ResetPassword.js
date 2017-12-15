import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import Http from '../../lib/Http';
import { push } from 'react-router-redux';
import {Required} from '../common/validate';

class ResetPassword extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success:'',
			toggleDialog: false
		}
	}
	componentDidMount() {
		this.setState({toggleDialog: true});
	}
	hideDialog() {
		this.setState({toggleDialog: false});	
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('ResetPasswordForm'));
	}
	render () {
		const {handleSubmit, error, submitting, invalid} = this.props;
		const {toggleDialog, success} = this.state;
		return (
			<Modal className="login-popup" show={toggleDialog} onHide={() => this.hideDialog()} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Reset Password</Modal.Title>
		        </Modal.Header>
		        <Form onSubmit={handleSubmit(this.formSubmit)}>
		        	<Notify message={error || success} type={error ? 'danger': 'success'}/>
			        <Modal.Body>
			            <Field
			            	type="password"
			            	label="New Password"
			            	name="password"
			            	placeholder="Enter new password"
			            	theme="custom"
			            	doValidateWithStackedForm={true}
			            	component={FormField}
			            />
			            <Field
			            	type="password"
			            	label="Confirm Password"
			            	name="confirm_password"
			            	placeholder="Enter new password"
			            	theme="custom"
			            	doValidateWithStackedForm={true}
			            	component={FormField}
			            	validate={Required}
			            />
						
			        </Modal.Body>
			        <Modal.Footer>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} 
			      			className="btn-info btn-block" 
			      			buttonSaveLoading="Processing..." 
			      			buttonSave="Reset Password"/>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
	formSubmit(user) {
		const { dispatch, reset, salt } = this.props;
		
		const request = {
			salt,
			password: user.password
		}
		return new Promise((resolve, reject) => {
		  	Http.post('reset-password', request)
		  	.then(res => {
				this.setState({success: res.message});
				dispatch(reset('ResetPasswordForm'));
				setTimeout(() => {
					this.setState({success:''});
					this.hideDialog();
					dispatch(push('/'));
				}, 5000);
			})
			.catch(errors => reject(new SubmissionError({_error: errors.message})) )
		});
	}
}
const ResetPasswordForm = reduxForm({
  	form: 'ResetPasswordForm',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.password) {
      		errors.password = 'New Password is required';
    	}else if( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password) ) {
    		errors.password = 'Password must contain at least 8 characters, at least one number and both lowercase and uppercase letters and special characters';
    	}else if(values.confirm_password && values.password !== values.confirm_password) {
    		errors.password = 'Password and confirm password must match';	
    	}
  	  	
  	  	if(!values.confirm_password) {
  	    	errors.confirm_password = 'Password and confirm password must match';
  	    }
  	  	return errors;
  	}
})(ResetPassword);
export default ResetPasswordForm;