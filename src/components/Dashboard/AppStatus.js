import React from 'react';
import {Table} from 'react-bootstrap';

const AppStatus = ({rtiinfo}) => {

	return (
		<div className="dashboard-content">
			<div className="dash-head">RTI Application Status</div>
			<div className="row">
				<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
				  	<div id="wid-id-0">
						<div className="widget-body">
						  	<div className="row">
								<div id="bootstrap-wizard-1" className="col-sm-12">
									<Table bordered striped responsive>
										<thead className="bg-info">
										    <tr>
										        <th>Description</th>
										        <th>Date</th>
										        <th>Status</th>
										    </tr>
										</thead>
										<tbody>
											<tr><td className="text-center" colSpan="3">Nothing to display</td></tr>
										</tbody>
									</Table>
								</div>
						  	</div>
						</div>
				  	</div>
				</article>
			</div>
		</div>
	);
}	

export default AppStatus;