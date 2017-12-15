/* global IMAGE_PATH */
import React from 'react';
import Http from '../../lib/Http';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinner';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			aboutContent: []
		}
	}
	componentDidMount() {
		Http.get('get-posts?type=blog&innerType=about')
		.then(({data}) => this.setState({aboutContent: data}))
		.catch(error => console.log(error));
	}
	render() {
		const contentData = this.state.aboutContent,
		style = {
      		height: 50,
      		width: 50,
      		backgroundColor: 'black',
      		position: 'relative',
      		top: 200,
      		left: '50%'
    	};
		return (
			<div>
				<div>
					<div className="track-banner"><h2>About Us</h2></div>
				</div>
				<div className="about-us-rti padding-40 clearfix">
			      <div className="container">
			        {contentData.length > 0 ? (
			        		contentData.map((value, index) => {
	        					return (
	        						<div className="row" key={index}>
	        							<div className={"col-sm-6 " + ((index % 2) ? 'col-sm-push-6':'')}>
	        								<div className="about-img">
	        									<img src={IMAGE_PATH + value.image} alt={value.title}/>
	        								</div>
	        							</div>
	        							<div className={"col-sm-6 " + ((index % 2) ? 'col-sm-pull-6':'')}>
	        								<div className="about-content">
	        									<h2>{value.title}</h2>
	        				              		<p>{value.shortDesc}. <Link to={`about/${value.slug}`}>Read More</Link></p>
	        								</div>
	        							</div>
	        						</div>
	        					);

	        				})
			        	) : (
			        		<div style={style}><Spinner /></div>
			        	)
			        }
			      </div>
			    </div>
			</div>    
		);
	}
}	

export default About;