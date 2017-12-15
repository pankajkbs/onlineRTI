import React from 'react';
import './TrackingDetails.css';

const TrackingDetails = ({rtiinfo}) => {

	return (
		<div className="dashboard-content">
			<div className="dash-head">Tracking Details</div>
			<div className="row">
				<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
				  	<div id="wid-id-0">
						<div className="widget-body">
						  	<div className="row">
								<div id="bootstrap-wizard-1" className="col-sm-12">
									<div className="manage-iframe" dangerouslySetInnerHTML={{__html:rtiinfo.rtiframe}}></div>
								</div>
						  	</div>
						</div>
				  	</div>
				</article>
			</div>
		</div>
	);
}	

export default TrackingDetails;