/* global _ */
import React from 'react';
import {Form} from "react-bootstrap";
import FormField from "../common/FormField";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

class PersonalDetail extends React.Component {
  	render() {
  		const { previousPage, handleSubmit, invalid, submitting} = this.props;
    	return (
			<div className="form-actions">
				<div className="row">
					<div className="col-sm-12">
						<div className="step-forms padding-top50">
							<Form onSubmit={handleSubmit}>
						    	<div className="main-head-black-mid">PERSONAL DETAILS</div>
							    <div className="row padding-top50">
							        <Field 
					      				component={FormField} 
					      				type="text"
					      				name="firstname"
					      				placeholder="First Name of RTI Applicant"
					      				col={6}
					      				doValidate={true}/>
							        <Field 
					      				component={FormField} 
					      				type="text"
					      				name="lastname"
					      				placeholder="Last Name of RTI Applicant"
					      				col={6}
					      				doValidate={true}/>
							    </div>

							    <div className="row">
							        <Field 
					      				component={FormField} 
					      				type="email"
					      				name="email"
					      				placeholder="Your Email address"
					      				col={6}
					      				doValidate={true}/>
					      			<Field 
					      				component={FormField} 
					      				type="text"
					      				name="phone"
					      				placeholder="Your Phone or Mobile Number"
					      				col={6}
					      				doValidate={true}/>
							    </div>

							    <div className="row">
							        {/*<Field 
					      				component={FormField} 
					      				type="text"
					      				name="mobile"
					      				placeholder="Mobile"
					      				col={6}
					      				doValidate={true}/>*/}
							        <Field 
					      				component={FormField} 
					      				type="text"
					      				name="pincode"
					      				placeholder="Your Pincode here"
					      				col={6}
					      				doValidate={true}/>
							    </div>

							    <div className="row">
							        <Field 
					      				component={FormField} 
					      				componentClass="textarea"
					      				rows="3"
					      				name="address"
					      				placeholder="Write your complete postal address here"
					      				col={12}
					      				doValidate={true}/>
						    	</div>
						    	<div className="row">
						    		<div className="col-sm-6">
						    			<button type="button" onClick={previousPage} className="btn btn-info btn-block italic-font pull-left">Previous</button>
						    		</div>	
						    		<div className="col-sm-6">
						    			<button type="submit" disabled={invalid || submitting} className="btn btn-info btn-block italic-font pull-rght">Next</button>
						    		</div>
						    	</div>
						  </Form>
						</div>
					</div>
				</div>
			</div>
    	);
  	}
}

const PersonalDetailForm = reduxForm({
  	form: 'rti_form', // <------ same form name
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  	validate: (values) => {
  		const errors = {};
  		if(!values.firstname) {
      		errors.firstname = 'Firstname is required';
    	}
    	if(!values.lastname) {
      		errors.lastname = 'Lastname is required';
    	}
    	if(!values.pincode) {
      		errors.pincode = 'Pincode is required';
    	}else if(!/^[1-9][0-9]{5}$/i.test(values.pincode)) {
    		errors.pincode = 'Invalid pincode, must be 6 digits';
    	}
    	if(!values.address) {
      		errors.address = 'Address is required';
    	}
    	if(!values.email) {
      		errors.email = 'Email is required';
    	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        	errors.email = 'Invalid email address'
      	}
      	if(!values.phone) {
      		errors.phone = 'Phone No is required';
    	} else if(!/^(0|[1-9][0-9]{9})$/i.test(values.phone)) {
    		errors.phone = 'Invalid phone number, must be 10 digits';
    	}
    	/*if(!values.mobile) {
      		errors.mobile = 'Mobile No is required';
    	} else if(!/^[789]\d{9}$/i.test(values.mobile)) {
    		errors.mobile = 'Invalid phone number, must be 10 digits';
    	}*/
    	
    	return errors;
  	}
})(PersonalDetail);

const mapStateToProps = (state) => {
	const {rtiFormStep} = state;
	if( !_.isEmpty(rtiFormStep.data) ) {
		const formData = JSON.parse(rtiFormStep.data);
		return ({
			initialValues: formData
		});	
	} else {
		return ({});
	}
}

export default connect(mapStateToProps)(PersonalDetailForm);