import React, {Component} from 'react';
import Banner from './ApplyBanner';
import {connect} from 'react-redux';
import { SHOW_LOGIN_POPUP } from '../../constant';
import { push } from 'react-router-redux';
import Http from '../../lib/Http';
import {Loader} from '../common/Loader';

class ApplyNow extends Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			isLoading: true
		};
	}
	componentDidMount() {
		Http.get('list-categories')
		.then(({data}) => this.setState({categories: data, isLoading: false}) )
		.catch(errors => console.log(errors));
	}
	checkState(value) {
	    const {token, dispatch} = this.props;
	    if( token ) {
	        dispatch(push(`/apply/${value.slug}`));
	    } else {
	        this.props.dispatch({
	            type: SHOW_LOGIN_POPUP,
	            displayLoginPopup: true
	        });
	    }
	}
	render() {
		const {categories, isLoading} = this.state;
		
		return (
			<div>
				<Banner categoryName="Apply Now"/>
				<div className="apply padding-40 clearfix">
					<div className="container">
						<div className="container">
							<div className="row">
								<article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
									<div id="wid-id-0">
									    <div className="widget-body">
									        <div className="row">
												<div id="bootstrap-wizard-1" className="col-sm-12">
													<div className="form-actions">
													    <div className="row">
													        <div className="col-sm-12">
													          	<div className="step-forms padding-top50">
													          		
													          		{isLoading 
			      													? <Loader/>     
			      													:(
													          		    <ul className="services-links">
													          		      {categories.map((value, index) => {
													          		          return (
													          		              <li key={index}>
													          		                <a onClick={() => this.checkState(value)}>{value.title}</a>
													          		              </li>
													          		          );
													          		      })}
													          		    </ul>
													          		)}    
													          		
													        	</div>
													        </div>
													    </div>
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
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(ApplyNow);