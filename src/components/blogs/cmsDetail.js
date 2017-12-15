/* global IMAGE_PATH, _ */
import React from 'react';
import Http from '../../lib/Http';
import {Loader} from '../common/Loader';
import ScrollToTopOnMount from '../common/ScrollToTopOnMount';

class CMSDetail extends React.Component {
	constructor() {
		super();
		this.state = {
			singleData: {},
			isLoading: false
		}
	}
	componentDidMount() {
		this.fetchBySlug(this.props.match.params.slug);
	}
	componentWillReceiveProps(newProps) {
		this.fetchBySlug(newProps.match.params.slug);
	}
	fetchBySlug(slug) {
		this.setState({isLoading: true});
		Http.get(`get-a-post?type=page&slug=${slug}`)
		.then(({data}) => this.setState({singleData: data, isLoading: false}))
		.catch(error => console.log(error));
	}
	render() {
		const contentData = this.state.singleData;
		const { isLoading } = this.state;
		
		return (
			<div>
				<ScrollToTopOnMount/>
				<div>
					<div className="track-banner"><h2>{ contentData.title || ''}</h2></div>
				</div>
				<div className="about-us-rti padding-40 clearfix">
			      <div className="container">
			      		{isLoading 
			      			? <Loader/> 
			      			: (
			      				!_.isEmpty(contentData) ? 
			      				(<div className="row">
									<div className="col-sm-12">
										<div className="about-img">
											<img src={IMAGE_PATH + contentData.image} alt={contentData.title}/>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="about-content">
											{/*<h2>{contentData.title}</h2>*/}
						              		<p dangerouslySetInnerHTML={{__html: contentData.content}}></p>
										</div>
									</div>
								</div>
								) : (
								<div>
									<div className="track-banner"><h2>No content</h2></div>
								</div>)
			      			) 
			      		}
			      </div>
			    </div>
			</div> 
		);	   
			
	}
}	

export default CMSDetail;