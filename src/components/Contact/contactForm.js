import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Notify} from '../common/Notify';
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Required, Email} from '../common/validate';
import Http from '../../lib/Http';

class ContactForm extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			success: ''
		}
	}
	render() {
		const {handleSubmit, error, submitting, invalid} = this.props;
		const {success} = this.state;
		return(
			<div className="col-md-12 col-sm-12 col-xs-12">
			  	<div className="track mob-margin-bottom-20 clearfix">
			      	<Form className="rti-application-form clearfix" onSubmit={handleSubmit(this.formSubmit)}>
			      		<Notify message={error || success} type={error ? 'danger': 'success'}/>
			        	<div className="main-head-black-mid">Any Other Query</div>
			        	<Field
							type="text"
							label="First Name"
							name="firstname"
							placeholder="Enter Firstname"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
							validate={Required}
						/>
						<Field
							type="text"
							label="Last Name"
							name="lastname"
							placeholder="Enter Lastname"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
							validate={Required}
						/>
						<Field
							type="email"
							label="Email Address"
							name="email"
							placeholder="Enter Email Address"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
							validate={[Required,Email]}
						/>
						<Field
							label="Enter Your Message"
							name="message"
							placeholder="Enter Your Message"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
							validate={Required}
							rows="3"
							componentClass="textarea"
						/>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} className="btn btn-info btn-block italic-font" 
			      			buttonSaveLoading="Processing..."/>
			      	</Form>
			  	</div>
			</div>		  	
		);
	}
	formSubmit(values) {
		const {dispatch, reset} = this.props;
		return new Promise((resolve, reject) => {
			Http.post('/contact-rtiguru', values)
			.then(response => {
				resolve();
				this.setState({success: response.message});
				setTimeout(() => {
					this.setState({success: ''});
					dispatch(reset('contact_form'));
				},3000);
			})
			.catch(({errors}) => reject(new SubmissionError({_error: 'Internal Server Error!'})))
		});
	}
}
const _ContactForm = reduxForm({
  	form: 'contact_form',
})(ContactForm);  	
export default _ContactForm;