import React from 'react';

const Steps = ({steps}) => {
	return (
		<div className="form-bootstrapWizard">
		    <ul className="bootstrapWizard form-wizard">
		    	{steps.map((value, index) => {
		    		return (
		    			<li key={index} className={value.active ? "active":""} >
		    			    <span className="step">{value.step}</span> <span className="title">{value.title}</span>
		    			</li>
		    		)})
		   		}
		    </ul>
		    <div className="clearfix"></div>
		</div>
	);
};
export default Steps;