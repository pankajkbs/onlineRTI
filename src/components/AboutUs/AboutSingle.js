/* global IMAGE_PATH */
import React from 'react';
import Http from '../../lib/Http';

class AboutSingle extends React.Component {
	constructor() {
		super();
		this.state = {
			singleData: {}
		}
	}
	componentDidMount() {
		const slug = this.props.match.params.slug;
		Http.get(`get-a-post?type=blog&innerType=about&slug=${slug}`)
		.then(({data}) => this.setState({singleData: data}))
		.catch(error => console.log(error));
	}
	render() {
		const contentData = this.state.singleData;
		return (
			<div>
				<div>
					<div className="track-banner"><h2>{ contentData.title || 'About Us'}</h2></div>
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
	}
}	

export default AboutSingle;