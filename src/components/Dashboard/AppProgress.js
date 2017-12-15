import React from 'react';

const AppProgress = ({rtiinfo}) => {
	let appProgress = '';
	if( rtiinfo.progress === 0 ) {
		appProgress = 'not been initiated yet';
	} else if ( rtiinfo.progress === 1 ) {
		appProgress = 'has been started';
	} else if ( rtiinfo.progress === 2 ) {
		appProgress = 'has been approved';
	} else if ( rtiinfo.progress === 3 ) {
		appProgress = 'has been filed';
	}

	return (
		<div className="dashboard-content">
			<div className="dash-head">Application progress</div>
			<div className="row">
				<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
				  	<div id="wid-id-0">
						<div className="widget-body">
						  	<div className="row">
								<div id="bootstrap-wizard-1" className="col-sm-12">
							  		<div className="form-bootstrapWizard">
								      	<ul className="bootstrapWizard form-wizard">
								          	<li className={rtiinfo.progress === 1 ? "active" : ""}>
								              	<a> 
								              		<span className="step">1</span> <span className="title">Started</span> 
								              	</a>
								          	</li>
								          	<li className={rtiinfo.progress === 2 ? "active" : ""}>
								              	<a> 
								              		<span className="step">2</span> <span className="title">Approval</span> 
								              	</a>
								          	</li>
								          	<li className={rtiinfo.progress === 3 ? "active" : ""}>
								              	<a> 
								              		<span className="step">3</span> <span className="title">Filed</span> 
								              	</a>
								          	</li>
								      	</ul>
							      		<div className="clearfix"></div>
							  		</div>
								</div>
						  	</div>
						</div>
				  	</div>
				</article>
			</div>
			<div className="dash-head-sub">Your RTI Application { appProgress}</div>
			{/*<div className="tracking-num text-center">Tracking Number, EK352199231IN
				<div className="payment-details">Payment Details: 40F-42069</div>
			</div>*/}
		</div>
	);
}	

export default AppProgress;