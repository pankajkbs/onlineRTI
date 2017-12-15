import React, {Component} from 'react';
import './MyRTI.css';
import {Loader} from '../common/Loader';
import moment from 'moment';
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from 'react-bootstrap';
import Http from '../../lib/Http';
import {connect} from 'react-redux';
class MyRTIList extends Component {
	constructor() {
		super();
		this.state = {
			myrti: [],
			processing: false
		}
	}
	componentDidMount() {
		const {_id} = this.props.user;
		this.setState({processing: true});

		Http.get(`my-rtis?_id=${_id}`)
		.then(({data}) => this.setState({myrti: data, processing: false}))
		.catch(error => console.log(error));
	}
	render() {
		const {myrti, processing} = this.state;
		return (
			<div>
				{
					processing ? 
					(<div className="marginTop80">
						<Loader small={true}/>
						<p className="text-center marginInverse47"><strong>Loading ...</strong></p>
					</div>) :
					(myrti.length === 0 ?
						(<div className="noContent">
							<p className="icon">
								<i className="fa fa-list-alt" aria-hidden="true"></i>
							</p>
							<p>
								<strong>No RTI listing</strong>
							</p>
						</div>):
						(myrti.map((value, index) => {
							return (
								<div className="applicationBox" key={index}>
									<div className="applicationDate">
										<span>{moment(value.created_at).format('DD')}</span>
										<text>{moment(value.created_at).format('MMM YY')}</text>
									</div>
									<div className="row">
										<div className="col-sm-8">
											<div className="tag_1">RTI Application Number: {value.rtino}</div>
											<div className="tag_2">Tracking Number: 4525464464SKFDHHD</div>
											<div className="tag_3">Filed Date: {moment(value.created_at).format('DD/mm/YY')}</div>
											<div className="processTabs row">
												  <article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
												      <div id="wid-id-0">
											              <div className="widget-body">

											                  <div className="row">
										                          <div id="bootstrap-wizard-1" className="col-sm-12">
										                              <div className="form-bootstrapWizard">
										                                  <ul className="bootstrapWizard form-wizard">
										                                      <li className={value.progress === 1 ? "active" : ""} data-target="#step1">
										                                          <span className="step">1</span> <span className="title">Started</span>
										                                      </li>
										                                      <li data-target="#step2" className={value.progress === 2 ? "active" : ""}>
										                                          <span className="step">2</span> <span className="title">Approval</span> 
										                                      </li>
										                                      <li data-target="#step3" className={value.progress === 3 ? "active" : ""}>
										                                          <span className="step">3</span> <span className="title">Filed</span> 
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
										</div>
										<div className="col-sm-4">
											<button type="button" className="btn btn-info btn-block italic-font" disabled>Download RTI</button>
											<LinkContainer to={`/dashboard/app-progress/${value.rtino}`}>
												<Button bsStyle="primary" bsClass="btn btn-primary btn-block italic-font">Detail</Button>
											</LinkContainer>	
										</div>
									</div>
								</div>
							)
						}) )
					)
				}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(MyRTIList);