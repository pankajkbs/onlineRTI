import React from 'react';
import TestimonialSlider from './TestimonialSlider';

import RightArrowIcon from '../../assets/images/rightArrow.png';
import LeftArrowIcon from '../../assets/images/leftArrow.png';

const Testimonials = () => (
	<div className="our-happy-customer padding-40 clearfix">
		<div className="container">
			<div className="main-head-black-mid">Our Happy Customer</div>
			<div className="customer_slider padding-top50">
				<div className="happy-customer-slider owl-theme">
					<TestimonialSlider />
				</div>
			</div>
			<div className="nav"></div>
			<div className="left-arrow"><img src={RightArrowIcon} alt="right-arrow" /></div>
			<div className="right-arrow"><img src={LeftArrowIcon} alt="left-arrow" /></div>
		</div>
	</div>
);
export default Testimonials;