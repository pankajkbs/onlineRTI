/* global IMAGE_PATH */
import React from 'react';
import Http from '../../lib/Http';
import { Link } from 'react-router-dom';
import {Loader} from '../common/Loader';
import ScrollToTopOnMount from '../common/ScrollToTopOnMount';

class Blog extends React.Component {
	constructor() {
		super();
		this.state = {
			blogContent: []
		}
	}
	componentDidMount() {
		Http.get('get-posts?type=blog&innerType=blog')
		.then(({data}) => this.setState({blogContent: data}))
		.catch(error => console.log(error));
	}
	render() {
		const contentData = this.state.blogContent;

		return (
			<div>
				<ScrollToTopOnMount/>
				<div>
					<div className="track-banner"><h2>RTI Blog</h2></div>
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
	        				              		<p>{value.shortDesc}. <Link to={`blog/${value.slug}`}>Read More</Link></p>
	        								</div>
	        							</div>
	        						</div>
	        					);
	        				})
			        	) : (
			        		<Loader/>
			        	)
			        }
			      </div>
			    </div>
			</div>    
		);
	}
}	

export default Blog;