import React from 'react';
import {Form} from 'react-bootstrap';
import FormField from "../common/FormField";
import { Field, reduxForm } from 'redux-form';

const EditProfile = ({rtiinfo}) => {

	return (
		<div className="dashboard-content">
			<div className="dash-head">Sorry! You can't change your details at this stage</div>
			<div className="row">
				<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
				  	<div id="wid-id-0">
						<div className="widget-body">
							<div className="form-actions">
							  	<div className="row">
									<div id="bootstrap-wizard-1" className="col-sm-12">
										<div className="step-forms" style={{marginTop: 0}}>
											<Form>								
											    <div className="row">
											        <Field 
									      				component={FormField} 
									      				type="text"
									      				label="Firstname"
									      				name="firstname"
									      				placeholder="First Name"
									      				disabled={true}
									      				theme="custom"
									      				doValidate={true}
									      				col={6}/>
											        <Field 
									      				component={FormField} 
									      				label="Lastname"
									      				type="text"
									      				name="lastname"
									      				placeholder="Last Name"
									      				disabled={true}
									      				doValidate={true}
									      				theme="custom"
									      				col={6}/>
											    </div>
											    <div className="row">
											        <Field 
									      				component={FormField} 
									      				type="email"
									      				label="Email"
									      				name="email"
									      				placeholder="Email"
									      				disabled={true}
									      				theme="custom"
									      				doValidate={true}
									      				col={6}/>
											        <Field 
									      				component={FormField} 
									      				label="Phone"
									      				type="text"
									      				name="phone"
									      				placeholder="Phone"
									      				disabled={true}
									      				doValidate={true}
									      				theme="custom"
									      				col={6}/>
											    </div>
								    		    <div className="row">
								    		        <Field 
								    		        	label="Address"
								    		        	theme="custom"
								          				component={FormField} 
								          				componentClass="textarea"
								          				rows="3"
								          				name="address"
								          				placeholder="Write your complete postal address here"
								          				col={12}
								          				doValidate={true}/>
								    	    	</div>
											</Form>  
										</div>  
									</div>
							  	</div>
						  	</div>
						</div>
				  	</div>
				</article>
			</div>
		</div>
	);
}	

const EditProfileForm = reduxForm({
	'form': 'EditProfileForm'
})(EditProfile);
export default EditProfileForm;