import React from 'react';
import Steps from './Steps';
import PersonalDetail from './PersonalDetail';
import SaveAndContinue from './SaveAndContinue';
import RTIDetail from './RTIDetail';
import SummaryDetail from './SummaryDetail';
import { connect } from "react-redux";
import {RTI_FORM_STEP} from '../../constant';

class ApplyByCategories extends React.Component {
	constructor(props) {
    	super(props)
    	this.nextPage = this.nextPage.bind(this)
    	this.previousPage = this.previousPage.bind(this)
    	this.state = {
      		page: 1
    	}
  	}
  	nextPage(values) {
  		this.props.dispatch({
  			type: RTI_FORM_STEP,
  			rtiFormSteps: values
  		});
  		this.setState({ page: this.state.page + 1 })
  	}

  	previousPage() {
  		this.setState({ page: this.state.page - 1 })
  	}
  	render() {
  		const {category, onSubmit} = this.props;
  		const { page } = this.state;
  		const steps = [{
  			title: 'RTI Details',
  			active: (page === 1) ? true : false,
  			step: 1
  		},{
  			title: 'Personal Details',
  			active: (page === 2) ? true : false,
  			step: 2
  		},{
  			title: 'Save & Continue',
  			active: (page === 3) ? true : false,
  			step: 3
  		}];
    	return(
			<div className="apply padding-40 clearfix">
				<div className="container">
					<div className="container">
						<div className="row">
							<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
								<div id="wid-id-0">
								    <div className="widget-body">
								        <div className="row">
											<div id="bootstrap-wizard-1" className="col-sm-12">
												<Steps steps={steps}/>
												<div className="tab-content">
													{page === 1 && (
													<div className="tab-pane active" id="tab1">
														<br/>
														<RTIDetail onSubmit={this.nextPage} category={category}/>
													</div>
													)}
													{page === 2 && (
													<div className="tab-pane active" id="tab2">
														<br/>
														<PersonalDetail
														previousPage={this.previousPage} 
														onSubmit={this.nextPage} />
													</div>
													)}
													{page === 4 && (
													<div className="tab-pane active" id="tab3">
														<br/>
														<br/>
														<SummaryDetail 
														previousPage={this.previousPage} 
														onSubmit={onSubmit} />
													</div>
													)}
													{page === 3 && (
													<div className="tab-pane active" id="tab4">
														<br/>
														<br/>
														<SaveAndContinue
														previousPage={this.previousPage} 
														onSubmit={onSubmit}/>
													</div>
													)}
												</div>
											</div>
								        </div>
								    </div>
								</div>
							</article>
						</div>    
					</div>
				</div>
			</div>
    	);
  	}    
}

// export the connected class
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(ApplyByCategories);