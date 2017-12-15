import React from 'react';
import {Alert} from "react-bootstrap";

export const FormErrors = ({ formErrors }) => 
	<div>
		{Object.keys(formErrors).map((fieldName, i) => {
			if(formErrors[fieldName].length > 0){
				return (
					<Alert bsStyle="danger" key={i}>
				    	<strong>Error!</strong> {formErrors[fieldName]}
				  	</Alert>
				);
			} else {
				return '';
			}	
	  	})}
	</div>  	
