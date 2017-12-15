/* global IMAGE_PATH */
import React from 'react';
import Slider from 'react-slick';
import Http from '../../lib/Http';
import {LinkContainer} from 'react-router-bootstrap';

class BlogListSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			blogs: []
		}
	}
	componentDidMount() {
		Http.get('get-posts?type=blog&innerType=blog')
		.then(({data}) => this.setState({blogs: data}))
		.catch(error => console.log(error));
	}
	render () {
		let slides = this.state.blogs,
		settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
		    {
		      breakpoint: 639,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }]
		};
		return (
			<Slider {...settings}>
				{slides ?
					slides.map((blogValue, index) => {
						return (
							<div className="item" key={index}>
								<div className="blogbox">
									<img src={IMAGE_PATH + blogValue.image} alt={blogValue.title} />
									<LinkContainer to={`blog/${blogValue.slug}`}><a className="text-center">{blogValue.title}</a></LinkContainer>
									<p className="italic-font">
										{blogValue.shortDesc}
									</p>
								</div>
							</div>
						);
					})
					: (
						<div>Loading ...</div>
					)
				}
			</Slider>
		);
	}
}

export default BlogListSlider;