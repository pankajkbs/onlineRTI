import React from 'react';
import BlogListSlider from './BlogListSlider';
import RightArrowIcon from '../../assets/images/rightArrow.png';
import LeftArrowIcon from '../../assets/images/leftArrow.png';

const BlogList = () => (
	<div className="our-recent-blog padding-40 clearfix">
		<div className="container">
			<div className="main-head-black-mid">Our Recent Blog</div>
			<div className="customer_slider customer_slider-second padding-top50">
				
					<BlogListSlider />
				
			</div>
			<div className="left-turn"><img src={RightArrowIcon} alt="RightArrowIcon" /></div>
			<div className="right-turn"><img src={LeftArrowIcon} alt="RightArrowIcon" /></div>
		</div>
	</div>
);
export default BlogList;