/* global IMAGE_PATH, _ */
import React from 'react';
import Http from '../../lib/Http';
import {Loader} from '../common/Loader';
import ScrollToTopOnMount from '../common/ScrollToTopOnMount';

class BlogSingle extends React.Component {
	constructor() {
		super();
		this.state = {
			singleData: {}
		}
	}
	componentDidMount() {
		const slug = this.props.match.params.slug;
		Http.get(`get-a-post?type=blog&innerType=blog&slug=${slug}`)
		.then(({data}) => this.setState({singleData: data}))
		.catch(error => console.log(error));
	}
	render() {
		const contentData = this.state.singleData;
		if( !_.isEmpty(contentData) ) {
			return (
				<div>
					<div>
						<div className="track-banner"><h2>{ contentData.title || 'RTI Blog'}</h2></div>
					</div>
					<div className="about-us-rti padding-40 clearfix">
				      <div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="about-img">
										<img src={IMAGE_PATH + contentData.image} alt={contentData.title}/>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="about-content">
										<h2>{contentData.title}</h2>
					              		<p dangerouslySetInnerHTML={{__html: contentData.content}}></p>
									</div>
								</div>
							</div>
				      </div>
				    </div>
				</div>    
			);
		} else {
			return(
				<div>
					<ScrollToTopOnMount />
					<Loader/>
				</div>	
			);	
		}
		
	}
}	

export default BlogSingle;