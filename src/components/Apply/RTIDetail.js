/* global _ */
import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import {Required} from '../common/validate';
import {Loader} from '../common/Loader';
import ScrollToTopOnMount from '../common/ScrollToTopOnMount';
class RTIDetail extends Component {
	render(){
		const { error, handleSubmit, invalid, submitting, category} = this.props;
		if(!_.isEmpty(category)) {
			return (
				<div className="form-actions">
				    <div className="row">
				        <div className="col-sm-12">
				          	<div className="step-forms padding-top50">
				          		
					          	<Form className=" clearfix" onSubmit={handleSubmit}>
					              	<div className="main-head-black-mid">RTI DETAILS</div>
									{ category.form.map((value, index) => (
										<div key={index} className={index === 0 ? "row padding-top50" : "row"}>
											<Field 
												validate={Required}
							      				component={FormField} type={value.type === "textarea" ? "textarea": "text"}
							      				name={value.key} label={value.field} 
							      				componentClass={value.type === "textarea" ? "textarea": "input"}
							      				placeholder={value.field}
							      				col={12}
							      				doValidate={true}/>
										</div>
									))}
					              <FormSubmit 
						      			error={error} invalid={invalid} 
						      			submitting={submitting} className="btn btn-info btn-block italic-font" buttonSaveLoading="Processing..." buttonSave="Next"/>
					            </Form>
				        	</div>
				        </div>
				    </div>
				</div>
			);
		} else {
			return (
				<div>
					<ScrollToTopOnMount />
					<Loader/>
				</div>
			)
		}	
	}
}


const RTIDetailForm = reduxForm({
  	form: 'rti_form', // <------ same form name
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(RTIDetail);


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

export default connect(mapStateToProps)(RTIDetailForm);