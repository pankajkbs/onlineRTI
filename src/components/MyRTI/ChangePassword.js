import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Notify} from '../common/Notify';
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Required} from '../common/validate';
import Http from '../../lib/Http';
import {connect} from 'react-redux';
class ChangePassword extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success: ''
		}
	}
	render(){
		const {handleSubmit, error, submitting, invalid} = this.props;
		const {success} = this.state;
		return (
			<div className="row">
				<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
				  	<div id="wid-id-0">
						<div className="widget-body">
							<div className="form-actions">
							  	<div className="row">
									<div id="bootstrap-wizard-1" className="col-sm-12">
										<div className="track">
											<Form className="rti-application-form clearfix" onSubmit={handleSubmit(this.formSubmit)}>		
												<div className="main-head-black-mid">Change Password</div>	
												<div className="balanceMargin">
													<Notify message={error || success} type={error ? 'danger': 'success'}/>
												</div>						
								            	<Field
								    				type="password"
								    				label="Old Password"
								    				name="old"
								    				formGroupClassName="padding-top50"
								    				placeholder="Enter your old password"
								    				theme="custom"
								    				doValidateWithStackedForm={true}
								    				component={FormField}
								    				validate={Required}
								    			/>
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
							    			  	<FormSubmit 
						    						error={error} invalid={invalid} 
						    						submitting={submitting} className="btn btn-info btn-block italic-font" 
						    						buttonSave="Change Password"
						    						buttonSaveLoading="Processing..."/>
											</Form>  
										</div>  
									</div>
							  	</div>
						  	</div>
						</div>
				  	</div>
				</article>
			</div>
		)
	}
	formSubmit(values) {
		const {dispatch, reset, user} = this.props;
		const request = {
			password: values.password,
			_id: user._id,
			old: values.old
		};
		return new Promise((resolve, reject) => {
			Http.put('change-password', request)
			.then(res => {
				this.setState({success: res.message});
				dispatch(reset('change_password_form'));
				setTimeout(() => this.setState({success:''}), 5000);
			})
			.catch(errors => reject(new SubmissionError({_error: errors.message})) )
		});
	}
}
const _ChangePassword = reduxForm({
  	form: 'change_password_form',
  	validate: (values) => {
  	  	const errors = {};	
  	  	if(!values.old) {
      		errors.old = 'old Password is required';
    	}
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
})(ChangePassword);

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(_ChangePassword);